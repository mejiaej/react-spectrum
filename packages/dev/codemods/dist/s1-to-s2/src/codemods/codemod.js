"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = transformer;
/* eslint-disable max-depth */
const utils_1 = require("./utils");
const changes_1 = require("./changes");
const transforms_1 = require("./transforms");
const getComponents_1 = require("../getComponents");
const iconMap_1 = require("../iconMap");
const recast_1 = require("recast");
const t = __importStar(require("@babel/types"));
const styleProps_1 = require("./styleProps");
const traverse_1 = __importDefault(require("@babel/traverse"));
// Determine list of available components in S2 from index.ts
let availableComponents = (0, getComponents_1.getComponents)();
// These components in v3 were replaced by divs
availableComponents.add('View');
availableComponents.add('Flex');
availableComponents.add('Grid');
availableComponents.add('Well');
// Replaced by collection component-specific items
availableComponents.add('Item');
availableComponents.add('Section');
// Don't update v3 Provider
availableComponents.delete('Provider');
// Replaced by ActionButtonGroup and ToggleButtonGroup
availableComponents.add('ActionGroup');
function transformer(file, api, options) {
    let j = api.jscodeshift.withParser({
        parse(source) {
            return (0, recast_1.parse)(source, {
                parser: require('recast/parsers/babel')
            });
        }
    });
    let root = j(file.source);
    let componentsToTransform = options.components ? new Set(options.components.split(',').filter(s => availableComponents.has(s))) : availableComponents;
    let bindings = [];
    let importedComponents = new Map();
    let elements = [];
    let lastImportPath = null;
    let iconImports = new Map();
    const leadingComments = root.find(j.Program).get('body', 0).node.leadingComments;
    (0, traverse_1.default)(root.paths()[0].node, {
        ImportDeclaration(path) {
            if (path.node.source.value === '@adobe/react-spectrum' || (path.node.source.value.startsWith('@react-spectrum/') && path.node.source.value !== '@react-spectrum/s2')) {
                lastImportPath = path;
                for (let specifier of path.node.specifiers) {
                    if (specifier.type === 'ImportNamespaceSpecifier') {
                        // e.g. import * as RSP from '@adobe/react-spectrum';
                        let binding = path.scope.getBinding(specifier.local.name);
                        let clonedSpecifier = t.cloneNode(specifier);
                        if (binding) {
                            let isUsed = false;
                            for (let path of binding.referencePaths) {
                                if (path.parentPath?.isJSXMemberExpression() && componentsToTransform.has(path.parentPath.node.property.name) && path.parentPath.parentPath.parentPath?.isJSXElement()) {
                                    importedComponents.set(path.parentPath.node.property.name, clonedSpecifier);
                                    elements.push([path.parentPath.node.property.name, path.parentPath.parentPath.parentPath]);
                                }
                                else {
                                    isUsed = true;
                                }
                            }
                            if (!isUsed) {
                                bindings.push(binding);
                            }
                            else {
                                let name;
                                let i = 0;
                                do {
                                    name = `${specifier.local.name}${++i}`;
                                } while (path.scope.hasBinding(name));
                                clonedSpecifier.local = t.identifier(name);
                            }
                        }
                    }
                    else if (specifier.type === 'ImportSpecifier' &&
                        typeof specifier.local.name === 'string' &&
                        specifier.imported.type === 'Identifier' &&
                        typeof specifier.imported.name === 'string' &&
                        componentsToTransform.has(specifier.imported.name)) {
                        // e.g. import {Button} from '@adobe/react-spectrum';
                        let binding = path.scope.getBinding(specifier.local.name);
                        if (binding) {
                            importedComponents.set(specifier.imported.name, specifier);
                            bindings.push(binding);
                            for (let path of binding.referencePaths) {
                                if (path.parentPath?.isJSXOpeningElement() && path.parentPath.parentPath.isJSXElement()) {
                                    elements.push([specifier.imported.name, path.parentPath.parentPath]);
                                }
                            }
                        }
                    }
                }
            }
            else if (path.node.source.value.startsWith('@spectrum-icons/workflow/')) {
                let importSource = path.node.source.value;
                let iconName = importSource.split('/').pop();
                if (!iconName) {
                    return;
                }
                let specifier = path.node.specifiers[0];
                if (!specifier || !t.isImportDefaultSpecifier(specifier)) {
                    return;
                }
                let localName = specifier.local.name;
                if (iconMap_1.iconMap.has(iconName)) {
                    let newIconName = iconMap_1.iconMap.get(iconName);
                    iconImports.set(localName, { path, newName: newIconName });
                }
                else {
                    iconImports.set(localName, { path, newName: null });
                }
            }
        },
        Import(path) {
            let call = path.parentPath;
            if (!call?.isCallExpression()) {
                return;
            }
            let arg = call.node.arguments[0];
            if (arg.type !== 'StringLiteral') {
                return;
            }
            if (arg.value !== '@adobe/react-spectrum' && !arg.value.startsWith('@react-spectrum/')) {
                return;
            }
            // TODO: implement this. could be a bit challenging. punting for now.
            (0, utils_1.addComment)(call.node, ' TODO(S2-upgrade): check this dynamic import');
        },
        JSXOpeningElement(path) {
            let name = path.node.name;
            if (t.isJSXIdentifier(name) && iconImports.has(name.name)) {
                let iconInfo = iconImports.get(name.name);
                if (iconInfo.newName === null) {
                    (0, utils_1.addComment)(path.node, ` TODO(S2-upgrade): A Spectrum 2 equivalent to '${name.name}' was not found. Please update this icon manually.`);
                }
            }
        }
    });
    iconImports.forEach((iconInfo, localName) => {
        let { path, newName } = iconInfo;
        if (newName) {
            let newImportSource = `@react-spectrum/s2/icons/${newName}`;
            // Check if we can update local name
            let newLocalName = localName;
            if (localName === path.node.source.value.split('/').pop() && localName !== newName) {
                let binding = path.scope.getBinding(localName);
                if (binding && !path.scope.hasBinding(newName)) {
                    newLocalName = newName;
                    // Rename all references
                    binding.referencePaths.forEach(refPath => {
                        if (t.isJSXIdentifier(refPath.node)) {
                            refPath.node.name = newName;
                        }
                    });
                }
            }
            // Update the import
            path.node.source = t.stringLiteral(newImportSource);
            path.node.specifiers = [t.importDefaultSpecifier(t.identifier(newLocalName))];
        }
    });
    let hasMacros = false;
    let usedLightDark = false;
    elements.forEach(([elementName, path]) => {
        if (!path.node) {
            return;
        }
        try {
            let res = (0, styleProps_1.transformStyleProps)(path, elementName);
            if (res) {
                hasMacros || (hasMacros = res.hasMacros);
                usedLightDark || (usedLightDark = res.usedLightDark);
            }
        }
        catch (error) {
            (0, utils_1.addComment)(path.node, ' TODO(S2-upgrade): Could not transform style prop automatically: ' + error);
        }
        const componentInfo = changes_1.changes[elementName];
        if (!componentInfo) {
            return;
        }
        const { changes } = componentInfo;
        changes.forEach((change) => {
            const { function: functionInfo } = change;
            let { name: functionName, args: functionArgs } = functionInfo;
            // Call the respective transformation function
            if (transforms_1.functionMap[functionName]) {
                transforms_1.functionMap[functionName](path, functionArgs);
            }
        });
    });
    if (hasMacros) {
        let specifiers = [t.importSpecifier(t.identifier('style'), t.identifier('style'))];
        if (usedLightDark) {
            specifiers.push(t.importSpecifier(t.identifier('lightDark'), t.identifier('lightDark')));
        }
        let macroImport = t.importDeclaration(specifiers, t.stringLiteral('@react-spectrum/s2/style'));
        macroImport.assertions = [t.importAttribute(t.identifier('type'), t.stringLiteral('macro'))];
        lastImportPath.insertAfter(macroImport);
    }
    if (importedComponents.size) {
        // Add imports to existing @react-spectrum/s2 import if it exists, otherwise add a new one.
        let importSpecifiers = new Set([...importedComponents]
            .filter(([c]) => c !== 'Flex' && c !== 'Grid' && c !== 'View' && c !== 'Item' && c !== 'Section' && c !== 'ActionGroup')
            .map(([, specifier]) => specifier));
        let existingImport = root.find(j.ImportDeclaration, {
            source: { value: '@react-spectrum/s2' }
        });
        if (existingImport.length) {
            let importDecl = existingImport.get();
            for (let specifier of importDecl.node.specifiers) {
                if (specifier.type === 'ImportSpecifier'
                    && importedComponents.has(specifier.imported.name)) {
                    importSpecifiers.add(specifier);
                }
            }
            // add importSpecifiers to existing import
            importDecl.value.specifiers = [...importDecl.value.specifiers, ...[...importSpecifiers].filter(specifier => {
                    // @ts-ignore
                    return specifier.imported.name !== 'Item' && ![...importDecl.value.specifiers].find(s => s.imported.name === specifier.imported.name);
                })];
        }
        else {
            if (importSpecifiers.size > 0) {
                let importDecl = t.importDeclaration([...importSpecifiers], t.stringLiteral('@react-spectrum/s2'));
                lastImportPath.insertAfter(importDecl);
            }
        }
        // Remove the original imports from v3.
        bindings.forEach(b => {
            if (t.isImportSpecifier(b.path.node) &&
                t.isIdentifier(b.path.node.imported) &&
                (b.path.node.imported.name === 'Item' || b.path.node.imported.name === 'Section')) {
                // Keep Item and Section imports if they are still used
                bindings[0]?.path.scope.crawl();
                if (bindings[0]?.path.scope.bindings[b.path.node.local.name]?.referencePaths.length > 0) {
                    return;
                }
            }
            b.path.remove();
            // If the import statement is now empty, remove it entirely.
            let decl = b.path.find(p => p.isImportDeclaration());
            if (decl?.isImportDeclaration() && decl.node.specifiers.length === 0) {
                decl.remove();
            }
        });
    }
    root.find(j.Program).get('body', 0).node.comments = leadingComments;
    return root.toSource().replace(/assert\s*\{\s*type:\s*"macro"\s*\}/g, 'with { type: "macro" }');
}
