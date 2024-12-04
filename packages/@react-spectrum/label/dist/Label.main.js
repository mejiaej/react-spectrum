var $503911526ad50850$exports = require("./intlStrings.main.js");
require("./vars.6dc4ca00.css");
var $eb2fc0ee655eff6b$exports = require("./fieldlabel_vars_css.main.js");
var $cF5V3$spectrumiconsuiAsterisk = require("@spectrum-icons/ui/Asterisk");
var $cF5V3$reactspectrumutils = require("@react-spectrum/utils");
var $cF5V3$reactariautils = require("@react-aria/utils");
var $cF5V3$react = require("react");
var $cF5V3$reactariai18n = require("@react-aria/i18n");
var $cF5V3$reactspectrumprovider = require("@react-spectrum/provider");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "Label", () => $38a9afbd39356629$export$b04be29aa201d4f5);
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







const $38a9afbd39356629$export$b04be29aa201d4f5 = /*#__PURE__*/ (0, ($parcel$interopDefault($cF5V3$react))).forwardRef(function Label(props, ref) {
    props = (0, $cF5V3$reactspectrumprovider.useProviderProps)(props);
    let { children: children, labelPosition: labelPosition = 'top', labelAlign: labelAlign = labelPosition === 'side' ? 'start' : null, isRequired: isRequired, necessityIndicator: necessityIndicator = isRequired != null ? 'icon' : null, includeNecessityIndicatorInAccessibilityName: includeNecessityIndicatorInAccessibilityName = false, htmlFor: htmlFor, for: labelFor, elementType: ElementType = 'label', onClick: onClick, ...otherProps } = props;
    let domRef = (0, $cF5V3$reactspectrumutils.useDOMRef)(ref);
    let { styleProps: styleProps } = (0, $cF5V3$reactspectrumutils.useStyleProps)(otherProps);
    let stringFormatter = (0, $cF5V3$reactariai18n.useLocalizedStringFormatter)((0, ($parcel$interopDefault($503911526ad50850$exports))), '@react-spectrum/label');
    let necessityLabel = isRequired ? stringFormatter.format('(required)') : stringFormatter.format('(optional)');
    let icon = /*#__PURE__*/ (0, ($parcel$interopDefault($cF5V3$react))).createElement((0, ($parcel$interopDefault($cF5V3$spectrumiconsuiAsterisk))), {
        UNSAFE_className: (0, $cF5V3$reactspectrumutils.classNames)((0, ($parcel$interopDefault($eb2fc0ee655eff6b$exports))), 'spectrum-FieldLabel-requiredIcon'),
        "aria-label": includeNecessityIndicatorInAccessibilityName ? stringFormatter.format('(required)') : undefined
    });
    let labelClassNames = (0, $cF5V3$reactspectrumutils.classNames)((0, ($parcel$interopDefault($eb2fc0ee655eff6b$exports))), 'spectrum-FieldLabel', {
        'spectrum-FieldLabel--positionSide': labelPosition === 'side',
        'spectrum-FieldLabel--alignEnd': labelAlign === 'end'
    }, styleProps.className);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($cF5V3$react))).createElement(ElementType, {
        ...(0, $cF5V3$reactariautils.filterDOMProps)(otherProps),
        ...styleProps,
        onClick: onClick,
        ref: domRef,
        className: labelClassNames,
        htmlFor: ElementType === 'label' ? labelFor || htmlFor : undefined
    }, children, (necessityIndicator === 'label' || necessityIndicator === 'icon' && isRequired) && ' \u200b', necessityIndicator === 'label' && /*#__PURE__*/ (0, ($parcel$interopDefault($cF5V3$react))).createElement("span", {
        "aria-hidden": !includeNecessityIndicatorInAccessibilityName ? isRequired : undefined
    }, necessityLabel), necessityIndicator === 'icon' && isRequired && icon);
});


//# sourceMappingURL=Label.main.js.map
