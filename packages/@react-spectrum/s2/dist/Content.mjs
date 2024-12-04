import {useIsSkeleton as $5ad421ec19460c48$export$4f8dc7555740235c, useSkeletonText as $5ad421ec19460c48$export$a05a0b8a311cd65f} from "../icons/Skeleton.mjs";
import {useSpectrumContextProps as $5ce63c423902f47d$export$764f6146fadd77f7} from "../icons/useSpectrumContextProps.mjs";
import {jsx as $7TVeb$jsx} from "react/jsx-runtime";
import {Heading as $7TVeb$Heading, Header as $7TVeb$Header, TextContext as $7TVeb$TextContext, Text as $7TVeb$Text, Keyboard as $7TVeb$Keyboard} from "react-aria-components";
import {createContext as $7TVeb$createContext, forwardRef as $7TVeb$forwardRef, useContext as $7TVeb$useContext} from "react";
import {useDOMRef as $7TVeb$useDOMRef} from "@react-spectrum/utils";

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





const $8e847109a6ab556d$export$d688439359537581 = /*#__PURE__*/ (0, $7TVeb$createContext)(null);
const $8e847109a6ab556d$export$a8a3e93435678ff9 = /*#__PURE__*/ (0, $7TVeb$forwardRef)(function Heading(props, ref) {
    [props, ref] = (0, $5ce63c423902f47d$export$764f6146fadd77f7)(props, ref, $8e847109a6ab556d$export$d688439359537581);
    let domRef = (0, $7TVeb$useDOMRef)(ref);
    let { UNSAFE_className: UNSAFE_className = '', UNSAFE_style: UNSAFE_style, styles: styles, isHidden: isHidden, slot: slot, ...otherProps } = props;
    if (isHidden) return null;
    return /*#__PURE__*/ (0, $7TVeb$jsx)((0, $7TVeb$Heading), {
        ...otherProps,
        ref: domRef,
        className: UNSAFE_className + styles,
        style: UNSAFE_style,
        slot: slot || undefined
    });
});
const $8e847109a6ab556d$export$e0e4026c12a8bdbb = /*#__PURE__*/ (0, $7TVeb$createContext)(null);
const $8e847109a6ab556d$export$8b251419efc915eb = /*#__PURE__*/ (0, $7TVeb$forwardRef)(function Header(props, ref) {
    [props, ref] = (0, $5ce63c423902f47d$export$764f6146fadd77f7)(props, ref, $8e847109a6ab556d$export$e0e4026c12a8bdbb);
    let domRef = (0, $7TVeb$useDOMRef)(ref);
    let { UNSAFE_className: UNSAFE_className = '', UNSAFE_style: UNSAFE_style, styles: styles, isHidden: isHidden, slot: slot, ...otherProps } = props;
    if (isHidden) return null;
    return /*#__PURE__*/ (0, $7TVeb$jsx)((0, $7TVeb$Header), {
        ...otherProps,
        ref: domRef,
        className: UNSAFE_className + styles,
        style: UNSAFE_style,
        slot: slot || undefined
    });
});
const $8e847109a6ab556d$export$1cbdd774077931b4 = /*#__PURE__*/ (0, $7TVeb$createContext)(null);
const $8e847109a6ab556d$export$7c6e2c02157bb7d2 = /*#__PURE__*/ (0, $7TVeb$forwardRef)(function Content(props, ref) {
    [props, ref] = (0, $5ce63c423902f47d$export$764f6146fadd77f7)(props, ref, $8e847109a6ab556d$export$1cbdd774077931b4);
    let domRef = (0, $7TVeb$useDOMRef)(ref);
    let { UNSAFE_className: UNSAFE_className = '', UNSAFE_style: UNSAFE_style, styles: styles, isHidden: isHidden, slot: slot, ...otherProps } = props;
    if (isHidden) return null;
    return /*#__PURE__*/ (0, $7TVeb$jsx)("div", {
        ...otherProps,
        ref: domRef,
        className: UNSAFE_className + styles,
        style: UNSAFE_style,
        slot: slot || undefined
    });
});
const $8e847109a6ab556d$export$9afb8bc826b033ea = /*#__PURE__*/ (0, $7TVeb$createContext)(null);
const $8e847109a6ab556d$export$5f1af8db9871e1d6 = /*#__PURE__*/ (0, $7TVeb$forwardRef)(function Text(props, ref) {
    [props, ref] = (0, $5ce63c423902f47d$export$764f6146fadd77f7)(props, ref, $8e847109a6ab556d$export$9afb8bc826b033ea);
    let domRef = (0, $7TVeb$useDOMRef)(ref);
    let { UNSAFE_className: UNSAFE_className = '', UNSAFE_style: UNSAFE_style, styles: styles, isHidden: isHidden, slot: slot, children: children, ...otherProps } = props;
    let racContext = (0, $7TVeb$useContext)((0, $7TVeb$TextContext));
    let isSkeleton = (0, $5ad421ec19460c48$export$4f8dc7555740235c)();
    [children, UNSAFE_style] = (0, $5ad421ec19460c48$export$a05a0b8a311cd65f)(children, UNSAFE_style);
    if (isHidden) return null;
    let text = /*#__PURE__*/ (0, $7TVeb$jsx)((0, $7TVeb$Text), {
        ...otherProps,
        ref: domRef,
        // @ts-ignore - compatibility with React < 19
        inert: isSkeleton ? 'true' : undefined,
        className: UNSAFE_className + styles,
        style: UNSAFE_style,
        slot: slot || undefined,
        "data-rsp-slot": "text",
        children: children
    });
    if (slot && racContext && 'slots' in racContext && !racContext.slots?.[slot]) return /*#__PURE__*/ (0, $7TVeb$jsx)((0, $7TVeb$TextContext).Provider, {
        value: null,
        children: text
    });
    return text;
});
const $8e847109a6ab556d$export$744d98a3b8a94e1c = /*#__PURE__*/ (0, $7TVeb$createContext)({});
const $8e847109a6ab556d$export$16e4d70cc375e707 = /*#__PURE__*/ (0, $7TVeb$forwardRef)(function Keyboard(props, ref) {
    [props, ref] = (0, $5ce63c423902f47d$export$764f6146fadd77f7)(props, ref, $8e847109a6ab556d$export$744d98a3b8a94e1c);
    let domRef = (0, $7TVeb$useDOMRef)(ref);
    let { UNSAFE_className: UNSAFE_className = '', UNSAFE_style: UNSAFE_style, styles: styles, isHidden: isHidden, slot: slot, ...otherProps } = props;
    if (isHidden) return null;
    return /*#__PURE__*/ (0, $7TVeb$jsx)((0, $7TVeb$Keyboard), {
        ...otherProps,
        ref: domRef,
        className: UNSAFE_className + styles,
        style: UNSAFE_style,
        slot: slot || undefined
    });
});
const $8e847109a6ab556d$export$5630640b68817ed6 = /*#__PURE__*/ (0, $7TVeb$createContext)({});
const $8e847109a6ab556d$export$a06f1c675e846f6f = /*#__PURE__*/ (0, $7TVeb$forwardRef)(function Footer(props, ref) {
    [props, ref] = (0, $5ce63c423902f47d$export$764f6146fadd77f7)(props, ref, $8e847109a6ab556d$export$5630640b68817ed6);
    let domRef = (0, $7TVeb$useDOMRef)(ref);
    let { UNSAFE_className: UNSAFE_className = '', UNSAFE_style: UNSAFE_style, styles: styles, isHidden: isHidden, slot: slot, ...otherProps } = props;
    if (isHidden) return null;
    return /*#__PURE__*/ (0, $7TVeb$jsx)("footer", {
        ...otherProps,
        ref: domRef,
        className: UNSAFE_className + styles,
        style: UNSAFE_style,
        slot: slot || undefined
    });
});


export {$8e847109a6ab556d$export$d688439359537581 as HeadingContext, $8e847109a6ab556d$export$a8a3e93435678ff9 as Heading, $8e847109a6ab556d$export$e0e4026c12a8bdbb as HeaderContext, $8e847109a6ab556d$export$8b251419efc915eb as Header, $8e847109a6ab556d$export$1cbdd774077931b4 as ContentContext, $8e847109a6ab556d$export$7c6e2c02157bb7d2 as Content, $8e847109a6ab556d$export$9afb8bc826b033ea as TextContext, $8e847109a6ab556d$export$5f1af8db9871e1d6 as Text, $8e847109a6ab556d$export$744d98a3b8a94e1c as KeyboardContext, $8e847109a6ab556d$export$16e4d70cc375e707 as Keyboard, $8e847109a6ab556d$export$5630640b68817ed6 as FooterContext, $8e847109a6ab556d$export$a06f1c675e846f6f as Footer};
//# sourceMappingURL=Content.mjs.map
