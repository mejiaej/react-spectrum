import {ButtonContext as $d2b4bc8c273e7be6$export$24d547caef80ccd1} from "./Button.mjs";
import {Provider as $64fa3d84918910a7$export$2881499e37b75b9a, useContextProps as $64fa3d84918910a7$export$29f1550f4b0d4415, useRenderProps as $64fa3d84918910a7$export$4d86445c2cf5e3} from "./utils.mjs";
import {HeadingContext as $4e85f108e88277b8$export$d688439359537581} from "./RSPContexts.mjs";
import {TextContext as $514c0188e459b4c0$export$9afb8bc826b033ea} from "./Text.mjs";
import {useLocale as $dCiKx$useLocale, useCalendar as $dCiKx$useCalendar, VisuallyHidden as $dCiKx$VisuallyHidden, useRangeCalendar as $dCiKx$useRangeCalendar, useCalendarGrid as $dCiKx$useCalendarGrid, useCalendarCell as $dCiKx$useCalendarCell, useHover as $dCiKx$useHover, useFocusRing as $dCiKx$useFocusRing, mergeProps as $dCiKx$mergeProps} from "react-aria";
import {createCalendar as $dCiKx$createCalendar, endOfMonth as $dCiKx$endOfMonth, getWeeksInMonth as $dCiKx$getWeeksInMonth, isSameMonth as $dCiKx$isSameMonth, isSameDay as $dCiKx$isSameDay} from "@internationalized/date";
import {useCalendarState as $dCiKx$useCalendarState, useRangeCalendarState as $dCiKx$useRangeCalendarState} from "react-stately";
import {filterDOMProps as $dCiKx$filterDOMProps} from "@react-aria/utils";
import $dCiKx$react, {createContext as $dCiKx$createContext, forwardRef as $dCiKx$forwardRef, useContext as $dCiKx$useContext, useRef as $dCiKx$useRef} from "react";

/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 








