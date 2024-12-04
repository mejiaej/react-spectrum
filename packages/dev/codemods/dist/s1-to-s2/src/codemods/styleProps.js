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
exports.borderRadius = exports.borderWidths = void 0;
exports.transformStyleProps = transformStyleProps;
const utils_1 = require("./utils");
const colors_1 = require("./colors");
const dimensions_1 = require("./dimensions");
const t = __importStar(require("@babel/types"));
const unsafeStyle_1 = require("./unsafeStyle");
exports.borderWidths = {
    none: 0,
    thin: 1,
    thick: 2,
    thicker: 4,
    thickest: '[8px]' // not in new theme
};
exports.borderRadius = {
    xsmall: '[1px]',
    small: 'sm', // 2px -> 4px
    regular: 'default', // 4px -> 8px
    medium: 'lg', // 8px -> 10px
    large: 'xl' // 16px
};
const propertyMappings = {
    start: 'insetStart',
    end: 'insetEnd',
    rows: 'gridTemplateRows',
    columns: 'gridTemplateColumns',
    areas: 'gridTemplateAreas',
    wrap: 'flexWrap',
    direction: 'flexDirection',
    autoFlow: 'gridAutoFlow'
};
function getStylePropValue(prop, value, element, colorVersion, condition = '') {
    let mappedProp = propertyMappings[prop] || prop;
    // let customProp = `--${mappedProp}${condition ? '-' + condition : ''}`;
    switch (prop) {
        case 'width':
        case 'minWidth':
        case 'maxWidth':
        case 'height':
        case 'minHeight':
        case 'maxHeight': {
            if (value.type === 'StringLiteral' || value.type === 'NumericLiteral') {
                let val = (0, dimensions_1.convertDimension)(value.value, 'size');
                if (val != null) {
                    return {
                        macroValues: [{ key: mappedProp, value: val }]
                    };
                }
            }
            else if (value.type === 'ObjectExpression') {
                return getResponsiveValue(prop, value, element, colorVersion);
            }
            // return [mappedProp, customProp, [[customProp, value]]];
            return null;
        }
        case 'margin':
        case 'marginStart':
        case 'marginEnd':
        case 'marginTop':
        case 'marginBottom':
        case 'marginX':
        case 'marginY':
        case 'top':
        case 'bottom':
        case 'left':
        case 'right':
        case 'start':
        case 'end':
        case 'flexBasis': {
            if (value.type === 'StringLiteral' || value.type === 'NumericLiteral') {
                let val = (0, dimensions_1.convertDimension)(value.value, 'space');
                if (val != null) {
                    return {
                        macroValues: [{ key: mappedProp, value: val }]
                    };
                }
            }
            else if (value.type === 'ObjectExpression') {
                return getResponsiveValue(prop, value, element, colorVersion);
            }
            // return [mappedProp, customProp, [[customProp, value]]];
            return null;
        }
        case 'alignSelf':
        case 'justifySelf':
        case 'position':
        case 'zIndex':
        case 'order':
        case 'flexGrow':
        case 'flexShrink':
        case 'gridArea':
        case 'gridColumn':
        case 'gridRow':
        case 'gridRowEnd':
        case 'gridRowStart':
            if (value.type === 'StringLiteral' && value.value === 'left') {
                value.value = 'start';
            }
            else if (value.type === 'StringLiteral' && value.value === 'right') {
                value.value = 'end';
            }
            if (value.type === 'StringLiteral' || value.type === 'NumericLiteral') {
                return {
                    macroValues: [{ key: mappedProp, value: value.value }]
                };
            }
            else if (value.type === 'ObjectExpression') {
                return getResponsiveValue(prop, value, element, colorVersion);
            }
            // return [mappedProp, customProp, [[customProp, value]]];
            return null;
        case 'flex':
            if (value.type === 'BooleanLiteral' || value.type === 'StringLiteral' || value.type === 'NumericLiteral') {
                let val = value.value;
                if (val === true) {
                    val = 1;
                }
                else if (val === false) {
                    val = undefined;
                }
                return {
                    macroValues: [{ key: mappedProp, value: val }]
                };
            }
            else if (value.type === 'ObjectExpression') {
                return getResponsiveValue(prop, value, element, colorVersion);
            }
            // return [mappedProp, customProp, [[customProp, value]]];
            return null;
        case 'isHidden':
            if (value.type === 'BooleanLiteral' && value.value === true) {
                return {
                    macroValues: [{ key: 'display', value: 'none' }]
                };
            }
            else if (value.type === 'ObjectExpression') {
                return getResponsiveValue(prop, value, element, colorVersion);
            }
            // TODO
            // return ['display', `--display${condition ? '-' + condition : ''}`, value];
            return null;
        // Flex and Grid specific props
        case 'justifyContent':
        case 'alignContent':
        case 'alignItems':
            if (value.type === 'StringLiteral' && value.value === 'left') {
                value.value = 'start';
            }
            else if (value.type === 'StringLiteral' && value.value === 'right') {
                value.value = 'end';
            }
            if (element === 'Flex' || element === 'Grid') {
                if (value.type === 'StringLiteral') {
                    return {
                        macroValues: [{ key: mappedProp, value: value.value }]
                    };
                }
                else if (value.type === 'ObjectExpression') {
                    return getResponsiveValue(prop, value, element, colorVersion);
                }
                else if (!condition) {
                    return {
                        macroValues: [],
                        dynamicValues: [{ key: mappedProp, value }]
                    };
                }
            }
            break;
        case 'gap':
        case 'columnGap':
        case 'rowGap':
            if (element === 'Flex' || element === 'Grid') {
                if (value.type === 'StringLiteral' || value.type === 'NumericLiteral') {
                    let val = (0, dimensions_1.convertDimension)(value.value, 'space');
                    if (val != null) {
                        return {
                            macroValues: [{ key: mappedProp, value: val }]
                        };
                    }
                    return null;
                }
                else if (value.type === 'ObjectExpression') {
                    return getResponsiveValue(prop, value, element, colorVersion);
                }
            }
            break;
        case 'wrap':
            if (element === 'Flex' && value.type === 'BooleanLiteral') {
                value = { type: 'StringLiteral', value: 'wrap' };
            }
        // fallthrough
        case 'direction':
            if (element === 'Flex') {
                if (value.type === 'StringLiteral') {
                    return {
                        macroValues: [{ key: mappedProp, value: value.value }]
                    };
                }
                else if (value.type === 'ObjectExpression') {
                    return getResponsiveValue(prop, value, element, colorVersion);
                }
                else {
                    return {
                        macroValues: [],
                        dynamicValues: [{ key: mappedProp, value }]
                    };
                }
            }
            break;
        case 'areas':
            if (element === 'Grid') {
                if (value.type === 'ArrayExpression' && value.elements.every(e => e?.type === 'StringLiteral')) {
                    return {
                        macroValues: [{ key: mappedProp, value: value.elements.map(e => e?.type === 'StringLiteral' && e.value) }]
                    };
                }
                else if (value.type === 'ObjectExpression') {
                    return getResponsiveValue(prop, value, element, colorVersion);
                }
                else {
                    let val = t.callExpression(t.memberExpression(t.callExpression(t.memberExpression(value, t.identifier('map')), [t.arrowFunctionExpression([t.identifier('v')], t.templateLiteral([t.templateElement({ raw: '"' }, false), t.templateElement({ raw: '"' }, true)], [t.identifier('v')]))]), t.identifier('join')), [t.stringLiteral('')]);
                    return {
                        macroValues: [],
                        dynamicValues: [{ key: mappedProp, value: val }]
                    };
                }
            }
            break;
        case 'rows':
        case 'columns':
            if (element === 'Grid') {
                if (value.type === 'StringLiteral') {
                    return {
                        macroValues: [{ key: mappedProp, value: value.value }]
                    };
                }
                else if (value.type === 'ArrayExpression') {
                    let values = [];
                    for (let element of value.elements) {
                        if (element?.type === 'StringLiteral' || element?.type === 'NumericLiteral') {
                            values.push((0, dimensions_1.convertGridTrack)(element.value));
                        }
                        else if (element?.type === 'CallExpression') {
                            // TODO: match to import using scope
                            if (element.callee.type === 'Identifier' &&
                                element.callee.name === 'minmax' &&
                                element.arguments.length === 2 &&
                                (element.arguments[0].type === 'StringLiteral' || element.arguments[0].type === 'NumericLiteral') &&
                                (element.arguments[1].type === 'StringLiteral' || element.arguments[1].type === 'NumericLiteral')) {
                                // TODO: use theme value somehow?
                                let min = (0, dimensions_1.convertGridTrack)(element.arguments[0].value, true);
                                let max = (0, dimensions_1.convertGridTrack)(element.arguments[1].value, true);
                                values.push(`minmax(${min}, ${max})`);
                            }
                            // TODO: handle repeat() and fit-content()
                        }
                        else {
                            // bail
                            return;
                        }
                    }
                    return {
                        macroValues: [{ key: mappedProp, value: values }]
                    };
                }
                else if (value.type === 'ObjectExpression') {
                    return getResponsiveValue(prop, value, element, colorVersion);
                }
            }
            break;
        case 'autoFlow':
        case 'justifyItems':
            if (value.type === 'StringLiteral' && value.value === 'left') {
                value.value = 'start';
            }
            else if (value.type === 'StringLiteral' && value.value === 'right') {
                value.value = 'end';
            }
            if (element === 'Grid') {
                if (value.type === 'StringLiteral') {
                    return {
                        macroValues: [{ key: mappedProp, value: value.value }]
                    };
                }
                else if (value.type === 'ObjectExpression') {
                    return getResponsiveValue(prop, value, element, colorVersion);
                }
            }
            break;
        // View specific props
        case 'padding':
        case 'paddingX':
        case 'paddingY':
        case 'paddingStart':
        case 'paddingEnd':
        case 'paddingTop':
        case 'paddingBottom':
            if (element === 'View') {
                if (value.type === 'StringLiteral' || value.type === 'NumericLiteral') {
                    let val = (0, dimensions_1.convertDimension)(value.value, 'space');
                    if (val != null) {
                        return {
                            macroValues: [{ key: mappedProp, value: val }]
                        };
                    }
                    return null;
                }
                else if (value.type === 'ObjectExpression') {
                    return getResponsiveValue(prop, value, element, colorVersion);
                }
            }
            break;
        case 'overflow':
            if (element === 'View') {
                if (value.type === 'StringLiteral') {
                    return {
                        macroValues: [{ key: mappedProp, value: value.value }]
                    };
                }
                else if (value.type === 'ObjectExpression') {
                    return getResponsiveValue(prop, value, element, colorVersion);
                }
                else {
                    return {
                        macroValues: [],
                        dynamicValues: [{ key: mappedProp, value }]
                    };
                }
            }
            break;
        case 'borderWidth':
        case 'borderStartWidth':
        case 'borderEndWidth':
        case 'borderTopWidth':
        case 'borderBottomWidth':
        case 'borderXWidth':
        case 'borderYWidth':
            if (element === 'View') {
                if (value.type === 'StringLiteral') {
                    let val = exports.borderWidths[value.value];
                    if (val != null) {
                        return {
                            macroValues: [{ key: mappedProp, value: val }]
                        };
                    }
                    return null;
                }
                else if (value.type === 'ObjectExpression') {
                    return getResponsiveValue(prop, value, element, colorVersion);
                }
            }
            break;
        case 'borderColor':
        // We don't have individual border side colors anymore.
        // TODO: do we need them?
        // case 'borderStartColor':
        // case 'borderEndColor':
        // case 'borderTopColor':
        // case 'borderBottomColor':
        // case 'borderXColor':
        // case 'borderYColor':
        case 'backgroundColor':
            if (element === 'View') {
                if (value.type === 'StringLiteral') {
                    let color = (0, colors_1.convertColor)(prop, value.value, colorVersion);
                    if (color != null) {
                        return {
                            macroValues: [{ key: mappedProp, value: color }]
                        };
                    }
                }
                else if (value.type === 'ObjectExpression') {
                    return getResponsiveValue(prop, value, element, colorVersion);
                }
                return null;
            }
            break;
        case 'borderRadius':
        case 'borderTopStartRadius':
        case 'borderTopEndRadius':
        case 'borderBottomStartRadius':
        case 'borderBottomEndRadius':
            if (element === 'View') {
                if (value.type === 'StringLiteral') {
                    let val = exports.borderRadius[value.value];
                    if (val != null) {
                        return {
                            macroValues: [{ key: mappedProp, value: val }]
                        };
                    }
                    return null;
                }
                else if (value.type === 'ObjectExpression') {
                    return getResponsiveValue(prop, value, element, colorVersion);
                }
            }
            break;
        case 'size':
            // Try to automatically convert size prop to a macro value for components that supported size.
            if (element === 'ColorArea' || element === 'ColorWheel') {
                if (value.type === 'StringLiteral' || value.type === 'NumericLiteral') {
                    let val = (0, dimensions_1.convertDimension)(value.value, 'size');
                    if (val != null) {
                        return {
                            macroValues: [{ key: 'size', value: val }]
                        };
                    }
                    return null;
                }
                return null;
            }
        default:
            return;
    }
}
const breakpoints = {
    base: 'default',
    S: 'sm',
    M: 'md',
    L: 'lg'
};
function getResponsiveValue(prop, value, element, colorVersion) {
    let res = {};
    let custom = [];
    for (let property of value.properties) {
        if (property.type === 'ObjectProperty' && property.key.type === 'Identifier' && property.key.name in breakpoints) {
            let propertyValue = (0, utils_1.getPropValue)(property.value);
            if (propertyValue && propertyValue.type !== 'ObjectExpression') {
                let val = getStylePropValue(prop, propertyValue, element, colorVersion, property.key.name);
                if (val && val.macroValues) {
                    res[breakpoints[property.key.name]] = val.macroValues[0].value;
                }
                if (val && val.dynamicValues) {
                    custom.push(...val.dynamicValues);
                }
                continue;
            }
        }
        // Bail!
        return null;
    }
    return {
        macroValues: [{
                key: prop,
                value: res
            }],
        dynamicValues: custom
    };
}
function handleProp(path, element, colorVersion) {
    let node = path.node;
    if (node.name.type !== 'JSXIdentifier') {
        return;
    }
    let prop = node.name.name;
    let nodeValue = node.value;
    if (nodeValue == null) {
        nodeValue = t.booleanLiteral(true);
    }
    let propValue = (0, utils_1.getPropValue)(nodeValue);
    if (!propValue) {
        return;
    }
    switch (prop) {
        case 'UNSAFE_style':
            if (propValue.type === 'ObjectExpression') {
                let value = (0, unsafeStyle_1.transformUnsafeStyle)(propValue, element);
                if (value) {
                    path.remove();
                    return value;
                }
            }
            (0, utils_1.addComment)(path.node, ' TODO(S2-upgrade): check this UNSAFE_style');
            break;
        case 'UNSAFE_className':
            if (element === 'Flex' || element === 'Grid' || element === 'View' || element === 'Well') {
                path.get('name').replaceWith(t.jsxIdentifier('className'));
            }
            else {
                (0, utils_1.addComment)(path.node, ' TODO(S2-upgrade): check this UNSAFE_className');
            }
            break;
        default: {
            let value = getStylePropValue(prop, propValue, element, colorVersion);
            if (value) {
                path.remove();
                return value;
            }
            else if (value === null) {
                // Found a value we couldn't handle.
                (0, utils_1.addComment)(path.node, ' TODO(S2-upgrade): update this style prop');
            }
        }
    }
}
function transformStyleProps(path, element) {
    let macroValues = new Map;
    let dynamicValues = new Map;
    let conditions = new Map;
    let isDOMElement = element === 'Flex' || element === 'Grid' || element === 'View' || element === 'Well';
    if (element === 'Flex') {
        macroValues.set('display', 'flex');
    }
    else if (element === 'Grid') {
        macroValues.set('display', 'grid');
    }
    else if (element === 'Well') {
        macroValues.set('display', 'block');
        macroValues.set('textAlign', 'start');
        macroValues.set('minWidth', 160);
        macroValues.set('padding', 16);
        macroValues.set('marginTop', 4);
        macroValues.set('borderWidth', 1);
        macroValues.set('borderRadius', 'sm');
        macroValues.set('backgroundColor', 'layer-1');
        macroValues.set('borderStyle', 'solid');
        macroValues.set('borderColor', 'transparent-black-75');
        macroValues.set('font', 'body-sm');
    }
    let attrs = path.get('openingElement').get('attributes');
    // Find the color version in use.
    let colorVersion = 5;
    if (element === 'View') {
        for (let i = attrs.length - 1; i >= 0; i--) {
            let attr = attrs[i];
            if (attr.node.type === 'JSXAttribute' && attr.node.name.name === 'colorVersion') {
                let value = (0, utils_1.getPropValue)(attr.node.value);
                if (value?.type === 'NumericLiteral') {
                    colorVersion = value.value;
                }
                else {
                    colorVersion = null;
                }
                attr.remove();
                attrs.splice(i, 1);
            }
            else if (attr.node.type === 'JSXSpreadAttribute') {
                // Bail. colorVersion could be set by spread.
                colorVersion = null;
            }
        }
    }
    for (let path of attrs) {
        if (path.node.type === 'JSXAttribute') {
            let value = handleProp(path, element, colorVersion);
            if (value) {
                for (let val of value.macroValues) {
                    macroValues.set(val.key, val.value);
                }
                if (value.dynamicValues) {
                    for (let val of value.dynamicValues) {
                        dynamicValues.set(val.key, val.value);
                    }
                }
                if (value.conditions) {
                    for (let val of value.conditions) {
                        conditions.set(val.key, val.value);
                    }
                }
            }
        }
        else if (path.node.type === 'JSXSpreadAttribute') {
            (0, utils_1.addComment)(path.node, ' TODO(S2-upgrade): check this spread for style props');
        }
    }
    // Change View/Flex/Grid to div.
    if (isDOMElement) {
        path.get('openingElement').get('name').replaceWith(t.jsxIdentifier('div'));
        if (path.node.closingElement) {
            path.get('closingElement').replaceWith(t.jsxClosingElement(t.jsxIdentifier('div')));
        }
    }
    let hasMacros = false;
    let usedLightDark = false;
    if (macroValues.size) {
        hasMacros = true;
        let classNameAttribute;
        if (isDOMElement) {
            let index = path.node.openingElement.attributes?.findIndex(a => a.type === 'JSXAttribute' && a.name.name === 'className');
            if (index != null && index >= 0) {
                classNameAttribute = path.get('openingElement').get('attributes').at(index);
            }
        }
        let valueToAST = (v) => {
            if (Array.isArray(v)) {
                return t.arrayExpression(v.map(v => valueToAST(v)));
            }
            else if (typeof v === 'object') {
                if ('default' in v && typeof v.default === 'string' && 'dark' in v && typeof v.dark === 'string') {
                    usedLightDark = true;
                    return t.callExpression(t.identifier('lightDark'), [t.stringLiteral(v.default), t.stringLiteral(v.dark)]);
                }
                return t.objectExpression(Object.entries(v).map(([k, v]) => t.objectProperty(t.identifier(k), valueToAST(v))));
            }
            else {
                switch (typeof v) {
                    case 'string':
                        return t.stringLiteral(v);
                    case 'number':
                        return t.numericLiteral(v);
                    case 'boolean':
                        return t.booleanLiteral(v);
                }
            }
        };
        // Generate macro call.
        let macroCall = t.callExpression(t.identifier('style'), [
            t.objectExpression([...macroValues].map(([k, v]) => {
                return t.objectProperty(t.identifier(k), valueToAST(v));
            }))
        ]);
        if (conditions.size) {
            macroCall = t.callExpression(macroCall, [t.objectExpression([...conditions].map(([k, v]) => t.objectProperty(t.identifier(k), v, false, v.type === 'Identifier' && v.name === k)))]);
        }
        if (classNameAttribute?.isJSXAttribute()) {
            classNameAttribute.get('value').replaceWith(t.jsxExpressionContainer(t.binaryExpression('+', (0, utils_1.getPropValue)(classNameAttribute.node.value), macroCall)));
        }
        else {
            path.get('openingElement').pushContainer('attributes', t.jsxAttribute(t.jsxIdentifier(isDOMElement ? 'className' : 'styles'), t.jsxExpressionContainer(macroCall)));
        }
    }
    if (dynamicValues.size) {
        path.get('openingElement').pushContainer('attributes', t.jsxAttribute(t.jsxIdentifier('style'), t.jsxExpressionContainer(t.objectExpression([...dynamicValues].map(([key, value]) => t.objectProperty(key.startsWith('--') ? t.stringLiteral(key) : t.identifier(key), value))))));
    }
    return { hasMacros, usedLightDark };
}
