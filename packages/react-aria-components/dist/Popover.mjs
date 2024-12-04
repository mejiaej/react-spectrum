import {useContextProps as $64fa3d84918910a7$export$29f1550f4b0d4415, useEnterAnimation as $64fa3d84918910a7$export$6d3443f2c48bfc20, useExitAnimation as $64fa3d84918910a7$export$45fda7c47f93fd48, useRenderProps as $64fa3d84918910a7$export$4d86445c2cf5e3} from "./utils.mjs";
import {OverlayArrowContext as $44f671af83e7d9e0$export$2de4954e8ae13b9f} from "./OverlayArrow.mjs";
import {OverlayTriggerStateContext as $de32f1b87079253c$export$d2f961adcb0afbe} from "./Dialog.mjs";
import {usePopover as $ehFet$usePopover, Overlay as $ehFet$Overlay, DismissButton as $ehFet$DismissButton} from "react-aria";
import {useLayoutEffect as $ehFet$useLayoutEffect, mergeProps as $ehFet$mergeProps, filterDOMProps as $ehFet$filterDOMProps} from "@react-aria/utils";
import {useOverlayTriggerState as $ehFet$useOverlayTriggerState} from "react-stately";
import $ehFet$react, {createContext as $ehFet$createContext, forwardRef as $ehFet$forwardRef, useContext as $ehFet$useContext, useRef as $ehFet$useRef, useState as $ehFet$useState} from "react";
import {useIsHidden as $ehFet$useIsHidden} from "@react-aria/collections";

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







const $07b14b47974efb58$export$9b9a0cd73afb7ca4 = /*#__PURE__*/ (0, $ehFet$createContext)(null);
const $07b14b47974efb58$export$5b6b19405a83ff9d = /*#__PURE__*/ (0, $ehFet$forwardRef)(function Popover(props, ref) {
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $07b14b47974efb58$export$9b9a0cd73afb7ca4);
    let contextState = (0, $ehFet$useContext)((0, $de32f1b87079253c$export$d2f961adcb0afbe));
    let localState = (0, $ehFet$useOverlayTriggerState)(props);
    let state = props.isOpen != null || props.defaultOpen != null || !contextState ? localState : contextState;
    let isExiting = (0, $64fa3d84918910a7$export$45fda7c47f93fd48)(ref, state.isOpen) || props.isExiting || false;
    let isHidden = (0, $ehFet$useIsHidden)();
    // If we are in a hidden tree, we still need to preserve our children.
    if (isHidden) {
        let children = props.children;
        if (typeof children === 'function') children = children({
            trigger: props.trigger || null,
            placement: 'bottom',
            isEntering: false,
            isExiting: false,
            defaultChildren: null
        });
        return /*#__PURE__*/ (0, $ehFet$react).createElement((0, $ehFet$react).Fragment, null, children);
    }
    if (state && !state.isOpen && !isExiting) return null;
    return /*#__PURE__*/ (0, $ehFet$react).createElement($07b14b47974efb58$var$PopoverInner, {
        ...props,
        triggerRef: props.triggerRef,
        state: state,
        popoverRef: ref,
        isExiting: isExiting
    });
});
function $07b14b47974efb58$var$PopoverInner({ state: state, isExiting: isExiting, UNSTABLE_portalContainer: UNSTABLE_portalContainer, ...props }) {
    // Calculate the arrow size internally (and remove props.arrowSize from PopoverProps)
    // Referenced from: packages/@react-spectrum/tooltip/src/TooltipTrigger.tsx
    let arrowRef = (0, $ehFet$useRef)(null);
    let [arrowWidth, setArrowWidth] = (0, $ehFet$useState)(0);
    (0, $ehFet$useLayoutEffect)(()=>{
        if (arrowRef.current && state.isOpen) setArrowWidth(arrowRef.current.getBoundingClientRect().width);
    }, [
        state.isOpen,
        arrowRef
    ]);
    var _props_offset;
    let { popoverProps: popoverProps, underlayProps: underlayProps, arrowProps: arrowProps, placement: placement } = (0, $ehFet$usePopover)({
        ...props,
        offset: (_props_offset = props.offset) !== null && _props_offset !== void 0 ? _props_offset : 8,
        arrowSize: arrowWidth
    }, state);
    let ref = props.popoverRef;
    let isEntering = (0, $64fa3d84918910a7$export$6d3443f2c48bfc20)(ref, !!placement) || props.isEntering || false;
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        defaultClassName: 'react-aria-Popover',
        values: {
            trigger: props.trigger || null,
            placement: placement,
            isEntering: isEntering,
            isExiting: isExiting
        }
    });
    let style = {
        ...popoverProps.style,
        ...renderProps.style
    };
    return /*#__PURE__*/ (0, $ehFet$react).createElement((0, $ehFet$Overlay), {
        ...props,
        isExiting: isExiting,
        portalContainer: UNSTABLE_portalContainer
    }, !props.isNonModal && state.isOpen && /*#__PURE__*/ (0, $ehFet$react).createElement("div", {
        "data-testid": "underlay",
        ...underlayProps,
        style: {
            position: 'fixed',
            inset: 0
        }
    }), /*#__PURE__*/ (0, $ehFet$react).createElement("div", {
        ...(0, $ehFet$mergeProps)((0, $ehFet$filterDOMProps)(props), popoverProps),
        ...renderProps,
        ref: ref,
        slot: props.slot || undefined,
        style: style,
        "data-trigger": props.trigger,
        "data-placement": placement,
        "data-entering": isEntering || undefined,
        "data-exiting": isExiting || undefined
    }, !props.isNonModal && /*#__PURE__*/ (0, $ehFet$react).createElement((0, $ehFet$DismissButton), {
        onDismiss: state.close
    }), /*#__PURE__*/ (0, $ehFet$react).createElement((0, $44f671af83e7d9e0$export$2de4954e8ae13b9f).Provider, {
        value: {
            ...arrowProps,
            placement: placement,
            ref: arrowRef
        }
    }, renderProps.children), /*#__PURE__*/ (0, $ehFet$react).createElement((0, $ehFet$DismissButton), {
        onDismiss: state.close
    })));
}


export {$07b14b47974efb58$export$9b9a0cd73afb7ca4 as PopoverContext, $07b14b47974efb58$export$5b6b19405a83ff9d as Popover};
//# sourceMappingURL=Popover.module.js.map
