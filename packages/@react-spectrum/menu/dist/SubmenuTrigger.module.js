import {MenuContext as $d94604d52c3e3feb$export$c7e742effb1c51e2, SubmenuTriggerContext as $d94604d52c3e3feb$export$8d97fe02339fc0e3, useMenuStateContext as $d94604d52c3e3feb$export$efa3856fc0e85e7f} from "./context.module.js";
import "./vars.ca367765.css";
import $byZ4r$menu_vars_cssmodulejs from "./menu_vars_css.module.js";
import {useIsMobileDevice as $byZ4r$useIsMobileDevice, classNames as $byZ4r$classNames} from "@react-spectrum/utils";
import {mergeProps as $byZ4r$mergeProps} from "@react-aria/utils";
import {Popover as $byZ4r$Popover} from "@react-spectrum/overlays";
import $byZ4r$react, {useRef as $byZ4r$useRef} from "react";
import $byZ4r$reactdom from "react-dom";
import {useLocale as $byZ4r$useLocale} from "@react-aria/i18n";
import {useSubmenuTrigger as $byZ4r$useSubmenuTrigger} from "@react-aria/menu";
import {useSubmenuTriggerState as $byZ4r$useSubmenuTriggerState} from "@react-stately/menu";


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









function $3f13e15cf95c3893$var$SubmenuTrigger(props) {
    let triggerRef = (0, $byZ4r$useRef)(null);
    let { children: children, targetKey: targetKey } = props;
    let [menuTrigger, menu] = (0, $byZ4r$react).Children.toArray(children);
    let { popoverContainer: popoverContainer, trayContainerRef: trayContainerRef, menu: parentMenuRef, submenu: menuRef, rootMenuTriggerState: rootMenuTriggerState } = (0, $d94604d52c3e3feb$export$efa3856fc0e85e7f)();
    let submenuTriggerState = (0, $byZ4r$useSubmenuTriggerState)({
        triggerKey: targetKey
    }, rootMenuTriggerState);
    let { submenuTriggerProps: submenuTriggerProps, submenuProps: submenuProps, popoverProps: popoverProps } = (0, $byZ4r$useSubmenuTrigger)({
        parentMenuRef: parentMenuRef,
        submenuRef: menuRef
    }, submenuTriggerState, triggerRef);
    let isMobile = (0, $byZ4r$useIsMobileDevice)();
    let onBackButtonPress = ()=>{
        submenuTriggerState.close();
        if (parentMenuRef.current && !parentMenuRef.current.contains(document.activeElement)) parentMenuRef.current.focus();
    };
    let { direction: direction } = (0, $byZ4r$useLocale)();
    let mobileSubmenuKeyDown = (e)=>{
        switch(e.key){
            case 'ArrowLeft':
                var _triggerRef_current;
                if (direction === 'ltr') (_triggerRef_current = triggerRef.current) === null || _triggerRef_current === void 0 ? void 0 : _triggerRef_current.focus();
                break;
            case 'ArrowRight':
                var _triggerRef_current1;
                if (direction === 'rtl') (_triggerRef_current1 = triggerRef.current) === null || _triggerRef_current1 === void 0 ? void 0 : _triggerRef_current1.focus();
                break;
        }
    };
    let overlay;
    if (isMobile) {
        var _submenuProps;
        delete submenuTriggerProps.onBlur;
        delete submenuTriggerProps.onHoverChange;
        var _autoFocus;
        (_autoFocus = (_submenuProps = submenuProps).autoFocus) !== null && _autoFocus !== void 0 ? _autoFocus : _submenuProps.autoFocus = true;
        if (trayContainerRef.current && submenuTriggerState.isOpen) overlay = /*#__PURE__*/ (0, $byZ4r$reactdom).createPortal(menu, trayContainerRef.current);
    } else {
        let onDismissButtonPress = ()=>{
            var _parentMenuRef_current;
            submenuTriggerState.close();
            (_parentMenuRef_current = parentMenuRef.current) === null || _parentMenuRef_current === void 0 ? void 0 : _parentMenuRef_current.focus();
        };
        overlay = /*#__PURE__*/ (0, $byZ4r$react).createElement((0, $byZ4r$Popover), {
            ...popoverProps,
            onDismissButtonPress: onDismissButtonPress,
            UNSAFE_className: (0, $byZ4r$classNames)((0, ($parcel$interopDefault($byZ4r$menu_vars_cssmodulejs))), 'spectrum-Submenu-popover'),
            container: popoverContainer,
            containerPadding: 0,
            enableBothDismissButtons: true,
            UNSAFE_style: {
                clipPath: 'unset',
                overflow: 'visible',
                borderWidth: '0px'
            },
            state: submenuTriggerState,
            triggerRef: triggerRef,
            scrollRef: menuRef,
            placement: "end top",
            hideArrow: true
        }, menu);
    }
    let menuContext = {
        ...(0, $byZ4r$mergeProps)(submenuProps, {
            ref: menuRef,
            UNSAFE_style: isMobile ? {
                width: '100%',
                maxHeight: 'inherit'
            } : undefined,
            UNSAFE_className: (0, $byZ4r$classNames)((0, ($parcel$interopDefault($byZ4r$menu_vars_cssmodulejs))), {
                'spectrum-Menu-popover': !isMobile
            }),
            ...isMobile && {
                onBackButtonPress: onBackButtonPress,
                onKeyDown: mobileSubmenuKeyDown
            }
        })
    };
    return /*#__PURE__*/ (0, $byZ4r$react).createElement((0, $byZ4r$react).Fragment, null, /*#__PURE__*/ (0, $byZ4r$react).createElement((0, $d94604d52c3e3feb$export$8d97fe02339fc0e3).Provider, {
        value: {
            triggerRef: triggerRef,
            ...submenuTriggerProps
        }
    }, menuTrigger), /*#__PURE__*/ (0, $byZ4r$react).createElement((0, $d94604d52c3e3feb$export$c7e742effb1c51e2).Provider, {
        value: menuContext
    }, overlay));
}
$3f13e15cf95c3893$var$SubmenuTrigger.getCollectionNode = function*(props) {
    let childArray = [];
    (0, $byZ4r$react).Children.forEach(props.children, (child)=>{
        if (/*#__PURE__*/ (0, $byZ4r$react).isValidElement(child)) childArray.push(child);
    });
    let [trigger] = childArray;
    let [, content] = props.children;
    yield {
        element: /*#__PURE__*/ (0, $byZ4r$react).cloneElement(trigger, {
            ...trigger.props,
            hasChildItems: true,
            isTrigger: true
        }),
        wrapper: (element)=>/*#__PURE__*/ (0, $byZ4r$react).createElement($3f13e15cf95c3893$var$SubmenuTrigger, {
                key: element.key,
                targetKey: element.key,
                ...props
            }, element, content)
    };
};
let $3f13e15cf95c3893$export$ecabc99eeffab7ca = $3f13e15cf95c3893$var$SubmenuTrigger;


export {$3f13e15cf95c3893$export$ecabc99eeffab7ca as SubmenuTrigger};
//# sourceMappingURL=SubmenuTrigger.module.js.map
