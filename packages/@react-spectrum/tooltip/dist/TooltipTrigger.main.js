var $ed2e56c8503433b4$exports = require("./context.main.js");
var $1fBML$reactariafocus = require("@react-aria/focus");
var $1fBML$reactspectrumoverlays = require("@react-spectrum/overlays");
var $1fBML$react = require("react");
var $1fBML$reactariautils = require("@react-aria/utils");
var $1fBML$reactariaoverlays = require("@react-aria/overlays");
var $1fBML$reactariatooltip = require("@react-aria/tooltip");
var $1fBML$reactstatelytooltip = require("@react-stately/tooltip");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "TooltipTrigger", () => $19f06480c1c1a932$export$8c610744efcf8a1d);
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







const $19f06480c1c1a932$var$DEFAULT_OFFSET = -1; // Offset needed to reach 4px/5px (med/large) distance between tooltip and trigger button
const $19f06480c1c1a932$var$DEFAULT_CROSS_OFFSET = 0;
function $19f06480c1c1a932$var$TooltipTrigger(props) {
    let { children: children, crossOffset: crossOffset = $19f06480c1c1a932$var$DEFAULT_CROSS_OFFSET, isDisabled: isDisabled, offset: offset = $19f06480c1c1a932$var$DEFAULT_OFFSET, trigger: triggerAction } = props;
    let [trigger, tooltip] = (0, ($parcel$interopDefault($1fBML$react))).Children.toArray(children);
    let state = (0, $1fBML$reactstatelytooltip.useTooltipTriggerState)(props);
    let tooltipTriggerRef = (0, $1fBML$react.useRef)(null);
    let overlayRef = (0, $1fBML$react.useRef)(null);
    let { triggerProps: triggerProps, tooltipProps: tooltipProps } = (0, $1fBML$reactariatooltip.useTooltipTrigger)({
        isDisabled: isDisabled,
        trigger: triggerAction
    }, state, tooltipTriggerRef);
    let [borderRadius, setBorderRadius] = (0, $1fBML$react.useState)(0);
    (0, $1fBML$reactariautils.useLayoutEffect)(()=>{
        if (overlayRef.current && state.isOpen) {
            let spectrumBorderRadius = window.getComputedStyle(overlayRef.current).borderRadius;
            if (spectrumBorderRadius !== '') setBorderRadius(parseInt(spectrumBorderRadius, 10));
        }
    }, [
        state.isOpen,
        overlayRef
    ]);
    let arrowRef = (0, $1fBML$react.useRef)(null);
    let [arrowWidth, setArrowWidth] = (0, $1fBML$react.useState)(0);
    (0, $1fBML$reactariautils.useLayoutEffect)(()=>{
        if (arrowRef.current && state.isOpen) setArrowWidth(arrowRef.current.getBoundingClientRect().width);
    }, [
        state.isOpen,
        arrowRef
    ]);
    let { overlayProps: overlayProps, arrowProps: arrowProps, placement: placement } = (0, $1fBML$reactariaoverlays.useOverlayPosition)({
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
    return /*#__PURE__*/ (0, ($parcel$interopDefault($1fBML$react))).createElement((0, $1fBML$reactariafocus.FocusableProvider), {
        ...triggerProps,
        ref: tooltipTriggerRef
    }, trigger, /*#__PURE__*/ (0, ($parcel$interopDefault($1fBML$react))).createElement((0, $ed2e56c8503433b4$exports.TooltipContext).Provider, {
        value: {
            state: state,
            placement: placement,
            ref: overlayRef,
            UNSAFE_style: overlayProps.style,
            arrowProps: arrowProps,
            arrowRef: arrowRef,
            ...tooltipProps
        }
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($1fBML$react))).createElement((0, $1fBML$reactspectrumoverlays.Overlay), {
        isOpen: state.isOpen,
        nodeRef: overlayRef
    }, tooltip)));
}
// Support TooltipTrigger inside components using CollectionBuilder.
$19f06480c1c1a932$var$TooltipTrigger.getCollectionNode = function*(props) {
    // Replaced the use of React.Children.toArray because it mutates the key prop.
    let childArray = [];
    (0, ($parcel$interopDefault($1fBML$react))).Children.forEach(props.children, (child)=>{
        if (/*#__PURE__*/ (0, ($parcel$interopDefault($1fBML$react))).isValidElement(child)) childArray.push(child);
    });
    let [trigger, tooltip] = childArray;
    yield {
        element: trigger,
        wrapper: (element)=>/*#__PURE__*/ (0, ($parcel$interopDefault($1fBML$react))).createElement($19f06480c1c1a932$var$TooltipTrigger, {
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
let $19f06480c1c1a932$export$8c610744efcf8a1d = $19f06480c1c1a932$var$TooltipTrigger;


//# sourceMappingURL=TooltipTrigger.main.js.map
