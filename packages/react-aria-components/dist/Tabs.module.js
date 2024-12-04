import {CollectionRendererContext as $7135fc7d473fd974$export$4feb769f8ddf26c5, usePersistedKeys as $7135fc7d473fd974$export$90e00781bc59d8f9} from "./Collection.module.js";
import {Provider as $64fa3d84918910a7$export$2881499e37b75b9a, useContextProps as $64fa3d84918910a7$export$29f1550f4b0d4415, useRenderProps as $64fa3d84918910a7$export$4d86445c2cf5e3, useSlottedContext as $64fa3d84918910a7$export$fabf2dc03a41866e} from "./utils.module.js";
import {useFocusRing as $7aSLZ$useFocusRing, useTabList as $7aSLZ$useTabList, useTab as $7aSLZ$useTab, useHover as $7aSLZ$useHover, mergeProps as $7aSLZ$mergeProps, useTabPanel as $7aSLZ$useTabPanel} from "react-aria";
import {CollectionBuilder as $7aSLZ$CollectionBuilder, Collection as $7aSLZ$Collection, createLeafComponent as $7aSLZ$createLeafComponent, createHideableComponent as $7aSLZ$createHideableComponent} from "@react-aria/collections";
import {filterDOMProps as $7aSLZ$filterDOMProps, useObjectRef as $7aSLZ$useObjectRef} from "@react-aria/utils";
import {useTabListState as $7aSLZ$useTabListState} from "react-stately";
import $7aSLZ$react, {createContext as $7aSLZ$createContext, forwardRef as $7aSLZ$forwardRef, useMemo as $7aSLZ$useMemo, useContext as $7aSLZ$useContext} from "react";

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






