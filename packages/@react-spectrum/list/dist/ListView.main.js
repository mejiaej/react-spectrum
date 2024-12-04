var $fc02fd49ab58c72e$exports = require("./InsertionIndicator.main.js");
var $2ebea2d8da6d3b78$exports = require("./intlStrings.main.js");
require("./styles.ad343ab0.css");
var $279507a6f189e509$exports = require("./styles_css.main.js");
var $9eae7a1cb1535a6b$exports = require("./ListViewItem.main.js");
var $a0cb8c9f009bf274$exports = require("./ListViewLayout.main.js");
var $c59d3898f402f50b$exports = require("./RootDropIndicator.main.js");
var $3d665b19f7865ff9$exports = require("./DragPreview.main.js");
var $8lawJ$reactariagridlist = require("@react-aria/gridlist");
var $8lawJ$reactspectrumutils = require("@react-spectrum/utils");
var $8lawJ$reactariautils = require("@react-aria/utils");
var $8lawJ$reactariafocus = require("@react-aria/focus");
var $8lawJ$reactariaselection = require("@react-aria/selection");
var $8lawJ$reactstatelylist = require("@react-stately/list");
var $8lawJ$reactspectrumprogress = require("@react-spectrum/progress");
var $8lawJ$react = require("react");
var $8lawJ$reactariai18n = require("@react-aria/i18n");
var $8lawJ$reactspectrumprovider = require("@react-spectrum/provider");
var $8lawJ$reactariavirtualizer = require("@react-aria/virtualizer");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "ListViewContext", () => $60684b441be8e84c$export$870039b0abfe3de0);
$parcel$export(module.exports, "ListView", () => $60684b441be8e84c$export$84d0dd190d551cd1);
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

















