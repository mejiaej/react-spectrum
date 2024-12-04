import {Overlay as $70305dc5fb729c3b$export$c6fdb837b070b4ff} from "./Overlay.mjs";
import "./overlays.f8d97b78.css";
import $3XF9U$overlays_cssmodulejs from "./overlays_css.mjs";
import "./vars.c8553ee9.css";
import $3XF9U$tray_vars_cssmodulejs from "./tray_vars_css.mjs";
import {Underlay as $76a452f4e3df11be$export$f360afc887607b02} from "./Underlay.mjs";
import {useModalOverlay as $3XF9U$useModalOverlay, DismissButton as $3XF9U$DismissButton} from "@react-aria/overlays";
import {useDOMRef as $3XF9U$useDOMRef, useStyleProps as $3XF9U$useStyleProps, classNames as $3XF9U$classNames} from "@react-spectrum/utils";
import $3XF9U$react, {forwardRef as $3XF9U$forwardRef, useRef as $3XF9U$useRef} from "react";
import {useObjectRef as $3XF9U$useObjectRef, useViewportSize as $3XF9U$useViewportSize} from "@react-aria/utils";


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







const $1afc87f3d16a5a1c$export$4589ed81930b555c = /*#__PURE__*/ (0, $3XF9U$forwardRef)(function Tray(props, ref) {
    let { children: children, state: state, ...otherProps } = props;
    let domRef = (0, $3XF9U$useDOMRef)(ref);
    let wrapperRef = (0, $3XF9U$useRef)(null);
    return /*#__PURE__*/ (0, $3XF9U$react).createElement((0, $70305dc5fb729c3b$export$c6fdb837b070b4ff), {
        ...otherProps,
        isOpen: state.isOpen,
        nodeRef: wrapperRef
    }, /*#__PURE__*/ (0, $3XF9U$react).createElement($1afc87f3d16a5a1c$var$TrayWrapper, {
        ...props,
        wrapperRef: wrapperRef,
        ref: domRef
    }, children));
});
let $1afc87f3d16a5a1c$var$TrayWrapper = /*#__PURE__*/ (0, $3XF9U$forwardRef)(function(props, ref) {
    let { children: children, isOpen: isOpen, isFixedHeight: isFixedHeight, state: state, wrapperRef: wrapperRef } = props;
    let { styleProps: styleProps } = (0, $3XF9U$useStyleProps)(props);
    let objRef = (0, $3XF9U$useObjectRef)(ref);
    let { modalProps: modalProps, underlayProps: underlayProps } = (0, $3XF9U$useModalOverlay)({
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
    let viewport = (0, $3XF9U$useViewportSize)();
    let wrapperStyle = {
        '--spectrum-visual-viewport-height': viewport.height + 'px'
    };
    let wrapperClassName = (0, $3XF9U$classNames)((0, ($parcel$interopDefault($3XF9U$tray_vars_cssmodulejs))), 'spectrum-Tray-wrapper');
    let className = (0, $3XF9U$classNames)((0, ($parcel$interopDefault($3XF9U$tray_vars_cssmodulejs))), 'spectrum-Tray', {
        'is-open': isOpen,
        'spectrum-Tray--fixedHeight': isFixedHeight
    }, (0, $3XF9U$classNames)((0, ($parcel$interopDefault($3XF9U$overlays_cssmodulejs))), 'spectrum-Tray', 'react-spectrum-Tray'), styleProps.className);
    // Attach Transition's nodeRef to outer most wrapper for node.reflow: https://github.com/reactjs/react-transition-group/blob/c89f807067b32eea6f68fd6c622190d88ced82e2/src/Transition.js#L231
    return /*#__PURE__*/ (0, $3XF9U$react).createElement("div", {
        ref: wrapperRef
    }, /*#__PURE__*/ (0, $3XF9U$react).createElement((0, $76a452f4e3df11be$export$f360afc887607b02), {
        ...underlayProps,
        isOpen: isOpen
    }), /*#__PURE__*/ (0, $3XF9U$react).createElement("div", {
        className: wrapperClassName,
        style: wrapperStyle
    }, /*#__PURE__*/ (0, $3XF9U$react).createElement("div", {
        ...styleProps,
        ...modalProps,
        className: className,
        ref: objRef,
        "data-testid": "tray"
    }, /*#__PURE__*/ (0, $3XF9U$react).createElement((0, $3XF9U$DismissButton), {
        onDismiss: state.close
    }), children, /*#__PURE__*/ (0, $3XF9U$react).createElement((0, $3XF9U$DismissButton), {
        onDismiss: state.close
    }))));
});


export {$1afc87f3d16a5a1c$export$4589ed81930b555c as Tray};
//# sourceMappingURL=Tray.module.js.map