const $5e8ad37a45e1c704$export$cfa7aa87c26e7d1f = /*#__PURE__*/ (0, $7aSLZ$createContext)(null);
const $5e8ad37a45e1c704$export$364712098d2aa57c = /*#__PURE__*/ (0, $7aSLZ$createContext)(null);
const $5e8ad37a45e1c704$export$b2539bed5023c21c = /*#__PURE__*/ (0, $7aSLZ$forwardRef)(function Tabs(props, ref) {
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $5e8ad37a45e1c704$export$cfa7aa87c26e7d1f);
    let { children: children, orientation: orientation = 'horizontal' } = props;
    children = (0, $7aSLZ$useMemo)(()=>typeof children === 'function' ? children({
            orientation: orientation,
            defaultChildren: null
        }) : children, [
        children,
        orientation
    ]);
    return /*#__PURE__*/ (0, $7aSLZ$react).createElement((0, $7aSLZ$CollectionBuilder), {
        content: children
    }, (collection)=>/*#__PURE__*/ (0, $7aSLZ$react).createElement($5e8ad37a45e1c704$var$TabsInner, {
            props: props,
            collection: collection,
            tabsRef: ref
        }));
});
function $5e8ad37a45e1c704$var$TabsInner({ props: props, tabsRef: ref, collection: collection }) {
    let { orientation: orientation = 'horizontal' } = props;
    let state = (0, $7aSLZ$useTabListState)({
        ...props,
        collection: collection,
        children: undefined
    });
    let { focusProps: focusProps, isFocused: isFocused, isFocusVisible: isFocusVisible } = (0, $7aSLZ$useFocusRing)({
        within: true
    });
    let values = (0, $7aSLZ$useMemo)(()=>({
            orientation: orientation,
            isFocusWithin: isFocused,
            isFocusVisible: isFocusVisible
        }), [
        orientation,
        isFocused,
        isFocusVisible
    ]);
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        defaultClassName: 'react-aria-Tabs',
        values: values
    });
    return /*#__PURE__*/ (0, $7aSLZ$react).createElement("div", {
        ...(0, $7aSLZ$filterDOMProps)(props),
        ...focusProps,
        ...renderProps,
        ref: ref,
        slot: props.slot || undefined,
        "data-focused": isFocused || undefined,
        "data-orientation": orientation,
        "data-focus-visible": isFocusVisible || undefined,
        "data-disabled": state.isDisabled || undefined
    }, /*#__PURE__*/ (0, $7aSLZ$react).createElement((0, $64fa3d84918910a7$export$2881499e37b75b9a), {
        values: [
            [
                $5e8ad37a45e1c704$export$cfa7aa87c26e7d1f,
                props
            ],
            [
                $5e8ad37a45e1c704$export$364712098d2aa57c,
                state
            ]
        ]
    }, renderProps.children));
}
const $5e8ad37a45e1c704$export$e51a686c67fdaa2d = /*#__PURE__*/ (0, $7aSLZ$forwardRef)(function TabList(props, ref) {
    let state = (0, $7aSLZ$useContext)($5e8ad37a45e1c704$export$364712098d2aa57c);
    return state ? /*#__PURE__*/ (0, $7aSLZ$react).createElement($5e8ad37a45e1c704$var$TabListInner, {
        props: props,
        forwardedRef: ref
    }) : /*#__PURE__*/ (0, $7aSLZ$react).createElement((0, $7aSLZ$Collection), props);
});
function $5e8ad37a45e1c704$var$TabListInner({ props: props, forwardedRef: ref }) {
    let state = (0, $7aSLZ$useContext)($5e8ad37a45e1c704$export$364712098d2aa57c);
    let { CollectionRoot: CollectionRoot } = (0, $7aSLZ$useContext)((0, $7135fc7d473fd974$export$4feb769f8ddf26c5));
    let { orientation: orientation = 'horizontal', keyboardActivation: keyboardActivation = 'automatic' } = (0, $64fa3d84918910a7$export$fabf2dc03a41866e)($5e8ad37a45e1c704$export$cfa7aa87c26e7d1f);
    let objectRef = (0, $7aSLZ$useObjectRef)(ref);
    let { tabListProps: tabListProps } = (0, $7aSLZ$useTabList)({
        ...props,
        orientation: orientation,
        keyboardActivation: keyboardActivation
    }, state, objectRef);
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        children: null,
        defaultClassName: 'react-aria-TabList',
        values: {
            orientation: orientation,
            state: state
        }
    });
    let DOMProps = (0, $7aSLZ$filterDOMProps)(props);
    delete DOMProps.id;
    return /*#__PURE__*/ (0, $7aSLZ$react).createElement("div", {
        ...DOMProps,
        ...tabListProps,
        ref: objectRef,
        ...renderProps,
        "data-orientation": orientation || undefined
    }, /*#__PURE__*/ (0, $7aSLZ$react).createElement(CollectionRoot, {
        collection: state.collection,
        persistedKeys: (0, $7135fc7d473fd974$export$90e00781bc59d8f9)(state.selectionManager.focusedKey)
    }));
}
const $5e8ad37a45e1c704$export$3e41faf802a29e71 = /*#__PURE__*/ (0, $7aSLZ$createLeafComponent)('item', (props, forwardedRef, item)=>{
    let state = (0, $7aSLZ$useContext)($5e8ad37a45e1c704$export$364712098d2aa57c);
    let ref = (0, $7aSLZ$useObjectRef)(forwardedRef);
    let { tabProps: tabProps, isSelected: isSelected, isDisabled: isDisabled, isPressed: isPressed } = (0, $7aSLZ$useTab)({
        key: item.key,
        ...props
    }, state, ref);
    let { focusProps: focusProps, isFocused: isFocused, isFocusVisible: isFocusVisible } = (0, $7aSLZ$useFocusRing)();
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $7aSLZ$useHover)({
        isDisabled: isDisabled,
        onHoverStart: props.onHoverStart,
        onHoverEnd: props.onHoverEnd,
        onHoverChange: props.onHoverChange
    });
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        id: undefined,
        children: item.rendered,
        defaultClassName: 'react-aria-Tab',
        values: {
            isSelected: isSelected,
            isDisabled: isDisabled,
            isFocused: isFocused,
            isFocusVisible: isFocusVisible,
            isPressed: isPressed,
            isHovered: isHovered
        }
    });
    let ElementType = item.props.href ? 'a' : 'div';
    return /*#__PURE__*/ (0, $7aSLZ$react).createElement(ElementType, {
        ...(0, $7aSLZ$mergeProps)(tabProps, focusProps, hoverProps, renderProps),
        ref: ref,
        "data-selected": isSelected || undefined,
        "data-disabled": isDisabled || undefined,
        "data-focused": isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-pressed": isPressed || undefined,
        "data-hovered": isHovered || undefined
    }, renderProps.children);
});
const $5e8ad37a45e1c704$export$3d96ec278d3efce4 = /*#__PURE__*/ (0, $7aSLZ$createHideableComponent)(function TabPanel(props, forwardedRef) {
    const state = (0, $7aSLZ$useContext)($5e8ad37a45e1c704$export$364712098d2aa57c);
    let ref = (0, $7aSLZ$useObjectRef)(forwardedRef);
    let { tabPanelProps: tabPanelProps } = (0, $7aSLZ$useTabPanel)(props, state, ref);
    let { focusProps: focusProps, isFocused: isFocused, isFocusVisible: isFocusVisible } = (0, $7aSLZ$useFocusRing)();
    let isSelected = state.selectedKey === props.id;
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        defaultClassName: 'react-aria-TabPanel',
        values: {
            isFocused: isFocused,
            isFocusVisible: isFocusVisible,
            isInert: !isSelected,
            state: state
        }
    });
    if (!isSelected && !props.shouldForceMount) return null;
    let DOMProps = (0, $7aSLZ$filterDOMProps)(props);
    delete DOMProps.id;
    let domProps = isSelected ? (0, $7aSLZ$mergeProps)(DOMProps, tabPanelProps, focusProps, renderProps) : renderProps;
    return /*#__PURE__*/ (0, $7aSLZ$react).createElement("div", {
        ...domProps,
        ref: ref,
        "data-focused": isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        // @ts-ignore
        inert: !isSelected ? 'true' : undefined,
        "data-inert": !isSelected ? 'true' : undefined
    }, /*#__PURE__*/ (0, $7aSLZ$react).createElement((0, $64fa3d84918910a7$export$2881499e37b75b9a), {
        values: [
            [
                $5e8ad37a45e1c704$export$cfa7aa87c26e7d1f,
                null
            ],
            [
                $5e8ad37a45e1c704$export$364712098d2aa57c,
                null
            ]
        ]
    }, renderProps.children));
});


export {$5e8ad37a45e1c704$export$cfa7aa87c26e7d1f as TabsContext, $5e8ad37a45e1c704$export$364712098d2aa57c as TabListStateContext, $5e8ad37a45e1c704$export$b2539bed5023c21c as Tabs, $5e8ad37a45e1c704$export$e51a686c67fdaa2d as TabList, $5e8ad37a45e1c704$export$3e41faf802a29e71 as Tab, $5e8ad37a45e1c704$export$3d96ec278d3efce4 as TabPanel};
//# sourceMappingURL=Tabs.module.js.map
