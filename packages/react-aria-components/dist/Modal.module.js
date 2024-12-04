import {Provider as $64fa3d84918910a7$export$2881499e37b75b9a, useContextProps as $64fa3d84918910a7$export$29f1550f4b0d4415, useEnterAnimation as $64fa3d84918910a7$export$6d3443f2c48bfc20, useExitAnimation as $64fa3d84918910a7$export$45fda7c47f93fd48, useRenderProps as $64fa3d84918910a7$export$4d86445c2cf5e3} from "./utils.module.js";
import {OverlayTriggerStateContext as $de32f1b87079253c$export$d2f961adcb0afbe} from "./Dialog.module.js";
import {useIsSSR as $daTMi$useIsSSR, useModalOverlay as $daTMi$useModalOverlay, Overlay as $daTMi$Overlay, DismissButton as $daTMi$DismissButton} from "react-aria";
import {useObjectRef as $daTMi$useObjectRef, useViewportSize as $daTMi$useViewportSize, mergeProps as $daTMi$mergeProps, filterDOMProps as $daTMi$filterDOMProps, mergeRefs as $daTMi$mergeRefs} from "@react-aria/utils";
import {useOverlayTriggerState as $daTMi$useOverlayTriggerState} from "react-stately";
import $daTMi$react, {createContext as $daTMi$createContext, forwardRef as $daTMi$forwardRef, useContext as $daTMi$useContext, useRef as $daTMi$useRef, useMemo as $daTMi$useMemo} from "react";

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





