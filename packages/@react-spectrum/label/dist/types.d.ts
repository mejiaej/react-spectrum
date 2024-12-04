import { SpectrumFieldValidation, SpectrumHelpTextProps, StyleProps, Validation, DOMRefValue } from "@react-types/shared";
import React, { HTMLAttributes, ReactNode } from "react";
import { SpectrumLabelProps, SpectrumFieldProps } from "@react-types/label";
interface HelpTextProps extends Omit<SpectrumHelpTextProps, 'errorMessage'>, Omit<Validation<any>, 'validationState'>, SpectrumFieldValidation<any>, StyleProps {
    /** Props for the help text description element. */
    descriptionProps?: HTMLAttributes<HTMLElement>;
    /** Props for the help text error message element. */
    errorMessageProps?: HTMLAttributes<HTMLElement>;
    /** An error message for the field. */
    errorMessage?: ReactNode;
}
/**
 * Help text provides either an informative description or an error message that gives more context about what a user needs to input. It's commonly used in forms.
 */
export const HelpText: React.ForwardRefExoticComponent<HelpTextProps & React.RefAttributes<DOMRefValue<HTMLDivElement>>>;
export const Label: React.ForwardRefExoticComponent<SpectrumLabelProps & React.RefAttributes<DOMRefValue<HTMLLabelElement>>>;
export const Field: React.ForwardRefExoticComponent<SpectrumFieldProps & React.RefAttributes<HTMLElement>>;

//# sourceMappingURL=types.d.ts.map
