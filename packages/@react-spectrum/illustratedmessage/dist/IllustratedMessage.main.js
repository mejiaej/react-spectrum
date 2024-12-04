require("./vars.b1947143.css");
var $e7750c05f28ceb4f$exports = require("./illustratedmessage_vars_css.main.js");
var $3YIyO$reactspectrumutils = require("@react-spectrum/utils");
var $3YIyO$reactariautils = require("@react-aria/utils");
var $3YIyO$reactspectrumlayout = require("@react-spectrum/layout");
var $3YIyO$react = require("react");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "IllustratedMessage", () => $90e6e9abe7fc12ca$export$406dbc84c317ece0);
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




const $90e6e9abe7fc12ca$export$406dbc84c317ece0 = /*#__PURE__*/ (0, $3YIyO$react.forwardRef)(function IllustratedMessage(props, ref) {
    props = (0, $3YIyO$reactspectrumutils.useSlotProps)(props, 'illustration');
    let { children: children, ...otherProps } = props;
    let { styleProps: styleProps } = (0, $3YIyO$reactspectrumutils.useStyleProps)(otherProps);
    let headingClassName = (0, $3YIyO$reactspectrumutils.classNames)((0, ($parcel$interopDefault($e7750c05f28ceb4f$exports))), 'spectrum-IllustratedMessage-heading');
    let contentClassName = (0, $3YIyO$reactspectrumutils.classNames)((0, ($parcel$interopDefault($e7750c05f28ceb4f$exports))), 'spectrum-IllustratedMessage-description');
    let slots = {
        heading: {
            UNSAFE_className: headingClassName
        },
        content: {
            UNSAFE_className: contentClassName
        }
    };
    return /*#__PURE__*/ (0, ($parcel$interopDefault($3YIyO$react))).createElement((0, $3YIyO$reactspectrumlayout.Flex), {
        ...(0, $3YIyO$reactariautils.filterDOMProps)(otherProps),
        UNSAFE_style: styleProps.style,
        isHidden: styleProps.hidden,
        UNSAFE_className: (0, $3YIyO$reactspectrumutils.classNames)((0, ($parcel$interopDefault($e7750c05f28ceb4f$exports))), 'spectrum-IllustratedMessage', styleProps.className),
        ref: ref
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($3YIyO$react))).createElement((0, $3YIyO$reactspectrumutils.ClearSlots), null, /*#__PURE__*/ (0, ($parcel$interopDefault($3YIyO$react))).createElement((0, $3YIyO$reactspectrumutils.SlotProvider), {
        slots: slots
    }, children)));
});


//# sourceMappingURL=IllustratedMessage.main.js.map
