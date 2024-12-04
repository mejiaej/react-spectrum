import { FocusableElement, RefObject, DOMAttributes, FocusableDOMProps, FocusableProps } from "@react-types/shared";
import React, { ReactNode, ReactElement } from "react";
/**
 * A utility function that focuses an element while avoiding undesired side effects such
 * as page scrolling and screen reader issues with CSS transitions.
 */
export function focusSafely(element: FocusableElement): void;
export interface FocusScopeProps {
    /** The contents of the focus scope. */
    children: ReactNode;
    /**
     * Whether to contain focus inside the scope, so users cannot
     * move focus outside, for example in a modal dialog.
     */
    contain?: boolean;
    /**
     * Whether to restore focus back to the element that was focused
     * when the focus scope mounted, after the focus scope unmounts.
     */
    restoreFocus?: boolean;
    /** Whether to auto focus the first focusable element in the focus scope on mount. */
    autoFocus?: boolean;
}
export interface FocusManagerOptions {
    /** The element to start searching from. The currently focused element by default. */
    from?: Element;
    /** Whether to only include tabbable elements, or all focusable elements. */
    tabbable?: boolean;
    /** Whether focus should wrap around when it reaches the end of the scope. */
    wrap?: boolean;
    /** A callback that determines whether the given element is focused. */
    accept?: (node: Element) => boolean;
}
export interface FocusManager {
    /** Moves focus to the next focusable or tabbable element in the focus scope. */
    focusNext(opts?: FocusManagerOptions): FocusableElement | null;
    /** Moves focus to the previous focusable or tabbable element in the focus scope. */
    focusPrevious(opts?: FocusManagerOptions): FocusableElement | null;
    /** Moves focus to the first focusable or tabbable element in the focus scope. */
    focusFirst(opts?: FocusManagerOptions): FocusableElement | null;
    /** Moves focus to the last focusable or tabbable element in the focus scope. */
    focusLast(opts?: FocusManagerOptions): FocusableElement | null;
}
/**
 * A FocusScope manages focus for its descendants. It supports containing focus inside
 * the scope, restoring focus to the previously focused element on unmount, and auto
 * focusing children on mount. It also acts as a container for a programmatic focus
 * management interface that can be used to move focus forward and back in response
 * to user events.
 */
export function FocusScope(props: FocusScopeProps): React.JSX.Element;
/**
 * Returns a FocusManager interface for the parent FocusScope.
 * A FocusManager can be used to programmatically move focus within
 * a FocusScope, e.g. in response to user events like keyboard navigation.
 */
export function useFocusManager(): FocusManager | undefined;
export function isFocusable(element: HTMLElement): boolean;
/** @private */
export function isElementInChildOfActiveScope(element: Element): boolean;
/**
 * Create a [TreeWalker]{@link https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker}
 * that matches all focusable/tabbable elements.
 */
export function getFocusableTreeWalker(root: Element, opts?: FocusManagerOptions, scope?: Element[]): TreeWalker;
/**
 * Creates a FocusManager object that can be used to move focus within an element.
 */
export function createFocusManager(ref: RefObject<Element | null>, defaultOptions?: FocusManagerOptions): FocusManager;
export interface AriaFocusRingProps {
    /**
     * Whether to show the focus ring when something
     * inside the container element has focus (true), or
     * only if the container itself has focus (false).
     * @default 'false'
     */
    within?: boolean;
    /** Whether the element is a text input. */
    isTextInput?: boolean;
    /** Whether the element will be auto focused. */
    autoFocus?: boolean;
}
export interface FocusRingAria {
    /** Whether the element is currently focused. */
    isFocused: boolean;
    /** Whether keyboard focus should be visible. */
    isFocusVisible: boolean;
    /** Props to apply to the container element with the focus ring. */
    focusProps: DOMAttributes;
}
/**
 * Determines whether a focus ring should be shown to indicate keyboard focus.
 * Focus rings are visible only when the user is interacting with a keyboard,
 * not with a mouse, touch, or other input methods.
 */
export function useFocusRing(props?: AriaFocusRingProps): FocusRingAria;
export interface FocusRingProps {
    /** Child element to apply CSS classes to. */
    children: ReactElement;
    /** CSS class to apply when the element is focused. */
    focusClass?: string;
    /** CSS class to apply when the element has keyboard focus. */
    focusRingClass?: string;
    /**
     * Whether to show the focus ring when something
     * inside the container element has focus (true), or
     * only if the container itself has focus (false).
     * @default false
     */
    within?: boolean;
    /** Whether the element is a text input. */
    isTextInput?: boolean;
    /** Whether the element will be auto focused. */
    autoFocus?: boolean;
}
/**
 * A utility component that applies a CSS class when an element has keyboard focus.
 * Focus rings are visible only when the user is interacting with a keyboard,
 * not with a mouse, touch, or other input methods.
 */
export function FocusRing(props: FocusRingProps): React.ReactElement<unknown, string | React.JSXElementConstructor<any>>;
export interface FocusableOptions<T = FocusableElement> extends FocusableProps<T>, FocusableDOMProps {
    /** Whether focus should be disabled. */
    isDisabled?: boolean;
}
export interface FocusableProviderProps extends DOMAttributes {
    /** The child element to provide DOM props to. */
    children?: ReactNode;
}
/**
 * Provides DOM props to the nearest focusable child.
 */
export const FocusableProvider: React.ForwardRefExoticComponent<FocusableProviderProps & React.RefAttributes<FocusableElement>>;
export interface FocusableAria {
    /** Props for the focusable element. */
    focusableProps: DOMAttributes;
}
/**
 * Used to make an element focusable and capable of auto focus.
 */
export function useFocusable<T extends FocusableElement = FocusableElement>(props: FocusableOptions<T>, domRef: RefObject<FocusableElement | null>): FocusableAria;
interface AriaHasTabbableChildOptions {
    isDisabled?: boolean;
}
/**
 * Returns whether an element has a tabbable child, and updates as children change.
 * @private
 */
export function useHasTabbableChild(ref: RefObject<Element | null>, options?: AriaHasTabbableChildOptions): boolean;

//# sourceMappingURL=types.d.ts.map
