var $b856e6788a7ea5bf$exports = require("./Button.main.js");
var $c5ccf687772c0422$exports = require("./utils.main.js");
var $525402dfec7da5bc$exports = require("./RSPContexts.main.js");
var $a8a589c28affdc40$exports = require("./Text.main.js");
var $iJp6C$reactaria = require("react-aria");
var $iJp6C$internationalizeddate = require("@internationalized/date");
var $iJp6C$reactstately = require("react-stately");
var $iJp6C$reactariautils = require("@react-aria/utils");
var $iJp6C$react = require("react");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "CalendarContext", () => $3f539f26b167ddde$export$3b805cea1f178355);
$parcel$export(module.exports, "RangeCalendarContext", () => $3f539f26b167ddde$export$233dd9682e1ad64b);
$parcel$export(module.exports, "CalendarStateContext", () => $3f539f26b167ddde$export$9e31dcedda1dadc7);
$parcel$export(module.exports, "RangeCalendarStateContext", () => $3f539f26b167ddde$export$5e0fc348c00f87a0);
$parcel$export(module.exports, "Calendar", () => $3f539f26b167ddde$export$e1aef45b828286de);
$parcel$export(module.exports, "RangeCalendar", () => $3f539f26b167ddde$export$a4f5c8b89d277a8d);
$parcel$export(module.exports, "CalendarGrid", () => $3f539f26b167ddde$export$5bd780d491cfc46c);
$parcel$export(module.exports, "CalendarGridHeader", () => $3f539f26b167ddde$export$22e2d15eaa4d2377);
$parcel$export(module.exports, "CalendarHeaderCell", () => $3f539f26b167ddde$export$ad2135cac3a11b3d);
$parcel$export(module.exports, "CalendarGridBody", () => $3f539f26b167ddde$export$e11f8ba65d857bff);
$parcel$export(module.exports, "CalendarCell", () => $3f539f26b167ddde$export$5d847498420df57b);
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








