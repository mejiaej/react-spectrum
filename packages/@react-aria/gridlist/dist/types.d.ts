import { AriaLabelingProps, CollectionBase, DisabledBehavior, DOMAttributes, DOMProps, Key, KeyboardDelegate, LayoutDelegate, MultipleSelection, RefObject, FocusableElement, Node } from "@react-types/shared";
import { ListState } from "@react-stately/list";
import { SelectableItemStates } from "@react-aria/selection";
import { TreeState } from "@react-stately/tree";
import { AriaGridSelectionCheckboxProps, GridSelectionCheckboxAria } from "@react-aria/grid";
export interface GridListProps<T> extends CollectionBase<T>, MultipleSelection {
    /**
     * Handler that is called when a user performs an action on an item. The exact user event depends on
     * the collection's `selectionBehavior` prop and the interaction modality.
     */
    onAction?: (key: Key) => void;
    /** Whether `disabledKeys` applies to all interactions, or only selection. */
    disabledBehavior?: DisabledBehavior;
}
export interface AriaGridListProps<T> extends GridListProps<T>, DOMProps, AriaLabelingProps {
    /**
     * Whether keyboard navigation to focusable elements within grid list items is
     * via the left/right arrow keys or the tab key.
     * @default 'arrow'
     */
    keyboardNavigationBehavior?: 'arrow' | 'tab';
}
export interface AriaGridListOptions<T> extends Omit<AriaGridListProps<T>, 'children'> {
    /** Whether the list uses virtual scrolling. */
    isVirtualized?: boolean;
    /**
     * An optional keyboard delegate implementation for type to select,
     * to override the default.
     */
    keyboardDelegate?: KeyboardDelegate;
    /**
     * A delegate object that provides layout information for items in the collection.
     * By default this uses the DOM, but this can be overridden to implement things like
     * virtualized scrolling.
     */
    layoutDelegate?: LayoutDelegate;
    /**
     * Whether focus should wrap around when the end/start is reached.
     * @default false
     */
    shouldFocusWrap?: boolean;
    /**
     * The behavior of links in the collection.
     * - 'action': link behaves like onAction.
     * - 'selection': link follows selection interactions (e.g. if URL drives selection).
     * - 'override': links override all other interactions (link items are not selectable).
     * @default 'action'
     */
    linkBehavior?: 'action' | 'selection' | 'override';
}
export interface GridListAria {
    /** Props for the grid element. */
    gridProps: DOMAttributes;
}
/**
 * Provides the behavior and accessibility implementation for a list component with interactive children.
 * A grid list displays data in a single column and enables a user to navigate its contents via directional navigation keys.
 * @param props - Props for the list.
 * @param state - State for the list, as returned by `useListState`.
 * @param ref - The ref attached to the list element.
 */
export function useGridList<T>(props: AriaGridListOptions<T>, state: ListState<T>, ref: RefObject<HTMLElement | null>): GridListAria;
export interface AriaGridListItemOptions {
    /** An object representing the list item. Contains all the relevant information that makes up the list row. */
    node: Node<unknown>;
    /** Whether the list row is contained in a virtual scroller. */
    isVirtualized?: boolean;
    /** Whether selection should occur on press up instead of press down. */
    shouldSelectOnPressUp?: boolean;
}
export interface GridListItemAria extends SelectableItemStates {
    /** Props for the list row element. */
    rowProps: DOMAttributes;
    /** Props for the grid cell element within the list row. */
    gridCellProps: DOMAttributes;
    /** Props for the list item description element, if any. */
    descriptionProps: DOMAttributes;
}
/**
 * Provides the behavior and accessibility implementation for a row in a grid list.
 * @param props - Props for the row.
 * @param state - State of the parent list, as returned by `useListState`.
 * @param ref - The ref attached to the row element.
 */
export function useGridListItem<T>(props: AriaGridListItemOptions, state: ListState<T> | TreeState<T>, ref: RefObject<FocusableElement | null>): GridListItemAria;
/**
 * Provides the behavior and accessibility implementation for a selection checkbox in a grid list.
 * @param props - Props for the selection checkbox.
 * @param state - State of the list, as returned by `useListState`.
 */
export function useGridListSelectionCheckbox<T>(props: AriaGridSelectionCheckboxProps, state: ListState<T>): GridSelectionCheckboxAria;
export type { AriaGridSelectionCheckboxProps, GridSelectionCheckboxAria } from '@react-aria/grid';

//# sourceMappingURL=types.d.ts.map