const $f3f84453ead64de5$export$ab57792b9b6974a6 = /*#__PURE__*/ (0, $daTMi$createContext)(null);
const $f3f84453ead64de5$var$InternalModalContext = /*#__PURE__*/ (0, $daTMi$createContext)(null);
const $f3f84453ead64de5$export$2b77a92f1a5ad772 = /*#__PURE__*/ (0, $daTMi$forwardRef)(function Modal(props, ref) {
    let ctx = (0, $daTMi$useContext)($f3f84453ead64de5$var$InternalModalContext);
    if (ctx) return /*#__PURE__*/ (0, $daTMi$react).createElement($f3f84453ead64de5$var$ModalContent, {
        ...props,
        modalRef: ref
    }, props.children);
    let { isDismissable: isDismissable, isKeyboardDismissDisabled: isKeyboardDismissDisabled, isOpen: isOpen, defaultOpen: defaultOpen, onOpenChange: onOpenChange, children: children, isEntering: isEntering, isExiting: isExiting, UNSTABLE_portalContainer: UNSTABLE_portalContainer, shouldCloseOnInteractOutside: shouldCloseOnInteractOutside, ...otherProps } = props;
    return /*#__PURE__*/ (0, $daTMi$react).createElement($f3f84453ead64de5$export$8948f78d83984c69, {
        isDismissable: isDismissable,
        isKeyboardDismissDisabled: isKeyboardDismissDisabled,
        isOpen: isOpen,
        defaultOpen: defaultOpen,
        onOpenChange: onOpenChange,
        isEntering: isEntering,
        isExiting: isExiting,
        UNSTABLE_portalContainer: UNSTABLE_portalContainer,
        shouldCloseOnInteractOutside: shouldCloseOnInteractOutside
    }, /*#__PURE__*/ (0, $daTMi$react).createElement($f3f84453ead64de5$var$ModalContent, {
        ...otherProps,
        modalRef: ref
    }, children));
});
function $f3f84453ead64de5$var$ModalOverlayWithForwardRef(props, ref) {
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $f3f84453ead64de5$export$ab57792b9b6974a6);
    let contextState = (0, $daTMi$useContext)((0, $de32f1b87079253c$export$d2f961adcb0afbe));
    let localState = (0, $daTMi$useOverlayTriggerState)(props);
    let state = props.isOpen != null || props.defaultOpen != null || !contextState ? localState : contextState;
    let objectRef = (0, $daTMi$useObjectRef)(ref);
    let modalRef = (0, $daTMi$useRef)(null);
    let isOverlayExiting = (0, $64fa3d84918910a7$export$45fda7c47f93fd48)(objectRef, state.isOpen);
    let isModalExiting = (0, $64fa3d84918910a7$export$45fda7c47f93fd48)(modalRef, state.isOpen);
    let isExiting = isOverlayExiting || isModalExiting || props.isExiting || false;
    let isSSR = (0, $daTMi$useIsSSR)();
    if (!state.isOpen && !isExiting || isSSR) return null;
    return /*#__PURE__*/ (0, $daTMi$react).createElement($f3f84453ead64de5$var$ModalOverlayInner, {
        ...props,
        state: state,
        isExiting: isExiting,
        overlayRef: objectRef,
        modalRef: modalRef
    });
}
const $f3f84453ead64de5$export$8948f78d83984c69 = /*#__PURE__*/ (0, $daTMi$forwardRef)($f3f84453ead64de5$var$ModalOverlayWithForwardRef);
function $f3f84453ead64de5$var$ModalOverlayInner({ UNSTABLE_portalContainer: UNSTABLE_portalContainer, ...props }) {
    let modalRef = props.modalRef;
    let { state: state } = props;
    let { modalProps: modalProps, underlayProps: underlayProps } = (0, $daTMi$useModalOverlay)(props, state, modalRef);
    let entering = (0, $64fa3d84918910a7$export$6d3443f2c48bfc20)(props.overlayRef) || props.isEntering || false;
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        defaultClassName: 'react-aria-ModalOverlay',
        values: {
            isEntering: entering,
            isExiting: props.isExiting,
            state: state
        }
    });
    let viewport = (0, $daTMi$useViewportSize)();
    let style = {
        ...renderProps.style,
        '--visual-viewport-height': viewport.height + 'px'
    };
    return /*#__PURE__*/ (0, $daTMi$react).createElement((0, $daTMi$Overlay), {
        isExiting: props.isExiting,
        portalContainer: UNSTABLE_portalContainer
    }, /*#__PURE__*/ (0, $daTMi$react).createElement("div", {
        ...(0, $daTMi$mergeProps)((0, $daTMi$filterDOMProps)(props), underlayProps),
        ...renderProps,
        style: style,
        ref: props.overlayRef,
        "data-entering": entering || undefined,
        "data-exiting": props.isExiting || undefined
    }, /*#__PURE__*/ (0, $daTMi$react).createElement((0, $64fa3d84918910a7$export$2881499e37b75b9a), {
        values: [
            [
                $f3f84453ead64de5$var$InternalModalContext,
                {
                    modalProps: modalProps,
                    modalRef: modalRef,
                    isExiting: props.isExiting,
                    isDismissable: props.isDismissable
                }
            ],
            [
                (0, $de32f1b87079253c$export$d2f961adcb0afbe),
                state
            ]
        ]
    }, renderProps.children)));
}
function $f3f84453ead64de5$var$ModalContent(props) {
    let { modalProps: modalProps, modalRef: modalRef, isExiting: isExiting, isDismissable: isDismissable } = (0, $daTMi$useContext)($f3f84453ead64de5$var$InternalModalContext);
    let state = (0, $daTMi$useContext)((0, $de32f1b87079253c$export$d2f961adcb0afbe));
    let mergedRefs = (0, $daTMi$useMemo)(()=>(0, $daTMi$mergeRefs)(props.modalRef, modalRef), [
        props.modalRef,
        modalRef
    ]);
    let ref = (0, $daTMi$useObjectRef)(mergedRefs);
    let entering = (0, $64fa3d84918910a7$export$6d3443f2c48bfc20)(ref);
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        defaultClassName: 'react-aria-Modal',
        values: {
            isEntering: entering,
            isExiting: isExiting,
            state: state
        }
    });
    return /*#__PURE__*/ (0, $daTMi$react).createElement("div", {
        ...(0, $daTMi$mergeProps)((0, $daTMi$filterDOMProps)(props), modalProps),
        ...renderProps,
        ref: ref,
        "data-entering": entering || undefined,
        "data-exiting": isExiting || undefined
    }, isDismissable && /*#__PURE__*/ (0, $daTMi$react).createElement((0, $daTMi$DismissButton), {
        onDismiss: state.close
    }), renderProps.children);
}


export {$f3f84453ead64de5$export$ab57792b9b6974a6 as ModalContext, $f3f84453ead64de5$export$2b77a92f1a5ad772 as Modal, $f3f84453ead64de5$export$8948f78d83984c69 as ModalOverlay};
//# sourceMappingURL=Modal.module.js.map