const $3f539f26b167ddde$export$3b805cea1f178355 = /*#__PURE__*/ (0, $iJp6C$react.createContext)({});
const $3f539f26b167ddde$export$233dd9682e1ad64b = /*#__PURE__*/ (0, $iJp6C$react.createContext)({});
const $3f539f26b167ddde$export$9e31dcedda1dadc7 = /*#__PURE__*/ (0, $iJp6C$react.createContext)(null);
const $3f539f26b167ddde$export$5e0fc348c00f87a0 = /*#__PURE__*/ (0, $iJp6C$react.createContext)(null);
const $3f539f26b167ddde$export$e1aef45b828286de = /*#__PURE__*/ (0, $iJp6C$react.forwardRef)(function Calendar(props, ref) {
    [props, ref] = (0, $c5ccf687772c0422$exports.useContextProps)(props, ref, $3f539f26b167ddde$export$3b805cea1f178355);
    let { locale: locale } = (0, $iJp6C$reactaria.useLocale)();
    let state = (0, $iJp6C$reactstately.useCalendarState)({
        ...props,
        locale: locale,
        createCalendar: $iJp6C$internationalizeddate.createCalendar
    });
    let { calendarProps: calendarProps, prevButtonProps: prevButtonProps, nextButtonProps: nextButtonProps, errorMessageProps: errorMessageProps, title: title } = (0, $iJp6C$reactaria.useCalendar)(props, state);
    let renderProps = (0, $c5ccf687772c0422$exports.useRenderProps)({
        ...props,
        values: {
            state: state,
            isDisabled: props.isDisabled || false,
            isInvalid: state.isValueInvalid
        },
        defaultClassName: 'react-aria-Calendar'
    });
    return /*#__PURE__*/ (0, ($parcel$interopDefault($iJp6C$react))).createElement("div", {
        ...renderProps,
        ...calendarProps,
        ref: ref,
        slot: props.slot || undefined,
        "data-disabled": props.isDisabled || undefined,
        "data-invalid": state.isValueInvalid || undefined
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($iJp6C$react))).createElement((0, $c5ccf687772c0422$exports.Provider), {
        values: [
            [
                (0, $b856e6788a7ea5bf$exports.ButtonContext),
                {
                    slots: {
                        previous: prevButtonProps,
                        next: nextButtonProps
                    }
                }
            ],
            [
                (0, $525402dfec7da5bc$exports.HeadingContext),
                {
                    'aria-hidden': true,
                    level: 2,
                    children: title
                }
            ],
            [
                $3f539f26b167ddde$export$9e31dcedda1dadc7,
                state
            ],
            [
                (0, $a8a589c28affdc40$exports.TextContext),
                {
                    slots: {
                        errorMessage: errorMessageProps
                    }
                }
            ]
        ]
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($iJp6C$react))).createElement((0, $iJp6C$reactaria.VisuallyHidden), null, /*#__PURE__*/ (0, ($parcel$interopDefault($iJp6C$react))).createElement("h2", null, calendarProps['aria-label'])), renderProps.children, /*#__PURE__*/ (0, ($parcel$interopDefault($iJp6C$react))).createElement((0, $iJp6C$reactaria.VisuallyHidden), null, /*#__PURE__*/ (0, ($parcel$interopDefault($iJp6C$react))).createElement("button", {
        "aria-label": nextButtonProps['aria-label'],
        disabled: nextButtonProps.isDisabled,
        onClick: ()=>state.focusNextPage(),
        tabIndex: -1
    }))));
});
const $3f539f26b167ddde$export$a4f5c8b89d277a8d = /*#__PURE__*/ (0, $iJp6C$react.forwardRef)(function RangeCalendar(props, ref) {
    [props, ref] = (0, $c5ccf687772c0422$exports.useContextProps)(props, ref, $3f539f26b167ddde$export$233dd9682e1ad64b);
    let { locale: locale } = (0, $iJp6C$reactaria.useLocale)();
    let state = (0, $iJp6C$reactstately.useRangeCalendarState)({
        ...props,
        locale: locale,
        createCalendar: $iJp6C$internationalizeddate.createCalendar
    });
    let { calendarProps: calendarProps, prevButtonProps: prevButtonProps, nextButtonProps: nextButtonProps, errorMessageProps: errorMessageProps, title: title } = (0, $iJp6C$reactaria.useRangeCalendar)(props, state, ref);
    let renderProps = (0, $c5ccf687772c0422$exports.useRenderProps)({
        ...props,
        values: {
            state: state,
            isDisabled: props.isDisabled || false,
            isInvalid: state.isValueInvalid
        },
        defaultClassName: 'react-aria-RangeCalendar'
    });
    return /*#__PURE__*/ (0, ($parcel$interopDefault($iJp6C$react))).createElement("div", {
        ...renderProps,
        ...calendarProps,
        ref: ref,
        slot: props.slot || undefined,
        "data-disabled": props.isDisabled || undefined,
        "data-invalid": state.isValueInvalid || undefined
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($iJp6C$react))).createElement((0, $c5ccf687772c0422$exports.Provider), {
        values: [
            [
                (0, $b856e6788a7ea5bf$exports.ButtonContext),
                {
                    slots: {
                        previous: prevButtonProps,
                        next: nextButtonProps
                    }
                }
            ],
            [
                (0, $525402dfec7da5bc$exports.HeadingContext),
                {
                    'aria-hidden': true,
                    level: 2,
                    children: title
                }
            ],
            [
                $3f539f26b167ddde$export$5e0fc348c00f87a0,
                state
            ],
            [
                (0, $a8a589c28affdc40$exports.TextContext),
                {
                    slots: {
                        errorMessage: errorMessageProps
                    }
                }
            ]
        ]
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($iJp6C$react))).createElement((0, $iJp6C$reactaria.VisuallyHidden), null, /*#__PURE__*/ (0, ($parcel$interopDefault($iJp6C$react))).createElement("h2", null, calendarProps['aria-label'])), renderProps.children, /*#__PURE__*/ (0, ($parcel$interopDefault($iJp6C$react))).createElement((0, $iJp6C$reactaria.VisuallyHidden), null, /*#__PURE__*/ (0, ($parcel$interopDefault($iJp6C$react))).createElement("button", {
        "aria-label": nextButtonProps['aria-label'],
        disabled: nextButtonProps.isDisabled,
        onClick: ()=>state.focusNextPage(),
        tabIndex: -1
    }))));
});
const $3f539f26b167ddde$var$InternalCalendarGridContext = /*#__PURE__*/ (0, $iJp6C$react.createContext)(null);
const $3f539f26b167ddde$export$5bd780d491cfc46c = /*#__PURE__*/ (0, $iJp6C$react.forwardRef)(function CalendarGrid(props, ref) {
    let calendarState = (0, $iJp6C$react.useContext)($3f539f26b167ddde$export$9e31dcedda1dadc7);
    let rangeCalendarState = (0, $iJp6C$react.useContext)($3f539f26b167ddde$export$5e0fc348c00f87a0);
    let state = calendarState !== null && calendarState !== void 0 ? calendarState : rangeCalendarState;
    let startDate = state.visibleRange.start;
    if (props.offset) startDate = startDate.add(props.offset);
    let { gridProps: gridProps, headerProps: headerProps, weekDays: weekDays } = (0, $iJp6C$reactaria.useCalendarGrid)({
        startDate: startDate,
        endDate: (0, $iJp6C$internationalizeddate.endOfMonth)(startDate),
        weekdayStyle: props.weekdayStyle
    }, state);
    var _props_className;
    return /*#__PURE__*/ (0, ($parcel$interopDefault($iJp6C$react))).createElement($3f539f26b167ddde$var$InternalCalendarGridContext.Provider, {
        value: {
            headerProps: headerProps,
            weekDays: weekDays,
            startDate: startDate
        }
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($iJp6C$react))).createElement("table", {
        ...(0, $iJp6C$reactariautils.filterDOMProps)(props),
        ...gridProps,
        ref: ref,
        style: props.style,
        className: (_props_className = props.className) !== null && _props_className !== void 0 ? _props_className : 'react-aria-CalendarGrid'
    }, typeof props.children !== 'function' ? props.children : /*#__PURE__*/ (0, ($parcel$interopDefault($iJp6C$react))).createElement((0, ($parcel$interopDefault($iJp6C$react))).Fragment, null, /*#__PURE__*/ (0, ($parcel$interopDefault($iJp6C$react))).createElement($3f539f26b167ddde$export$22e2d15eaa4d2377, null, (day)=>/*#__PURE__*/ (0, ($parcel$interopDefault($iJp6C$react))).createElement($3f539f26b167ddde$export$ad2135cac3a11b3d, null, day)), /*#__PURE__*/ (0, ($parcel$interopDefault($iJp6C$react))).createElement($3f539f26b167ddde$export$e11f8ba65d857bff, null, props.children))));
});
function $3f539f26b167ddde$var$CalendarGridHeader(props, ref) {
    let { children: children, style: style, className: className } = props;
    let { headerProps: headerProps, weekDays: weekDays } = (0, $iJp6C$react.useContext)($3f539f26b167ddde$var$InternalCalendarGridContext);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($iJp6C$react))).createElement("thead", {
        ...(0, $iJp6C$reactariautils.filterDOMProps)(props),
        ...headerProps,
        ref: ref,
        style: style,
        className: className || 'react-aria-CalendarGridHeader'
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($iJp6C$react))).createElement("tr", null, weekDays.map((day, key)=>/*#__PURE__*/ (0, ($parcel$interopDefault($iJp6C$react))).cloneElement(children(day), {
            key: key
        }))));
}
/**
 * A calendar grid header displays a row of week day names at the top of a month.
 */ const $3f539f26b167ddde$export$22e2d15eaa4d2377 = /*#__PURE__*/ (0, $iJp6C$react.forwardRef)($3f539f26b167ddde$var$CalendarGridHeader);
