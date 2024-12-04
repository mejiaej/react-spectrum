import "./ColorSwatchPicker.css";
import {InternalColorSwatchContext as $cd9e1720baab3945$export$2d9e1fe7b5c0ceb6} from "./ColorSwatch.mjs";
import {useSpectrumContextProps as $5ce63c423902f47d$export$764f6146fadd77f7} from "../icons/useSpectrumContextProps.mjs";
import {jsx as $bOBHx$jsx, jsxs as $bOBHx$jsxs, Fragment as $bOBHx$Fragment} from "react/jsx-runtime";
import {ColorSwatchPicker as $bOBHx$ColorSwatchPicker, ColorSwatchPickerItem as $bOBHx$ColorSwatchPickerItem} from "react-aria-components";
import {createContext as $bOBHx$createContext, forwardRef as $bOBHx$forwardRef} from "react";
import {useDOMRef as $bOBHx$useDOMRef} from "@react-spectrum/utils";

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





const $ba9c901b6c815fb9$export$7214f50881fc1eaf = /*#__PURE__*/ (0, $bOBHx$createContext)(null);
const $ba9c901b6c815fb9$export$b46792416e3d8515 = /*#__PURE__*/ (0, $bOBHx$forwardRef)(function ColorSwatchPicker(props, ref) {
    [props, ref] = (0, $5ce63c423902f47d$export$764f6146fadd77f7)(props, ref, $ba9c901b6c815fb9$export$7214f50881fc1eaf);
    let { density: density = 'regular', size: size = 'M', rounding: rounding = 'none', ...otherProps } = props;
    let domRef = (0, $bOBHx$useDOMRef)(ref);
    return /*#__PURE__*/ (0, $bOBHx$jsx)((0, $bOBHx$ColorSwatchPicker), {
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
        children: /*#__PURE__*/ (0, $bOBHx$jsx)((0, $cd9e1720baab3945$export$2d9e1fe7b5c0ceb6).Provider, {
            value: {
                useWrapper: $ba9c901b6c815fb9$var$useWrapper,
                size: size,
                rounding: rounding
            },
            children: props.children
        })
    });
});
function $ba9c901b6c815fb9$var$useWrapper(swatch, color, rounding) {
    return /*#__PURE__*/ (0, $bOBHx$jsx)((0, $bOBHx$ColorSwatchPickerItem), {
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
        children: ({ isSelected: isSelected })=>/*#__PURE__*/ (0, $bOBHx$jsxs)((0, $bOBHx$Fragment), {
                children: [
                    swatch,
                    isSelected && /*#__PURE__*/ (0, $bOBHx$jsx)("div", {
                        "aria-hidden": true,
                        className: " . Ua __Ba Xa Za Va Wa __na co wa uc vc sc tc dd _Lb _Nc _M-3hmpy _zb _v-17zqamw _w-17zqamw _x-17zqamw _y-17zqamw"
                    })
                ]
            })
    });
}


export {$ba9c901b6c815fb9$export$7214f50881fc1eaf as ColorSwatchPickerContext, $ba9c901b6c815fb9$export$b46792416e3d8515 as ColorSwatchPicker};
//# sourceMappingURL=ColorSwatchPicker.mjs.map
