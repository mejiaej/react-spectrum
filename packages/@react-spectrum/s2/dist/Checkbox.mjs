import "./Checkbox.css";
import {CenterBaseline as $1f4b04be3f24aae3$export$768dac55bb57081d} from "./CenterBaseline.mjs";
import $81cf3d4588736e7d$export$2e2bcd8739ae039 from "./Checkmark.mjs";
import $f17037051ff08dc2$export$2e2bcd8739ae039 from "./Dash.mjs";
import {FormContext as $9b916426527cebe7$export$c24727297075ec6a, useFormProps as $9b916426527cebe7$export$a6b5be5c6b451665} from "./Form.mjs";
import {pressScale as $10ea7662e51a285b$export$56e8cba416805d8d} from "./pressScale.mjs";
import {useSpectrumContextProps as $5ce63c423902f47d$export$764f6146fadd77f7} from "../icons/useSpectrumContextProps.mjs";
import {jsx as $5oFhd$jsx, jsxs as $5oFhd$jsxs, Fragment as $5oFhd$Fragment} from "react/jsx-runtime";
import {CheckboxGroupStateContext as $5oFhd$CheckboxGroupStateContext, useSlottedContext as $5oFhd$useSlottedContext, Checkbox as $5oFhd$Checkbox} from "react-aria-components";
import {createContext as $5oFhd$createContext, forwardRef as $5oFhd$forwardRef, useRef as $5oFhd$useRef, useContext as $5oFhd$useContext} from "react";
import {useFocusableRef as $5oFhd$useFocusableRef} from "@react-spectrum/utils";

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