const $dfd62f934fc76fed$export$3b805cea1f178355 = /*#__PURE__*/ (0, $dCiKx$createContext)({});
const $dfd62f934fc76fed$export$233dd9682e1ad64b = /*#__PURE__*/ (0, $dCiKx$createContext)({});
const $dfd62f934fc76fed$export$9e31dcedda1dadc7 = /*#__PURE__*/ (0, $dCiKx$createContext)(null);
const $dfd62f934fc76fed$export$5e0fc348c00f87a0 = /*#__PURE__*/ (0, $dCiKx$createContext)(null);
const $dfd62f934fc76fed$export$e1aef45b828286de = /*#__PURE__*/ (0, $dCiKx$forwardRef)(function Calendar(props, ref) {
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $dfd62f934fc76fed$export$3b805cea1f178355);
    let { locale: locale } = (0, $dCiKx$useLocale)();
    let state = (0, $dCiKx$useCalendarState)({
        ...props,
        locale: locale,
        createCalendar: $dCiKx$createCalendar
    });
    let { calendarProps: calendarProps, prevButtonProps: prevButtonProps, nextButtonProps: nextButtonProps, errorMessageProps: errorMessageProps, title: title } = (0, $dCiKx$useCalendar)(props, state);
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        values: {
            state: state,
            isDisabled: props.isDisabled || false,
            isInvalid: state.isValueInvalid
        },
        defaultClassName: 'react-aria-Calendar'
    });
    return /*#__PURE__*/ (0, $dCiKx$react).createElement("div", {
        ...renderProps,
        ...calendarProps,
        ref: ref,
        slot: props.slot || undefined,
        "data-disabled": props.isDisabled || undefined,
        "data-invalid": state.isValueInvalid || undefined
    }, /*#__PURE__*/ (0, $dCiKx$react).createElement((0, $64fa3d84918910a7$export$2881499e37b75b9a), {
        values: [
            [
                (0, $d2b4bc8c273e7be6$export$24d547caef80ccd1),
                {
                    slots: {
                        previous: prevButtonProps,
                        next: nextButtonProps
                    }
                }
            ],
            [
                (0, $4e85f108e88277b8$export$d688439359537581),
                {
                    'aria-hidden': true,
                    level: 2,
                    children: title
                }
            ],
            [
                $dfd62f934fc76fed$export$9e31dcedda1dadc7,
                state
            ],
            [
                (0, $514c0188e459b4c0$export$9afb8bc826b033ea),
                {
                    slots: {
                        errorMessage: errorMessageProps
                    }
                }
            ]
        ]
    }, /*#__PURE__*/ (0, $dCiKx$react).createElement((0, $dCiKx$VisuallyHidden), null, /*#__PURE__*/ (0, $dCiKx$react).createElement("h2", null, calendarProps['aria-label'])), renderProps.children, /*#__PURE__*/ (0, $dCiKx$react).createElement((0, $dCiKx$VisuallyHidden), null, /*#__PURE__*/ (0, $dCiKx$react).createElement("button", {
        "aria-label": nextButtonProps['aria-label'],
        disabled: nextButtonProps.isDisabled,
        onClick: ()=>state.focusNextPage(),
        tabIndex: -1
    }))));
});
const $dfd62f934fc76fed$export$a4f5c8b89d277a8d = /*#__PURE__*/ (0, $dCiKx$forwardRef)(function RangeCalendar(props, ref) {
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $dfd62f934fc76fed$export$233dd9682e1ad64b);
    let { locale: locale } = (0, $dCiKx$useLocale)();
    let state = (0, $dCiKx$useRangeCalendarState)({
        ...props,
        locale: locale,
        createCalendar: $dCiKx$createCalendar
    });
    let { calendarProps: calendarProps, prevButtonProps: prevButtonProps, nextButtonProps: nextButtonProps, errorMessageProps: errorMessageProps, title: title } = (0, $dCiKx$useRangeCalendar)(props, state, ref);
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        values: {
            state: state,
            isDisabled: props.isDisabled || false,
            isInvalid: state.isValueInvalid
        },
        defaultClassName: 'react-aria-RangeCalendar'
    });
    return /*#__PURE__*/ (0, $dCiKx$react).createElement("div", {
        ...renderProps,
        ...calendarProps,
        ref: ref,
        slot: props.slot || undefined,
        "data-disabled": props.isDisabled || undefined,
        "data-invalid": state.isValueInvalid || undefined
    }, /*#__PURE__*/ (0, $dCiKx$react).createElement((0, $64fa3d84918910a7$export$2881499e37b75b9a), {
        values: [
            [
                (0, $d2b4bc8c273e7be6$export$24d547caef80ccd1),
                {
                    slots: {
                        previous: prevButtonProps,
                        next: nextButtonProps
                    }
                }
            ],
            [
                (0, $4e85f108e88277b8$export$d688439359537581),
                {
                    'aria-hidden': true,
                    level: 2,
                    children: title
                }
            ],
            [
                $dfd62f934fc76fed$export$5e0fc348c00f87a0,
                state
            ],
            [
                (0, $514c0188e459b4c0$export$9afb8bc826b033ea),
                {
                    slots: {
                        errorMessage: errorMessageProps
                    }
                }
            ]
        ]
    }, /*#__PURE__*/ (0, $dCiKx$react).createElement((0, $dCiKx$VisuallyHidden), null, /*#__PURE__*/ (0, $dCiKx$react).createElement("h2", null, calendarProps['aria-label'])), renderProps.children, /*#__PURE__*/ (0, $dCiKx$react).createElement((0, $dCiKx$VisuallyHidden), null, /*#__PURE__*/ (0, $dCiKx$react).createElement("button", {
        "aria-label": nextButtonProps['aria-label'],
        disabled: nextButtonProps.isDisabled,
        onClick: ()=>state.focusNextPage(),
        tabIndex: -1
    }))));
});
const $dfd62f934fc76fed$var$InternalCalendarGridContext = /*#__PURE__*/ (0, $dCiKx$createContext)(null);
const $dfd62f934fc76fed$export$5bd780d491cfc46c = /*#__PURE__*/ (0, $dCiKx$forwardRef)(function CalendarGrid(props, ref) {
    let calendarState = (0, $dCiKx$useContext)($dfd62f934fc76fed$export$9e31dcedda1dadc7);
    let rangeCalendarState = (0, $dCiKx$useContext)($dfd62f934fc76fed$export$5e0fc348c00f87a0);
    let state = calendarState !== null && calendarState !== void 0 ? calendarState : rangeCalendarState;
    let startDate = state.visibleRange.start;
    if (props.offset) startDate = startDate.add(props.offset);
    let { gridProps: gridProps, headerProps: headerProps, weekDays: weekDays } = (0, $dCiKx$useCalendarGrid)({
        startDate: startDate,
        endDate: (0, $dCiKx$endOfMonth)(startDate),
        weekdayStyle: props.weekdayStyle
    }, state);
    var _props_className;
    return /*#__PURE__*/ (0, $dCiKx$react).createElement($dfd62f934fc76fed$var$InternalCalendarGridContext.Provider, {
        value: {
            headerProps: headerProps,
            weekDays: weekDays,
            startDate: startDate
        }
    }, /*#__PURE__*/ (0, $dCiKx$react).createElement("table", {
        ...(0, $dCiKx$filterDOMProps)(props),
        ...gridProps,
        ref: ref,
        style: props.style,
        className: (_props_className = props.className) !== null && _props_className !== void 0 ? _props_className : 'react-aria-CalendarGrid'
    }, typeof props.children !== 'function' ? props.children : /*#__PURE__*/ (0, $dCiKx$react).createElement((0, $dCiKx$react).Fragment, null, /*#__PURE__*/ (0, $dCiKx$react).createElement($dfd62f934fc76fed$export$22e2d15eaa4d2377, null, (day)=>/*#__PURE__*/ (0, $dCiKx$react).createElement($dfd62f934fc76fed$export$ad2135cac3a11b3d, null, day)), /*#__PURE__*/ (0, $dCiKx$react).createElement($dfd62f934fc76fed$export$e11f8ba65d857bff, null, props.children))));
});
function $dfd62f934fc76fed$var$CalendarGridHeader(props, ref) {
    let { children: children, style: style, className: className } = props;
    let { headerProps: headerProps, weekDays: weekDays } = (0, $dCiKx$useContext)($dfd62f934fc76fed$var$InternalCalendarGridContext);
    return /*#__PURE__*/ (0, $dCiKx$react).createElement("thead", {
        ...(0, $dCiKx$filterDOMProps)(props),
        ...headerProps,
        ref: ref,
        style: style,
        className: className || 'react-aria-CalendarGridHeader'
    }, /*#__PURE__*/ (0, $dCiKx$react).createElement("tr", null, weekDays.map((day, key)=>/*#__PURE__*/ (0, $dCiKx$react).cloneElement(children(day), {
            key: key
        }))));
}
/**
 * A calendar grid header displays a row of week day names at the top of a month.
 */ const $dfd62f934fc76fed$export$22e2d15eaa4d2377 = /*#__PURE__*/ (0, $dCiKx$forwardRef)($dfd62f934fc76fed$var$CalendarGridHeader);
