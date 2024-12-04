import "./ActionButton.css";
import {ActionButtonGroupContext as $10401bdc118cbc90$export$33f5f2f2cb85d743} from "./ActionButtonGroup.mjs";
import {AvatarContext as $3ffa2cd930156220$export$a20dad690e1279e2} from "./Avatar.mjs";
import {centerBaseline as $1f4b04be3f24aae3$export$9d7e2342a7e53afa} from "./CenterBaseline.mjs";
import {IconContext as $ac8c32e6775ddd1f$export$a49f528ae1a4d0ed} from "../icons/Icon.mjs";
import {pressScale as $10ea7662e51a285b$export$56e8cba416805d8d} from "./pressScale.mjs";
import {SkeletonContext as $5ad421ec19460c48$export$74e166679b1f49ee} from "../icons/Skeleton.mjs";
import {Text as $8e847109a6ab556d$export$5f1af8db9871e1d6, TextContext as $8e847109a6ab556d$export$9afb8bc826b033ea} from "./Content.mjs";
import {useFormProps as $9b916426527cebe7$export$a6b5be5c6b451665} from "./Form.mjs";
import {useSpectrumContextProps as $5ce63c423902f47d$export$764f6146fadd77f7} from "../icons/useSpectrumContextProps.mjs";
import {jsx as $hl1Zj$jsx} from "react/jsx-runtime";
import {OverlayTriggerStateContext as $hl1Zj$OverlayTriggerStateContext, useSlottedContext as $hl1Zj$useSlottedContext, Button as $hl1Zj$Button, Provider as $hl1Zj$Provider} from "react-aria-components";
import {createContext as $hl1Zj$createContext, forwardRef as $hl1Zj$forwardRef, useContext as $hl1Zj$useContext} from "react";
import {useFocusableRef as $hl1Zj$useFocusableRef} from "@react-spectrum/utils";

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












