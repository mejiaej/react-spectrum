import { OverlayProps } from "@react-types/overlays";
import React, { ReactNode } from "react";
import { DOMRefValue, StyleProps } from "@react-types/shared";
import { AriaPopoverProps, AriaModalOverlayProps } from "@react-aria/overlays";
import { FocusWithinProps } from "@react-aria/interactions";
import { OverlayTriggerState } from "@react-stately/overlays";
/**
 * Timeout issues adding css animations to enter may be related to
 * https://github.com/reactjs/react-transition-group/issues/189 or
 * https://github.com/reactjs/react-transition-group/issues/22
 * my VM isn't good enough to debug accurately and get a better answer.
 *
 * As a result, use enter 0 so that is-open is applied once entered
 * it doesn't matter if we know when the css-animation is done on entering
 * for exiting though, give time for the css-animation to play
 * before removing from the DOM
 * **note** hitting esc bypasses exit animation for anyone testing.
 */
export function OpenTransition(props: any): any;
export const Overlay: React.ForwardRefExoticComponent<OverlayProps & React.RefAttributes<DOMRefValue<HTMLDivElement>>>;
interface PopoverProps extends Omit<AriaPopoverProps, 'popoverRef' | 'maxHeight'>, FocusWithinProps, StyleProps {
    children: ReactNode;
    hideArrow?: boolean;
    state: OverlayTriggerState;
    shouldContainFocus?: boolean;
    onEntering?: () => void;
    onEnter?: () => void;
    onEntered?: () => void;
    onExiting?: () => void;
    onExited?: () => void;
    onExit?: () => void;
    container?: HTMLElement;
    disableFocusManagement?: boolean;
    enableBothDismissButtons?: boolean;
    onDismissButtonPress?: () => void;
}
export const Popover: React.ForwardRefExoticComponent<PopoverProps & React.RefAttributes<DOMRefValue<HTMLDivElement>>>;
interface ModalProps extends AriaModalOverlayProps, StyleProps, Omit<OverlayProps, 'nodeRef' | 'shouldContainFocus'> {
    children: ReactNode;
    state: OverlayTriggerState;
    type?: 'modal' | 'fullscreen' | 'fullscreenTakeover';
}
export const Modal: React.ForwardRefExoticComponent<ModalProps & React.RefAttributes<DOMRefValue<HTMLDivElement>>>;
interface TrayProps extends AriaModalOverlayProps, StyleProps, Omit<OverlayProps, 'nodeRef' | 'shouldContainFocus'> {
    children: ReactNode;
    state: OverlayTriggerState;
    isFixedHeight?: boolean;
}
export const Tray: React.ForwardRefExoticComponent<TrayProps & React.RefAttributes<DOMRefValue<HTMLDivElement>>>;

//# sourceMappingURL=types.d.ts.map
