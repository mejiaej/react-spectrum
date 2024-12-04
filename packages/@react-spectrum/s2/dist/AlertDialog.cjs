require("./AlertDialog.css");
var $7e7cdbd2b8ae2467$exports = require("../icons/AlertTriangle.cjs");
var $25d06cf8d4e72761$exports = require("./Button.cjs");
var $e1016b8947dbadb8$exports = require("./ButtonGroup.cjs");
var $e991cbcdf82ced71$exports = require("./CenterBaseline.cjs");
var $6367bc87eb7d24ad$exports = require("./Content.cjs");
var $0f4636c7093b9233$exports = require("./Dialog.cjs");
var $bde97c91243ed164$exports = require("../icons/Icon.cjs");
var $4526404114e78c80$exports = require("./intlStrings.cjs");
var $e861f394b642505b$exports = require("../icons/AlertDiamond.cjs");
var $dZ5J1$reactjsxruntime = require("react/jsx-runtime");
var $dZ5J1$reactariautils = require("@react-aria/utils");
var $dZ5J1$react = require("react");
var $dZ5J1$reactariacomponents = require("react-aria-components");
var $dZ5J1$reactariai18n = require("@react-aria/i18n");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "AlertDialog", () => $d67aa10f4fac9e2b$export$de466dd8317b0b75);
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













const $d67aa10f4fac9e2b$var$icon = function anonymous(props) {
    let rules = " .";
    rules += ' zd';
    if (props.variant === "warning") rules += ' -rwx0fg_e-g';
    else if (props.variant === "error") rules += ' -rwx0fg_e-e';
    return rules;
};
const $d67aa10f4fac9e2b$export$de466dd8317b0b75 = /*#__PURE__*/ (0, $dZ5J1$react.forwardRef)(function AlertDialog(props, ref) {
    let stringFormatter = (0, $dZ5J1$reactariai18n.useLocalizedStringFormatter)((0, ($parcel$interopDefault($4526404114e78c80$exports))), '@react-spectrum/s2');
    let { autoFocusButton: autoFocusButton, cancelLabel: cancelLabel, secondaryActionLabel: secondaryActionLabel, primaryActionLabel: primaryActionLabel, isSecondaryActionDisabled: isSecondaryActionDisabled, isPrimaryActionDisabled: isPrimaryActionDisabled, onCancel: onCancel = ()=>{}, onPrimaryAction: onPrimaryAction = ()=>{}, onSecondaryAction: onSecondaryAction = ()=>{}, title: title, children: children, variant: variant = 'confirmation' } = props;
    let buttonVariant = 'primary';
    if (variant === 'confirmation') buttonVariant = 'accent';
    else if (variant === 'destructive') buttonVariant = 'negative';
    return /*#__PURE__*/ (0, $dZ5J1$reactjsxruntime.jsx)((0, $0f4636c7093b9233$exports.Dialog), {
        role: "alertdialog",
        ref: ref,
        size: props.size,
        UNSAFE_style: props.UNSAFE_style,
        UNSAFE_className: props.UNSAFE_className || '',
        children: ({ close: close })=>/*#__PURE__*/ (0, $dZ5J1$reactjsxruntime.jsxs)((0, $dZ5J1$reactjsxruntime.Fragment), {
                children: [
                    /*#__PURE__*/ (0, $dZ5J1$reactjsxruntime.jsx)((0, $dZ5J1$reactariacomponents.Provider), {
                        values: [
                            [
                                (0, $bde97c91243ed164$exports.IconContext),
                                {
                                    styles: $d67aa10f4fac9e2b$var$icon({
                                        variant: variant
                                    })
                                }
                            ]
                        ],
                        children: /*#__PURE__*/ (0, $dZ5J1$reactjsxruntime.jsx)((0, $6367bc87eb7d24ad$exports.Heading), {
                            slot: "title",
                            children: /*#__PURE__*/ (0, $dZ5J1$reactjsxruntime.jsxs)((0, $e991cbcdf82ced71$exports.CenterBaseline), {
                                children: [
                                    variant === 'error' && /*#__PURE__*/ (0, $dZ5J1$reactjsxruntime.jsx)((0, $7e7cdbd2b8ae2467$exports.default), {
                                        "aria-label": stringFormatter.format('dialog.alert')
                                    }),
                                    variant === 'warning' && /*#__PURE__*/ (0, $dZ5J1$reactjsxruntime.jsx)((0, $e861f394b642505b$exports.default), {
                                        "aria-label": stringFormatter.format('dialog.alert')
                                    }),
                                    title
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0, $dZ5J1$reactjsxruntime.jsx)((0, $6367bc87eb7d24ad$exports.Content), {
                        children: children
                    }),
                    /*#__PURE__*/ (0, $dZ5J1$reactjsxruntime.jsxs)((0, $e1016b8947dbadb8$exports.ButtonGroup), {
                        children: [
                            cancelLabel && /*#__PURE__*/ (0, $dZ5J1$reactjsxruntime.jsx)((0, $25d06cf8d4e72761$exports.Button), {
                                onPress: ()=>(0, $dZ5J1$reactariautils.chain)(close(), onCancel()),
                                variant: "secondary",
                                fillStyle: "outline",
                                autoFocus: autoFocusButton === 'cancel',
                                children: cancelLabel
                            }),
                            secondaryActionLabel && /*#__PURE__*/ (0, $dZ5J1$reactjsxruntime.jsx)((0, $25d06cf8d4e72761$exports.Button), {
                                onPress: ()=>(0, $dZ5J1$reactariautils.chain)(close(), onSecondaryAction()),
                                variant: "secondary",
                                isDisabled: isSecondaryActionDisabled,
                                fillStyle: "outline",
                                autoFocus: autoFocusButton === 'secondary',
                                children: secondaryActionLabel
                            }),
                            /*#__PURE__*/ (0, $dZ5J1$reactjsxruntime.jsx)((0, $25d06cf8d4e72761$exports.Button), {
                                variant: buttonVariant,
                                isDisabled: isPrimaryActionDisabled,
                                autoFocus: autoFocusButton === 'primary',
                                onPress: ()=>(0, $dZ5J1$reactariautils.chain)(close(), onPrimaryAction()),
                                children: primaryActionLabel
                            })
                        ]
                    })
                ]
            })
    });
});


//# sourceMappingURL=AlertDialog.cjs.map
