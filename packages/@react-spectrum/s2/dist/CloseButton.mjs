import "./CloseButton.css";
import $bd983341bd35d639$export$2e2bcd8739ae039 from "./Cross.mjs";
import $5wH0g$intlStringsmjs from "./intlStrings.mjs";
import {pressScale as $10ea7662e51a285b$export$56e8cba416805d8d} from "./pressScale.mjs";
import {useSpectrumContextProps as $5ce63c423902f47d$export$764f6146fadd77f7} from "../icons/useSpectrumContextProps.mjs";
import {jsx as $5wH0g$jsx} from "react/jsx-runtime";
import {Button as $5wH0g$Button} from "react-aria-components";
import {createContext as $5wH0g$createContext, forwardRef as $5wH0g$forwardRef} from "react";
import {useFocusableRef as $5wH0g$useFocusableRef} from "@react-spectrum/utils";
import {useLocalizedStringFormatter as $5wH0g$useLocalizedStringFormatter} from "@react-aria/i18n";


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
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








const $a9cda54c4f47ce52$var$hoverBackground = {
    default: 'gray-100',
    staticColor: {
        white: 'transparent-white-100',
        black: 'transparent-black-100'
    }
};
const $a9cda54c4f47ce52$var$styles = function anonymous(props, overrides) {
    let rules = " .";
    let matches = (overrides || '').match(/(?:^|\s)(?:y|z|A|B|_9|_8|h|_5|_4|__A|__c|__d|__a|__b|U|__Q|X|Z|V|W|l|q|r)[^\s]+/g) || [];
    rules += matches.join('');
    let $l = false;
    let $_8 = false;
    for (let p of matches){
        if (/^\s*l/.test(p)) $l = true;
        if (/^\s*_8/.test(p)) $_8 = true;
    }
    if (props.isFocusVisible) rules += ' _Lb';
    else rules += ' _La';
    rules += ' da_____z';
    if (props.staticColor === "black") rules += ' db';
    else if (props.staticColor === "white") rules += ' dc';
    else rules += ' dx';
    rules += ' _Nc';
    rules += ' _M-3t1z';
    rules += ' _Zd';
    rules += ' _1c';
    rules += ' _2d';
    if (!$l) {
        if (props.size === "XL") rules += ' lj';
        else if (props.size === "L") rules += ' li';
        else if (props.size === "S") rules += ' lh';
        else if (props.size === "XS") rules += ' lg';
        else rules += ' lf';
    }
    if (props.size === "XL") rules += ' kj';
    else if (props.size === "L") rules += ' ki';
    else if (props.size === "S") rules += ' kh';
    else if (props.size === "XS") rules += ' kg';
    else rules += ' kf';
    if (!$_8) rules += ' _8-3t1x';
    rules += ' _vf';
    rules += ' _wf';
    rules += ' _xf';
    rules += ' _yf';
    rules += ' Ea';
    rules += ' Fa';
    rules += ' Ca';
    rules += ' Da';
    rules += ' wf';
    rules += ' _Oa';
    rules += ' _Q-375x7f';
    rules += ' _Ra';
    if (props.isPressed) {
        if (props.staticColor === "black") rules += ' b_____k';
        else if (props.staticColor === "white") rules += ' b____7';
        else rules += ' bg';
    } else if (props.isFocusVisible) {
        if (props.staticColor === "black") rules += ' b_____k';
        else if (props.staticColor === "white") rules += ' b____7';
        else rules += ' bg';
    } else if (props.isHovered) {
        if (props.staticColor === "black") rules += ' b_____k';
        else if (props.staticColor === "white") rules += ' b____7';
        else rules += ' bg';
    } else rules += ' ba';
    if (props.staticColor === "black") {
        if (props.isDisabled) rules += ' -rwx0fg_a-_____n';
        else {
            if (props.isPressed) rules += ' -rwx0fg_a-_____s';
            else if (props.isFocusVisible) rules += ' -rwx0fg_a-_____s';
            else if (props.isHovered) rules += ' -rwx0fg_a-_____s';
            else rules += ' -rwx0fg_a-_____r';
        }
    } else if (props.staticColor === "white") {
        if (props.isDisabled) rules += ' -rwx0fg_a-_____a';
        else {
            if (props.isPressed) rules += ' -rwx0fg_a-_____f';
            else if (props.isFocusVisible) rules += ' -rwx0fg_a-_____f';
            else if (props.isHovered) rules += ' -rwx0fg_a-_____f';
            else rules += ' -rwx0fg_a-_____e';
        }
    } else if (props.isDisabled) rules += ' -rwx0fg_a-j';
    else {
        if (props.isPressed) rules += ' -rwx0fg_a-o';
        else if (props.isFocusVisible) rules += ' -rwx0fg_a-o';
        else if (props.isHovered) rules += ' -rwx0fg_a-o';
        else rules += ' -rwx0fg_a-n';
    }
    return rules;
};
const $a9cda54c4f47ce52$export$c796eec99a15b55d = /*#__PURE__*/ (0, $5wH0g$createContext)(null);
const $a9cda54c4f47ce52$export$de65de8213222d10 = /*#__PURE__*/ (0, $5wH0g$forwardRef)(function CloseButton(props, ref) {
    [props, ref] = (0, $5ce63c423902f47d$export$764f6146fadd77f7)(props, ref, $a9cda54c4f47ce52$export$c796eec99a15b55d);
    let { UNSAFE_style: UNSAFE_style, UNSAFE_className: UNSAFE_className = '' } = props;
    let domRef = (0, $5wH0g$useFocusableRef)(ref);
    let stringFormatter = (0, $5wH0g$useLocalizedStringFormatter)((0, ($parcel$interopDefault($5wH0g$intlStringsmjs))), '@react-spectrum/s2');
    return /*#__PURE__*/ (0, $5wH0g$jsx)((0, $5wH0g$Button), {
        ...props,
        ref: domRef,
        slot: "close",
        "aria-label": stringFormatter.format('dialog.dismiss'),
        style: (0, $10ea7662e51a285b$export$56e8cba416805d8d)(domRef, UNSAFE_style),
        className: (renderProps)=>UNSAFE_className + $a9cda54c4f47ce52$var$styles({
                ...renderProps,
                staticColor: props.staticColor
            }, props.styles),
        children: /*#__PURE__*/ (0, $5wH0g$jsx)((0, $bd983341bd35d639$export$2e2bcd8739ae039), {
            size: {
                S: 'L',
                M: 'XL',
                L: 'XXL',
                XL: 'XXXL'
            }[props.size || 'M']
        })
    });
});


export {$a9cda54c4f47ce52$export$c796eec99a15b55d as CloseButtonContext, $a9cda54c4f47ce52$export$de65de8213222d10 as CloseButton};
//# sourceMappingURL=CloseButton.mjs.map
