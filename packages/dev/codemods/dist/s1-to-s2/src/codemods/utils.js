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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPropValue = getPropValue;
exports.nameFromExpression = nameFromExpression;
exports.capitalize = capitalize;
exports.addComment = addComment;
exports.addComponentImport = addComponentImport;
exports.removeComponentImport = removeComponentImport;
exports.getName = getName;
const t = __importStar(require("@babel/types"));
function getPropValue(node) {
    if (node?.type === 'JSXExpressionContainer') {
        if (node.expression.type === 'JSXEmptyExpression') {
            return null;
        }
        return node.expression;
    }
    if (node?.type === 'RestElement' ||
        node?.type === 'ObjectPattern' ||
        node?.type === 'ArrayPattern' ||
        node?.type === 'AssignmentPattern') {
        return null;
    }
    return node;
}
function nameFromExpression(expr) {
    switch (expr.type) {
        case 'Identifier':
        case 'JSXIdentifier':
            return expr.name;
        case 'CallExpression':
        case 'NewExpression':
        case 'OptionalCallExpression':
            return nameFromExpression(expr.callee);
        case 'MemberExpression':
        case 'OptionalMemberExpression':
            return nameFromExpression(expr.object) + capitalize(nameFromExpression(expr.property));
        case 'FunctionExpression':
        case 'ClassExpression':
            return expr.id ? nameFromExpression(expr.id) : '';
        case 'ConditionalExpression':
            return nameFromExpression(expr.test);
        case 'UnaryExpression':
            return nameFromExpression(expr.argument);
        case 'ParenthesizedExpression':
            return nameFromExpression(expr.expression);
        case 'JSXExpressionContainer':
            return expr.expression.type !== 'JSXEmptyExpression' ? nameFromExpression(expr.expression) : '';
        case 'BinaryExpression':
        case 'LogicalExpression':
        case 'AssignmentExpression':
            return nameFromExpression(expr.left) + capitalize(nameFromExpression(expr.right));
        case 'AwaitExpression':
            return expr.argument ? nameFromExpression(expr.argument) : '';
        case 'SequenceExpression':
            return expr.expressions.reduce((p, e) => {
                let v = nameFromExpression(e);
                return p ? p + capitalize(v) : v;
            }, '');
        default:
            return '';
    }
}
function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
}
function addComment(node, comment) {
    if (!node.comments) {
        node.comments = [];
    }
    node.comments.push({
        type: 'Line',
        value: comment,
        leading: true
    });
}
function addComponentImport(path, newComponent) {
    // If newComponent variable already exists in scope, alias new import to avoid conflict.
    let existingBinding = path.scope.getBinding(newComponent);
    let localName = newComponent;
    if (existingBinding) {
        let newName = newComponent;
        let i = 1;
        while (path.scope.hasBinding(newName)) {
            newName = newComponent + i;
            i++;
        }
        localName = newName;
    }
    let existingImport = path.node.body.find((node) => t.isImportDeclaration(node) && node.source.value === '@react-spectrum/s2');
    if (existingImport && t.isImportDeclaration(existingImport)) {
        let specifier = existingImport.specifiers.find((specifier) => {
            return (t.isImportSpecifier(specifier) &&
                specifier.imported.type === 'Identifier' &&
                specifier.imported.name === newComponent);
        });
        if (specifier) {
            // Already imported
            return localName;
        }
        existingImport.specifiers.push(t.importSpecifier(t.identifier(localName), t.identifier(newComponent)));
    }
    else {
        let importDeclaration = t.importDeclaration([
            t.importSpecifier(t.identifier(localName), t.identifier(newComponent))
        ], t.stringLiteral('@react-spectrum/s2'));
        path.node.body.unshift(importDeclaration);
    }
    return localName;
}
function removeComponentImport(path, component) {
    let existingImport = path.node.body.find((node) => t.isImportDeclaration(node) && node.source.value === '@adobe/react-spectrum' || t.isImportDeclaration(node) && node.source.value.startsWith('@react-spectrum/'));
    if (existingImport && t.isImportDeclaration(existingImport)) {
        let specifier = existingImport.specifiers.find((specifier) => {
            return (t.isImportSpecifier(specifier) &&
                specifier.imported.type === 'Identifier' &&
                specifier.imported.name === component);
        });
        if (specifier) {
            existingImport.specifiers = existingImport.specifiers.filter((s) => s !== specifier);
            if (existingImport.specifiers.length === 0) {
                path.node.body = path.node.body.filter((node) => node !== existingImport);
            }
        }
    }
}
/**
 * Look up the name in path.scope and find the original binding.
 * Returns the original name even if an alias is used.
 */
function getName(path, identifier) {
    let binding = path.scope.getBinding(identifier.name);
    if (binding && t.isImportSpecifier(binding.path.node) && t.isIdentifier(binding.path.node.imported)) {
        return binding.path.node.imported.name;
    }
    return identifier.name;
}
