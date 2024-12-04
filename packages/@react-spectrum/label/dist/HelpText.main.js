require("./vars.69a32de8.css");
var $680ab92507bf49aa$exports = require("./helptext_vars_css.main.js");
var $7UMJk$spectrumiconsuiAlertMedium = require("@spectrum-icons/ui/AlertMedium");
var $7UMJk$reactspectrumutils = require("@react-spectrum/utils");
var $7UMJk$react = require("react");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "HelpText", () => $2d1b5114e5b358b6$export$a67c0bc59081311a);
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



const $2d1b5114e5b358b6$export$a67c0bc59081311a = /*#__PURE__*/ (0, ($parcel$interopDefault($7UMJk$react))).forwardRef(function HelpText(props, ref) {
    let { description: description, errorMessage: errorMessage, validationState: validationState, isInvalid: isInvalid, isDisabled: isDisabled, showErrorIcon: showErrorIcon, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps } = props;
    let domRef = (0, $7UMJk$reactspectrumutils.useDOMRef)(ref);
    let isErrorMessage = errorMessage && (isInvalid || validationState === 'invalid');
    let { styleProps: styleProps } = (0, $7UMJk$reactspectrumutils.useStyleProps)(props);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($7UMJk$react))).createElement("div", {
        ...styleProps,
        className: (0, $7UMJk$reactspectrumutils.classNames)((0, ($parcel$interopDefault($680ab92507bf49aa$exports))), 'spectrum-HelpText', `spectrum-HelpText--${isErrorMessage ? 'negative' : 'neutral'}`, {
            'is-disabled': isDisabled
        }, styleProps.className),
        ref: domRef
    }, isErrorMessage ? /*#__PURE__*/ (0, ($parcel$interopDefault($7UMJk$react))).createElement((0, ($parcel$interopDefault($7UMJk$react))).Fragment, null, showErrorIcon && /*#__PURE__*/ (0, ($parcel$interopDefault($7UMJk$react))).createElement((0, ($parcel$interopDefault($7UMJk$spectrumiconsuiAlertMedium))), {
        UNSAFE_className: (0, $7UMJk$reactspectrumutils.classNames)((0, ($parcel$interopDefault($680ab92507bf49aa$exports))), 'spectrum-HelpText-validationIcon')
    }), /*#__PURE__*/ (0, ($parcel$interopDefault($7UMJk$react))).createElement("div", {
        ...errorMessageProps,
        className: (0, $7UMJk$reactspectrumutils.classNames)((0, ($parcel$interopDefault($680ab92507bf49aa$exports))), 'spectrum-HelpText-text')
    }, errorMessage)) : /*#__PURE__*/ (0, ($parcel$interopDefault($7UMJk$react))).createElement("div", {
        ...descriptionProps,
        className: (0, $7UMJk$reactspectrumutils.classNames)((0, ($parcel$interopDefault($680ab92507bf49aa$exports))), 'spectrum-HelpText-text')
    }, description));
});


//# sourceMappingURL=HelpText.main.js.map
