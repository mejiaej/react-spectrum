import "./vars.1b9cd276.css";
import $7Y1uy$contextualhelp_vars_cssmodulejs from "./contextualhelp_vars_css.mjs";
import "./vars.ca367765.css";
import $7Y1uy$menu_vars_cssmodulejs from "./menu_vars_css.mjs";
import {SubmenuTriggerContext as $d94604d52c3e3feb$export$8d97fe02339fc0e3, useMenuStateContext as $d94604d52c3e3feb$export$efa3856fc0e85e7f} from "./context.mjs";
import {TrayHeaderWrapper as $49b26f4b606348f6$export$3dfe97b5c32d8d8c} from "./Menu.mjs";
import {unwrapDOMRef as $7Y1uy$unwrapDOMRef, useIsMobileDevice as $7Y1uy$useIsMobileDevice, classNames as $7Y1uy$classNames, SlotProvider as $7Y1uy$SlotProvider} from "@react-spectrum/utils";
import {FocusScope as $7Y1uy$FocusScope} from "@react-aria/focus";
import {getInteractionModality as $7Y1uy$getInteractionModality} from "@react-aria/interactions";
import {Popover as $7Y1uy$Popover} from "@react-spectrum/overlays";
import $7Y1uy$react, {useRef as $7Y1uy$useRef, useState as $7Y1uy$useState, useEffect as $7Y1uy$useEffect} from "react";
import $7Y1uy$reactdom from "react-dom";
import {useSubmenuTrigger as $7Y1uy$useSubmenuTrigger} from "@react-aria/menu";
import {useSubmenuTriggerState as $7Y1uy$useSubmenuTriggerState} from "@react-stately/menu";


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 











