import "./ProgressBar.css";
import {FieldLabel as $9afd80978c252040$export$1acdcf5a973a8414} from "./Field.mjs";
import {mergeStyles as $feb886035e0d4633$export$e618dc39ac9ad607} from "../icons/runtime.mjs";
import {useSpectrumContextProps as $5ce63c423902f47d$export$764f6146fadd77f7} from "../icons/useSpectrumContextProps.mjs";
import {jsx as $cNVLZ$jsx, jsxs as $cNVLZ$jsxs, Fragment as $cNVLZ$Fragment} from "react/jsx-runtime";
import {ProgressBar as $cNVLZ$ProgressBar} from "react-aria-components";
import {createContext as $cNVLZ$createContext, forwardRef as $cNVLZ$forwardRef} from "react";
import {useDOMRef as $cNVLZ$useDOMRef} from "@react-spectrum/utils";
import {useLocale as $cNVLZ$useLocale} from "@react-aria/i18n";

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







const $b847b7cd294eafba$export$e9f3bf65a26ce129 = /*#__PURE__*/ (0, $cNVLZ$createContext)(null);
const $b847b7cd294eafba$var$indeterminateLTR = "-vliq1d";
const $b847b7cd294eafba$var$indeterminateRTL = "-_167g35";
const $b847b7cd294eafba$var$wrapper = function anonymous(props, overrides) {
    let rules = " .";
    let matches = (overrides || '').match(/(?:^|\s)(?:y|z|A|B|_9|_8|h|_5|_4|__A|__c|__d|__a|__b|U|__Q|X|Z|V|W|l|q|r)[^\s]+/g) || [];
    rules += matches.join('');
    let $U = false;
    let $q = false;
    let $r = false;
    for (let p of matches){
        if (/^\s*U/.test(p)) $U = true;
        if (/^\s*q/.test(p)) $q = true;
        if (/^\s*r/.test(p)) $r = true;
    }
    if (!$U) rules += ' Uc';
    rules += ' _Zf';
    if (props.isIndeterminate) {
        if (props.labelPosition === "side") rules += ' __h-jyg4vb';
        else if (props.labelPosition === "top") rules += ' __h-375yi6';
    } else {
        if (props.labelPosition === "side") rules += ' __h-jyg4vb';
        else if (props.labelPosition === "top") rules += ' __h-1egg2pz';
    }
    if (props.isIndeterminate) {
        if (props.labelPosition === "side") rules += ' __j-1uh5wa';
        else if (props.labelPosition === "top") rules += ' __j-h9yogq';
    } else {
        if (props.labelPosition === "side") rules += ' __j-7y9rdj';
        else if (props.labelPosition === "top") rules += ' __j-6w8ip8';
    }
    rules += ' _1d';
    rules += ' __Fa';
    if (!$q) rules += ' q_a';
    if (!$r) rules += ' r____________N';
    if (props.size === "XL") rules += ' -aqrvqh_k-j';
    else if (props.size === "L") rules += ' -aqrvqh_k-i';
    else if (props.size === "S") rules += ' -aqrvqh_k-h';
    else if (props.size === "XS") rules += ' -aqrvqh_k-g';
    else rules += ' -aqrvqh_k-f';
    rules += ' -_1urhtf5_k-s';
    rules += ' -_1inj1bc_i--q18lfg';
    rules += ' je';
    return rules;
};
const $b847b7cd294eafba$var$valueStyles = function anonymous(props) {
    let rules = " .";
    rules += ' _c-bc1l9oh';
    rules += ' _c-1uotwbwg';
    rules += ' _c-eo0c6sf';
    rules += ' _c-enzzrge';
    rules += ' _c-enzykdd';
    rules += ' _c-enzwzjc';
    rules += ' _c-enzrfpb';
    rules += ' _ca';
    if (props.size === "XL") {
        rules += ' _dbj';
        rules += ' _di';
    } else if (props.size === "L") {
        rules += ' _dbh';
        rules += ' _dg';
    } else if (props.size === "S") {
        rules += ' _dbd';
        rules += ' _dc';
    } else if (props.size === "XS") {
        rules += ' _dbb';
        rules += ' _da';
    } else {
        rules += ' _dbf';
        rules += ' _de';
    }
    rules += ' _eb';
    rules += ' _f-1x99dlob';
    rules += ' _fa';
    rules += ' aa_____x';
    if (props.staticColor === "black") rules += ' a_____s';
    else if (props.staticColor === "white") rules += ' a_____d';
    else if (props.isDisabled) rules += ' aj';
    else {
        if (props.isPressed) rules += ' an';
        else if (props.isFocusVisible) rules += ' an';
        else if (props.isHovered) rules += ' an';
        else rules += ' am';
    }
    rules += ' __Hb';
    rules += ' __a-4lc1fm';
    rules += ' __b-4lc1fm';
    rules += ' __c-4lc1fm';
    rules += ' __d-4lc1fm';
    return rules;
};
const $b847b7cd294eafba$var$trackStyles = function anonymous(props) {
    let rules = " .";
    rules += ' __a-3773ju';
    rules += ' __b-3773ju';
    rules += ' __c-3773ju';
    rules += ' __d-3773ju';
    if (props.size === "XL") rules += ' qj';
    else if (props.size === "L") rules += ' qi';
    else if (props.size === "S") rules += ' qh';
    else if (props.size === "XS") rules += ' qg';
    else rules += ' qf';
    if (props.isQuiet) rules += ' __ma';
    else rules += ' __m-1s8glxue';
    if (props.size === "XL") rules += ' -usygro_l-____g';
    else if (props.size === "L") rules += ' -usygro_l-___0';
    else if (props.size === "S") rules += ' -usygro_l-___u';
    else rules += ' -usygro_l-___K';
    rules += ' m-rwozxi';
    rules += ' __vb';
    rules += ' __wb';
    rules += ' _vf';
    rules += ' _wf';
    rules += ' _xf';
    rules += ' _yf';
    rules += ' ba_____w';
    if (props.staticColor === "black") rules += ' b_____n';
    else if (props.staticColor === "white") rules += ' b____7';
    else rules += ' bi';
    rules += ' _Nab';
    rules += ' _Na';
    rules += ' _Lab';
    rules += ' _La';
    rules += ' da_____x';
    rules += ' da';
    rules += ' __Q-3t1y';
    if (props.size === "XL") rules += ' ky';
    else if (props.size === "L") rules += ' kw';
    else if (props.size === "M") rules += ' ku';
    else if (props.size === "S") rules += ' ks';
    else rules += ' ku';
    return rules;
};
const $b847b7cd294eafba$var$fill = function anonymous(props) {
    let rules = " .";
    rules += ' kb';
    rules += ' wf';
    rules += ' _vf';
    rules += ' _wf';
    rules += ' _xf';
    rules += ' _yf';
    rules += ' ba_____x';
    if (props.staticColor === "black") rules += ' b_____s';
    else if (props.staticColor === "white") rules += ' b_____f';
    else {
        if (props.isPressed) rules += ' b_____F';
        else if (props.isFocusVisible) rules += ' b_____F';
        else if (props.isHovered) rules += ' b_____F';
        else rules += ' b_____E';
    }
    if (props.isIndeterminate) rules += ' lb';
    if (props.isIndeterminate) rules += ' __Gh';
    return rules;
};
const $b847b7cd294eafba$var$indeterminateAnimation = function anonymous(props) {
    let rules = " .";
    if (props.direction === "rtl") rules += ' _S-2vmxa6';
    else if (props.direction === "ltr") rules += ' _S-1aanztv';
    rules += ' _T-yjb9nq';
    rules += ' _Ya';
    rules += ' _X-twzmrf';
    rules += ' __Pd';
    rules += ' Uc';
    return rules;
};
const $b847b7cd294eafba$export$c17561cb55d4db30 = /*#__PURE__*/ (0, $cNVLZ$forwardRef)(function ProgressBar(props, ref) {
    [props, ref] = (0, $5ce63c423902f47d$export$764f6146fadd77f7)(props, ref, $b847b7cd294eafba$export$e9f3bf65a26ce129);
    let { label: label, size: size = 'M', staticColor: staticColor, isIndeterminate: isIndeterminate, labelPosition: labelPosition = 'top', UNSAFE_style: UNSAFE_style, UNSAFE_className: UNSAFE_className = '' } = props;
    let domRef = (0, $cNVLZ$useDOMRef)(ref);
    let { direction: direction } = (0, $cNVLZ$useLocale)();
    return /*#__PURE__*/ (0, $cNVLZ$jsx)((0, $cNVLZ$ProgressBar), {
        ...props,
        ref: domRef,
        style: UNSAFE_style,
        className: UNSAFE_className + $b847b7cd294eafba$var$wrapper({
            ...props,
            size: size,
            labelPosition: labelPosition
        }, props.styles),
        children: ({ percentage: percentage, valueText: valueText })=>/*#__PURE__*/ (0, $cNVLZ$jsxs)((0, $cNVLZ$Fragment), {
                children: [
                    label && /*#__PURE__*/ (0, $cNVLZ$jsx)((0, $9afd80978c252040$export$1acdcf5a973a8414), {
                        size: size,
                        labelAlign: "start",
                        labelPosition: labelPosition,
                        staticColor: staticColor,
                        children: label
                    }),
                    label && !isIndeterminate && /*#__PURE__*/ (0, $cNVLZ$jsx)("span", {
                        className: $b847b7cd294eafba$var$valueStyles({
                            size: size,
                            labelAlign: 'end',
                            staticColor: staticColor
                        }),
                        children: valueText
                    }),
                    /*#__PURE__*/ (0, $cNVLZ$jsx)("div", {
                        className: $b847b7cd294eafba$var$trackStyles({
                            ...props
                        }),
                        children: /*#__PURE__*/ (0, $cNVLZ$jsx)("div", {
                            className: (0, $feb886035e0d4633$export$e618dc39ac9ad607)($b847b7cd294eafba$var$fill({
                                ...props,
                                staticColor: staticColor
                            }), isIndeterminate ? $b847b7cd294eafba$var$indeterminateAnimation({
                                direction: direction
                            }) : null),
                            style: {
                                width: isIndeterminate ? undefined : percentage + '%'
                            }
                        })
                    })
                ]
            })
    });
});


export {$b847b7cd294eafba$export$e9f3bf65a26ce129 as ProgressBarContext, $b847b7cd294eafba$export$c17561cb55d4db30 as ProgressBar};
//# sourceMappingURL=ProgressBar.mjs.map
