import "./Accordion.css";
import {DisclosureContext as $cf1d656285911959$export$d665dd135a51b28a} from "./Disclosure.mjs";
import {useSpectrumContextProps as $5ce63c423902f47d$export$764f6146fadd77f7} from "../icons/useSpectrumContextProps.mjs";
import {jsx as $cFlas$jsx} from "react/jsx-runtime";
import {DisclosureGroup as $cFlas$DisclosureGroup} from "react-aria-components";
import {createContext as $cFlas$createContext, forwardRef as $cFlas$forwardRef} from "react";
import {useDOMRef as $cFlas$useDOMRef} from "@react-spectrum/utils";

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





const $e0a5d45f488fa6ba$var$accordion = function anonymous(props, overrides) {
    let rules = " .";
    let matches = (overrides || '').match(/(?:^|\s)(?:y|z|A|B|_9|_8|h|_5|_4|__A|__c|__d|__a|__b|U|__Q|X|Z|V|W|l|q|r|k|o|p)[^\s]+/g) || [];
    rules += matches.join('');
    rules += ' _Zd';
    rules += ' _6b';
    return rules;
};
const $e0a5d45f488fa6ba$export$6bd5bb82c987ab74 = /*#__PURE__*/ (0, $cFlas$createContext)(null);
const $e0a5d45f488fa6ba$export$a766cd26d0d69044 = /*#__PURE__*/ (0, $cFlas$forwardRef)(function Accordion(props, ref) {
    [props, ref] = (0, $5ce63c423902f47d$export$764f6146fadd77f7)(props, ref, $e0a5d45f488fa6ba$export$6bd5bb82c987ab74);
    let domRef = (0, $cFlas$useDOMRef)(ref);
    let { UNSAFE_style: UNSAFE_style, UNSAFE_className: UNSAFE_className = '', size: size = 'M', density: density = 'regular', isQuiet: isQuiet } = props;
    return /*#__PURE__*/ (0, $cFlas$jsx)((0, $cf1d656285911959$export$d665dd135a51b28a).Provider, {
        value: {
            size: size,
            isQuiet: isQuiet,
            density: density
        },
        children: /*#__PURE__*/ (0, $cFlas$jsx)((0, $cFlas$DisclosureGroup), {
            ...props,
            ref: domRef,
            style: UNSAFE_style,
            className: (UNSAFE_className ?? '') + $e0a5d45f488fa6ba$var$accordion(null, props.styles),
            children: props.children
        })
    });
});


export {$e0a5d45f488fa6ba$export$6bd5bb82c987ab74 as AccordionContext, $e0a5d45f488fa6ba$export$a766cd26d0d69044 as Accordion};
//# sourceMappingURL=Accordion.mjs.map