function $726fb1b478e356bf$var$ContextualHelpTrigger(props) {
    let { isUnavailable: isUnavailable = false, targetKey: targetKey } = props;
    let triggerRef = (0, $7Y1uy$useRef)(null);
    let popoverRef = (0, $7Y1uy$useRef)(null);
    let { popoverContainer: popoverContainer, trayContainerRef: trayContainerRef, rootMenuTriggerState: rootMenuTriggerState, menu: parentMenuRef, state: state } = (0, $d94604d52c3e3feb$export$efa3856fc0e85e7f)();
    let submenuTriggerState = (0, $7Y1uy$useSubmenuTriggerState)({
        triggerKey: targetKey
    }, {
        ...rootMenuTriggerState,
        ...state
    });
    let submenuRef = (0, $7Y1uy$unwrapDOMRef)(popoverRef);
    let { submenuTriggerProps: submenuTriggerProps, popoverProps: popoverProps } = (0, $7Y1uy$useSubmenuTrigger)({
        parentMenuRef: parentMenuRef,
        submenuRef: submenuRef,
        type: 'dialog',
        isDisabled: !isUnavailable
    }, submenuTriggerState, triggerRef);
    let isMobile = (0, $7Y1uy$useIsMobileDevice)();
    let [traySubmenuAnimation, setTraySubmenuAnimation] = (0, $7Y1uy$useState)('');
    (0, $7Y1uy$useEffect)(()=>{
        if (submenuTriggerState.isOpen) setTraySubmenuAnimation('spectrum-TraySubmenu-enter');
    }, [
        submenuTriggerState.isOpen
    ]);
    let slots = {};
    if (isUnavailable) slots = {
        dialog: {
            UNSAFE_className: (0, $7Y1uy$classNames)((0, ($parcel$interopDefault($7Y1uy$contextualhelp_vars_cssmodulejs))), 'react-spectrum-ContextualHelp-dialog', {
                'react-spectrum-ContextualHelp-dialog--isMobile': isMobile
            }, (0, $7Y1uy$classNames)((0, ($parcel$interopDefault($7Y1uy$menu_vars_cssmodulejs))), {
                'spectrum-Menu-subdialog': !isMobile,
                [traySubmenuAnimation]: isMobile
            }))
        },
        content: {
            UNSAFE_className: (0, ($parcel$interopDefault($7Y1uy$contextualhelp_vars_cssmodulejs)))['react-spectrum-ContextualHelp-content']
        },
        footer: {
            UNSAFE_className: (0, ($parcel$interopDefault($7Y1uy$contextualhelp_vars_cssmodulejs)))['react-spectrum-ContextualHelp-footer']
        }
    };
    let [trigger] = (0, $7Y1uy$react).Children.toArray(props.children);
    let [, content] = props.children;
    let onBlurWithin = (e)=>{
        var _popoverRef_current_UNSAFE_getDOMNode;
        if (e.relatedTarget && popoverRef.current && !((_popoverRef_current_UNSAFE_getDOMNode = popoverRef.current.UNSAFE_getDOMNode()) === null || _popoverRef_current_UNSAFE_getDOMNode === void 0 ? void 0 : _popoverRef_current_UNSAFE_getDOMNode.contains(e.relatedTarget)) && !(e.relatedTarget === triggerRef.current && (0, $7Y1uy$getInteractionModality)() === 'pointer')) {
            if (submenuTriggerState.isOpen) submenuTriggerState.close();
        }
    };
    let overlay;
    let tray;
    let onBackButtonPress = ()=>{
        setTraySubmenuAnimation('spectrum-TraySubmenu-exit');
        setTimeout(()=>{
            submenuTriggerState.close();
            if (parentMenuRef.current && !parentMenuRef.current.contains(document.activeElement)) parentMenuRef.current.focus();
        }, 220); // Matches transition duration
    };
    if (isMobile) {
        delete submenuTriggerProps.onBlur;
        delete submenuTriggerProps.onHoverChange;
        if (trayContainerRef.current && submenuTriggerState.isOpen) {
            let subDialogKeyDown = (e)=>{
                switch(e.key){
                    case 'Escape':
                        e.stopPropagation();
                        onBackButtonPress();
                        break;
                }
            };
            tray = /*#__PURE__*/ (0, $7Y1uy$react).createElement((0, $49b26f4b606348f6$export$3dfe97b5c32d8d8c), {
                isSubmenu: true,
                parentMenuTreeState: state,
                rootMenuTriggerState: rootMenuTriggerState,
                wrapperKeyDown: subDialogKeyDown,
                onBackButtonPress: onBackButtonPress
            }, content);
            overlay = /*#__PURE__*/ (0, $7Y1uy$reactdom).createPortal(tray, trayContainerRef.current);
        }
    } else {
        let onDismissButtonPress = ()=>{
            var _parentMenuRef_current;
            submenuTriggerState.close();
            (_parentMenuRef_current = parentMenuRef.current) === null || _parentMenuRef_current === void 0 ? void 0 : _parentMenuRef_current.focus();
        };
        overlay = /*#__PURE__*/ (0, $7Y1uy$react).createElement((0, $7Y1uy$Popover), {
            ...popoverProps,
            UNSAFE_style: {
                clipPath: 'unset',
                overflow: 'visible',
                filter: 'unset',
                borderWidth: '0px'
            },
            UNSAFE_className: (0, $7Y1uy$classNames)((0, ($parcel$interopDefault($7Y1uy$menu_vars_cssmodulejs))), 'spectrum-Submenu-popover'),
            onDismissButtonPress: onDismissButtonPress,
            onBlurWithin: onBlurWithin,
            container: popoverContainer,
            state: submenuTriggerState,
            ref: popoverRef,
            triggerRef: triggerRef,
            placement: "end top",
            containerPadding: 0,
            hideArrow: true,
            enableBothDismissButtons: true
        }, /*#__PURE__*/ (0, $7Y1uy$react).createElement((0, $7Y1uy$FocusScope), {
            restoreFocus: true,
            contain: true
        }, content));
    }
    return /*#__PURE__*/ (0, $7Y1uy$react).createElement((0, $7Y1uy$react).Fragment, null, /*#__PURE__*/ (0, $7Y1uy$react).createElement((0, $d94604d52c3e3feb$export$8d97fe02339fc0e3).Provider, {
        value: {
            isUnavailable: isUnavailable,
            triggerRef: triggerRef,
            ...submenuTriggerProps
        }
    }, trigger), /*#__PURE__*/ (0, $7Y1uy$react).createElement((0, $7Y1uy$SlotProvider), {
        slots: slots
    }, submenuTriggerState.isOpen && overlay));
}
$726fb1b478e356bf$var$ContextualHelpTrigger.getCollectionNode = function* getCollectionNode(props) {
    let childArray = [];
    (0, $7Y1uy$react).Children.forEach(props.children, (child)=>{
        if (/*#__PURE__*/ (0, $7Y1uy$react).isValidElement(child)) childArray.push(child);
    });
    let [trigger] = childArray;
    let [, content] = props.children;
    yield {
        element: /*#__PURE__*/ (0, $7Y1uy$react).cloneElement(trigger, {
            ...trigger.props,
            hasChildItems: true,
            isTrigger: true
        }),
        wrapper: (element)=>/*#__PURE__*/ (0, $7Y1uy$react).createElement($726fb1b478e356bf$var$ContextualHelpTrigger, {
                key: element.key,
                targetKey: element.key,
                ...props
            }, element, content)
    };
};
let $726fb1b478e356bf$export$5413b169fff83e61 = $726fb1b478e356bf$var$ContextualHelpTrigger;


export {$726fb1b478e356bf$export$5413b169fff83e61 as ContextualHelpTrigger};
//# sourceMappingURL=ContextualHelpTrigger.module.js.map
