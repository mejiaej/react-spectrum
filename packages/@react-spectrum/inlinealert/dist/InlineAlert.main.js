var $cf1d087b199fc7c5$exports = require("./intlStrings.main.js");
require("./vars.5fcabb04.css");
var $8d976ce4ebad141b$exports = require("./inlinealert_vars_css.main.js");
var $9SIjx$spectrumiconsuiAlertMedium = require("@spectrum-icons/ui/AlertMedium");
var $9SIjx$reactspectrumutils = require("@react-spectrum/utils");
var $9SIjx$reactariautils = require("@react-aria/utils");
var $9SIjx$reactariafocus = require("@react-aria/focus");
var $9SIjx$reactspectrumlayout = require("@react-spectrum/layout");
var $9SIjx$spectrumiconsuiInfoMedium = require("@spectrum-icons/ui/InfoMedium");
var $9SIjx$react = require("react");
var $9SIjx$spectrumiconsuiSuccessMedium = require("@spectrum-icons/ui/SuccessMedium");
var $9SIjx$reactariai18n = require("@react-aria/i18n");
var $9SIjx$reactspectrumprovider = require("@react-spectrum/provider");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "InlineAlert", () => $5de8c6729f05c665$export$a3b2c96db9b0eb71);
/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 











let $5de8c6729f05c665$var$ICONS = {
    info: (0, ($parcel$interopDefault($9SIjx$spectrumiconsuiInfoMedium))),
    positive: (0, ($parcel$interopDefault($9SIjx$spectrumiconsuiSuccessMedium))),
    notice: (0, ($parcel$interopDefault($9SIjx$spectrumiconsuiAlertMedium))),
    negative: (0, ($parcel$interopDefault($9SIjx$spectrumiconsuiAlertMedium)))
};
const $5de8c6729f05c665$export$a3b2c96db9b0eb71 = /*#__PURE__*/ (0, ($parcel$interopDefault($9SIjx$react))).forwardRef(function InlineAlert(props, ref) {
    props = (0, $9SIjx$reactspectrumprovider.useProviderProps)(props);
    let { children: children, variant: variant = 'neutral', autoFocus: autoFocus, ...otherProps } = props;
    let { styleProps: styleProps } = (0, $9SIjx$reactspectrumutils.useStyleProps)(otherProps);
    let domRef = (0, $9SIjx$reactspectrumutils.useDOMRef)(ref);
    let slots = {
        heading: {
            UNSAFE_className: (0, ($parcel$interopDefault($8d976ce4ebad141b$exports)))['spectrum-InLineAlert-heading']
        },
        content: {
            UNSAFE_className: (0, ($parcel$interopDefault($8d976ce4ebad141b$exports)))['spectrum-InLineAlert-content']
        }
    };
    let stringFormatter = (0, $9SIjx$reactariai18n.useLocalizedStringFormatter)((0, ($parcel$interopDefault($cf1d087b199fc7c5$exports))), '@react-spectrum/inlinealert');
    let Icon = null;
    let iconAlt = '';
    if (variant in $5de8c6729f05c665$var$ICONS) {
        Icon = $5de8c6729f05c665$var$ICONS[variant];
        iconAlt = stringFormatter.format(variant);
    }
    let autoFocusRef = (0, $9SIjx$react.useRef)(props.autoFocus);
    (0, $9SIjx$react.useEffect)(()=>{
        if (autoFocusRef.current && domRef.current) domRef.current.focus();
        autoFocusRef.current = false;
    }, [
        domRef
    ]);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($9SIjx$react))).createElement((0, $9SIjx$reactariafocus.FocusRing), {
        focusRingClass: (0, ($parcel$interopDefault($8d976ce4ebad141b$exports)))['focus-ring']
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($9SIjx$react))).createElement("div", {
        ...(0, $9SIjx$reactariautils.filterDOMProps)(props),
        ...styleProps,
        ref: domRef,
        tabIndex: autoFocus ? -1 : undefined,
        autoFocus: autoFocus,
        className: (0, $9SIjx$reactspectrumutils.classNames)((0, ($parcel$interopDefault($8d976ce4ebad141b$exports))), 'spectrum-InLineAlert', `spectrum-InLineAlert--${variant}`, styleProps.className),
        role: "alert"
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($9SIjx$react))).createElement((0, $9SIjx$reactspectrumlayout.Grid), {
        UNSAFE_className: (0, ($parcel$interopDefault($8d976ce4ebad141b$exports)))['spectrum-InLineAlert-grid']
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($9SIjx$react))).createElement((0, $9SIjx$reactspectrumutils.SlotProvider), {
        slots: slots
    }, Icon && /*#__PURE__*/ (0, ($parcel$interopDefault($9SIjx$react))).createElement(Icon, {
        UNSAFE_className: (0, ($parcel$interopDefault($8d976ce4ebad141b$exports)))['spectrum-InLineAlert-icon'],
        "aria-label": iconAlt
    }), children))));
});


//# sourceMappingURL=InlineAlert.main.js.map
