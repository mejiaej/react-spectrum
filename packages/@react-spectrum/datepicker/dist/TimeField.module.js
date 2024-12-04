import {DatePickerSegment as $cfa347761f172638$export$6388987c5223b54e} from "./DatePickerSegment.module.js";
import "./styles.d49f4d83.css";
import $immgY$styles_cssmodulejs from "./styles_css.module.js";
import {Input as $79348162c55d687f$export$f5b8910cec6cf069} from "./Input.module.js";
import {useFocusManagerRef as $04e96200274b03de$export$71a23a36270e4bf0, useFormattedDateWidth as $04e96200274b03de$export$31e22e3c931fc056} from "./utils.module.js";
import {classNames as $immgY$classNames} from "@react-spectrum/utils";
import {Field as $immgY$Field} from "@react-spectrum/label";
import $immgY$react, {useRef as $immgY$useRef} from "react";
import {useFormProps as $immgY$useFormProps} from "@react-spectrum/form";
import {useLocale as $immgY$useLocale} from "@react-aria/i18n";
import {useProviderProps as $immgY$useProviderProps} from "@react-spectrum/provider";
import {useTimeField as $immgY$useTimeField} from "@react-aria/datepicker";
import {useTimeFieldState as $immgY$useTimeFieldState} from "@react-stately/datepicker";


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











const $f0a04554754386b6$export$5eaee2322dd727eb = /*#__PURE__*/ (0, $immgY$react).forwardRef(function TimeField(props, ref) {
    props = (0, $immgY$useProviderProps)(props);
    props = (0, $immgY$useFormProps)(props);
    let { autoFocus: autoFocus, isDisabled: isDisabled, isReadOnly: isReadOnly, isRequired: isRequired, isQuiet: isQuiet } = props;
    let domRef = (0, $04e96200274b03de$export$71a23a36270e4bf0)(ref);
    let { locale: locale } = (0, $immgY$useLocale)();
    let state = (0, $immgY$useTimeFieldState)({
        ...props,
        locale: locale
    });
    let fieldRef = (0, $immgY$useRef)(null);
    let inputRef = (0, $immgY$useRef)(null);
    let { labelProps: labelProps, fieldProps: fieldProps, inputProps: inputProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps, isInvalid: isInvalid, validationErrors: validationErrors, validationDetails: validationDetails } = (0, $immgY$useTimeField)({
        ...props,
        inputRef: inputRef
    }, state, fieldRef);
    let validationState = state.validationState || (isInvalid ? 'invalid' : null);
    let approximateWidth = (0, $04e96200274b03de$export$31e22e3c931fc056)(state) + 'ch';
    return /*#__PURE__*/ (0, $immgY$react).createElement((0, $immgY$Field), {
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
        wrapperClassName: (0, $immgY$classNames)((0, ($parcel$interopDefault($immgY$styles_cssmodulejs))), 'react-spectrum-TimeField-fieldWrapper')
    }, /*#__PURE__*/ (0, $immgY$react).createElement((0, $79348162c55d687f$export$f5b8910cec6cf069), {
        ref: fieldRef,
        fieldProps: fieldProps,
        isDisabled: isDisabled,
        isQuiet: isQuiet,
        autoFocus: autoFocus,
        validationState: validationState,
        minWidth: approximateWidth,
        className: (0, $immgY$classNames)((0, ($parcel$interopDefault($immgY$styles_cssmodulejs))), 'react-spectrum-TimeField')
    }, state.segments.map((segment, i)=>/*#__PURE__*/ (0, $immgY$react).createElement((0, $cfa347761f172638$export$6388987c5223b54e), {
            key: i,
            segment: segment,
            state: state,
            isDisabled: isDisabled,
            isReadOnly: isReadOnly,
            isRequired: isRequired
        })), /*#__PURE__*/ (0, $immgY$react).createElement("input", {
        ...inputProps,
        ref: inputRef
    })));
});


export {$f0a04554754386b6$export$5eaee2322dd727eb as TimeField};
//# sourceMappingURL=TimeField.module.js.map
