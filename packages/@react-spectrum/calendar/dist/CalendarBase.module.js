import {CalendarMonth as $faa2f3867773cfe5$export$26e2752316b9a375} from "./CalendarMonth.module.js";
import $bF3AV$intlStringsmodulejs from "./intlStrings.module.js";
import "./vars.0e34c9ec.css";
import $bF3AV$calendar_vars_cssmodulejs from "./calendar_vars_css.module.js";
import {ActionButton as $bF3AV$ActionButton} from "@react-spectrum/button";
import $bF3AV$spectrumiconsuiChevronLeftLarge from "@spectrum-icons/ui/ChevronLeftLarge";
import $bF3AV$spectrumiconsuiChevronRightLarge from "@spectrum-icons/ui/ChevronRightLarge";
import {useStyleProps as $bF3AV$useStyleProps, classNames as $bF3AV$classNames} from "@react-spectrum/utils";
import {HelpText as $bF3AV$HelpText} from "@react-spectrum/label";
import $bF3AV$react from "react";
import {useLocalizedStringFormatter as $bF3AV$useLocalizedStringFormatter, useLocale as $bF3AV$useLocale, useDateFormatter as $bF3AV$useDateFormatter} from "@react-aria/i18n";
import {VisuallyHidden as $bF3AV$VisuallyHidden} from "@react-aria/visually-hidden";


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










function $62cd1e80f0dffb66$export$bfd52a43017368fe(props) {
    let { state: state, calendarProps: calendarProps, nextButtonProps: nextButtonProps, prevButtonProps: prevButtonProps, errorMessageProps: errorMessageProps, calendarRef: ref, visibleMonths: visibleMonths = 1 } = props;
    let { styleProps: styleProps } = (0, $bF3AV$useStyleProps)(props);
    let stringFormatter = (0, $bF3AV$useLocalizedStringFormatter)((0, ($parcel$interopDefault($bF3AV$intlStringsmodulejs))), '@react-spectrum/calendar');
    let { direction: direction } = (0, $bF3AV$useLocale)();
    let currentMonth = state.visibleRange.start;
    let monthDateFormatter = (0, $bF3AV$useDateFormatter)({
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
        titles.push(/*#__PURE__*/ (0, $bF3AV$react).createElement("div", {
            key: i,
            className: (0, $bF3AV$classNames)((0, ($parcel$interopDefault($bF3AV$calendar_vars_cssmodulejs))), 'spectrum-Calendar-monthHeader')
        }, i === 0 && /*#__PURE__*/ (0, $bF3AV$react).createElement((0, $bF3AV$ActionButton), {
            ...prevButtonProps,
            UNSAFE_className: (0, $bF3AV$classNames)((0, ($parcel$interopDefault($bF3AV$calendar_vars_cssmodulejs))), 'spectrum-Calendar-prevMonth'),
            isQuiet: true
        }, direction === 'rtl' ? /*#__PURE__*/ (0, $bF3AV$react).createElement((0, $bF3AV$spectrumiconsuiChevronRightLarge), null) : /*#__PURE__*/ (0, $bF3AV$react).createElement((0, $bF3AV$spectrumiconsuiChevronLeftLarge), null)), /*#__PURE__*/ (0, $bF3AV$react).createElement("h2", {
            // We have a visually hidden heading describing the entire visible range,
            // and the calendar itself describes the individual month
            // so we don't need to repeat that here for screen reader users.
            "aria-hidden": true,
            className: (0, $bF3AV$classNames)((0, ($parcel$interopDefault($bF3AV$calendar_vars_cssmodulejs))), 'spectrum-Calendar-title')
        }, monthDateFormatter.format(d.toDate(state.timeZone))), i === visibleMonths - 1 && /*#__PURE__*/ (0, $bF3AV$react).createElement((0, $bF3AV$ActionButton), {
            ...nextButtonProps,
            UNSAFE_className: (0, $bF3AV$classNames)((0, ($parcel$interopDefault($bF3AV$calendar_vars_cssmodulejs))), 'spectrum-Calendar-nextMonth'),
            isQuiet: true
        }, direction === 'rtl' ? /*#__PURE__*/ (0, $bF3AV$react).createElement((0, $bF3AV$spectrumiconsuiChevronLeftLarge), null) : /*#__PURE__*/ (0, $bF3AV$react).createElement((0, $bF3AV$spectrumiconsuiChevronRightLarge), null))));
        calendars.push(/*#__PURE__*/ (0, $bF3AV$react).createElement((0, $faa2f3867773cfe5$export$26e2752316b9a375), {
            ...props,
            key: i,
            state: state,
            startDate: d
        }));
    }
    return /*#__PURE__*/ (0, $bF3AV$react).createElement("div", {
        ...styleProps,
        ...calendarProps,
        ref: ref,
        className: (0, $bF3AV$classNames)((0, ($parcel$interopDefault($bF3AV$calendar_vars_cssmodulejs))), 'spectrum-Calendar', styleProps.className)
    }, /*#__PURE__*/ (0, $bF3AV$react).createElement((0, $bF3AV$VisuallyHidden), null, /*#__PURE__*/ (0, $bF3AV$react).createElement("h2", null, calendarProps['aria-label'])), /*#__PURE__*/ (0, $bF3AV$react).createElement("div", {
        className: (0, $bF3AV$classNames)((0, ($parcel$interopDefault($bF3AV$calendar_vars_cssmodulejs))), 'spectrum-Calendar-header')
    }, titles), /*#__PURE__*/ (0, $bF3AV$react).createElement("div", {
        className: (0, $bF3AV$classNames)((0, ($parcel$interopDefault($bF3AV$calendar_vars_cssmodulejs))), 'spectrum-Calendar-months')
    }, calendars), /*#__PURE__*/ (0, $bF3AV$react).createElement((0, $bF3AV$VisuallyHidden), null, /*#__PURE__*/ (0, $bF3AV$react).createElement("button", {
        "aria-label": nextButtonProps['aria-label'],
        disabled: nextButtonProps.isDisabled,
        onClick: ()=>state.focusNextPage(),
        tabIndex: -1
    })), state.isValueInvalid && /*#__PURE__*/ (0, $bF3AV$react).createElement((0, $bF3AV$HelpText), {
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


export {$62cd1e80f0dffb66$export$bfd52a43017368fe as CalendarBase};
//# sourceMappingURL=CalendarBase.module.js.map
