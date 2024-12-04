var $6d416018158e3a26$exports = require("./CalendarBase.main.js");
var $j3Qmk$internationalizeddate = require("@internationalized/date");
var $j3Qmk$reactspectrumutils = require("@react-spectrum/utils");
var $j3Qmk$react = require("react");
var $j3Qmk$reactariai18n = require("@react-aria/i18n");
var $j3Qmk$reactspectrumprovider = require("@react-spectrum/provider");
var $j3Qmk$reactariacalendar = require("@react-aria/calendar");
var $j3Qmk$reactstatelycalendar = require("@react-stately/calendar");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "RangeCalendar", () => $4d045066f2092e3b$export$a4f5c8b89d277a8d);
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







const $4d045066f2092e3b$export$a4f5c8b89d277a8d = /*#__PURE__*/ (0, ($parcel$interopDefault($j3Qmk$react))).forwardRef(function RangeCalendar(props, ref) {
    props = (0, $j3Qmk$reactspectrumprovider.useProviderProps)(props);
    let { visibleMonths: visibleMonths = 1 } = props;
    visibleMonths = Math.max(visibleMonths, 1);
    let visibleDuration = (0, $j3Qmk$react.useMemo)(()=>({
            months: visibleMonths
        }), [
        visibleMonths
    ]);
    let { locale: locale } = (0, $j3Qmk$reactariai18n.useLocale)();
    let state = (0, $j3Qmk$reactstatelycalendar.useRangeCalendarState)({
        ...props,
        locale: locale,
        visibleDuration: visibleDuration,
        createCalendar: $j3Qmk$internationalizeddate.createCalendar
    });
    let domRef = (0, $j3Qmk$react.useRef)(null);
    (0, $j3Qmk$react.useImperativeHandle)(ref, ()=>({
            ...(0, $j3Qmk$reactspectrumutils.createDOMRef)(domRef),
            focus () {
                state.setFocused(true);
            }
        }));
    let { calendarProps: calendarProps, prevButtonProps: prevButtonProps, nextButtonProps: nextButtonProps, errorMessageProps: errorMessageProps } = (0, $j3Qmk$reactariacalendar.useRangeCalendar)(props, state, domRef);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($j3Qmk$react))).createElement((0, $6d416018158e3a26$exports.CalendarBase), {
        ...props,
        visibleMonths: visibleMonths,
        state: state,
        calendarRef: domRef,
        calendarProps: calendarProps,
        prevButtonProps: prevButtonProps,
        nextButtonProps: nextButtonProps,
        errorMessageProps: errorMessageProps
    });
});


//# sourceMappingURL=RangeCalendar.main.js.map
