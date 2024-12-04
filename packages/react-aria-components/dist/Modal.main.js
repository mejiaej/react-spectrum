var $c5ccf687772c0422$exports = require("./utils.main.js");
var $2979ab89b336194b$exports = require("./Dialog.main.js");
var $cIZLj$reactaria = require("react-aria");
var $cIZLj$reactariautils = require("@react-aria/utils");
var $cIZLj$reactstately = require("react-stately");
var $cIZLj$react = require("react");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "ModalContext", () => $71899cff63e14b82$export$ab57792b9b6974a6);
$parcel$export(module.exports, "Modal", () => $71899cff63e14b82$export$2b77a92f1a5ad772);
$parcel$export(module.exports, "ModalOverlay", () => $71899cff63e14b82$export$8948f78d83984c69);
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





const $71899cff63e14b82$export$ab57792b9b6974a6 = /*#__PURE__*/ (0, $cIZLj$react.createContext)(null);
const $71899cff63e14b82$var$InternalModalContext = /*#__PURE__*/ (0, $cIZLj$react.createContext)(null);
const $71899cff63e14b82$export$2b77a92f1a5ad772 = /*#__PURE__*/ (0, $cIZLj$react.forwardRef)(function Modal(props, ref) {
    let ctx = (0, $cIZLj$react.useContext)($71899cff63e14b82$var$InternalModalContext);
    if (ctx) return /*#__PURE__*/ (0, ($parcel$interopDefault($cIZLj$react))).createElement($71899cff63e14b82$var$ModalContent, {
        ...props,
        modalRef: ref
    }, props.children);
    let { isDismissable: isDismissable, isKeyboardDismissDisabled: isKeyboardDismissDisabled, isOpen: isOpen, defaultOpen: defaultOpen, onOpenChange: onOpenChange, children: children, isEntering: isEntering, isExiting: isExiting, UNSTABLE_portalContainer: UNSTABLE_portalContainer, shouldCloseOnInteractOutside: shouldCloseOnInteractOutside, ...otherProps } = props;
    return /*#__PURE__*/ (0, ($parcel$interopDefault($cIZLj$react))).createElement($71899cff63e14b82$export$8948f78d83984c69, {
        isDismissable: isDismissable,
        isKeyboardDismissDisabled: isKeyboardDismissDisabled,
        isOpen: isOpen,
        defaultOpen: defaultOpen,
        onOpenChange: onOpenChange,
        isEntering: isEntering,
        isExiting: isExiting,
        UNSTABLE_portalContainer: UNSTABLE_portalContainer,
        shouldCloseOnInteractOutside: shouldCloseOnInteractOutside
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($cIZLj$react))).createElement($71899cff63e14b82$var$ModalContent, {
        ...otherProps,
        modalRef: ref
    }, children));
});
function $71899cff63e14b82$var$ModalOverlayWithForwardRef(props, ref) {
    [props, ref] = (0, $c5ccf687772c0422$exports.useContextProps)(props, ref, $71899cff63e14b82$export$ab57792b9b6974a6);
    let contextState = (0, $cIZLj$react.useContext)((0, $2979ab89b336194b$exports.OverlayTriggerStateContext));
    let localState = (0, $cIZLj$reactstately.useOverlayTriggerState)(props);
    let state = props.isOpen != null || props.defaultOpen != null || !contextState ? localState : contextState;
    let objectRef = (0, $cIZLj$reactariautils.useObjectRef)(ref);
    let modalRef = (0, $cIZLj$react.useRef)(null);
    let isOverlayExiting = (0, $c5ccf687772c0422$exports.useExitAnimation)(objectRef, state.isOpen);
    let isModalExiting = (0, $c5ccf687772c0422$exports.useExitAnimation)(modalRef, state.isOpen);
    let isExiting = isOverlayExiting || isModalExiting || props.isExiting || false;
    let isSSR = (0, $cIZLj$reactaria.useIsSSR)();
    if (!state.isOpen && !isExiting || isSSR) return null;
    return /*#__PURE__*/ (0, ($parcel$interopDefault($cIZLj$react))).createElement($71899cff63e14b82$var$ModalOverlayInner, {
        ...props,
        state: state,
        isExiting: isExiting,
        overlayRef: objectRef,
        modalRef: modalRef
    });
}
const $71899cff63e14b82$export$8948f78d83984c69 = /*#__PURE__*/ (0, $cIZLj$react.forwardRef)($71899cff63e14b82$var$ModalOverlayWithForwardRef);
function $71899cff63e14b82$var$ModalOverlayInner({ UNSTABLE_portalContainer: UNSTABLE_portalContainer, ...props }) {
    let modalRef = props.modalRef;
    let { state: state } = props;
    let { modalProps: modalProps, underlayProps: underlayProps } = (0, $cIZLj$reactaria.useModalOverlay)(props, state, modalRef);
    let entering = (0, $c5ccf687772c0422$exports.useEnterAnimation)(props.overlayRef) || props.isEntering || false;
    let renderProps = (0, $c5ccf687772c0422$exports.useRenderProps)({
        ...props,
        defaultClassName: 'react-aria-ModalOverlay',
        values: {
            isEntering: entering,
            isExiting: props.isExiting,
            state: state
        }
    });
    let viewport = (0, $cIZLj$reactariautils.useViewportSize)();
    let style = {
        ...renderProps.style,
        '--visual-viewport-height': viewport.height + 'px'
    };
    return /*#__PURE__*/ (0, ($parcel$interopDefault($cIZLj$react))).createElement((0, $cIZLj$reactaria.Overlay), {
        isExiting: props.isExiting,
        portalContainer: UNSTABLE_portalContainer
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($cIZLj$react))).createElement("div", {
        ...(0, $cIZLj$reactariautils.mergeProps)((0, $cIZLj$reactariautils.filterDOMProps)(props), underlayProps),
        ...renderProps,
        style: style,
        ref: props.overlayRef,
        "data-entering": entering || undefined,
        "data-exiting": props.isExiting || undefined
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($cIZLj$react))).createElement((0, $c5ccf687772c0422$exports.Provider), {
        values: [
            [
                $71899cff63e14b82$var$InternalModalContext,
                {
                    modalProps: modalProps,
                    modalRef: modalRef,
                    isExiting: props.isExiting,
                    isDismissable: props.isDismissable
                }
            ],
            [
                (0, $2979ab89b336194b$exports.OverlayTriggerStateContext),
                state
            ]
        ]
    }, renderProps.children)));
}
function $71899cff63e14b82$var$ModalContent(props) {
    let { modalProps: modalProps, modalRef: modalRef, isExiting: isExiting, isDismissable: isDismissable } = (0, $cIZLj$react.useContext)($71899cff63e14b82$var$InternalModalContext);
    let state = (0, $cIZLj$react.useContext)((0, $2979ab89b336194b$exports.OverlayTriggerStateContext));
    let mergedRefs = (0, $cIZLj$react.useMemo)(()=>(0, $cIZLj$reactariautils.mergeRefs)(props.modalRef, modalRef), [
        props.modalRef,
        modalRef
    ]);
    let ref = (0, $cIZLj$reactariautils.useObjectRef)(mergedRefs);
    let entering = (0, $c5ccf687772c0422$exports.useEnterAnimation)(ref);
    let renderProps = (0, $c5ccf687772c0422$exports.useRenderProps)({
        ...props,
        defaultClassName: 'react-aria-Modal',
        values: {
            isEntering: entering,
            isExiting: isExiting,
            state: state
        }
    });
    return /*#__PURE__*/ (0, ($parcel$interopDefault($cIZLj$react))).createElement("div", {
        ...(0, $cIZLj$reactariautils.mergeProps)((0, $cIZLj$reactariautils.filterDOMProps)(props), modalProps),
        ...renderProps,
        ref: ref,
        "data-entering": entering || undefined,
        "data-exiting": isExiting || undefined
    }, isDismissable && /*#__PURE__*/ (0, ($parcel$interopDefault($cIZLj$react))).createElement((0, $cIZLj$reactaria.DismissButton), {
        onDismiss: state.close
    }), renderProps.children);
}


//# sourceMappingURL=Modal.main.js.map
