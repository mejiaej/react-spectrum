import $4oXwn$intlStringsmodulejs from "./intlStrings.mjs";
import {MenuContext as $d94604d52c3e3feb$export$c7e742effb1c51e2, MenuStateContext as $d94604d52c3e3feb$export$24aad8519b95b41b, useMenuStateContext as $d94604d52c3e3feb$export$efa3856fc0e85e7f} from "./context.mjs";
import {MenuItem as $48fb8f5e1202c980$export$2ce376c2cc3355c8} from "./MenuItem.mjs";
import {MenuSection as $b966e606890cc5ca$export$4b1545b4f2016d26} from "./MenuSection.mjs";
import "./vars.ca367765.css";
import $4oXwn$menu_vars_cssmodulejs from "./menu_vars_css.mjs";
import {ActionButton as $4oXwn$ActionButton} from "@react-spectrum/button";
import $4oXwn$spectrumiconsuiArrowDownSmall from "@spectrum-icons/ui/ArrowDownSmall";
import {useDOMRef as $4oXwn$useDOMRef, useStyleProps as $4oXwn$useStyleProps, classNames as $4oXwn$classNames, useIsMobileDevice as $4oXwn$useIsMobileDevice} from "@react-spectrum/utils";
import {FocusScope as $4oXwn$FocusScope} from "@react-aria/focus";
import {mergeProps as $4oXwn$mergeProps, useSyncRef as $4oXwn$useSyncRef, useSlotId as $4oXwn$useSlotId, useLayoutEffect as $4oXwn$useLayoutEffect} from "@react-aria/utils";
import $4oXwn$react, {useContext as $4oXwn$useContext, useState as $4oXwn$useState, useRef as $4oXwn$useRef, useEffect as $4oXwn$useEffect} from "react";
import {useLocalizedStringFormatter as $4oXwn$useLocalizedStringFormatter, useLocale as $4oXwn$useLocale} from "@react-aria/i18n";
import {useMenu as $4oXwn$useMenu} from "@react-aria/menu";
import {useTreeState as $4oXwn$useTreeState} from "@react-stately/tree";


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













