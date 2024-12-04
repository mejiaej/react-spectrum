import { FocusableRef } from "@react-types/shared";
import { ReactElement } from "react";
import { SpectrumSearchAutocompleteProps } from "@react-types/autocomplete";
/**
 * A SearchAutocomplete is a searchfield that supports a dynamic list of suggestions.
 */
export let SearchAutocomplete: <T>(props: SpectrumSearchAutocompleteProps<T> & {
    ref?: FocusableRef<HTMLElement>;
}) => ReactElement;
export { Item, Section } from '@react-stately/collections';
export type { SpectrumSearchAutocompleteProps } from '@react-types/autocomplete';

//# sourceMappingURL=types.d.ts.map
