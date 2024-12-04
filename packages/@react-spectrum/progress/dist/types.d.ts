import { ProgressBarProps, SpectrumProgressBarBaseProps, SpectrumProgressBarProps, SpectrumProgressCircleProps } from "@react-types/progress";
import React, { HTMLAttributes } from "react";
import { DOMRefValue } from "@react-types/shared";
interface ProgressBarBaseProps extends SpectrumProgressBarBaseProps, ProgressBarProps {
    barClassName?: string;
    barProps?: HTMLAttributes<HTMLDivElement>;
    labelProps?: HTMLAttributes<HTMLLabelElement>;
}
export const ProgressBarBase: React.ForwardRefExoticComponent<ProgressBarBaseProps & React.RefAttributes<DOMRefValue<HTMLDivElement>>>;
/**
 * ProgressBars show the progression of a system operation: downloading, uploading, processing, etc., in a visual way.
 * They can represent either determinate or indeterminate progress.
 */
export const ProgressBar: React.ForwardRefExoticComponent<SpectrumProgressBarProps & React.RefAttributes<DOMRefValue<HTMLDivElement>>>;
/**
 * ProgressCircles show the progression of a system operation such as downloading, uploading, or processing, in a visual way.
 * They can represent determinate or indeterminate progress.
 */
export const ProgressCircle: React.ForwardRefExoticComponent<SpectrumProgressCircleProps & React.RefAttributes<DOMRefValue<HTMLDivElement>>>;
export type { SpectrumProgressBarProps, SpectrumProgressCircleProps } from '@react-types/progress';

//# sourceMappingURL=types.d.ts.map
