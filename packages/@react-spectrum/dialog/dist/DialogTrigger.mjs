import {DialogContext as $97b119e05830ea0d$export$8b93a07348a7730c} from "./context.mjs";
import {Modal as $jYq0n$Modal, Tray as $jYq0n$Tray, Popover as $jYq0n$Popover} from "@react-spectrum/overlays";
import {useOverlayTriggerState as $jYq0n$useOverlayTriggerState} from "@react-stately/overlays";
import {PressResponder as $jYq0n$PressResponder} from "@react-aria/interactions";
import $jYq0n$react, {useRef as $jYq0n$useRef, useEffect as $jYq0n$useEffect, Fragment as $jYq0n$Fragment} from "react";
import {useIsMobileDevice as $jYq0n$useIsMobileDevice} from "@react-spectrum/utils";
import {useOverlayTrigger as $jYq0n$useOverlayTrigger} from "@react-aria/overlays";

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






function $c412c5ea680c1e4f$var$DialogTrigger(props) {
    let { children: children, type: type = 'modal', mobileType: mobileType = type === 'popover' ? 'modal' : type, hideArrow: hideArrow, targetRef: targetRef, isDismissable: isDismissable, isKeyboardDismissDisabled: isKeyboardDismissDisabled, ...positionProps } = props;
    if (!Array.isArray(children) || children.length > 2) throw new Error('DialogTrigger must have exactly 2 children');
    // if a function is passed as the second child, it won't appear in toArray
    let [trigger, content] = children;
    // On small devices, show a modal or tray instead of a popover.
    let isMobile = (0, $jYq0n$useIsMobileDevice)();
    if (isMobile) {
        // handle cases where desktop popovers need a close button for the mobile modal view
        if (type !== 'modal' && mobileType === 'modal') isDismissable = true;
        type = mobileType;
    }
    let state = (0, $jYq0n$useOverlayTriggerState)(props);
    let wasOpen = (0, $jYq0n$useRef)(false);
    (0, $jYq0n$useEffect)(()=>{
        wasOpen.current = state.isOpen;
    }, [
        state.isOpen
    ]);
    let isExiting = (0, $jYq0n$useRef)(false);
    let onExiting = ()=>isExiting.current = true;
    let onExited = ()=>isExiting.current = false;
    (0, $jYq0n$useEffect)(()=>{
        return ()=>{
            if ((wasOpen.current || isExiting.current) && type !== 'popover' && type !== 'tray') console.warn('A DialogTrigger unmounted while open. This is likely due to being placed within a trigger that unmounts or inside a conditional. Consider using a DialogContainer instead.');
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    if (type === 'popover') return /*#__PURE__*/ (0, $jYq0n$react).createElement($c412c5ea680c1e4f$var$PopoverTrigger, {
        ...positionProps,
        state: state,
        targetRef: targetRef,
        trigger: trigger,
        content: content,
        isKeyboardDismissDisabled: isKeyboardDismissDisabled,
        hideArrow: hideArrow
    });
    let renderOverlay = ()=>{
        switch(type){
            case 'fullscreen':
            case 'fullscreenTakeover':
            case 'modal':
                return /*#__PURE__*/ (0, $jYq0n$react).createElement((0, $jYq0n$Modal), {
                    state: state,
                    isDismissable: type === 'modal' ? isDismissable : false,
                    type: type,
                    isKeyboardDismissDisabled: isKeyboardDismissDisabled,
                    onExiting: onExiting,
                    onExited: onExited
                }, typeof content === 'function' ? content(state.close) : content);
            case 'tray':
                return /*#__PURE__*/ (0, $jYq0n$react).createElement((0, $jYq0n$Tray), {
                    state: state,
                    isKeyboardDismissDisabled: isKeyboardDismissDisabled
                }, typeof content === 'function' ? content(state.close) : content);
        }
    };
    return /*#__PURE__*/ (0, $jYq0n$react).createElement($c412c5ea680c1e4f$var$DialogTriggerBase, {
        type: type,
        state: state,
        isDismissable: isDismissable,
        trigger: trigger,
        overlay: renderOverlay()
    });
}
// Support DialogTrigger inside components using CollectionBuilder.
$c412c5ea680c1e4f$var$DialogTrigger.getCollectionNode = function*(props) {
    // @ts-ignore - seems like types are wrong. Function children work fine.
    let [trigger] = (0, $jYq0n$react).Children.toArray(props.children);
    let [, content] = props.children;
    yield {
        element: trigger,
        wrapper: (element)=>/*#__PURE__*/ (0, $jYq0n$react).createElement($c412c5ea680c1e4f$var$DialogTrigger, {
                key: element.key,
                ...props
            }, element, content)
    };
};
/**
 * DialogTrigger serves as a wrapper around a Dialog and its associated trigger, linking the Dialog's
 * open state with the trigger's press state. Additionally, it allows you to customize the type and
 * positioning of the Dialog.
 */ // We don't want getCollectionNode to show up in the type definition
let $c412c5ea680c1e4f$export$2e1e1122cf0cba88 = $c412c5ea680c1e4f$var$DialogTrigger;
function $c412c5ea680c1e4f$var$PopoverTrigger({ state: state, targetRef: targetRef, trigger: trigger, content: content, hideArrow: hideArrow, ...props }) {
    let triggerRef = (0, $jYq0n$useRef)(null);
    let { triggerProps: triggerProps, overlayProps: overlayProps } = (0, $jYq0n$useOverlayTrigger)({
        type: 'dialog'
    }, state, triggerRef);
    let triggerPropsWithRef = {
        ...triggerProps,
        ref: targetRef ? undefined : triggerRef
    };
    let overlay = /*#__PURE__*/ (0, $jYq0n$react).createElement((0, $jYq0n$Popover), {
        ...props,
        hideArrow: hideArrow,
        triggerRef: targetRef || triggerRef,
        state: state
    }, typeof content === 'function' ? content(state.close) : content);
    return /*#__PURE__*/ (0, $jYq0n$react).createElement($c412c5ea680c1e4f$var$DialogTriggerBase, {
        type: "popover",
        state: state,
        triggerProps: triggerPropsWithRef,
        dialogProps: overlayProps,
        trigger: trigger,
        overlay: overlay
    });
}
function $c412c5ea680c1e4f$var$DialogTriggerBase({ type: type, state: state, isDismissable: isDismissable, dialogProps: dialogProps = {}, triggerProps: triggerProps = {}, overlay: overlay, trigger: trigger }) {
    let context = {
        type: type,
        onClose: state.close,
        isDismissable: isDismissable,
        ...dialogProps
    };
    return /*#__PURE__*/ (0, $jYq0n$react).createElement((0, $jYq0n$Fragment), null, /*#__PURE__*/ (0, $jYq0n$react).createElement((0, $jYq0n$PressResponder), {
        ...triggerProps,
        onPress: state.toggle,
        isPressed: state.isOpen && type !== 'modal' && type !== 'fullscreen' && type !== 'fullscreenTakeover'
    }, trigger), /*#__PURE__*/ (0, $jYq0n$react).createElement((0, $97b119e05830ea0d$export$8b93a07348a7730c).Provider, {
        value: context
    }, overlay));
}


export {$c412c5ea680c1e4f$export$2e1e1122cf0cba88 as DialogTrigger};
//# sourceMappingURL=DialogTrigger.module.js.map
