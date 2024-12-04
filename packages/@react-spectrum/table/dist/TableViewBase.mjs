import {InsertionIndicator as $7ee9a922ee4e8032$export$2c0bab5914a9d088} from "./InsertionIndicator.mjs";
import $7lS7h$intlStringsmodulejs from "./intlStrings.mjs";
import {Nubbin as $cb7d341e8868d81d$export$d9658cdf8c86807} from "./Nubbin.mjs";
import {Resizer as $fc695d2eafc2b351$export$48a76196cafe3b93, ResizeStateContext as $fc695d2eafc2b351$export$b517d84d4ad20b24} from "./Resizer.mjs";
import {RootDropIndicator as $4e6fc36ba71ba405$export$d30a7814cfd4033e} from "./RootDropIndicator.mjs";
import {DragPreview as $daa6ead3d9d3506a$export$905ab40ac2179daa} from "./DragPreview.mjs";
import "./vars.27f08d5f.css";
import $7lS7h$table_vars_cssmodulejs from "./table_vars_css.mjs";
import "./table.11fc8462.css";
import $7lS7h$table_cssmodulejs from "./table_css.mjs";
import {TableViewLayout as $5fb43af69b290859$export$725d101278f5a47b} from "./TableViewLayout.mjs";
import $7lS7h$spectrumiconsuiArrowDownSmall from "@spectrum-icons/ui/ArrowDownSmall";
import {Checkbox as $7lS7h$Checkbox} from "@react-spectrum/checkbox";
import $7lS7h$spectrumiconsuiChevronDownMedium from "@spectrum-icons/ui/ChevronDownMedium";
import $7lS7h$spectrumiconsuiChevronLeftMedium from "@spectrum-icons/ui/ChevronLeftMedium";
import $7lS7h$spectrumiconsuiChevronRightMedium from "@spectrum-icons/ui/ChevronRightMedium";
import {useStyleProps as $7lS7h$useStyleProps, useDOMRef as $7lS7h$useDOMRef, classNames as $7lS7h$classNames, useFocusableRef as $7lS7h$useFocusableRef, useUnwrapDOMRef as $7lS7h$useUnwrapDOMRef} from "@react-spectrum/utils";
import {useFocusRing as $7lS7h$useFocusRing, FocusScope as $7lS7h$FocusScope, FocusRing as $7lS7h$FocusRing} from "@react-aria/focus";
import {getInteractionModality as $7lS7h$getInteractionModality, usePress as $7lS7h$usePress, useHover as $7lS7h$useHover, isFocusVisible as $7lS7h$isFocusVisible} from "@react-aria/interactions";
import {mergeProps as $7lS7h$mergeProps, useLoadMore as $7lS7h$useLoadMore, scrollIntoView as $7lS7h$scrollIntoView, scrollIntoViewport as $7lS7h$scrollIntoViewport, isAndroid as $7lS7h$isAndroid} from "@react-aria/utils";
import {MenuTrigger as $7lS7h$MenuTrigger, Menu as $7lS7h$Menu, Item as $7lS7h$Item} from "@react-spectrum/menu";
import {useVirtualizerState as $7lS7h$useVirtualizerState} from "@react-stately/virtualizer";
import {setScrollLeft as $7lS7h$setScrollLeft, ScrollView as $7lS7h$ScrollView, layoutInfoToStyle as $7lS7h$layoutInfoToStyle, VirtualizerItem as $7lS7h$VirtualizerItem} from "@react-aria/virtualizer";
import $7lS7h$spectrumiconsuiListGripper from "@spectrum-icons/ui/ListGripper";
import {ListKeyboardDelegate as $7lS7h$ListKeyboardDelegate} from "@react-aria/selection";
import {ProgressCircle as $7lS7h$ProgressCircle} from "@react-spectrum/progress";
import $7lS7h$react, {useContext as $7lS7h$useContext, useRef as $7lS7h$useRef, useEffect as $7lS7h$useEffect, useState as $7lS7h$useState, useMemo as $7lS7h$useMemo, useCallback as $7lS7h$useCallback} from "react";
import {useTableColumnResizeState as $7lS7h$useTableColumnResizeState} from "@react-stately/table";
import {TooltipTrigger as $7lS7h$TooltipTrigger, Tooltip as $7lS7h$Tooltip} from "@react-spectrum/tooltip";
import {useButton as $7lS7h$useButton} from "@react-aria/button";
import {useLocale as $7lS7h$useLocale, useLocalizedStringFormatter as $7lS7h$useLocalizedStringFormatter} from "@react-aria/i18n";
import {useProviderProps as $7lS7h$useProviderProps, useProvider as $7lS7h$useProvider} from "@react-spectrum/provider";
import {useTable as $7lS7h$useTable, useTableRowGroup as $7lS7h$useTableRowGroup, useTableColumnHeader as $7lS7h$useTableColumnHeader, useTableSelectAllCheckbox as $7lS7h$useTableSelectAllCheckbox, useTableRow as $7lS7h$useTableRow, useTableHeaderRow as $7lS7h$useTableHeaderRow, useTableCell as $7lS7h$useTableCell, useTableSelectionCheckbox as $7lS7h$useTableSelectionCheckbox} from "@react-aria/table";
import {VisuallyHidden as $7lS7h$VisuallyHidden, useVisuallyHidden as $7lS7h$useVisuallyHidden} from "@react-aria/visually-hidden";


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 































