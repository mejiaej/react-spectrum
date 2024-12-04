import {TooltipContext as $b8c00169fae46ac7$export$39ae08fa83328b12} from "./context.mjs";
import {FocusableProvider as $cQFGy$FocusableProvider} from "@react-aria/focus";
import {Overlay as $cQFGy$Overlay} from "@react-spectrum/overlays";
import $cQFGy$react, {useRef as $cQFGy$useRef, useState as $cQFGy$useState} from "react";
import {useLayoutEffect as $cQFGy$useLayoutEffect} from "@react-aria/utils";
import {useOverlayPosition as $cQFGy$useOverlayPosition} from "@react-aria/overlays";
import {useTooltipTrigger as $cQFGy$useTooltipTrigger} from "@react-aria/tooltip";
import {useTooltipTriggerState as $cQFGy$useTooltipTriggerState} from "@react-stately/tooltip";

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







const $019364e6919ef1db$var$DEFAULT_OFFSET = -1; // Offset needed to reach 4px/5px (med/large) distance between tooltip and trigger button
const $019364e6919ef1db$var$DEFAULT_CROSS_OFFSET = 0;
function $019364e6919ef1db$var$TooltipTrigger(props) {
    let { children: children, crossOffset: crossOffset = $019364e6919ef1db$var$DEFAULT_CROSS_OFFSET, isDisabled: isDisabled, offset: offset = $019364e6919ef1db$var$DEFAULT_OFFSET, trigger: triggerAction } = props;
    let [trigger, tooltip] = (0, $cQFGy$react).Children.toArray(children);
    let state = (0, $cQFGy$useTooltipTriggerState)(props);
    let tooltipTriggerRef = (0, $cQFGy$useRef)(null);
    let overlayRef = (0, $cQFGy$useRef)(null);
    let { triggerProps: triggerProps, tooltipProps: tooltipProps } = (0, $cQFGy$useTooltipTrigger)({
        isDisabled: isDisabled,
        trigger: triggerAction
    }, state, tooltipTriggerRef);
    let [borderRadius, setBorderRadius] = (0, $cQFGy$useState)(0);
    (0, $cQFGy$useLayoutEffect)(()=>{
        if (overlayRef.current && state.isOpen) {
            let spectrumBorderRadius = window.getComputedStyle(overlayRef.current).borderRadius;
            if (spectrumBorderRadius !== '') setBorderRadius(parseInt(spectrumBorderRadius, 10));
        }
    }, [
        state.isOpen,
        overlayRef
    ]);
    let arrowRef = (0, $cQFGy$useRef)(null);
    let [arrowWidth, setArrowWidth] = (0, $cQFGy$useState)(0);
    (0, $cQFGy$useLayoutEffect)(()=>{
        if (arrowRef.current && state.isOpen) setArrowWidth(arrowRef.current.getBoundingClientRect().width);
    }, [
        state.isOpen,
        arrowRef
    ]);
    let { overlayProps: overlayProps, arrowProps: arrowProps, placement: placement } = (0, $cQFGy$useOverlayPosition)({
        placement: props.placement || 'top',
        targetRef: tooltipTriggerRef,
        overlayRef: overlayRef,
        offset: offset,
        crossOffset: crossOffset,
        isOpen: state.isOpen,
        shouldFlip: props.shouldFlip,
        containerPadding: props.containerPadding,
        arrowSize: arrowWidth,
        arrowBoundaryOffset: borderRadius,
        onClose: ()=>state.close(true)
    });
    return /*#__PURE__*/ (0, $cQFGy$react).createElement((0, $cQFGy$FocusableProvider), {
        ...triggerProps,
        ref: tooltipTriggerRef
    }, trigger, /*#__PURE__*/ (0, $cQFGy$react).createElement((0, $b8c00169fae46ac7$export$39ae08fa83328b12).Provider, {
        value: {
            state: state,
            placement: placement,
            ref: overlayRef,
            UNSAFE_style: overlayProps.style,
            arrowProps: arrowProps,
            arrowRef: arrowRef,
            ...tooltipProps
        }
    }, /*#__PURE__*/ (0, $cQFGy$react).createElement((0, $cQFGy$Overlay), {
        isOpen: state.isOpen,
        nodeRef: overlayRef
    }, tooltip)));
}
// Support TooltipTrigger inside components using CollectionBuilder.
$019364e6919ef1db$var$TooltipTrigger.getCollectionNode = function*(props) {
    // Replaced the use of React.Children.toArray because it mutates the key prop.
    let childArray = [];
    (0, $cQFGy$react).Children.forEach(props.children, (child)=>{
        if (/*#__PURE__*/ (0, $cQFGy$react).isValidElement(child)) childArray.push(child);
    });
    let [trigger, tooltip] = childArray;
    yield {
        element: trigger,
        wrapper: (element)=>/*#__PURE__*/ (0, $cQFGy$react).createElement($019364e6919ef1db$var$TooltipTrigger, {
                key: element.key,
                ...props
            }, element, tooltip)
    };
};
/**
 * TooltipTrigger wraps around a trigger element and a Tooltip. It handles opening and closing
 * the Tooltip when the user hovers over or focuses the trigger, and positioning the Tooltip
 * relative to the trigger.
 */ // We don't want getCollectionNode to show up in the type definition
let $019364e6919ef1db$export$8c610744efcf8a1d = $019364e6919ef1db$var$TooltipTrigger;


export {$019364e6919ef1db$export$8c610744efcf8a1d as TooltipTrigger};
//# sourceMappingURL=TooltipTrigger.module.js.map
