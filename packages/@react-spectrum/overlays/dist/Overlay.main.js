var $13f51cdc44d228b9$exports = require("./OpenTransition.main.js");
var $5XfZ1$reactspectrumprovider = require("@react-spectrum/provider");
var $5XfZ1$react = require("react");
var $5XfZ1$reactariaoverlays = require("@react-aria/overlays");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "Overlay", () => $2aebdc186fd41e87$export$c6fdb837b070b4ff);
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



const $2aebdc186fd41e87$export$c6fdb837b070b4ff = /*#__PURE__*/ (0, ($parcel$interopDefault($5XfZ1$react))).forwardRef(function Overlay(props, ref) {
    let { children: children, isOpen: isOpen, disableFocusManagement: disableFocusManagement, container: container, onEnter: onEnter, onEntering: onEntering, onEntered: onEntered, onExit: onExit, onExiting: onExiting, onExited: onExited, nodeRef: nodeRef } = props;
    let [exited, setExited] = (0, $5XfZ1$react.useState)(!isOpen);
    let handleEntered = (0, $5XfZ1$react.useCallback)(()=>{
        setExited(false);
        if (onEntered) onEntered();
    }, [
        onEntered
    ]);
    let handleExited = (0, $5XfZ1$react.useCallback)(()=>{
        setExited(true);
        if (onExited) onExited();
    }, [
        onExited
    ]);
    // Don't un-render the overlay while it's transitioning out.
    let mountOverlay = isOpen || !exited;
    if (!mountOverlay) // Don't bother showing anything if we don't have to.
    return null;
    return /*#__PURE__*/ (0, ($parcel$interopDefault($5XfZ1$react))).createElement((0, $5XfZ1$reactariaoverlays.Overlay), {
        portalContainer: container,
        disableFocusManagement: disableFocusManagement,
        isExiting: !isOpen
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($5XfZ1$react))).createElement((0, $5XfZ1$reactspectrumprovider.Provider), {
        ref: ref,
        UNSAFE_style: {
            background: 'transparent',
            isolation: 'isolate'
        },
        isDisabled: false
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($5XfZ1$react))).createElement((0, $13f51cdc44d228b9$exports.OpenTransition), {
        in: isOpen,
        appear: true,
        onExit: onExit,
        onExiting: onExiting,
        onExited: handleExited,
        onEnter: onEnter,
        onEntering: onEntering,
        onEntered: handleEntered,
        nodeRef: nodeRef
    }, children)));
});


//# sourceMappingURL=Overlay.main.js.map