function $3f539f26b167ddde$var$CalendarHeaderCell(props, ref) {
    let { children: children, style: style, className: className } = props;
    return /*#__PURE__*/ (0, ($parcel$interopDefault($iJp6C$react))).createElement("th", {
        ...(0, $iJp6C$reactariautils.filterDOMProps)(props),
        ref: ref,
        style: style,
        className: className || 'react-aria-CalendarHeaderCell'
    }, children);
}
/**
 * A calendar header cell displays a week day name at the top of a column within a calendar.
 */ const $3f539f26b167ddde$export$ad2135cac3a11b3d = /*#__PURE__*/ (0, $iJp6C$react.forwardRef)($3f539f26b167ddde$var$CalendarHeaderCell);
function $3f539f26b167ddde$var$CalendarGridBody(props, ref) {
    let { children: children, style: style, className: className } = props;
    let calendarState = (0, $iJp6C$react.useContext)($3f539f26b167ddde$export$9e31dcedda1dadc7);
    let rangeCalendarState = (0, $iJp6C$react.useContext)($3f539f26b167ddde$export$5e0fc348c00f87a0);
    let state = calendarState !== null && calendarState !== void 0 ? calendarState : rangeCalendarState;
    let { startDate: startDate } = (0, $iJp6C$react.useContext)($3f539f26b167ddde$var$InternalCalendarGridContext);
    let { locale: locale } = (0, $iJp6C$reactaria.useLocale)();
    let weeksInMonth = (0, $iJp6C$internationalizeddate.getWeeksInMonth)(startDate, locale);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($iJp6C$react))).createElement("tbody", {
        ...(0, $iJp6C$reactariautils.filterDOMProps)(props),
        ref: ref,
        style: style,
        className: className || 'react-aria-CalendarGridBody'
    }, [
        ...new Array(weeksInMonth).keys()
    ].map((weekIndex)=>/*#__PURE__*/ (0, ($parcel$interopDefault($iJp6C$react))).createElement("tr", {
            key: weekIndex
        }, state.getDatesInWeek(weekIndex, startDate).map((date, i)=>date ? /*#__PURE__*/ (0, ($parcel$interopDefault($iJp6C$react))).cloneElement(children(date), {
                key: i
            }) : /*#__PURE__*/ (0, ($parcel$interopDefault($iJp6C$react))).createElement("td", {
                key: i
            })))));
}
/**
 * A calendar grid body displays a grid of calendar cells within a month.
 */ const $3f539f26b167ddde$export$e11f8ba65d857bff = /*#__PURE__*/ (0, $iJp6C$react.forwardRef)($3f539f26b167ddde$var$CalendarGridBody);
