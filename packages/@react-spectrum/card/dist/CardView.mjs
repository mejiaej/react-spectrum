import {CardBase as $643dd8fa80926f94$export$7a6ccaf429ad93a8} from "./CardBase.mjs";
import {CardViewContext as $8d180a244893de14$export$64992ac69f286e5c, useCardViewContext as $8d180a244893de14$export$fea0b38586ec8f13} from "./CardViewContext.mjs";
import $iOsT7$intlStringsmodulejs from "./intlStrings.mjs";
import "./vars.02438011.css";
import $iOsT7$card_vars_cssmodulejs from "./card_vars_css.mjs";
import {useStyleProps as $iOsT7$useStyleProps, useDOMRef as $iOsT7$useDOMRef, classNames as $iOsT7$classNames, useUnwrapDOMRef as $iOsT7$useUnwrapDOMRef} from "@react-spectrum/utils";
import {GridCollection as $iOsT7$GridCollection, useGridState as $iOsT7$useGridState} from "@react-stately/grid";
import {mergeProps as $iOsT7$mergeProps} from "@react-aria/utils";
import {ProgressCircle as $iOsT7$ProgressCircle} from "@react-spectrum/progress";
import $iOsT7$react, {useMemo as $iOsT7$useMemo, useCallback as $iOsT7$useCallback, useRef as $iOsT7$useRef} from "react";
import {useCollator as $iOsT7$useCollator, useLocale as $iOsT7$useLocale, useLocalizedStringFormatter as $iOsT7$useLocalizedStringFormatter} from "@react-aria/i18n";
import {useGrid as $iOsT7$useGrid, useGridRow as $iOsT7$useGridRow, useGridCell as $iOsT7$useGridCell} from "@react-aria/grid";
import {useListState as $iOsT7$useListState} from "@react-stately/list";
import {useProvider as $iOsT7$useProvider} from "@react-spectrum/provider";
import {VirtualizerItem as $iOsT7$VirtualizerItem, Virtualizer as $iOsT7$Virtualizer} from "@react-aria/virtualizer";


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
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













