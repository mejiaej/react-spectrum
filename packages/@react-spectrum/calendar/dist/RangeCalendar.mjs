import {CalendarBase as $62cd1e80f0dffb66$export$bfd52a43017368fe} from "./CalendarBase.mjs";
import {createCalendar as $7I6vM$createCalendar} from "@internationalized/date";
import {createDOMRef as $7I6vM$createDOMRef} from "@react-spectrum/utils";
import $7I6vM$react, {useMemo as $7I6vM$useMemo, useRef as $7I6vM$useRef, useImperativeHandle as $7I6vM$useImperativeHandle} from "react";
import {useLocale as $7I6vM$useLocale} from "@react-aria/i18n";
import {useProviderProps as $7I6vM$useProviderProps} from "@react-spectrum/provider";
import {useRangeCalendar as $7I6vM$useRangeCalendar} from "@react-aria/calendar";
import {useRangeCalendarState as $7I6vM$useRangeCalendarState} from "@react-stately/calendar";

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







const $8b1e8eddbf3b15de$export$a4f5c8b89d277a8d = /*#__PURE__*/ (0, $7I6vM$react).forwardRef(function RangeCalendar(props, ref) {
    props = (0, $7I6vM$useProviderProps)(props);
    let { visibleMonths: visibleMonths = 1 } = props;
    visibleMonths = Math.max(visibleMonths, 1);
    let visibleDuration = (0, $7I6vM$useMemo)(()=>({
            months: visibleMonths
        }), [
        visibleMonths
    ]);
    let { locale: locale } = (0, $7I6vM$useLocale)();
    let state = (0, $7I6vM$useRangeCalendarState)({
        ...props,
        locale: locale,
        visibleDuration: visibleDuration,
        createCalendar: $7I6vM$createCalendar
    });
    let domRef = (0, $7I6vM$useRef)(null);
    (0, $7I6vM$useImperativeHandle)(ref, ()=>({
            ...(0, $7I6vM$createDOMRef)(domRef),
            focus () {
                state.setFocused(true);
            }
        }));
    let { calendarProps: calendarProps, prevButtonProps: prevButtonProps, nextButtonProps: nextButtonProps, errorMessageProps: errorMessageProps } = (0, $7I6vM$useRangeCalendar)(props, state, domRef);
    return /*#__PURE__*/ (0, $7I6vM$react).createElement((0, $62cd1e80f0dffb66$export$bfd52a43017368fe), {
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


export {$8b1e8eddbf3b15de$export$a4f5c8b89d277a8d as RangeCalendar};
//# sourceMappingURL=RangeCalendar.module.js.map
