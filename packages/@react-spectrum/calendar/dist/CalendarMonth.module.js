import {CalendarCell as $453c556b9066da11$export$5d847498420df57b} from "./CalendarCell.module.js";
import "./vars.0e34c9ec.css";
import $d434x$calendar_vars_cssmodulejs from "./calendar_vars_css.module.js";
import {endOfMonth as $d434x$endOfMonth, getWeeksInMonth as $d434x$getWeeksInMonth} from "@internationalized/date";
import {classNames as $d434x$classNames} from "@react-spectrum/utils";
import $d434x$react from "react";
import {useCalendarGrid as $d434x$useCalendarGrid} from "@react-aria/calendar";
import {useLocale as $d434x$useLocale} from "@react-aria/i18n";


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






function $faa2f3867773cfe5$export$26e2752316b9a375(props) {
    let { state: state, startDate: startDate } = props;
    let { gridProps: gridProps, headerProps: headerProps, weekDays: weekDays } = (0, $d434x$useCalendarGrid)({
        ...props,
        endDate: (0, $d434x$endOfMonth)(startDate)
    }, state);
    let { locale: locale } = (0, $d434x$useLocale)();
    let weeksInMonth = (0, $d434x$getWeeksInMonth)(startDate, locale);
    return /*#__PURE__*/ (0, $d434x$react).createElement("table", {
        ...gridProps,
        className: (0, $d434x$classNames)((0, ($parcel$interopDefault($d434x$calendar_vars_cssmodulejs))), 'spectrum-Calendar-body', 'spectrum-Calendar-table')
    }, /*#__PURE__*/ (0, $d434x$react).createElement("thead", headerProps, /*#__PURE__*/ (0, $d434x$react).createElement("tr", null, weekDays.map((day, index)=>/*#__PURE__*/ (0, $d434x$react).createElement("th", {
            key: index,
            className: (0, $d434x$classNames)((0, ($parcel$interopDefault($d434x$calendar_vars_cssmodulejs))), 'spectrum-Calendar-tableCell')
        }, /*#__PURE__*/ (0, $d434x$react).createElement("span", {
            className: (0, $d434x$classNames)((0, ($parcel$interopDefault($d434x$calendar_vars_cssmodulejs))), 'spectrum-Calendar-dayOfWeek')
        }, day))))), /*#__PURE__*/ (0, $d434x$react).createElement("tbody", null, [
        ...new Array(weeksInMonth).keys()
    ].map((weekIndex)=>/*#__PURE__*/ (0, $d434x$react).createElement("tr", {
            key: weekIndex
        }, state.getDatesInWeek(weekIndex, startDate).map((date, i)=>date ? /*#__PURE__*/ (0, $d434x$react).createElement((0, $453c556b9066da11$export$5d847498420df57b), {
                key: i,
                state: state,
                date: date,
                currentMonth: startDate
            }) : /*#__PURE__*/ (0, $d434x$react).createElement("td", {
                key: i
            }))))));
}


export {$faa2f3867773cfe5$export$26e2752316b9a375 as CalendarMonth};
//# sourceMappingURL=CalendarMonth.module.js.map
