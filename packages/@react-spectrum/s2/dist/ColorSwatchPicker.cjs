require("./ColorSwatchPicker.css");
var $8b1ea085cefae738$exports = require("./ColorSwatch.cjs");
var $ac757a4c2bd72aee$exports = require("../icons/useSpectrumContextProps.cjs");
var $7eldL$reactjsxruntime = require("react/jsx-runtime");
var $7eldL$reactariacomponents = require("react-aria-components");
var $7eldL$react = require("react");
var $7eldL$reactspectrumutils = require("@react-spectrum/utils");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "ColorSwatchPickerContext", () => $a267e3efa7024819$export$7214f50881fc1eaf);
$parcel$export(module.exports, "ColorSwatchPicker", () => $a267e3efa7024819$export$b46792416e3d8515);
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





const $a267e3efa7024819$export$7214f50881fc1eaf = /*#__PURE__*/ (0, $7eldL$react.createContext)(null);
const $a267e3efa7024819$export$b46792416e3d8515 = /*#__PURE__*/ (0, $7eldL$react.forwardRef)(function ColorSwatchPicker(props, ref) {
    [props, ref] = (0, $ac757a4c2bd72aee$exports.useSpectrumContextProps)(props, ref, $a267e3efa7024819$export$7214f50881fc1eaf);
    let { density: density = 'regular', size: size = 'M', rounding: rounding = 'none', ...otherProps } = props;
    let domRef = (0, $7eldL$reactspectrumutils.useDOMRef)(ref);
    return /*#__PURE__*/ (0, $7eldL$reactjsxruntime.jsx)((0, $7eldL$reactariacomponents.ColorSwatchPicker), {
        ...otherProps,
        ref: domRef,
        className: props.UNSAFE_className + function anonymous(props, overrides) {
            let rules = " .";
            let matches = (overrides || '').match(/(?:^|\s)(?:y|z|A|B|_9|_8|h|_5|_4|__A|__c|__d|__a|__b|U|__Q|X|Z|V|W|l|q|r)[^\s]+/g) || [];
            rules += matches.join('');
            rules += ' _Zd';
            rules += ' _7a';
            if (props.density === "spacious") rules += ' i-6njx2e';
            else if (props.density === "regular") rules += ' ic';
            else if (props.density === "compact") rules += ' i-59f7mn';
            if (props.density === "spacious") rules += ' j-6njx2e';
            else if (props.density === "regular") rules += ' jc';
            else if (props.density === "compact") rules += ' j-59f7mn';
            return rules;
        }({
            density: density
        }, props.styles),
        children: /*#__PURE__*/ (0, $7eldL$reactjsxruntime.jsx)((0, $8b1ea085cefae738$exports.InternalColorSwatchContext).Provider, {
            value: {
                useWrapper: $a267e3efa7024819$var$useWrapper,
                size: size,
                rounding: rounding
            },
            children: props.children
        })
    });
});
function $a267e3efa7024819$var$useWrapper(swatch, color, rounding) {
    return /*#__PURE__*/ (0, $7eldL$reactjsxruntime.jsx)((0, $7eldL$reactariacomponents.ColorSwatchPickerItem), {
        color: color,
        className: (renderProps)=>(function anonymous(props) {
                let rules = " .";
                if (props.isFocusVisible) rules += ' _Lb';
                else rules += ' _La';
                rules += ' da_____z';
                rules += ' dx';
                rules += ' _Nc';
                rules += ' _M-3t1z';
                rules += ' Uc';
                if (props.rounding === "full") rules += ' _vf';
                else if (props.rounding === "default") rules += ' _vb';
                else if (props.rounding === "none") rules += ' _va';
                if (props.rounding === "full") rules += ' _wf';
                else if (props.rounding === "default") rules += ' _wb';
                else if (props.rounding === "none") rules += ' _wa';
                if (props.rounding === "full") rules += ' _xf';
                else if (props.rounding === "default") rules += ' _xb';
                else if (props.rounding === "none") rules += ' _xa';
                if (props.rounding === "full") rules += ' _yf';
                else if (props.rounding === "default") rules += ' _yb';
                else if (props.rounding === "none") rules += ' _ya';
                return rules;
            })({
                ...renderProps,
                rounding: rounding
            }),
        children: ({ isSelected: isSelected })=>/*#__PURE__*/ (0, $7eldL$reactjsxruntime.jsxs)((0, $7eldL$reactjsxruntime.Fragment), {
                children: [
                    swatch,
                    isSelected && /*#__PURE__*/ (0, $7eldL$reactjsxruntime.jsx)("div", {
                        "aria-hidden": true,
                        className: " . Ua __Ba Xa Za Va Wa __na co wa uc vc sc tc dd _Lb _Nc _M-3hmpy _zb _v-17zqamw _w-17zqamw _x-17zqamw _y-17zqamw"
                    })
                ]
            })
    });
}


//# sourceMappingURL=ColorSwatchPicker.cjs.map
