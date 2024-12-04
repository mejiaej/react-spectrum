import { PressEvents, RefObject, ValidationResult } from "@react-types/shared";
import React, { HTMLAttributes, InputHTMLAttributes, LabelHTMLAttributes, ReactElement, TextareaHTMLAttributes } from "react";
import { SpectrumTextFieldProps, TextFieldRef, SpectrumTextAreaProps } from "@react-types/textfield";
interface TextFieldBaseProps extends Omit<SpectrumTextFieldProps, 'onChange' | 'validate'>, PressEvents, Partial<ValidationResult> {
    wrapperChildren?: ReactElement | ReactElement[];
    inputClassName?: string;
    validationIconClassName?: string;
    multiLine?: boolean;
    labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
    inputProps: InputHTMLAttributes<HTMLInputElement> | TextareaHTMLAttributes<HTMLTextAreaElement>;
    descriptionProps?: HTMLAttributes<HTMLElement>;
    errorMessageProps?: HTMLAttributes<HTMLElement>;
    inputRef?: RefObject<HTMLInputElement | HTMLTextAreaElement | null>;
    loadingIndicator?: ReactElement;
    isLoading?: boolean;
    disableFocusRing?: boolean;
}
export const TextFieldBase: React.ForwardRefExoticComponent<TextFieldBaseProps & React.RefAttributes<TextFieldRef<HTMLInputElement | HTMLTextAreaElement>>>;
/**
 * TextAreas are multiline text inputs, useful for cases where users have
 * a sizable amount of text to enter. They allow for all customizations that
 * are available to text fields.
 */
export const TextArea: React.ForwardRefExoticComponent<SpectrumTextAreaProps & React.RefAttributes<TextFieldRef<HTMLTextAreaElement>>>;
/**
 * TextFields are text inputs that allow users to input custom text entries
 * with a keyboard. Various decorations can be displayed around the field to
 * communicate the entry requirements.
 */
export const TextField: React.ForwardRefExoticComponent<SpectrumTextFieldProps & React.RefAttributes<TextFieldRef<HTMLInputElement>>>;
export type { SpectrumTextFieldProps, SpectrumTextAreaProps } from '@react-types/textfield';

//# sourceMappingURL=types.d.ts.map
