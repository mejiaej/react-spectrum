import "./toastContainer.5957ce49.css";
import $7Pdp8$toastContainer_cssmodulejs from "./toastContainer_css.mjs";
import {useToastRegion as $7Pdp8$useToastRegion} from "@react-aria/toast";
import {classNames as $7Pdp8$classNames} from "@react-spectrum/utils";
import {useFocusRing as $7Pdp8$useFocusRing, FocusScope as $7Pdp8$FocusScope} from "@react-aria/focus";
import {mergeProps as $7Pdp8$mergeProps} from "@react-aria/utils";
import {Provider as $7Pdp8$Provider} from "@react-spectrum/provider";
import $7Pdp8$react, {createContext as $7Pdp8$createContext, useRef as $7Pdp8$useRef} from "react";
import $7Pdp8$reactdom from "react-dom";
import {useUNSTABLE_PortalContext as $7Pdp8$useUNSTABLE_PortalContext} from "@react-aria/overlays";


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








const $e46feef4e4c28a4b$export$9194c0aa0cd7a9ff = /*#__PURE__*/ (0, $7Pdp8$createContext)(false);
function $e46feef4e4c28a4b$export$fb98e3a2a4cd92d7(props) {
    let { children: children, state: state } = props;
    let ref = (0, $7Pdp8$useRef)(null);
    let { regionProps: regionProps } = (0, $7Pdp8$useToastRegion)(props, state, ref);
    let { focusProps: focusProps, isFocusVisible: isFocusVisible } = (0, $7Pdp8$useFocusRing)();
    let { getContainer: getContainer } = (0, $7Pdp8$useUNSTABLE_PortalContext)();
    let contents = /*#__PURE__*/ (0, $7Pdp8$react).createElement((0, $7Pdp8$Provider), {
        UNSAFE_style: {
            background: 'transparent'
        }
    }, /*#__PURE__*/ (0, $7Pdp8$react).createElement((0, $7Pdp8$FocusScope), null, /*#__PURE__*/ (0, $7Pdp8$react).createElement($e46feef4e4c28a4b$export$9194c0aa0cd7a9ff.Provider, {
        value: isFocusVisible
    }, /*#__PURE__*/ (0, $7Pdp8$react).createElement("div", {
        ...(0, $7Pdp8$mergeProps)(regionProps, focusProps),
        ref: ref,
        "data-position": "bottom",
        "data-placement": "center",
        className: (0, $7Pdp8$classNames)((0, ($parcel$interopDefault($7Pdp8$toastContainer_cssmodulejs))), 'react-spectrum-ToastContainer', {
            'focus-ring': isFocusVisible
        })
    }, children))));
    var _getContainer;
    return /*#__PURE__*/ (0, $7Pdp8$reactdom).createPortal(contents, (_getContainer = getContainer === null || getContainer === void 0 ? void 0 : getContainer()) !== null && _getContainer !== void 0 ? _getContainer : document.body);
}


export {$e46feef4e4c28a4b$export$9194c0aa0cd7a9ff as ToasterContext, $e46feef4e4c28a4b$export$fb98e3a2a4cd92d7 as Toaster};
//# sourceMappingURL=Toaster.module.js.map
