import { AriaToastRegionProps } from "@react-aria/toast";
import { DOMProps } from "@react-types/shared";
import { ReactElement } from "react";
import { ToastOptions } from "@react-stately/toast";
export interface SpectrumToastContainerProps extends AriaToastRegionProps {
}
export interface SpectrumToastOptions extends Omit<ToastOptions, 'priority'>, DOMProps {
    /** A label for the action button within the toast. */
    actionLabel?: string;
    /** Handler that is called when the action button is pressed. */
    onAction?: () => void;
    /** Whether the toast should automatically close when an action is performed. */
    shouldCloseOnAction?: boolean;
}
type CloseFunction = () => void;
/**
 * A ToastContainer renders the queued toasts in an application. It should be placed
 * at the root of the app.
 */
export function ToastContainer(props: SpectrumToastContainerProps): ReactElement | null;
export const ToastQueue: {
    /** Queues a neutral toast. */
    neutral(children: string, options?: SpectrumToastOptions): CloseFunction;
    /** Queues a positive toast. */
    positive(children: string, options?: SpectrumToastOptions): CloseFunction;
    /** Queues a negative toast. */
    negative(children: string, options?: SpectrumToastOptions): CloseFunction;
    /** Queues an informational toast. */
    info(children: string, options?: SpectrumToastOptions): CloseFunction;
};

//# sourceMappingURL=types.d.ts.map
