import React from "react";
import { SpectrumCheckboxProps, SpectrumCheckboxGroupProps } from "@react-types/checkbox";
import { FocusableRefValue, DOMRefValue } from "@react-types/shared";
/**
 * Checkboxes allow users to select multiple items from a list of individual items,
 * or to mark one individual item as selected.
 */
export const Checkbox: React.ForwardRefExoticComponent<SpectrumCheckboxProps & React.RefAttributes<FocusableRefValue<HTMLLabelElement, HTMLLabelElement>>>;
/**
 * A CheckboxGroup allows users to select one or more items from a list of choices.
 */
export const CheckboxGroup: React.ForwardRefExoticComponent<SpectrumCheckboxGroupProps & React.RefAttributes<DOMRefValue<HTMLDivElement>>>;
export type { SpectrumCheckboxProps, SpectrumCheckboxGroupProps } from '@react-types/checkbox';

//# sourceMappingURL=types.d.ts.map
