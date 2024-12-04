var $c5ccf687772c0422$exports = require("./utils.main.js");
var $ee5958cbdc6becc1$exports = require("./OverlayArrow.main.js");
var $2979ab89b336194b$exports = require("./Dialog.main.js");
var $4DQW2$reactaria = require("react-aria");
var $4DQW2$reactariautils = require("@react-aria/utils");
var $4DQW2$reactstately = require("react-stately");
var $4DQW2$react = require("react");
var $4DQW2$reactariacollections = require("@react-aria/collections");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "PopoverContext", () => $61e2b7078adb18bc$export$9b9a0cd73afb7ca4);
$parcel$export(module.exports, "Popover", () => $61e2b7078adb18bc$export$5b6b19405a83ff9d);
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







const $61e2b7078adb18bc$export$9b9a0cd73afb7ca4 = /*#__PURE__*/ (0, $4DQW2$react.createContext)(null);
const $61e2b7078adb18bc$export$5b6b19405a83ff9d = /*#__PURE__*/ (0, $4DQW2$react.forwardRef)(function Popover(props, ref) {
    [props, ref] = (0, $c5ccf687772c0422$exports.useContextProps)(props, ref, $61e2b7078adb18bc$export$9b9a0cd73afb7ca4);
    let contextState = (0, $4DQW2$react.useContext)((0, $2979ab89b336194b$exports.OverlayTriggerStateContext));
    let localState = (0, $4DQW2$reactstately.useOverlayTriggerState)(props);
    let state = props.isOpen != null || props.defaultOpen != null || !contextState ? localState : contextState;
    let isExiting = (0, $c5ccf687772c0422$exports.useExitAnimation)(ref, state.isOpen) || props.isExiting || false;
    let isHidden = (0, $4DQW2$reactariacollections.useIsHidden)();
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
        return /*#__PURE__*/ (0, ($parcel$interopDefault($4DQW2$react))).createElement((0, ($parcel$interopDefault($4DQW2$react))).Fragment, null, children);
    }
    if (state && !state.isOpen && !isExiting) return null;
    return /*#__PURE__*/ (0, ($parcel$interopDefault($4DQW2$react))).createElement($61e2b7078adb18bc$var$PopoverInner, {
        ...props,
        triggerRef: props.triggerRef,
        state: state,
        popoverRef: ref,
        isExiting: isExiting
    });
});
function $61e2b7078adb18bc$var$PopoverInner({ state: state, isExiting: isExiting, UNSTABLE_portalContainer: UNSTABLE_portalContainer, ...props }) {
    // Calculate the arrow size internally (and remove props.arrowSize from PopoverProps)
    // Referenced from: packages/@react-spectrum/tooltip/src/TooltipTrigger.tsx
    let arrowRef = (0, $4DQW2$react.useRef)(null);
    let [arrowWidth, setArrowWidth] = (0, $4DQW2$react.useState)(0);
    (0, $4DQW2$reactariautils.useLayoutEffect)(()=>{
        if (arrowRef.current && state.isOpen) setArrowWidth(arrowRef.current.getBoundingClientRect().width);
    }, [
        state.isOpen,
        arrowRef
    ]);
    var _props_offset;
    let { popoverProps: popoverProps, underlayProps: underlayProps, arrowProps: arrowProps, placement: placement } = (0, $4DQW2$reactaria.usePopover)({
        ...props,
        offset: (_props_offset = props.offset) !== null && _props_offset !== void 0 ? _props_offset : 8,
        arrowSize: arrowWidth
    }, state);
    let ref = props.popoverRef;
    let isEntering = (0, $c5ccf687772c0422$exports.useEnterAnimation)(ref, !!placement) || props.isEntering || false;
    let renderProps = (0, $c5ccf687772c0422$exports.useRenderProps)({
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
    return /*#__PURE__*/ (0, ($parcel$interopDefault($4DQW2$react))).createElement((0, $4DQW2$reactaria.Overlay), {
        ...props,
        isExiting: isExiting,
        portalContainer: UNSTABLE_portalContainer
    }, !props.isNonModal && state.isOpen && /*#__PURE__*/ (0, ($parcel$interopDefault($4DQW2$react))).createElement("div", {
        "data-testid": "underlay",
        ...underlayProps,
        style: {
            position: 'fixed',
            inset: 0
        }
    }), /*#__PURE__*/ (0, ($parcel$interopDefault($4DQW2$react))).createElement("div", {
        ...(0, $4DQW2$reactariautils.mergeProps)((0, $4DQW2$reactariautils.filterDOMProps)(props), popoverProps),
        ...renderProps,
        ref: ref,
        slot: props.slot || undefined,
        style: style,
        "data-trigger": props.trigger,
        "data-placement": placement,
        "data-entering": isEntering || undefined,
        "data-exiting": isExiting || undefined
    }, !props.isNonModal && /*#__PURE__*/ (0, ($parcel$interopDefault($4DQW2$react))).createElement((0, $4DQW2$reactaria.DismissButton), {
        onDismiss: state.close
    }), /*#__PURE__*/ (0, ($parcel$interopDefault($4DQW2$react))).createElement((0, $ee5958cbdc6becc1$exports.OverlayArrowContext).Provider, {
        value: {
            ...arrowProps,
            placement: placement,
            ref: arrowRef
        }
    }, renderProps.children), /*#__PURE__*/ (0, ($parcel$interopDefault($4DQW2$react))).createElement((0, $4DQW2$reactaria.DismissButton), {
        onDismiss: state.close
    })));
}


//# sourceMappingURL=Popover.main.js.map
