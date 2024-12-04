var $52c7c3c887827b64$exports = require("./CalendarCell.main.js");
require("./vars.0e34c9ec.css");
var $915891ae6206caad$exports = require("./calendar_vars_css.main.js");
var $4d66a$internationalizeddate = require("@internationalized/date");
var $4d66a$reactspectrumutils = require("@react-spectrum/utils");
var $4d66a$react = require("react");
var $4d66a$reactariacalendar = require("@react-aria/calendar");
var $4d66a$reactariai18n = require("@react-aria/i18n");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "CalendarMonth", () => $02c19eea15a72a7b$export$26e2752316b9a375);
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






function $02c19eea15a72a7b$export$26e2752316b9a375(props) {
    let { state: state, startDate: startDate } = props;
    let { gridProps: gridProps, headerProps: headerProps, weekDays: weekDays } = (0, $4d66a$reactariacalendar.useCalendarGrid)({
        ...props,
        endDate: (0, $4d66a$internationalizeddate.endOfMonth)(startDate)
    }, state);
    let { locale: locale } = (0, $4d66a$reactariai18n.useLocale)();
    let weeksInMonth = (0, $4d66a$internationalizeddate.getWeeksInMonth)(startDate, locale);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($4d66a$react))).createElement("table", {
        ...gridProps,
        className: (0, $4d66a$reactspectrumutils.classNames)((0, ($parcel$interopDefault($915891ae6206caad$exports))), 'spectrum-Calendar-body', 'spectrum-Calendar-table')
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($4d66a$react))).createElement("thead", headerProps, /*#__PURE__*/ (0, ($parcel$interopDefault($4d66a$react))).createElement("tr", null, weekDays.map((day, index)=>/*#__PURE__*/ (0, ($parcel$interopDefault($4d66a$react))).createElement("th", {
            key: index,
            className: (0, $4d66a$reactspectrumutils.classNames)((0, ($parcel$interopDefault($915891ae6206caad$exports))), 'spectrum-Calendar-tableCell')
        }, /*#__PURE__*/ (0, ($parcel$interopDefault($4d66a$react))).createElement("span", {
            className: (0, $4d66a$reactspectrumutils.classNames)((0, ($parcel$interopDefault($915891ae6206caad$exports))), 'spectrum-Calendar-dayOfWeek')
        }, day))))), /*#__PURE__*/ (0, ($parcel$interopDefault($4d66a$react))).createElement("tbody", null, [
        ...new Array(weeksInMonth).keys()
    ].map((weekIndex)=>/*#__PURE__*/ (0, ($parcel$interopDefault($4d66a$react))).createElement("tr", {
            key: weekIndex
        }, state.getDatesInWeek(weekIndex, startDate).map((date, i)=>date ? /*#__PURE__*/ (0, ($parcel$interopDefault($4d66a$react))).createElement((0, $52c7c3c887827b64$exports.CalendarCell), {
                key: i,
                state: state,
                date: date,
                currentMonth: startDate
            }) : /*#__PURE__*/ (0, ($parcel$interopDefault($4d66a$react))).createElement("td", {
                key: i
            }))))));
}


//# sourceMappingURL=CalendarMonth.main.js.map
