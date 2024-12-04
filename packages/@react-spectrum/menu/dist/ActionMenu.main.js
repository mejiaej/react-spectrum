var $2f9ceea24fba5443$exports = require("./intlStrings.main.js");
var $63a7dff9cbe2d046$exports = require("./Menu.main.js");
var $e56311f7204399c7$exports = require("./MenuTrigger.main.js");
var $5FAEG$reactspectrumbutton = require("@react-spectrum/button");
var $5FAEG$reactariautils = require("@react-aria/utils");
var $5FAEG$spectrumiconsworkflowMore = require("@spectrum-icons/workflow/More");
var $5FAEG$react = require("react");
var $5FAEG$reactariai18n = require("@react-aria/i18n");
var $5FAEG$reactspectrumutils = require("@react-spectrum/utils");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "ActionMenu", () => $53a2f2636c97a561$export$ed57a210b9d13bb6);
/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 








const $53a2f2636c97a561$export$ed57a210b9d13bb6 = /*#__PURE__*/ (0, $5FAEG$react.forwardRef)(function ActionMenu(props, ref) {
    props = (0, $5FAEG$reactspectrumutils.useSlotProps)(props, 'actionMenu');
    let stringFormatter = (0, $5FAEG$reactariai18n.useLocalizedStringFormatter)((0, ($parcel$interopDefault($2f9ceea24fba5443$exports))), '@react-spectrum/menu');
    let buttonProps = (0, $5FAEG$reactariautils.filterDOMProps)(props, {
        labelable: true
    });
    if (buttonProps['aria-label'] === undefined) buttonProps['aria-label'] = stringFormatter.format('moreActions');
    return /*#__PURE__*/ (0, ($parcel$interopDefault($5FAEG$react))).createElement((0, $e56311f7204399c7$exports.MenuTrigger), {
        isOpen: props.isOpen,
        defaultOpen: props.defaultOpen,
        onOpenChange: props.onOpenChange,
        align: props.align,
        direction: props.direction,
        shouldFlip: props.shouldFlip
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($5FAEG$react))).createElement((0, $5FAEG$reactspectrumbutton.ActionButton), {
        ref: ref,
        ...props,
        ...buttonProps
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($5FAEG$react))).createElement((0, ($parcel$interopDefault($5FAEG$spectrumiconsworkflowMore))), null)), /*#__PURE__*/ (0, ($parcel$interopDefault($5FAEG$react))).createElement((0, $63a7dff9cbe2d046$exports.Menu), {
        children: props.children,
        items: props.items,
        disabledKeys: props.disabledKeys,
        onAction: props.onAction
    }));
});


//# sourceMappingURL=ActionMenu.main.js.map
