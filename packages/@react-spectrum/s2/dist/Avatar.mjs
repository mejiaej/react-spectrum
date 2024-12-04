import "./Avatar.css";
import {Image as $dbd6f0b2503b938c$export$3e431a229df88919} from "./Image.mjs";
import {useSpectrumContextProps as $5ce63c423902f47d$export$764f6146fadd77f7} from "../icons/useSpectrumContextProps.mjs";
import {jsx as $lGIgj$jsx} from "react/jsx-runtime";
import {createContext as $lGIgj$createContext, forwardRef as $lGIgj$forwardRef} from "react";
import {filterDOMProps as $lGIgj$filterDOMProps} from "@react-aria/utils";
import {useDOMRef as $lGIgj$useDOMRef} from "@react-spectrum/utils";

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





const $3ffa2cd930156220$var$imageStyles = function anonymous(props, overrides) {
    let rules = " .";
    let matches = (overrides || '').match(/(?:^|\s)(?:y|z|A|B|_9|_8|h|_5|_4|__A|__c|__d|__a|__b|U|__Q|X|Z|V|W)[^\s]+/g) || [];
    rules += matches.join('');
    let $_8 = false;
    let $_9 = false;
    for (let p of matches){
        if (/^\s*_8/.test(p)) $_8 = true;
        if (/^\s*_9/.test(p)) $_9 = true;
    }
    rules += ' _vf';
    rules += ' _wf';
    rules += ' _xf';
    rules += ' _yf';
    rules += ' lI';
    rules += ' kI';
    if (!$_8) rules += ' _8-3t1x';
    if (!$_9) rules += ' _9-3t1x';
    rules += ' __R-yksgrp';
    if (props.isOverBackground) rules += ' _Lb';
    else rules += ' _La';
    rules += ' d-1de2x0q';
    if (props.isLarge) rules += ' _Nc';
    else rules += ' _Nb';
    return rules;
};
const $3ffa2cd930156220$export$a20dad690e1279e2 = /*#__PURE__*/ (0, $lGIgj$createContext)(null);
const $3ffa2cd930156220$export$e2255cf6045e8d47 = /*#__PURE__*/ (0, $lGIgj$forwardRef)(function Avatar(props, ref) {
    [props, ref] = (0, $5ce63c423902f47d$export$764f6146fadd77f7)(props, ref, $3ffa2cd930156220$export$a20dad690e1279e2);
    let domRef = (0, $lGIgj$useDOMRef)(ref);
    let { alt: alt = '', src: src, UNSAFE_style: UNSAFE_style, UNSAFE_className: UNSAFE_className = '', size: size = 24, isOverBackground: isOverBackground, slot: slot = 'avatar', ...otherProps } = props;
    const domProps = (0, $lGIgj$filterDOMProps)(otherProps);
    let remSize = size / 16 + 'rem';
    let isLarge = size >= 64;
    return /*#__PURE__*/ (0, $lGIgj$jsx)((0, $dbd6f0b2503b938c$export$3e431a229df88919), {
        ...domProps,
        ref: domRef,
        slot: slot,
        alt: alt,
        UNSAFE_style: {
            ...UNSAFE_style,
            width: remSize,
            height: remSize
        },
        UNSAFE_className: UNSAFE_className,
        styles: $3ffa2cd930156220$var$imageStyles({
            isOverBackground: isOverBackground,
            isLarge: isLarge
        }, props.styles),
        src: src
    });
});


export {$3ffa2cd930156220$export$a20dad690e1279e2 as AvatarContext, $3ffa2cd930156220$export$e2255cf6045e8d47 as Avatar};
//# sourceMappingURL=Avatar.mjs.map
