require("./toastContainer.5957ce49.css");
var $e20782d0579ed886$exports = require("./toastContainer_css.main.js");
var $acAHv$reactariatoast = require("@react-aria/toast");
var $acAHv$reactspectrumutils = require("@react-spectrum/utils");
var $acAHv$reactariafocus = require("@react-aria/focus");
var $acAHv$reactariautils = require("@react-aria/utils");
var $acAHv$reactspectrumprovider = require("@react-spectrum/provider");
var $acAHv$react = require("react");
var $acAHv$reactdom = require("react-dom");
var $acAHv$reactariaoverlays = require("@react-aria/overlays");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "Toaster", () => $5b9f2c86c1b1395c$export$fb98e3a2a4cd92d7);
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








const $5b9f2c86c1b1395c$export$9194c0aa0cd7a9ff = /*#__PURE__*/ (0, $acAHv$react.createContext)(false);
function $5b9f2c86c1b1395c$export$fb98e3a2a4cd92d7(props) {
    let { children: children, state: state } = props;
    let ref = (0, $acAHv$react.useRef)(null);
    let { regionProps: regionProps } = (0, $acAHv$reactariatoast.useToastRegion)(props, state, ref);
    let { focusProps: focusProps, isFocusVisible: isFocusVisible } = (0, $acAHv$reactariafocus.useFocusRing)();
    let { getContainer: getContainer } = (0, $acAHv$reactariaoverlays.useUNSTABLE_PortalContext)();
    let contents = /*#__PURE__*/ (0, ($parcel$interopDefault($acAHv$react))).createElement((0, $acAHv$reactspectrumprovider.Provider), {
        UNSAFE_style: {
            background: 'transparent'
        }
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($acAHv$react))).createElement((0, $acAHv$reactariafocus.FocusScope), null, /*#__PURE__*/ (0, ($parcel$interopDefault($acAHv$react))).createElement($5b9f2c86c1b1395c$export$9194c0aa0cd7a9ff.Provider, {
        value: isFocusVisible
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($acAHv$react))).createElement("div", {
        ...(0, $acAHv$reactariautils.mergeProps)(regionProps, focusProps),
        ref: ref,
        "data-position": "bottom",
        "data-placement": "center",
        className: (0, $acAHv$reactspectrumutils.classNames)((0, ($parcel$interopDefault($e20782d0579ed886$exports))), 'react-spectrum-ToastContainer', {
            'focus-ring': isFocusVisible
        })
    }, children))));
    var _getContainer;
    return /*#__PURE__*/ (0, ($parcel$interopDefault($acAHv$reactdom))).createPortal(contents, (_getContainer = getContainer === null || getContainer === void 0 ? void 0 : getContainer()) !== null && _getContainer !== void 0 ? _getContainer : document.body);
}


//# sourceMappingURL=Toaster.main.js.map
