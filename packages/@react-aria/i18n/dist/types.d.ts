import { Direction } from "@react-types/shared";
import React, { ReactNode } from "react";
import { LocalizedStrings } from "@internationalized/message";
import { LocalizedString, LocalizedStringDictionary, LocalizedStringFormatter, LocalizedStrings as _LocalizedStrings1 } from "@internationalized/string";
import { DateFormatter } from "@internationalized/date";
import { NumberFormatOptions } from "@internationalized/number";
export interface Locale {
    /** The [BCP47](https://www.ietf.org/rfc/bcp/bcp47.txt) language code for the locale. */
    locale: string;
    /** The writing direction for the locale. */
    direction: Direction;
}
export interface I18nProviderProps {
    /** Contents that should have the locale applied. */
    children: ReactNode;
    /** The locale to apply to the children. */
    locale?: string;
}
/**
 * Provides the locale for the application to all child components.
 */
export function I18nProvider(props: I18nProviderProps): React.JSX.Element;
/**
 * Returns the current locale and layout direction.
 */
export function useLocale(): Locale;
export type FormatMessage = (key: string, variables?: {
    [key: string]: any;
}) => string;
/**
 * Handles formatting ICU Message strings to create localized strings for the current locale.
 * Automatically updates when the locale changes, and handles caching of messages for performance.
 * @param strings - A mapping of languages to strings by key.
 * @deprecated - use useLocalizedStringFormatter instead.
 */
export function useMessageFormatter(strings: LocalizedStrings): FormatMessage;
/**
 * Returns a cached LocalizedStringDictionary for the given strings.
 */
export function useLocalizedStringDictionary<K extends string = string, T extends LocalizedString = string>(strings: _LocalizedStrings1<K, T>, packageName?: string): LocalizedStringDictionary<K, T>;
/**
 * Provides localized string formatting for the current locale. Supports interpolating variables,
 * selecting the correct pluralization, and formatting numbers. Automatically updates when the locale changes.
 * @param strings - A mapping of languages to localized strings by key.
 */
export function useLocalizedStringFormatter<K extends string = string, T extends LocalizedString = string>(strings: _LocalizedStrings1<K, T>, packageName?: string): LocalizedStringFormatter<K, T>;
/**
 * Provides localized list formatting for the current locale. Automatically updates when the locale changes,
 * and handles caching of the list formatter for performance.
 * @param options - Formatting options.
 */
export function useListFormatter(options?: Intl.ListFormatOptions): Intl.ListFormat;
export interface DateFormatterOptions extends Intl.DateTimeFormatOptions {
    calendar?: string;
}
/**
 * Provides localized date formatting for the current locale. Automatically updates when the locale changes,
 * and handles caching of the date formatter for performance.
 * @param options - Formatting options.
 */
export function useDateFormatter(options?: DateFormatterOptions): DateFormatter;
/**
 * Provides localized number formatting for the current locale. Automatically updates when the locale changes,
 * and handles caching of the number formatter for performance.
 * @param options - Formatting options.
 */
export function useNumberFormatter(options?: NumberFormatOptions): Intl.NumberFormat;
/**
 * Provides localized string collation for the current locale. Automatically updates when the locale changes,
 * and handles caching of the collator for performance.
 * @param options - Collator options.
 */
export function useCollator(options?: Intl.CollatorOptions): Intl.Collator;
export interface Filter {
    /** Returns whether a string starts with a given substring. */
    startsWith(string: string, substring: string): boolean;
    /** Returns whether a string ends with a given substring. */
    endsWith(string: string, substring: string): boolean;
    /** Returns whether a string contains a given substring. */
    contains(string: string, substring: string): boolean;
}
/**
 * Provides localized string search functionality that is useful for filtering or matching items
 * in a list. Options can be provided to adjust the sensitivity to case, diacritics, and other parameters.
 */
export function useFilter(options?: Intl.CollatorOptions): Filter;
export type { LocalizedStringFormatter } from '@internationalized/string';
export type { LocalizedStrings } from '@internationalized/message';
export type { DateFormatter } from '@internationalized/date';

//# sourceMappingURL=types.d.ts.map
