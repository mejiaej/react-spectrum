import "./ColorSwatch.css";
import {useSpectrumContextProps as $5ce63c423902f47d$export$764f6146fadd77f7} from "../icons/useSpectrumContextProps.mjs";
import {jsx as $b2Wh1$jsx} from "react/jsx-runtime";
import {parseColor as $b2Wh1$parseColor, ColorSwatch as $b2Wh1$ColorSwatch} from "react-aria-components";
import {createContext as $b2Wh1$createContext, forwardRef as $b2Wh1$forwardRef, useContext as $b2Wh1$useContext, useMemo as $b2Wh1$useMemo} from "react";
import {useDOMRef as $b2Wh1$useDOMRef} from "@react-spectrum/utils";

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




const $cd9e1720baab3945$export$83cc445538396800 = /*#__PURE__*/ (0, $b2Wh1$createContext)(null);
const $cd9e1720baab3945$export$2d9e1fe7b5c0ceb6 = /*#__PURE__*/ (0, $b2Wh1$createContext)(null);
const $cd9e1720baab3945$export$cae13e90592f246a = /*#__PURE__*/ (0, $b2Wh1$forwardRef)(function ColorSwatch(props, ref) {
    [props, ref] = (0, $5ce63c423902f47d$export$764f6146fadd77f7)(props, ref, $cd9e1720baab3945$export$83cc445538396800);
    let domRef = (0, $b2Wh1$useDOMRef)(ref);
    let ctx = (0, $b2Wh1$useContext)($cd9e1720baab3945$export$2d9e1fe7b5c0ceb6);
    let { size: size = ctx?.size || 'M', rounding: rounding = ctx?.rounding || 'default', color: color } = props;
    let nonNullValue = color || '#fff0';
    color = (0, $b2Wh1$useMemo)(()=>typeof nonNullValue === 'string' ? (0, $b2Wh1$parseColor)(nonNullValue) : nonNullValue, [
        nonNullValue
    ]);
    let swatch = /*#__PURE__*/ (0, $b2Wh1$jsx)((0, $b2Wh1$ColorSwatch), {
        ...props,
        color: color,
        ref: domRef,
        style: ({ color: color })=>({
                // TODO: should there be a distinction between transparent and no value (e.g. null)?
                background: color.getChannelValue('alpha') > 0 ? `linear-gradient(${color}, ${color}), repeating-conic-gradient(#e6e6e6 0% 25%, white 0% 50%) 0% 50% / 16px 16px` : 'linear-gradient(to bottom right, transparent calc(50% - 2px), var(--slash-color) calc(50% - 2px) calc(50% + 2px), transparent calc(50% + 2px)) no-repeat'
            }),
        className: function anonymous(props, overrides) {
            let rules = " .";
            let matches = (overrides || '').match(/(?:^|\s)(?:y|z|A|B|_9|_8|h|_5|_4|__A|__c|__d|__a|__b|U|__Q|X|Z|V|W|l|q|r|k|o|p)[^\s]+/g) || [];
            rules += matches.join('');
            let $l = false;
            let $k = false;
            for (let p of matches){
                if (/^\s*l/.test(p)) $l = true;
                if (/^\s*k/.test(p)) $k = true;
            }
            if (!$l) {
                if (props.size === "L") rules += ' l2';
                else if (props.size === "M") rules += ' lU';
                else if (props.size === "S") rules += ' lM';
                else if (props.size === "XS") rules += ' lE';
            }
            if (!$k) {
                if (props.size === "L") rules += ' k2';
                else if (props.size === "M") rules += ' kU';
                else if (props.size === "S") rules += ' kM';
                else if (props.size === "XS") rules += ' kE';
            }
            if (props.rounding === "full") rules += ' _vf';
            else if (props.rounding === "none") rules += ' _va';
            else if (props.rounding === "default") rules += ' _vb';
            if (props.rounding === "full") rules += ' _wf';
            else if (props.rounding === "none") rules += ' _wa';
            else if (props.rounding === "default") rules += ' _wb';
            if (props.rounding === "full") rules += ' _xf';
            else if (props.rounding === "none") rules += ' _xa';
            else if (props.rounding === "default") rules += ' _xb';
            if (props.rounding === "full") rules += ' _yf';
            else if (props.rounding === "none") rules += ' _ya';
            else if (props.rounding === "default") rules += ' _yb';
            rules += ' cp42';
            rules += ' ub';
            rules += ' vb';
            rules += ' sb';
            rules += ' tb';
            rules += ' wa';
            rules += ' __na';
            rules += ' _zb';
            rules += ' -_14u0212_a-O';
            return rules;
        }({
            size: size,
            rounding: rounding
        }, props.styles)
    });
    // ColorSwatchPicker needs to wrap the swatch in a ListBoxItem.
    if (ctx) return ctx.useWrapper(swatch, color, rounding);
    return swatch;
});


export {$cd9e1720baab3945$export$83cc445538396800 as ColorSwatchContext, $cd9e1720baab3945$export$2d9e1fe7b5c0ceb6 as InternalColorSwatchContext, $cd9e1720baab3945$export$cae13e90592f246a as ColorSwatch};
//# sourceMappingURL=ColorSwatch.mjs.map
