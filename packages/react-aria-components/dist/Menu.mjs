import {CollectionRendererContext as $7135fc7d473fd974$export$4feb769f8ddf26c5, SectionContext as $7135fc7d473fd974$export$d40e14dec8b060a8, usePersistedKeys as $7135fc7d473fd974$export$90e00781bc59d8f9} from "./Collection.mjs";
import {Provider as $64fa3d84918910a7$export$2881499e37b75b9a, useContextProps as $64fa3d84918910a7$export$29f1550f4b0d4415, useRenderProps as $64fa3d84918910a7$export$4d86445c2cf5e3, useSlot as $64fa3d84918910a7$export$9d4c57ee4c6ffdd8, useSlottedContext as $64fa3d84918910a7$export$fabf2dc03a41866e} from "./utils.mjs";
import {HeaderContext as $72a5793c14baf454$export$e0e4026c12a8bdbb} from "./Header.mjs";
import {KeyboardContext as $63df2425e2108aa8$export$744d98a3b8a94e1c} from "./Keyboard.mjs";
import {OverlayTriggerStateContext as $de32f1b87079253c$export$d2f961adcb0afbe} from "./Dialog.mjs";
import {PopoverContext as $07b14b47974efb58$export$9b9a0cd73afb7ca4} from "./Popover.mjs";
import {SeparatorContext as $431f98aba6844401$export$6615d83f6de245ce} from "./Separator.mjs";
import {TextContext as $514c0188e459b4c0$export$9afb8bc826b033ea} from "./Text.mjs";
import {useMenuTrigger as $kM2ZM$useMenuTrigger, useMenu as $kM2ZM$useMenu, FocusScope as $kM2ZM$FocusScope, useMenuSection as $kM2ZM$useMenuSection, useMenuItem as $kM2ZM$useMenuItem, useFocusRing as $kM2ZM$useFocusRing, mergeProps as $kM2ZM$mergeProps} from "react-aria";
import {useMenuTriggerState as $kM2ZM$useMenuTriggerState, useTreeState as $kM2ZM$useTreeState} from "react-stately";
import {createBranchComponent as $kM2ZM$createBranchComponent, CollectionBuilder as $kM2ZM$CollectionBuilder, Collection as $kM2ZM$Collection, createLeafComponent as $kM2ZM$createLeafComponent} from "@react-aria/collections";
import {useResizeObserver as $kM2ZM$useResizeObserver, useObjectRef as $kM2ZM$useObjectRef, filterDOMProps as $kM2ZM$filterDOMProps} from "@react-aria/utils";
import {SelectionManager as $kM2ZM$SelectionManager, useMultipleSelectionState as $kM2ZM$useMultipleSelectionState} from "@react-stately/selection";
import {PressResponder as $kM2ZM$PressResponder, useHover as $kM2ZM$useHover} from "@react-aria/interactions";
import $kM2ZM$react, {createContext as $kM2ZM$createContext, useRef as $kM2ZM$useRef, useState as $kM2ZM$useState, useCallback as $kM2ZM$useCallback, useContext as $kM2ZM$useContext, forwardRef as $kM2ZM$forwardRef} from "react";
import {useSubmenuTriggerState as $kM2ZM$useSubmenuTriggerState} from "@react-stately/menu";
import {useSubmenuTrigger as $kM2ZM$useSubmenuTrigger} from "@react-aria/menu";

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
















