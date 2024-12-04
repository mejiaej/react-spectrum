import "./ColorSwatchPicker.25f8fb63.css";
import {SpectrumColorSwatchContext as $d68786ae409fa722$export$8529d7908a78c058} from "./ColorSwatch.module.js";
import {ColorSwatchPicker as $1TpDU$ColorSwatchPicker, ColorSwatchPickerItem as $1TpDU$ColorSwatchPickerItem} from "react-aria-components";
import $1TpDU$react, {forwardRef as $1TpDU$forwardRef} from "react";
import {useStyleProps as $1TpDU$useStyleProps, useDOMRef as $1TpDU$useDOMRef} from "@react-spectrum/utils";

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



const $4919bc07654f325c$export$b46792416e3d8515 = /*#__PURE__*/ (0, $1TpDU$forwardRef)(function ColorSwatchPicker(props, ref) {
    let { density: density = 'regular', size: size = 'M', rounding: rounding = 'none', ...otherProps } = props;
    let { styleProps: styleProps } = (0, $1TpDU$useStyleProps)(props);
    let domRef = (0, $1TpDU$useDOMRef)(ref);
    return /*#__PURE__*/ (0, $1TpDU$react).createElement((0, $1TpDU$ColorSwatchPicker), {
        ...otherProps,
        style: styleProps.style,
        ref: domRef,
        className: styleProps.className + function anonymous(props) {
            let rules = "";
            rules += ' s1-_Ss1-d';
            rules += ' s1-_0s1-a';
            if (props.density === "spacious") rules += ' s1-ls1-c';
            else if (props.density === "regular") rules += ' s1-ls1-b';
            else if (props.density === "compact") rules += ' s1-ls1-F';
            if (props.density === "spacious") rules += ' s1-ms1-c';
            else if (props.density === "regular") rules += ' s1-ms1-b';
            else if (props.density === "compact") rules += ' s1-ms1-F';
            return rules;
        }({
            density: density
        })
    }, /*#__PURE__*/ (0, $1TpDU$react).createElement((0, $d68786ae409fa722$export$8529d7908a78c058).Provider, {
        value: {
            useWrapper: $4919bc07654f325c$var$useWrapper,
            size: size,
            rounding: rounding
        }
    }, props.children));
});
function $4919bc07654f325c$var$useWrapper(swatch, color, rounding) {
    return /*#__PURE__*/ (0, $1TpDU$react).createElement((0, $1TpDU$ColorSwatchPickerItem), {
        color: color,
        className: (renderProps)=>(function anonymous(props) {
                let rules = "";
                if (props.isFocusVisible) rules += ' s1-_Es1-b';
                else rules += ' s1-_Es1-a';
                rules += ' s1-ds1-as1-___D';
                rules += ' s1-ds1-___I';
                rules += ' s1-_Gs1-c';
                rules += ' s1-_Fs1-c';
                rules += ' s1-Xs1-c';
                if (props.rounding === "full") rules += ' s1-_ps1-f';
                else if (props.rounding === "default") rules += ' s1-_ps1-c';
                else if (props.rounding === "none") rules += ' s1-_ps1-a';
                if (props.rounding === "full") rules += ' s1-_qs1-f';
                else if (props.rounding === "default") rules += ' s1-_qs1-c';
                else if (props.rounding === "none") rules += ' s1-_qs1-a';
                if (props.rounding === "full") rules += ' s1-_rs1-f';
                else if (props.rounding === "default") rules += ' s1-_rs1-c';
                else if (props.rounding === "none") rules += ' s1-_rs1-a';
                if (props.rounding === "full") rules += ' s1-_ss1-f';
                else if (props.rounding === "default") rules += ' s1-_ss1-c';
                else if (props.rounding === "none") rules += ' s1-_ss1-a';
                return rules;
            })({
                ...renderProps,
                rounding: rounding
            })
    }, ({ isSelected: isSelected })=>/*#__PURE__*/ (0, $1TpDU$react).createElement((0, $1TpDU$react).Fragment, null, swatch, isSelected && /*#__PURE__*/ (0, $1TpDU$react).createElement("div", {
            "aria-hidden": true,
            className: function anonymous(props) {
                let rules = "";
                rules += ' s1-Xs1-a';
                rules += ' s1-__ys1-a';
                rules += ' s1-0s1-a';
                rules += ' s1-2s1-a';
                rules += ' s1-1s1-a';
                rules += ' s1-3s1-a';
                rules += ' s1-_o-1icpv9v';
                rules += ' s1-_ts1-b';
                rules += ' s1-_p-17zqamw';
                rules += ' s1-_q-17zqamw';
                rules += ' s1-_r-17zqamw';
                rules += ' s1-_s-17zqamw';
                return rules;
            }()
        })));
}


export {$4919bc07654f325c$export$b46792416e3d8515 as ColorSwatchPicker};
//# sourceMappingURL=ColorSwatchPicker.module.js.map
