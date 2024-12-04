var $edac158d20ebe4a9$exports = require("./DatePickerSegment.main.js");
require("./styles.d49f4d83.css");
var $91c3db8c6a21ca71$exports = require("./styles_css.main.js");
var $c3ebc4931d9b9977$exports = require("./Input.main.js");
var $4d2e419f522adb48$exports = require("./utils.main.js");
var $2sBGl$reactspectrumutils = require("@react-spectrum/utils");
var $2sBGl$internationalizeddate = require("@internationalized/date");
var $2sBGl$reactspectrumlabel = require("@react-spectrum/label");
var $2sBGl$react = require("react");
var $2sBGl$reactariadatepicker = require("@react-aria/datepicker");
var $2sBGl$reactstatelydatepicker = require("@react-stately/datepicker");
var $2sBGl$reactspectrumform = require("@react-spectrum/form");
var $2sBGl$reactariai18n = require("@react-aria/i18n");
var $2sBGl$reactspectrumprovider = require("@react-spectrum/provider");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "DateField", () => $1ab74d2cd1dc2e45$export$d9781c7894a82487);
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












const $1ab74d2cd1dc2e45$export$d9781c7894a82487 = /*#__PURE__*/ (0, ($parcel$interopDefault($2sBGl$react))).forwardRef(function DateField(props, ref) {
    props = (0, $2sBGl$reactspectrumprovider.useProviderProps)(props);
    props = (0, $2sBGl$reactspectrumform.useFormProps)(props);
    let { autoFocus: autoFocus, isDisabled: isDisabled, isReadOnly: isReadOnly, isRequired: isRequired, isQuiet: isQuiet } = props;
    let domRef = (0, $4d2e419f522adb48$exports.useFocusManagerRef)(ref);
    let { locale: locale } = (0, $2sBGl$reactariai18n.useLocale)();
    let state = (0, $2sBGl$reactstatelydatepicker.useDateFieldState)({
        ...props,
        locale: locale,
        createCalendar: $2sBGl$internationalizeddate.createCalendar
    });
    let fieldRef = (0, $2sBGl$react.useRef)(null);
    let inputRef = (0, $2sBGl$react.useRef)(null);
    let { labelProps: labelProps, fieldProps: fieldProps, inputProps: inputProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps, isInvalid: isInvalid, validationErrors: validationErrors, validationDetails: validationDetails } = (0, $2sBGl$reactariadatepicker.useDateField)({
        ...props,
        inputRef: inputRef
    }, state, fieldRef);
    // Note: this description is intentionally not passed to useDatePicker.
    // The format help text is unnecessary for screen reader users because each segment already has a label.
    let description = (0, $4d2e419f522adb48$exports.useFormatHelpText)(props);
    if (description && !props.description) descriptionProps.id = undefined;
    let validationState = state.validationState || (isInvalid ? 'invalid' : null);
    let approximateWidth = (0, $4d2e419f522adb48$exports.useFormattedDateWidth)(state) + 'ch';
    return /*#__PURE__*/ (0, ($parcel$interopDefault($2sBGl$react))).createElement((0, $2sBGl$reactspectrumlabel.Field), {
        ...props,
        ref: domRef,
        elementType: "span",
        description: description,
        labelProps: labelProps,
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        validationState: validationState !== null && validationState !== void 0 ? validationState : undefined,
        isInvalid: isInvalid,
        validationErrors: validationErrors,
        validationDetails: validationDetails,
        wrapperClassName: (0, $2sBGl$reactspectrumutils.classNames)((0, ($parcel$interopDefault($91c3db8c6a21ca71$exports))), 'react-spectrum-Datepicker-fieldWrapper')
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($2sBGl$react))).createElement((0, $c3ebc4931d9b9977$exports.Input), {
        ref: fieldRef,
        fieldProps: fieldProps,
        isDisabled: isDisabled,
        isQuiet: isQuiet,
        autoFocus: autoFocus,
        validationState: validationState,
        minWidth: approximateWidth,
        className: (0, $2sBGl$reactspectrumutils.classNames)((0, ($parcel$interopDefault($91c3db8c6a21ca71$exports))), 'react-spectrum-DateField')
    }, state.segments.map((segment, i)=>/*#__PURE__*/ (0, ($parcel$interopDefault($2sBGl$react))).createElement((0, $edac158d20ebe4a9$exports.DatePickerSegment), {
            key: i,
            segment: segment,
            state: state,
            isDisabled: isDisabled,
            isReadOnly: isReadOnly,
            isRequired: isRequired
        })), /*#__PURE__*/ (0, ($parcel$interopDefault($2sBGl$react))).createElement("input", {
        ...inputProps,
        ref: inputRef
    })));
});


//# sourceMappingURL=DateField.main.js.map
