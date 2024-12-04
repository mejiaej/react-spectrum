import "./vars.6c953d9a.css";
import $fhlTD$fieldlabel_vars_cssmodulejs from "./fieldlabel_vars_css.module.js";
import {getLocalTimeZone as $fhlTD$getLocalTimeZone, today as $fhlTD$today, toCalendarDateTime as $fhlTD$toCalendarDateTime} from "@internationalized/date";
import {useDOMRef as $fhlTD$useDOMRef, classNames as $fhlTD$classNames} from "@react-spectrum/utils";
import {Field as $fhlTD$Field} from "@react-spectrum/label";
import {filterDOMProps as $fhlTD$filterDOMProps} from "@react-aria/utils";
import $fhlTD$react from "react";
import {useListFormatter as $fhlTD$useListFormatter, useNumberFormatter as $fhlTD$useNumberFormatter, useDateFormatter as $fhlTD$useDateFormatter} from "@react-aria/i18n";


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






const $3e9971be431adb24$export$d1328f67a56fa517 = /*#__PURE__*/ (0, $fhlTD$react).forwardRef(function LabeledValue(props, ref) {
    let { value: value, formatOptions: formatOptions } = props;
    let domRef = (0, $fhlTD$useDOMRef)(ref);
    let children;
    if (Array.isArray(value)) children = /*#__PURE__*/ (0, $fhlTD$react).createElement($3e9971be431adb24$var$FormattedStringList, {
        value: value,
        formatOptions: formatOptions
    });
    if (typeof value === 'object' && 'start' in value && typeof value.start === 'number' && typeof value.end === 'number') children = /*#__PURE__*/ (0, $fhlTD$react).createElement($3e9971be431adb24$var$FormattedNumber, {
        value: value,
        formatOptions: formatOptions
    });
    if (typeof value === 'object' && 'start' in value && typeof value.start !== 'number' && typeof value.end !== 'number') children = /*#__PURE__*/ (0, $fhlTD$react).createElement($3e9971be431adb24$var$FormattedDate, {
        value: value,
        formatOptions: formatOptions
    });
    if (typeof value === 'number') children = /*#__PURE__*/ (0, $fhlTD$react).createElement($3e9971be431adb24$var$FormattedNumber, {
        value: value,
        formatOptions: formatOptions
    });
    if (typeof value === 'object' && ('calendar' in value || 'hour' in value) || value instanceof Date) children = /*#__PURE__*/ (0, $fhlTD$react).createElement($3e9971be431adb24$var$FormattedDate, {
        value: value,
        formatOptions: formatOptions
    });
    if (typeof value === 'string') children = value;
    return /*#__PURE__*/ (0, $fhlTD$react).createElement((0, $fhlTD$Field), {
        ...props,
        wrapperProps: (0, $fhlTD$filterDOMProps)(props),
        ref: domRef,
        elementType: "span",
        wrapperClassName: (0, $fhlTD$classNames)((0, ($parcel$interopDefault($fhlTD$fieldlabel_vars_cssmodulejs))), 'spectrum-LabeledValue')
    }, /*#__PURE__*/ (0, $fhlTD$react).createElement("span", null, children));
});
function $3e9971be431adb24$var$FormattedStringList(props) {
    let stringFormatter = (0, $fhlTD$useListFormatter)(props.formatOptions);
    return /*#__PURE__*/ (0, $fhlTD$react).createElement((0, $fhlTD$react).Fragment, null, stringFormatter.format(props.value));
}
function $3e9971be431adb24$var$FormattedNumber(props) {
    let numberFormatter = (0, $fhlTD$useNumberFormatter)(props.formatOptions);
    let value = props.value;
    if (typeof value === 'object') return /*#__PURE__*/ (0, $fhlTD$react).createElement((0, $fhlTD$react).Fragment, null, numberFormatter.formatRange(value.start, value.end));
    return /*#__PURE__*/ (0, $fhlTD$react).createElement((0, $fhlTD$react).Fragment, null, numberFormatter.format(value));
}
function $3e9971be431adb24$var$FormattedDate(props) {
    let { value: value, formatOptions: formatOptions } = props;
    if (!formatOptions) formatOptions = $3e9971be431adb24$var$getDefaultFormatOptions('start' in value ? value.start : value);
    let dateFormatter = (0, $fhlTD$useDateFormatter)(formatOptions);
    let timeZone = dateFormatter.resolvedOptions().timeZone || (0, $fhlTD$getLocalTimeZone)();
    let final;
    if ('start' in value && 'end' in value) {
        let start = value.start;
        let end = value.end;
        start = $3e9971be431adb24$var$convertDateTime(start, timeZone);
        end = $3e9971be431adb24$var$convertDateTime(end, timeZone);
        return /*#__PURE__*/ (0, $fhlTD$react).createElement((0, $fhlTD$react).Fragment, null, dateFormatter.formatRange(start, end));
    }
    final = $3e9971be431adb24$var$convertDateTime(value, timeZone);
    return /*#__PURE__*/ (0, $fhlTD$react).createElement((0, $fhlTD$react).Fragment, null, dateFormatter.format(final));
}
function $3e9971be431adb24$var$convertDateTime(value, timeZone) {
    if ('timeZone' in value) return value.toDate();
    else if ('calendar' in value) return value.toDate(timeZone);
    else if (!(value instanceof Date)) return $3e9971be431adb24$var$convertValue(value).toDate(timeZone);
    return value;
}
function $3e9971be431adb24$var$getDefaultFormatOptions(value) {
    if (value instanceof Date) return {
        dateStyle: 'long',
        timeStyle: 'short'
    };
    else if ('timeZone' in value) return {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        timeZone: value.timeZone,
        timeZoneName: 'short'
    };
    else if ('hour' in value && 'year' in value) return {
        dateStyle: 'long',
        timeStyle: 'short'
    };
    else if ('hour' in value) return {
        timeStyle: 'short'
    };
    else return {
        dateStyle: 'long'
    };
}
function $3e9971be431adb24$var$convertValue(value) {
    let date = (0, $fhlTD$today)((0, $fhlTD$getLocalTimeZone)());
    return (0, $fhlTD$toCalendarDateTime)(date, value);
}


export {$3e9971be431adb24$export$d1328f67a56fa517 as LabeledValue};
//# sourceMappingURL=LabeledValue.module.js.map
