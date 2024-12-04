var $2aebdc186fd41e87$exports = require("./Overlay.main.js");
require("./overlays.f8d97b78.css");
var $e9a663ccb19ed1b0$exports = require("./overlays_css.main.js");
require("./vars.c8553ee9.css");
var $3ba16c5c57f2a636$exports = require("./tray_vars_css.main.js");
var $b900e75089bdd9cd$exports = require("./Underlay.main.js");
var $fWgpJ$reactariaoverlays = require("@react-aria/overlays");
var $fWgpJ$reactspectrumutils = require("@react-spectrum/utils");
var $fWgpJ$react = require("react");
var $fWgpJ$reactariautils = require("@react-aria/utils");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "Tray", () => $6b386deda21be662$export$4589ed81930b555c);
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







const $6b386deda21be662$export$4589ed81930b555c = /*#__PURE__*/ (0, $fWgpJ$react.forwardRef)(function Tray(props, ref) {
    let { children: children, state: state, ...otherProps } = props;
    let domRef = (0, $fWgpJ$reactspectrumutils.useDOMRef)(ref);
    let wrapperRef = (0, $fWgpJ$react.useRef)(null);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($fWgpJ$react))).createElement((0, $2aebdc186fd41e87$exports.Overlay), {
        ...otherProps,
        isOpen: state.isOpen,
        nodeRef: wrapperRef
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($fWgpJ$react))).createElement($6b386deda21be662$var$TrayWrapper, {
        ...props,
        wrapperRef: wrapperRef,
        ref: domRef
    }, children));
});
let $6b386deda21be662$var$TrayWrapper = /*#__PURE__*/ (0, $fWgpJ$react.forwardRef)(function(props, ref) {
    let { children: children, isOpen: isOpen, isFixedHeight: isFixedHeight, state: state, wrapperRef: wrapperRef } = props;
    let { styleProps: styleProps } = (0, $fWgpJ$reactspectrumutils.useStyleProps)(props);
    let objRef = (0, $fWgpJ$reactariautils.useObjectRef)(ref);
    let { modalProps: modalProps, underlayProps: underlayProps } = (0, $fWgpJ$reactariaoverlays.useModalOverlay)({
        ...props,
        isDismissable: true
    }, state, objRef);
    // We need to measure the window's height in JS rather than using percentages in CSS
    // so that contents (e.g. menu) can inherit the max-height properly. Using percentages
    // does not work properly because there is nothing to base the percentage on.
    // We cannot use vh units because mobile browsers adjust the window height dynamically
    // when the address bar/bottom toolbars show and hide on scroll and vh units are fixed.
    // Also, the visual viewport is smaller than the layout viewport when the virtual keyboard
    // is up, so use the VisualViewport API to ensure the tray is displayed above the keyboard.
    let viewport = (0, $fWgpJ$reactariautils.useViewportSize)();
    let wrapperStyle = {
        '--spectrum-visual-viewport-height': viewport.height + 'px'
    };
    let wrapperClassName = (0, $fWgpJ$reactspectrumutils.classNames)((0, ($parcel$interopDefault($3ba16c5c57f2a636$exports))), 'spectrum-Tray-wrapper');
    let className = (0, $fWgpJ$reactspectrumutils.classNames)((0, ($parcel$interopDefault($3ba16c5c57f2a636$exports))), 'spectrum-Tray', {
        'is-open': isOpen,
        'spectrum-Tray--fixedHeight': isFixedHeight
    }, (0, $fWgpJ$reactspectrumutils.classNames)((0, ($parcel$interopDefault($e9a663ccb19ed1b0$exports))), 'spectrum-Tray', 'react-spectrum-Tray'), styleProps.className);
    // Attach Transition's nodeRef to outer most wrapper for node.reflow: https://github.com/reactjs/react-transition-group/blob/c89f807067b32eea6f68fd6c622190d88ced82e2/src/Transition.js#L231
    return /*#__PURE__*/ (0, ($parcel$interopDefault($fWgpJ$react))).createElement("div", {
        ref: wrapperRef
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($fWgpJ$react))).createElement((0, $b900e75089bdd9cd$exports.Underlay), {
        ...underlayProps,
        isOpen: isOpen
    }), /*#__PURE__*/ (0, ($parcel$interopDefault($fWgpJ$react))).createElement("div", {
        className: wrapperClassName,
        style: wrapperStyle
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($fWgpJ$react))).createElement("div", {
        ...styleProps,
        ...modalProps,
        className: className,
        ref: objRef,
        "data-testid": "tray"
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($fWgpJ$react))).createElement((0, $fWgpJ$reactariaoverlays.DismissButton), {
        onDismiss: state.close
    }), children, /*#__PURE__*/ (0, ($parcel$interopDefault($fWgpJ$react))).createElement((0, $fWgpJ$reactariaoverlays.DismissButton), {
        onDismiss: state.close
    }))));
});


//# sourceMappingURL=Tray.main.js.map
