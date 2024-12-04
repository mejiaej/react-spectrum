import {CalendarBase as $62cd1e80f0dffb66$export$bfd52a43017368fe} from "./CalendarBase.module.js";
import {createCalendar as $fF0AO$createCalendar} from "@internationalized/date";
import {createDOMRef as $fF0AO$createDOMRef} from "@react-spectrum/utils";
import $fF0AO$react, {useMemo as $fF0AO$useMemo, useRef as $fF0AO$useRef, useImperativeHandle as $fF0AO$useImperativeHandle} from "react";
import {useCalendar as $fF0AO$useCalendar} from "@react-aria/calendar";
import {useCalendarState as $fF0AO$useCalendarState} from "@react-stately/calendar";
import {useLocale as $fF0AO$useLocale} from "@react-aria/i18n";
import {useProviderProps as $fF0AO$useProviderProps} from "@react-spectrum/provider";

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







const $d2b8d4577dd88671$export$e1aef45b828286de = /*#__PURE__*/ (0, $fF0AO$react).forwardRef(function Calendar(props, ref) {
    props = (0, $fF0AO$useProviderProps)(props);
    let { visibleMonths: visibleMonths = 1 } = props;
    visibleMonths = Math.max(visibleMonths, 1);
    let visibleDuration = (0, $fF0AO$useMemo)(()=>({
            months: visibleMonths
        }), [
        visibleMonths
    ]);
    let { locale: locale } = (0, $fF0AO$useLocale)();
    let state = (0, $fF0AO$useCalendarState)({
        ...props,
        locale: locale,
        visibleDuration: visibleDuration,
        createCalendar: $fF0AO$createCalendar
    });
    let domRef = (0, $fF0AO$useRef)(null);
    (0, $fF0AO$useImperativeHandle)(ref, ()=>({
            ...(0, $fF0AO$createDOMRef)(domRef),
            focus () {
                state.setFocused(true);
            }
        }));
    let { calendarProps: calendarProps, prevButtonProps: prevButtonProps, nextButtonProps: nextButtonProps, errorMessageProps: errorMessageProps } = (0, $fF0AO$useCalendar)(props, state);
    return /*#__PURE__*/ (0, $fF0AO$react).createElement((0, $62cd1e80f0dffb66$export$bfd52a43017368fe), {
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


export {$d2b8d4577dd88671$export$e1aef45b828286de as Calendar};
//# sourceMappingURL=Calendar.module.js.map
