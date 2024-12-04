var $c5ccf687772c0422$exports = require("./utils.main.js");
var $ee5958cbdc6becc1$exports = require("./OverlayArrow.main.js");
var $ct4WB$reactaria = require("react-aria");
var $ct4WB$reactariafocus = require("@react-aria/focus");
var $ct4WB$reactstately = require("react-stately");
var $ct4WB$react = require("react");
var $ct4WB$reactariautils = require("@react-aria/utils");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "TooltipTriggerStateContext", () => $f9dd4061eb43ac38$export$7a7623236eec67fa);
$parcel$export(module.exports, "TooltipContext", () => $f9dd4061eb43ac38$export$39ae08fa83328b12);
$parcel$export(module.exports, "TooltipTrigger", () => $f9dd4061eb43ac38$export$8c610744efcf8a1d);
$parcel$export(module.exports, "Tooltip", () => $f9dd4061eb43ac38$export$28c660c63b792dea);
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






const $f9dd4061eb43ac38$export$7a7623236eec67fa = /*#__PURE__*/ (0, $ct4WB$react.createContext)(null);
const $f9dd4061eb43ac38$export$39ae08fa83328b12 = /*#__PURE__*/ (0, $ct4WB$react.createContext)(null);
function $f9dd4061eb43ac38$export$8c610744efcf8a1d(props) {
    let state = (0, $ct4WB$reactstately.useTooltipTriggerState)(props);
    let ref = (0, $ct4WB$react.useRef)(null);
    let { triggerProps: triggerProps, tooltipProps: tooltipProps } = (0, $ct4WB$reactaria.useTooltipTrigger)(props, state, ref);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($ct4WB$react))).createElement((0, $c5ccf687772c0422$exports.Provider), {
        values: [
            [
                $f9dd4061eb43ac38$export$7a7623236eec67fa,
                state
            ],
            [
                $f9dd4061eb43ac38$export$39ae08fa83328b12,
                {
                    ...tooltipProps,
                    triggerRef: ref
                }
            ]
        ]
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($ct4WB$react))).createElement((0, $ct4WB$reactariafocus.FocusableProvider), {
        ...triggerProps,
        ref: ref
    }, props.children));
}
const $f9dd4061eb43ac38$export$28c660c63b792dea = /*#__PURE__*/ (0, $ct4WB$react.forwardRef)(function Tooltip({ UNSTABLE_portalContainer: UNSTABLE_portalContainer, ...props }, ref) {
    [props, ref] = (0, $c5ccf687772c0422$exports.useContextProps)(props, ref, $f9dd4061eb43ac38$export$39ae08fa83328b12);
    let contextState = (0, $ct4WB$react.useContext)($f9dd4061eb43ac38$export$7a7623236eec67fa);
    let localState = (0, $ct4WB$reactstately.useTooltipTriggerState)(props);
    let state = props.isOpen != null || props.defaultOpen != null || !contextState ? localState : contextState;
    let isExiting = (0, $c5ccf687772c0422$exports.useExitAnimation)(ref, state.isOpen) || props.isExiting || false;
    if (!state.isOpen && !isExiting) return null;
    return /*#__PURE__*/ (0, ($parcel$interopDefault($ct4WB$react))).createElement((0, $ct4WB$reactaria.OverlayContainer), {
        portalContainer: UNSTABLE_portalContainer
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($ct4WB$react))).createElement($f9dd4061eb43ac38$var$TooltipInner, {
        ...props,
        tooltipRef: ref,
        isExiting: isExiting
    }));
});
function $f9dd4061eb43ac38$var$TooltipInner(props) {
    let state = (0, $ct4WB$react.useContext)($f9dd4061eb43ac38$export$7a7623236eec67fa);
    // Calculate the arrow size internally
    // Referenced from: packages/@react-spectrum/tooltip/src/TooltipTrigger.tsx
    let arrowRef = (0, $ct4WB$react.useRef)(null);
    let [arrowWidth, setArrowWidth] = (0, $ct4WB$react.useState)(0);
    (0, $ct4WB$reactariautils.useLayoutEffect)(()=>{
        if (arrowRef.current && state.isOpen) setArrowWidth(arrowRef.current.getBoundingClientRect().width);
    }, [
        state.isOpen,
        arrowRef
    ]);
    let { overlayProps: overlayProps, arrowProps: arrowProps, placement: placement } = (0, $ct4WB$reactaria.useOverlayPosition)({
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
    let isEntering = (0, $c5ccf687772c0422$exports.useEnterAnimation)(props.tooltipRef, !!placement) || props.isEntering || false;
    let renderProps = (0, $c5ccf687772c0422$exports.useRenderProps)({
        ...props,
        defaultClassName: 'react-aria-Tooltip',
        values: {
            placement: placement,
            isEntering: isEntering,
            isExiting: props.isExiting,
            state: state
        }
    });
    props = (0, $ct4WB$reactaria.mergeProps)(props, overlayProps);
    let { tooltipProps: tooltipProps } = (0, $ct4WB$reactaria.useTooltip)(props, state);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($ct4WB$react))).createElement("div", {
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
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($ct4WB$react))).createElement((0, $ee5958cbdc6becc1$exports.OverlayArrowContext).Provider, {
        value: {
            ...arrowProps,
            placement: placement,
            ref: arrowRef
        }
    }, renderProps.children));
}


//# sourceMappingURL=Tooltip.main.js.map
