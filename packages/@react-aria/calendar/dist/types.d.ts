import { AriaButtonProps } from "@react-types/button";
import { DOMAttributes, FocusableElement, RefObject } from "@react-types/shared";
import { AriaCalendarProps, DateValue, AriaRangeCalendarProps } from "@react-types/calendar";
import { CalendarState, RangeCalendarState } from "@react-stately/calendar";
import { CalendarDate } from "@internationalized/date";
export interface CalendarAria {
    /** Props for the calendar grouping element. */
    calendarProps: DOMAttributes;
    /** Props for the next button. */
    nextButtonProps: AriaButtonProps;
    /** Props for the previous button. */
    prevButtonProps: AriaButtonProps;
    /** Props for the error message element, if any. */
    errorMessageProps: DOMAttributes;
    /** A description of the visible date range, for use in the calendar title. */
    title: string;
}
/**
 * Provides the behavior and accessibility implementation for a calendar component.
 * A calendar displays one or more date grids and allows users to select a single date.
 */
export function useCalendar<T extends DateValue>(props: AriaCalendarProps<T>, state: CalendarState): CalendarAria;
/**
 * Provides the behavior and accessibility implementation for a range calendar component.
 * A range calendar displays one or more date grids and allows users to select a contiguous range of dates.
 */
export function useRangeCalendar<T extends DateValue>(props: AriaRangeCalendarProps<T>, state: RangeCalendarState, ref: RefObject<FocusableElement | null>): CalendarAria;
export interface AriaCalendarGridProps {
    /**
     * The first date displayed in the calendar grid.
     * Defaults to the first visible date in the calendar.
     * Override this to display multiple date grids in a calendar.
     */
    startDate?: CalendarDate;
    /**
     * The last date displayed in the calendar grid.
     * Defaults to the last visible date in the calendar.
     * Override this to display multiple date grids in a calendar.
     */
    endDate?: CalendarDate;
    /**
     * The style of weekday names to display in the calendar grid header,
     * e.g. single letter, abbreviation, or full day name.
     * @default "narrow"
     */
    weekdayStyle?: 'narrow' | 'short' | 'long';
}
export interface CalendarGridAria {
    /** Props for the date grid element (e.g. `<table>`). */
    gridProps: DOMAttributes;
    /** Props for the grid header element (e.g. `<thead>`). */
    headerProps: DOMAttributes;
    /** A list of week day abbreviations formatted for the current locale, typically used in column headers. */
    weekDays: string[];
}
/**
 * Provides the behavior and accessibility implementation for a calendar grid component.
 * A calendar grid displays a single grid of days within a calendar or range calendar which
 * can be keyboard navigated and selected by the user.
 */
export function useCalendarGrid(props: AriaCalendarGridProps, state: CalendarState | RangeCalendarState): CalendarGridAria;
export interface AriaCalendarCellProps {
    /** The date that this cell represents. */
    date: CalendarDate;
    /**
     * Whether the cell is disabled. By default, this is determined by the
     * Calendar's `minValue`, `maxValue`, and `isDisabled` props.
     */
    isDisabled?: boolean;
}
export interface CalendarCellAria {
    /** Props for the grid cell element (e.g. `<td>`). */
    cellProps: DOMAttributes;
    /** Props for the button element within the cell. */
    buttonProps: DOMAttributes;
    /** Whether the cell is currently being pressed. */
    isPressed: boolean;
    /** Whether the cell is selected. */
    isSelected: boolean;
    /** Whether the cell is focused. */
    isFocused: boolean;
    /**
     * Whether the cell is disabled, according to the calendar's `minValue`, `maxValue`, and `isDisabled` props.
     * Disabled dates are not focusable, and cannot be selected by the user. They are typically
     * displayed with a dimmed appearance.
     */
    isDisabled: boolean;
    /**
     * Whether the cell is unavailable, according to the calendar's `isDateUnavailable` prop. Unavailable dates remain
     * focusable, but cannot be selected by the user. They should be displayed with a visual affordance to indicate they
     * are unavailable, such as a different color or a strikethrough.
     *
     * Note that because they are focusable, unavailable dates must meet a 4.5:1 color contrast ratio,
     * [as defined by WCAG](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html).
     */
    isUnavailable: boolean;
    /**
     * Whether the cell is outside the visible range of the calendar.
     * For example, dates before the first day of a month in the same week.
     */
    isOutsideVisibleRange: boolean;
    /** Whether the cell is part of an invalid selection. */
    isInvalid: boolean;
    /** The day number formatted according to the current locale. */
    formattedDate: string;
}
/**
 * Provides the behavior and accessibility implementation for a calendar cell component.
 * A calendar cell displays a date cell within a calendar grid which can be selected by the user.
 */
export function useCalendarCell(props: AriaCalendarCellProps, state: CalendarState | RangeCalendarState, ref: RefObject<HTMLElement | null>): CalendarCellAria;
export type { AriaCalendarProps, AriaRangeCalendarProps, CalendarProps, DateValue, RangeCalendarProps } from '@react-types/calendar';

//# sourceMappingURL=types.d.ts.map
