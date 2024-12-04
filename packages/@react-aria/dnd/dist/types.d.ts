import { DirectoryDropItem, DropItem, FileDropItem, TextDropItem, DropActivateEvent, DropEnterEvent, DropEvent, DropExitEvent, DropMoveEvent, DropOperation, FocusableElement, DragTypes, RefObject, DroppableCollectionProps, DropTargetDelegate, KeyboardDelegate, DropTarget, DragEndEvent, DragItem, DragMoveEvent, DragPreviewRenderer, DragStartEvent, Key, DOMAttributes, Direction, Node, Orientation } from "@react-types/shared";
import { AriaButtonProps } from "@react-types/button";
import React, { HTMLAttributes, JSX } from "react";
import { DroppableCollectionState, DraggableCollectionState } from "@react-stately/dnd";
export const DIRECTORY_DRAG_TYPE: unique symbol;
/** Returns whether a drop item contains text data. */
export function isTextDropItem(dropItem: DropItem): dropItem is TextDropItem;
/** Returns whether a drop item is a file. */
export function isFileDropItem(dropItem: DropItem): dropItem is FileDropItem;
/** Returns whether a drop item is a directory. */
export function isDirectoryDropItem(dropItem: DropItem): dropItem is DirectoryDropItem;
/** @private */
export function isVirtualDragging(): boolean;
export interface DropOptions {
    /** A ref for the droppable element. */
    ref: RefObject<FocusableElement | null>;
    /**
     * A function returning the drop operation to be performed when items matching the given types are dropped
     * on the drop target.
     */
    getDropOperation?: (types: DragTypes, allowedOperations: DropOperation[]) => DropOperation;
    /** A function that returns the drop operation for a specific point within the target. */
    getDropOperationForPoint?: (types: DragTypes, allowedOperations: DropOperation[], x: number, y: number) => DropOperation;
    /** Handler that is called when a valid drag enters the drop target. */
    onDropEnter?: (e: DropEnterEvent) => void;
    /** Handler that is called when a valid drag is moved within the drop target. */
    onDropMove?: (e: DropMoveEvent) => void;
    /**
     * Handler that is called after a valid drag is held over the drop target for a period of time.
     * This typically opens the item so that the user can drop within it.
     * @private
     */
    onDropActivate?: (e: DropActivateEvent) => void;
    /** Handler that is called when a valid drag exits the drop target. */
    onDropExit?: (e: DropExitEvent) => void;
    /** Handler that is called when a valid drag is dropped on the drop target. */
    onDrop?: (e: DropEvent) => void;
    /**
     * Whether the item has an explicit focusable drop affordance to initiate accessible drag and drop mode.
     * If true, the dropProps will omit these event handlers, and they will be applied to dropButtonProps instead.
     */
    hasDropButton?: boolean;
    /**
     * Whether the drop target is disabled. If true, the drop target will not accept any drops.
     */
    isDisabled?: boolean;
}
export interface DropResult {
    /** Props for the droppable element. */
    dropProps: HTMLAttributes<HTMLElement>;
    /** Whether the drop target is currently focused or hovered. */
    isDropTarget: boolean;
    /** Props for the explicit drop button affordance, if any. */
    dropButtonProps?: AriaButtonProps;
}
/**
 * Handles drop interactions for an element, with support for traditional mouse and touch
 * based drag and drop, in addition to full parity for keyboard and screen reader users.
 */
export function useDrop(options: DropOptions): DropResult;
export interface DroppableCollectionOptions extends DroppableCollectionProps {
    /** A delegate object that implements behavior for keyboard focus movement. */
    keyboardDelegate: KeyboardDelegate;
    /** A delegate object that provides drop targets for pointer coordinates within the collection. */
    dropTargetDelegate: DropTargetDelegate;
}
export interface DroppableCollectionResult {
    /** Props for the collection element. */
    collectionProps: HTMLAttributes<HTMLElement>;
}
/**
 * Handles drop interactions for a collection component, with support for traditional mouse and touch
 * based drag and drop, in addition to full parity for keyboard and screen reader users.
 */
export function useDroppableCollection(props: DroppableCollectionOptions, state: DroppableCollectionState, ref: RefObject<HTMLElement | null>): DroppableCollectionResult;
export interface DroppableItemOptions {
    /** The drop target represented by the item. */
    target: DropTarget;
}
export interface DroppableItemResult {
    /** Props for the droppable element. */
    dropProps: HTMLAttributes<HTMLElement>;
    /** Whether the item is currently the active drop target. */
    isDropTarget: boolean;
}
/**
 * Handles drop interactions for an item within a collection component.
 */
export function useDroppableItem(options: DroppableItemOptions, state: DroppableCollectionState, ref: RefObject<HTMLElement | null>): DroppableItemResult;
export interface DropIndicatorProps {
    /** The drop target that the drop indicator represents. */
    target: DropTarget;
}
export interface DropIndicatorAria {
    /** Props for the drop indicator element. */
    dropIndicatorProps: HTMLAttributes<HTMLElement>;
    /** Whether the drop indicator is currently the active drop target. */
    isDropTarget: boolean;
    /**
     * Whether the drop indicator is hidden, both visually and from assistive technology.
     * Use this to determine whether to omit the element from the DOM entirely.
     */
    isHidden: boolean;
}
/**
 * Handles drop interactions for a target within a droppable collection.
 */
