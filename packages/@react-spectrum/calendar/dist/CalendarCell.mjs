import "./vars.0e34c9ec.css";
import $1nHC4$calendar_vars_cssmodulejs from "./calendar_vars_css.mjs";
import {useCalendarCell as $1nHC4$useCalendarCell} from "@react-aria/calendar";
import {isSameMonth as $1nHC4$isSameMonth, isSameDay as $1nHC4$isSameDay, getDayOfWeek as $1nHC4$getDayOfWeek, isToday as $1nHC4$isToday} from "@internationalized/date";
import {classNames as $1nHC4$classNames} from "@react-spectrum/utils";
import {mergeProps as $1nHC4$mergeProps} from "@react-aria/utils";
import $1nHC4$react, {useRef as $1nHC4$useRef} from "react";
import {useFocusRing as $1nHC4$useFocusRing} from "@react-aria/focus";
import {useHover as $1nHC4$useHover} from "@react-aria/interactions";
import {useLocale as $1nHC4$useLocale} from "@react-aria/i18n";


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








function $453c556b9066da11$export$5d847498420df57b({ state: state, currentMonth: currentMonth, ...props }) {
    let ref = (0, $1nHC4$useRef)(null);
    let { cellProps: cellProps, buttonProps: buttonProps, isPressed: isPressed, isSelected: isSelected, isDisabled: isDisabled, isFocused: isFocused, isInvalid: isInvalid, formattedDate: formattedDate } = (0, $1nHC4$useCalendarCell)({
        ...props,
        isDisabled: !(0, $1nHC4$isSameMonth)(props.date, currentMonth)
    }, state, ref);
    let isUnavailable = state.isCellUnavailable(props.date) && !isDisabled;
    let isLastSelectedBeforeDisabled = !isDisabled && !isInvalid && state.isCellUnavailable(props.date.add({
        days: 1
    }));
    let isFirstSelectedAfterDisabled = !isDisabled && !isInvalid && state.isCellUnavailable(props.date.subtract({
        days: 1
    }));
    let highlightedRange = 'highlightedRange' in state && state.highlightedRange;
    let isSelectionStart = isSelected && highlightedRange && (0, $1nHC4$isSameDay)(props.date, highlightedRange.start);
    let isSelectionEnd = isSelected && highlightedRange && (0, $1nHC4$isSameDay)(props.date, highlightedRange.end);
    let { locale: locale } = (0, $1nHC4$useLocale)();
    let dayOfWeek = (0, $1nHC4$getDayOfWeek)(props.date, locale);
    let isRangeStart = isSelected && (isFirstSelectedAfterDisabled || dayOfWeek === 0 || props.date.day === 1);
    let isRangeEnd = isSelected && (isLastSelectedBeforeDisabled || dayOfWeek === 6 || props.date.day === currentMonth.calendar.getDaysInMonth(currentMonth));
    let { focusProps: focusProps, isFocusVisible: isFocusVisible } = (0, $1nHC4$useFocusRing)();
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $1nHC4$useHover)({
        isDisabled: isDisabled || isUnavailable || state.isReadOnly
    });
    return /*#__PURE__*/ (0, $1nHC4$react).createElement("td", {
        ...cellProps,
        className: (0, $1nHC4$classNames)((0, ($parcel$interopDefault($1nHC4$calendar_vars_cssmodulejs))), 'spectrum-Calendar-tableCell')
    }, /*#__PURE__*/ (0, $1nHC4$react).createElement("span", {
        ...(0, $1nHC4$mergeProps)(buttonProps, hoverProps, focusProps),
        ref: ref,
        className: (0, $1nHC4$classNames)((0, ($parcel$interopDefault($1nHC4$calendar_vars_cssmodulejs))), 'spectrum-Calendar-date', {
            'is-today': (0, $1nHC4$isToday)(props.date, state.timeZone),
            'is-selected': isSelected,
            'is-focused': isFocused && isFocusVisible,
            // Style disabled (i.e. out of min/max range), but selected dates as unavailable
            // since it is more clear than trying to dim the selection.
            'is-disabled': isDisabled && !isInvalid,
            'is-unavailable': isUnavailable || isInvalid && isDisabled,
            'is-outsideMonth': !(0, $1nHC4$isSameMonth)(props.date, currentMonth),
            'is-range-start': isRangeStart,
            'is-range-end': isRangeEnd,
            'is-range-selection': isSelected && 'highlightedRange' in state,
            'is-selection-start': isSelectionStart,
            'is-selection-end': isSelectionEnd,
            'is-hovered': isHovered,
            'is-pressed': isPressed && !state.isReadOnly,
            'is-invalid': isInvalid
        })
    }, /*#__PURE__*/ (0, $1nHC4$react).createElement("span", {
        className: (0, $1nHC4$classNames)((0, ($parcel$interopDefault($1nHC4$calendar_vars_cssmodulejs))), 'spectrum-Calendar-dateText')
    }, /*#__PURE__*/ (0, $1nHC4$react).createElement("span", null, formattedDate))));
}


export {$453c556b9066da11$export$5d847498420df57b as CalendarCell};
//# sourceMappingURL=CalendarCell.module.js.map
