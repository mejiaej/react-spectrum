import $fTVpI$intlStringsmodulejs from "./intlStrings.module.js";
import "./vars.6dc4ca00.css";
import $fTVpI$fieldlabel_vars_cssmodulejs from "./fieldlabel_vars_css.module.js";
import $fTVpI$spectrumiconsuiAsterisk from "@spectrum-icons/ui/Asterisk";
import {useDOMRef as $fTVpI$useDOMRef, useStyleProps as $fTVpI$useStyleProps, classNames as $fTVpI$classNames} from "@react-spectrum/utils";
import {filterDOMProps as $fTVpI$filterDOMProps} from "@react-aria/utils";
import $fTVpI$react from "react";
import {useLocalizedStringFormatter as $fTVpI$useLocalizedStringFormatter} from "@react-aria/i18n";
import {useProviderProps as $fTVpI$useProviderProps} from "@react-spectrum/provider";


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







const $00af9ba397a66f43$export$b04be29aa201d4f5 = /*#__PURE__*/ (0, $fTVpI$react).forwardRef(function Label(props, ref) {
    props = (0, $fTVpI$useProviderProps)(props);
    let { children: children, labelPosition: labelPosition = 'top', labelAlign: labelAlign = labelPosition === 'side' ? 'start' : null, isRequired: isRequired, necessityIndicator: necessityIndicator = isRequired != null ? 'icon' : null, includeNecessityIndicatorInAccessibilityName: includeNecessityIndicatorInAccessibilityName = false, htmlFor: htmlFor, for: labelFor, elementType: ElementType = 'label', onClick: onClick, ...otherProps } = props;
    let domRef = (0, $fTVpI$useDOMRef)(ref);
    let { styleProps: styleProps } = (0, $fTVpI$useStyleProps)(otherProps);
    let stringFormatter = (0, $fTVpI$useLocalizedStringFormatter)((0, ($parcel$interopDefault($fTVpI$intlStringsmodulejs))), '@react-spectrum/label');
    let necessityLabel = isRequired ? stringFormatter.format('(required)') : stringFormatter.format('(optional)');
    let icon = /*#__PURE__*/ (0, $fTVpI$react).createElement((0, $fTVpI$spectrumiconsuiAsterisk), {
        UNSAFE_className: (0, $fTVpI$classNames)((0, ($parcel$interopDefault($fTVpI$fieldlabel_vars_cssmodulejs))), 'spectrum-FieldLabel-requiredIcon'),
        "aria-label": includeNecessityIndicatorInAccessibilityName ? stringFormatter.format('(required)') : undefined
    });
    let labelClassNames = (0, $fTVpI$classNames)((0, ($parcel$interopDefault($fTVpI$fieldlabel_vars_cssmodulejs))), 'spectrum-FieldLabel', {
        'spectrum-FieldLabel--positionSide': labelPosition === 'side',
        'spectrum-FieldLabel--alignEnd': labelAlign === 'end'
    }, styleProps.className);
    return /*#__PURE__*/ (0, $fTVpI$react).createElement(ElementType, {
        ...(0, $fTVpI$filterDOMProps)(otherProps),
        ...styleProps,
        onClick: onClick,
        ref: domRef,
        className: labelClassNames,
        htmlFor: ElementType === 'label' ? labelFor || htmlFor : undefined
    }, children, (necessityIndicator === 'label' || necessityIndicator === 'icon' && isRequired) && ' \u200b', necessityIndicator === 'label' && /*#__PURE__*/ (0, $fTVpI$react).createElement("span", {
        "aria-hidden": !includeNecessityIndicatorInAccessibilityName ? isRequired : undefined
    }, necessityLabel), necessityIndicator === 'icon' && isRequired && icon);
});


export {$00af9ba397a66f43$export$b04be29aa201d4f5 as Label};
//# sourceMappingURL=Label.module.js.map
