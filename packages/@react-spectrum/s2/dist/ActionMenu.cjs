var $6e265ff388155b91$exports = require("./ActionButton.cjs");
var $4526404114e78c80$exports = require("./intlStrings.cjs");
var $e741ea6b88ce4866$exports = require("./Menu.cjs");
var $0054789d672ae8e6$exports = require("../icons/More.cjs");
var $ac757a4c2bd72aee$exports = require("../icons/useSpectrumContextProps.cjs");
var $lyMvd$reactjsxruntime = require("react/jsx-runtime");
var $lyMvd$react = require("react");
var $lyMvd$reactariautils = require("@react-aria/utils");
var $lyMvd$reactariai18n = require("@react-aria/i18n");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "ActionMenuContext", () => $e5a758dd286599f2$export$7f4b66acaca28bd5);
$parcel$export(module.exports, "ActionMenu", () => $e5a758dd286599f2$export$ed57a210b9d13bb6);
/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 








const $e5a758dd286599f2$export$7f4b66acaca28bd5 = /*#__PURE__*/ (0, $lyMvd$react.createContext)(null);
const $e5a758dd286599f2$export$ed57a210b9d13bb6 = /*#__PURE__*/ (0, $lyMvd$react.forwardRef)(function ActionMenu(props, ref) {
    let stringFormatter = (0, $lyMvd$reactariai18n.useLocalizedStringFormatter)((0, ($parcel$interopDefault($4526404114e78c80$exports))), '@react-spectrum/s2');
    [props, ref] = (0, $ac757a4c2bd72aee$exports.useSpectrumContextProps)(props, ref, $e5a758dd286599f2$export$7f4b66acaca28bd5);
    let buttonProps = (0, $lyMvd$reactariautils.filterDOMProps)(props, {
        labelable: true
    });
    if (buttonProps['aria-label'] === undefined) buttonProps['aria-label'] = stringFormatter.format('menu.moreActions');
    return /*#__PURE__*/ (0, $lyMvd$reactjsxruntime.jsxs)((0, $e741ea6b88ce4866$exports.MenuTrigger), {
        isOpen: props.isOpen,
        defaultOpen: props.defaultOpen,
        onOpenChange: props.onOpenChange,
        align: props.align,
        direction: props.direction,
        shouldFlip: props.shouldFlip,
        children: [
            /*#__PURE__*/ (0, $lyMvd$reactjsxruntime.jsx)((0, $6e265ff388155b91$exports.ActionButton), {
                ref: ref,
                size: props.size,
                isDisabled: props.isDisabled,
                autoFocus: props.autoFocus,
                isQuiet: props.isQuiet,
                styles: props.styles,
                ...buttonProps,
                children: /*#__PURE__*/ (0, $lyMvd$reactjsxruntime.jsx)((0, $0054789d672ae8e6$exports.default), {})
            }),
            /*#__PURE__*/ (0, $lyMvd$reactjsxruntime.jsx)((0, $e741ea6b88ce4866$exports.Menu), {
                items: props.items,
                disabledKeys: props.disabledKeys,
                onAction: props.onAction,
                size: props.menuSize,
                children: props.children
            })
        ]
    });
});


//# sourceMappingURL=ActionMenu.cjs.map