function $dfd62f934fc76fed$var$CalendarHeaderCell(props, ref) {
    let { children: children, style: style, className: className } = props;
    return /*#__PURE__*/ (0, $dCiKx$react).createElement("th", {
        ...(0, $dCiKx$filterDOMProps)(props),
        ref: ref,
        style: style,
        className: className || 'react-aria-CalendarHeaderCell'
    }, children);
}
/**
 * A calendar header cell displays a week day name at the top of a column within a calendar.
 */ const $dfd62f934fc76fed$export$ad2135cac3a11b3d = /*#__PURE__*/ (0, $dCiKx$forwardRef)($dfd62f934fc76fed$var$CalendarHeaderCell);
function $dfd62f934fc76fed$var$CalendarGridBody(props, ref) {
    let { children: children, style: style, className: className } = props;
    let calendarState = (0, $dCiKx$useContext)($dfd62f934fc76fed$export$9e31dcedda1dadc7);
    let rangeCalendarState = (0, $dCiKx$useContext)($dfd62f934fc76fed$export$5e0fc348c00f87a0);
    let state = calendarState !== null && calendarState !== void 0 ? calendarState : rangeCalendarState;
    let { startDate: startDate } = (0, $dCiKx$useContext)($dfd62f934fc76fed$var$InternalCalendarGridContext);
    let { locale: locale } = (0, $dCiKx$useLocale)();
    let weeksInMonth = (0, $dCiKx$getWeeksInMonth)(startDate, locale);
    return /*#__PURE__*/ (0, $dCiKx$react).createElement("tbody", {
        ...(0, $dCiKx$filterDOMProps)(props),
        ref: ref,
        style: style,
        className: className || 'react-aria-CalendarGridBody'
    }, [
        ...new Array(weeksInMonth).keys()
    ].map((weekIndex)=>/*#__PURE__*/ (0, $dCiKx$react).createElement("tr", {
            key: weekIndex
        }, state.getDatesInWeek(weekIndex, startDate).map((date, i)=>date ? /*#__PURE__*/ (0, $dCiKx$react).cloneElement(children(date), {
                key: i
            }) : /*#__PURE__*/ (0, $dCiKx$react).createElement("td", {
                key: i
            })))));
}
/**
 * A calendar grid body displays a grid of calendar cells within a month.
 */ const $dfd62f934fc76fed$export$e11f8ba65d857bff = /*#__PURE__*/ (0, $dCiKx$forwardRef)($dfd62f934fc76fed$var$CalendarGridBody);