const $81a52da995c19652$export$7e52c821f7b6f422 = /*#__PURE__*/ (0, $iOsT7$react).forwardRef(function CardView(props, ref) {
    let { scale: scale } = (0, $iOsT7$useProvider)();
    let { styleProps: styleProps } = (0, $iOsT7$useStyleProps)(props);
    let domRef = (0, $iOsT7$useDOMRef)(ref);
    let { isQuiet: isQuiet, renderEmptyState: renderEmptyState, layout: layout, loadingState: loadingState, onLoadMore: onLoadMore, cardOrientation: cardOrientation = 'vertical' } = props;
    let collator = (0, $iOsT7$useCollator)({
        usage: 'search',
        sensitivity: 'base'
    });
    let isLoading = loadingState === 'loading' || loadingState === 'loadingMore';
    let cardViewLayout = (0, $iOsT7$useMemo)(()=>typeof layout === 'function' ? new layout({
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
    let { direction: direction } = (0, $iOsT7$useLocale)();
    let { collection: collection } = (0, $iOsT7$useListState)(props);
    let gridCollection = (0, $iOsT7$useMemo)(()=>new (0, $iOsT7$GridCollection)({
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
    let state = (0, $iOsT7$useGridState)({
        ...props,
        selectionMode: cardOrientation === 'horizontal' && layoutType === 'grid' ? 'none' : props.selectionMode,
        collection: gridCollection,
        focusMode: 'cell'
    });
    cardViewLayout.collection = gridCollection;
    cardViewLayout.disabledKeys = state.disabledKeys;
    let { gridProps: gridProps } = (0, $iOsT7$useGrid)({
        ...props,
        isVirtualized: true,
        keyboardDelegate: cardViewLayout
    }, state, domRef);
    let renderWrapper = (0, $iOsT7$useCallback)((parent, reusableView)=>/*#__PURE__*/ (0, $iOsT7$react).createElement((0, $iOsT7$VirtualizerItem), {
            key: reusableView.key,
            layoutInfo: reusableView.layoutInfo,
            virtualizer: reusableView.virtualizer,
            parent: parent === null || parent === void 0 ? void 0 : parent.layoutInfo
        }, reusableView.rendered), []);
    let focusedKey = state.selectionManager.focusedKey;
    let focusedItem = gridCollection.getItem(state.selectionManager.focusedKey);
    if ((focusedItem === null || focusedItem === void 0 ? void 0 : focusedItem.parentKey) != null) focusedKey = focusedItem.parentKey;
    let persistedKeys = (0, $iOsT7$useMemo)(()=>focusedKey != null ? new Set([
            focusedKey
        ]) : null, [
        focusedKey
    ]);
    // TODO: does aria-row count and aria-col count need to be modified? Perhaps aria-col count needs to be omitted
    return /*#__PURE__*/ (0, $iOsT7$react).createElement((0, $8d180a244893de14$export$64992ac69f286e5c).Provider, {
        value: {
            state: state,
            isQuiet: isQuiet,
            layout: cardViewLayout,
            cardOrientation: cardOrientation,
            renderEmptyState: renderEmptyState
        }
    }, /*#__PURE__*/ (0, $iOsT7$react).createElement((0, $iOsT7$Virtualizer), {
        ...gridProps,
        ...styleProps,
        className: (0, $iOsT7$classNames)((0, ($parcel$interopDefault($iOsT7$card_vars_cssmodulejs))), 'spectrum-CardView'),
        ref: domRef,
        persistedKeys: persistedKeys,
        scrollDirection: "vertical",
        layout: cardViewLayout,
        collection: gridCollection,
        isLoading: isLoading,
        onLoadMore: onLoadMore,
        layoutOptions: (0, $iOsT7$useMemo)(()=>({
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
    }, (0, $iOsT7$useCallback)((type, item)=>{
        if (type === 'item') return /*#__PURE__*/ (0, $iOsT7$react).createElement($81a52da995c19652$var$InternalCard, {
            item: item
        });
        else if (type === 'loader') return /*#__PURE__*/ (0, $iOsT7$react).createElement($81a52da995c19652$var$LoadingState, null);
        else if (type === 'placeholder') return /*#__PURE__*/ (0, $iOsT7$react).createElement($81a52da995c19652$var$EmptyState, null);
    }, [])));
});
function $81a52da995c19652$var$LoadingState() {
    let { state: state } = (0, $8d180a244893de14$export$fea0b38586ec8f13)();
    let stringFormatter = (0, $iOsT7$useLocalizedStringFormatter)((0, ($parcel$interopDefault($iOsT7$intlStringsmodulejs))), '@react-spectrum/card');
    return /*#__PURE__*/ (0, $iOsT7$react).createElement($81a52da995c19652$var$CenteredWrapper, null, /*#__PURE__*/ (0, $iOsT7$react).createElement((0, $iOsT7$ProgressCircle), {
        isIndeterminate: true,
        "aria-label": state.collection.size > 0 ? stringFormatter.format('loadingMore') : stringFormatter.format('loading')
    }));
}
function $81a52da995c19652$var$EmptyState() {
    let { renderEmptyState: renderEmptyState } = (0, $8d180a244893de14$export$fea0b38586ec8f13)();
    let emptyState = renderEmptyState ? renderEmptyState() : null;
    if (emptyState == null) return null;
    return /*#__PURE__*/ (0, $iOsT7$react).createElement($81a52da995c19652$var$CenteredWrapper, null, emptyState);
}
function $81a52da995c19652$var$CenteredWrapper({ children: children }) {
    let { state: state } = (0, $8d180a244893de14$export$fea0b38586ec8f13)();
    return /*#__PURE__*/ (0, $iOsT7$react).createElement("div", {
        role: "row",
        "aria-rowindex": state.collection.size + 1,
        className: (0, $iOsT7$classNames)((0, ($parcel$interopDefault($iOsT7$card_vars_cssmodulejs))), 'spectrum-CardView-centeredWrapper')
    }, /*#__PURE__*/ (0, $iOsT7$react).createElement("div", {
        role: "gridcell"
    }, children));
}
function $81a52da995c19652$var$InternalCard(props) {
    let { item: item } = props;
    let cellNode = [
        ...item.childNodes
    ][0];
    let { state: state, cardOrientation: cardOrientation, isQuiet: isQuiet, layout: layout } = (0, $8d180a244893de14$export$fea0b38586ec8f13)();
    let layoutType = layout.layoutType;
    let rowRef = (0, $iOsT7$useRef)(undefined);
    let cellRef = (0, $iOsT7$useRef)(undefined);
    let unwrappedRef = (0, $iOsT7$useUnwrapDOMRef)(cellRef);
    let { rowProps: gridRowProps } = (0, $iOsT7$useGridRow)({
        node: item,
        isVirtualized: true
    }, state, rowRef);
    let { gridCellProps: gridCellProps } = (0, $iOsT7$useGridCell)({
        node: cellNode,
        focusMode: 'cell'
    }, state, unwrappedRef);
    // Prevent space key from scrolling the CardView if triggered on a disabled item or on a Card in a selectionMode="none" CardView.
    let allowsInteraction = state.selectionManager.selectionMode !== 'none';
    let isDisabled = !allowsInteraction || state.disabledKeys.has(item.key);
    let onKeyDown = (e)=>{
        if (e.key === ' ' && isDisabled) e.preventDefault();
    };
    let rowProps = (0, $iOsT7$mergeProps)(gridRowProps, {
        onKeyDown: onKeyDown
    });
    if (layoutType === 'grid' || layoutType === 'gallery') isQuiet = true;
    if (layoutType !== 'grid') cardOrientation = 'vertical';
    // We don't want to focus the checkbox (or any other focusable elements) within the Card
    // when pressing the arrow keys so we delete the key down handler here. Arrow key navigation between
    // the cards in the CardView is handled by useGrid => useSelectableCollection instead.
    delete gridCellProps.onKeyDownCapture;
    return /*#__PURE__*/ (0, $iOsT7$react).createElement("div", {
        ...rowProps,
        ref: rowRef,
        className: (0, $iOsT7$classNames)((0, ($parcel$interopDefault($iOsT7$card_vars_cssmodulejs))), 'spectrum-CardView-row')
    }, /*#__PURE__*/ (0, $iOsT7$react).createElement((0, $643dd8fa80926f94$export$7a6ccaf429ad93a8), {
        ref: cellRef,
        articleProps: gridCellProps,
        isQuiet: isQuiet,
        orientation: cardOrientation,
        item: item,
        layout: layoutType
    }, item.rendered));
}


export {$81a52da995c19652$export$7e52c821f7b6f422 as CardView};
//# sourceMappingURL=CardView.module.js.map