const $49b26f4b606348f6$export$d9b273488cd8ce6f = /*#__PURE__*/ (0, $4oXwn$react).forwardRef(function Menu(props, ref) {
    let isSubmenu = true;
    let contextProps = (0, $4oXwn$useContext)((0, $d94604d52c3e3feb$export$c7e742effb1c51e2));
    let parentMenuContext = (0, $d94604d52c3e3feb$export$efa3856fc0e85e7f)();
    let { rootMenuTriggerState: rootMenuTriggerState, state: parentMenuTreeState } = parentMenuContext || {
        rootMenuTriggerState: contextProps.state
    };
    if (!parentMenuContext) isSubmenu = false;
    let completeProps = {
        ...(0, $4oXwn$mergeProps)(contextProps, props)
    };
    let domRef = (0, $4oXwn$useDOMRef)(ref);
    let [popoverContainer, setPopoverContainer] = (0, $4oXwn$useState)(null);
    let trayContainerRef = (0, $4oXwn$useRef)(null);
    let state = (0, $4oXwn$useTreeState)(completeProps);
    let submenuRef = (0, $4oXwn$useRef)(null);
    let { menuProps: menuProps } = (0, $4oXwn$useMenu)(completeProps, state, domRef);
    let { styleProps: styleProps } = (0, $4oXwn$useStyleProps)(completeProps);
    (0, $4oXwn$useSyncRef)(contextProps, domRef);
    let [leftOffset, setLeftOffset] = (0, $4oXwn$useState)({
        left: 0
    });
    let prevPopoverContainer = (0, $4oXwn$useRef)(null);
    (0, $4oXwn$useEffect)(()=>{
        if (popoverContainer && prevPopoverContainer.current !== popoverContainer && leftOffset.left === 0) {
            prevPopoverContainer.current = popoverContainer;
            let { left: left } = popoverContainer.getBoundingClientRect();
            setLeftOffset({
                left: -1 * left
            });
        }
    }, [
        leftOffset,
        popoverContainer
    ]);
    var _contextProps_submenuLevel;
    let menuLevel = (_contextProps_submenuLevel = contextProps.submenuLevel) !== null && _contextProps_submenuLevel !== void 0 ? _contextProps_submenuLevel : -1;
    let nextMenuLevelKey = rootMenuTriggerState === null || rootMenuTriggerState === void 0 ? void 0 : rootMenuTriggerState.expandedKeysStack[menuLevel + 1];
    let hasOpenSubmenu = false;
    if (nextMenuLevelKey != null) {
        let nextMenuLevel = state.collection.getItem(nextMenuLevelKey);
        hasOpenSubmenu = nextMenuLevel != null;
    }
    return /*#__PURE__*/ (0, $4oXwn$react).createElement((0, $d94604d52c3e3feb$export$24aad8519b95b41b).Provider, {
        value: {
            popoverContainer: popoverContainer,
            trayContainerRef: trayContainerRef,
            menu: domRef,
            submenu: submenuRef,
            rootMenuTriggerState: rootMenuTriggerState,
            state: state
        }
    }, /*#__PURE__*/ (0, $4oXwn$react).createElement("div", {
        style: {
            height: hasOpenSubmenu ? '100%' : undefined
        },
        ref: trayContainerRef
    }), /*#__PURE__*/ (0, $4oXwn$react).createElement((0, $4oXwn$FocusScope), null, /*#__PURE__*/ (0, $4oXwn$react).createElement($49b26f4b606348f6$export$3dfe97b5c32d8d8c, {
        onBackButtonPress: contextProps.onBackButtonPress,
        hasOpenSubmenu: hasOpenSubmenu,
        isSubmenu: isSubmenu,
        parentMenuTreeState: parentMenuTreeState,
        rootMenuTriggerState: rootMenuTriggerState,
        menuRef: domRef
    }, /*#__PURE__*/ (0, $4oXwn$react).createElement("div", {
        ...menuProps,
        style: (0, $4oXwn$mergeProps)(styleProps.style, menuProps.style),
        ref: domRef,
        className: (0, $4oXwn$classNames)((0, ($parcel$interopDefault($4oXwn$menu_vars_cssmodulejs))), 'spectrum-Menu', styleProps.className)
    }, [
        ...state.collection
    ].map((item)=>{
        if (item.type === 'section') return /*#__PURE__*/ (0, $4oXwn$react).createElement((0, $b966e606890cc5ca$export$4b1545b4f2016d26), {
            key: item.key,
            item: item,
            state: state
        });
        let menuItem = /*#__PURE__*/ (0, $4oXwn$react).createElement((0, $48fb8f5e1202c980$export$2ce376c2cc3355c8), {
            key: item.key,
            item: item,
            state: state
        });
        if (item.wrapper) menuItem = item.wrapper(menuItem);
        return menuItem;
    }))), (rootMenuTriggerState === null || rootMenuTriggerState === void 0 ? void 0 : rootMenuTriggerState.isOpen) && /*#__PURE__*/ (0, $4oXwn$react).createElement("div", {
        ref: setPopoverContainer,
        style: {
            width: '100vw',
            position: 'absolute',
            top: -5,
            ...leftOffset
        }
    })));
});
function $49b26f4b606348f6$export$3dfe97b5c32d8d8c(props) {
    var _parentMenuTreeState_collection_getItem;
    let { children: children, isSubmenu: isSubmenu, hasOpenSubmenu: hasOpenSubmenu, parentMenuTreeState: parentMenuTreeState, rootMenuTriggerState: rootMenuTriggerState, onBackButtonPress: onBackButtonPress, wrapperKeyDown: wrapperKeyDown, menuRef: menuRef } = props;
    let stringFormatter = (0, $4oXwn$useLocalizedStringFormatter)((0, ($parcel$interopDefault($4oXwn$intlStringsmodulejs))), '@react-spectrum/menu');
    let backButtonText = parentMenuTreeState === null || parentMenuTreeState === void 0 ? void 0 : (_parentMenuTreeState_collection_getItem = parentMenuTreeState.collection.getItem(rootMenuTriggerState === null || rootMenuTriggerState === void 0 ? void 0 : rootMenuTriggerState.expandedKeysStack.slice(-1)[0])) === null || _parentMenuTreeState_collection_getItem === void 0 ? void 0 : _parentMenuTreeState_collection_getItem.textValue;
    let backButtonLabel = stringFormatter.format('backButton', {
        prevMenuButton: backButtonText
    });
    let headingId = (0, $4oXwn$useSlotId)();
    let isMobile = (0, $4oXwn$useIsMobileDevice)();
    let { direction: direction } = (0, $4oXwn$useLocale)();
    let [traySubmenuAnimation, setTraySubmenuAnimation] = (0, $4oXwn$useState)('');
    (0, $4oXwn$useLayoutEffect)(()=>{
        if (!hasOpenSubmenu) setTraySubmenuAnimation('spectrum-TraySubmenu-enter');
    }, [
        hasOpenSubmenu,
        isMobile
    ]);
    let timeoutRef = (0, $4oXwn$useRef)(null);
    let handleBackButtonPress = ()=>{
        setTraySubmenuAnimation('spectrum-TraySubmenu-exit');
        timeoutRef.current = setTimeout(()=>{
            onBackButtonPress();
        }, 220); // Matches transition duration
    };
    (0, $4oXwn$useEffect)(()=>{
        return ()=>{
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);
    // When opening submenu in tray, focus the first item in the submenu after animation completes
    // This fixes an issue with iOS VO where the closed submenu was getting focus
    let focusTimeoutRef = (0, $4oXwn$useRef)(null);
    (0, $4oXwn$useEffect)(()=>{
        if (isMobile && isSubmenu && !hasOpenSubmenu && traySubmenuAnimation === 'spectrum-TraySubmenu-enter') focusTimeoutRef.current = setTimeout(()=>{
            let firstItem = menuRef.current.querySelector('[role="menuitem"], [role="menuitemcheckbox"], [role="menuitemradio"]');
            firstItem === null || firstItem === void 0 ? void 0 : firstItem.focus();
        }, 220);
        return ()=>{
            if (focusTimeoutRef.current) clearTimeout(focusTimeoutRef.current);
        };
    }, [
        hasOpenSubmenu,
        isMobile,
        isSubmenu,
        menuRef,
        traySubmenuAnimation
    ]);
    return /*#__PURE__*/ (0, $4oXwn$react).createElement((0, $4oXwn$react).Fragment, null, /*#__PURE__*/ (0, $4oXwn$react).createElement("div", {
        role: headingId ? 'dialog' : undefined,
        "aria-labelledby": headingId,
        "aria-hidden": isMobile && hasOpenSubmenu,
        "data-testid": "menu-wrapper",
        className: (0, $4oXwn$classNames)((0, ($parcel$interopDefault($4oXwn$menu_vars_cssmodulejs))), 'spectrum-Menu-wrapper', {
            'spectrum-Menu-wrapper--isMobile': isMobile,
            'is-expanded': hasOpenSubmenu,
            [traySubmenuAnimation]: isMobile
        })
    }, /*#__PURE__*/ (0, $4oXwn$react).createElement("div", {
        role: "presentation",
        className: (0, $4oXwn$classNames)((0, ($parcel$interopDefault($4oXwn$menu_vars_cssmodulejs))), 'spectrum-Submenu-wrapper', {
            'spectrum-Submenu-wrapper--isMobile': isMobile
        }),
        onKeyDown: wrapperKeyDown
    }, isMobile && isSubmenu && !hasOpenSubmenu && /*#__PURE__*/ (0, $4oXwn$react).createElement("div", {
        className: (0, $4oXwn$classNames)((0, ($parcel$interopDefault($4oXwn$menu_vars_cssmodulejs))), 'spectrum-Submenu-headingWrapper')
    }, /*#__PURE__*/ (0, $4oXwn$react).createElement((0, $4oXwn$ActionButton), {
        "aria-label": backButtonLabel,
        isQuiet: true,
        onPress: handleBackButtonPress
    }, direction === 'rtl' ? /*#__PURE__*/ (0, $4oXwn$react).createElement((0, $4oXwn$spectrumiconsuiArrowDownSmall), {
        UNSAFE_style: {
            rotate: '270deg'
        }
    }) : /*#__PURE__*/ (0, $4oXwn$react).createElement((0, $4oXwn$spectrumiconsuiArrowDownSmall), {
        UNSAFE_style: {
            rotate: '90deg'
        }
    })), /*#__PURE__*/ (0, $4oXwn$react).createElement("h1", {
        id: headingId,
        className: (0, $4oXwn$classNames)((0, ($parcel$interopDefault($4oXwn$menu_vars_cssmodulejs))), 'spectrum-Submenu-heading')
    }, backButtonText)), children)));
}


export {$49b26f4b606348f6$export$d9b273488cd8ce6f as Menu, $49b26f4b606348f6$export$3dfe97b5c32d8d8c as TrayHeaderWrapper};
//# sourceMappingURL=Menu.module.js.map
