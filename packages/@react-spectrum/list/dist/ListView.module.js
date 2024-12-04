import $0a834ddbc989a3e3$export$2e2bcd8739ae039 from "./InsertionIndicator.module.js";
import $6w3ZV$intlStringsmodulejs from "./intlStrings.module.js";
import "./styles.ad343ab0.css";
import $6w3ZV$styles_cssmodulejs from "./styles_css.module.js";
import {ListViewItem as $d7c07ca2efc5ba02$export$c6bde0c04b033c0e} from "./ListViewItem.module.js";
import {ListViewLayout as $bc6cc67dd6240ebd$export$dab781655dfbb7d3} from "./ListViewLayout.module.js";
import $41a60729487a82d7$export$2e2bcd8739ae039 from "./RootDropIndicator.module.js";
import {DragPreview as $cd61e55c47e3c0f5$export$905ab40ac2179daa} from "./DragPreview.module.js";
import {useGridList as $6w3ZV$useGridList} from "@react-aria/gridlist";
import {useDOMRef as $6w3ZV$useDOMRef, useStyleProps as $6w3ZV$useStyleProps, classNames as $6w3ZV$classNames} from "@react-spectrum/utils";
import {useLayoutEffect as $6w3ZV$useLayoutEffect, mergeProps as $6w3ZV$mergeProps, filterDOMProps as $6w3ZV$filterDOMProps} from "@react-aria/utils";
import {FocusScope as $6w3ZV$FocusScope, FocusRing as $6w3ZV$FocusRing} from "@react-aria/focus";
import {ListKeyboardDelegate as $6w3ZV$ListKeyboardDelegate} from "@react-aria/selection";
import {useListState as $6w3ZV$useListState} from "@react-stately/list";
import {ProgressCircle as $6w3ZV$ProgressCircle} from "@react-spectrum/progress";
import $6w3ZV$react, {useMemo as $6w3ZV$useMemo, useRef as $6w3ZV$useRef, useEffect as $6w3ZV$useEffect, useState as $6w3ZV$useState, useCallback as $6w3ZV$useCallback, useContext as $6w3ZV$useContext} from "react";
import {useLocalizedStringFormatter as $6w3ZV$useLocalizedStringFormatter} from "@react-aria/i18n";
import {useProvider as $6w3ZV$useProvider} from "@react-spectrum/provider";
import {Virtualizer as $6w3ZV$Virtualizer} from "@react-aria/virtualizer";


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

















