import React, { JSX } from "react";
import { SpectrumTooltipProps, SpectrumTooltipTriggerProps } from "@react-types/tooltip";
import { DOMRefValue } from "@react-types/shared";
/**
 * Display container for Tooltip content. Has a directional arrow dependent on its placement.
 */
export const Tooltip: React.ForwardRefExoticComponent<SpectrumTooltipProps & React.RefAttributes<DOMRefValue<HTMLElement>>>;
/**
 * TooltipTrigger wraps around a trigger element and a Tooltip. It handles opening and closing
 * the Tooltip when the user hovers over or focuses the trigger, and positioning the Tooltip
 * relative to the trigger.
 */
export let TooltipTrigger: (props: SpectrumTooltipTriggerProps) => JSX.Element;
export type { SpectrumTooltipProps, SpectrumTooltipTriggerProps } from '@react-types/tooltip';

//# sourceMappingURL=types.d.ts.map
