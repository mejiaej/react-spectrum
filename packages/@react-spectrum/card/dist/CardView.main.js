var $7888205ff7de382f$exports = require("./CardBase.main.js");
var $e57ab98cef2f01a5$exports = require("./CardViewContext.main.js");
var $85c597beff94758b$exports = require("./intlStrings.main.js");
require("./vars.02438011.css");
var $71570f0038472fa2$exports = require("./card_vars_css.main.js");
var $kFdxB$reactspectrumutils = require("@react-spectrum/utils");
var $kFdxB$reactstatelygrid = require("@react-stately/grid");
var $kFdxB$reactariautils = require("@react-aria/utils");
var $kFdxB$reactspectrumprogress = require("@react-spectrum/progress");
var $kFdxB$react = require("react");
var $kFdxB$reactariai18n = require("@react-aria/i18n");
var $kFdxB$reactariagrid = require("@react-aria/grid");
var $kFdxB$reactstatelylist = require("@react-stately/list");
var $kFdxB$reactspectrumprovider = require("@react-spectrum/provider");
var $kFdxB$reactariavirtualizer = require("@react-aria/virtualizer");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "CardView", () => $514a55f6d91f25ef$export$7e52c821f7b6f422);
// @ts-nocheck
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













const $514a55f6d91f25ef$export$7e52c821f7b6f422 = /*#__PURE__*/ (0, ($parcel$interopDefault($kFdxB$react))).forwardRef(function CardView(props, ref) {
    let { scale: scale } = (0, $kFdxB$reactspectrumprovider.useProvider)();
    let { styleProps: styleProps } = (0, $kFdxB$reactspectrumutils.useStyleProps)(props);
    let domRef = (0, $kFdxB$reactspectrumutils.useDOMRef)(ref);
    let { isQuiet: isQuiet, renderEmptyState: renderEmptyState, layout: layout, loadingState: loadingState, onLoadMore: onLoadMore, cardOrientation: cardOrientation = 'vertical' } = props;
    let collator = (0, $kFdxB$reactariai18n.useCollator)({
        usage: 'search',
        sensitivity: 'base'
    });
    let isLoading = loadingState === 'loading' || loadingState === 'loadingMore';
    let cardViewLayout = (0, $kFdxB$react.useMemo)(()=>typeof layout === 'function' ? new layout({
            collator: collator,
            cardOrientation: cardOrientation,
            scale: scale
        }) : layout, [
        layout,
        collator,
        cardOrientation,
        scale
    ]);
    let layoutType = cardViewLayout.layoutType;
    let { direction: direction } = (0, $kFdxB$reactariai18n.useLocale)();
    let { collection: collection } = (0, $kFdxB$reactstatelylist.useListState)(props);
    let gridCollection = (0, $kFdxB$react.useMemo)(()=>new (0, $kFdxB$reactstatelygrid.GridCollection)({
            columnCount: 1,
            items: [
                ...collection
            ].map((item)=>({
                    // Makes the Grid row use the keys the user provides to the cards so that selection change via interactions returns the card keys
                    ...item,
                    hasChildNodes: true,
                    childNodes: [
                        {
                            key: `cell-${item.key}`,
                            type: 'cell',
                            value: null,
                            level: 0,
                            rendered: null,
                            textValue: item.textValue,
                            hasChildNodes: false,
                            childNodes: []
                        }
                    ]
                }))
        }), [
        collection
    ]);
    let state = (0, $kFdxB$reactstatelygrid.useGridState)({
        ...props,
        selectionMode: cardOrientation === 'horizontal' && layoutType === 'grid' ? 'none' : props.selectionMode,
        collection: gridCollection,
        focusMode: 'cell'
    });
    cardViewLayout.collection = gridCollection;
    cardViewLayout.disabledKeys = state.disabledKeys;
    let { gridProps: gridProps } = (0, $kFdxB$reactariagrid.useGrid)({
        ...props,
        isVirtualized: true,
        keyboardDelegate: cardViewLayout
    }, state, domRef);
    let renderWrapper = (0, $kFdxB$react.useCallback)((parent, reusableView)=>/*#__PURE__*/ (0, ($parcel$interopDefault($kFdxB$react))).createElement((0, $kFdxB$reactariavirtualizer.VirtualizerItem), {
            key: reusableView.key,
            layoutInfo: reusableView.layoutInfo,
            virtualizer: reusableView.virtualizer,
            parent: parent === null || parent === void 0 ? void 0 : parent.layoutInfo
        }, reusableView.rendered), []);
    let focusedKey = state.selectionManager.focusedKey;
    let focusedItem = gridCollection.getItem(state.selectionManager.focusedKey);
    if ((focusedItem === null || focusedItem === void 0 ? void 0 : focusedItem.parentKey) != null) focusedKey = focusedItem.parentKey;
    let persistedKeys = (0, $kFdxB$react.useMemo)(()=>focusedKey != null ? new Set([
            focusedKey
        ]) : null, [
        focusedKey
    ]);
    // TODO: does aria-row count and aria-col count need to be modified? Perhaps aria-col count needs to be omitted
    return /*#__PURE__*/ (0, ($parcel$interopDefault($kFdxB$react))).createElement((0, $e57ab98cef2f01a5$exports.CardViewContext).Provider, {
        value: {
            state: state,
            isQuiet: isQuiet,
            layout: cardViewLayout,
            cardOrientation: cardOrientation,
            renderEmptyState: renderEmptyState
        }
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($kFdxB$react))).createElement((0, $kFdxB$reactariavirtualizer.Virtualizer), {
        ...gridProps,
        ...styleProps,
        className: (0, $kFdxB$reactspectrumutils.classNames)((0, ($parcel$interopDefault($71570f0038472fa2$exports))), 'spectrum-CardView'),
        ref: domRef,
        persistedKeys: persistedKeys,
        scrollDirection: "vertical",
        layout: cardViewLayout,
        collection: gridCollection,
        isLoading: isLoading,
        onLoadMore: onLoadMore,
        layoutOptions: (0, $kFdxB$react.useMemo)(()=>({
                isLoading: isLoading,
                direction: direction
            }), [
            isLoading,
            direction
        ]),
        renderWrapper: renderWrapper,
        style: {
            ...styleProps.style,
            scrollPaddingTop: cardViewLayout.margin || 0
        }
    }, (0, $kFdxB$react.useCallback)((type, item)=>{
        if (type === 'item') return /*#__PURE__*/ (0, ($parcel$interopDefault($kFdxB$react))).createElement($514a55f6d91f25ef$var$InternalCard, {
            item: item
        });
        else if (type === 'loader') return /*#__PURE__*/ (0, ($parcel$interopDefault($kFdxB$react))).createElement($514a55f6d91f25ef$var$LoadingState, null);
        else if (type === 'placeholder') return /*#__PURE__*/ (0, ($parcel$interopDefault($kFdxB$react))).createElement($514a55f6d91f25ef$var$EmptyState, null);
    }, [])));
});
function $514a55f6d91f25ef$var$LoadingState() {
    let { state: state } = (0, $e57ab98cef2f01a5$exports.useCardViewContext)();
    let stringFormatter = (0, $kFdxB$reactariai18n.useLocalizedStringFormatter)((0, ($parcel$interopDefault($85c597beff94758b$exports))), '@react-spectrum/card');
    return /*#__PURE__*/ (0, ($parcel$interopDefault($kFdxB$react))).createElement($514a55f6d91f25ef$var$CenteredWrapper, null, /*#__PURE__*/ (0, ($parcel$interopDefault($kFdxB$react))).createElement((0, $kFdxB$reactspectrumprogress.ProgressCircle), {
        isIndeterminate: true,
        "aria-label": state.collection.size > 0 ? stringFormatter.format('loadingMore') : stringFormatter.format('loading')
    }));
}
function $514a55f6d91f25ef$var$EmptyState() {
    let { renderEmptyState: renderEmptyState } = (0, $e57ab98cef2f01a5$exports.useCardViewContext)();
    let emptyState = renderEmptyState ? renderEmptyState() : null;
    if (emptyState == null) return null;
    return /*#__PURE__*/ (0, ($parcel$interopDefault($kFdxB$react))).createElement($514a55f6d91f25ef$var$CenteredWrapper, null, emptyState);
}
function $514a55f6d91f25ef$var$CenteredWrapper({ children: children }) {
    let { state: state } = (0, $e57ab98cef2f01a5$exports.useCardViewContext)();
    return /*#__PURE__*/ (0, ($parcel$interopDefault($kFdxB$react))).createElement("div", {
        role: "row",
        "aria-rowindex": state.collection.size + 1,
        className: (0, $kFdxB$reactspectrumutils.classNames)((0, ($parcel$interopDefault($71570f0038472fa2$exports))), 'spectrum-CardView-centeredWrapper')
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($kFdxB$react))).createElement("div", {
        role: "gridcell"
    }, children));
}
function $514a55f6d91f25ef$var$InternalCard(props) {
    let { item: item } = props;
    let cellNode = [
        ...item.childNodes
    ][0];
    let { state: state, cardOrientation: cardOrientation, isQuiet: isQuiet, layout: layout } = (0, $e57ab98cef2f01a5$exports.useCardViewContext)();
    let layoutType = layout.layoutType;
    let rowRef = (0, $kFdxB$react.useRef)(undefined);
    let cellRef = (0, $kFdxB$react.useRef)(undefined);
    let unwrappedRef = (0, $kFdxB$reactspectrumutils.useUnwrapDOMRef)(cellRef);
    let { rowProps: gridRowProps } = (0, $kFdxB$reactariagrid.useGridRow)({
        node: item,
        isVirtualized: true
    }, state, rowRef);
    let { gridCellProps: gridCellProps } = (0, $kFdxB$reactariagrid.useGridCell)({
        node: cellNode,
        focusMode: 'cell'
    }, state, unwrappedRef);
    // Prevent space key from scrolling the CardView if triggered on a disabled item or on a Card in a selectionMode="none" CardView.
    let allowsInteraction = state.selectionManager.selectionMode !== 'none';
    let isDisabled = !allowsInteraction || state.disabledKeys.has(item.key);
    let onKeyDown = (e)=>{
        if (e.key === ' ' && isDisabled) e.preventDefault();
    };
    let rowProps = (0, $kFdxB$reactariautils.mergeProps)(gridRowProps, {
        onKeyDown: onKeyDown
    });
    if (layoutType === 'grid' || layoutType === 'gallery') isQuiet = true;
    if (layoutType !== 'grid') cardOrientation = 'vertical';
    // We don't want to focus the checkbox (or any other focusable elements) within the Card
    // when pressing the arrow keys so we delete the key down handler here. Arrow key navigation between
    // the cards in the CardView is handled by useGrid => useSelectableCollection instead.
    delete gridCellProps.onKeyDownCapture;
    return /*#__PURE__*/ (0, ($parcel$interopDefault($kFdxB$react))).createElement("div", {
        ...rowProps,
        ref: rowRef,
        className: (0, $kFdxB$reactspectrumutils.classNames)((0, ($parcel$interopDefault($71570f0038472fa2$exports))), 'spectrum-CardView-row')
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($kFdxB$react))).createElement((0, $7888205ff7de382f$exports.CardBase), {
        ref: cellRef,
        articleProps: gridCellProps,
        isQuiet: isQuiet,
        orientation: cardOrientation,
        item: item,
        layout: layoutType
    }, item.rendered));
}


//# sourceMappingURL=CardView.main.js.map
