var $edac158d20ebe4a9$exports = require("./DatePickerSegment.main.js");
require("./styles.d49f4d83.css");
var $91c3db8c6a21ca71$exports = require("./styles_css.main.js");
var $g7Fnj$reactspectrumutils = require("@react-spectrum/utils");
var $g7Fnj$internationalizeddate = require("@internationalized/date");
var $g7Fnj$react = require("react");
var $g7Fnj$reactariadatepicker = require("@react-aria/datepicker");
var $g7Fnj$reactstatelydatepicker = require("@react-stately/datepicker");
var $g7Fnj$reactariai18n = require("@react-aria/i18n");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "DatePickerField", () => $bd22dc8dad9522bc$export$34dc4cfa15ead1);
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







function $bd22dc8dad9522bc$export$34dc4cfa15ead1(props) {
    let { isDisabled: isDisabled, isReadOnly: isReadOnly, isRequired: isRequired, inputClassName: inputClassName } = props;
    let ref = (0, $g7Fnj$react.useRef)(null);
    let { locale: locale } = (0, $g7Fnj$reactariai18n.useLocale)();
    let state = (0, $g7Fnj$reactstatelydatepicker.useDateFieldState)({
        ...props,
        locale: locale,
        createCalendar: $g7Fnj$internationalizeddate.createCalendar
    });
    let inputRef = (0, $g7Fnj$react.useRef)(null);
    let { fieldProps: fieldProps, inputProps: inputProps } = (0, $g7Fnj$reactariadatepicker.useDateField)({
        ...props,
        inputRef: inputRef
    }, state, ref);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($g7Fnj$react))).createElement("div", {
        ...fieldProps,
        "data-testid": props['data-testid'],
        className: (0, $g7Fnj$reactspectrumutils.classNames)((0, ($parcel$interopDefault($91c3db8c6a21ca71$exports))), 'react-spectrum-Datepicker-segments', inputClassName),
        ref: ref
    }, state.segments.map((segment, i)=>/*#__PURE__*/ (0, ($parcel$interopDefault($g7Fnj$react))).createElement((0, $edac158d20ebe4a9$exports.DatePickerSegment), {
            key: i,
            segment: segment,
            state: state,
            isDisabled: isDisabled,
            isReadOnly: isReadOnly,
            isRequired: isRequired
        })), /*#__PURE__*/ (0, ($parcel$interopDefault($g7Fnj$react))).createElement("input", {
        ...inputProps,
        ref: inputRef
    }));
}


//# sourceMappingURL=DatePickerField.main.js.map
