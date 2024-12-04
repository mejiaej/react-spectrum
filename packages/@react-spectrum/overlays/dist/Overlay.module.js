import {OpenTransition as $bc765a7a041310da$export$b847a40ee92eff38} from "./OpenTransition.module.js";
import {Provider as $eIXW5$Provider} from "@react-spectrum/provider";
import $eIXW5$react, {useState as $eIXW5$useState, useCallback as $eIXW5$useCallback} from "react";
import {Overlay as $eIXW5$Overlay} from "@react-aria/overlays";

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



const $70305dc5fb729c3b$export$c6fdb837b070b4ff = /*#__PURE__*/ (0, $eIXW5$react).forwardRef(function Overlay(props, ref) {
    let { children: children, isOpen: isOpen, disableFocusManagement: disableFocusManagement, container: container, onEnter: onEnter, onEntering: onEntering, onEntered: onEntered, onExit: onExit, onExiting: onExiting, onExited: onExited, nodeRef: nodeRef } = props;
    let [exited, setExited] = (0, $eIXW5$useState)(!isOpen);
    let handleEntered = (0, $eIXW5$useCallback)(()=>{
        setExited(false);
        if (onEntered) onEntered();
    }, [
        onEntered
    ]);
    let handleExited = (0, $eIXW5$useCallback)(()=>{
        setExited(true);
        if (onExited) onExited();
    }, [
        onExited
    ]);
    // Don't un-render the overlay while it's transitioning out.
    let mountOverlay = isOpen || !exited;
    if (!mountOverlay) // Don't bother showing anything if we don't have to.
    return null;
    return /*#__PURE__*/ (0, $eIXW5$react).createElement((0, $eIXW5$Overlay), {
        portalContainer: container,
        disableFocusManagement: disableFocusManagement,
        isExiting: !isOpen
    }, /*#__PURE__*/ (0, $eIXW5$react).createElement((0, $eIXW5$Provider), {
        ref: ref,
        UNSAFE_style: {
            background: 'transparent',
            isolation: 'isolate'
        },
        isDisabled: false
    }, /*#__PURE__*/ (0, $eIXW5$react).createElement((0, $bc765a7a041310da$export$b847a40ee92eff38), {
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


export {$70305dc5fb729c3b$export$c6fdb837b070b4ff as Overlay};
//# sourceMappingURL=Overlay.module.js.map
