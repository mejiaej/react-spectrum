import "./ColorSwatch.fabed858.css";
import {useColorSwatch as $5Pjc1$useColorSwatch} from "@react-aria/color";
import {useContextProps as $5Pjc1$useContextProps, ColorSwatchContext as $5Pjc1$ColorSwatchContext} from "react-aria-components";
import $5Pjc1$react, {createContext as $5Pjc1$createContext, forwardRef as $5Pjc1$forwardRef, useContext as $5Pjc1$useContext} from "react";
import {useDOMRef as $5Pjc1$useDOMRef, useStyleProps as $5Pjc1$useStyleProps} from "@react-spectrum/utils";

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



const $d68786ae409fa722$export$8529d7908a78c058 = /*#__PURE__*/ (0, $5Pjc1$createContext)(null);
const $d68786ae409fa722$export$cae13e90592f246a = /*#__PURE__*/ (0, $5Pjc1$forwardRef)(function ColorSwatch(props, ref) {
    let domRef = (0, $5Pjc1$useDOMRef)(ref);
    [props, domRef] = (0, $5Pjc1$useContextProps)(props, domRef, (0, $5Pjc1$ColorSwatchContext));
    let { colorSwatchProps: colorSwatchProps, color: color } = (0, $5Pjc1$useColorSwatch)(props);
    let { styleProps: styleProps } = (0, $5Pjc1$useStyleProps)(props);
    let ctx = (0, $5Pjc1$useContext)($d68786ae409fa722$export$8529d7908a78c058);
    let { size: size = (ctx === null || ctx === void 0 ? void 0 : ctx.size) || 'M', rounding: rounding = (ctx === null || ctx === void 0 ? void 0 : ctx.rounding) || 'default' } = props;
    let swatch = /*#__PURE__*/ (0, $5Pjc1$react).createElement("div", {
        ...colorSwatchProps,
        ...styleProps,
        ref: domRef,
        style: {
            ...styleProps.style,
            // TODO: should there be a distinction between transparent and no value (e.g. null)?
            background: color.getChannelValue('alpha') > 0 ? `linear-gradient(${color}, ${color}), repeating-conic-gradient(#e6e6e6 0% 25%, white 0% 50%) 0% 50% / 16px 16px` : 'linear-gradient(to bottom right, transparent calc(50% - 2px), var(--spectrum-red-900) calc(50% - 2px) calc(50% + 2px), transparent calc(50% + 2px)) no-repeat'
        },
        className: styleProps.className + function anonymous(props) {
            let rules = "";
            if (props.size === "L") rules += ' s1-os1-k';
            else if (props.size === "M") rules += ' s1-os1-i';
            else if (props.size === "S") rules += ' s1-os1-g';
            else if (props.size === "XS") rules += ' s1-os1-e';
            if (props.size === "L") rules += ' s1-ns1-k';
            else if (props.size === "M") rules += ' s1-ns1-i';
            else if (props.size === "S") rules += ' s1-ns1-g';
            else if (props.size === "XS") rules += ' s1-ns1-e';
            if (props.rounding === "full") rules += ' s1-_ps1-f';
            else if (props.rounding === "none") rules += ' s1-_ps1-a';
            else if (props.rounding === "default") rules += ' s1-_ps1-c';
            if (props.rounding === "full") rules += ' s1-_qs1-f';
            else if (props.rounding === "none") rules += ' s1-_qs1-a';
            else if (props.rounding === "default") rules += ' s1-_qs1-c';
            if (props.rounding === "full") rules += ' s1-_rs1-f';
            else if (props.rounding === "none") rules += ' s1-_rs1-a';
            else if (props.rounding === "default") rules += ' s1-_rs1-c';
            if (props.rounding === "full") rules += ' s1-_ss1-f';
            else if (props.rounding === "none") rules += ' s1-_ss1-a';
            else if (props.rounding === "default") rules += ' s1-_ss1-c';
            rules += ' s1-c-1n5whoe';
            rules += ' s1-ws1-b';
            rules += ' s1-xs1-b';
            rules += ' s1-us1-b';
            rules += ' s1-vs1-b';
            rules += ' s1-As1-a';
            rules += ' s1-__ks1-a';
            rules += ' s1-_ts1-b';
            return rules;
        }({
            size: size,
            rounding: rounding
        })
    });
    // ColorSwatchPicker needs to wrap the swatch in a ListBoxItem.
    if (ctx) return ctx.useWrapper(swatch, color, rounding);
    return swatch;
});


export {$d68786ae409fa722$export$8529d7908a78c058 as SpectrumColorSwatchContext, $d68786ae409fa722$export$cae13e90592f246a as ColorSwatch};
//# sourceMappingURL=ColorSwatch.module.js.map
