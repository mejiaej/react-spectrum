import {Provider as $64fa3d84918910a7$export$2881499e37b75b9a, useContextProps as $64fa3d84918910a7$export$29f1550f4b0d4415, useEnterAnimation as $64fa3d84918910a7$export$6d3443f2c48bfc20, useExitAnimation as $64fa3d84918910a7$export$45fda7c47f93fd48, useRenderProps as $64fa3d84918910a7$export$4d86445c2cf5e3} from "./utils.mjs";
import {OverlayArrowContext as $44f671af83e7d9e0$export$2de4954e8ae13b9f} from "./OverlayArrow.mjs";
import {useTooltipTrigger as $cCslV$useTooltipTrigger, OverlayContainer as $cCslV$OverlayContainer, useOverlayPosition as $cCslV$useOverlayPosition, mergeProps as $cCslV$mergeProps, useTooltip as $cCslV$useTooltip} from "react-aria";
import {FocusableProvider as $cCslV$FocusableProvider} from "@react-aria/focus";
import {useTooltipTriggerState as $cCslV$useTooltipTriggerState} from "react-stately";
import $cCslV$react, {createContext as $cCslV$createContext, useRef as $cCslV$useRef, forwardRef as $cCslV$forwardRef, useContext as $cCslV$useContext, useState as $cCslV$useState} from "react";
import {useLayoutEffect as $cCslV$useLayoutEffect} from "@react-aria/utils";

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






const $4e3b923658d69c60$export$7a7623236eec67fa = /*#__PURE__*/ (0, $cCslV$createContext)(null);
const $4e3b923658d69c60$export$39ae08fa83328b12 = /*#__PURE__*/ (0, $cCslV$createContext)(null);
function $4e3b923658d69c60$export$8c610744efcf8a1d(props) {
    let state = (0, $cCslV$useTooltipTriggerState)(props);
    let ref = (0, $cCslV$useRef)(null);
    let { triggerProps: triggerProps, tooltipProps: tooltipProps } = (0, $cCslV$useTooltipTrigger)(props, state, ref);
    return /*#__PURE__*/ (0, $cCslV$react).createElement((0, $64fa3d84918910a7$export$2881499e37b75b9a), {
        values: [
            [
                $4e3b923658d69c60$export$7a7623236eec67fa,
                state
            ],
            [
                $4e3b923658d69c60$export$39ae08fa83328b12,
                {
                    ...tooltipProps,
                    triggerRef: ref
                }
            ]
        ]
    }, /*#__PURE__*/ (0, $cCslV$react).createElement((0, $cCslV$FocusableProvider), {
        ...triggerProps,
        ref: ref
    }, props.children));
}
const $4e3b923658d69c60$export$28c660c63b792dea = /*#__PURE__*/ (0, $cCslV$forwardRef)(function Tooltip({ UNSTABLE_portalContainer: UNSTABLE_portalContainer, ...props }, ref) {
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $4e3b923658d69c60$export$39ae08fa83328b12);
    let contextState = (0, $cCslV$useContext)($4e3b923658d69c60$export$7a7623236eec67fa);
    let localState = (0, $cCslV$useTooltipTriggerState)(props);
    let state = props.isOpen != null || props.defaultOpen != null || !contextState ? localState : contextState;
    let isExiting = (0, $64fa3d84918910a7$export$45fda7c47f93fd48)(ref, state.isOpen) || props.isExiting || false;
    if (!state.isOpen && !isExiting) return null;
    return /*#__PURE__*/ (0, $cCslV$react).createElement((0, $cCslV$OverlayContainer), {
        portalContainer: UNSTABLE_portalContainer
    }, /*#__PURE__*/ (0, $cCslV$react).createElement($4e3b923658d69c60$var$TooltipInner, {
        ...props,
        tooltipRef: ref,
        isExiting: isExiting
    }));
});
function $4e3b923658d69c60$var$TooltipInner(props) {
    let state = (0, $cCslV$useContext)($4e3b923658d69c60$export$7a7623236eec67fa);
    // Calculate the arrow size internally
    // Referenced from: packages/@react-spectrum/tooltip/src/TooltipTrigger.tsx
    let arrowRef = (0, $cCslV$useRef)(null);
    let [arrowWidth, setArrowWidth] = (0, $cCslV$useState)(0);
    (0, $cCslV$useLayoutEffect)(()=>{
        if (arrowRef.current && state.isOpen) setArrowWidth(arrowRef.current.getBoundingClientRect().width);
    }, [
        state.isOpen,
        arrowRef
    ]);
    let { overlayProps: overlayProps, arrowProps: arrowProps, placement: placement } = (0, $cCslV$useOverlayPosition)({
        placement: props.placement || 'top',
        targetRef: props.triggerRef,
        overlayRef: props.tooltipRef,
        offset: props.offset,
        crossOffset: props.crossOffset,
        isOpen: state.isOpen,
        arrowSize: arrowWidth,
        arrowBoundaryOffset: props.arrowBoundaryOffset,
        shouldFlip: props.shouldFlip,
        onClose: ()=>state.close(true)
    });
    let isEntering = (0, $64fa3d84918910a7$export$6d3443f2c48bfc20)(props.tooltipRef, !!placement) || props.isEntering || false;
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        defaultClassName: 'react-aria-Tooltip',
        values: {
            placement: placement,
            isEntering: isEntering,
            isExiting: props.isExiting,
            state: state
        }
    });
    props = (0, $cCslV$mergeProps)(props, overlayProps);
    let { tooltipProps: tooltipProps } = (0, $cCslV$useTooltip)(props, state);
    return /*#__PURE__*/ (0, $cCslV$react).createElement("div", {
        ...tooltipProps,
        ref: props.tooltipRef,
        ...renderProps,
        style: {
            ...overlayProps.style,
            ...renderProps.style
        },
        "data-placement": placement !== null && placement !== void 0 ? placement : undefined,
        "data-entering": isEntering || undefined,
        "data-exiting": props.isExiting || undefined
    }, /*#__PURE__*/ (0, $cCslV$react).createElement((0, $44f671af83e7d9e0$export$2de4954e8ae13b9f).Provider, {
        value: {
            ...arrowProps,
            placement: placement,
            ref: arrowRef
        }
    }, renderProps.children));
}


export {$4e3b923658d69c60$export$7a7623236eec67fa as TooltipTriggerStateContext, $4e3b923658d69c60$export$39ae08fa83328b12 as TooltipContext, $4e3b923658d69c60$export$8c610744efcf8a1d as TooltipTrigger, $4e3b923658d69c60$export$28c660c63b792dea as Tooltip};
//# sourceMappingURL=Tooltip.module.js.map
