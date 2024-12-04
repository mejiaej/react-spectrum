require("./vars.6c953d9a.css");
var $eb2fc0ee655eff6b$exports = require("./fieldlabel_vars_css.main.js");
var $lcZyr$internationalizeddate = require("@internationalized/date");
var $lcZyr$reactspectrumutils = require("@react-spectrum/utils");
var $lcZyr$reactspectrumlabel = require("@react-spectrum/label");
var $lcZyr$reactariautils = require("@react-aria/utils");
var $lcZyr$react = require("react");
var $lcZyr$reactariai18n = require("@react-aria/i18n");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "LabeledValue", () => $2a7417c2df2197f7$export$d1328f67a56fa517);
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






const $2a7417c2df2197f7$export$d1328f67a56fa517 = /*#__PURE__*/ (0, ($parcel$interopDefault($lcZyr$react))).forwardRef(function LabeledValue(props, ref) {
    let { value: value, formatOptions: formatOptions } = props;
    let domRef = (0, $lcZyr$reactspectrumutils.useDOMRef)(ref);
    let children;
    if (Array.isArray(value)) children = /*#__PURE__*/ (0, ($parcel$interopDefault($lcZyr$react))).createElement($2a7417c2df2197f7$var$FormattedStringList, {
        value: value,
        formatOptions: formatOptions
    });
    if (typeof value === 'object' && 'start' in value && typeof value.start === 'number' && typeof value.end === 'number') children = /*#__PURE__*/ (0, ($parcel$interopDefault($lcZyr$react))).createElement($2a7417c2df2197f7$var$FormattedNumber, {
        value: value,
        formatOptions: formatOptions
    });
    if (typeof value === 'object' && 'start' in value && typeof value.start !== 'number' && typeof value.end !== 'number') children = /*#__PURE__*/ (0, ($parcel$interopDefault($lcZyr$react))).createElement($2a7417c2df2197f7$var$FormattedDate, {
        value: value,
        formatOptions: formatOptions
    });
    if (typeof value === 'number') children = /*#__PURE__*/ (0, ($parcel$interopDefault($lcZyr$react))).createElement($2a7417c2df2197f7$var$FormattedNumber, {
        value: value,
        formatOptions: formatOptions
    });
    if (typeof value === 'object' && ('calendar' in value || 'hour' in value) || value instanceof Date) children = /*#__PURE__*/ (0, ($parcel$interopDefault($lcZyr$react))).createElement($2a7417c2df2197f7$var$FormattedDate, {
        value: value,
        formatOptions: formatOptions
    });
    if (typeof value === 'string') children = value;
    return /*#__PURE__*/ (0, ($parcel$interopDefault($lcZyr$react))).createElement((0, $lcZyr$reactspectrumlabel.Field), {
        ...props,
        wrapperProps: (0, $lcZyr$reactariautils.filterDOMProps)(props),
        ref: domRef,
        elementType: "span",
        wrapperClassName: (0, $lcZyr$reactspectrumutils.classNames)((0, ($parcel$interopDefault($eb2fc0ee655eff6b$exports))), 'spectrum-LabeledValue')
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($lcZyr$react))).createElement("span", null, children));
});
function $2a7417c2df2197f7$var$FormattedStringList(props) {
    let stringFormatter = (0, $lcZyr$reactariai18n.useListFormatter)(props.formatOptions);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($lcZyr$react))).createElement((0, ($parcel$interopDefault($lcZyr$react))).Fragment, null, stringFormatter.format(props.value));
}
function $2a7417c2df2197f7$var$FormattedNumber(props) {
    let numberFormatter = (0, $lcZyr$reactariai18n.useNumberFormatter)(props.formatOptions);
    let value = props.value;
    if (typeof value === 'object') return /*#__PURE__*/ (0, ($parcel$interopDefault($lcZyr$react))).createElement((0, ($parcel$interopDefault($lcZyr$react))).Fragment, null, numberFormatter.formatRange(value.start, value.end));
    return /*#__PURE__*/ (0, ($parcel$interopDefault($lcZyr$react))).createElement((0, ($parcel$interopDefault($lcZyr$react))).Fragment, null, numberFormatter.format(value));
}
function $2a7417c2df2197f7$var$FormattedDate(props) {
    let { value: value, formatOptions: formatOptions } = props;
    if (!formatOptions) formatOptions = $2a7417c2df2197f7$var$getDefaultFormatOptions('start' in value ? value.start : value);
    let dateFormatter = (0, $lcZyr$reactariai18n.useDateFormatter)(formatOptions);
    let timeZone = dateFormatter.resolvedOptions().timeZone || (0, $lcZyr$internationalizeddate.getLocalTimeZone)();
    let final;
    if ('start' in value && 'end' in value) {
        let start = value.start;
        let end = value.end;
        start = $2a7417c2df2197f7$var$convertDateTime(start, timeZone);
        end = $2a7417c2df2197f7$var$convertDateTime(end, timeZone);
        return /*#__PURE__*/ (0, ($parcel$interopDefault($lcZyr$react))).createElement((0, ($parcel$interopDefault($lcZyr$react))).Fragment, null, dateFormatter.formatRange(start, end));
    }
    final = $2a7417c2df2197f7$var$convertDateTime(value, timeZone);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($lcZyr$react))).createElement((0, ($parcel$interopDefault($lcZyr$react))).Fragment, null, dateFormatter.format(final));
}
function $2a7417c2df2197f7$var$convertDateTime(value, timeZone) {
    if ('timeZone' in value) return value.toDate();
    else if ('calendar' in value) return value.toDate(timeZone);
    else if (!(value instanceof Date)) return $2a7417c2df2197f7$var$convertValue(value).toDate(timeZone);
    return value;
}
function $2a7417c2df2197f7$var$getDefaultFormatOptions(value) {
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
function $2a7417c2df2197f7$var$convertValue(value) {
    let date = (0, $lcZyr$internationalizeddate.today)((0, $lcZyr$internationalizeddate.getLocalTimeZone)());
    return (0, $lcZyr$internationalizeddate.toCalendarDateTime)(date, value);
}


//# sourceMappingURL=LabeledValue.main.js.map
