import {CollectionRendererContext as $7135fc7d473fd974$export$4feb769f8ddf26c5, SectionContext as $7135fc7d473fd974$export$d40e14dec8b060a8} from "./Collection.mjs";
import {DEFAULT_SLOT as $64fa3d84918910a7$export$c62b8e45d58ddad9, Provider as $64fa3d84918910a7$export$2881499e37b75b9a, useContextProps as $64fa3d84918910a7$export$29f1550f4b0d4415, useRenderProps as $64fa3d84918910a7$export$4d86445c2cf5e3, useSlot as $64fa3d84918910a7$export$9d4c57ee4c6ffdd8} from "./utils.mjs";
import {DragAndDropContext as $612b8eb6cb90e02d$export$d188a835a7bc5783, DropIndicatorContext as $612b8eb6cb90e02d$export$f55761759794cf55, useDndPersistedKeys as $612b8eb6cb90e02d$export$d1e8e3fbb7461f6, useRenderDropIndicator as $612b8eb6cb90e02d$export$971707d8a129a1f7} from "./DragAndDrop.mjs";
import {HeaderContext as $72a5793c14baf454$export$e0e4026c12a8bdbb} from "./Header.mjs";
import {SeparatorContext as $431f98aba6844401$export$6615d83f6de245ce} from "./Separator.mjs";
import {TextContext as $514c0188e459b4c0$export$9afb8bc826b033ea} from "./Text.mjs";
import {useLocale as $e8Bmu$useLocale, useCollator as $e8Bmu$useCollator, ListKeyboardDelegate as $e8Bmu$ListKeyboardDelegate, useListBox as $e8Bmu$useListBox, useFocusRing as $e8Bmu$useFocusRing, FocusScope as $e8Bmu$FocusScope, mergeProps as $e8Bmu$mergeProps, useListBoxSection as $e8Bmu$useListBoxSection, useOption as $e8Bmu$useOption, useHover as $e8Bmu$useHover} from "react-aria";
import {CollectionBuilder as $e8Bmu$CollectionBuilder, Collection as $e8Bmu$Collection, createBranchComponent as $e8Bmu$createBranchComponent, createLeafComponent as $e8Bmu$createLeafComponent} from "@react-aria/collections";
import {useListState as $e8Bmu$useListState} from "react-stately";
import {filterDOMProps as $e8Bmu$filterDOMProps, useObjectRef as $e8Bmu$useObjectRef} from "@react-aria/utils";
import $e8Bmu$react, {createContext as $e8Bmu$createContext, forwardRef as $e8Bmu$forwardRef, useContext as $e8Bmu$useContext, useMemo as $e8Bmu$useMemo, useRef as $e8Bmu$useRef, useEffect as $e8Bmu$useEffect} from "react";

/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 