const $3f539f26b167ddde$export$5d847498420df57b = /*#__PURE__*/ (0, $iJp6C$react.forwardRef)(function CalendarCell({ date: date, ...otherProps }, ref) {
    let calendarState = (0, $iJp6C$react.useContext)($3f539f26b167ddde$export$9e31dcedda1dadc7);
    let rangeCalendarState = (0, $iJp6C$react.useContext)($3f539f26b167ddde$export$5e0fc348c00f87a0);
    let state = calendarState !== null && calendarState !== void 0 ? calendarState : rangeCalendarState;
    var _useContext;
    let { startDate: currentMonth } = (_useContext = (0, $iJp6C$react.useContext)($3f539f26b167ddde$var$InternalCalendarGridContext)) !== null && _useContext !== void 0 ? _useContext : {
        startDate: state.visibleRange.start
    };
    let buttonRef = (0, $iJp6C$react.useRef)(null);
    let { cellProps: cellProps, buttonProps: buttonProps, ...states } = (0, $iJp6C$reactaria.useCalendarCell)({
        date: date
    }, state, buttonRef);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $iJp6C$reactaria.useHover)({
        ...otherProps,
        isDisabled: states.isDisabled
    });
    let { focusProps: focusProps, isFocusVisible: isFocusVisible } = (0, $iJp6C$reactaria.useFocusRing)();
    isFocusVisible && (isFocusVisible = states.isFocused);
    let isOutsideMonth = !(0, $iJp6C$internationalizeddate.isSameMonth)(currentMonth, date);
    let isSelectionStart = false;
    let isSelectionEnd = false;
    if ('highlightedRange' in state && state.highlightedRange) {
        isSelectionStart = (0, $iJp6C$internationalizeddate.isSameDay)(date, state.highlightedRange.start);
        isSelectionEnd = (0, $iJp6C$internationalizeddate.isSameDay)(date, state.highlightedRange.end);
    }
    let renderProps = (0, $c5ccf687772c0422$exports.useRenderProps)({
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
    return /*#__PURE__*/ (0, ($parcel$interopDefault($iJp6C$react))).createElement("td", {
        ...cellProps,
        ref: ref
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($iJp6C$react))).createElement("div", {
        ...(0, $iJp6C$reactaria.mergeProps)((0, $iJp6C$reactariautils.filterDOMProps)(otherProps), buttonProps, focusProps, hoverProps, dataAttrs, renderProps),
        ref: buttonRef
    }));
});


//# sourceMappingURL=Calendar.main.js.map
