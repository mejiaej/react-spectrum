import {MenuContext as $d94604d52c3e3feb$export$c7e742effb1c51e2} from "./context.mjs";
import "./vars.ca367765.css";
import $5R0iF$menu_vars_cssmodulejs from "./menu_vars_css.mjs";
import {useDOMRef as $5R0iF$useDOMRef, useIsMobileDevice as $5R0iF$useIsMobileDevice, classNames as $5R0iF$classNames, unwrapDOMRef as $5R0iF$unwrapDOMRef, SlotProvider as $5R0iF$SlotProvider} from "@react-spectrum/utils";
import {Tray as $5R0iF$Tray, Popover as $5R0iF$Popover} from "@react-spectrum/overlays";
import {useInteractOutside as $5R0iF$useInteractOutside, PressResponder as $5R0iF$PressResponder} from "@react-aria/interactions";
import $5R0iF$react, {forwardRef as $5R0iF$forwardRef, useRef as $5R0iF$useRef, Fragment as $5R0iF$Fragment} from "react";
import {useMenuTrigger as $5R0iF$useMenuTrigger} from "@react-aria/menu";
import {useMenuTriggerState as $5R0iF$useMenuTriggerState} from "@react-stately/menu";


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







const $aa0b855f135b86e3$export$27d2ad3c5815583e = /*#__PURE__*/ (0, $5R0iF$forwardRef)(function MenuTrigger(props, ref) {
    let triggerRef = (0, $5R0iF$useRef)(null);
    let domRef = (0, $5R0iF$useDOMRef)(ref);
    let menuTriggerRef = domRef || triggerRef;
    let menuRef = (0, $5R0iF$useRef)(null);
    let { children: children, align: align = 'start', shouldFlip: shouldFlip = true, direction: direction = 'bottom', closeOnSelect: closeOnSelect, trigger: trigger = 'press' } = props;
    let [menuTrigger, menu] = (0, $5R0iF$react).Children.toArray(children);
    let state = (0, $5R0iF$useMenuTriggerState)(props);
    let { menuTriggerProps: menuTriggerProps, menuProps: menuProps } = (0, $5R0iF$useMenuTrigger)({
        trigger: trigger
    }, state, menuTriggerRef);
    let initialPlacement;
    switch(direction){
        case 'left':
        case 'right':
        case 'start':
        case 'end':
            initialPlacement = `${direction} ${align === 'end' ? 'bottom' : 'top'}`;
            break;
        case 'bottom':
        case 'top':
        default:
            initialPlacement = `${direction} ${align}`;
    }
    let isMobile = (0, $5R0iF$useIsMobileDevice)();
    let menuContext = {
        ...menuProps,
        ref: menuRef,
        onClose: state.close,
        closeOnSelect: closeOnSelect,
        autoFocus: state.focusStrategy || true,
        UNSAFE_style: isMobile ? {
            width: '100%',
            maxHeight: 'inherit'
        } : undefined,
        UNSAFE_className: (0, $5R0iF$classNames)((0, ($parcel$interopDefault($5R0iF$menu_vars_cssmodulejs))), {
            'spectrum-Menu-popover': !isMobile
        }),
        state: state
    };
    // Close when clicking outside the root menu when a submenu is open.
    let rootOverlayRef = (0, $5R0iF$useRef)(null);
    let rootOverlayDomRef = (0, $5R0iF$unwrapDOMRef)(rootOverlayRef);
    (0, $5R0iF$useInteractOutside)({
        ref: rootOverlayDomRef,
        onInteractOutside: ()=>{
            state === null || state === void 0 ? void 0 : state.close();
        },
        isDisabled: !state.isOpen || state.expandedKeysStack.length === 0
    });
    // On small screen devices, the menu is rendered in a tray, otherwise a popover.
    let overlay;
    if (isMobile) overlay = /*#__PURE__*/ (0, $5R0iF$react).createElement((0, $5R0iF$Tray), {
        state: state,
        isFixedHeight: true,
        ref: rootOverlayRef
    }, menu);
    else overlay = /*#__PURE__*/ (0, $5R0iF$react).createElement((0, $5R0iF$Popover), {
        ref: rootOverlayRef,
        UNSAFE_style: {
            clipPath: 'unset',
            overflow: 'visible',
            filter: 'unset',
            borderWidth: '0px'
        },
        state: state,
        triggerRef: menuTriggerRef,
        scrollRef: menuRef,
        placement: initialPlacement,
        hideArrow: true,
        shouldFlip: shouldFlip
    }, menu);
    return /*#__PURE__*/ (0, $5R0iF$react).createElement((0, $5R0iF$Fragment), null, /*#__PURE__*/ (0, $5R0iF$react).createElement((0, $5R0iF$SlotProvider), {
        slots: {
            actionButton: {
                holdAffordance: trigger === 'longPress'
            }
        }
    }, /*#__PURE__*/ (0, $5R0iF$react).createElement((0, $5R0iF$PressResponder), {
        ...menuTriggerProps,
        ref: menuTriggerRef,
        isPressed: state.isOpen
    }, menuTrigger)), /*#__PURE__*/ (0, $5R0iF$react).createElement((0, $d94604d52c3e3feb$export$c7e742effb1c51e2).Provider, {
        value: menuContext
    }, overlay));
});


export {$aa0b855f135b86e3$export$27d2ad3c5815583e as MenuTrigger};
//# sourceMappingURL=MenuTrigger.module.js.map