const $60684b441be8e84c$export$870039b0abfe3de0 = /*#__PURE__*/ (0, ($parcel$interopDefault($8lawJ$react))).createContext(null);
const $60684b441be8e84c$var$ROW_HEIGHTS = {
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
function $60684b441be8e84c$var$useListLayout(state, density, overflowMode) {
    let { scale: scale } = (0, $8lawJ$reactspectrumprovider.useProvider)();
    let layout = (0, $8lawJ$react.useMemo)(()=>new (0, $a0cb8c9f009bf274$exports.ListViewLayout)({
            estimatedRowHeight: $60684b441be8e84c$var$ROW_HEIGHTS[density || 'regular'][scale]
        }), [
        scale,
        density,
        overflowMode
    ]);
    return layout;
}
const $60684b441be8e84c$export$84d0dd190d551cd1 = /*#__PURE__*/ (0, ($parcel$interopDefault($8lawJ$react))).forwardRef(function ListView(props, ref) {
    var _dropState_target;
    let { density: density = 'regular', loadingState: loadingState, onLoadMore: onLoadMore, isQuiet: isQuiet, overflowMode: overflowMode = 'truncate', onAction: onAction, dragAndDropHooks: dragAndDropHooks, renderEmptyState: renderEmptyState, ...otherProps } = props;
    let isListDraggable = !!(dragAndDropHooks === null || dragAndDropHooks === void 0 ? void 0 : dragAndDropHooks.useDraggableCollectionState);
    let isListDroppable = !!(dragAndDropHooks === null || dragAndDropHooks === void 0 ? void 0 : dragAndDropHooks.useDroppableCollectionState);
    let dragHooksProvided = (0, $8lawJ$react.useRef)(isListDraggable);
    let dropHooksProvided = (0, $8lawJ$react.useRef)(isListDroppable);
    (0, $8lawJ$react.useEffect)(()=>{
        if (dragHooksProvided.current !== isListDraggable) console.warn('Drag hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.');
        if (dropHooksProvided.current !== isListDroppable) console.warn('Drop hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.');
    }, [
        isListDraggable,
        isListDroppable
    ]);
    let domRef = (0, $8lawJ$reactspectrumutils.useDOMRef)(ref);
    let state = (0, $8lawJ$reactstatelylist.useListState)({
        ...props,
        selectionBehavior: props.selectionStyle === 'highlight' ? 'replace' : 'toggle'
    });
    let { collection: collection, selectionManager: selectionManager } = state;
    let isLoading = loadingState === 'loading' || loadingState === 'loadingMore';
    let { styleProps: styleProps } = (0, $8lawJ$reactspectrumutils.useStyleProps)(props);
    let dragState = null;
    let preview = (0, $8lawJ$react.useRef)(null);
    if (isListDraggable && dragAndDropHooks) {
        dragState = dragAndDropHooks.useDraggableCollectionState({
            collection: collection,
            selectionManager: selectionManager,
            preview: preview
        });
        dragAndDropHooks.useDraggableCollection({}, dragState, domRef);
    }
    let layout = $60684b441be8e84c$var$useListLayout(state, props.density || 'regular', overflowMode);
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
            keyboardDelegate: new (0, $8lawJ$reactariaselection.ListKeyboardDelegate)({
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
    let { gridProps: gridProps } = (0, $8lawJ$reactariagridlist.useGridList)({
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
    let persistedKeys = (0, $8lawJ$react.useMemo)(()=>{
        return new Set([
            focusedKey,
            dropTargetKey
        ].filter((k)=>k !== null));
    }, [
        focusedKey,
        dropTargetKey
    ]);
    // wait for layout to get accurate measurements
    let [isVerticalScrollbarVisible, setVerticalScollbarVisible] = (0, $8lawJ$react.useState)(false);
    let [isHorizontalScrollbarVisible, setHorizontalScollbarVisible] = (0, $8lawJ$react.useState)(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0, $8lawJ$reactariautils.useLayoutEffect)(()=>{
        if (domRef.current) {
            // 2 is the width of the border which is not part of the box size
            setVerticalScollbarVisible(domRef.current.clientWidth + 2 < domRef.current.offsetWidth);
            setHorizontalScollbarVisible(domRef.current.clientHeight + 2 < domRef.current.offsetHeight);
        }
    });
    let hasAnyChildren = (0, $8lawJ$react.useMemo)(()=>[
            ...collection
        ].some((item)=>item.hasChildNodes), [
        collection
    ]);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($8lawJ$react))).createElement($60684b441be8e84c$export$870039b0abfe3de0.Provider, {
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
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($8lawJ$react))).createElement((0, $8lawJ$reactariafocus.FocusScope), null, /*#__PURE__*/ (0, ($parcel$interopDefault($8lawJ$react))).createElement((0, $8lawJ$reactariafocus.FocusRing), {
        focusRingClass: (0, $8lawJ$reactspectrumutils.classNames)((0, ($parcel$interopDefault($279507a6f189e509$exports))), 'focus-ring')
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($8lawJ$react))).createElement((0, $8lawJ$reactariavirtualizer.Virtualizer), {
        ...(0, $8lawJ$reactariautils.mergeProps)(isListDroppable ? droppableCollection === null || droppableCollection === void 0 ? void 0 : droppableCollection.collectionProps : null, gridProps),
        ...(0, $8lawJ$reactariautils.filterDOMProps)(otherProps),
        ...gridProps,
        ...styleProps,
        isLoading: isLoading,
        onLoadMore: onLoadMore,
        ref: domRef,
        persistedKeys: persistedKeys,
        scrollDirection: "vertical",
        className: (0, $8lawJ$reactspectrumutils.classNames)((0, ($parcel$interopDefault($279507a6f189e509$exports))), 'react-spectrum-ListView', `react-spectrum-ListView--${density}`, 'react-spectrum-ListView--emphasized', {
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
        layoutOptions: (0, $8lawJ$react.useMemo)(()=>({
                isLoading: isLoading
            }), [
            isLoading
        ]),
        collection: collection
    }, (0, $8lawJ$react.useCallback)((type, item)=>{
        if (type === 'item') return /*#__PURE__*/ (0, ($parcel$interopDefault($8lawJ$react))).createElement($60684b441be8e84c$var$Item, {
            item: item
        });
        else if (type === 'loader') return /*#__PURE__*/ (0, ($parcel$interopDefault($8lawJ$react))).createElement($60684b441be8e84c$var$LoadingView, null);
        else if (type === 'placeholder') return /*#__PURE__*/ (0, ($parcel$interopDefault($8lawJ$react))).createElement($60684b441be8e84c$var$EmptyState, null);
    }, [])))), DragPreview && isListDraggable && dragAndDropHooks && dragState && /*#__PURE__*/ (0, ($parcel$interopDefault($8lawJ$react))).createElement(DragPreview, {
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
        return /*#__PURE__*/ (0, ($parcel$interopDefault($8lawJ$react))).createElement((0, $3d665b19f7865ff9$exports.DragPreview), {
            item: item,
            itemCount: itemCount,
            itemHeight: itemHeight,
            density: density
        });
    }));
});
function $60684b441be8e84c$var$Item({ item: item }) {
    let { isListDroppable: isListDroppable, state: state, onAction: onAction } = (0, $8lawJ$react.useContext)($60684b441be8e84c$export$870039b0abfe3de0);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($8lawJ$react))).createElement((0, ($parcel$interopDefault($8lawJ$react))).Fragment, null, isListDroppable && state.collection.getKeyBefore(item.key) == null && /*#__PURE__*/ (0, ($parcel$interopDefault($8lawJ$react))).createElement((0, $c59d3898f402f50b$exports.default), {
        key: "root"
    }), isListDroppable && /*#__PURE__*/ (0, ($parcel$interopDefault($8lawJ$react))).createElement((0, $fc02fd49ab58c72e$exports.default), {
        key: `${item.key}-before`,
        target: {
            key: item.key,
            type: 'item',
            dropPosition: 'before'
        }
    }), /*#__PURE__*/ (0, ($parcel$interopDefault($8lawJ$react))).createElement((0, $9eae7a1cb1535a6b$exports.ListViewItem), {
        item: item,
        isEmphasized: true,
        hasActions: !!onAction
    }), isListDroppable && /*#__PURE__*/ (0, ($parcel$interopDefault($8lawJ$react))).createElement((0, $fc02fd49ab58c72e$exports.default), {
        key: `${item.key}-after`,
        target: {
            key: item.key,
            type: 'item',
            dropPosition: 'after'
        },
        isPresentationOnly: state.collection.getKeyAfter(item.key) != null
    }));
}
function $60684b441be8e84c$var$LoadingView() {
    let { state: state } = (0, $8lawJ$react.useContext)($60684b441be8e84c$export$870039b0abfe3de0);
    let stringFormatter = (0, $8lawJ$reactariai18n.useLocalizedStringFormatter)((0, ($parcel$interopDefault($2ebea2d8da6d3b78$exports))), '@react-spectrum/list');
    return /*#__PURE__*/ (0, ($parcel$interopDefault($8lawJ$react))).createElement($60684b441be8e84c$var$CenteredWrapper, null, /*#__PURE__*/ (0, ($parcel$interopDefault($8lawJ$react))).createElement((0, $8lawJ$reactspectrumprogress.ProgressCircle), {
        isIndeterminate: true,
        "aria-label": state.collection.size > 0 ? stringFormatter.format('loadingMore') : stringFormatter.format('loading')
    }));
}
function $60684b441be8e84c$var$EmptyState() {
    let { renderEmptyState: renderEmptyState } = (0, $8lawJ$react.useContext)($60684b441be8e84c$export$870039b0abfe3de0);
    let emptyState = renderEmptyState ? renderEmptyState() : null;
    if (emptyState == null) return null;
    return /*#__PURE__*/ (0, ($parcel$interopDefault($8lawJ$react))).createElement($60684b441be8e84c$var$CenteredWrapper, null, emptyState);
}
function $60684b441be8e84c$var$CenteredWrapper({ children: children }) {
    let { state: state } = (0, $8lawJ$react.useContext)($60684b441be8e84c$export$870039b0abfe3de0);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($8lawJ$react))).createElement("div", {
        role: "row",
        "aria-rowindex": state.collection.size + 1,
        className: (0, $8lawJ$reactspectrumutils.classNames)((0, ($parcel$interopDefault($279507a6f189e509$exports))), 'react-spectrum-ListView-centeredWrapper', {
            'react-spectrum-ListView-centeredWrapper--loadingMore': state.collection.size > 0
        })
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($8lawJ$react))).createElement("div", {
        role: "gridcell"
    }, children));
}


//# sourceMappingURL=ListView.main.js.map