const $3674c52c6b3c5bce$export$c7e742effb1c51e2 = /*#__PURE__*/ (0, $kM2ZM$createContext)(null);
const $3674c52c6b3c5bce$export$24aad8519b95b41b = /*#__PURE__*/ (0, $kM2ZM$createContext)(null);
const $3674c52c6b3c5bce$export$795aec4671cbae19 = /*#__PURE__*/ (0, $kM2ZM$createContext)(null);
const $3674c52c6b3c5bce$var$SelectionManagerContext = /*#__PURE__*/ (0, $kM2ZM$createContext)(null);
function $3674c52c6b3c5bce$export$27d2ad3c5815583e(props) {
    let state = (0, $kM2ZM$useMenuTriggerState)(props);
    let ref = (0, $kM2ZM$useRef)(null);
    let { menuTriggerProps: menuTriggerProps, menuProps: menuProps } = (0, $kM2ZM$useMenuTrigger)({
        ...props,
        type: 'menu'
    }, state, ref);
    // Allows menu width to match button
    let [buttonWidth, setButtonWidth] = (0, $kM2ZM$useState)(null);
    let onResize = (0, $kM2ZM$useCallback)(()=>{
        if (ref.current) setButtonWidth(ref.current.offsetWidth + 'px');
    }, [
        ref
    ]);
    (0, $kM2ZM$useResizeObserver)({
        ref: ref,
        onResize: onResize
    });
    let scrollRef = (0, $kM2ZM$useRef)(null);
    return /*#__PURE__*/ (0, $kM2ZM$react).createElement((0, $64fa3d84918910a7$export$2881499e37b75b9a), {
        values: [
            [
                $3674c52c6b3c5bce$export$c7e742effb1c51e2,
                {
                    ...menuProps,
                    ref: scrollRef
                }
            ],
            [
                (0, $de32f1b87079253c$export$d2f961adcb0afbe),
                state
            ],
            [
                $3674c52c6b3c5bce$export$795aec4671cbae19,
                state
            ],
            [
                (0, $07b14b47974efb58$export$9b9a0cd73afb7ca4),
                {
                    trigger: 'MenuTrigger',
                    triggerRef: ref,
                    scrollRef: scrollRef,
                    placement: 'bottom start',
                    style: {
                        '--trigger-width': buttonWidth
                    }
                }
            ]
        ]
    }, /*#__PURE__*/ (0, $kM2ZM$react).createElement((0, $kM2ZM$PressResponder), {
        ...menuTriggerProps,
        ref: ref,
        isPressed: state.isOpen
    }, props.children));
}
const $3674c52c6b3c5bce$var$SubmenuTriggerContext = /*#__PURE__*/ (0, $kM2ZM$createContext)(null);
const $3674c52c6b3c5bce$export$ecabc99eeffab7ca = /*#__PURE__*/ (0, $kM2ZM$createBranchComponent)('submenutrigger', (props, ref, item)=>{
    let { CollectionBranch: CollectionBranch } = (0, $kM2ZM$useContext)((0, $7135fc7d473fd974$export$4feb769f8ddf26c5));
    let state = (0, $kM2ZM$useContext)($3674c52c6b3c5bce$export$24aad8519b95b41b);
    let rootMenuTriggerState = (0, $kM2ZM$useContext)($3674c52c6b3c5bce$export$795aec4671cbae19);
    let submenuTriggerState = (0, $kM2ZM$useSubmenuTriggerState)({
        triggerKey: item.key
    }, rootMenuTriggerState);
    let submenuRef = (0, $kM2ZM$useRef)(null);
    let itemRef = (0, $kM2ZM$useObjectRef)(ref);
    let { parentMenuRef: parentMenuRef } = (0, $kM2ZM$useContext)($3674c52c6b3c5bce$var$SubmenuTriggerContext);
    let { submenuTriggerProps: submenuTriggerProps, submenuProps: submenuProps, popoverProps: popoverProps } = (0, $kM2ZM$useSubmenuTrigger)({
        parentMenuRef: parentMenuRef,
        submenuRef: submenuRef,
        delay: props.delay
    }, submenuTriggerState, itemRef);
    return /*#__PURE__*/ (0, $kM2ZM$react).createElement((0, $64fa3d84918910a7$export$2881499e37b75b9a), {
        values: [
            [
                $3674c52c6b3c5bce$var$MenuItemContext,
                {
                    ...submenuTriggerProps,
                    onAction: undefined,
                    ref: itemRef
                }
            ],
            [
                $3674c52c6b3c5bce$export$c7e742effb1c51e2,
                submenuProps
            ],
            [
                (0, $de32f1b87079253c$export$d2f961adcb0afbe),
                submenuTriggerState
            ],
            [
                (0, $07b14b47974efb58$export$9b9a0cd73afb7ca4),
                {
                    ref: submenuRef,
                    trigger: 'SubmenuTrigger',
                    triggerRef: itemRef,
                    placement: 'end top',
                    // Prevent parent popover from hiding submenu.
                    // @ts-ignore
                    'data-react-aria-top-layer': true,
                    ...popoverProps
                }
            ]
        ]
    }, /*#__PURE__*/ (0, $kM2ZM$react).createElement(CollectionBranch, {
        collection: state.collection,
        parent: item
    }), props.children[1]);
}, (props)=>props.children[0]);
const $3674c52c6b3c5bce$export$d9b273488cd8ce6f = /*#__PURE__*/ (0, $kM2ZM$forwardRef)(function Menu(props, ref) {
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $3674c52c6b3c5bce$export$c7e742effb1c51e2);
    // Delay rendering the actual menu until we have the collection so that auto focus works properly.
    return /*#__PURE__*/ (0, $kM2ZM$react).createElement((0, $kM2ZM$CollectionBuilder), {
        content: /*#__PURE__*/ (0, $kM2ZM$react).createElement((0, $kM2ZM$Collection), props)
    }, (collection)=>collection.size > 0 && /*#__PURE__*/ (0, $kM2ZM$react).createElement($3674c52c6b3c5bce$var$MenuInner, {
            props: props,
            collection: collection,
            menuRef: ref
        }));
});
function $3674c52c6b3c5bce$var$MenuInner({ props: props, collection: collection, menuRef: ref }) {
    let state = (0, $kM2ZM$useTreeState)({
        ...props,
        collection: collection,
        children: undefined
    });
    let triggerState = (0, $kM2ZM$useContext)($3674c52c6b3c5bce$export$795aec4671cbae19);
    let { isVirtualized: isVirtualized, CollectionRoot: CollectionRoot } = (0, $kM2ZM$useContext)((0, $7135fc7d473fd974$export$4feb769f8ddf26c5));
    let { menuProps: menuProps } = (0, $kM2ZM$useMenu)({
        ...props,
        isVirtualized: isVirtualized,
        onClose: props.onClose || (triggerState === null || triggerState === void 0 ? void 0 : triggerState.close)
    }, state, ref);
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        defaultClassName: 'react-aria-Menu',
        className: props.className,
        style: props.style,
        values: {}
    });
    return /*#__PURE__*/ (0, $kM2ZM$react).createElement((0, $kM2ZM$FocusScope), null, /*#__PURE__*/ (0, $kM2ZM$react).createElement("div", {
        ...(0, $kM2ZM$filterDOMProps)(props),
        ...menuProps,
        ...renderProps,
        ref: ref,
        slot: props.slot || undefined,
        onScroll: props.onScroll
    }, /*#__PURE__*/ (0, $kM2ZM$react).createElement((0, $64fa3d84918910a7$export$2881499e37b75b9a), {
        values: [
            [
                $3674c52c6b3c5bce$export$24aad8519b95b41b,
                state
            ],
            [
                (0, $431f98aba6844401$export$6615d83f6de245ce),
                {
                    elementType: 'div'
                }
            ],
            [
                (0, $7135fc7d473fd974$export$d40e14dec8b060a8),
                {
                    name: 'MenuSection',
                    render: $3674c52c6b3c5bce$var$MenuSectionInner
                }
            ],
            [
                $3674c52c6b3c5bce$var$SubmenuTriggerContext,
                {
                    parentMenuRef: ref
                }
            ],
            [
                $3674c52c6b3c5bce$var$MenuItemContext,
                null
            ],
            [
                $3674c52c6b3c5bce$var$SelectionManagerContext,
                state.selectionManager
            ]
        ]
    }, /*#__PURE__*/ (0, $kM2ZM$react).createElement(CollectionRoot, {
        collection: collection,
        persistedKeys: (0, $7135fc7d473fd974$export$90e00781bc59d8f9)(state.selectionManager.focusedKey),
        scrollRef: ref
    }))));
}
// A subclass of SelectionManager that forwards focus-related properties to the parent,
// but has its own local selection state.
class $3674c52c6b3c5bce$var$GroupSelectionManager extends (0, $kM2ZM$SelectionManager) {
    get focusedKey() {
        return this.parent.focusedKey;
    }
    get isFocused() {
        return this.parent.isFocused;
    }
    setFocusedKey(key, childFocusStrategy) {
        return this.parent.setFocusedKey(key, childFocusStrategy);
    }
    setFocused(isFocused) {
        this.parent.setFocused(isFocused);
    }
    get childFocusStrategy() {
        return this.parent.childFocusStrategy;
    }
    constructor(parent, state){
        super(parent.collection, state);
        this.parent = parent;
    }
}
function $3674c52c6b3c5bce$var$MenuSectionInner(props, ref, section, className = 'react-aria-MenuSection') {
    var _section_props, _section_props1;
    let state = (0, $kM2ZM$useContext)($3674c52c6b3c5bce$export$24aad8519b95b41b);
    let { CollectionBranch: CollectionBranch } = (0, $kM2ZM$useContext)((0, $7135fc7d473fd974$export$4feb769f8ddf26c5));
    let [headingRef, heading] = (0, $64fa3d84918910a7$export$9d4c57ee4c6ffdd8)();
    var _section_props_arialabel;
    let { headingProps: headingProps, groupProps: groupProps } = (0, $kM2ZM$useMenuSection)({
        heading: heading,
        'aria-label': (_section_props_arialabel = section.props['aria-label']) !== null && _section_props_arialabel !== void 0 ? _section_props_arialabel : undefined
    });
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        defaultClassName: className,
        className: (_section_props = section.props) === null || _section_props === void 0 ? void 0 : _section_props.className,
        style: (_section_props1 = section.props) === null || _section_props1 === void 0 ? void 0 : _section_props1.style,
        values: {}
    });
    let parent = (0, $kM2ZM$useContext)($3674c52c6b3c5bce$var$SelectionManagerContext);
    let selectionState = (0, $kM2ZM$useMultipleSelectionState)(props);
    let manager = props.selectionMode != null ? new $3674c52c6b3c5bce$var$GroupSelectionManager(parent, selectionState) : parent;
    return /*#__PURE__*/ (0, $kM2ZM$react).createElement("section", {
        ...(0, $kM2ZM$filterDOMProps)(props),
        ...groupProps,
        ...renderProps,
        ref: ref
    }, /*#__PURE__*/ (0, $kM2ZM$react).createElement((0, $64fa3d84918910a7$export$2881499e37b75b9a), {
        values: [
            [
                (0, $72a5793c14baf454$export$e0e4026c12a8bdbb),
                {
                    ...headingProps,
                    ref: headingRef
                }
            ],
            [
                $3674c52c6b3c5bce$var$SelectionManagerContext,
                manager
            ]
        ]
    }, /*#__PURE__*/ (0, $kM2ZM$react).createElement(CollectionBranch, {
        collection: state.collection,
        parent: section
    })));
}
const $3674c52c6b3c5bce$export$4b1545b4f2016d26 = /*#__PURE__*/ (0, $kM2ZM$createBranchComponent)('section', $3674c52c6b3c5bce$var$MenuSectionInner);
const $3674c52c6b3c5bce$var$MenuItemContext = /*#__PURE__*/ (0, $kM2ZM$createContext)(null);
const $3674c52c6b3c5bce$export$2ce376c2cc3355c8 = /*#__PURE__*/ (0, $kM2ZM$createLeafComponent)('item', function MenuItem(props, forwardedRef, item) {
    var _useSlottedContext;
    [props, forwardedRef] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, forwardedRef, $3674c52c6b3c5bce$var$MenuItemContext);
    let id = (_useSlottedContext = (0, $64fa3d84918910a7$export$fabf2dc03a41866e)($3674c52c6b3c5bce$var$MenuItemContext)) === null || _useSlottedContext === void 0 ? void 0 : _useSlottedContext.id;
    let state = (0, $kM2ZM$useContext)($3674c52c6b3c5bce$export$24aad8519b95b41b);
    let ref = (0, $kM2ZM$useObjectRef)(forwardedRef);
    let selectionManager = (0, $kM2ZM$useContext)($3674c52c6b3c5bce$var$SelectionManagerContext);
    let { menuItemProps: menuItemProps, labelProps: labelProps, descriptionProps: descriptionProps, keyboardShortcutProps: keyboardShortcutProps, ...states } = (0, $kM2ZM$useMenuItem)({
        ...props,
        id: id,
        key: item.key,
        selectionManager: selectionManager
    }, state, ref);
    let { isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, $kM2ZM$useFocusRing)();
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $kM2ZM$useHover)({
        isDisabled: states.isDisabled
    });
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        id: undefined,
        children: item.rendered,
        defaultClassName: 'react-aria-MenuItem',
        values: {
            ...states,
            isHovered: isHovered,
            isFocusVisible: isFocusVisible,
            selectionMode: selectionManager.selectionMode,
            selectionBehavior: selectionManager.selectionBehavior,
            hasSubmenu: !!props['aria-haspopup'],
            isOpen: props['aria-expanded'] === 'true'
        }
    });
    let ElementType = props.href ? 'a' : 'div';
    return /*#__PURE__*/ (0, $kM2ZM$react).createElement(ElementType, {
        ...(0, $kM2ZM$mergeProps)(menuItemProps, focusProps, hoverProps),
        ...renderProps,
        ref: ref,
        "data-disabled": states.isDisabled || undefined,
        "data-hovered": isHovered || undefined,
        "data-focused": states.isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-pressed": states.isPressed || undefined,
        "data-selected": states.isSelected || undefined,
        "data-selection-mode": selectionManager.selectionMode === 'none' ? undefined : selectionManager.selectionMode,
        "data-has-submenu": !!props['aria-haspopup'] || undefined,
        "data-open": props['aria-expanded'] === 'true' || undefined
    }, /*#__PURE__*/ (0, $kM2ZM$react).createElement((0, $64fa3d84918910a7$export$2881499e37b75b9a), {
        values: [
            [
                (0, $514c0188e459b4c0$export$9afb8bc826b033ea),
                {
                    slots: {
                        label: labelProps,
                        description: descriptionProps
                    }
                }
            ],
            [
                (0, $63df2425e2108aa8$export$744d98a3b8a94e1c),
                keyboardShortcutProps
            ]
        ]
    }, renderProps.children));
});


export {$3674c52c6b3c5bce$export$c7e742effb1c51e2 as MenuContext, $3674c52c6b3c5bce$export$24aad8519b95b41b as MenuStateContext, $3674c52c6b3c5bce$export$795aec4671cbae19 as RootMenuTriggerStateContext, $3674c52c6b3c5bce$export$27d2ad3c5815583e as MenuTrigger, $3674c52c6b3c5bce$export$ecabc99eeffab7ca as SubmenuTrigger, $3674c52c6b3c5bce$export$d9b273488cd8ce6f as Menu, $3674c52c6b3c5bce$export$4b1545b4f2016d26 as MenuSection, $3674c52c6b3c5bce$export$2ce376c2cc3355c8 as MenuItem};
//# sourceMappingURL=Menu.module.js.map
