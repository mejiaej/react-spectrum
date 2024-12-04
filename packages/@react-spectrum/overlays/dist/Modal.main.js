require("./vars.a1de7c32.css");
var $86571b803f942ff3$exports = require("./modal_vars_css.main.js");
var $2aebdc186fd41e87$exports = require("./Overlay.main.js");
require("./overlays.f8d97b78.css");
var $e9a663ccb19ed1b0$exports = require("./overlays_css.main.js");
var $b900e75089bdd9cd$exports = require("./Underlay.main.js");
var $aM0tW$reactariaoverlays = require("@react-aria/overlays");
var $aM0tW$reactspectrumutils = require("@react-spectrum/utils");
var $aM0tW$react = require("react");
var $aM0tW$reactariautils = require("@react-aria/utils");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "Modal", () => $fc75a6aa7a2b905b$export$2b77a92f1a5ad772);
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







const $fc75a6aa7a2b905b$export$2b77a92f1a5ad772 = /*#__PURE__*/ (0, $aM0tW$react.forwardRef)(function Modal(props, ref) {
    let { children: children, state: state, ...otherProps } = props;
    let domRef = (0, $aM0tW$reactspectrumutils.useDOMRef)(ref);
    let wrapperRef = (0, $aM0tW$react.useRef)(null);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($aM0tW$react))).createElement((0, $2aebdc186fd41e87$exports.Overlay), {
        ...otherProps,
        isOpen: state.isOpen,
        nodeRef: wrapperRef
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($aM0tW$react))).createElement($fc75a6aa7a2b905b$var$ModalWrapper, {
        ...props,
        wrapperRef: wrapperRef,
        ref: domRef
    }, children));
});
let $fc75a6aa7a2b905b$var$typeMap = {
    fullscreen: 'fullscreen',
    fullscreenTakeover: 'fullscreenTakeover'
};
let $fc75a6aa7a2b905b$var$ModalWrapper = /*#__PURE__*/ (0, $aM0tW$react.forwardRef)(function(props, ref) {
    let { type: type, children: children, state: state, isOpen: isOpen, wrapperRef: wrapperRef } = props;
    let typeVariant = type != null ? $fc75a6aa7a2b905b$var$typeMap[type] : undefined;
    let { styleProps: styleProps } = (0, $aM0tW$reactspectrumutils.useStyleProps)(props);
    let objRef = (0, $aM0tW$reactariautils.useObjectRef)(ref);
    let { modalProps: modalProps, underlayProps: underlayProps } = (0, $aM0tW$reactariaoverlays.useModalOverlay)(props, state, objRef);
    let wrapperClassName = (0, $aM0tW$reactspectrumutils.classNames)((0, ($parcel$interopDefault($86571b803f942ff3$exports))), 'spectrum-Modal-wrapper', (0, $aM0tW$reactspectrumutils.classNames)((0, ($parcel$interopDefault($e9a663ccb19ed1b0$exports))), 'spectrum-Modal-wrapper', 'react-spectrum-Modal-wrapper'));
    let modalClassName = (0, $aM0tW$reactspectrumutils.classNames)((0, ($parcel$interopDefault($86571b803f942ff3$exports))), 'spectrum-Modal', {
        'is-open': isOpen
    }, (0, $aM0tW$reactspectrumutils.classNames)((0, ($parcel$interopDefault($e9a663ccb19ed1b0$exports))), 'spectrum-Modal', 'react-spectrum-Modal'), {
        [`spectrum-Modal--${typeVariant}`]: typeVariant
    }, styleProps.className);
    let viewport = (0, $aM0tW$reactariautils.useViewportSize)();
    let style = {
        '--spectrum-visual-viewport-height': viewport.height + 'px'
    };
    // Attach Transition's nodeRef to outer most wrapper for node.reflow: https://github.com/reactjs/react-transition-group/blob/c89f807067b32eea6f68fd6c622190d88ced82e2/src/Transition.js#L231
    return /*#__PURE__*/ (0, ($parcel$interopDefault($aM0tW$react))).createElement("div", {
        ref: wrapperRef
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($aM0tW$react))).createElement((0, $b900e75089bdd9cd$exports.Underlay), {
        ...underlayProps,
        isOpen: isOpen
    }), /*#__PURE__*/ (0, ($parcel$interopDefault($aM0tW$react))).createElement("div", {
        className: wrapperClassName,
        style: style
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($aM0tW$react))).createElement("div", {
        ...styleProps,
        ...modalProps,
        ref: objRef,
        className: modalClassName,
        "data-testid": "modal"
    }, children)));
});


//# sourceMappingURL=Modal.main.js.map