const $bd013581c0a4b065$var$DEFAULT_HEADER_HEIGHT = {
    medium: 34,
    large: 40
};
const $bd013581c0a4b065$var$DEFAULT_HIDE_HEADER_CELL_WIDTH = {
    medium: 38,
    large: 46
};
const $bd013581c0a4b065$var$ROW_HEIGHTS = {
    compact: {
        medium: 32,
        large: 40
    },
    regular: {
        medium: 40,
        large: 50
    },
    spacious: {
        medium: 48,
        large: 60
    }
};
const $bd013581c0a4b065$var$SELECTION_CELL_DEFAULT_WIDTH = {
    medium: 38,
    large: 48
};
const $bd013581c0a4b065$var$DRAG_BUTTON_CELL_DEFAULT_WIDTH = {
    medium: 16,
    large: 20
};
const $bd013581c0a4b065$var$LEVEL_OFFSET_WIDTH = {
    medium: 16,
    large: 20
};
const $bd013581c0a4b065$export$93e4b0b2cc49b648 = /*#__PURE__*/ (0, $7lS7h$react).createContext(null);
function $bd013581c0a4b065$export$3cb274deb6c2d854() {
    return (0, $7lS7h$useContext)($bd013581c0a4b065$export$93e4b0b2cc49b648);
}
const $bd013581c0a4b065$export$d288a7dd40372bc = /*#__PURE__*/ (0, $7lS7h$react).createContext(null);
function $bd013581c0a4b065$export$3f8f74b6bfd2c5df() {
    return (0, $7lS7h$useContext)($bd013581c0a4b065$export$d288a7dd40372bc);
}
function $bd013581c0a4b065$var$TableViewBase(props, ref) {
    var _dropState_target, _dragAndDropHooks_isVirtualDragging, _dragAndDropHooks_isVirtualDragging1;
    props = (0, $7lS7h$useProviderProps)(props);
    let { isQuiet: isQuiet, onAction: onAction, onResizeStart: propsOnResizeStart, onResizeEnd: propsOnResizeEnd, dragAndDropHooks: dragAndDropHooks, state: state } = props;
    let isTableDraggable = !!(dragAndDropHooks === null || dragAndDropHooks === void 0 ? void 0 : dragAndDropHooks.useDraggableCollectionState);
    let isTableDroppable = !!(dragAndDropHooks === null || dragAndDropHooks === void 0 ? void 0 : dragAndDropHooks.useDroppableCollectionState);
    let dragHooksProvided = (0, $7lS7h$useRef)(isTableDraggable);
    let dropHooksProvided = (0, $7lS7h$useRef)(isTableDroppable);
    (0, $7lS7h$useEffect)(()=>{
        if (dragHooksProvided.current !== isTableDraggable) console.warn('Drag hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.');
        if (dropHooksProvided.current !== isTableDroppable) console.warn('Drop hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.');
        if ('expandedKeys' in state && (isTableDraggable || isTableDroppable)) console.warn('Drag and drop is not yet fully supported with expandable rows and may produce unexpected results.');
    }, [
        isTableDraggable,
        isTableDroppable,
        state
    ]);
    let { styleProps: styleProps } = (0, $7lS7h$useStyleProps)(props);
    let { scale: scale } = (0, $7lS7h$useProvider)();
    // Starts when the user selects resize from the menu, ends when resizing ends
    // used to control the visibility of the resizer Nubbin
    let [isInResizeMode, setIsInResizeMode] = (0, $7lS7h$useState)(false);
    // Starts when the resizer is actually moved
    // entering resizing/exiting resizing doesn't trigger a render
    // with table layout, so we need to track it here
    let [, setIsResizing] = (0, $7lS7h$useState)(false);
    let domRef = (0, $7lS7h$useDOMRef)(ref);
    let headerRef = (0, $7lS7h$useRef)(null);
    let bodyRef = (0, $7lS7h$useRef)(null);
    let density = props.density || 'regular';
    let layout = (0, $7lS7h$useMemo)(()=>new (0, $5fb43af69b290859$export$725d101278f5a47b)({
            // If props.rowHeight is auto, then use estimated heights based on scale, otherwise use fixed heights.
            rowHeight: props.overflowMode === 'wrap' ? undefined : $bd013581c0a4b065$var$ROW_HEIGHTS[density][scale],
            estimatedRowHeight: props.overflowMode === 'wrap' ? $bd013581c0a4b065$var$ROW_HEIGHTS[density][scale] : undefined,
            headingHeight: props.overflowMode === 'wrap' ? undefined : $bd013581c0a4b065$var$DEFAULT_HEADER_HEIGHT[scale],
            estimatedHeadingHeight: props.overflowMode === 'wrap' ? $bd013581c0a4b065$var$DEFAULT_HEADER_HEIGHT[scale] : undefined
        }), // don't recompute when state.collection changes, only used for initial value
    [
        props.overflowMode,
        scale,
        density
    ]);
    let dragState = null;
    let preview = (0, $7lS7h$useRef)(null);
    if (isTableDraggable && dragAndDropHooks) {
        dragState = dragAndDropHooks.useDraggableCollectionState({
            collection: state.collection,
            selectionManager: state.selectionManager,
            preview: preview
        });
        dragAndDropHooks.useDraggableCollection({}, dragState, domRef);
    }
    let DragPreview = dragAndDropHooks === null || dragAndDropHooks === void 0 ? void 0 : dragAndDropHooks.DragPreview;
    let dropState = null;
    let droppableCollection = null;
    let isRootDropTarget = false;
    if (isTableDroppable && dragAndDropHooks) {
        dropState = dragAndDropHooks.useDroppableCollectionState({
            collection: state.collection,
            selectionManager: state.selectionManager
        });
        droppableCollection = dragAndDropHooks.useDroppableCollection({
            keyboardDelegate: new (0, $7lS7h$ListKeyboardDelegate)({
                collection: state.collection,
                disabledKeys: state.selectionManager.disabledKeys,
                ref: domRef,
                layoutDelegate: layout
            }),
            dropTargetDelegate: layout
        }, dropState, domRef);
        isRootDropTarget = dropState.isDropTarget({
            type: 'root'
        });
    }
    let { gridProps: gridProps } = (0, $7lS7h$useTable)({
        ...props,
        isVirtualized: true,
        layoutDelegate: layout,
        onRowAction: onAction,
        scrollRef: bodyRef
    }, state, domRef);
    let [headerMenuOpen, setHeaderMenuOpen] = (0, $7lS7h$useState)(false);
    let [headerRowHovered, setHeaderRowHovered] = (0, $7lS7h$useState)(false);
    // This overrides collection view's renderWrapper to support DOM hierarchy.
    let renderWrapper = (0, $7lS7h$useCallback)((parent, reusableView, children, renderChildren)=>{
        var _parent_layoutInfo;
        if (reusableView.viewType === 'rowgroup') return /*#__PURE__*/ (0, $7lS7h$react).createElement($bd013581c0a4b065$var$TableRowGroup, {
            key: reusableView.key,
            layoutInfo: reusableView.layoutInfo,
            parent: (_parent_layoutInfo = parent === null || parent === void 0 ? void 0 : parent.layoutInfo) !== null && _parent_layoutInfo !== void 0 ? _parent_layoutInfo : null,
            // Override the default role="rowgroup" with role="presentation",
            // in favor or adding role="rowgroup" to the ScrollView with
            // ref={bodyRef} in the TableVirtualizer below.
            role: "presentation"
        }, renderChildren(children));
        var _parent_layoutInfo1;
        if (reusableView.viewType === 'header') return /*#__PURE__*/ (0, $7lS7h$react).createElement($bd013581c0a4b065$var$TableHeader, {
            key: reusableView.key,
            layoutInfo: reusableView.layoutInfo,
            parent: (_parent_layoutInfo1 = parent === null || parent === void 0 ? void 0 : parent.layoutInfo) !== null && _parent_layoutInfo1 !== void 0 ? _parent_layoutInfo1 : null
        }, renderChildren(children));
        var _parent_layoutInfo2;
        if (reusableView.viewType === 'row') return /*#__PURE__*/ (0, $7lS7h$react).createElement($bd013581c0a4b065$var$TableRow, {
            key: reusableView.key,
            item: reusableView.content,
            layoutInfo: reusableView.layoutInfo,
            parent: (_parent_layoutInfo2 = parent === null || parent === void 0 ? void 0 : parent.layoutInfo) !== null && _parent_layoutInfo2 !== void 0 ? _parent_layoutInfo2 : null
        }, renderChildren(children));
        var _parent_layoutInfo3;
        if (reusableView.viewType === 'headerrow') return /*#__PURE__*/ (0, $7lS7h$react).createElement($bd013581c0a4b065$var$TableHeaderRow, {
            onHoverChange: setHeaderRowHovered,
            key: reusableView.key,
            layoutInfo: reusableView.layoutInfo,
            parent: (_parent_layoutInfo3 = parent === null || parent === void 0 ? void 0 : parent.layoutInfo) !== null && _parent_layoutInfo3 !== void 0 ? _parent_layoutInfo3 : null,
            item: reusableView.content
        }, renderChildren(children));
        return /*#__PURE__*/ (0, $7lS7h$react).createElement($bd013581c0a4b065$var$TableCellWrapper, {
            key: reusableView.key,
            layoutInfo: reusableView.layoutInfo,
            virtualizer: reusableView.virtualizer,
            parent: parent
        }, reusableView.rendered);
    }, []);
    let renderView = (0, $7lS7h$useCallback)((type, item)=>{
        switch(type){
            case 'header':
            case 'rowgroup':
            case 'section':
            case 'row':
            case 'headerrow':
                return null;
            case 'cell':
                if (item.props.isSelectionCell) return /*#__PURE__*/ (0, $7lS7h$react).createElement($bd013581c0a4b065$var$TableCheckboxCell, {
                    cell: item
                });
                if (item.props.isDragButtonCell) return /*#__PURE__*/ (0, $7lS7h$react).createElement($bd013581c0a4b065$var$TableDragCell, {
                    cell: item
                });
                return /*#__PURE__*/ (0, $7lS7h$react).createElement($bd013581c0a4b065$var$TableCell, {
                    cell: item
                });
            case 'placeholder':
                // TODO: move to react-aria?
                return /*#__PURE__*/ (0, $7lS7h$react).createElement("div", {
                    role: "gridcell",
                    "aria-colindex": item.index + 1,
                    "aria-colspan": item.colspan != null && item.colspan > 1 ? item.colspan : undefined
                });
            case 'column':
                if (item.props.isSelectionCell) return /*#__PURE__*/ (0, $7lS7h$react).createElement($bd013581c0a4b065$var$TableSelectAllCell, {
                    column: item
                });
                if (item.props.isDragButtonCell) return /*#__PURE__*/ (0, $7lS7h$react).createElement($bd013581c0a4b065$var$TableDragHeaderCell, {
                    column: item
                });
                // TODO: consider this case, what if we have hidden headers and a empty table
                if (item.props.hideHeader) return /*#__PURE__*/ (0, $7lS7h$react).createElement((0, $7lS7h$TooltipTrigger), {
                    placement: "top",
                    trigger: "focus"
                }, /*#__PURE__*/ (0, $7lS7h$react).createElement($bd013581c0a4b065$var$TableColumnHeader, {
                    column: item
                }), /*#__PURE__*/ (0, $7lS7h$react).createElement((0, $7lS7h$Tooltip), {
                    placement: "top"
                }, item.rendered));
                if (item.props.allowsResizing && !item.hasChildNodes) return /*#__PURE__*/ (0, $7lS7h$react).createElement($bd013581c0a4b065$var$ResizableTableColumnHeader, {
                    column: item
                });
                return /*#__PURE__*/ (0, $7lS7h$react).createElement($bd013581c0a4b065$var$TableColumnHeader, {
                    column: item
                });
            case 'loader':
                return /*#__PURE__*/ (0, $7lS7h$react).createElement($bd013581c0a4b065$var$LoadingState, null);
            case 'empty':
                return /*#__PURE__*/ (0, $7lS7h$react).createElement($bd013581c0a4b065$var$EmptyState, null);
        }
        return null;
    }, []);
    let [isVerticalScrollbarVisible, setVerticalScollbarVisible] = (0, $7lS7h$useState)(false);
    let [isHorizontalScrollbarVisible, setHorizontalScollbarVisible] = (0, $7lS7h$useState)(false);
    let viewport = (0, $7lS7h$useRef)({
        x: 0,
        y: 0,
        width: 0,
        height: 0
    });
    let onVisibleRectChange = (0, $7lS7h$useCallback)((e)=>{
        if (viewport.current.width === e.width && viewport.current.height === e.height) return;
        viewport.current = e;
        if (bodyRef.current) {
            setVerticalScollbarVisible(bodyRef.current.clientWidth + 2 < bodyRef.current.offsetWidth);
            setHorizontalScollbarVisible(bodyRef.current.clientHeight + 2 < bodyRef.current.offsetHeight);
        }
    }, []);
    let { isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, $7lS7h$useFocusRing)();
    let isEmpty = state.collection.size === 0;
    let onFocusedResizer = ()=>{
        if (bodyRef.current && headerRef.current) bodyRef.current.scrollLeft = headerRef.current.scrollLeft;
    };
    let onResizeStart = (0, $7lS7h$useCallback)((widths)=>{
        setIsResizing(true);
        propsOnResizeStart === null || propsOnResizeStart === void 0 ? void 0 : propsOnResizeStart(widths);
    }, [
        setIsResizing,
        propsOnResizeStart
    ]);
    let onResizeEnd = (0, $7lS7h$useCallback)((widths)=>{
        setIsInResizeMode(false);
        setIsResizing(false);
        propsOnResizeEnd === null || propsOnResizeEnd === void 0 ? void 0 : propsOnResizeEnd(widths);
    }, [
        propsOnResizeEnd,
        setIsInResizeMode,
        setIsResizing
    ]);
    let focusedKey = state.selectionManager.focusedKey;
    let dropTargetKey = null;
    if ((dropState === null || dropState === void 0 ? void 0 : (_dropState_target = dropState.target) === null || _dropState_target === void 0 ? void 0 : _dropState_target.type) === 'item') {
        dropTargetKey = dropState.target.key;
        if (dropState.target.dropPosition === 'before' && dropTargetKey !== state.collection.getFirstKey()) // Normalize to the "after" drop position since we only render those in the DOM.
        // The exception to this is for the first row in the table, where we also render the "before" position.
        dropTargetKey = state.collection.getKeyBefore(dropTargetKey);
    }
    let persistedKeys = (0, $7lS7h$useMemo)(()=>{
        return new Set([
            focusedKey,
            dropTargetKey
        ].filter((k)=>k !== null));
    }, [
        focusedKey,
        dropTargetKey
    ]);
    let mergedProps = (0, $7lS7h$mergeProps)(isTableDroppable ? droppableCollection === null || droppableCollection === void 0 ? void 0 : droppableCollection.collectionProps : null, gridProps, focusProps);
    if (dragAndDropHooks === null || dragAndDropHooks === void 0 ? void 0 : (_dragAndDropHooks_isVirtualDragging = dragAndDropHooks.isVirtualDragging) === null || _dragAndDropHooks_isVirtualDragging === void 0 ? void 0 : _dragAndDropHooks_isVirtualDragging.call(dragAndDropHooks)) mergedProps.tabIndex = undefined;
    return /*#__PURE__*/ (0, $7lS7h$react).createElement($bd013581c0a4b065$export$93e4b0b2cc49b648.Provider, {
        value: {
            state: state,
            dragState: dragState,
            dropState: dropState,
            dragAndDropHooks: dragAndDropHooks,
            isTableDraggable: isTableDraggable,
            isTableDroppable: isTableDroppable,
            layout: layout,
            onResizeStart: onResizeStart,
            onResize: props.onResize,
            onResizeEnd: onResizeEnd,
            headerRowHovered: headerRowHovered,
            isInResizeMode: isInResizeMode,
            setIsInResizeMode: setIsInResizeMode,
            isEmpty: isEmpty,
            onFocusedResizer: onFocusedResizer,
            headerMenuOpen: headerMenuOpen,
            setHeaderMenuOpen: setHeaderMenuOpen,
            renderEmptyState: props.renderEmptyState
        }
    }, /*#__PURE__*/ (0, $7lS7h$react).createElement($bd013581c0a4b065$var$TableVirtualizer, {
        ...mergedProps,
        ...styleProps,
        className: (0, $7lS7h$classNames)((0, ($parcel$interopDefault($7lS7h$table_vars_cssmodulejs))), 'spectrum-Table', `spectrum-Table--${density}`, {
            'spectrum-Table--quiet': isQuiet,
            'spectrum-Table--wrap': props.overflowMode === 'wrap',
            'spectrum-Table--loadingMore': state.collection.body.props.loadingState === 'loadingMore',
            'spectrum-Table--isVerticalScrollbarVisible': isVerticalScrollbarVisible,
            'spectrum-Table--isHorizontalScrollbarVisible': isHorizontalScrollbarVisible
        }, (0, $7lS7h$classNames)((0, ($parcel$interopDefault($7lS7h$table_cssmodulejs))), 'react-spectrum-Table'), styleProps.className),
        tableState: state,
        layout: layout,
        collection: state.collection,
        persistedKeys: persistedKeys,
        renderView: renderView,
        renderWrapper: renderWrapper,
        onVisibleRectChange: onVisibleRectChange,
        domRef: domRef,
        headerRef: headerRef,
        bodyRef: bodyRef,
        isFocusVisible: isFocusVisible,
        isVirtualDragging: (dragAndDropHooks === null || dragAndDropHooks === void 0 ? void 0 : (_dragAndDropHooks_isVirtualDragging1 = dragAndDropHooks.isVirtualDragging) === null || _dragAndDropHooks_isVirtualDragging1 === void 0 ? void 0 : _dragAndDropHooks_isVirtualDragging1.call(dragAndDropHooks)) || false,
        isRootDropTarget: isRootDropTarget
    }), DragPreview && isTableDraggable && dragAndDropHooks && dragState && /*#__PURE__*/ (0, $7lS7h$react).createElement(DragPreview, {
        ref: preview
    }, ()=>{
        if (dragState.draggedKey == null) return null;
        if (dragAndDropHooks.renderPreview) return dragAndDropHooks.renderPreview(dragState.draggingKeys, dragState.draggedKey);
        let itemCount = dragState.draggingKeys.size;
        let maxWidth = bodyRef.current.getBoundingClientRect().width;
        let height = $bd013581c0a4b065$var$ROW_HEIGHTS[density][scale];
        let itemText = state.collection.getTextValue(dragState.draggedKey);
        return /*#__PURE__*/ (0, $7lS7h$react).createElement((0, $daa6ead3d9d3506a$export$905ab40ac2179daa), {
            itemText: itemText,
            itemCount: itemCount,
            height: height,
            maxWidth: maxWidth
        });
    }));
}
// This is a custom Virtualizer that also has a header that syncs its scroll position with the body.
function $bd013581c0a4b065$var$TableVirtualizer(props) {
    var _layout_getLayoutInfo;
    let { tableState: tableState, layout: layout, collection: collection, persistedKeys: persistedKeys, renderView: renderView, renderWrapper: renderWrapper, domRef: domRef, bodyRef: bodyRef, headerRef: headerRef, onVisibleRectChange: onVisibleRectChangeProp, isFocusVisible: isFocusVisible, isVirtualDragging: isVirtualDragging, isRootDropTarget: isRootDropTarget, ...otherProps } = props;
    let { direction: direction } = (0, $7lS7h$useLocale)();
    let loadingState = collection.body.props.loadingState;
    let isLoading = loadingState === 'loading' || loadingState === 'loadingMore';
    let onLoadMore = collection.body.props.onLoadMore;
    let [tableWidth, setTableWidth] = (0, $7lS7h$useState)(0);
    let { scale: scale } = (0, $7lS7h$useProvider)();
    const getDefaultWidth = (0, $7lS7h$useCallback)(({ props: { hideHeader: hideHeader, isSelectionCell: isSelectionCell, showDivider: showDivider, isDragButtonCell: isDragButtonCell } })=>{
        if (hideHeader) {
            let width = $bd013581c0a4b065$var$DEFAULT_HIDE_HEADER_CELL_WIDTH[scale];
            return showDivider ? width + 1 : width;
        } else if (isSelectionCell) return $bd013581c0a4b065$var$SELECTION_CELL_DEFAULT_WIDTH[scale];
        else if (isDragButtonCell) return $bd013581c0a4b065$var$DRAG_BUTTON_CELL_DEFAULT_WIDTH[scale];
    }, [
        scale
    ]);
    const getDefaultMinWidth = (0, $7lS7h$useCallback)(({ props: { hideHeader: hideHeader, isSelectionCell: isSelectionCell, showDivider: showDivider, isDragButtonCell: isDragButtonCell } })=>{
        if (hideHeader) {
            let width = $bd013581c0a4b065$var$DEFAULT_HIDE_HEADER_CELL_WIDTH[scale];
            return showDivider ? width + 1 : width;
        } else if (isSelectionCell) return $bd013581c0a4b065$var$SELECTION_CELL_DEFAULT_WIDTH[scale];
        else if (isDragButtonCell) return $bd013581c0a4b065$var$DRAG_BUTTON_CELL_DEFAULT_WIDTH[scale];
        return 75;
    }, [
        scale
    ]);
    let columnResizeState = (0, $7lS7h$useTableColumnResizeState)({
        tableWidth: tableWidth,
        getDefaultWidth: getDefaultWidth,
        getDefaultMinWidth: getDefaultMinWidth
    }, tableState);
    let state = (0, $7lS7h$useVirtualizerState)({
        layout: layout,
        collection: collection,
        renderView: renderView,
        onVisibleRectChange (rect) {
            if (bodyRef.current) {
                bodyRef.current.scrollTop = rect.y;
                (0, $7lS7h$setScrollLeft)(bodyRef.current, direction, rect.x);
            }
        },
        persistedKeys: persistedKeys,
        layoutOptions: (0, $7lS7h$useMemo)(()=>({
                columnWidths: columnResizeState.columnWidths
            }), [
            columnResizeState.columnWidths
        ])
    });
    (0, $7lS7h$useLoadMore)({
        isLoading: isLoading,
        onLoadMore: onLoadMore,
        scrollOffset: 1
    }, bodyRef);
    let onVisibleRectChange = (0, $7lS7h$useCallback)((rect)=>{
        state.setVisibleRect(rect);
    }, [
        state
    ]);
    let onVisibleRectChangeMemo = (0, $7lS7h$useCallback)((rect)=>{
        setTableWidth(rect.width);
        onVisibleRectChange(rect);
        onVisibleRectChangeProp(rect);
    }, [
        onVisibleRectChange,
        onVisibleRectChangeProp
    ]);
    // this effect runs whenever the contentSize changes, it doesn't matter what the content size is
    // only that it changes in a resize, and when that happens, we want to sync the body to the
    // header scroll position
    (0, $7lS7h$useEffect)(()=>{
        var _headerRef_current;
        if ((0, $7lS7h$getInteractionModality)() === 'keyboard' && ((_headerRef_current = headerRef.current) === null || _headerRef_current === void 0 ? void 0 : _headerRef_current.contains(document.activeElement)) && bodyRef.current) {
            (0, $7lS7h$scrollIntoView)(headerRef.current, document.activeElement);
            (0, $7lS7h$scrollIntoViewport)(document.activeElement, {
                containingElement: domRef.current
            });
            bodyRef.current.scrollLeft = headerRef.current.scrollLeft;
        }
    }, [
        state.contentSize,
        headerRef,
        bodyRef,
        domRef
    ]);
    let headerHeight = ((_layout_getLayoutInfo = layout.getLayoutInfo('header')) === null || _layout_getLayoutInfo === void 0 ? void 0 : _layout_getLayoutInfo.rect.height) || 0;
    // Sync the scroll position from the table body to the header container.
    let onScroll = (0, $7lS7h$useCallback)(()=>{
        if (headerRef.current && bodyRef.current) headerRef.current.scrollLeft = bodyRef.current.scrollLeft;
    }, [
        bodyRef,
        headerRef
    ]);
    let resizerPosition = columnResizeState.resizingColumn != null ? layout.getLayoutInfo(columnResizeState.resizingColumn).rect.maxX - 2 : 0;
    let resizerAtEdge = resizerPosition > Math.max(state.virtualizer.contentSize.width, state.virtualizer.visibleRect.width) - 3;
    // this should be fine, every movement of the resizer causes a rerender
    // scrolling can cause it to lag for a moment, but it's always updated
    let resizerInVisibleRegion = resizerPosition < state.virtualizer.visibleRect.maxX;
    let shouldHardCornerResizeCorner = resizerAtEdge && resizerInVisibleRegion;
    // minimize re-render caused on Resizers by memoing this
    let resizingColumnWidth = columnResizeState.resizingColumn != null ? columnResizeState.getColumnWidth(columnResizeState.resizingColumn) : 0;
    let resizingColumn = (0, $7lS7h$useMemo)(()=>({
            width: resizingColumnWidth,
            key: columnResizeState.resizingColumn
        }), [
        resizingColumnWidth,
        columnResizeState.resizingColumn
    ]);
    if (isVirtualDragging) otherProps.tabIndex = undefined;
    let firstColumn = collection.columns[0];
    let scrollPadding = 0;
    if (firstColumn.props.isSelectionCell || firstColumn.props.isDragButtonCell) scrollPadding = columnResizeState.getColumnWidth(firstColumn.key);
    let visibleViews = $bd013581c0a4b065$var$renderChildren(null, state.visibleViews, renderWrapper);
    return /*#__PURE__*/ (0, $7lS7h$react).createElement($bd013581c0a4b065$export$d288a7dd40372bc.Provider, {
        value: resizingColumn
    }, /*#__PURE__*/ (0, $7lS7h$react).createElement((0, $7lS7h$FocusScope), null, /*#__PURE__*/ (0, $7lS7h$react).createElement("div", {
        ...otherProps,
        ref: domRef
    }, /*#__PURE__*/ (0, $7lS7h$react).createElement("div", {
        role: "presentation",
        className: (0, $7lS7h$classNames)((0, ($parcel$interopDefault($7lS7h$table_vars_cssmodulejs))), 'spectrum-Table-headWrapper'),
        style: {
            height: headerHeight,
            overflow: 'hidden',
            position: 'relative',
            willChange: state.isScrolling ? 'scroll-position' : undefined,
            scrollPaddingInlineStart: scrollPadding
        },
        ref: headerRef
    }, /*#__PURE__*/ (0, $7lS7h$react).createElement((0, $fc695d2eafc2b351$export$b517d84d4ad20b24).Provider, {
        value: columnResizeState
    }, visibleViews[0])), /*#__PURE__*/ (0, $7lS7h$react).createElement((0, $7lS7h$ScrollView), {
        className: (0, $7lS7h$classNames)((0, ($parcel$interopDefault($7lS7h$table_vars_cssmodulejs))), 'spectrum-Table-body', {
            'focus-ring': isFocusVisible,
            'spectrum-Table-body--resizerAtTableEdge': shouldHardCornerResizeCorner
        }, (0, $7lS7h$classNames)((0, ($parcel$interopDefault($7lS7h$table_cssmodulejs))), 'react-spectrum-Table-body', {
            'react-spectrum-Table-body--dropTarget': !!isRootDropTarget
        })),
        //  Firefox and Chrome make generic elements using CSS overflow 'scroll' or 'auto' tabbable,
        //  including them within the accessibility tree, which breaks the table structure in Firefox.
        //  Using tabIndex={-1} prevents the ScrollView from being tabbable, and using role="rowgroup"
        //  here and role="presentation" on the table body content fixes the table structure.
        role: "rowgroup",
        tabIndex: isVirtualDragging ? undefined : -1,
        style: {
            flex: 1,
            scrollPaddingInlineStart: scrollPadding
        },
        innerStyle: {
            overflow: 'visible'
        },
        ref: bodyRef,
        contentSize: state.contentSize,
        onVisibleRectChange: onVisibleRectChangeMemo,
        onScrollStart: state.startScrolling,
        onScrollEnd: state.endScrolling,
        onScroll: onScroll
    }, visibleViews[1], /*#__PURE__*/ (0, $7lS7h$react).createElement("div", {
        className: (0, $7lS7h$classNames)((0, ($parcel$interopDefault($7lS7h$table_vars_cssmodulejs))), 'spectrum-Table-bodyResizeIndicator'),
        style: {
            [direction === 'ltr' ? 'left' : 'right']: `${resizerPosition}px`,
            height: `${Math.max(state.virtualizer.contentSize.height, state.virtualizer.visibleRect.height)}px`,
            display: columnResizeState.resizingColumn ? 'block' : 'none'
        }
    })))));
}
function $bd013581c0a4b065$var$renderChildren(parent, views, renderWrapper) {
    return views.map((view)=>{
        return renderWrapper(parent, view, view.children ? Array.from(view.children) : [], (childViews)=>$bd013581c0a4b065$var$renderChildren(view, childViews, renderWrapper));
    });
}
function $bd013581c0a4b065$var$useStyle(layoutInfo, parent) {
    let { direction: direction } = (0, $7lS7h$useLocale)();
    let style = (0, $7lS7h$layoutInfoToStyle)(layoutInfo, direction, parent);
    if (style.overflow === 'hidden') style.overflow = 'visible'; // needed to support position: sticky
    return style;
}
function $bd013581c0a4b065$var$TableHeader({ children: children, layoutInfo: layoutInfo, parent: parent, ...otherProps }) {
    let { rowGroupProps: rowGroupProps } = (0, $7lS7h$useTableRowGroup)();
    let style = $bd013581c0a4b065$var$useStyle(layoutInfo, parent);
    return /*#__PURE__*/ (0, $7lS7h$react).createElement("div", {
        ...rowGroupProps,
        ...otherProps,
        className: (0, $7lS7h$classNames)((0, ($parcel$interopDefault($7lS7h$table_vars_cssmodulejs))), 'spectrum-Table-head'),
        style: style
    }, children);
}
function $bd013581c0a4b065$var$TableColumnHeader(props) {
    var _state_sortDescriptor, _state_sortDescriptor1, _state_sortDescriptor2, _state_sortDescriptor3;
    let { column: column } = props;
    let ref = (0, $7lS7h$useRef)(null);
    let { state: state, isEmpty: isEmpty } = $bd013581c0a4b065$export$3cb274deb6c2d854();
    let { pressProps: pressProps, isPressed: isPressed } = (0, $7lS7h$usePress)({
        isDisabled: isEmpty
    });
    let columnProps = column.props;
    (0, $7lS7h$useEffect)(()=>{
        if (column.hasChildNodes && columnProps.allowsResizing) console.warn(`Column key: ${column.key}. Columns with child columns don't allow resizing.`);
    }, [
        column.hasChildNodes,
        column.key,
        columnProps.allowsResizing
    ]);
    let { columnHeaderProps: columnHeaderProps } = (0, $7lS7h$useTableColumnHeader)({
        node: column,
        isVirtualized: true
    }, state, ref);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $7lS7h$useHover)({
        ...props,
        isDisabled: isEmpty
    });
    const allProps = [
        columnHeaderProps,
        hoverProps,
        pressProps
    ];
    return /*#__PURE__*/ (0, $7lS7h$react).createElement((0, $7lS7h$FocusRing), {
        focusRingClass: (0, $7lS7h$classNames)((0, ($parcel$interopDefault($7lS7h$table_vars_cssmodulejs))), 'focus-ring')
    }, /*#__PURE__*/ (0, $7lS7h$react).createElement("div", {
        ...(0, $7lS7h$mergeProps)(...allProps),
        ref: ref,
        className: (0, $7lS7h$classNames)((0, ($parcel$interopDefault($7lS7h$table_vars_cssmodulejs))), 'spectrum-Table-headCell', {
            'is-active': isPressed,
            'is-sortable': columnProps.allowsSorting,
            'is-sorted-desc': ((_state_sortDescriptor = state.sortDescriptor) === null || _state_sortDescriptor === void 0 ? void 0 : _state_sortDescriptor.column) === column.key && ((_state_sortDescriptor1 = state.sortDescriptor) === null || _state_sortDescriptor1 === void 0 ? void 0 : _state_sortDescriptor1.direction) === 'descending',
            'is-sorted-asc': ((_state_sortDescriptor2 = state.sortDescriptor) === null || _state_sortDescriptor2 === void 0 ? void 0 : _state_sortDescriptor2.column) === column.key && ((_state_sortDescriptor3 = state.sortDescriptor) === null || _state_sortDescriptor3 === void 0 ? void 0 : _state_sortDescriptor3.direction) === 'ascending',
            'is-hovered': isHovered,
            'spectrum-Table-cell--hideHeader': columnProps.hideHeader
        }, (0, $7lS7h$classNames)((0, ($parcel$interopDefault($7lS7h$table_cssmodulejs))), 'react-spectrum-Table-cell', {
            'react-spectrum-Table-cell--alignCenter': columnProps.align === 'center' || column.colspan > 1,
            'react-spectrum-Table-cell--alignEnd': columnProps.align === 'end'
        }))
    }, columnProps.allowsSorting && /*#__PURE__*/ (0, $7lS7h$react).createElement((0, $7lS7h$spectrumiconsuiArrowDownSmall), {
        UNSAFE_className: (0, $7lS7h$classNames)((0, ($parcel$interopDefault($7lS7h$table_vars_cssmodulejs))), 'spectrum-Table-sortedIcon')
    }), columnProps.hideHeader ? /*#__PURE__*/ (0, $7lS7h$react).createElement((0, $7lS7h$VisuallyHidden), null, column.rendered) : /*#__PURE__*/ (0, $7lS7h$react).createElement("div", {
        className: (0, $7lS7h$classNames)((0, ($parcel$interopDefault($7lS7h$table_vars_cssmodulejs))), 'spectrum-Table-headCellContents')
    }, column.rendered)));
}
let $bd013581c0a4b065$var$ForwardTableColumnHeaderButton = (props, ref)=>{
    let { focusProps: focusProps, alignment: alignment, ...otherProps } = props;
    let { isEmpty: isEmpty } = $bd013581c0a4b065$export$3cb274deb6c2d854();
    let domRef = (0, $7lS7h$useFocusableRef)(ref);
    let { buttonProps: buttonProps } = (0, $7lS7h$useButton)({
        ...otherProps,
        elementType: 'div',
        isDisabled: isEmpty
    }, domRef);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $7lS7h$useHover)({
        ...otherProps,
        isDisabled: isEmpty
    });
    return /*#__PURE__*/ (0, $7lS7h$react).createElement("div", {
        className: (0, $7lS7h$classNames)((0, ($parcel$interopDefault($7lS7h$table_vars_cssmodulejs))), 'spectrum-Table-headCellContents', {
            'is-hovered': isHovered
        }),
        ...hoverProps
    }, /*#__PURE__*/ (0, $7lS7h$react).createElement("div", {
        className: (0, $7lS7h$classNames)((0, ($parcel$interopDefault($7lS7h$table_vars_cssmodulejs))), 'spectrum-Table-headCellButton', {
            'spectrum-Table-headCellButton--alignStart': alignment === 'start',
            'spectrum-Table-headCellButton--alignCenter': alignment === 'center',
            'spectrum-Table-headCellButton--alignEnd': alignment === 'end'
        }),
        ...(0, $7lS7h$mergeProps)(buttonProps, focusProps),
        ref: domRef
    }, props.children));
};
let $bd013581c0a4b065$var$TableColumnHeaderButton = /*#__PURE__*/ (0, $7lS7h$react).forwardRef($bd013581c0a4b065$var$ForwardTableColumnHeaderButton);
function $bd013581c0a4b065$var$ResizableTableColumnHeader(props) {
    var _column_props, _state_sortDescriptor, _state_sortDescriptor1, _state_sortDescriptor2, _state_sortDescriptor3;
    let { column: column } = props;
    let ref = (0, $7lS7h$useRef)(null);
    let triggerRef = (0, $7lS7h$useRef)(null);
    let resizingRef = (0, $7lS7h$useRef)(null);
    let { state: state, onResizeStart: onResizeStart, onResize: onResize, onResizeEnd: onResizeEnd, headerRowHovered: headerRowHovered, setIsInResizeMode: setIsInResizeMode, isEmpty: isEmpty, isInResizeMode: isInResizeMode, headerMenuOpen: headerMenuOpen, setHeaderMenuOpen: setHeaderMenuOpen } = $bd013581c0a4b065$export$3cb274deb6c2d854();
    let columnResizeState = (0, $7lS7h$useContext)((0, $fc695d2eafc2b351$export$b517d84d4ad20b24));
    let stringFormatter = (0, $7lS7h$useLocalizedStringFormatter)((0, ($parcel$interopDefault($7lS7h$intlStringsmodulejs))), '@react-spectrum/table');
    let { pressProps: pressProps, isPressed: isPressed } = (0, $7lS7h$usePress)({
        isDisabled: isEmpty
    });
    let { columnHeaderProps: columnHeaderProps } = (0, $7lS7h$useTableColumnHeader)({
        node: column,
        isVirtualized: true
    }, state, ref);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $7lS7h$useHover)({
        ...props,
        isDisabled: isEmpty || headerMenuOpen
    });
    const allProps = [
        columnHeaderProps,
        pressProps,
        hoverProps
    ];
    let columnProps = column.props;
    let { isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, $7lS7h$useFocusRing)();
    const onMenuSelect = (key)=>{
        switch(key){
            case 'sort-asc':
                state.sort(column.key, 'ascending');
                break;
            case 'sort-desc':
                state.sort(column.key, 'descending');
                break;
            case 'resize':
                columnResizeState.startResize(column.key);
                setIsInResizeMode(true);
                state.setKeyboardNavigationDisabled(true);
                break;
        }
    };
    let allowsSorting = (_column_props = column.props) === null || _column_props === void 0 ? void 0 : _column_props.allowsSorting;
    let items = (0, $7lS7h$useMemo)(()=>{
        let options = [];
        if (allowsSorting) {
            options.push({
                label: stringFormatter.format('sortAscending'),
                id: 'sort-asc'
            });
            options.push({
                label: stringFormatter.format('sortDescending'),
                id: 'sort-desc'
            });
        }
        options.push({
            label: stringFormatter.format('resizeColumn'),
            id: 'resize'
        });
        return options;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        allowsSorting
    ]);
    let resizingColumn = columnResizeState.resizingColumn;
    let showResizer = !isEmpty && (headerRowHovered && (0, $7lS7h$getInteractionModality)() !== 'keyboard' || resizingColumn != null);
    let alignment = 'start';
    let menuAlign = 'start';
    if (columnProps.align === 'center' || column.colspan > 1) alignment = 'center';
    else if (columnProps.align === 'end') {
        alignment = 'end';
        menuAlign = 'end';
    }
    return /*#__PURE__*/ (0, $7lS7h$react).createElement((0, $7lS7h$FocusRing), {
        focusRingClass: (0, $7lS7h$classNames)((0, ($parcel$interopDefault($7lS7h$table_vars_cssmodulejs))), 'focus-ring')
    }, /*#__PURE__*/ (0, $7lS7h$react).createElement("div", {
        ...(0, $7lS7h$mergeProps)(...allProps),
        ref: ref,
        className: (0, $7lS7h$classNames)((0, ($parcel$interopDefault($7lS7h$table_vars_cssmodulejs))), 'spectrum-Table-headCell', {
            'is-active': isPressed,
            'is-resizable': columnProps.allowsResizing,
            'is-sortable': columnProps.allowsSorting,
            'is-sorted-desc': ((_state_sortDescriptor = state.sortDescriptor) === null || _state_sortDescriptor === void 0 ? void 0 : _state_sortDescriptor.column) === column.key && ((_state_sortDescriptor1 = state.sortDescriptor) === null || _state_sortDescriptor1 === void 0 ? void 0 : _state_sortDescriptor1.direction) === 'descending',
            'is-sorted-asc': ((_state_sortDescriptor2 = state.sortDescriptor) === null || _state_sortDescriptor2 === void 0 ? void 0 : _state_sortDescriptor2.column) === column.key && ((_state_sortDescriptor3 = state.sortDescriptor) === null || _state_sortDescriptor3 === void 0 ? void 0 : _state_sortDescriptor3.direction) === 'ascending',
            'is-hovered': isHovered,
            'focus-ring': isFocusVisible,
            'spectrum-Table-cell--hideHeader': columnProps.hideHeader
        }, (0, $7lS7h$classNames)((0, ($parcel$interopDefault($7lS7h$table_cssmodulejs))), 'react-spectrum-Table-cell', {
            'react-spectrum-Table-cell--alignCenter': alignment === 'center',
            'react-spectrum-Table-cell--alignEnd': alignment === 'end'
        }))
    }, /*#__PURE__*/ (0, $7lS7h$react).createElement((0, $7lS7h$MenuTrigger), {
        onOpenChange: setHeaderMenuOpen,
        align: menuAlign
    }, /*#__PURE__*/ (0, $7lS7h$react).createElement($bd013581c0a4b065$var$TableColumnHeaderButton, {
        alignment: alignment,
        ref: triggerRef,
        focusProps: focusProps
    }, columnProps.allowsSorting && /*#__PURE__*/ (0, $7lS7h$react).createElement((0, $7lS7h$spectrumiconsuiArrowDownSmall), {
        UNSAFE_className: (0, $7lS7h$classNames)((0, ($parcel$interopDefault($7lS7h$table_vars_cssmodulejs))), 'spectrum-Table-sortedIcon')
    }), columnProps.hideHeader ? /*#__PURE__*/ (0, $7lS7h$react).createElement((0, $7lS7h$VisuallyHidden), null, column.rendered) : /*#__PURE__*/ (0, $7lS7h$react).createElement("div", {
        className: (0, $7lS7h$classNames)((0, ($parcel$interopDefault($7lS7h$table_vars_cssmodulejs))), 'spectrum-Table-headerCellText')
    }, column.rendered), columnProps.allowsResizing && /*#__PURE__*/ (0, $7lS7h$react).createElement((0, $7lS7h$spectrumiconsuiChevronDownMedium), {
        UNSAFE_className: (0, $7lS7h$classNames)((0, ($parcel$interopDefault($7lS7h$table_vars_cssmodulejs))), 'spectrum-Table-menuChevron')
    })), /*#__PURE__*/ (0, $7lS7h$react).createElement((0, $7lS7h$Menu), {
        onAction: onMenuSelect,
        minWidth: "size-2000",
        items: items
    }, (item)=>/*#__PURE__*/ (0, $7lS7h$react).createElement((0, $7lS7h$Item), null, item.label))), /*#__PURE__*/ (0, $7lS7h$react).createElement((0, $fc695d2eafc2b351$export$48a76196cafe3b93), {
        ref: resizingRef,
        column: column,
        showResizer: showResizer,
        onResizeStart: onResizeStart,
        onResize: onResize,
        onResizeEnd: onResizeEnd,
        triggerRef: (0, $7lS7h$useUnwrapDOMRef)(triggerRef)
    }), /*#__PURE__*/ (0, $7lS7h$react).createElement("div", {
        "aria-hidden": true,
        className: (0, $7lS7h$classNames)((0, ($parcel$interopDefault($7lS7h$table_vars_cssmodulejs))), 'spectrum-Table-colResizeIndicator', {
            'spectrum-Table-colResizeIndicator--visible': resizingColumn != null,
            'spectrum-Table-colResizeIndicator--resizing': resizingColumn === column.key
        })
    }, /*#__PURE__*/ (0, $7lS7h$react).createElement("div", {
        className: (0, $7lS7h$classNames)((0, ($parcel$interopDefault($7lS7h$table_vars_cssmodulejs))), 'spectrum-Table-colResizeNubbin', {
            'spectrum-Table-colResizeNubbin--visible': isInResizeMode && resizingColumn === column.key
        })
    }, /*#__PURE__*/ (0, $7lS7h$react).createElement((0, $cb7d341e8868d81d$export$d9658cdf8c86807), null)))));
}
function $bd013581c0a4b065$var$TableSelectAllCell({ column: column }) {
    let ref = (0, $7lS7h$useRef)(null);
    let { state: state } = $bd013581c0a4b065$export$3cb274deb6c2d854();
    let isSingleSelectionMode = state.selectionManager.selectionMode === 'single';
    let { columnHeaderProps: columnHeaderProps } = (0, $7lS7h$useTableColumnHeader)({
        node: column,
        isVirtualized: true
    }, state, ref);
    let { checkboxProps: checkboxProps } = (0, $7lS7h$useTableSelectAllCheckbox)(state);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $7lS7h$useHover)({});
    return /*#__PURE__*/ (0, $7lS7h$react).createElement((0, $7lS7h$FocusRing), {
        focusRingClass: (0, $7lS7h$classNames)((0, ($parcel$interopDefault($7lS7h$table_vars_cssmodulejs))), 'focus-ring')
    }, /*#__PURE__*/ (0, $7lS7h$react).createElement("div", {
        ...(0, $7lS7h$mergeProps)(columnHeaderProps, hoverProps),
        ref: ref,
        className: (0, $7lS7h$classNames)((0, ($parcel$interopDefault($7lS7h$table_vars_cssmodulejs))), 'spectrum-Table-headCell', 'spectrum-Table-checkboxCell', {
            'is-hovered': isHovered
        })
    }, /*
            In single selection mode, the checkbox will be hidden.
            So to avoid leaving a column header with no accessible content,
            we use a VisuallyHidden component to include the aria-label from the checkbox,
            which for single selection will be "Select."
          */ isSingleSelectionMode && /*#__PURE__*/ (0, $7lS7h$react).createElement((0, $7lS7h$VisuallyHidden), null, checkboxProps['aria-label']), /*#__PURE__*/ (0, $7lS7h$react).createElement((0, $7lS7h$Checkbox), {
        ...checkboxProps,
        isEmphasized: true,
        UNSAFE_style: isSingleSelectionMode ? {
            visibility: 'hidden'
        } : undefined,
        UNSAFE_className: (0, $7lS7h$classNames)((0, ($parcel$interopDefault($7lS7h$table_vars_cssmodulejs))), 'spectrum-Table-checkbox')
    })));
}
function $bd013581c0a4b065$var$TableDragHeaderCell({ column: column }) {
    let ref = (0, $7lS7h$useRef)(null);
    let { state: state } = $bd013581c0a4b065$export$3cb274deb6c2d854();
    let { columnHeaderProps: columnHeaderProps } = (0, $7lS7h$useTableColumnHeader)({
        node: column,
        isVirtualized: true
    }, state, ref);
    let stringFormatter = (0, $7lS7h$useLocalizedStringFormatter)((0, ($parcel$interopDefault($7lS7h$intlStringsmodulejs))), '@react-spectrum/table');
    return /*#__PURE__*/ (0, $7lS7h$react).createElement((0, $7lS7h$FocusRing), {
        focusRingClass: (0, $7lS7h$classNames)((0, ($parcel$interopDefault($7lS7h$table_vars_cssmodulejs))), 'focus-ring')
    }, /*#__PURE__*/ (0, $7lS7h$react).createElement("div", {
        ...columnHeaderProps,
        ref: ref,
        className: (0, $7lS7h$classNames)((0, ($parcel$interopDefault($7lS7h$table_vars_cssmodulejs))), 'spectrum-Table-headCell', (0, $7lS7h$classNames)((0, ($parcel$interopDefault($7lS7h$table_cssmodulejs))), 'react-spectrum-Table-headCell', 'react-spectrum-Table-dragButtonHeadCell'))
    }, /*#__PURE__*/ (0, $7lS7h$react).createElement((0, $7lS7h$VisuallyHidden), null, stringFormatter.format('drag'))));
}
function $bd013581c0a4b065$var$TableRowGroup({ children: children, layoutInfo: layoutInfo, parent: parent, ...otherProps }) {
    let { rowGroupProps: rowGroupProps } = (0, $7lS7h$useTableRowGroup)();
    let { isTableDroppable: isTableDroppable } = (0, $7lS7h$useContext)($bd013581c0a4b065$export$93e4b0b2cc49b648);
    let style = $bd013581c0a4b065$var$useStyle(layoutInfo, parent);
    return /*#__PURE__*/ (0, $7lS7h$react).createElement("div", {
        ...rowGroupProps,
        style: style,
        ...otherProps
    }, isTableDroppable && /*#__PURE__*/ (0, $7lS7h$react).createElement((0, $4e6fc36ba71ba405$export$d30a7814cfd4033e), {
        key: "root"
    }), children);
}
function $bd013581c0a4b065$var$DragButton() {
    let { dragButtonProps: dragButtonProps, dragButtonRef: dragButtonRef, isFocusVisibleWithin: isFocusVisibleWithin } = $bd013581c0a4b065$export$cd7c5802f9e21187();
    let { visuallyHiddenProps: visuallyHiddenProps } = (0, $7lS7h$useVisuallyHidden)();
    return /*#__PURE__*/ (0, $7lS7h$react).createElement((0, $7lS7h$FocusRing), {
        focusRingClass: (0, $7lS7h$classNames)((0, ($parcel$interopDefault($7lS7h$table_cssmodulejs))), 'focus-ring')
    }, /*#__PURE__*/ (0, $7lS7h$react).createElement("div", {
        ...dragButtonProps,
        className: (0, $7lS7h$classNames)((0, ($parcel$interopDefault($7lS7h$table_cssmodulejs))), 'react-spectrum-Table-dragButton'),
        style: !isFocusVisibleWithin ? {
            ...visuallyHiddenProps.style
        } : {},
        ref: dragButtonRef,
        draggable: "true"
    }, /*#__PURE__*/ (0, $7lS7h$react).createElement((0, $7lS7h$spectrumiconsuiListGripper), {
        UNSAFE_className: (0, $7lS7h$classNames)((0, ($parcel$interopDefault($7lS7h$table_cssmodulejs))))
    })));
}
const $bd013581c0a4b065$var$TableRowContext = /*#__PURE__*/ (0, $7lS7h$react).createContext(null);
function $bd013581c0a4b065$export$cd7c5802f9e21187() {
    return (0, $7lS7h$useContext)($bd013581c0a4b065$var$TableRowContext);
}
function $bd013581c0a4b065$var$TableRow({ item: item, children: children, layoutInfo: layoutInfo, parent: parent, ...otherProps }) {
    var _state_collection_rows_find, _layout_getContentSize, _layout_virtualizer, // Remove tab index from list row if performing a screenreader drag. This prevents TalkBack from focusing the row,
    // allowing for single swipe navigation between row drop indicator
    _dragAndDropHooks_isVirtualDragging;
    let ref = (0, $7lS7h$useRef)(null);
    let { state: state, layout: layout, dragAndDropHooks: dragAndDropHooks, isTableDraggable: isTableDraggable, isTableDroppable: isTableDroppable, dragState: dragState, dropState: dropState } = $bd013581c0a4b065$export$3cb274deb6c2d854();
    let isSelected = state.selectionManager.isSelected(item.key);
    let { rowProps: rowProps, hasAction: hasAction, allowsSelection: allowsSelection } = (0, $7lS7h$useTableRow)({
        node: item,
        isVirtualized: true,
        shouldSelectOnPressUp: isTableDraggable
    }, state, ref);
    let isDisabled = state.selectionManager.isDisabled(item.key);
    let isInteractive = !isDisabled && (hasAction || allowsSelection || isTableDraggable);
    let { pressProps: pressProps, isPressed: isPressed } = (0, $7lS7h$usePress)({
        isDisabled: !isInteractive
    });
    // The row should show the focus background style when any cell inside it is focused.
    // If the row itself is focused, then it should have a blue focus indicator on the left.
    let { isFocusVisible: isFocusVisibleWithin, focusProps: focusWithinProps } = (0, $7lS7h$useFocusRing)({
        within: true
    });
    let { isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, $7lS7h$useFocusRing)();
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $7lS7h$useHover)({
        isDisabled: !isInteractive
    });
    let isFirstRow = ((_state_collection_rows_find = state.collection.rows.find((row)=>row.level === 1)) === null || _state_collection_rows_find === void 0 ? void 0 : _state_collection_rows_find.key) === item.key;
    let isLastRow = item.nextKey == null;
    // Figure out if the TableView content is equal or greater in height to the container. If so, we'll need to round the bottom
    // border corners of the last row when selected.
    let isFlushWithContainerBottom = false;
    var _layout_virtualizer_visibleRect_height;
    if (isLastRow) {
        if (((_layout_getContentSize = layout.getContentSize()) === null || _layout_getContentSize === void 0 ? void 0 : _layout_getContentSize.height) >= ((_layout_virtualizer_visibleRect_height = (_layout_virtualizer = layout.virtualizer) === null || _layout_virtualizer === void 0 ? void 0 : _layout_virtualizer.visibleRect.height) !== null && _layout_virtualizer_visibleRect_height !== void 0 ? _layout_virtualizer_visibleRect_height : 0)) isFlushWithContainerBottom = true;
    }
    let draggableItem = null;
    if (isTableDraggable && dragAndDropHooks && dragState) {
        draggableItem = dragAndDropHooks.useDraggableItem({
            key: item.key,
            hasDragButton: true
        }, dragState);
        if (isDisabled) draggableItem = null;
    }
    let isDropTarget = false;
    let dropIndicator = null;
    let dropIndicatorRef = (0, $7lS7h$useRef)(null);
    if (isTableDroppable && dragAndDropHooks && dropState) {
        let target = {
            type: 'item',
            key: item.key,
            dropPosition: 'on'
        };
        isDropTarget = dropState.isDropTarget(target);
        dropIndicator = dragAndDropHooks.useDropIndicator({
            target: target
        }, dropState, dropIndicatorRef);
    }
    let dragButtonRef = (0, $7lS7h$react).useRef(null);
    let { buttonProps: dragButtonProps } = (0, $7lS7h$useButton)({
        ...draggableItem === null || draggableItem === void 0 ? void 0 : draggableItem.dragButtonProps,
        elementType: 'div'
    }, dragButtonRef);
    let style = $bd013581c0a4b065$var$useStyle(layoutInfo, parent);
    let props = (0, $7lS7h$mergeProps)(rowProps, otherProps, {
        style: style
    }, focusWithinProps, focusProps, hoverProps, pressProps, draggableItem === null || draggableItem === void 0 ? void 0 : draggableItem.dragProps, (dragAndDropHooks === null || dragAndDropHooks === void 0 ? void 0 : (_dragAndDropHooks_isVirtualDragging = dragAndDropHooks.isVirtualDragging) === null || _dragAndDropHooks_isVirtualDragging === void 0 ? void 0 : _dragAndDropHooks_isVirtualDragging.call(dragAndDropHooks)) ? {
        tabIndex: null
    } : null);
    let { visuallyHiddenProps: visuallyHiddenProps } = (0, $7lS7h$useVisuallyHidden)();
    return /*#__PURE__*/ (0, $7lS7h$react).createElement($bd013581c0a4b065$var$TableRowContext.Provider, {
        value: {
            dragButtonProps: dragButtonProps,
            dragButtonRef: dragButtonRef,
            isFocusVisibleWithin: isFocusVisibleWithin
        }
    }, isTableDroppable && isFirstRow && /*#__PURE__*/ (0, $7lS7h$react).createElement((0, $7ee9a922ee4e8032$export$2c0bab5914a9d088), {
        rowProps: props,
        key: `${item.key}-before`,
        target: {
            key: item.key,
            type: 'item',
            dropPosition: 'before'
        }
    }), isTableDroppable && !(dropIndicator === null || dropIndicator === void 0 ? void 0 : dropIndicator.isHidden) && /*#__PURE__*/ (0, $7lS7h$react).createElement("div", {
        role: "row",
        ...visuallyHiddenProps
    }, /*#__PURE__*/ (0, $7lS7h$react).createElement("div", {
        role: "gridcell"
    }, /*#__PURE__*/ (0, $7lS7h$react).createElement("div", {
        role: "button",
        ...dropIndicator === null || dropIndicator === void 0 ? void 0 : dropIndicator.dropIndicatorProps,
        ref: dropIndicatorRef
    }))), /*#__PURE__*/ (0, $7lS7h$react).createElement("div", {
        ...props,
        ref: ref,
        className: (0, $7lS7h$classNames)((0, ($parcel$interopDefault($7lS7h$table_vars_cssmodulejs))), 'spectrum-Table-row', {
            'is-active': isPressed,
            'is-selected': isSelected,
            'spectrum-Table-row--highlightSelection': state.selectionManager.selectionBehavior === 'replace',
            'is-next-selected': item.nextKey != null && state.selectionManager.isSelected(item.nextKey),
            'is-focused': isFocusVisibleWithin,
            'focus-ring': isFocusVisible,
            'is-hovered': isHovered,
            'is-disabled': isDisabled,
            'spectrum-Table-row--firstRow': isFirstRow,
            'spectrum-Table-row--lastRow': isLastRow,
            'spectrum-Table-row--isFlushBottom': isFlushWithContainerBottom
        }, (0, $7lS7h$classNames)((0, ($parcel$interopDefault($7lS7h$table_cssmodulejs))), 'react-spectrum-Table-row', {
            'react-spectrum-Table-row--dropTarget': isDropTarget
        }))
    }, children), isTableDroppable && /*#__PURE__*/ (0, $7lS7h$react).createElement((0, $7ee9a922ee4e8032$export$2c0bab5914a9d088), {
        rowProps: props,
        key: `${item.key}-after`,
        target: {
            key: item.key,
            type: 'item',
            dropPosition: 'after'
        }
    }));
}
function $bd013581c0a4b065$var$TableHeaderRow({ item: item, children: children, layoutInfo: layoutInfo, parent: parent, ...props }) {
    let { state: state, headerMenuOpen: headerMenuOpen } = $bd013581c0a4b065$export$3cb274deb6c2d854();
    let ref = (0, $7lS7h$useRef)(null);
    let { rowProps: rowProps } = (0, $7lS7h$useTableHeaderRow)({
        node: item,
        isVirtualized: true
    }, state, ref);
    let { hoverProps: hoverProps } = (0, $7lS7h$useHover)({
        ...props,
        isDisabled: headerMenuOpen
    });
    let style = $bd013581c0a4b065$var$useStyle(layoutInfo, parent);
    return /*#__PURE__*/ (0, $7lS7h$react).createElement("div", {
        ...(0, $7lS7h$mergeProps)(rowProps, hoverProps),
        ref: ref,
        style: style
    }, children);
}
function $bd013581c0a4b065$var$TableDragCell({ cell: cell }) {
    let ref = (0, $7lS7h$useRef)(null);
    let { state: state, isTableDraggable: isTableDraggable } = $bd013581c0a4b065$export$3cb274deb6c2d854();
    let isDisabled = state.selectionManager.isDisabled(cell.parentKey);
    let { gridCellProps: gridCellProps } = (0, $7lS7h$useTableCell)({
        node: cell,
        isVirtualized: true
    }, state, ref);
    return /*#__PURE__*/ (0, $7lS7h$react).createElement((0, $7lS7h$FocusRing), {
        focusRingClass: (0, $7lS7h$classNames)((0, ($parcel$interopDefault($7lS7h$table_vars_cssmodulejs))), 'focus-ring')
    }, /*#__PURE__*/ (0, $7lS7h$react).createElement("div", {
        ...gridCellProps,
        ref: ref,
        className: (0, $7lS7h$classNames)((0, ($parcel$interopDefault($7lS7h$table_vars_cssmodulejs))), 'spectrum-Table-cell', {
            'is-disabled': isDisabled
        }, (0, $7lS7h$classNames)((0, ($parcel$interopDefault($7lS7h$table_cssmodulejs))), 'react-spectrum-Table-cell', 'react-spectrum-Table-dragButtonCell'))
    }, isTableDraggable && !isDisabled && /*#__PURE__*/ (0, $7lS7h$react).createElement($bd013581c0a4b065$var$DragButton, null)));
}
function $bd013581c0a4b065$var$TableCheckboxCell({ cell: cell }) {
    let ref = (0, $7lS7h$useRef)(null);
    let { state: state } = $bd013581c0a4b065$export$3cb274deb6c2d854();
    // The TableCheckbox should always render its disabled status if the row is disabled, regardless of disabledBehavior,
    // but the cell itself should not render its disabled styles if disabledBehavior="selection" because the row might have actions on it.
    let isSelectionDisabled = state.disabledKeys.has(cell.parentKey);
    let isDisabled = state.selectionManager.isDisabled(cell.parentKey);
    let { gridCellProps: gridCellProps } = (0, $7lS7h$useTableCell)({
        node: cell,
        isVirtualized: true
    }, state, ref);
    let { checkboxProps: checkboxProps } = (0, $7lS7h$useTableSelectionCheckbox)({
        key: cell.parentKey
    }, state);
    return /*#__PURE__*/ (0, $7lS7h$react).createElement((0, $7lS7h$FocusRing), {
        focusRingClass: (0, $7lS7h$classNames)((0, ($parcel$interopDefault($7lS7h$table_vars_cssmodulejs))), 'focus-ring')
    }, /*#__PURE__*/ (0, $7lS7h$react).createElement("div", {
        ...gridCellProps,
        ref: ref,
        className: (0, $7lS7h$classNames)((0, ($parcel$interopDefault($7lS7h$table_vars_cssmodulejs))), 'spectrum-Table-cell', 'spectrum-Table-checkboxCell', {
            'is-disabled': isDisabled
        }, (0, $7lS7h$classNames)((0, ($parcel$interopDefault($7lS7h$table_cssmodulejs))), 'react-spectrum-Table-cell'))
    }, state.selectionManager.selectionMode !== 'none' && /*#__PURE__*/ (0, $7lS7h$react).createElement((0, $7lS7h$Checkbox), {
        ...checkboxProps,
        isEmphasized: true,
        isDisabled: isSelectionDisabled,
        UNSAFE_className: (0, $7lS7h$classNames)((0, ($parcel$interopDefault($7lS7h$table_vars_cssmodulejs))), 'spectrum-Table-checkbox')
    })));
}
function $bd013581c0a4b065$var$TableCell({ cell: cell }) {
    let { scale: scale } = (0, $7lS7h$useProvider)();
    let { state: state } = $bd013581c0a4b065$export$3cb274deb6c2d854();
    let isExpandableTable = 'expandedKeys' in state;
    let ref = (0, $7lS7h$useRef)(null);
    let columnProps = cell.column.props;
    let isDisabled = state.selectionManager.isDisabled(cell.parentKey);
    let { gridCellProps: gridCellProps } = (0, $7lS7h$useTableCell)({
        node: cell,
        isVirtualized: true
    }, state, ref);
    let { id: id, ...otherGridCellProps } = gridCellProps;
    let isFirstRowHeaderCell = state.collection.rowHeaderColumnKeys.keys().next().value === cell.column.key;
    let isRowExpandable = false;
    let showExpandCollapseButton = false;
    let levelOffset = 0;
    if ('expandedKeys' in state) {
        var _state_keyMap_get_props_UNSTABLE_childItems, _state_keyMap_get, _state_keyMap_get_props_children, _state_keyMap_get_props, _state_keyMap_get1;
        isRowExpandable = ((_state_keyMap_get = state.keyMap.get(cell.parentKey)) === null || _state_keyMap_get === void 0 ? void 0 : (_state_keyMap_get_props_UNSTABLE_childItems = _state_keyMap_get.props.UNSTABLE_childItems) === null || _state_keyMap_get_props_UNSTABLE_childItems === void 0 ? void 0 : _state_keyMap_get_props_UNSTABLE_childItems.length) > 0 || ((_state_keyMap_get1 = state.keyMap.get(cell.parentKey)) === null || _state_keyMap_get1 === void 0 ? void 0 : (_state_keyMap_get_props = _state_keyMap_get1.props) === null || _state_keyMap_get_props === void 0 ? void 0 : (_state_keyMap_get_props_children = _state_keyMap_get_props.children) === null || _state_keyMap_get_props_children === void 0 ? void 0 : _state_keyMap_get_props_children.length) > state.userColumnCount;
        showExpandCollapseButton = isFirstRowHeaderCell && isRowExpandable;
        // Offset based on level, and add additional offset if there is no expand/collapse button on a row
        levelOffset = (cell.level - 2) * $bd013581c0a4b065$var$LEVEL_OFFSET_WIDTH[scale] + (!showExpandCollapseButton ? $bd013581c0a4b065$var$LEVEL_OFFSET_WIDTH[scale] * 2 : 0);
    }
    return /*#__PURE__*/ (0, $7lS7h$react).createElement((0, $7lS7h$FocusRing), {
        focusRingClass: (0, $7lS7h$classNames)((0, ($parcel$interopDefault($7lS7h$table_vars_cssmodulejs))), 'focus-ring')
    }, /*#__PURE__*/ (0, $7lS7h$react).createElement("div", {
        ...otherGridCellProps,
        "aria-labelledby": id,
        ref: ref,
        style: isExpandableTable && isFirstRowHeaderCell ? {
            paddingInlineStart: levelOffset
        } : {},
        className: (0, $7lS7h$classNames)((0, ($parcel$interopDefault($7lS7h$table_vars_cssmodulejs))), 'spectrum-Table-cell', {
            'spectrum-Table-cell--divider': columnProps.showDivider && cell.column.nextKey !== null,
            'spectrum-Table-cell--hideHeader': columnProps.hideHeader,
            'spectrum-Table-cell--hasExpandCollapseButton': showExpandCollapseButton,
            'is-disabled': isDisabled
        }, (0, $7lS7h$classNames)((0, ($parcel$interopDefault($7lS7h$table_cssmodulejs))), 'react-spectrum-Table-cell', {
            'react-spectrum-Table-cell--alignStart': columnProps.align === 'start',
            'react-spectrum-Table-cell--alignCenter': columnProps.align === 'center',
            'react-spectrum-Table-cell--alignEnd': columnProps.align === 'end'
        }))
    }, showExpandCollapseButton && /*#__PURE__*/ (0, $7lS7h$react).createElement($bd013581c0a4b065$var$ExpandableRowChevron, {
        cell: cell
    }), /*#__PURE__*/ (0, $7lS7h$react).createElement("span", {
        id: id,
        className: (0, $7lS7h$classNames)((0, ($parcel$interopDefault($7lS7h$table_vars_cssmodulejs))), 'spectrum-Table-cellContents')
    }, cell.rendered)));
}
function $bd013581c0a4b065$var$TableCellWrapper({ layoutInfo: layoutInfo, virtualizer: virtualizer, parent: parent, children: children }) {
    let { isTableDroppable: isTableDroppable, dropState: dropState } = (0, $7lS7h$useContext)($bd013581c0a4b065$export$93e4b0b2cc49b648);
    let isDropTarget = false;
    let isRootDroptarget = false;
    if (isTableDroppable && dropState) {
        if (parent.content) isDropTarget = dropState.isDropTarget({
            type: 'item',
            dropPosition: 'on',
            key: parent.content.key
        });
        isRootDroptarget = dropState.isDropTarget({
            type: 'root'
        });
    }
    return /*#__PURE__*/ (0, $7lS7h$react).createElement((0, $7lS7h$VirtualizerItem), {
        layoutInfo: layoutInfo,
        virtualizer: virtualizer,
        parent: parent === null || parent === void 0 ? void 0 : parent.layoutInfo,
        className: (0, $7lS7h$useMemo)(()=>(0, $7lS7h$classNames)((0, ($parcel$interopDefault($7lS7h$table_vars_cssmodulejs))), 'spectrum-Table-cellWrapper', (0, $7lS7h$classNames)((0, ($parcel$interopDefault($7lS7h$table_cssmodulejs))), {
                'react-spectrum-Table-cellWrapper': !layoutInfo.estimatedSize,
                'react-spectrum-Table-cellWrapper--dropTarget': isDropTarget || isRootDroptarget
            })), [
            layoutInfo.estimatedSize,
            isDropTarget,
            isRootDroptarget
        ])
    }, children);
}
function $bd013581c0a4b065$var$ExpandableRowChevron({ cell: cell }) {
    // TODO: move some/all of the chevron button setup into a separate hook?
    let { direction: direction } = (0, $7lS7h$useLocale)();
    let { state: state } = $bd013581c0a4b065$export$3cb274deb6c2d854();
    let expandButtonRef = (0, $7lS7h$useRef)(null);
    let stringFormatter = (0, $7lS7h$useLocalizedStringFormatter)((0, ($parcel$interopDefault($7lS7h$intlStringsmodulejs))), '@react-spectrum/table');
    let isExpanded;
    if ('expandedKeys' in state) isExpanded = state.expandedKeys === 'all' || state.expandedKeys.has(cell.parentKey);
    // Will need to keep the chevron as a button for iOS VO at all times since VO doesn't focus the cell. Also keep as button if cellAction is defined by the user in the future
    let { buttonProps: buttonProps } = (0, $7lS7h$useButton)({
        // Desktop and mobile both toggle expansion of a native expandable row on mouse/touch up
        onPress: ()=>{
            state.toggleKey(cell.parentKey);
            if (!(0, $7lS7h$isFocusVisible)()) {
                state.selectionManager.setFocused(true);
                state.selectionManager.setFocusedKey(cell.parentKey);
            }
        },
        elementType: 'span',
        'aria-label': isExpanded ? stringFormatter.format('collapse') : stringFormatter.format('expand')
    }, expandButtonRef);
    return /*#__PURE__*/ (0, $7lS7h$react).createElement("span", {
        ...buttonProps,
        ref: expandButtonRef,
        // Override tabindex so that grid keyboard nav skips over it. Needs -1 so android talkback can actually "focus" it
        tabIndex: (0, $7lS7h$isAndroid)() ? -1 : undefined,
        className: (0, $7lS7h$classNames)((0, ($parcel$interopDefault($7lS7h$table_vars_cssmodulejs))), 'spectrum-Table-expandButton', {
            'is-open': isExpanded
        })
    }, direction === 'ltr' ? /*#__PURE__*/ (0, $7lS7h$react).createElement((0, $7lS7h$spectrumiconsuiChevronRightMedium), null) : /*#__PURE__*/ (0, $7lS7h$react).createElement((0, $7lS7h$spectrumiconsuiChevronLeftMedium), null));
}
function $bd013581c0a4b065$var$LoadingState() {
    let { state: state } = (0, $7lS7h$useContext)($bd013581c0a4b065$export$93e4b0b2cc49b648);
    let stringFormatter = (0, $7lS7h$useLocalizedStringFormatter)((0, ($parcel$interopDefault($7lS7h$intlStringsmodulejs))), '@react-spectrum/table');
    return /*#__PURE__*/ (0, $7lS7h$react).createElement($bd013581c0a4b065$var$CenteredWrapper, null, /*#__PURE__*/ (0, $7lS7h$react).createElement((0, $7lS7h$ProgressCircle), {
        isIndeterminate: true,
        "aria-label": state.collection.size > 0 ? stringFormatter.format('loadingMore') : stringFormatter.format('loading')
    }));
}
function $bd013581c0a4b065$var$EmptyState() {
    let { renderEmptyState: renderEmptyState } = (0, $7lS7h$useContext)($bd013581c0a4b065$export$93e4b0b2cc49b648);
    let emptyState = renderEmptyState ? renderEmptyState() : null;
    if (emptyState == null) return null;
    return /*#__PURE__*/ (0, $7lS7h$react).createElement($bd013581c0a4b065$var$CenteredWrapper, null, emptyState);
}
function $bd013581c0a4b065$var$CenteredWrapper({ children: children }) {
    let { state: state } = $bd013581c0a4b065$export$3cb274deb6c2d854();
    let rowProps;
    if ('expandedKeys' in state) {
        let topLevelRowCount = [
            ...state.collection.body.childNodes
        ].length;
        rowProps = {
            'aria-level': 1,
            'aria-posinset': topLevelRowCount + 1,
            'aria-setsize': topLevelRowCount + 1
        };
    } else rowProps = {
        'aria-rowindex': state.collection.headerRows.length + state.collection.size + 1
    };
    return /*#__PURE__*/ (0, $7lS7h$react).createElement("div", {
        role: "row",
        ...rowProps,
        className: (0, $7lS7h$classNames)((0, ($parcel$interopDefault($7lS7h$table_cssmodulejs))), 'react-spectrum-Table-centeredWrapper')
    }, /*#__PURE__*/ (0, $7lS7h$react).createElement("div", {
        role: "rowheader",
        "aria-colspan": state.collection.columns.length
    }, children));
}
const $bd013581c0a4b065$export$517e02184d273d69 = /*#__PURE__*/ (0, $7lS7h$react).forwardRef($bd013581c0a4b065$var$TableViewBase);


export {$bd013581c0a4b065$export$93e4b0b2cc49b648 as TableContext, $bd013581c0a4b065$export$3cb274deb6c2d854 as useTableContext, $bd013581c0a4b065$export$d288a7dd40372bc as VirtualizerContext, $bd013581c0a4b065$export$3f8f74b6bfd2c5df as useVirtualizerContext, $bd013581c0a4b065$export$cd7c5802f9e21187 as useTableRowContext, $bd013581c0a4b065$export$517e02184d273d69 as TableViewBase};
//# sourceMappingURL=TableViewBase.module.js.map
