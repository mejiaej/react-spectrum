import { CalendarDate, CalendarDateTime, Time, ZonedDateTime } from "@internationalized/date";
import { DOMProps, RangeValue, SpectrumLabelableProps, StyleProps, DOMRefValue } from "@react-types/shared";
import React, { ReactNode } from "react";
interface LabeledValueBaseProps extends DOMProps, StyleProps, Omit<SpectrumLabelableProps, 'necessityIndicator' | 'isRequired'>, DOMProps {
    /** The content to display as the label. */
    label: ReactNode;
}
type NumberValue = number | RangeValue<number>;
interface NumberProps<T extends NumberValue> {
    /** The value to display. */
    value: T;
    /** Formatting options for the value. */
    formatOptions?: Intl.NumberFormatOptions;
}
type DateTime = Date | CalendarDate | CalendarDateTime | ZonedDateTime | Time;
type RangeDateTime = RangeValue<DateTime>;
type DateTimeValue = DateTime | RangeDateTime;
interface DateProps<T extends DateTimeValue> {
    /** The value to display. */
    value: T;
    /** Formatting options for the value. */
    formatOptions?: Intl.DateTimeFormatOptions;
}
interface StringProps<T extends string> {
    /** The value to display. */
    value: T;
    /** Formatting options for the value. */
    formatOptions?: never;
}
interface StringListProps<T extends string[]> {
    /** The value to display. */
    value: T;
    /** Formatting options for the value. */
    formatOptions?: Intl.ListFormatOptions;
}
type LabeledValueProps<T> = T extends NumberValue ? NumberProps<T> : T extends DateTimeValue ? DateProps<T> : T extends string[] ? StringListProps<T> : T extends string ? StringProps<T> : never;
type SpectrumLabeledValueTypes = string[] | string | Date | CalendarDate | CalendarDateTime | ZonedDateTime | Time | number | RangeValue<number> | RangeValue<DateTime>;
export type SpectrumLabeledValueProps<T> = LabeledValueProps<T> & LabeledValueBaseProps;
/**
 * A LabeledValue displays a non-editable value with a label. It formats numbers, dates, times, and lists according to the user's locale.
 */
export const LabeledValue: React.ForwardRefExoticComponent<SpectrumLabeledValueProps<SpectrumLabeledValueTypes> & React.RefAttributes<DOMRefValue<HTMLElement>>>;

//# sourceMappingURL=types.d.ts.map
