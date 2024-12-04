import {Dialog as $99cd51dc4eb569f7$export$3ddf2d174ce01153} from "./Dialog.module.js";
import {DialogContext as $97b119e05830ea0d$export$8b93a07348a7730c} from "./context.module.js";
import $7TaMJ$intlStringsmodulejs from "./intlStrings.module.js";
import "./vars.895d8ff6.css";
import $7TaMJ$dialog_vars_cssmodulejs from "./dialog_vars_css.module.js";
import $7TaMJ$spectrumiconsuiAlertMedium from "@spectrum-icons/ui/AlertMedium";
import {Button as $7TaMJ$Button} from "@react-spectrum/button";
import {ButtonGroup as $7TaMJ$ButtonGroup} from "@react-spectrum/buttongroup";
import {chain as $7TaMJ$chain} from "@react-aria/utils";
import {useStyleProps as $7TaMJ$useStyleProps, classNames as $7TaMJ$classNames} from "@react-spectrum/utils";
import {Content as $7TaMJ$Content} from "@react-spectrum/view";
import {Divider as $7TaMJ$Divider} from "@react-spectrum/divider";
import {Heading as $7TaMJ$Heading} from "@react-spectrum/text";
import $7TaMJ$react, {forwardRef as $7TaMJ$forwardRef, useContext as $7TaMJ$useContext} from "react";
import {useLocalizedStringFormatter as $7TaMJ$useLocalizedStringFormatter} from "@react-aria/i18n";


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













const $2a8395160fff9af3$export$de466dd8317b0b75 = /*#__PURE__*/ (0, $7TaMJ$forwardRef)(function AlertDialog(props, ref) {
    let { onClose: onClose = ()=>{} } = (0, $7TaMJ$useContext)((0, $97b119e05830ea0d$export$8b93a07348a7730c)) || {};
    let { variant: variant, children: children, primaryActionLabel: primaryActionLabel, secondaryActionLabel: secondaryActionLabel, cancelLabel: cancelLabel, autoFocusButton: autoFocusButton, title: title, isPrimaryActionDisabled: isPrimaryActionDisabled, isSecondaryActionDisabled: isSecondaryActionDisabled, onCancel: onCancel = ()=>{}, onPrimaryAction: onPrimaryAction = ()=>{}, onSecondaryAction: onSecondaryAction = ()=>{}, ...otherProps } = props;
    let { styleProps: styleProps } = (0, $7TaMJ$useStyleProps)(otherProps);
    let stringFormatter = (0, $7TaMJ$useLocalizedStringFormatter)((0, ($parcel$interopDefault($7TaMJ$intlStringsmodulejs))), '@react-spectrum/dialog');
    let confirmVariant = 'primary';
    if (variant) {
        if (variant === 'confirmation') confirmVariant = 'cta';
        else if (variant === 'destructive') confirmVariant = 'negative';
    }
    return /*#__PURE__*/ (0, $7TaMJ$react).createElement((0, $99cd51dc4eb569f7$export$3ddf2d174ce01153), {
        UNSAFE_style: styleProps.style,
        UNSAFE_className: (0, $7TaMJ$classNames)((0, ($parcel$interopDefault($7TaMJ$dialog_vars_cssmodulejs))), {
            [`spectrum-Dialog--${variant}`]: variant
        }, styleProps.className),
        isHidden: styleProps.hidden,
        size: "M",
        role: "alertdialog",
        ref: ref
    }, /*#__PURE__*/ (0, $7TaMJ$react).createElement((0, $7TaMJ$Heading), null, title), (variant === 'error' || variant === 'warning') && /*#__PURE__*/ (0, $7TaMJ$react).createElement((0, $7TaMJ$spectrumiconsuiAlertMedium), {
        slot: "typeIcon",
        "aria-label": stringFormatter.format('alert')
    }), /*#__PURE__*/ (0, $7TaMJ$react).createElement((0, $7TaMJ$Divider), null), /*#__PURE__*/ (0, $7TaMJ$react).createElement((0, $7TaMJ$Content), null, children), /*#__PURE__*/ (0, $7TaMJ$react).createElement((0, $7TaMJ$ButtonGroup), {
        align: "end"
    }, cancelLabel && /*#__PURE__*/ (0, $7TaMJ$react).createElement((0, $7TaMJ$Button), {
        variant: "secondary",
        onPress: ()=>(0, $7TaMJ$chain)(onClose(), onCancel()),
        autoFocus: autoFocusButton === 'cancel'
    }, cancelLabel), secondaryActionLabel && /*#__PURE__*/ (0, $7TaMJ$react).createElement((0, $7TaMJ$Button), {
        variant: "secondary",
        onPress: ()=>(0, $7TaMJ$chain)(onClose(), onSecondaryAction()),
        isDisabled: isSecondaryActionDisabled,
        autoFocus: autoFocusButton === 'secondary'
    }, secondaryActionLabel), /*#__PURE__*/ (0, $7TaMJ$react).createElement((0, $7TaMJ$Button), {
        variant: confirmVariant,
        onPress: ()=>(0, $7TaMJ$chain)(onClose(), onPrimaryAction()),
        isDisabled: isPrimaryActionDisabled,
        autoFocus: autoFocusButton === 'primary'
    }, primaryActionLabel)));
});


export {$2a8395160fff9af3$export$de466dd8317b0b75 as AlertDialog};
//# sourceMappingURL=AlertDialog.module.js.map
