var $edac158d20ebe4a9$exports = require("./DatePickerSegment.main.js");
require("./styles.d49f4d83.css");
var $91c3db8c6a21ca71$exports = require("./styles_css.main.js");
var $c3ebc4931d9b9977$exports = require("./Input.main.js");
var $4d2e419f522adb48$exports = require("./utils.main.js");
var $gfZkn$reactspectrumutils = require("@react-spectrum/utils");
var $gfZkn$reactspectrumlabel = require("@react-spectrum/label");
var $gfZkn$react = require("react");
var $gfZkn$reactspectrumform = require("@react-spectrum/form");
var $gfZkn$reactariai18n = require("@react-aria/i18n");
var $gfZkn$reactspectrumprovider = require("@react-spectrum/provider");
var $gfZkn$reactariadatepicker = require("@react-aria/datepicker");
var $gfZkn$reactstatelydatepicker = require("@react-stately/datepicker");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "TimeField", () => $740ff83729a8f317$export$5eaee2322dd727eb);
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











const $740ff83729a8f317$export$5eaee2322dd727eb = /*#__PURE__*/ (0, ($parcel$interopDefault($gfZkn$react))).forwardRef(function TimeField(props, ref) {
    props = (0, $gfZkn$reactspectrumprovider.useProviderProps)(props);
    props = (0, $gfZkn$reactspectrumform.useFormProps)(props);
    let { autoFocus: autoFocus, isDisabled: isDisabled, isReadOnly: isReadOnly, isRequired: isRequired, isQuiet: isQuiet } = props;
    let domRef = (0, $4d2e419f522adb48$exports.useFocusManagerRef)(ref);
    let { locale: locale } = (0, $gfZkn$reactariai18n.useLocale)();
    let state = (0, $gfZkn$reactstatelydatepicker.useTimeFieldState)({
        ...props,
        locale: locale
    });
    let fieldRef = (0, $gfZkn$react.useRef)(null);
    let inputRef = (0, $gfZkn$react.useRef)(null);
    let { labelProps: labelProps, fieldProps: fieldProps, inputProps: inputProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps, isInvalid: isInvalid, validationErrors: validationErrors, validationDetails: validationDetails } = (0, $gfZkn$reactariadatepicker.useTimeField)({
        ...props,
        inputRef: inputRef
    }, state, fieldRef);
    let validationState = state.validationState || (isInvalid ? 'invalid' : null);
    let approximateWidth = (0, $4d2e419f522adb48$exports.useFormattedDateWidth)(state) + 'ch';
    return /*#__PURE__*/ (0, ($parcel$interopDefault($gfZkn$react))).createElement((0, $gfZkn$reactspectrumlabel.Field), {
        ...props,
        ref: domRef,
        elementType: "span",
        labelProps: labelProps,
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        validationState: validationState !== null && validationState !== void 0 ? validationState : undefined,
        isInvalid: isInvalid,
        validationErrors: validationErrors,
        validationDetails: validationDetails,
        wrapperClassName: (0, $gfZkn$reactspectrumutils.classNames)((0, ($parcel$interopDefault($91c3db8c6a21ca71$exports))), 'react-spectrum-TimeField-fieldWrapper')
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($gfZkn$react))).createElement((0, $c3ebc4931d9b9977$exports.Input), {
        ref: fieldRef,
        fieldProps: fieldProps,
        isDisabled: isDisabled,
        isQuiet: isQuiet,
        autoFocus: autoFocus,
        validationState: validationState,
        minWidth: approximateWidth,
        className: (0, $gfZkn$reactspectrumutils.classNames)((0, ($parcel$interopDefault($91c3db8c6a21ca71$exports))), 'react-spectrum-TimeField')
    }, state.segments.map((segment, i)=>/*#__PURE__*/ (0, ($parcel$interopDefault($gfZkn$react))).createElement((0, $edac158d20ebe4a9$exports.DatePickerSegment), {
            key: i,
            segment: segment,
            state: state,
            isDisabled: isDisabled,
            isReadOnly: isReadOnly,
            isRequired: isRequired
        })), /*#__PURE__*/ (0, ($parcel$interopDefault($gfZkn$react))).createElement("input", {
        ...inputProps,
        ref: inputRef
    })));
});


//# sourceMappingURL=TimeField.main.js.map
