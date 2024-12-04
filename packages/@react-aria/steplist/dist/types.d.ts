import { AriaLabelingProps, DOMProps, RefObject, Key } from "@react-types/shared";
import { HTMLAttributes } from "react";
import { StepListProps, StepListState } from "@react-stately/steplist";
export interface AriaStepListProps<T> extends StepListProps<T>, AriaLabelingProps, DOMProps {
}
export interface StepListAria {
    listProps: HTMLAttributes<HTMLElement>;
}
export function useStepList<T>(props: AriaStepListProps<T>, state: StepListState<T>, ref: RefObject<HTMLOListElement | null>): StepListAria;
export interface AriaStepListItemProps {
    key: Key;
}
export interface StepListItemAria {
    /** Props for the step link element. */
    stepProps: HTMLAttributes<HTMLElement>;
    /** Props for the visually hidden element indicating the step state. */
    stepStateProps?: HTMLAttributes<HTMLElement>;
    /** Text content for the visually hidden message indicating the status of the step state. */
    stepStateText?: String;
}
export function useStepListItem<T>(props: AriaStepListItemProps, state: StepListState<T>, ref: RefObject<HTMLElement | null>): StepListItemAria;

//# sourceMappingURL=types.d.ts.map
