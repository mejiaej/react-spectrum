require("./ActionButtonGroup.css");
var $ac757a4c2bd72aee$exports = require("../icons/useSpectrumContextProps.cjs");
var $jGK4W$reactjsxruntime = require("react/jsx-runtime");
var $jGK4W$reactariacomponents = require("react-aria-components");
var $jGK4W$react = require("react");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "actionGroupStyle", () => $7a26131f6144af2b$export$641cbcd1f6f6802f);
$parcel$export(module.exports, "ActionButtonGroupContext", () => $7a26131f6144af2b$export$33f5f2f2cb85d743);
$parcel$export(module.exports, "ActionButtonGroup", () => $7a26131f6144af2b$export$73d695ae27330056);
/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 



const $7a26131f6144af2b$export$641cbcd1f6f6802f = function anonymous(props, overrides) {
    let rules = " .";
    let matches = (overrides || '').match(/(?:^|\s)(?:y|z|A|B|_9|_8|h|_5|_4|__A|__c|__d|__a|__b|U|__Q|X|Z|V|W|l|q|r|k|o|p)[^\s]+/g) || [];
    rules += matches.join('');
    rules += ' _Zd';
    if (props.orientation === "vertical") rules += ' _6b';
    else if (props.orientation === "horizontal") rules += ' _6a';
    if (props.density === "regular") {
        if (props.size === "XL") rules += ' id';
        else if (props.size === "L") rules += ' id';
        else if (props.size === "M") rules += ' id';
        else if (props.size === "S") rules += ' ic';
        else if (props.size === "XS") rules += ' ic';
    } else if (props.density === "compact") rules += ' ib';
    if (props.density === "regular") {
        if (props.size === "XL") rules += ' jd';
        else if (props.size === "L") rules += ' jd';
        else if (props.size === "M") rules += ' jd';
        else if (props.size === "S") rules += ' jc';
        else if (props.size === "XS") rules += ' jc';
    } else if (props.density === "compact") rules += ' jb';
    return rules;
};
const $7a26131f6144af2b$export$33f5f2f2cb85d743 = /*#__PURE__*/ (0, $jGK4W$react.createContext)(null);
const $7a26131f6144af2b$export$73d695ae27330056 = /*#__PURE__*/ (0, $jGK4W$react.forwardRef)(function ActionButtonGroup(props, ref) {
    [props, ref] = (0, $ac757a4c2bd72aee$exports.useSpectrumContextProps)(props, ref, $7a26131f6144af2b$export$33f5f2f2cb85d743);
    let { density: density = 'regular', size: size = 'M', orientation: orientation = 'horizontal', isJustified: isJustified, children: children, UNSAFE_className: UNSAFE_className = '', UNSAFE_style: UNSAFE_style, styles: styles } = props;
    return /*#__PURE__*/ (0, $jGK4W$reactjsxruntime.jsx)((0, $jGK4W$reactariacomponents.Toolbar), {
        ...props,
        ref: ref,
        style: UNSAFE_style,
        className: UNSAFE_className + $7a26131f6144af2b$export$641cbcd1f6f6802f({
            size: size,
            density: density,
            orientation: orientation,
            isJustified: isJustified
        }, styles),
        children: /*#__PURE__*/ (0, $jGK4W$reactjsxruntime.jsx)($7a26131f6144af2b$export$33f5f2f2cb85d743.Provider, {
            value: props,
            children: children
        })
    });
});


//# sourceMappingURL=ActionButtonGroup.cjs.map
