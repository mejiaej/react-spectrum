var $a57fc2323bf98a33$exports = require("./Dialog.main.js");
var $0eb909ad2388d989$exports = require("./context.main.js");
var $7827d180f5c8b41b$exports = require("./intlStrings.main.js");
require("./vars.895d8ff6.css");
var $a74c0984b1adb651$exports = require("./dialog_vars_css.main.js");
var $cXXKy$spectrumiconsuiAlertMedium = require("@spectrum-icons/ui/AlertMedium");
var $cXXKy$reactspectrumbutton = require("@react-spectrum/button");
var $cXXKy$reactspectrumbuttongroup = require("@react-spectrum/buttongroup");
var $cXXKy$reactariautils = require("@react-aria/utils");
var $cXXKy$reactspectrumutils = require("@react-spectrum/utils");
var $cXXKy$reactspectrumview = require("@react-spectrum/view");
var $cXXKy$reactspectrumdivider = require("@react-spectrum/divider");
var $cXXKy$reactspectrumtext = require("@react-spectrum/text");
var $cXXKy$react = require("react");
var $cXXKy$reactariai18n = require("@react-aria/i18n");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "AlertDialog", () => $66f8653ff750aa27$export$de466dd8317b0b75);
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













const $66f8653ff750aa27$export$de466dd8317b0b75 = /*#__PURE__*/ (0, $cXXKy$react.forwardRef)(function AlertDialog(props, ref) {
    let { onClose: onClose = ()=>{} } = (0, $cXXKy$react.useContext)((0, $0eb909ad2388d989$exports.DialogContext)) || {};
    let { variant: variant, children: children, primaryActionLabel: primaryActionLabel, secondaryActionLabel: secondaryActionLabel, cancelLabel: cancelLabel, autoFocusButton: autoFocusButton, title: title, isPrimaryActionDisabled: isPrimaryActionDisabled, isSecondaryActionDisabled: isSecondaryActionDisabled, onCancel: onCancel = ()=>{}, onPrimaryAction: onPrimaryAction = ()=>{}, onSecondaryAction: onSecondaryAction = ()=>{}, ...otherProps } = props;
    let { styleProps: styleProps } = (0, $cXXKy$reactspectrumutils.useStyleProps)(otherProps);
    let stringFormatter = (0, $cXXKy$reactariai18n.useLocalizedStringFormatter)((0, ($parcel$interopDefault($7827d180f5c8b41b$exports))), '@react-spectrum/dialog');
    let confirmVariant = 'primary';
    if (variant) {
        if (variant === 'confirmation') confirmVariant = 'cta';
        else if (variant === 'destructive') confirmVariant = 'negative';
    }
    return /*#__PURE__*/ (0, ($parcel$interopDefault($cXXKy$react))).createElement((0, $a57fc2323bf98a33$exports.Dialog), {
        UNSAFE_style: styleProps.style,
        UNSAFE_className: (0, $cXXKy$reactspectrumutils.classNames)((0, ($parcel$interopDefault($a74c0984b1adb651$exports))), {
            [`spectrum-Dialog--${variant}`]: variant
        }, styleProps.className),
        isHidden: styleProps.hidden,
        size: "M",
        role: "alertdialog",
        ref: ref
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($cXXKy$react))).createElement((0, $cXXKy$reactspectrumtext.Heading), null, title), (variant === 'error' || variant === 'warning') && /*#__PURE__*/ (0, ($parcel$interopDefault($cXXKy$react))).createElement((0, ($parcel$interopDefault($cXXKy$spectrumiconsuiAlertMedium))), {
        slot: "typeIcon",
        "aria-label": stringFormatter.format('alert')
    }), /*#__PURE__*/ (0, ($parcel$interopDefault($cXXKy$react))).createElement((0, $cXXKy$reactspectrumdivider.Divider), null), /*#__PURE__*/ (0, ($parcel$interopDefault($cXXKy$react))).createElement((0, $cXXKy$reactspectrumview.Content), null, children), /*#__PURE__*/ (0, ($parcel$interopDefault($cXXKy$react))).createElement((0, $cXXKy$reactspectrumbuttongroup.ButtonGroup), {
        align: "end"
    }, cancelLabel && /*#__PURE__*/ (0, ($parcel$interopDefault($cXXKy$react))).createElement((0, $cXXKy$reactspectrumbutton.Button), {
        variant: "secondary",
        onPress: ()=>(0, $cXXKy$reactariautils.chain)(onClose(), onCancel()),
        autoFocus: autoFocusButton === 'cancel'
    }, cancelLabel), secondaryActionLabel && /*#__PURE__*/ (0, ($parcel$interopDefault($cXXKy$react))).createElement((0, $cXXKy$reactspectrumbutton.Button), {
        variant: "secondary",
        onPress: ()=>(0, $cXXKy$reactariautils.chain)(onClose(), onSecondaryAction()),
        isDisabled: isSecondaryActionDisabled,
        autoFocus: autoFocusButton === 'secondary'
    }, secondaryActionLabel), /*#__PURE__*/ (0, ($parcel$interopDefault($cXXKy$react))).createElement((0, $cXXKy$reactspectrumbutton.Button), {
        variant: confirmVariant,
        onPress: ()=>(0, $cXXKy$reactariautils.chain)(onClose(), onPrimaryAction()),
        isDisabled: isPrimaryActionDisabled,
        autoFocus: autoFocusButton === 'primary'
    }, primaryActionLabel)));
});


//# sourceMappingURL=AlertDialog.main.js.map
