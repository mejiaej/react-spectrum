var $02c19eea15a72a7b$exports = require("./CalendarMonth.main.js");
var $7e7c3b1f5233ce23$exports = require("./intlStrings.main.js");
require("./vars.0e34c9ec.css");
var $915891ae6206caad$exports = require("./calendar_vars_css.main.js");
var $6ckm4$reactspectrumbutton = require("@react-spectrum/button");
var $6ckm4$spectrumiconsuiChevronLeftLarge = require("@spectrum-icons/ui/ChevronLeftLarge");
var $6ckm4$spectrumiconsuiChevronRightLarge = require("@spectrum-icons/ui/ChevronRightLarge");
var $6ckm4$reactspectrumutils = require("@react-spectrum/utils");
var $6ckm4$reactspectrumlabel = require("@react-spectrum/label");
var $6ckm4$react = require("react");
var $6ckm4$reactariai18n = require("@react-aria/i18n");
var $6ckm4$reactariavisuallyhidden = require("@react-aria/visually-hidden");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "CalendarBase", () => $6d416018158e3a26$export$bfd52a43017368fe);
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










function $6d416018158e3a26$export$bfd52a43017368fe(props) {
    let { state: state, calendarProps: calendarProps, nextButtonProps: nextButtonProps, prevButtonProps: prevButtonProps, errorMessageProps: errorMessageProps, calendarRef: ref, visibleMonths: visibleMonths = 1 } = props;
    let { styleProps: styleProps } = (0, $6ckm4$reactspectrumutils.useStyleProps)(props);
    let stringFormatter = (0, $6ckm4$reactariai18n.useLocalizedStringFormatter)((0, ($parcel$interopDefault($7e7c3b1f5233ce23$exports))), '@react-spectrum/calendar');
    let { direction: direction } = (0, $6ckm4$reactariai18n.useLocale)();
    let currentMonth = state.visibleRange.start;
    let monthDateFormatter = (0, $6ckm4$reactariai18n.useDateFormatter)({
        month: 'long',
        year: 'numeric',
        era: currentMonth.calendar.identifier === 'gregory' && currentMonth.era === 'BC' ? 'short' : undefined,
        calendar: currentMonth.calendar.identifier,
        timeZone: state.timeZone
    });
    let titles = [];
    let calendars = [];
    for(let i = 0; i < visibleMonths; i++){
        let d = currentMonth.add({
            months: i
        });
        titles.push(/*#__PURE__*/ (0, ($parcel$interopDefault($6ckm4$react))).createElement("div", {
            key: i,
            className: (0, $6ckm4$reactspectrumutils.classNames)((0, ($parcel$interopDefault($915891ae6206caad$exports))), 'spectrum-Calendar-monthHeader')
        }, i === 0 && /*#__PURE__*/ (0, ($parcel$interopDefault($6ckm4$react))).createElement((0, $6ckm4$reactspectrumbutton.ActionButton), {
            ...prevButtonProps,
            UNSAFE_className: (0, $6ckm4$reactspectrumutils.classNames)((0, ($parcel$interopDefault($915891ae6206caad$exports))), 'spectrum-Calendar-prevMonth'),
            isQuiet: true
        }, direction === 'rtl' ? /*#__PURE__*/ (0, ($parcel$interopDefault($6ckm4$react))).createElement((0, ($parcel$interopDefault($6ckm4$spectrumiconsuiChevronRightLarge))), null) : /*#__PURE__*/ (0, ($parcel$interopDefault($6ckm4$react))).createElement((0, ($parcel$interopDefault($6ckm4$spectrumiconsuiChevronLeftLarge))), null)), /*#__PURE__*/ (0, ($parcel$interopDefault($6ckm4$react))).createElement("h2", {
            // We have a visually hidden heading describing the entire visible range,
            // and the calendar itself describes the individual month
            // so we don't need to repeat that here for screen reader users.
            "aria-hidden": true,
            className: (0, $6ckm4$reactspectrumutils.classNames)((0, ($parcel$interopDefault($915891ae6206caad$exports))), 'spectrum-Calendar-title')
        }, monthDateFormatter.format(d.toDate(state.timeZone))), i === visibleMonths - 1 && /*#__PURE__*/ (0, ($parcel$interopDefault($6ckm4$react))).createElement((0, $6ckm4$reactspectrumbutton.ActionButton), {
            ...nextButtonProps,
            UNSAFE_className: (0, $6ckm4$reactspectrumutils.classNames)((0, ($parcel$interopDefault($915891ae6206caad$exports))), 'spectrum-Calendar-nextMonth'),
            isQuiet: true
        }, direction === 'rtl' ? /*#__PURE__*/ (0, ($parcel$interopDefault($6ckm4$react))).createElement((0, ($parcel$interopDefault($6ckm4$spectrumiconsuiChevronLeftLarge))), null) : /*#__PURE__*/ (0, ($parcel$interopDefault($6ckm4$react))).createElement((0, ($parcel$interopDefault($6ckm4$spectrumiconsuiChevronRightLarge))), null))));
        calendars.push(/*#__PURE__*/ (0, ($parcel$interopDefault($6ckm4$react))).createElement((0, $02c19eea15a72a7b$exports.CalendarMonth), {
            ...props,
            key: i,
            state: state,
            startDate: d
        }));
    }
    return /*#__PURE__*/ (0, ($parcel$interopDefault($6ckm4$react))).createElement("div", {
        ...styleProps,
        ...calendarProps,
        ref: ref,
        className: (0, $6ckm4$reactspectrumutils.classNames)((0, ($parcel$interopDefault($915891ae6206caad$exports))), 'spectrum-Calendar', styleProps.className)
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($6ckm4$react))).createElement((0, $6ckm4$reactariavisuallyhidden.VisuallyHidden), null, /*#__PURE__*/ (0, ($parcel$interopDefault($6ckm4$react))).createElement("h2", null, calendarProps['aria-label'])), /*#__PURE__*/ (0, ($parcel$interopDefault($6ckm4$react))).createElement("div", {
        className: (0, $6ckm4$reactspectrumutils.classNames)((0, ($parcel$interopDefault($915891ae6206caad$exports))), 'spectrum-Calendar-header')
    }, titles), /*#__PURE__*/ (0, ($parcel$interopDefault($6ckm4$react))).createElement("div", {
        className: (0, $6ckm4$reactspectrumutils.classNames)((0, ($parcel$interopDefault($915891ae6206caad$exports))), 'spectrum-Calendar-months')
    }, calendars), /*#__PURE__*/ (0, ($parcel$interopDefault($6ckm4$react))).createElement((0, $6ckm4$reactariavisuallyhidden.VisuallyHidden), null, /*#__PURE__*/ (0, ($parcel$interopDefault($6ckm4$react))).createElement("button", {
        "aria-label": nextButtonProps['aria-label'],
        disabled: nextButtonProps.isDisabled,
        onClick: ()=>state.focusNextPage(),
        tabIndex: -1
    })), state.isValueInvalid && /*#__PURE__*/ (0, ($parcel$interopDefault($6ckm4$react))).createElement((0, $6ckm4$reactspectrumlabel.HelpText), {
        showErrorIcon: true,
        errorMessage: props.errorMessage || stringFormatter.format('invalidSelection', {
            selectedCount: 'highlightedRange' in state ? 2 : 1
        }),
        errorMessageProps: errorMessageProps,
        isInvalid: true,
        // Intentionally a global class name so it can be targeted in DatePicker CSS...
        UNSAFE_className: "spectrum-Calendar-helpText"
    }));
}


//# sourceMappingURL=CalendarBase.main.js.map
