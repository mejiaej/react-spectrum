import $gF3QK$intlStringsmodulejs from "./intlStrings.mjs";
import {ListBoxContext as $0c6f792811e33483$export$7ff8f37d2d81a48d} from "./ListBoxContext.mjs";
import {ListBoxLayout as $d20755daac213984$export$c7e5f5ea00052bf} from "./ListBoxLayout.mjs";
import {ListBoxOption as $86983ea1fa3f7312$export$feb3b6b552c14a12} from "./ListBoxOption.mjs";
import {ListBoxSection as $92d678ed88836094$export$dca12b0bb56e4fc} from "./ListBoxSection.mjs";
import "./vars.954cf9f6.css";
import $gF3QK$menu_vars_cssmodulejs from "./menu_vars_css.mjs";
import {useListBox as $gF3QK$useListBox} from "@react-aria/listbox";
import {useStyleProps as $gF3QK$useStyleProps, classNames as $gF3QK$classNames} from "@react-spectrum/utils";
import {FocusScope as $gF3QK$FocusScope} from "@react-aria/focus";
import {useObjectRef as $gF3QK$useObjectRef, mergeProps as $gF3QK$mergeProps} from "@react-aria/utils";
import {ProgressCircle as $gF3QK$ProgressCircle} from "@react-spectrum/progress";
import $gF3QK$react, {useMemo as $gF3QK$useMemo, useCallback as $gF3QK$useCallback, useContext as $gF3QK$useContext} from "react";
import {useLocalizedStringFormatter as $gF3QK$useLocalizedStringFormatter} from "@react-aria/i18n";
import {useProvider as $gF3QK$useProvider} from "@react-spectrum/provider";
import {VirtualizerItem as $gF3QK$VirtualizerItem, Virtualizer as $gF3QK$Virtualizer} from "@react-aria/virtualizer";


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 














