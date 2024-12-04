import "./vars.7a67bcf5.css";
import $aMy5K$accordion_vars_cssmodulejs from "./accordion_vars_css.module.js";
import {DisclosureGroup as $aMy5K$DisclosureGroup, Disclosure as $aMy5K$Disclosure, DisclosurePanel as $aMy5K$DisclosurePanel, Heading as $aMy5K$Heading, Button as $aMy5K$Button} from "react-aria-components";
import $aMy5K$spectrumiconsuiChevronLeftMedium from "@spectrum-icons/ui/ChevronLeftMedium";
import $aMy5K$spectrumiconsuiChevronRightMedium from "@spectrum-icons/ui/ChevronRightMedium";
import {useStyleProps as $aMy5K$useStyleProps, useDOMRef as $aMy5K$useDOMRef, classNames as $aMy5K$classNames} from "@react-spectrum/utils";
import $aMy5K$react, {createContext as $aMy5K$createContext, forwardRef as $aMy5K$forwardRef} from "react";
import {useLocale as $aMy5K$useLocale} from "@react-aria/i18n";
import {useProviderProps as $aMy5K$useProviderProps} from "@react-spectrum/provider";


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 







const $2a5a5b7faca81754$var$InternalAccordionContext = /*#__PURE__*/ (0, $aMy5K$createContext)(null);
const $2a5a5b7faca81754$export$a766cd26d0d69044 = /*#__PURE__*/ (0, $aMy5K$forwardRef)(function Accordion(props, ref) {
    props = (0, $aMy5K$useProviderProps)(props);
    let { styleProps: styleProps } = (0, $aMy5K$useStyleProps)(props);
    let domRef = (0, $aMy5K$useDOMRef)(ref);
    return /*#__PURE__*/ (0, $aMy5K$react).createElement($2a5a5b7faca81754$var$InternalAccordionContext.Provider, {
        value: {
            isQuiet: props.isQuiet || false
        }
    }, /*#__PURE__*/ (0, $aMy5K$react).createElement((0, $aMy5K$DisclosureGroup), {
        ...props,
        ...styleProps,
        ref: domRef,
        className: (0, $aMy5K$classNames)((0, ($parcel$interopDefault($aMy5K$accordion_vars_cssmodulejs))), 'spectrum-Accordion', styleProps.className)
    }, props.children));
});
const $2a5a5b7faca81754$export$74a362b31437ec83 = /*#__PURE__*/ (0, $aMy5K$forwardRef)(function Disclosure(props, ref) {
    props = (0, $aMy5K$useProviderProps)(props);
    let { styleProps: styleProps } = (0, $aMy5K$useStyleProps)(props);
    let domRef = (0, $aMy5K$useDOMRef)(ref);
    let accordionContext = (0, $aMy5K$react).useContext($2a5a5b7faca81754$var$InternalAccordionContext);
    return /*#__PURE__*/ (0, $aMy5K$react).createElement((0, $aMy5K$Disclosure), {
        ...props,
        ...styleProps,
        ref: domRef,
        className: ({ isExpanded: isExpanded, isDisabled: isDisabled })=>{
            var _accordionContext_isQuiet;
            return (0, $aMy5K$classNames)((0, ($parcel$interopDefault($aMy5K$accordion_vars_cssmodulejs))), 'spectrum-Accordion-item', {
                'spectrum-Accordion-item--quiet': (_accordionContext_isQuiet = accordionContext === null || accordionContext === void 0 ? void 0 : accordionContext.isQuiet) !== null && _accordionContext_isQuiet !== void 0 ? _accordionContext_isQuiet : props.isQuiet,
                'is-expanded': isExpanded,
                'is-disabled': isDisabled,
                'in-accordion': accordionContext != null
            }, styleProps.className);
        }
    }, props.children);
});
const $2a5a5b7faca81754$export$feabaa331e1d464c = /*#__PURE__*/ (0, $aMy5K$forwardRef)(function DisclosurePanel(props, ref) {
    let { styleProps: styleProps } = (0, $aMy5K$useStyleProps)(props);
    let domRef = (0, $aMy5K$useDOMRef)(ref);
    return /*#__PURE__*/ (0, $aMy5K$react).createElement((0, $aMy5K$DisclosurePanel), {
        ref: domRef,
        ...styleProps,
        className: (0, $aMy5K$classNames)((0, ($parcel$interopDefault($aMy5K$accordion_vars_cssmodulejs))), 'spectrum-Accordion-itemContent', styleProps.className),
        ...props
    }, props.children);
});
const $2a5a5b7faca81754$export$7843c6a5b3e340a2 = /*#__PURE__*/ (0, $aMy5K$forwardRef)(function DisclosureTitle(props, ref) {
    let { styleProps: styleProps } = (0, $aMy5K$useStyleProps)(props);
    let { level: level = 3 } = props;
    let { direction: direction } = (0, $aMy5K$useLocale)();
    let domRef = (0, $aMy5K$useDOMRef)(ref);
    return /*#__PURE__*/ (0, $aMy5K$react).createElement((0, $aMy5K$Heading), {
        ref: domRef,
        level: level,
        ...styleProps,
        className: (0, $aMy5K$classNames)((0, ($parcel$interopDefault($aMy5K$accordion_vars_cssmodulejs))), 'spectrum-Accordion-itemHeading', styleProps.className)
    }, /*#__PURE__*/ (0, $aMy5K$react).createElement((0, $aMy5K$Button), {
        slot: "trigger",
        className: ({ isHovered: isHovered, isFocusVisible: isFocusVisible, isPressed: isPressed })=>(0, $aMy5K$classNames)((0, ($parcel$interopDefault($aMy5K$accordion_vars_cssmodulejs))), 'spectrum-Accordion-itemHeader', {
                'is-hovered': isHovered,
                'is-pressed': isPressed,
                'focus-ring': isFocusVisible
            })
    }, direction === 'ltr' ? /*#__PURE__*/ (0, $aMy5K$react).createElement((0, $aMy5K$spectrumiconsuiChevronRightMedium), {
        "aria-hidden": "true",
        UNSAFE_className: (0, $aMy5K$classNames)((0, ($parcel$interopDefault($aMy5K$accordion_vars_cssmodulejs))), 'spectrum-Accordion-itemIndicator')
    }) : /*#__PURE__*/ (0, $aMy5K$react).createElement((0, $aMy5K$spectrumiconsuiChevronLeftMedium), {
        "aria-hidden": "true",
        UNSAFE_className: (0, $aMy5K$classNames)((0, ($parcel$interopDefault($aMy5K$accordion_vars_cssmodulejs))), 'spectrum-Accordion-itemIndicator')
    }), props.children));
});


export {$2a5a5b7faca81754$export$a766cd26d0d69044 as Accordion, $2a5a5b7faca81754$export$74a362b31437ec83 as Disclosure, $2a5a5b7faca81754$export$feabaa331e1d464c as DisclosurePanel, $2a5a5b7faca81754$export$7843c6a5b3e340a2 as DisclosureTitle};
//# sourceMappingURL=Accordion.module.js.map
