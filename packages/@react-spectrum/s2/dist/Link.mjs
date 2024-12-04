import "./Link.css";
import {SkeletonContext as $5ad421ec19460c48$export$74e166679b1f49ee, useSkeletonText as $5ad421ec19460c48$export$a05a0b8a311cd65f} from "../icons/Skeleton.mjs";
import {useSpectrumContextProps as $5ce63c423902f47d$export$764f6146fadd77f7} from "../icons/useSpectrumContextProps.mjs";
import {jsx as $d6Kqa$jsx} from "react/jsx-runtime";
import {Link as $d6Kqa$Link} from "react-aria-components";
import {createContext as $d6Kqa$createContext, forwardRef as $d6Kqa$forwardRef, useContext as $d6Kqa$useContext} from "react";
import {useFocusableRef as $d6Kqa$useFocusableRef} from "@react-spectrum/utils";
import {useLayoutEffect as $d6Kqa$useLayoutEffect} from "@react-aria/utils";

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






const $f50c78733c21bfe2$export$e2509388b49734e7 = /*#__PURE__*/ (0, $d6Kqa$createContext)(null);
const $f50c78733c21bfe2$var$link = function anonymous(props, overrides) {
    let rules = " .";
    let matches = (overrides || '').match(/(?:^|\s)(?:y|z|A|B|_9|_8|h|_5|_4|__A|__c|__d|__a|__b|U|__Q|X|Z|V|W|l|q|r)[^\s]+/g) || [];
    rules += matches.join('');
    if (props.isFocusVisible) rules += ' _Lb';
    else rules += ' _La';
    rules += ' da_____z';
    if (props.staticColor === "black") rules += ' db';
    else if (props.staticColor === "white") rules += ' dc';
    else rules += ' dx';
    rules += ' _Nc';
    rules += ' _M-3t1z';
    rules += ' _vb';
    rules += ' _wb';
    rules += ' _xb';
    rules += ' _yb';
    if (props.isStandalone) {
        rules += ' _c-bc1l9oh';
        rules += ' _c-1uotwbwg';
        rules += ' _c-eo0c6sf';
        rules += ' _c-enzzrge';
        rules += ' _c-enzykdd';
        rules += ' _c-enzwzjc';
        rules += ' _c-enzrfpb';
        rules += ' _ca';
    }
    if (props.isStandalone) {
        rules += ' _dbf';
        rules += ' _de';
    }
    if (props.isStandalone) rules += ' _ec';
    if (props.isStandalone) {
        rules += ' _f-1x99dlob';
        rules += ' _fa';
    }
    rules += ' aa_____D';
    if (props.staticColor === "black") rules += ' ab';
    else if (props.staticColor === "white") rules += ' ac';
    else if (props.variant === "secondary") {
        if (props.isPressed) rules += ' ao';
        else if (props.isFocusVisible) rules += ' ao';
        else if (props.isHovered) rules += ' ao';
        else rules += ' an';
    } else if (props.variant === "primary") {
        if (props.isPressed) rules += ' az';
        else if (props.isFocusVisible) rules += ' az';
        else if (props.isHovered) rules += ' az';
        else rules += ' ay';
    }
    rules += ' _Oa';
    rules += ' _Q-375x7f';
    rules += ' _Ra';
    if (props.isStandalone) {
        if (props.isQuiet) {
            if (props.isFocusVisible) rules += ' _la';
            else if (props.isHovered) rules += ' _la';
            else rules += ' _ld';
        }
    } else rules += ' _la';
    rules += ' __R-yksgrp';
    return rules;
};
const $f50c78733c21bfe2$export$a6c7ac8248d6e38a = /*#__PURE__*/ (0, $d6Kqa$forwardRef)(function Link(props, ref) {
    [props, ref] = (0, $5ce63c423902f47d$export$764f6146fadd77f7)(props, ref, $f50c78733c21bfe2$export$e2509388b49734e7);
    let { variant: variant = 'primary', staticColor: staticColor, isQuiet: isQuiet, isStandalone: isStandalone, UNSAFE_style: UNSAFE_style, UNSAFE_className: UNSAFE_className = '', styles: styles, children: children } = props;
    let domRef = (0, $d6Kqa$useFocusableRef)(ref);
    let isSkeleton = (0, $d6Kqa$useContext)((0, $5ad421ec19460c48$export$74e166679b1f49ee)) || false;
    [children, UNSAFE_style] = (0, $5ad421ec19460c48$export$a05a0b8a311cd65f)(children, UNSAFE_style);
    (0, $d6Kqa$useLayoutEffect)(()=>{
        if (domRef.current) // TODO: should RAC Link pass through inert?
        domRef.current.inert = isSkeleton;
    }, [
        domRef,
        isSkeleton
    ]);
    return /*#__PURE__*/ (0, $d6Kqa$jsx)((0, $d6Kqa$Link), {
        ...props,
        ref: domRef,
        style: UNSAFE_style,
        className: (renderProps)=>UNSAFE_className + $f50c78733c21bfe2$var$link({
                ...renderProps,
                variant: variant,
                staticColor: staticColor,
                isQuiet: isQuiet,
                isStandalone: isStandalone,
                isSkeleton: isSkeleton
            }, styles),
        children: children
    });
});


export {$f50c78733c21bfe2$export$e2509388b49734e7 as LinkContext, $f50c78733c21bfe2$export$a6c7ac8248d6e38a as Link};
//# sourceMappingURL=Link.mjs.map
