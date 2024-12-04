import "./ColorArea.css";
import {ColorHandle as $b4f7db7c45cd3de9$export$92862704de639678} from "./ColorHandle.mjs";
import {useSpectrumContextProps as $5ce63c423902f47d$export$764f6146fadd77f7} from "../icons/useSpectrumContextProps.mjs";
import {jsx as $dNfSU$jsx} from "react/jsx-runtime";
import {ColorArea as $dNfSU$ColorArea} from "react-aria-components";
import {createContext as $dNfSU$createContext, forwardRef as $dNfSU$forwardRef} from "react";
import {useDOMRef as $dNfSU$useDOMRef} from "@react-spectrum/utils";

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





const $40a2b649525568ab$export$ebe63fadcdce34ed = /*#__PURE__*/ (0, $dNfSU$createContext)(null);
const $40a2b649525568ab$export$b2103f68a961418e = /*#__PURE__*/ (0, $dNfSU$forwardRef)(function ColorArea(props, ref) {
    [props, ref] = (0, $5ce63c423902f47d$export$764f6146fadd77f7)(props, ref, $40a2b649525568ab$export$ebe63fadcdce34ed);
    let { UNSAFE_className: UNSAFE_className = '', UNSAFE_style: UNSAFE_style, styles: styles } = props;
    let containerRef = (0, $dNfSU$useDOMRef)(ref);
    return /*#__PURE__*/ (0, $dNfSU$jsx)((0, $dNfSU$ColorArea), {
        ...props,
        ref: containerRef,
        style: ({ defaultStyle: defaultStyle, isDisabled: isDisabled })=>({
                ...defaultStyle,
                background: isDisabled ? undefined : defaultStyle.background,
                // Move position: relative to style macro so it can be overridden.
                position: undefined,
                ...UNSAFE_style
            }),
        className: (renderProps)=>UNSAFE_className + function anonymous(props, overrides) {
                let rules = " .";
                let matches = (overrides || '').match(/(?:^|\s)(?:y|z|A|B|_9|_8|h|_5|_4|__A|__c|__d|__a|__b|U|__Q|X|Z|V|W|l|q|r|k|o|p)[^\s]+/g) || [];
                rules += matches.join('');
                let $U = false;
                let $l = false;
                let $k = false;
                let $q = false;
                let $o = false;
                for (let p of matches){
                    if (/^\s*U/.test(p)) $U = true;
                    if (/^\s*l/.test(p)) $l = true;
                    if (/^\s*k/.test(p)) $k = true;
                    if (/^\s*q/.test(p)) $q = true;
                    if (/^\s*o/.test(p)) $o = true;
                }
                if (!$U) rules += ' Uc';
                if (!$l) rules += ' l___u';
                if (!$k) rules += ' k___u';
                if (!$q) rules += ' q_q';
                if (!$o) rules += ' o_q';
                rules += ' _vc';
                rules += ' _wc';
                rules += ' _xc';
                rules += ' _yc';
                rules += ' da_____v';
                rules += ' dp10';
                rules += ' _Nb';
                rules += ' _M-3hmpv';
                if (props.isDisabled) rules += ' _La';
                else rules += ' _Lb';
                if (props.isDisabled) rules += ' bg';
                return rules;
            }(renderProps, styles),
        children: ({ state: state })=>/*#__PURE__*/ (0, $dNfSU$jsx)((0, $b4f7db7c45cd3de9$export$92862704de639678), {
                containerRef: containerRef,
                getPosition: ()=>state.getThumbPosition()
            })
    });
});


export {$40a2b649525568ab$export$ebe63fadcdce34ed as ColorAreaContext, $40a2b649525568ab$export$b2103f68a961418e as ColorArea};
//# sourceMappingURL=ColorArea.mjs.map
