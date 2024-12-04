import "./vars.69a32de8.css";
import $huWmf$helptext_vars_cssmodulejs from "./helptext_vars_css.mjs";
import $huWmf$spectrumiconsuiAlertMedium from "@spectrum-icons/ui/AlertMedium";
import {useDOMRef as $huWmf$useDOMRef, useStyleProps as $huWmf$useStyleProps, classNames as $huWmf$classNames} from "@react-spectrum/utils";
import $huWmf$react from "react";


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 



const $8e50676506611310$export$a67c0bc59081311a = /*#__PURE__*/ (0, $huWmf$react).forwardRef(function HelpText(props, ref) {
    let { description: description, errorMessage: errorMessage, validationState: validationState, isInvalid: isInvalid, isDisabled: isDisabled, showErrorIcon: showErrorIcon, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps } = props;
    let domRef = (0, $huWmf$useDOMRef)(ref);
    let isErrorMessage = errorMessage && (isInvalid || validationState === 'invalid');
    let { styleProps: styleProps } = (0, $huWmf$useStyleProps)(props);
    return /*#__PURE__*/ (0, $huWmf$react).createElement("div", {
        ...styleProps,
        className: (0, $huWmf$classNames)((0, ($parcel$interopDefault($huWmf$helptext_vars_cssmodulejs))), 'spectrum-HelpText', `spectrum-HelpText--${isErrorMessage ? 'negative' : 'neutral'}`, {
            'is-disabled': isDisabled
        }, styleProps.className),
        ref: domRef
    }, isErrorMessage ? /*#__PURE__*/ (0, $huWmf$react).createElement((0, $huWmf$react).Fragment, null, showErrorIcon && /*#__PURE__*/ (0, $huWmf$react).createElement((0, $huWmf$spectrumiconsuiAlertMedium), {
        UNSAFE_className: (0, $huWmf$classNames)((0, ($parcel$interopDefault($huWmf$helptext_vars_cssmodulejs))), 'spectrum-HelpText-validationIcon')
    }), /*#__PURE__*/ (0, $huWmf$react).createElement("div", {
        ...errorMessageProps,
        className: (0, $huWmf$classNames)((0, ($parcel$interopDefault($huWmf$helptext_vars_cssmodulejs))), 'spectrum-HelpText-text')
    }, errorMessage)) : /*#__PURE__*/ (0, $huWmf$react).createElement("div", {
        ...descriptionProps,
        className: (0, $huWmf$classNames)((0, ($parcel$interopDefault($huWmf$helptext_vars_cssmodulejs))), 'spectrum-HelpText-text')
    }, description));
});


export {$8e50676506611310$export$a67c0bc59081311a as HelpText};
//# sourceMappingURL=HelpText.module.js.map