function $3247d4a89e6094e9$export$25768ea656ae32a7() {
    let { scale: scale } = (0, $gF3QK$useProvider)();
    let layout = (0, $gF3QK$useMemo)(()=>new (0, $d20755daac213984$export$c7e5f5ea00052bf)({
            estimatedRowHeight: scale === 'large' ? 48 : 32,
            estimatedHeadingHeight: scale === 'large' ? 33 : 26,
            padding: scale === 'large' ? 5 : 4,
            placeholderHeight: scale === 'large' ? 48 : 32
        }), [
        scale
    ]);
    return layout;
}
const $3247d4a89e6094e9$export$1afdcf349979fb7e = /*#__PURE__*/ (0, $gF3QK$react).forwardRef(function ListBoxBase(props, ref) {
    let { layout: layout, state: state, shouldFocusOnHover: shouldFocusOnHover = false, shouldUseVirtualFocus: shouldUseVirtualFocus = false, domProps: domProps = {}, isLoading: isLoading, showLoadingSpinner: showLoadingSpinner = isLoading, onScroll: onScroll, renderEmptyState: renderEmptyState } = props;
    let objectRef = (0, $gF3QK$useObjectRef)(ref);
    let { listBoxProps: listBoxProps } = (0, $gF3QK$useListBox)({
        ...props,
        layoutDelegate: layout,
        isVirtualized: true
    }, state, objectRef);
    let { styleProps: styleProps } = (0, $gF3QK$useStyleProps)(props);
    let renderWrapper = (0, $gF3QK$useCallback)((parent, reusableView, children, renderChildren)=>{
        var _children_find;
        var _children_find_layoutInfo;
        if (reusableView.viewType === 'section') return /*#__PURE__*/ (0, $gF3QK$react).createElement((0, $92d678ed88836094$export$dca12b0bb56e4fc), {
            key: reusableView.key,
            item: reusableView.content,
            layoutInfo: reusableView.layoutInfo,
            virtualizer: reusableView.virtualizer,
            headerLayoutInfo: (_children_find_layoutInfo = (_children_find = children.find((c)=>c.viewType === 'header')) === null || _children_find === void 0 ? void 0 : _children_find.layoutInfo) !== null && _children_find_layoutInfo !== void 0 ? _children_find_layoutInfo : null
        }, renderChildren(children.filter((c)=>c.viewType === 'item')));
        return /*#__PURE__*/ (0, $gF3QK$react).createElement((0, $gF3QK$VirtualizerItem), {
            key: reusableView.key,
            layoutInfo: reusableView.layoutInfo,
            virtualizer: reusableView.virtualizer,
            parent: parent === null || parent === void 0 ? void 0 : parent.layoutInfo
        }, reusableView.rendered);
    }, []);
    let focusedKey = state.selectionManager.focusedKey;
    let persistedKeys = (0, $gF3QK$useMemo)(()=>focusedKey != null ? new Set([
            focusedKey
        ]) : null, [
        focusedKey
    ]);
    return /*#__PURE__*/ (0, $gF3QK$react).createElement((0, $0c6f792811e33483$export$7ff8f37d2d81a48d).Provider, {
        value: {
            state: state,
            renderEmptyState: renderEmptyState,
            shouldFocusOnHover: shouldFocusOnHover,
            shouldUseVirtualFocus: shouldUseVirtualFocus
        }
    }, /*#__PURE__*/ (0, $gF3QK$react).createElement((0, $gF3QK$FocusScope), null, /*#__PURE__*/ (0, $gF3QK$react).createElement((0, $gF3QK$Virtualizer), {
        ...styleProps,
        ...(0, $gF3QK$mergeProps)(listBoxProps, domProps),
        ref: objectRef,
        persistedKeys: persistedKeys,
        autoFocus: !!props.autoFocus || undefined,
        scrollDirection: "vertical",
        className: (0, $gF3QK$classNames)((0, ($parcel$interopDefault($gF3QK$menu_vars_cssmodulejs))), 'spectrum-Menu', styleProps.className),
        layout: layout,
        layoutOptions: (0, $gF3QK$useMemo)(()=>({
                isLoading: showLoadingSpinner
            }), [
            showLoadingSpinner
        ]),
        collection: state.collection,
        renderWrapper: renderWrapper,
        isLoading: isLoading,
        onLoadMore: props.onLoadMore,
        onScroll: onScroll
    }, (0, $gF3QK$useCallback)((type, item)=>{
        if (type === 'item') return /*#__PURE__*/ (0, $gF3QK$react).createElement((0, $86983ea1fa3f7312$export$feb3b6b552c14a12), {
            item: item
        });
        else if (type === 'loader') return /*#__PURE__*/ (0, $gF3QK$react).createElement($3247d4a89e6094e9$var$LoadingState, null);
        else if (type === 'placeholder') return /*#__PURE__*/ (0, $gF3QK$react).createElement($3247d4a89e6094e9$var$EmptyState, null);
        else return null;
    }, []))));
});
function $3247d4a89e6094e9$var$LoadingState() {
    let { state: state } = (0, $gF3QK$useContext)((0, $0c6f792811e33483$export$7ff8f37d2d81a48d));
    let stringFormatter = (0, $gF3QK$useLocalizedStringFormatter)((0, ($parcel$interopDefault($gF3QK$intlStringsmodulejs))), '@react-spectrum/listbox');
    return(// aria-selected isn't needed here since this option is not selectable.
    // eslint-disable-next-line jsx-a11y/role-has-required-aria-props
    /*#__PURE__*/ (0, $gF3QK$react).createElement("div", {
        role: "option",
        style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%'
        }
    }, /*#__PURE__*/ (0, $gF3QK$react).createElement((0, $gF3QK$ProgressCircle), {
        isIndeterminate: true,
        size: "S",
        "aria-label": state.collection.size > 0 ? stringFormatter.format('loadingMore') : stringFormatter.format('loading'),
        UNSAFE_className: (0, $gF3QK$classNames)((0, ($parcel$interopDefault($gF3QK$menu_vars_cssmodulejs))), 'spectrum-Dropdown-progressCircle')
    })));
}
function $3247d4a89e6094e9$var$EmptyState() {
    let { renderEmptyState: renderEmptyState } = (0, $gF3QK$useContext)((0, $0c6f792811e33483$export$7ff8f37d2d81a48d));
    let emptyState = renderEmptyState ? renderEmptyState() : null;
    if (emptyState == null) return null;
    return /*#__PURE__*/ (0, $gF3QK$react).createElement("div", {
        // aria-selected isn't needed here since this option is not selectable.
        // eslint-disable-next-line jsx-a11y/role-has-required-aria-props
        role: "option"
    }, emptyState);
}


export {$3247d4a89e6094e9$export$25768ea656ae32a7 as useListBoxLayout, $3247d4a89e6094e9$export$1afdcf349979fb7e as ListBoxBase};
//# sourceMappingURL=ListBoxBase.module.js.map
