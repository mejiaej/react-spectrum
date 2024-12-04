var $6d416018158e3a26$exports = require("./CalendarBase.main.js");
var $jdfnP$internationalizeddate = require("@internationalized/date");
var $jdfnP$reactspectrumutils = require("@react-spectrum/utils");
var $jdfnP$react = require("react");
var $jdfnP$reactariacalendar = require("@react-aria/calendar");
var $jdfnP$reactstatelycalendar = require("@react-stately/calendar");
var $jdfnP$reactariai18n = require("@react-aria/i18n");
var $jdfnP$reactspectrumprovider = require("@react-spectrum/provider");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "Calendar", () => $d9490b77e8681e44$export$e1aef45b828286de);
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







const $d9490b77e8681e44$export$e1aef45b828286de = /*#__PURE__*/ (0, ($parcel$interopDefault($jdfnP$react))).forwardRef(function Calendar(props, ref) {
    props = (0, $jdfnP$reactspectrumprovider.useProviderProps)(props);
    let { visibleMonths: visibleMonths = 1 } = props;
    visibleMonths = Math.max(visibleMonths, 1);
    let visibleDuration = (0, $jdfnP$react.useMemo)(()=>({
            months: visibleMonths
        }), [
        visibleMonths
    ]);
    let { locale: locale } = (0, $jdfnP$reactariai18n.useLocale)();
    let state = (0, $jdfnP$reactstatelycalendar.useCalendarState)({
        ...props,
        locale: locale,
        visibleDuration: visibleDuration,
        createCalendar: $jdfnP$internationalizeddate.createCalendar
    });
    let domRef = (0, $jdfnP$react.useRef)(null);
    (0, $jdfnP$react.useImperativeHandle)(ref, ()=>({
            ...(0, $jdfnP$reactspectrumutils.createDOMRef)(domRef),
            focus () {
                state.setFocused(true);
            }
        }));
    let { calendarProps: calendarProps, prevButtonProps: prevButtonProps, nextButtonProps: nextButtonProps, errorMessageProps: errorMessageProps } = (0, $jdfnP$reactariacalendar.useCalendar)(props, state);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($jdfnP$react))).createElement((0, $6d416018158e3a26$exports.CalendarBase), {
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


//# sourceMappingURL=Calendar.main.js.map
