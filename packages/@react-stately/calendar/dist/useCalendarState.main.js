var $4301262d71f567b9$exports = require("./utils.main.js");
var $cpRwL$internationalizeddate = require("@internationalized/date");
var $cpRwL$reactstatelyutils = require("@react-stately/utils");
var $cpRwL$react = require("react");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "useCalendarState", () => $6adad0c8536fc209$export$6d095e787d2b5e1f);
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



function $6adad0c8536fc209$export$6d095e787d2b5e1f(props) {
    let defaultFormatter = (0, $cpRwL$react.useMemo)(()=>new (0, $cpRwL$internationalizeddate.DateFormatter)(props.locale), [
        props.locale
    ]);
    let resolvedOptions = (0, $cpRwL$react.useMemo)(()=>defaultFormatter.resolvedOptions(), [
        defaultFormatter
    ]);
    let { locale: locale, createCalendar: createCalendar, visibleDuration: visibleDuration = {
        months: 1
    }, minValue: minValue, maxValue: maxValue, selectionAlignment: selectionAlignment, isDateUnavailable: isDateUnavailable, pageBehavior: pageBehavior = 'visible' } = props;
    let calendar = (0, $cpRwL$react.useMemo)(()=>createCalendar(resolvedOptions.calendar), [
        createCalendar,
        resolvedOptions.calendar
    ]);
    var _props_defaultValue;
    let [value, setControlledValue] = (0, $cpRwL$reactstatelyutils.useControlledState)(props.value, (_props_defaultValue = props.defaultValue) !== null && _props_defaultValue !== void 0 ? _props_defaultValue : null, props.onChange);
    let calendarDateValue = (0, $cpRwL$react.useMemo)(()=>value ? (0, $cpRwL$internationalizeddate.toCalendar)((0, $cpRwL$internationalizeddate.toCalendarDate)(value), calendar) : null, [
        value,
        calendar
    ]);
    let timeZone = (0, $cpRwL$react.useMemo)(()=>value && 'timeZone' in value ? value.timeZone : resolvedOptions.timeZone, [
        value,
        resolvedOptions.timeZone
    ]);
    let focusedCalendarDate = (0, $cpRwL$react.useMemo)(()=>props.focusedValue ? (0, $4301262d71f567b9$exports.constrainValue)((0, $cpRwL$internationalizeddate.toCalendar)((0, $cpRwL$internationalizeddate.toCalendarDate)(props.focusedValue), calendar), minValue, maxValue) : undefined, [
        props.focusedValue,
        calendar,
        minValue,
        maxValue
    ]);
    let defaultFocusedCalendarDate = (0, $cpRwL$react.useMemo)(()=>(0, $4301262d71f567b9$exports.constrainValue)(props.defaultFocusedValue ? (0, $cpRwL$internationalizeddate.toCalendar)((0, $cpRwL$internationalizeddate.toCalendarDate)(props.defaultFocusedValue), calendar) : calendarDateValue || (0, $cpRwL$internationalizeddate.toCalendar)((0, $cpRwL$internationalizeddate.today)(timeZone), calendar), minValue, maxValue), [
        props.defaultFocusedValue,
        calendarDateValue,
        timeZone,
        calendar,
        minValue,
        maxValue
    ]);
    let [focusedDate, setFocusedDate] = (0, $cpRwL$reactstatelyutils.useControlledState)(focusedCalendarDate, defaultFocusedCalendarDate, props.onFocusChange);
    let [startDate, setStartDate] = (0, $cpRwL$react.useState)(()=>{
        switch(selectionAlignment){
            case 'start':
                return (0, $4301262d71f567b9$exports.alignStart)(focusedDate, visibleDuration, locale, minValue, maxValue);
            case 'end':
                return (0, $4301262d71f567b9$exports.alignEnd)(focusedDate, visibleDuration, locale, minValue, maxValue);
            case 'center':
            default:
                return (0, $4301262d71f567b9$exports.alignCenter)(focusedDate, visibleDuration, locale, minValue, maxValue);
        }
    });
    let [isFocused, setFocused] = (0, $cpRwL$react.useState)(props.autoFocus || false);
    let endDate = (0, $cpRwL$react.useMemo)(()=>{
        let duration = {
            ...visibleDuration
        };
        if (duration.days) duration.days--;
        else duration.days = -1;
        return startDate.add(duration);
    }, [
        startDate,
        visibleDuration
    ]);
    // Reset focused date and visible range when calendar changes.
    let [lastCalendarIdentifier, setLastCalendarIdentifier] = (0, $cpRwL$react.useState)(calendar.identifier);
    if (calendar.identifier !== lastCalendarIdentifier) {
        let newFocusedDate = (0, $cpRwL$internationalizeddate.toCalendar)(focusedDate, calendar);
        setStartDate((0, $4301262d71f567b9$exports.alignCenter)(newFocusedDate, visibleDuration, locale, minValue, maxValue));
        setFocusedDate(newFocusedDate);
        setLastCalendarIdentifier(calendar.identifier);
    }
    if ((0, $4301262d71f567b9$exports.isInvalid)(focusedDate, minValue, maxValue)) // If the focused date was moved to an invalid value, it can't be focused, so constrain it.
    setFocusedDate((0, $4301262d71f567b9$exports.constrainValue)(focusedDate, minValue, maxValue));
    else if (focusedDate.compare(startDate) < 0) setStartDate((0, $4301262d71f567b9$exports.alignEnd)(focusedDate, visibleDuration, locale, minValue, maxValue));
    else if (focusedDate.compare(endDate) > 0) setStartDate((0, $4301262d71f567b9$exports.alignStart)(focusedDate, visibleDuration, locale, minValue, maxValue));
    // Sets focus to a specific cell date
    function focusCell(date) {
        date = (0, $4301262d71f567b9$exports.constrainValue)(date, minValue, maxValue);
        setFocusedDate(date);
    }
    function setValue(newValue) {
        if (!props.isDisabled && !props.isReadOnly) {
            let localValue = newValue;
            if (localValue === null) {
                setControlledValue(null);
                return;
            }
            localValue = (0, $4301262d71f567b9$exports.constrainValue)(localValue, minValue, maxValue);
            localValue = (0, $4301262d71f567b9$exports.previousAvailableDate)(localValue, startDate, isDateUnavailable);
            if (!localValue) return;
            // The display calendar should not have any effect on the emitted value.
            // Emit dates in the same calendar as the original value, if any, otherwise gregorian.
            localValue = (0, $cpRwL$internationalizeddate.toCalendar)(localValue, (value === null || value === void 0 ? void 0 : value.calendar) || new (0, $cpRwL$internationalizeddate.GregorianCalendar)());
            // Preserve time if the input value had one.
            if (value && 'hour' in value) setControlledValue(value.set(localValue));
            else setControlledValue(localValue);
        }
    }
    let isUnavailable = (0, $cpRwL$react.useMemo)(()=>{
        if (!calendarDateValue) return false;
        if (isDateUnavailable && isDateUnavailable(calendarDateValue)) return true;
        return (0, $4301262d71f567b9$exports.isInvalid)(calendarDateValue, minValue, maxValue);
    }, [
        calendarDateValue,
        isDateUnavailable,
        minValue,
        maxValue
    ]);
    let isValueInvalid = props.isInvalid || props.validationState === 'invalid' || isUnavailable;
    let validationState = isValueInvalid ? 'invalid' : null;
    let pageDuration = (0, $cpRwL$react.useMemo)(()=>{
        if (pageBehavior === 'visible') return visibleDuration;
        return $6adad0c8536fc209$var$unitDuration(visibleDuration);
    }, [
        pageBehavior,
        visibleDuration
    ]);
    var _props_isDisabled, _props_isReadOnly;
    return {
        isDisabled: (_props_isDisabled = props.isDisabled) !== null && _props_isDisabled !== void 0 ? _props_isDisabled : false,
        isReadOnly: (_props_isReadOnly = props.isReadOnly) !== null && _props_isReadOnly !== void 0 ? _props_isReadOnly : false,
        value: calendarDateValue,
        setValue: setValue,
        visibleRange: {
            start: startDate,
            end: endDate
        },
        minValue: minValue,
        maxValue: maxValue,
        focusedDate: focusedDate,
        timeZone: timeZone,
        validationState: validationState,
        isValueInvalid: isValueInvalid,
        setFocusedDate (date) {
            focusCell(date);
            setFocused(true);
        },
        focusNextDay () {
            focusCell(focusedDate.add({
                days: 1
            }));
        },
        focusPreviousDay () {
            focusCell(focusedDate.subtract({
                days: 1
            }));
        },
        focusNextRow () {
            if (visibleDuration.days) this.focusNextPage();
            else if (visibleDuration.weeks || visibleDuration.months || visibleDuration.years) focusCell(focusedDate.add({
                weeks: 1
            }));
        },
        focusPreviousRow () {
            if (visibleDuration.days) this.focusPreviousPage();
            else if (visibleDuration.weeks || visibleDuration.months || visibleDuration.years) focusCell(focusedDate.subtract({
                weeks: 1
            }));
        },
        focusNextPage () {
            let start = startDate.add(pageDuration);
            setFocusedDate((0, $4301262d71f567b9$exports.constrainValue)(focusedDate.add(pageDuration), minValue, maxValue));
            setStartDate((0, $4301262d71f567b9$exports.alignStart)((0, $4301262d71f567b9$exports.constrainStart)(focusedDate, start, pageDuration, locale, minValue, maxValue), pageDuration, locale));
        },
        focusPreviousPage () {
            let start = startDate.subtract(pageDuration);
            setFocusedDate((0, $4301262d71f567b9$exports.constrainValue)(focusedDate.subtract(pageDuration), minValue, maxValue));
            setStartDate((0, $4301262d71f567b9$exports.alignStart)((0, $4301262d71f567b9$exports.constrainStart)(focusedDate, start, pageDuration, locale, minValue, maxValue), pageDuration, locale));
        },
        focusSectionStart () {
            if (visibleDuration.days) focusCell(startDate);
            else if (visibleDuration.weeks) focusCell((0, $cpRwL$internationalizeddate.startOfWeek)(focusedDate, locale));
            else if (visibleDuration.months || visibleDuration.years) focusCell((0, $cpRwL$internationalizeddate.startOfMonth)(focusedDate));
        },
        focusSectionEnd () {
            if (visibleDuration.days) focusCell(endDate);
            else if (visibleDuration.weeks) focusCell((0, $cpRwL$internationalizeddate.endOfWeek)(focusedDate, locale));
            else if (visibleDuration.months || visibleDuration.years) focusCell((0, $cpRwL$internationalizeddate.endOfMonth)(focusedDate));
        },
        focusNextSection (larger) {
            if (!larger && !visibleDuration.days) {
                focusCell(focusedDate.add($6adad0c8536fc209$var$unitDuration(visibleDuration)));
                return;
            }
            if (visibleDuration.days) this.focusNextPage();
            else if (visibleDuration.weeks) focusCell(focusedDate.add({
                months: 1
            }));
            else if (visibleDuration.months || visibleDuration.years) focusCell(focusedDate.add({
                years: 1
            }));
        },
        focusPreviousSection (larger) {
            if (!larger && !visibleDuration.days) {
                focusCell(focusedDate.subtract($6adad0c8536fc209$var$unitDuration(visibleDuration)));
                return;
            }
            if (visibleDuration.days) this.focusPreviousPage();
            else if (visibleDuration.weeks) focusCell(focusedDate.subtract({
                months: 1
            }));
            else if (visibleDuration.months || visibleDuration.years) focusCell(focusedDate.subtract({
                years: 1
            }));
        },
        selectFocusedDate () {
            if (!(isDateUnavailable && isDateUnavailable(focusedDate))) setValue(focusedDate);
        },
        selectDate (date) {
            setValue(date);
        },
        isFocused: isFocused,
        setFocused: setFocused,
        isInvalid (date) {
            return (0, $4301262d71f567b9$exports.isInvalid)(date, minValue, maxValue);
        },
        isSelected (date) {
            return calendarDateValue != null && (0, $cpRwL$internationalizeddate.isSameDay)(date, calendarDateValue) && !this.isCellDisabled(date) && !this.isCellUnavailable(date);
        },
        isCellFocused (date) {
            return isFocused && focusedDate && (0, $cpRwL$internationalizeddate.isSameDay)(date, focusedDate);
        },
        isCellDisabled (date) {
            return props.isDisabled || date.compare(startDate) < 0 || date.compare(endDate) > 0 || this.isInvalid(date);
        },
        isCellUnavailable (date) {
            return props.isDateUnavailable ? props.isDateUnavailable(date) : false;
        },
        isPreviousVisibleRangeInvalid () {
            let prev = startDate.subtract({
                days: 1
            });
            return (0, $cpRwL$internationalizeddate.isSameDay)(prev, startDate) || this.isInvalid(prev);
        },
        isNextVisibleRangeInvalid () {
            // Adding may return the same date if we reached the end of time
            // according to the calendar system (e.g. 9999-12-31).
            let next = endDate.add({
                days: 1
            });
            return (0, $cpRwL$internationalizeddate.isSameDay)(next, endDate) || this.isInvalid(next);
        },
        getDatesInWeek (weekIndex, from = startDate) {
            // let date = startOfWeek(from, locale);
            let date = from.add({
                weeks: weekIndex
            });
            let dates = [];
            date = (0, $cpRwL$internationalizeddate.startOfWeek)(date, locale);
            // startOfWeek will clamp dates within the calendar system's valid range, which may
            // start in the middle of a week. In this case, add null placeholders.
            let dayOfWeek = (0, $cpRwL$internationalizeddate.getDayOfWeek)(date, locale);
            for(let i = 0; i < dayOfWeek; i++)dates.push(null);
            while(dates.length < 7){
                dates.push(date);
                let nextDate = date.add({
                    days: 1
                });
                if ((0, $cpRwL$internationalizeddate.isSameDay)(date, nextDate)) break;
                date = nextDate;
            }
            // Add null placeholders if at the end of the calendar system.
            while(dates.length < 7)dates.push(null);
            return dates;
        }
    };
}
function $6adad0c8536fc209$var$unitDuration(duration) {
    let unit = {
        ...duration
    };
    for(let key in duration)unit[key] = 1;
    return unit;
}


//# sourceMappingURL=useCalendarState.main.js.map
