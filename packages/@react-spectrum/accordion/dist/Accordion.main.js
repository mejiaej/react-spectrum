require("./vars.7a67bcf5.css");
var $5ab573b23bc1d039$exports = require("./accordion_vars_css.main.js");
var $52xbb$reactariacomponents = require("react-aria-components");
var $52xbb$spectrumiconsuiChevronLeftMedium = require("@spectrum-icons/ui/ChevronLeftMedium");
var $52xbb$spectrumiconsuiChevronRightMedium = require("@spectrum-icons/ui/ChevronRightMedium");
var $52xbb$reactspectrumutils = require("@react-spectrum/utils");
var $52xbb$react = require("react");
var $52xbb$reactariai18n = require("@react-aria/i18n");
var $52xbb$reactspectrumprovider = require("@react-spectrum/provider");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "Accordion", () => $d8f45715b3ce327a$export$a766cd26d0d69044);
$parcel$export(module.exports, "Disclosure", () => $d8f45715b3ce327a$export$74a362b31437ec83);
$parcel$export(module.exports, "DisclosurePanel", () => $d8f45715b3ce327a$export$feabaa331e1d464c);
$parcel$export(module.exports, "DisclosureTitle", () => $d8f45715b3ce327a$export$7843c6a5b3e340a2);
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







const $d8f45715b3ce327a$var$InternalAccordionContext = /*#__PURE__*/ (0, $52xbb$react.createContext)(null);
const $d8f45715b3ce327a$export$a766cd26d0d69044 = /*#__PURE__*/ (0, $52xbb$react.forwardRef)(function Accordion(props, ref) {
    props = (0, $52xbb$reactspectrumprovider.useProviderProps)(props);
    let { styleProps: styleProps } = (0, $52xbb$reactspectrumutils.useStyleProps)(props);
    let domRef = (0, $52xbb$reactspectrumutils.useDOMRef)(ref);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($52xbb$react))).createElement($d8f45715b3ce327a$var$InternalAccordionContext.Provider, {
        value: {
            isQuiet: props.isQuiet || false
        }
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($52xbb$react))).createElement((0, $52xbb$reactariacomponents.DisclosureGroup), {
        ...props,
        ...styleProps,
        ref: domRef,
        className: (0, $52xbb$reactspectrumutils.classNames)((0, ($parcel$interopDefault($5ab573b23bc1d039$exports))), 'spectrum-Accordion', styleProps.className)
    }, props.children));
});
const $d8f45715b3ce327a$export$74a362b31437ec83 = /*#__PURE__*/ (0, $52xbb$react.forwardRef)(function Disclosure(props, ref) {
    props = (0, $52xbb$reactspectrumprovider.useProviderProps)(props);
    let { styleProps: styleProps } = (0, $52xbb$reactspectrumutils.useStyleProps)(props);
    let domRef = (0, $52xbb$reactspectrumutils.useDOMRef)(ref);
    let accordionContext = (0, ($parcel$interopDefault($52xbb$react))).useContext($d8f45715b3ce327a$var$InternalAccordionContext);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($52xbb$react))).createElement((0, $52xbb$reactariacomponents.Disclosure), {
        ...props,
        ...styleProps,
        ref: domRef,
        className: ({ isExpanded: isExpanded, isDisabled: isDisabled })=>{
            var _accordionContext_isQuiet;
            return (0, $52xbb$reactspectrumutils.classNames)((0, ($parcel$interopDefault($5ab573b23bc1d039$exports))), 'spectrum-Accordion-item', {
                'spectrum-Accordion-item--quiet': (_accordionContext_isQuiet = accordionContext === null || accordionContext === void 0 ? void 0 : accordionContext.isQuiet) !== null && _accordionContext_isQuiet !== void 0 ? _accordionContext_isQuiet : props.isQuiet,
                'is-expanded': isExpanded,
                'is-disabled': isDisabled,
                'in-accordion': accordionContext != null
            }, styleProps.className);
        }
    }, props.children);
});
const $d8f45715b3ce327a$export$feabaa331e1d464c = /*#__PURE__*/ (0, $52xbb$react.forwardRef)(function DisclosurePanel(props, ref) {
    let { styleProps: styleProps } = (0, $52xbb$reactspectrumutils.useStyleProps)(props);
    let domRef = (0, $52xbb$reactspectrumutils.useDOMRef)(ref);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($52xbb$react))).createElement((0, $52xbb$reactariacomponents.DisclosurePanel), {
        ref: domRef,
        ...styleProps,
        className: (0, $52xbb$reactspectrumutils.classNames)((0, ($parcel$interopDefault($5ab573b23bc1d039$exports))), 'spectrum-Accordion-itemContent', styleProps.className),
        ...props
    }, props.children);
});
const $d8f45715b3ce327a$export$7843c6a5b3e340a2 = /*#__PURE__*/ (0, $52xbb$react.forwardRef)(function DisclosureTitle(props, ref) {
    let { styleProps: styleProps } = (0, $52xbb$reactspectrumutils.useStyleProps)(props);
    let { level: level = 3 } = props;
    let { direction: direction } = (0, $52xbb$reactariai18n.useLocale)();
    let domRef = (0, $52xbb$reactspectrumutils.useDOMRef)(ref);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($52xbb$react))).createElement((0, $52xbb$reactariacomponents.Heading), {
        ref: domRef,
        level: level,
        ...styleProps,
        className: (0, $52xbb$reactspectrumutils.classNames)((0, ($parcel$interopDefault($5ab573b23bc1d039$exports))), 'spectrum-Accordion-itemHeading', styleProps.className)
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($52xbb$react))).createElement((0, $52xbb$reactariacomponents.Button), {
        slot: "trigger",
        className: ({ isHovered: isHovered, isFocusVisible: isFocusVisible, isPressed: isPressed })=>(0, $52xbb$reactspectrumutils.classNames)((0, ($parcel$interopDefault($5ab573b23bc1d039$exports))), 'spectrum-Accordion-itemHeader', {
                'is-hovered': isHovered,
                'is-pressed': isPressed,
                'focus-ring': isFocusVisible
            })
    }, direction === 'ltr' ? /*#__PURE__*/ (0, ($parcel$interopDefault($52xbb$react))).createElement((0, ($parcel$interopDefault($52xbb$spectrumiconsuiChevronRightMedium))), {
        "aria-hidden": "true",
        UNSAFE_className: (0, $52xbb$reactspectrumutils.classNames)((0, ($parcel$interopDefault($5ab573b23bc1d039$exports))), 'spectrum-Accordion-itemIndicator')
    }) : /*#__PURE__*/ (0, ($parcel$interopDefault($52xbb$react))).createElement((0, ($parcel$interopDefault($52xbb$spectrumiconsuiChevronLeftMedium))), {
        "aria-hidden": "true",
        UNSAFE_className: (0, $52xbb$reactspectrumutils.classNames)((0, ($parcel$interopDefault($5ab573b23bc1d039$exports))), 'spectrum-Accordion-itemIndicator')
    }), props.children));
});


//# sourceMappingURL=Accordion.main.js.map
