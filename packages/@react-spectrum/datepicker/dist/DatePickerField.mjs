import {DatePickerSegment as $cfa347761f172638$export$6388987c5223b54e} from "./DatePickerSegment.mjs";
import "./styles.d49f4d83.css";
import $332Ed$styles_cssmodulejs from "./styles_css.mjs";
import {classNames as $332Ed$classNames} from "@react-spectrum/utils";
import {createCalendar as $332Ed$createCalendar} from "@internationalized/date";
import $332Ed$react, {useRef as $332Ed$useRef} from "react";
import {useDateField as $332Ed$useDateField} from "@react-aria/datepicker";
import {useDateFieldState as $332Ed$useDateFieldState} from "@react-stately/datepicker";
import {useLocale as $332Ed$useLocale} from "@react-aria/i18n";


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







function $d2bb88c82604b25f$export$34dc4cfa15ead1(props) {
    let { isDisabled: isDisabled, isReadOnly: isReadOnly, isRequired: isRequired, inputClassName: inputClassName } = props;
    let ref = (0, $332Ed$useRef)(null);
    let { locale: locale } = (0, $332Ed$useLocale)();
    let state = (0, $332Ed$useDateFieldState)({
        ...props,
        locale: locale,
        createCalendar: $332Ed$createCalendar
    });
    let inputRef = (0, $332Ed$useRef)(null);
    let { fieldProps: fieldProps, inputProps: inputProps } = (0, $332Ed$useDateField)({
        ...props,
        inputRef: inputRef
    }, state, ref);
    return /*#__PURE__*/ (0, $332Ed$react).createElement("div", {
        ...fieldProps,
        "data-testid": props['data-testid'],
        className: (0, $332Ed$classNames)((0, ($parcel$interopDefault($332Ed$styles_cssmodulejs))), 'react-spectrum-Datepicker-segments', inputClassName),
        ref: ref
    }, state.segments.map((segment, i)=>/*#__PURE__*/ (0, $332Ed$react).createElement((0, $cfa347761f172638$export$6388987c5223b54e), {
            key: i,
            segment: segment,
            state: state,
            isDisabled: isDisabled,
            isReadOnly: isReadOnly,
            isRequired: isRequired
        })), /*#__PURE__*/ (0, $332Ed$react).createElement("input", {
        ...inputProps,
        ref: inputRef
    }));
}


export {$d2bb88c82604b25f$export$34dc4cfa15ead1 as DatePickerField};
//# sourceMappingURL=DatePickerField.module.js.map