const $9b405e0f8095dce0$export$b085522c77523c51 = /*#__PURE__*/ (0, $5oFhd$createContext)(null);
const $9b405e0f8095dce0$var$wrapper = function anonymous(props, overrides) {
    let rules = " .";
    let matches = (overrides || '').match(/(?:^|\s)(?:y|z|A|B|_9|_8|h|_5|_4|__A|__c|__d|__a|__b|U|__Q|X|Z|V|W|l|q|r)[^\s]+/g) || [];
    rules += matches.join('');
    let $l = false;
    let $__a = false;
    for (let p of matches){
        if (/^\s*l/.test(p)) $l = true;
        if (/^\s*__a/.test(p)) $__a = true;
    }
    rules += ' _Zd';
    rules += ' jF';
    rules += ' _1d';
    if (!$l) rules += ' le';
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
    if (props.isDisabled) {
        rules += ' aa_____B';
        rules += ' aj';
    } else {
        if (props.isPressed) rules += ' ao';
        else if (props.isFocusVisible) rules += ' ao';
        else if (props.isHovered) rules += ' ao';
        else rules += ' an';
    }
    rules += ' _Ob';
    rules += ' _Q-375x7f';
    rules += ' _Ra';
    if (!$__a) {
        if (props.isInForm) rules += ' __a-4a7c5l';
    }
    rules += ' __R-yksgrp';
    return rules;
};
const $9b405e0f8095dce0$export$827f4ee28efc37 = function anonymous(props) {
    let rules = " .";
    if (props.isFocusVisible) rules += ' _Lb';
    else rules += ' _La';
    rules += ' da_____z';
    rules += ' dx';
    rules += ' _Nc';
    rules += ' _M-3t1z';
    if (props.size === "XL") rules += ' lg';
    else if (props.size === "L") rules += ' lm';
    else if (props.size === "S") rules += ' ll';
    else rules += ' lk';
    if (props.size === "XL") rules += ' kg';
    else if (props.size === "L") rules += ' km';
    else if (props.size === "S") rules += ' kl';
    else rules += ' kk';
    rules += ' _vi';
    rules += ' _wi';
    rules += ' _xi';
    rules += ' _yi';
    rules += ' _8-3t1x';
    rules += ' _Zd';
    rules += ' _1c';
    rules += ' _2d';
    rules += ' uc';
    rules += ' vc';
    rules += ' sc';
    rules += ' tc';
    rules += ' __na';
    rules += ' wa';
    rules += ' _Oa';
    rules += ' _Q-375x7f';
    rules += ' _Ra';
    rules += ' _zb';
    if (props.isSelected) {
        if (props.isDisabled) {
            rules += ' ba_____B';
            rules += ' bj';
        } else if (props.isInvalid) {
            rules += ' ba_____C';
            if (props.isPressed) rules += ' bP';
            else if (props.isFocusVisible) rules += ' bP';
            else if (props.isHovered) rules += ' bP';
            else rules += ' bO';
        } else {
            rules += ' ba_____z';
            if (props.isEmphasized) {
                if (props.isPressed) rules += ' bz';
                else if (props.isFocusVisible) rules += ' bz';
                else if (props.isHovered) rules += ' bz';
                else rules += ' by';
            } else {
                if (props.isPressed) rules += ' bo';
                else if (props.isFocusVisible) rules += ' bo';
                else if (props.isHovered) rules += ' bo';
                else rules += ' bn';
            }
        }
    } else {
        rules += ' ba_____u';
        rules += ' bd';
    }
    if (props.isSelected) rules += ' ca';
    else if (props.isDisabled) {
        rules += ' ca_____B';
        rules += ' cj';
    } else if (props.isInvalid) {
        rules += ' ca_____C';
        if (props.isPressed) rules += ' cQ';
        else if (props.isFocusVisible) rules += ' cP';
        else if (props.isHovered) rules += ' cP';
        else rules += ' cO';
    } else {
        rules += ' ca_____v';
        if (props.isPressed) rules += ' co';
        else if (props.isFocusVisible) rules += ' co';
        else if (props.isHovered) rules += ' co';
        else rules += ' cn';
    }
    return rules;
};
const $9b405e0f8095dce0$export$2c99b98b77550cb4 = " . -rwx0fg_e-B -rwx0fg_e-a_____Y";
const $9b405e0f8095dce0$var$iconSize = {
    S: 'XS',
    M: 'S',
    L: 'M',
    XL: 'L'
};
const $9b405e0f8095dce0$export$48513f6b9f8ce62d = /*#__PURE__*/ (0, $5oFhd$forwardRef)(function Checkbox({ children: children, ...props }, ref) {
    [props, ref] = (0, $5ce63c423902f47d$export$764f6146fadd77f7)(props, ref, $9b405e0f8095dce0$export$b085522c77523c51);
    let boxRef = (0, $5oFhd$useRef)(null);
    let inputRef = (0, $5oFhd$useRef)(null);
    let domRef = (0, $5oFhd$useFocusableRef)(ref, inputRef);
    let isInForm = !!(0, $5oFhd$useContext)((0, $9b916426527cebe7$export$c24727297075ec6a));
    props = (0, $9b916426527cebe7$export$a6b5be5c6b451665)(props);
    let isInCheckboxGroup = !!(0, $5oFhd$useContext)((0, $5oFhd$CheckboxGroupStateContext));
    let ctx = (0, $5oFhd$useSlottedContext)($9b405e0f8095dce0$export$b085522c77523c51, props.slot);
    return /*#__PURE__*/ (0, $5oFhd$jsx)((0, $5oFhd$Checkbox), {
        ...props,
        ref: domRef,
        inputRef: inputRef,
        style: props.UNSAFE_style,
        className: (renderProps)=>(props.UNSAFE_className || '') + $9b405e0f8095dce0$var$wrapper({
                ...renderProps,
                isInForm: isInForm,
                size: props.size || 'M'
            }, props.styles),
        children: (renderProps)=>{
            let checkbox = /*#__PURE__*/ (0, $5oFhd$jsxs)("div", {
                ref: boxRef,
                style: (0, $10ea7662e51a285b$export$56e8cba416805d8d)(boxRef)(renderProps),
                className: $9b405e0f8095dce0$export$827f4ee28efc37({
                    ...renderProps,
                    isSelected: renderProps.isSelected || renderProps.isIndeterminate,
                    size: props.size || 'M',
                    isEmphasized: isInCheckboxGroup ? ctx?.isEmphasized : props.isEmphasized
                }),
                children: [
                    renderProps.isIndeterminate && /*#__PURE__*/ (0, $5oFhd$jsx)((0, $f17037051ff08dc2$export$2e2bcd8739ae039), {
                        size: $9b405e0f8095dce0$var$iconSize[props.size || 'M'],
                        className: $9b405e0f8095dce0$export$2c99b98b77550cb4
                    }),
                    renderProps.isSelected && !renderProps.isIndeterminate && /*#__PURE__*/ (0, $5oFhd$jsx)((0, $81cf3d4588736e7d$export$2e2bcd8739ae039), {
                        size: $9b405e0f8095dce0$var$iconSize[props.size || 'M'],
                        className: $9b405e0f8095dce0$export$2c99b98b77550cb4
                    })
                ]
            });
            // Only render checkbox without center baseline if no label.
            // This avoids expanding the checkbox height to the font's line height.
            if (!children) return checkbox;
            return /*#__PURE__*/ (0, $5oFhd$jsxs)((0, $5oFhd$Fragment), {
                children: [
                    /*#__PURE__*/ (0, $5oFhd$jsx)((0, $1f4b04be3f24aae3$export$768dac55bb57081d), {
                        children: checkbox
                    }),
                    children
                ]
            });
        }
    });
});


export {$9b405e0f8095dce0$export$b085522c77523c51 as CheckboxContext, $9b405e0f8095dce0$export$827f4ee28efc37 as box, $9b405e0f8095dce0$export$2c99b98b77550cb4 as iconStyles, $9b405e0f8095dce0$export$48513f6b9f8ce62d as Checkbox};
//# sourceMappingURL=Checkbox.mjs.map