const $eed445e0843c11d0$export$7ff8f37d2d81a48d = /*#__PURE__*/ (0, $e8Bmu$createContext)(null);
const $eed445e0843c11d0$export$7c5906fe4f1f2af2 = /*#__PURE__*/ (0, $e8Bmu$createContext)(null);
const $eed445e0843c11d0$export$41f133550aa26f48 = /*#__PURE__*/ (0, $e8Bmu$forwardRef)(function ListBox(props, ref) {
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $eed445e0843c11d0$export$7ff8f37d2d81a48d);
    let state = (0, $e8Bmu$useContext)($eed445e0843c11d0$export$7c5906fe4f1f2af2);
    // The structure of ListBox is a bit strange because it needs to work inside other components like ComboBox and Select.
    // Those components render two copies of their children so that the collection can be built even when the popover is closed.
    // The first copy sends a collection document via context which we render the collection portal into.
    // The second copy sends a ListState object via context which we use to render the ListBox without rebuilding the state.
    // Otherwise, we have a standalone ListBox, so we need to create a collection and state ourselves.
    if (state) return /*#__PURE__*/ (0, $e8Bmu$react).createElement($eed445e0843c11d0$var$ListBoxInner, {
        state: state,
        props: props,
        listBoxRef: ref
    });
    return /*#__PURE__*/ (0, $e8Bmu$react).createElement((0, $e8Bmu$CollectionBuilder), {
        content: /*#__PURE__*/ (0, $e8Bmu$react).createElement((0, $e8Bmu$Collection), props)
    }, (collection)=>/*#__PURE__*/ (0, $e8Bmu$react).createElement($eed445e0843c11d0$var$StandaloneListBox, {
            props: props,
            listBoxRef: ref,
            collection: collection
        }));
});
function $eed445e0843c11d0$var$StandaloneListBox({ props: props, listBoxRef: listBoxRef, collection: collection }) {
    props = {
        ...props,
        collection: collection,
        children: null,
        items: null
    };
    let { layoutDelegate: layoutDelegate } = (0, $e8Bmu$useContext)((0, $7135fc7d473fd974$export$4feb769f8ddf26c5));
    let state = (0, $e8Bmu$useListState)({
        ...props,
        layoutDelegate: layoutDelegate
    });
    return /*#__PURE__*/ (0, $e8Bmu$react).createElement($eed445e0843c11d0$var$ListBoxInner, {
        state: state,
        props: props,
        listBoxRef: listBoxRef
    });
}
function $eed445e0843c11d0$var$ListBoxInner({ state: state, props: props, listBoxRef: listBoxRef }) {
    let { dragAndDropHooks: dragAndDropHooks, layout: layout = 'stack', orientation: orientation = 'vertical' } = props;
    let { collection: collection, selectionManager: selectionManager } = state;
    let isListDraggable = !!(dragAndDropHooks === null || dragAndDropHooks === void 0 ? void 0 : dragAndDropHooks.useDraggableCollectionState);
    let isListDroppable = !!(dragAndDropHooks === null || dragAndDropHooks === void 0 ? void 0 : dragAndDropHooks.useDroppableCollectionState);
    let { direction: direction } = (0, $e8Bmu$useLocale)();
    let { disabledBehavior: disabledBehavior, disabledKeys: disabledKeys } = selectionManager;
    let collator = (0, $e8Bmu$useCollator)({
        usage: 'search',
        sensitivity: 'base'
    });
    let { isVirtualized: isVirtualized, layoutDelegate: layoutDelegate, dropTargetDelegate: ctxDropTargetDelegate, CollectionRoot: CollectionRoot } = (0, $e8Bmu$useContext)((0, $7135fc7d473fd974$export$4feb769f8ddf26c5));
    let keyboardDelegate = (0, $e8Bmu$useMemo)(()=>props.keyboardDelegate || new (0, $e8Bmu$ListKeyboardDelegate)({
            collection: collection,
            collator: collator,
            ref: listBoxRef,
            disabledKeys: disabledKeys,
            disabledBehavior: disabledBehavior,
            layout: layout,
            orientation: orientation,
            direction: direction,
            layoutDelegate: layoutDelegate
        }), [
        collection,
        collator,
        listBoxRef,
        disabledBehavior,
        disabledKeys,
        orientation,
        direction,
        props.keyboardDelegate,
        layout,
        layoutDelegate
    ]);
    let { listBoxProps: listBoxProps } = (0, $e8Bmu$useListBox)({
        ...props,
        shouldSelectOnPressUp: isListDraggable || props.shouldSelectOnPressUp,
        keyboardDelegate: keyboardDelegate,
        isVirtualized: isVirtualized
    }, state, listBoxRef);
    let dragHooksProvided = (0, $e8Bmu$useRef)(isListDraggable);
    let dropHooksProvided = (0, $e8Bmu$useRef)(isListDroppable);
    (0, $e8Bmu$useEffect)(()=>{
        if (dragHooksProvided.current !== isListDraggable) console.warn('Drag hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.');
        if (dropHooksProvided.current !== isListDroppable) console.warn('Drop hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.');
    }, [
        isListDraggable,
        isListDroppable
    ]);
    let dragState = undefined;
    let dropState = undefined;
    let droppableCollection = undefined;
    let isRootDropTarget = false;
    let dragPreview = null;
    let preview = (0, $e8Bmu$useRef)(null);
    if (isListDraggable && dragAndDropHooks) {
        dragState = dragAndDropHooks.useDraggableCollectionState({
            collection: collection,
            selectionManager: selectionManager,
            preview: dragAndDropHooks.renderDragPreview ? preview : undefined
        });
        dragAndDropHooks.useDraggableCollection({}, dragState, listBoxRef);
        let DragPreview = dragAndDropHooks.DragPreview;
        dragPreview = dragAndDropHooks.renderDragPreview ? /*#__PURE__*/ (0, $e8Bmu$react).createElement(DragPreview, {
            ref: preview
        }, dragAndDropHooks.renderDragPreview) : null;
    }
    if (isListDroppable && dragAndDropHooks) {
        dropState = dragAndDropHooks.useDroppableCollectionState({
            collection: collection,
            selectionManager: selectionManager
        });
        let dropTargetDelegate = dragAndDropHooks.dropTargetDelegate || ctxDropTargetDelegate || new dragAndDropHooks.ListDropTargetDelegate(collection, listBoxRef, {
            orientation: orientation,
            layout: layout,
            direction: direction
        });
        droppableCollection = dragAndDropHooks.useDroppableCollection({
            keyboardDelegate: keyboardDelegate,
            dropTargetDelegate: dropTargetDelegate
        }, dropState, listBoxRef);
        isRootDropTarget = dropState.isDropTarget({
            type: 'root'
        });
    }
    let { focusProps: focusProps, isFocused: isFocused, isFocusVisible: isFocusVisible } = (0, $e8Bmu$useFocusRing)();
    let renderValues = {
        isDropTarget: isRootDropTarget,
        isEmpty: state.collection.size === 0,
        isFocused: isFocused,
        isFocusVisible: isFocusVisible,
        layout: props.layout || 'stack',
        state: state
    };
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        className: props.className,
        style: props.style,
        defaultClassName: 'react-aria-ListBox',
        values: renderValues
    });
    let emptyState = null;
    if (state.collection.size === 0 && props.renderEmptyState) emptyState = /*#__PURE__*/ (0, $e8Bmu$react).createElement("div", {
        // eslint-disable-next-line
        role: "option",
        style: {
            display: 'contents'
        }
    }, props.renderEmptyState(renderValues));
    return /*#__PURE__*/ (0, $e8Bmu$react).createElement((0, $e8Bmu$FocusScope), null, /*#__PURE__*/ (0, $e8Bmu$react).createElement("div", {
        ...(0, $e8Bmu$filterDOMProps)(props),
        ...(0, $e8Bmu$mergeProps)(listBoxProps, focusProps, droppableCollection === null || droppableCollection === void 0 ? void 0 : droppableCollection.collectionProps),
        ...renderProps,
        ref: listBoxRef,
        slot: props.slot || undefined,
        onScroll: props.onScroll,
        "data-drop-target": isRootDropTarget || undefined,
        "data-empty": state.collection.size === 0 || undefined,
        "data-focused": isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-layout": props.layout || 'stack',
        "data-orientation": props.orientation || 'vertical'
    }, /*#__PURE__*/ (0, $e8Bmu$react).createElement((0, $64fa3d84918910a7$export$2881499e37b75b9a), {
        values: [
            [
                $eed445e0843c11d0$export$7ff8f37d2d81a48d,
                props
            ],
            [
                $eed445e0843c11d0$export$7c5906fe4f1f2af2,
                state
            ],
            [
                (0, $612b8eb6cb90e02d$export$d188a835a7bc5783),
                {
                    dragAndDropHooks: dragAndDropHooks,
                    dragState: dragState,
                    dropState: dropState
                }
            ],
            [
                (0, $431f98aba6844401$export$6615d83f6de245ce),
                {
                    elementType: 'div'
                }
            ],
            [
                (0, $612b8eb6cb90e02d$export$f55761759794cf55),
                {
                    render: $eed445e0843c11d0$var$ListBoxDropIndicatorWrapper
                }
            ],
            [
                (0, $7135fc7d473fd974$export$d40e14dec8b060a8),
                {
                    name: 'ListBoxSection',
                    render: $eed445e0843c11d0$var$ListBoxSectionInner
                }
            ]
        ]
    }, /*#__PURE__*/ (0, $e8Bmu$react).createElement(CollectionRoot, {
        collection: collection,
        scrollRef: listBoxRef,
        persistedKeys: (0, $612b8eb6cb90e02d$export$d1e8e3fbb7461f6)(selectionManager, dragAndDropHooks, dropState),
        renderDropIndicator: (0, $612b8eb6cb90e02d$export$971707d8a129a1f7)(dragAndDropHooks, dropState)
    })), emptyState, dragPreview));
}
function $eed445e0843c11d0$var$ListBoxSectionInner(props, ref, section, className = 'react-aria-ListBoxSection') {
    let state = (0, $e8Bmu$useContext)($eed445e0843c11d0$export$7c5906fe4f1f2af2);
    let { dragAndDropHooks: dragAndDropHooks, dropState: dropState } = (0, $e8Bmu$useContext)((0, $612b8eb6cb90e02d$export$d188a835a7bc5783));
    let { CollectionBranch: CollectionBranch } = (0, $e8Bmu$useContext)((0, $7135fc7d473fd974$export$4feb769f8ddf26c5));
    let [headingRef, heading] = (0, $64fa3d84918910a7$export$9d4c57ee4c6ffdd8)();
    var _props_arialabel;
    let { headingProps: headingProps, groupProps: groupProps } = (0, $e8Bmu$useListBoxSection)({
        heading: heading,
        'aria-label': (_props_arialabel = props['aria-label']) !== null && _props_arialabel !== void 0 ? _props_arialabel : undefined
    });
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        defaultClassName: className,
        className: props.className,
        style: props.style,
        values: {}
    });
    return /*#__PURE__*/ (0, $e8Bmu$react).createElement("section", {
        ...(0, $e8Bmu$filterDOMProps)(props),
        ...groupProps,
        ...renderProps,
        ref: ref
    }, /*#__PURE__*/ (0, $e8Bmu$react).createElement((0, $72a5793c14baf454$export$e0e4026c12a8bdbb).Provider, {
        value: {
            ...headingProps,
            ref: headingRef
        }
    }, /*#__PURE__*/ (0, $e8Bmu$react).createElement(CollectionBranch, {
        collection: state.collection,
        parent: section,
        renderDropIndicator: (0, $612b8eb6cb90e02d$export$971707d8a129a1f7)(dragAndDropHooks, dropState)
    })));
}
const $eed445e0843c11d0$export$dca12b0bb56e4fc = /*#__PURE__*/ (0, $e8Bmu$createBranchComponent)('section', $eed445e0843c11d0$var$ListBoxSectionInner);
const $eed445e0843c11d0$export$a11e76429ed99b4 = /*#__PURE__*/ (0, $e8Bmu$createLeafComponent)('item', function ListBoxItem(props, forwardedRef, item) {
    let ref = (0, $e8Bmu$useObjectRef)(forwardedRef);
    let state = (0, $e8Bmu$useContext)($eed445e0843c11d0$export$7c5906fe4f1f2af2);
    let { dragAndDropHooks: dragAndDropHooks, dragState: dragState, dropState: dropState } = (0, $e8Bmu$useContext)((0, $612b8eb6cb90e02d$export$d188a835a7bc5783));
    let { optionProps: optionProps, labelProps: labelProps, descriptionProps: descriptionProps, ...states } = (0, $e8Bmu$useOption)({
        key: item.key,
        'aria-label': props === null || props === void 0 ? void 0 : props['aria-label']
    }, state, ref);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $e8Bmu$useHover)({
        isDisabled: !states.allowsSelection && !states.hasAction,
        onHoverStart: item.props.onHoverStart,
        onHoverChange: item.props.onHoverChange,
        onHoverEnd: item.props.onHoverEnd
    });
    let draggableItem = null;
    if (dragState && dragAndDropHooks) draggableItem = dragAndDropHooks.useDraggableItem({
        key: item.key
    }, dragState);
    let droppableItem = null;
    if (dropState && dragAndDropHooks) droppableItem = dragAndDropHooks.useDroppableItem({
        target: {
            type: 'item',
            key: item.key,
            dropPosition: 'on'
        }
    }, dropState, ref);
    let isDragging = dragState && dragState.isDragging(item.key);
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        id: undefined,
        children: props.children,
        defaultClassName: 'react-aria-ListBoxItem',
        values: {
            ...states,
            isHovered: isHovered,
            selectionMode: state.selectionManager.selectionMode,
            selectionBehavior: state.selectionManager.selectionBehavior,
            allowsDragging: !!dragState,
            isDragging: isDragging,
            isDropTarget: droppableItem === null || droppableItem === void 0 ? void 0 : droppableItem.isDropTarget
        }
    });
    (0, $e8Bmu$useEffect)(()=>{
        if (!item.textValue) console.warn('A `textValue` prop is required for <ListBoxItem> elements with non-plain text children in order to support accessibility features such as type to select.');
    }, [
        item.textValue
    ]);
    let ElementType = props.href ? 'a' : 'div';
    return /*#__PURE__*/ (0, $e8Bmu$react).createElement(ElementType, {
        ...(0, $e8Bmu$mergeProps)(optionProps, hoverProps, draggableItem === null || draggableItem === void 0 ? void 0 : draggableItem.dragProps, droppableItem === null || droppableItem === void 0 ? void 0 : droppableItem.dropProps),
        ...renderProps,
        ref: ref,
        "data-allows-dragging": !!dragState || undefined,
        "data-selected": states.isSelected || undefined,
        "data-disabled": states.isDisabled || undefined,
        "data-hovered": isHovered || undefined,
        "data-focused": states.isFocused || undefined,
        "data-focus-visible": states.isFocusVisible || undefined,
        "data-pressed": states.isPressed || undefined,
        "data-dragging": isDragging || undefined,
        "data-drop-target": (droppableItem === null || droppableItem === void 0 ? void 0 : droppableItem.isDropTarget) || undefined,
        "data-selection-mode": state.selectionManager.selectionMode === 'none' ? undefined : state.selectionManager.selectionMode
    }, /*#__PURE__*/ (0, $e8Bmu$react).createElement((0, $64fa3d84918910a7$export$2881499e37b75b9a), {
        values: [
            [
                (0, $514c0188e459b4c0$export$9afb8bc826b033ea),
                {
                    slots: {
                        [(0, $64fa3d84918910a7$export$c62b8e45d58ddad9)]: labelProps,
                        label: labelProps,
                        description: descriptionProps
                    }
                }
            ]
        ]
    }, renderProps.children));
});
function $eed445e0843c11d0$var$ListBoxDropIndicatorWrapper(props, ref) {
    ref = (0, $e8Bmu$useObjectRef)(ref);
    let { dragAndDropHooks: dragAndDropHooks, dropState: dropState } = (0, $e8Bmu$useContext)((0, $612b8eb6cb90e02d$export$d188a835a7bc5783));
    let { dropIndicatorProps: dropIndicatorProps, isHidden: isHidden, isDropTarget: isDropTarget } = dragAndDropHooks.useDropIndicator(props, dropState, ref);
    if (isHidden) return null;
    return /*#__PURE__*/ (0, $e8Bmu$react).createElement($eed445e0843c11d0$var$ListBoxDropIndicatorForwardRef, {
        ...props,
        dropIndicatorProps: dropIndicatorProps,
        isDropTarget: isDropTarget,
        ref: ref
    });
}
function $eed445e0843c11d0$var$ListBoxDropIndicator(props, ref) {
    let { dropIndicatorProps: dropIndicatorProps, isDropTarget: isDropTarget, ...otherProps } = props;
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...otherProps,
        defaultClassName: 'react-aria-DropIndicator',
        values: {
            isDropTarget: isDropTarget
        }
    });
    return /*#__PURE__*/ (0, $e8Bmu$react).createElement("div", {
        ...dropIndicatorProps,
        ...renderProps,
        // eslint-disable-next-line
        role: "option",
        ref: ref,
        "data-drop-target": isDropTarget || undefined
    });
}
const $eed445e0843c11d0$var$ListBoxDropIndicatorForwardRef = /*#__PURE__*/ (0, $e8Bmu$forwardRef)($eed445e0843c11d0$var$ListBoxDropIndicator);


export {$eed445e0843c11d0$export$7ff8f37d2d81a48d as ListBoxContext, $eed445e0843c11d0$export$7c5906fe4f1f2af2 as ListStateContext, $eed445e0843c11d0$export$41f133550aa26f48 as ListBox, $eed445e0843c11d0$export$dca12b0bb56e4fc as ListBoxSection, $eed445e0843c11d0$export$a11e76429ed99b4 as ListBoxItem};
//# sourceMappingURL=ListBox.module.js.map