// These styles handle both ActionButton and ToggleButton
const $da878a05ab4a403e$var$iconOnly = ':has([slot=icon], [slot=avatar]):not(:has([data-rsp-slot=text]))';
const $da878a05ab4a403e$export$446543cff2a0f496 = function anonymous(props, overrides) {
    let rules = " .";
    let matches = (overrides || '').match(/(?:^|\s)(?:y|z|A|B|_9|_8|h|_5|_4|__A|__c|__d|__a|__b|U|__Q|X|Z|V|W|l|q|r)[^\s]+/g) || [];
    rules += matches.join('');
    let $_8 = false;
    let $_9 = false;
    let $h = false;
    let $q = false;
    let $__Q = false;
    for (let p of matches){
        if (/^\s*_8/.test(p)) $_8 = true;
        if (/^\s*_9/.test(p)) $_9 = true;
        if (/^\s*h/.test(p)) $h = true;
        if (/^\s*q/.test(p)) $q = true;
        if (/^\s*__Q/.test(p)) $__Q = true;
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
    rules += ' jbH';
    rules += ' jG';
    if (!$_8) {
        if (props.isInGroup) rules += ' _8-3t1x';
        else rules += ' _8-3t1y';
    }
    if (!$_9) {
        if (props.isJustified) rules += ' _9-3t1y';
    }
    if (!$h) {
        if (props.isJustified) rules += ' ha';
    }
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
    rules += ' _ec';
    rules += ' _f-1x99dlob';
    rules += ' _fa';
    if (props.isDisabled) rules += ' aa_____B';
    else if (props.isSelected) rules += ' aa_____A';
    else rules += ' aa_____x';
    if (props.staticColor === "black") {
        if (props.isDisabled) rules += ' a_____n';
        else if (props.isSelected) rules += ' ac';
        else {
            if (props.isPressed) rules += ' a_____s';
            else if (props.isFocusVisible) rules += ' a_____s';
            else if (props.isHovered) rules += ' a_____s';
            else rules += ' a_____r';
        }
    } else if (props.staticColor === "white") {
        if (props.isDisabled) rules += ' a_____a';
        else if (props.isSelected) rules += ' ab';
        else {
            if (props.isPressed) rules += ' a_____f';
            else if (props.isFocusVisible) rules += ' a_____f';
            else if (props.isHovered) rules += ' a_____f';
            else rules += ' a_____e';
        }
    } else if (props.isDisabled) rules += ' aj';
    else if (props.isSelected) {
        if (props.isEmphasized) rules += ' ac';
        else rules += ' ad';
    } else {
        if (props.isPressed) rules += ' ao';
        else if (props.isFocusVisible) rules += ' ao';
        else if (props.isHovered) rules += ' ao';
        else rules += ' an';
    }
    rules += ' __Da';
    rules += ' k-375toq';
    if (!$q) {
        if (props.size === "XL") rules += ' qj';
        else if (props.size === "L") rules += ' qi';
        else if (props.size === "S") rules += ' qh';
        else if (props.size === "XS") rules += ' qg';
        else rules += ' qf';
    }
    rules += ' _Oa';
    rules += ' _Q-375x7f';
    rules += ' _Ra';
    rules += ' _zb';
    if (props.isSelected) {
        if (props.isDisabled) rules += ' ba_____w';
        else rules += ' ba_____z';
    } else rules += ' ba_____w';
    if (props.staticColor === "black") {
        if (props.isSelected) {
            if (props.isDisabled) {
                if (props.isQuiet) rules += ' ba';
                else rules += ' b_____k';
            } else {
                if (props.isPressed) rules += ' b_____s';
                else if (props.isFocusVisible) rules += ' b_____s';
                else if (props.isHovered) rules += ' b_____s';
                else rules += ' b_____r';
            }
        } else if (props.isPressed) rules += ' b_____l';
        else if (props.isFocusVisible) rules += ' b_____l';
        else if (props.isHovered) rules += ' b_____l';
        else if (props.isQuiet) rules += ' ba';
        else rules += ' b_____k';
    } else if (props.staticColor === "white") {
        if (props.isSelected) {
            if (props.isDisabled) {
                if (props.isQuiet) rules += ' ba';
                else rules += ' b____7';
            } else {
                if (props.isPressed) rules += ' b_____f';
                else if (props.isFocusVisible) rules += ' b_____f';
                else if (props.isHovered) rules += ' b_____f';
                else rules += ' b_____e';
            }
        } else if (props.isPressed) rules += ' b____8';
        else if (props.isFocusVisible) rules += ' b____8';
        else if (props.isHovered) rules += ' b____8';
        else if (props.isQuiet) rules += ' ba';
        else rules += ' b____7';
    } else if (props.isSelected) {
        if (props.isDisabled) {
            if (props.isQuiet) rules += ' ba';
            else rules += ' bg';
        } else if (props.isEmphasized) {
            if (props.isPressed) rules += ' b_____F';
            else if (props.isFocusVisible) rules += ' b_____F';
            else if (props.isHovered) rules += ' b_____F';
            else rules += ' b_____E';
        } else {
            if (props.isPressed) rules += ' bo';
            else if (props.isFocusVisible) rules += ' bo';
            else if (props.isHovered) rules += ' bo';
            else rules += ' bn';
        }
    } else {
        if (props.isPressed) rules += ' bh';
        else if (props.isFocusVisible) rules += ' bh';
        else if (props.isHovered) rules += ' bh';
        else if (props.isQuiet) rules += ' ba';
        else rules += ' bg';
    }
    rules += ' -rwx0fg_e-b';
    rules += ' wf';
    rules += ' C-1imc51ya';
    rules += ' CI';
    rules += ' D-1imc51ya';
    rules += ' DI';
    rules += ' Ea';
    rules += ' Fa';
    if (props.density === "compact") {
        rules += ' _v-13alit4h';
        rules += ' _va';
    } else rules += ' _vh';
    if (props.density === "compact") {
        if (props.orientation === "vertical") rules += ' _w-13alit4h';
        else if (props.orientation === "horizontal") rules += ' _w-uamghwh';
        else rules += ' _wa';
    } else rules += ' _wh';
    if (props.density === "compact") {
        if (props.orientation === "vertical") rules += ' _x-uamghwh';
        else if (props.orientation === "horizontal") rules += ' _x-13alit4h';
        else rules += ' _xa';
    } else rules += ' _xh';
    if (props.density === "compact") {
        rules += ' _y-uamghwh';
        rules += ' _ya';
    } else rules += ' _yh';
    rules += ' -oelgqu_A--1imc51ya';
    rules += ' -oelgqu_A--177861o';
    if (!$__Q) {
        if (props.isFocusVisible) rules += ' __Q-3t1z';
    }
    rules += ' __R-yksgrp';
    if (props.size === "XL") rules += ' -_375toq_k-j';
    else if (props.size === "L") rules += ' -_375toq_k-i';
    else if (props.size === "S") rules += ' -_375toq_k-h';
    else if (props.size === "XS") rules += ' -_375toq_k-g';
    else rules += ' -_375toq_k-f';
    return rules;
};
// Matching icon sizes. TBD.
const $da878a05ab4a403e$var$avatarSize = {
    XS: 14,
    S: 16,
    M: 20,
    L: 22,
    X: 26
};
const $da878a05ab4a403e$export$2ff682723a46d413 = /*#__PURE__*/ (0, $hl1Zj$createContext)(null);
const $da878a05ab4a403e$export$cfc7921d29ef7b80 = /*#__PURE__*/ (0, $hl1Zj$forwardRef)(function ActionButton(props, ref) {
    [props, ref] = (0, $5ce63c423902f47d$export$764f6146fadd77f7)(props, ref, $da878a05ab4a403e$export$2ff682723a46d413);
    props = (0, $9b916426527cebe7$export$a6b5be5c6b451665)(props);
    let domRef = (0, $hl1Zj$useFocusableRef)(ref);
    let overlayTriggerState = (0, $hl1Zj$useContext)((0, $hl1Zj$OverlayTriggerStateContext));
    let ctx = (0, $hl1Zj$useSlottedContext)((0, $10401bdc118cbc90$export$33f5f2f2cb85d743));
    let isInGroup = !!ctx;
    let { density: density = 'regular', isJustified: isJustified, orientation: orientation = 'horizontal', staticColor: staticColor = props.staticColor, isQuiet: isQuiet = props.isQuiet, size: size = props.size || 'M', isDisabled: isDisabled = props.isDisabled } = ctx || {};
    return /*#__PURE__*/ (0, $hl1Zj$jsx)((0, $hl1Zj$Button), {
        ...props,
        isDisabled: isDisabled,
        ref: domRef,
        style: (0, $10ea7662e51a285b$export$56e8cba416805d8d)(domRef, props.UNSAFE_style),
        className: (renderProps)=>(props.UNSAFE_className || '') + $da878a05ab4a403e$export$446543cff2a0f496({
                ...renderProps,
                // Retain hover styles when an overlay is open.
                isHovered: renderProps.isHovered || overlayTriggerState?.isOpen || false,
                staticColor: staticColor,
                size: size,
                isQuiet: isQuiet,
                density: density,
                isJustified: isJustified,
                orientation: orientation,
                isInGroup: isInGroup
            }, props.styles),
        children: /*#__PURE__*/ (0, $hl1Zj$jsx)((0, $hl1Zj$Provider), {
            values: [
                [
                    (0, $5ad421ec19460c48$export$74e166679b1f49ee),
                    null
                ],
                [
                    (0, $8e847109a6ab556d$export$9afb8bc826b033ea),
                    {
                        styles: " . E-1gogtue F-1gogtue __A-3t1y __vb __wb _ma _pb"
                    }
                ],
                [
                    (0, $ac8c32e6775ddd1f$export$a49f528ae1a4d0ed),
                    {
                        render: (0, $1f4b04be3f24aae3$export$9d7e2342a7e53afa)({
                            slot: 'icon',
                            styles: " . __A-3t1x"
                        }),
                        styles: " . l-1sthc3k k-1sthc3k y-oelgqu _8-3t1x"
                    }
                ],
                [
                    (0, $3ffa2cd930156220$export$a20dad690e1279e2),
                    {
                        size: $da878a05ab4a403e$var$avatarSize[size],
                        styles: " . y-oelgqu _8-3t1x __A-3t1x"
                    }
                ]
            ],
            children: typeof props.children === 'string' ? /*#__PURE__*/ (0, $hl1Zj$jsx)((0, $8e847109a6ab556d$export$5f1af8db9871e1d6), {
                children: props.children
            }) : props.children
        })
    });
});


export {$da878a05ab4a403e$export$446543cff2a0f496 as btnStyles, $da878a05ab4a403e$export$2ff682723a46d413 as ActionButtonContext, $da878a05ab4a403e$export$cfc7921d29ef7b80 as ActionButton};
//# sourceMappingURL=ActionButton.mjs.map
