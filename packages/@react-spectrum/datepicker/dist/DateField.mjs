import {DatePickerSegment as $cfa347761f172638$export$6388987c5223b54e} from "./DatePickerSegment.mjs";
import "./styles.d49f4d83.css";
import $6iHxC$styles_cssmodulejs from "./styles_css.mjs";
import {Input as $79348162c55d687f$export$f5b8910cec6cf069} from "./Input.mjs";
import {useFocusManagerRef as $04e96200274b03de$export$71a23a36270e4bf0, useFormatHelpText as $04e96200274b03de$export$322f4580ccd8dde6, useFormattedDateWidth as $04e96200274b03de$export$31e22e3c931fc056} from "./utils.mjs";
import {classNames as $6iHxC$classNames} from "@react-spectrum/utils";
import {createCalendar as $6iHxC$createCalendar} from "@internationalized/date";
import {Field as $6iHxC$Field} from "@react-spectrum/label";
import $6iHxC$react, {useRef as $6iHxC$useRef} from "react";
import {useDateField as $6iHxC$useDateField} from "@react-aria/datepicker";
import {useDateFieldState as $6iHxC$useDateFieldState} from "@react-stately/datepicker";
import {useFormProps as $6iHxC$useFormProps} from "@react-spectrum/form";
import {useLocale as $6iHxC$useLocale} from "@react-aria/i18n";
import {useProviderProps as $6iHxC$useProviderProps} from "@react-spectrum/provider";


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












const $0129798af6791690$export$d9781c7894a82487 = /*#__PURE__*/ (0, $6iHxC$react).forwardRef(function DateField(props, ref) {
    props = (0, $6iHxC$useProviderProps)(props);
    props = (0, $6iHxC$useFormProps)(props);
    let { autoFocus: autoFocus, isDisabled: isDisabled, isReadOnly: isReadOnly, isRequired: isRequired, isQuiet: isQuiet } = props;
    let domRef = (0, $04e96200274b03de$export$71a23a36270e4bf0)(ref);
    let { locale: locale } = (0, $6iHxC$useLocale)();
    let state = (0, $6iHxC$useDateFieldState)({
        ...props,
        locale: locale,
        createCalendar: $6iHxC$createCalendar
    });
    let fieldRef = (0, $6iHxC$useRef)(null);
    let inputRef = (0, $6iHxC$useRef)(null);
    let { labelProps: labelProps, fieldProps: fieldProps, inputProps: inputProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps, isInvalid: isInvalid, validationErrors: validationErrors, validationDetails: validationDetails } = (0, $6iHxC$useDateField)({
        ...props,
        inputRef: inputRef
    }, state, fieldRef);
    // Note: this description is intentionally not passed to useDatePicker.
    // The format help text is unnecessary for screen reader users because each segment already has a label.
    let description = (0, $04e96200274b03de$export$322f4580ccd8dde6)(props);
    if (description && !props.description) descriptionProps.id = undefined;
    let validationState = state.validationState || (isInvalid ? 'invalid' : null);
    let approximateWidth = (0, $04e96200274b03de$export$31e22e3c931fc056)(state) + 'ch';
    return /*#__PURE__*/ (0, $6iHxC$react).createElement((0, $6iHxC$Field), {
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
        wrapperClassName: (0, $6iHxC$classNames)((0, ($parcel$interopDefault($6iHxC$styles_cssmodulejs))), 'react-spectrum-Datepicker-fieldWrapper')
    }, /*#__PURE__*/ (0, $6iHxC$react).createElement((0, $79348162c55d687f$export$f5b8910cec6cf069), {
        ref: fieldRef,
        fieldProps: fieldProps,
        isDisabled: isDisabled,
        isQuiet: isQuiet,
        autoFocus: autoFocus,
        validationState: validationState,
        minWidth: approximateWidth,
        className: (0, $6iHxC$classNames)((0, ($parcel$interopDefault($6iHxC$styles_cssmodulejs))), 'react-spectrum-DateField')
    }, state.segments.map((segment, i)=>/*#__PURE__*/ (0, $6iHxC$react).createElement((0, $cfa347761f172638$export$6388987c5223b54e), {
            key: i,
            segment: segment,
            state: state,
            isDisabled: isDisabled,
            isReadOnly: isReadOnly,
            isRequired: isRequired
        })), /*#__PURE__*/ (0, $6iHxC$react).createElement("input", {
        ...inputProps,
        ref: inputRef
    })));
});


export {$0129798af6791690$export$d9781c7894a82487 as DateField};
//# sourceMappingURL=DateField.module.js.map