const $f85fb77f9d4cbc6c$export$870039b0abfe3de0 = /*#__PURE__*/ (0, $6w3ZV$react).createContext(null);
const $f85fb77f9d4cbc6c$var$ROW_HEIGHTS = {
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
function $f85fb77f9d4cbc6c$var$useListLayout(state, density, overflowMode) {
    let { scale: scale } = (0, $6w3ZV$useProvider)();
    let layout = (0, $6w3ZV$useMemo)(()=>new (0, $bc6cc67dd6240ebd$export$dab781655dfbb7d3)({
            estimatedRowHeight: $f85fb77f9d4cbc6c$var$ROW_HEIGHTS[density || 'regular'][scale]
        }), [
        scale,
        density,
        overflowMode
    ]);
    return layout;
}
const $f85fb77f9d4cbc6c$export$84d0dd190d551cd1 = /*#__PURE__*/ (0, $6w3ZV$react).forwardRef(function ListView(props, ref) {
    var _dropState_target;
    let { density: density = 'regular', loadingState: loadingState, onLoadMore: onLoadMore, isQuiet: isQuiet, overflowMode: overflowMode = 'truncate', onAction: onAction, dragAndDropHooks: dragAndDropHooks, renderEmptyState: renderEmptyState, ...otherProps } = props;
    let isListDraggable = !!(dragAndDropHooks === null || dragAndDropHooks === void 0 ? void 0 : dragAndDropHooks.useDraggableCollectionState);
    let isListDroppable = !!(dragAndDropHooks === null || dragAndDropHooks === void 0 ? void 0 : dragAndDropHooks.useDroppableCollectionState);
    let dragHooksProvided = (0, $6w3ZV$useRef)(isListDraggable);
    let dropHooksProvided = (0, $6w3ZV$useRef)(isListDroppable);
    (0, $6w3ZV$useEffect)(()=>{
        if (dragHooksProvided.current !== isListDraggable) console.warn('Drag hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.');
        if (dropHooksProvided.current !== isListDroppable) console.warn('Drop hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.');
    }, [
        isListDraggable,
        isListDroppable
    ]);
    let domRef = (0, $6w3ZV$useDOMRef)(ref);
    let state = (0, $6w3ZV$useListState)({
        ...props,
        selectionBehavior: props.selectionStyle === 'highlight' ? 'replace' : 'toggle'
    });
    let { collection: collection, selectionManager: selectionManager } = state;
    let isLoading = loadingState === 'loading' || loadingState === 'loadingMore';
    let { styleProps: styleProps } = (0, $6w3ZV$useStyleProps)(props);
    let dragState = null;
    let preview = (0, $6w3ZV$useRef)(null);
    if (isListDraggable && dragAndDropHooks) {
        dragState = dragAndDropHooks.useDraggableCollectionState({
            collection: collection,
            selectionManager: selectionManager,
            preview: preview
        });
        dragAndDropHooks.useDraggableCollection({}, dragState, domRef);
    }
    let layout = $f85fb77f9d4cbc6c$var$useListLayout(state, props.density || 'regular', overflowMode);
    let DragPreview = dragAndDropHooks === null || dragAndDropHooks === void 0 ? void 0 : dragAndDropHooks.DragPreview;
    let dropState = null;
    let droppableCollection = null;
    let isRootDropTarget = false;
    if (isListDroppable && dragAndDropHooks) {
        dropState = dragAndDropHooks.useDroppableCollectionState({
            collection: collection,
            selectionManager: selectionManager
        });
        droppableCollection = dragAndDropHooks.useDroppableCollection({
            keyboardDelegate: new (0, $6w3ZV$ListKeyboardDelegate)({
                collection: collection,
                disabledKeys: (dragState === null || dragState === void 0 ? void 0 : dragState.draggingKeys.size) ? undefined : selectionManager.disabledKeys,
                ref: domRef,
                layoutDelegate: layout
            }),
            dropTargetDelegate: layout
        }, dropState, domRef);
        isRootDropTarget = dropState.isDropTarget({
            type: 'root'
        });
    }
    let { gridProps: gridProps } = (0, $6w3ZV$useGridList)({
        ...props,
        isVirtualized: true,
        layoutDelegate: layout,
        onAction: onAction
    }, state, domRef);
    let focusedKey = selectionManager.focusedKey;
    let dropTargetKey = null;
    if ((dropState === null || dropState === void 0 ? void 0 : (_dropState_target = dropState.target) === null || _dropState_target === void 0 ? void 0 : _dropState_target.type) === 'item') {
        dropTargetKey = dropState.target.key;
        var _state_collection_getKeyAfter;
        if (dropState.target.dropPosition === 'after') // Normalize to the "before" drop position since we only render those in the DOM.
        dropTargetKey = (_state_collection_getKeyAfter = state.collection.getKeyAfter(dropTargetKey)) !== null && _state_collection_getKeyAfter !== void 0 ? _state_collection_getKeyAfter : dropTargetKey;
    }
    let persistedKeys = (0, $6w3ZV$useMemo)(()=>{
        return new Set([
            focusedKey,
            dropTargetKey
        ].filter((k)=>k !== null));
    }, [
        focusedKey,
        dropTargetKey
    ]);
    // wait for layout to get accurate measurements
    let [isVerticalScrollbarVisible, setVerticalScollbarVisible] = (0, $6w3ZV$useState)(false);
    let [isHorizontalScrollbarVisible, setHorizontalScollbarVisible] = (0, $6w3ZV$useState)(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0, $6w3ZV$useLayoutEffect)(()=>{
        if (domRef.current) {
            // 2 is the width of the border which is not part of the box size
            setVerticalScollbarVisible(domRef.current.clientWidth + 2 < domRef.current.offsetWidth);
            setHorizontalScollbarVisible(domRef.current.clientHeight + 2 < domRef.current.offsetHeight);
        }
    });
    let hasAnyChildren = (0, $6w3ZV$useMemo)(()=>[
            ...collection
        ].some((item)=>item.hasChildNodes), [
        collection
    ]);
    return /*#__PURE__*/ (0, $6w3ZV$react).createElement($f85fb77f9d4cbc6c$export$870039b0abfe3de0.Provider, {
        value: {
            state: state,
            dragState: dragState,
            dropState: dropState,
            dragAndDropHooks: dragAndDropHooks,
            onAction: onAction,
            isListDraggable: isListDraggable,
            isListDroppable: isListDroppable,
            layout: layout,
            loadingState: loadingState,
            renderEmptyState: renderEmptyState
        }
    }, /*#__PURE__*/ (0, $6w3ZV$react).createElement((0, $6w3ZV$FocusScope), null, /*#__PURE__*/ (0, $6w3ZV$react).createElement((0, $6w3ZV$FocusRing), {
        focusRingClass: (0, $6w3ZV$classNames)((0, ($parcel$interopDefault($6w3ZV$styles_cssmodulejs))), 'focus-ring')
    }, /*#__PURE__*/ (0, $6w3ZV$react).createElement((0, $6w3ZV$Virtualizer), {
        ...(0, $6w3ZV$mergeProps)(isListDroppable ? droppableCollection === null || droppableCollection === void 0 ? void 0 : droppableCollection.collectionProps : null, gridProps),
        ...(0, $6w3ZV$filterDOMProps)(otherProps),
        ...gridProps,
        ...styleProps,
        isLoading: isLoading,
        onLoadMore: onLoadMore,
        ref: domRef,
        persistedKeys: persistedKeys,
        scrollDirection: "vertical",
        className: (0, $6w3ZV$classNames)((0, ($parcel$interopDefault($6w3ZV$styles_cssmodulejs))), 'react-spectrum-ListView', `react-spectrum-ListView--${density}`, 'react-spectrum-ListView--emphasized', {
            'react-spectrum-ListView--quiet': isQuiet,
            'react-spectrum-ListView--loadingMore': loadingState === 'loadingMore',
            'react-spectrum-ListView--draggable': !!isListDraggable,
            'react-spectrum-ListView--dropTarget': !!isRootDropTarget,
            'react-spectrum-ListView--isVerticalScrollbarVisible': isVerticalScrollbarVisible,
            'react-spectrum-ListView--isHorizontalScrollbarVisible': isHorizontalScrollbarVisible,
            'react-spectrum-ListView--hasAnyChildren': hasAnyChildren,
            'react-spectrum-ListView--wrap': overflowMode === 'wrap'
        }, styleProps.className),
        layout: layout,
        layoutOptions: (0, $6w3ZV$useMemo)(()=>({
                isLoading: isLoading
            }), [
            isLoading
        ]),
        collection: collection
    }, (0, $6w3ZV$useCallback)((type, item)=>{
        if (type === 'item') return /*#__PURE__*/ (0, $6w3ZV$react).createElement($f85fb77f9d4cbc6c$var$Item, {
            item: item
        });
        else if (type === 'loader') return /*#__PURE__*/ (0, $6w3ZV$react).createElement($f85fb77f9d4cbc6c$var$LoadingView, null);
        else if (type === 'placeholder') return /*#__PURE__*/ (0, $6w3ZV$react).createElement($f85fb77f9d4cbc6c$var$EmptyState, null);
    }, [])))), DragPreview && isListDraggable && dragAndDropHooks && dragState && /*#__PURE__*/ (0, $6w3ZV$react).createElement(DragPreview, {
        ref: preview
    }, ()=>{
        var _layout_getLayoutInfo;
        if (dragState.draggedKey == null) return null;
        if (dragAndDropHooks.renderPreview) return dragAndDropHooks.renderPreview(dragState.draggingKeys, dragState.draggedKey);
        let item = state.collection.getItem(dragState.draggedKey);
        if (!item) return null;
        let itemCount = dragState.draggingKeys.size;
        var _layout_getLayoutInfo_rect_height;
        let itemHeight = (_layout_getLayoutInfo_rect_height = (_layout_getLayoutInfo = layout.getLayoutInfo(dragState.draggedKey)) === null || _layout_getLayoutInfo === void 0 ? void 0 : _layout_getLayoutInfo.rect.height) !== null && _layout_getLayoutInfo_rect_height !== void 0 ? _layout_getLayoutInfo_rect_height : 0;
        return /*#__PURE__*/ (0, $6w3ZV$react).createElement((0, $cd61e55c47e3c0f5$export$905ab40ac2179daa), {
            item: item,
            itemCount: itemCount,
            itemHeight: itemHeight,
            density: density
        });
    }));
});
function $f85fb77f9d4cbc6c$var$Item({ item: item }) {
    let { isListDroppable: isListDroppable, state: state, onAction: onAction } = (0, $6w3ZV$useContext)($f85fb77f9d4cbc6c$export$870039b0abfe3de0);
    return /*#__PURE__*/ (0, $6w3ZV$react).createElement((0, $6w3ZV$react).Fragment, null, isListDroppable && state.collection.getKeyBefore(item.key) == null && /*#__PURE__*/ (0, $6w3ZV$react).createElement((0, $41a60729487a82d7$export$2e2bcd8739ae039), {
        key: "root"
    }), isListDroppable && /*#__PURE__*/ (0, $6w3ZV$react).createElement((0, $0a834ddbc989a3e3$export$2e2bcd8739ae039), {
        key: `${item.key}-before`,
        target: {
            key: item.key,
            type: 'item',
            dropPosition: 'before'
        }
    }), /*#__PURE__*/ (0, $6w3ZV$react).createElement((0, $d7c07ca2efc5ba02$export$c6bde0c04b033c0e), {
        item: item,
        isEmphasized: true,
        hasActions: !!onAction
    }), isListDroppable && /*#__PURE__*/ (0, $6w3ZV$react).createElement((0, $0a834ddbc989a3e3$export$2e2bcd8739ae039), {
        key: `${item.key}-after`,
        target: {
            key: item.key,
            type: 'item',
            dropPosition: 'after'
        },
        isPresentationOnly: state.collection.getKeyAfter(item.key) != null
    }));
}
function $f85fb77f9d4cbc6c$var$LoadingView() {
    let { state: state } = (0, $6w3ZV$useContext)($f85fb77f9d4cbc6c$export$870039b0abfe3de0);
    let stringFormatter = (0, $6w3ZV$useLocalizedStringFormatter)((0, ($parcel$interopDefault($6w3ZV$intlStringsmodulejs))), '@react-spectrum/list');
    return /*#__PURE__*/ (0, $6w3ZV$react).createElement($f85fb77f9d4cbc6c$var$CenteredWrapper, null, /*#__PURE__*/ (0, $6w3ZV$react).createElement((0, $6w3ZV$ProgressCircle), {
        isIndeterminate: true,
        "aria-label": state.collection.size > 0 ? stringFormatter.format('loadingMore') : stringFormatter.format('loading')
    }));
}
function $f85fb77f9d4cbc6c$var$EmptyState() {
    let { renderEmptyState: renderEmptyState } = (0, $6w3ZV$useContext)($f85fb77f9d4cbc6c$export$870039b0abfe3de0);
    let emptyState = renderEmptyState ? renderEmptyState() : null;
    if (emptyState == null) return null;
    return /*#__PURE__*/ (0, $6w3ZV$react).createElement($f85fb77f9d4cbc6c$var$CenteredWrapper, null, emptyState);
}
function $f85fb77f9d4cbc6c$var$CenteredWrapper({ children: children }) {
    let { state: state } = (0, $6w3ZV$useContext)($f85fb77f9d4cbc6c$export$870039b0abfe3de0);
    return /*#__PURE__*/ (0, $6w3ZV$react).createElement("div", {
        role: "row",
        "aria-rowindex": state.collection.size + 1,
        className: (0, $6w3ZV$classNames)((0, ($parcel$interopDefault($6w3ZV$styles_cssmodulejs))), 'react-spectrum-ListView-centeredWrapper', {
            'react-spectrum-ListView-centeredWrapper--loadingMore': state.collection.size > 0
        })
    }, /*#__PURE__*/ (0, $6w3ZV$react).createElement("div", {
        role: "gridcell"
    }, children));
}


export {$f85fb77f9d4cbc6c$export$870039b0abfe3de0 as ListViewContext, $f85fb77f9d4cbc6c$export$84d0dd190d551cd1 as ListView};
//# sourceMappingURL=ListView.module.js.map
