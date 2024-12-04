import { AriaButtonProps } from "@react-types/button";
import { AriaListBoxOptions } from "@react-aria/listbox";
import { AriaSearchAutocompleteProps } from "@react-types/autocomplete";
import { ComboBoxState } from "@react-stately/combobox";
import { DOMAttributes, KeyboardDelegate, LayoutDelegate, RefObject, ValidationResult } from "@react-types/shared";
import { InputHTMLAttributes } from "react";
export interface SearchAutocompleteAria<T> extends ValidationResult {
    /** Props for the label element. */
    labelProps: DOMAttributes;
    /** Props for the search input element. */
    inputProps: InputHTMLAttributes<HTMLInputElement>;
    /** Props for the list box, to be passed to [useListBox](useListBox.html). */
    listBoxProps: AriaListBoxOptions<T>;
    /** Props for the search input's clear button. */
    clearButtonProps: AriaButtonProps;
    /** Props for the search autocomplete description element, if any. */
    descriptionProps: DOMAttributes;
    /** Props for the search autocomplete error message element, if any. */
    errorMessageProps: DOMAttributes;
}
export interface AriaSearchAutocompleteOptions<T> extends AriaSearchAutocompleteProps<T> {
    /** The ref for the input element. */
    inputRef: RefObject<HTMLInputElement | null>;
    /** The ref for the list box popover. */
    popoverRef: RefObject<HTMLDivElement | null>;
    /** The ref for the list box. */
    listBoxRef: RefObject<HTMLElement | null>;
    /** An optional keyboard delegate implementation, to override the default. */
    keyboardDelegate?: KeyboardDelegate;
    /**
     * A delegate object that provides layout information for items in the collection.
     * By default this uses the DOM, but this can be overridden to implement things like
     * virtualized scrolling.
     */
    layoutDelegate?: LayoutDelegate;
}
/**
 * Provides the behavior and accessibility implementation for a search autocomplete component.
 * A search autocomplete combines a combobox with a searchfield, allowing users to filter a list of options to items matching a query.
 * @param props - Props for the search autocomplete.
 * @param state - State for the search autocomplete, as returned by `useSearchAutocomplete`.
 */
export function useSearchAutocomplete<T>(props: AriaSearchAutocompleteOptions<T>, state: ComboBoxState<T>): SearchAutocompleteAria<T>;
export type { AriaSearchAutocompleteProps } from '@react-types/autocomplete';

//# sourceMappingURL=types.d.ts.map
