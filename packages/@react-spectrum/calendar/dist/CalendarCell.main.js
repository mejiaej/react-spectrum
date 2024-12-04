require("./vars.0e34c9ec.css");
var $915891ae6206caad$exports = require("./calendar_vars_css.main.js");
var $1NqcN$reactariacalendar = require("@react-aria/calendar");
var $1NqcN$internationalizeddate = require("@internationalized/date");
var $1NqcN$reactspectrumutils = require("@react-spectrum/utils");
var $1NqcN$reactariautils = require("@react-aria/utils");
var $1NqcN$react = require("react");
var $1NqcN$reactariafocus = require("@react-aria/focus");
var $1NqcN$reactariainteractions = require("@react-aria/interactions");
var $1NqcN$reactariai18n = require("@react-aria/i18n");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "CalendarCell", () => $52c7c3c887827b64$export$5d847498420df57b);
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








function $52c7c3c887827b64$export$5d847498420df57b({ state: state, currentMonth: currentMonth, ...props }) {
    let ref = (0, $1NqcN$react.useRef)(null);
    let { cellProps: cellProps, buttonProps: buttonProps, isPressed: isPressed, isSelected: isSelected, isDisabled: isDisabled, isFocused: isFocused, isInvalid: isInvalid, formattedDate: formattedDate } = (0, $1NqcN$reactariacalendar.useCalendarCell)({
        ...props,
        isDisabled: !(0, $1NqcN$internationalizeddate.isSameMonth)(props.date, currentMonth)
    }, state, ref);
    let isUnavailable = state.isCellUnavailable(props.date) && !isDisabled;
    let isLastSelectedBeforeDisabled = !isDisabled && !isInvalid && state.isCellUnavailable(props.date.add({
        days: 1
    }));
    let isFirstSelectedAfterDisabled = !isDisabled && !isInvalid && state.isCellUnavailable(props.date.subtract({
        days: 1
    }));
    let highlightedRange = 'highlightedRange' in state && state.highlightedRange;
    let isSelectionStart = isSelected && highlightedRange && (0, $1NqcN$internationalizeddate.isSameDay)(props.date, highlightedRange.start);
    let isSelectionEnd = isSelected && highlightedRange && (0, $1NqcN$internationalizeddate.isSameDay)(props.date, highlightedRange.end);
    let { locale: locale } = (0, $1NqcN$reactariai18n.useLocale)();
    let dayOfWeek = (0, $1NqcN$internationalizeddate.getDayOfWeek)(props.date, locale);
    let isRangeStart = isSelected && (isFirstSelectedAfterDisabled || dayOfWeek === 0 || props.date.day === 1);
    let isRangeEnd = isSelected && (isLastSelectedBeforeDisabled || dayOfWeek === 6 || props.date.day === currentMonth.calendar.getDaysInMonth(currentMonth));
    let { focusProps: focusProps, isFocusVisible: isFocusVisible } = (0, $1NqcN$reactariafocus.useFocusRing)();
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $1NqcN$reactariainteractions.useHover)({
        isDisabled: isDisabled || isUnavailable || state.isReadOnly
    });
    return /*#__PURE__*/ (0, ($parcel$interopDefault($1NqcN$react))).createElement("td", {
        ...cellProps,
        className: (0, $1NqcN$reactspectrumutils.classNames)((0, ($parcel$interopDefault($915891ae6206caad$exports))), 'spectrum-Calendar-tableCell')
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($1NqcN$react))).createElement("span", {
        ...(0, $1NqcN$reactariautils.mergeProps)(buttonProps, hoverProps, focusProps),
        ref: ref,
        className: (0, $1NqcN$reactspectrumutils.classNames)((0, ($parcel$interopDefault($915891ae6206caad$exports))), 'spectrum-Calendar-date', {
            'is-today': (0, $1NqcN$internationalizeddate.isToday)(props.date, state.timeZone),
            'is-selected': isSelected,
            'is-focused': isFocused && isFocusVisible,
            // Style disabled (i.e. out of min/max range), but selected dates as unavailable
            // since it is more clear than trying to dim the selection.
            'is-disabled': isDisabled && !isInvalid,
            'is-unavailable': isUnavailable || isInvalid && isDisabled,
            'is-outsideMonth': !(0, $1NqcN$internationalizeddate.isSameMonth)(props.date, currentMonth),
            'is-range-start': isRangeStart,
            'is-range-end': isRangeEnd,
            'is-range-selection': isSelected && 'highlightedRange' in state,
            'is-selection-start': isSelectionStart,
            'is-selection-end': isSelectionEnd,
            'is-hovered': isHovered,
            'is-pressed': isPressed && !state.isReadOnly,
            'is-invalid': isInvalid
        })
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($1NqcN$react))).createElement("span", {
        className: (0, $1NqcN$reactspectrumutils.classNames)((0, ($parcel$interopDefault($915891ae6206caad$exports))), 'spectrum-Calendar-dateText')
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($1NqcN$react))).createElement("span", null, formattedDate))));
}


//# sourceMappingURL=CalendarCell.main.js.map
