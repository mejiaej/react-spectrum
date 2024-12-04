import "./vars.a1de7c32.css";
import $e9TuM$modal_vars_cssmodulejs from "./modal_vars_css.module.js";
import {Overlay as $70305dc5fb729c3b$export$c6fdb837b070b4ff} from "./Overlay.module.js";
import "./overlays.f8d97b78.css";
import $e9TuM$overlays_cssmodulejs from "./overlays_css.module.js";
import {Underlay as $76a452f4e3df11be$export$f360afc887607b02} from "./Underlay.module.js";
import {useModalOverlay as $e9TuM$useModalOverlay} from "@react-aria/overlays";
import {useDOMRef as $e9TuM$useDOMRef, useStyleProps as $e9TuM$useStyleProps, classNames as $e9TuM$classNames} from "@react-spectrum/utils";
import $e9TuM$react, {forwardRef as $e9TuM$forwardRef, useRef as $e9TuM$useRef} from "react";
import {useObjectRef as $e9TuM$useObjectRef, useViewportSize as $e9TuM$useViewportSize} from "@react-aria/utils";


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







const $842084dfa182af65$export$2b77a92f1a5ad772 = /*#__PURE__*/ (0, $e9TuM$forwardRef)(function Modal(props, ref) {
    let { children: children, state: state, ...otherProps } = props;
    let domRef = (0, $e9TuM$useDOMRef)(ref);
    let wrapperRef = (0, $e9TuM$useRef)(null);
    return /*#__PURE__*/ (0, $e9TuM$react).createElement((0, $70305dc5fb729c3b$export$c6fdb837b070b4ff), {
        ...otherProps,
        isOpen: state.isOpen,
        nodeRef: wrapperRef
    }, /*#__PURE__*/ (0, $e9TuM$react).createElement($842084dfa182af65$var$ModalWrapper, {
        ...props,
        wrapperRef: wrapperRef,
        ref: domRef
    }, children));
});
let $842084dfa182af65$var$typeMap = {
    fullscreen: 'fullscreen',
    fullscreenTakeover: 'fullscreenTakeover'
};
let $842084dfa182af65$var$ModalWrapper = /*#__PURE__*/ (0, $e9TuM$forwardRef)(function(props, ref) {
    let { type: type, children: children, state: state, isOpen: isOpen, wrapperRef: wrapperRef } = props;
    let typeVariant = type != null ? $842084dfa182af65$var$typeMap[type] : undefined;
    let { styleProps: styleProps } = (0, $e9TuM$useStyleProps)(props);
    let objRef = (0, $e9TuM$useObjectRef)(ref);
    let { modalProps: modalProps, underlayProps: underlayProps } = (0, $e9TuM$useModalOverlay)(props, state, objRef);
    let wrapperClassName = (0, $e9TuM$classNames)((0, ($parcel$interopDefault($e9TuM$modal_vars_cssmodulejs))), 'spectrum-Modal-wrapper', (0, $e9TuM$classNames)((0, ($parcel$interopDefault($e9TuM$overlays_cssmodulejs))), 'spectrum-Modal-wrapper', 'react-spectrum-Modal-wrapper'));
    let modalClassName = (0, $e9TuM$classNames)((0, ($parcel$interopDefault($e9TuM$modal_vars_cssmodulejs))), 'spectrum-Modal', {
        'is-open': isOpen
    }, (0, $e9TuM$classNames)((0, ($parcel$interopDefault($e9TuM$overlays_cssmodulejs))), 'spectrum-Modal', 'react-spectrum-Modal'), {
        [`spectrum-Modal--${typeVariant}`]: typeVariant
    }, styleProps.className);
    let viewport = (0, $e9TuM$useViewportSize)();
    let style = {
        '--spectrum-visual-viewport-height': viewport.height + 'px'
    };
    // Attach Transition's nodeRef to outer most wrapper for node.reflow: https://github.com/reactjs/react-transition-group/blob/c89f807067b32eea6f68fd6c622190d88ced82e2/src/Transition.js#L231
    return /*#__PURE__*/ (0, $e9TuM$react).createElement("div", {
        ref: wrapperRef
    }, /*#__PURE__*/ (0, $e9TuM$react).createElement((0, $76a452f4e3df11be$export$f360afc887607b02), {
        ...underlayProps,
        isOpen: isOpen
    }), /*#__PURE__*/ (0, $e9TuM$react).createElement("div", {
        className: wrapperClassName,
        style: style
    }, /*#__PURE__*/ (0, $e9TuM$react).createElement("div", {
        ...styleProps,
        ...modalProps,
        ref: objRef,
        className: modalClassName,
        "data-testid": "modal"
    }, children)));
});


export {$842084dfa182af65$export$2b77a92f1a5ad772 as Modal};
//# sourceMappingURL=Modal.module.js.map