export function useDropIndicator(props: DropIndicatorProps, state: DroppableCollectionState, ref: RefObject<HTMLElement | null>): DropIndicatorAria;
export interface DragOptions {
    /** Handler that is called when a drag operation is started. */
    onDragStart?: (e: DragStartEvent) => void;
    /** Handler that is called when the drag is moved. */
    onDragMove?: (e: DragMoveEvent) => void;
    /** Handler that is called when the drag operation is ended, either as a result of a drop or a cancellation. */
    onDragEnd?: (e: DragEndEvent) => void;
    /** A function that returns the items being dragged. */
    getItems: () => DragItem[];
    /** The ref of the element that will be rendered as the drag preview while dragging. */
    preview?: RefObject<DragPreviewRenderer | null>;
    /** Function that returns the drop operations that are allowed for the dragged items. If not provided, all drop operations are allowed. */
    getAllowedDropOperations?: () => DropOperation[];
    /**
     * Whether the item has an explicit focusable drag affordance to initiate accessible drag and drop mode.
     * If true, the dragProps will omit these event handlers, and they will be applied to dragButtonProps instead.
     */
    hasDragButton?: boolean;
    /**
     * Whether the drag operation is disabled. If true, the element will not be draggable.
     */
    isDisabled?: boolean;
}
export interface DragResult {
    /** Props for the draggable element. */
    dragProps: HTMLAttributes<HTMLElement>;
    /** Props for the explicit drag button affordance, if any. */
    dragButtonProps: AriaButtonProps;
    /** Whether the element is currently being dragged. */
    isDragging: boolean;
}
/**
 * Handles drag interactions for an element, with support for traditional mouse and touch
 * based drag and drop, in addition to full parity for keyboard and screen reader users.
 */
export function useDrag(options: DragOptions): DragResult;
export interface DraggableItemProps {
    /** The key of the draggable item within the collection. */
    key: Key;
    /**
     * Whether the item has an explicit focusable drag affordance to initiate accessible drag and drop mode.
     * If true, the dragProps will omit these event handlers, and they will be applied to dragButtonProps instead.
     */
    hasDragButton?: boolean;
    /**
     * Whether the item has a primary action (e.g. Enter key or long press) that would
     * conflict with initiating accessible drag and drop. If true, the Alt key must be held to
     * start dragging with a keyboard, and long press is disabled until selection mode is entered.
     * This should be passed from the associated collection item hook (e.g. useOption, useGridListItem, etc.).
     */
    hasAction?: boolean;
}
export interface DraggableItemResult {
    /** Props for the draggable item. */
    dragProps: HTMLAttributes<HTMLElement>;
    /** Props for the explicit drag button affordance, if any. */
    dragButtonProps: AriaButtonProps;
}
/**
 * Handles drag interactions for an item within a draggable collection.
 */
export function useDraggableItem(props: DraggableItemProps, state: DraggableCollectionState): DraggableItemResult;
export interface DraggableCollectionOptions {
}
/**
 * Handles drag interactions for a collection component, with support for traditional mouse and touch
 * based drag and drop, in addition to full parity for keyboard and screen reader users.
 */
export function useDraggableCollection(props: DraggableCollectionOptions, state: DraggableCollectionState, ref: RefObject<HTMLElement | null>): void;
export interface DragPreviewProps {
    children: (items: DragItem[]) => JSX.Element | null;
}
export const DragPreview: React.ForwardRefExoticComponent<DragPreviewProps & React.RefAttributes<DragPreviewRenderer | null>>;
export interface ClipboardProps {
    /** A function that returns the items to copy. */
    getItems?: () => DragItem[];
    /** Handler that is called when the user triggers a copy interaction. */
    onCopy?: () => void;
    /** Handler that is called when the user triggers a cut interaction. */
    onCut?: () => void;
    /** Handler that is called when the user triggers a paste interaction. */
    onPaste?: (items: DropItem[]) => void;
    /** Whether the clipboard is disabled. */
    isDisabled?: boolean;
}
export interface ClipboardResult {
    /** Props for the element that will handle clipboard events. */
    clipboardProps: DOMAttributes;
}
/**
 * Handles clipboard interactions for a focusable element. Supports items of multiple
 * data types, and integrates with the operating system native clipboard.
 */
export function useClipboard(options: ClipboardProps): ClipboardResult;
interface ListDropTargetDelegateOptions {
    /**
     * Whether the items are arranged in a stack or grid.
     * @default 'stack'
     */
    layout?: 'stack' | 'grid';
    /**
     * The primary orientation of the items. Usually this is the
     * direction that the collection scrolls.
     * @default 'vertical'
     */
    orientation?: Orientation;
    /**
     * The horizontal layout direction.
     * @default 'ltr'
     */
    direction?: Direction;
}
export class ListDropTargetDelegate implements DropTargetDelegate {
    constructor(collection: Iterable<Node<unknown>>, ref: RefObject<HTMLElement | null>, options?: ListDropTargetDelegateOptions);
    getDropTargetFromPoint(x: number, y: number, isValidDropTarget: (target: DropTarget) => boolean): DropTarget;
}
export type { DirectoryDropItem, DragEndEvent, DraggableCollectionEndEvent, DraggableCollectionMoveEvent, DraggableCollectionStartEvent, DragItem, DragMoveEvent, DragPreviewRenderer, DragStartEvent, DragTypes, DropEnterEvent, DropEvent, DropExitEvent, DropItem, DropMoveEvent, DropOperation, DroppableCollectionDropEvent, DroppableCollectionEnterEvent, DroppableCollectionExitEvent, DroppableCollectionInsertDropEvent, DroppableCollectionMoveEvent, DroppableCollectionOnItemDropEvent, DroppableCollectionReorderEvent, DroppableCollectionRootDropEvent, DropPosition, DropTarget, DropTargetDelegate, FileDropItem, ItemDropTarget, RootDropTarget, TextDropItem } from '@react-types/shared';

//# sourceMappingURL=types.d.ts.map
