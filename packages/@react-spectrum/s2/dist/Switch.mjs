import "./Switch.css";
import {CenterBaseline as $1f4b04be3f24aae3$export$768dac55bb57081d} from "./CenterBaseline.mjs";
import {FormContext as $9b916426527cebe7$export$c24727297075ec6a, useFormProps as $9b916426527cebe7$export$a6b5be5c6b451665} from "./Form.mjs";
import {pressScale as $10ea7662e51a285b$export$56e8cba416805d8d} from "./pressScale.mjs";
import {useSpectrumContextProps as $5ce63c423902f47d$export$764f6146fadd77f7} from "../icons/useSpectrumContextProps.mjs";
import {jsx as $8aRsI$jsx, jsxs as $8aRsI$jsxs, Fragment as $8aRsI$Fragment} from "react/jsx-runtime";
import {Switch as $8aRsI$Switch} from "react-aria-components";
import {createContext as $8aRsI$createContext, forwardRef as $8aRsI$forwardRef, useRef as $8aRsI$useRef, useContext as $8aRsI$useContext} from "react";
import {useFocusableRef as $8aRsI$useFocusableRef} from "@react-spectrum/utils";

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







const $8926b17b75ae985d$export$8699e3b644d5a28a = /*#__PURE__*/ (0, $8aRsI$createContext)(null);
const $8926b17b75ae985d$var$wrapper = function anonymous(props, overrides) {
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
const $8926b17b75ae985d$var$track = function anonymous(props) {
    let rules = " .";
    if (props.isFocusVisible) rules += ' _Lb';
    else rules += ' _La';
    rules += ' da_____z';
    rules += ' dx';
    rules += ' _Nc';
    rules += ' _M-3t1z';
    rules += ' _vf';
    rules += ' _wf';
    rules += ' _xf';
    rules += ' _yf';
    rules += ' -rcxrzo_l--unb2ci';
    if (props.size === "XL") rules += ' -_14pdrm5_k-g';
    else if (props.size === "L") rules += ' -_14pdrm5_k-m';
    else if (props.size === "S") rules += ' -_14pdrm5_k-l';
    else rules += ' -_14pdrm5_k-k';
    rules += ' l-rcxrzo';
    rules += ' k-14pdrm5';
    rules += ' __na';
    rules += ' uc';
    rules += ' vc';
    rules += ' sc';
    rules += ' tc';
    rules += ' wa';
    rules += ' _Oa';
    rules += ' _Q-375x7f';
    rules += ' _Ra';
    rules += ' _zb';
    if (props.isSelected) rules += ' ca';
    else if (props.isDisabled) {
        rules += ' ca_____B';
        rules += ' cj';
    } else {
        rules += ' ca_____v';
        if (props.isPressed) rules += ' co';
        else if (props.isFocusVisible) rules += ' co';
        else if (props.isHovered) rules += ' co';
        else rules += ' cn';
    }
    if (props.isSelected) {
        if (props.isDisabled) {
            rules += ' ba_____B';
            rules += ' bj';
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
    } else rules += ' bd';
    return rules;
};
const $8926b17b75ae985d$var$handle = function anonymous(props) {
    let rules = " .";
    rules += ' kb';
    rules += ' _bb';
    rules += ' _vf';
    rules += ' _wf';
    rules += ' _xf';
    rules += ' _yf';
    if (props.isSelected) rules += ' bd';
    else if (props.isDisabled) {
        rules += ' ba_____B';
        rules += ' bj';
    } else {
        if (props.isPressed) rules += ' bo';
        else if (props.isFocusVisible) rules += ' bo';
        else if (props.isHovered) rules += ' bo';
        else rules += ' bn';
    }
    rules += ' _Oa';
    rules += ' _Q-375x7f';
    rules += ' _Ra';
    return rules;
};
// Use an inline style to calculate the transform so we can combine it with the press scale.
const $8926b17b75ae985d$var$transformStyle = ({ isSelected: isSelected })=>({
        // In the default state, the handle is 8px smaller than the track. When selected it grows to 6px smaller than the track.
        // Normally this could be calculated as a scale transform with (trackHeight - 8px) / trackHeight, however,
        // CSS does not allow division with units. To solve this we use a 3d perspective transform. Perspective is the
        // distance from the Z=0 plane to the viewer. Since we want to scale the handle by a fixed amount and we cannot divide
        // by a value with units, we can set the Z translation to a fixed amount and change the perspective in order to achieve
        // the desired effect. Given the following formula:
        //
        //   scale = perspective / (perspective - translateZ)
        //
        // and desired scale factors (accounting for the 2px border on each side of the track):
        //
        //   defaultScale = (trackHeight - 8px) / (trackHeight - 4px)
        //   selectedScale = (trackHeight - 6px) / (trackHeight - 4px)
        //
        // we can solve for the perspective needed in each case where translateZ is hard coded to -4px:
        //
        //    defaultPerspective = trackHeight - 8px
        //    selectedPerspective = 2 * (trackHeight - 6px)
        transform: isSelected ? 'translateX(calc(var(--trackWidth) - 100% - 4px)) perspective(calc(2 * (var(--trackHeight) - 6px))) translateZ(-4px)' : 'perspective(calc(var(--trackHeight) - 8px)) translateZ(-4px)'
    });
const $8926b17b75ae985d$export$b5d5cf8927ab7262 = /*#__PURE__*/ (0, $8aRsI$forwardRef)(function Switch(props, ref) {
    [props, ref] = (0, $5ce63c423902f47d$export$764f6146fadd77f7)(props, ref, $8926b17b75ae985d$export$8699e3b644d5a28a);
    let { children: children, UNSAFE_className: UNSAFE_className = '', UNSAFE_style: UNSAFE_style } = props;
    let inputRef = (0, $8aRsI$useRef)(null);
    let domRef = (0, $8aRsI$useFocusableRef)(ref, inputRef);
    let handleRef = (0, $8aRsI$useRef)(null);
    let isInForm = !!(0, $8aRsI$useContext)((0, $9b916426527cebe7$export$c24727297075ec6a));
    props = (0, $9b916426527cebe7$export$a6b5be5c6b451665)(props);
    return /*#__PURE__*/ (0, $8aRsI$jsx)((0, $8aRsI$Switch), {
        ...props,
        ref: domRef,
        inputRef: inputRef,
        style: UNSAFE_style,
        className: (renderProps)=>UNSAFE_className + $8926b17b75ae985d$var$wrapper({
                ...renderProps,
                isInForm: isInForm,
                size: props.size || 'M'
            }, props.styles),
        children: (renderProps)=>/*#__PURE__*/ (0, $8aRsI$jsxs)((0, $8aRsI$Fragment), {
                children: [
                    /*#__PURE__*/ (0, $8aRsI$jsx)((0, $1f4b04be3f24aae3$export$768dac55bb57081d), {
                        children: /*#__PURE__*/ (0, $8aRsI$jsx)("div", {
                            className: $8926b17b75ae985d$var$track({
                                ...renderProps,
                                size: props.size || 'M',
                                isEmphasized: props.isEmphasized
                            }),
                            children: /*#__PURE__*/ (0, $8aRsI$jsx)("div", {
                                ref: handleRef,
                                style: (0, $10ea7662e51a285b$export$56e8cba416805d8d)(handleRef, $8926b17b75ae985d$var$transformStyle)(renderProps),
                                className: $8926b17b75ae985d$var$handle(renderProps)
                            })
                        })
                    }),
                    children
                ]
            })
    });
});


export {$8926b17b75ae985d$export$8699e3b644d5a28a as SwitchContext, $8926b17b75ae985d$export$b5d5cf8927ab7262 as Switch};
//# sourceMappingURL=Switch.mjs.map