const $dfd62f934fc76fed$export$5d847498420df57b = /*#__PURE__*/ (0, $dCiKx$forwardRef)(function CalendarCell({ date: date, ...otherProps }, ref) {
    let calendarState = (0, $dCiKx$useContext)($dfd62f934fc76fed$export$9e31dcedda1dadc7);
    let rangeCalendarState = (0, $dCiKx$useContext)($dfd62f934fc76fed$export$5e0fc348c00f87a0);
    let state = calendarState !== null && calendarState !== void 0 ? calendarState : rangeCalendarState;
    var _useContext;
    let { startDate: currentMonth } = (_useContext = (0, $dCiKx$useContext)($dfd62f934fc76fed$var$InternalCalendarGridContext)) !== null && _useContext !== void 0 ? _useContext : {
        startDate: state.visibleRange.start
    };
    let buttonRef = (0, $dCiKx$useRef)(null);
    let { cellProps: cellProps, buttonProps: buttonProps, ...states } = (0, $dCiKx$useCalendarCell)({
        date: date
    }, state, buttonRef);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $dCiKx$useHover)({
        ...otherProps,
        isDisabled: states.isDisabled
    });
    let { focusProps: focusProps, isFocusVisible: isFocusVisible } = (0, $dCiKx$useFocusRing)();
    isFocusVisible && (isFocusVisible = states.isFocused);
    let isOutsideMonth = !(0, $dCiKx$isSameMonth)(currentMonth, date);
    let isSelectionStart = false;
    let isSelectionEnd = false;
    if ('highlightedRange' in state && state.highlightedRange) {
        isSelectionStart = (0, $dCiKx$isSameDay)(date, state.highlightedRange.start);
        isSelectionEnd = (0, $dCiKx$isSameDay)(date, state.highlightedRange.end);
    }
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...otherProps,
        defaultChildren: states.formattedDate,
        defaultClassName: 'react-aria-CalendarCell',
        values: {
            date: date,
            isHovered: isHovered,
            isOutsideMonth: isOutsideMonth,
            isFocusVisible: isFocusVisible,
            isSelectionStart: isSelectionStart,
            isSelectionEnd: isSelectionEnd,
            ...states
        }
    });
    let dataAttrs = {
        'data-focused': states.isFocused || undefined,
        'data-hovered': isHovered || undefined,
        'data-pressed': states.isPressed || undefined,
        'data-unavailable': states.isUnavailable || undefined,
        'data-disabled': states.isDisabled || undefined,
        'data-focus-visible': isFocusVisible || undefined,
        'data-outside-visible-range': states.isOutsideVisibleRange || undefined,
        'data-outside-month': isOutsideMonth || undefined,
        'data-selected': states.isSelected || undefined,
        'data-selection-start': isSelectionStart || undefined,
        'data-selection-end': isSelectionEnd || undefined,
        'data-invalid': states.isInvalid || undefined
    };
    return /*#__PURE__*/ (0, $dCiKx$react).createElement("td", {
        ...cellProps,
        ref: ref
    }, /*#__PURE__*/ (0, $dCiKx$react).createElement("div", {
        ...(0, $dCiKx$mergeProps)((0, $dCiKx$filterDOMProps)(otherProps), buttonProps, focusProps, hoverProps, dataAttrs, renderProps),
        ref: buttonRef
    }));
});


export {$dfd62f934fc76fed$export$3b805cea1f178355 as CalendarContext, $dfd62f934fc76fed$export$233dd9682e1ad64b as RangeCalendarContext, $dfd62f934fc76fed$export$9e31dcedda1dadc7 as CalendarStateContext, $dfd62f934fc76fed$export$5e0fc348c00f87a0 as RangeCalendarStateContext, $dfd62f934fc76fed$export$e1aef45b828286de as Calendar, $dfd62f934fc76fed$export$a4f5c8b89d277a8d as RangeCalendar, $dfd62f934fc76fed$export$5bd780d491cfc46c as CalendarGrid, $dfd62f934fc76fed$export$22e2d15eaa4d2377 as CalendarGridHeader, $dfd62f934fc76fed$export$ad2135cac3a11b3d as CalendarHeaderCell, $dfd62f934fc76fed$export$e11f8ba65d857bff as CalendarGridBody, $dfd62f934fc76fed$export$5d847498420df57b as CalendarCell};
//# sourceMappingURL=Calendar.module.js.map
