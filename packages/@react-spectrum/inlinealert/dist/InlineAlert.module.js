import $8S3NB$intlStringsmodulejs from "./intlStrings.module.js";
import "./vars.5fcabb04.css";
import $8S3NB$inlinealert_vars_cssmodulejs from "./inlinealert_vars_css.module.js";
import $8S3NB$spectrumiconsuiAlertMedium from "@spectrum-icons/ui/AlertMedium";
import {useStyleProps as $8S3NB$useStyleProps, useDOMRef as $8S3NB$useDOMRef, classNames as $8S3NB$classNames, SlotProvider as $8S3NB$SlotProvider} from "@react-spectrum/utils";
import {filterDOMProps as $8S3NB$filterDOMProps} from "@react-aria/utils";
import {FocusRing as $8S3NB$FocusRing} from "@react-aria/focus";
import {Grid as $8S3NB$Grid} from "@react-spectrum/layout";
import $8S3NB$spectrumiconsuiInfoMedium from "@spectrum-icons/ui/InfoMedium";
import $8S3NB$react, {useRef as $8S3NB$useRef, useEffect as $8S3NB$useEffect} from "react";
import $8S3NB$spectrumiconsuiSuccessMedium from "@spectrum-icons/ui/SuccessMedium";
import {useLocalizedStringFormatter as $8S3NB$useLocalizedStringFormatter} from "@react-aria/i18n";
import {useProviderProps as $8S3NB$useProviderProps} from "@react-spectrum/provider";


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
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











let $abf1e6290496dda5$var$ICONS = {
    info: (0, $8S3NB$spectrumiconsuiInfoMedium),
    positive: (0, $8S3NB$spectrumiconsuiSuccessMedium),
    notice: (0, $8S3NB$spectrumiconsuiAlertMedium),
    negative: (0, $8S3NB$spectrumiconsuiAlertMedium)
};
const $abf1e6290496dda5$export$a3b2c96db9b0eb71 = /*#__PURE__*/ (0, $8S3NB$react).forwardRef(function InlineAlert(props, ref) {
    props = (0, $8S3NB$useProviderProps)(props);
    let { children: children, variant: variant = 'neutral', autoFocus: autoFocus, ...otherProps } = props;
    let { styleProps: styleProps } = (0, $8S3NB$useStyleProps)(otherProps);
    let domRef = (0, $8S3NB$useDOMRef)(ref);
    let slots = {
        heading: {
            UNSAFE_className: (0, ($parcel$interopDefault($8S3NB$inlinealert_vars_cssmodulejs)))['spectrum-InLineAlert-heading']
        },
        content: {
            UNSAFE_className: (0, ($parcel$interopDefault($8S3NB$inlinealert_vars_cssmodulejs)))['spectrum-InLineAlert-content']
        }
    };
    let stringFormatter = (0, $8S3NB$useLocalizedStringFormatter)((0, ($parcel$interopDefault($8S3NB$intlStringsmodulejs))), '@react-spectrum/inlinealert');
    let Icon = null;
    let iconAlt = '';
    if (variant in $abf1e6290496dda5$var$ICONS) {
        Icon = $abf1e6290496dda5$var$ICONS[variant];
        iconAlt = stringFormatter.format(variant);
    }
    let autoFocusRef = (0, $8S3NB$useRef)(props.autoFocus);
    (0, $8S3NB$useEffect)(()=>{
        if (autoFocusRef.current && domRef.current) domRef.current.focus();
        autoFocusRef.current = false;
    }, [
        domRef
    ]);
    return /*#__PURE__*/ (0, $8S3NB$react).createElement((0, $8S3NB$FocusRing), {
        focusRingClass: (0, ($parcel$interopDefault($8S3NB$inlinealert_vars_cssmodulejs)))['focus-ring']
    }, /*#__PURE__*/ (0, $8S3NB$react).createElement("div", {
        ...(0, $8S3NB$filterDOMProps)(props),
        ...styleProps,
        ref: domRef,
        tabIndex: autoFocus ? -1 : undefined,
        autoFocus: autoFocus,
        className: (0, $8S3NB$classNames)((0, ($parcel$interopDefault($8S3NB$inlinealert_vars_cssmodulejs))), 'spectrum-InLineAlert', `spectrum-InLineAlert--${variant}`, styleProps.className),
        role: "alert"
    }, /*#__PURE__*/ (0, $8S3NB$react).createElement((0, $8S3NB$Grid), {
        UNSAFE_className: (0, ($parcel$interopDefault($8S3NB$inlinealert_vars_cssmodulejs)))['spectrum-InLineAlert-grid']
    }, /*#__PURE__*/ (0, $8S3NB$react).createElement((0, $8S3NB$SlotProvider), {
        slots: slots
    }, Icon && /*#__PURE__*/ (0, $8S3NB$react).createElement(Icon, {
        UNSAFE_className: (0, ($parcel$interopDefault($8S3NB$inlinealert_vars_cssmodulejs)))['spectrum-InLineAlert-icon'],
        "aria-label": iconAlt
    }), children))));
});


export {$abf1e6290496dda5$export$a3b2c96db9b0eb71 as InlineAlert};
//# sourceMappingURL=InlineAlert.module.js.map
