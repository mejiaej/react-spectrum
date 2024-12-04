import "./AlertDialog.css";
import $e17a4836f4b6cc28$export$2e2bcd8739ae039 from "../icons/AlertTriangle.mjs";
import {Button as $067ea9f64ccd4e8e$export$353f5b6fc5456de1} from "./Button.mjs";
import {ButtonGroup as $472eaa9a9b344b9a$export$69b1032f2ecdf404} from "./ButtonGroup.mjs";
import {CenterBaseline as $1f4b04be3f24aae3$export$768dac55bb57081d} from "./CenterBaseline.mjs";
import {Content as $8e847109a6ab556d$export$7c6e2c02157bb7d2, Heading as $8e847109a6ab556d$export$a8a3e93435678ff9} from "./Content.mjs";
import {Dialog as $9bbc115952dac5a6$export$3ddf2d174ce01153} from "./Dialog.mjs";
import {IconContext as $ac8c32e6775ddd1f$export$a49f528ae1a4d0ed} from "../icons/Icon.mjs";
import $2iZqV$intlStringsmjs from "./intlStrings.mjs";
import $a951460932d22d7b$export$2e2bcd8739ae039 from "../icons/AlertDiamond.mjs";
import {jsx as $2iZqV$jsx, jsxs as $2iZqV$jsxs, Fragment as $2iZqV$Fragment} from "react/jsx-runtime";
import {chain as $2iZqV$chain} from "@react-aria/utils";
import {forwardRef as $2iZqV$forwardRef} from "react";
import {Provider as $2iZqV$Provider} from "react-aria-components";
import {useLocalizedStringFormatter as $2iZqV$useLocalizedStringFormatter} from "@react-aria/i18n";


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
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













const $94a8ad475d9a330c$var$icon = function anonymous(props) {
    let rules = " .";
    rules += ' zd';
    if (props.variant === "warning") rules += ' -rwx0fg_e-g';
    else if (props.variant === "error") rules += ' -rwx0fg_e-e';
    return rules;
};
const $94a8ad475d9a330c$export$de466dd8317b0b75 = /*#__PURE__*/ (0, $2iZqV$forwardRef)(function AlertDialog(props, ref) {
    let stringFormatter = (0, $2iZqV$useLocalizedStringFormatter)((0, ($parcel$interopDefault($2iZqV$intlStringsmjs))), '@react-spectrum/s2');
    let { autoFocusButton: autoFocusButton, cancelLabel: cancelLabel, secondaryActionLabel: secondaryActionLabel, primaryActionLabel: primaryActionLabel, isSecondaryActionDisabled: isSecondaryActionDisabled, isPrimaryActionDisabled: isPrimaryActionDisabled, onCancel: onCancel = ()=>{}, onPrimaryAction: onPrimaryAction = ()=>{}, onSecondaryAction: onSecondaryAction = ()=>{}, title: title, children: children, variant: variant = 'confirmation' } = props;
    let buttonVariant = 'primary';
    if (variant === 'confirmation') buttonVariant = 'accent';
    else if (variant === 'destructive') buttonVariant = 'negative';
    return /*#__PURE__*/ (0, $2iZqV$jsx)((0, $9bbc115952dac5a6$export$3ddf2d174ce01153), {
        role: "alertdialog",
        ref: ref,
        size: props.size,
        UNSAFE_style: props.UNSAFE_style,
        UNSAFE_className: props.UNSAFE_className || '',
        children: ({ close: close })=>/*#__PURE__*/ (0, $2iZqV$jsxs)((0, $2iZqV$Fragment), {
                children: [
                    /*#__PURE__*/ (0, $2iZqV$jsx)((0, $2iZqV$Provider), {
                        values: [
                            [
                                (0, $ac8c32e6775ddd1f$export$a49f528ae1a4d0ed),
                                {
                                    styles: $94a8ad475d9a330c$var$icon({
                                        variant: variant
                                    })
                                }
                            ]
                        ],
                        children: /*#__PURE__*/ (0, $2iZqV$jsx)((0, $8e847109a6ab556d$export$a8a3e93435678ff9), {
                            slot: "title",
                            children: /*#__PURE__*/ (0, $2iZqV$jsxs)((0, $1f4b04be3f24aae3$export$768dac55bb57081d), {
                                children: [
                                    variant === 'error' && /*#__PURE__*/ (0, $2iZqV$jsx)((0, $e17a4836f4b6cc28$export$2e2bcd8739ae039), {
                                        "aria-label": stringFormatter.format('dialog.alert')
                                    }),
                                    variant === 'warning' && /*#__PURE__*/ (0, $2iZqV$jsx)((0, $a951460932d22d7b$export$2e2bcd8739ae039), {
                                        "aria-label": stringFormatter.format('dialog.alert')
                                    }),
                                    title
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0, $2iZqV$jsx)((0, $8e847109a6ab556d$export$7c6e2c02157bb7d2), {
                        children: children
                    }),
                    /*#__PURE__*/ (0, $2iZqV$jsxs)((0, $472eaa9a9b344b9a$export$69b1032f2ecdf404), {
                        children: [
                            cancelLabel && /*#__PURE__*/ (0, $2iZqV$jsx)((0, $067ea9f64ccd4e8e$export$353f5b6fc5456de1), {
                                onPress: ()=>(0, $2iZqV$chain)(close(), onCancel()),
                                variant: "secondary",
                                fillStyle: "outline",
                                autoFocus: autoFocusButton === 'cancel',
                                children: cancelLabel
                            }),
                            secondaryActionLabel && /*#__PURE__*/ (0, $2iZqV$jsx)((0, $067ea9f64ccd4e8e$export$353f5b6fc5456de1), {
                                onPress: ()=>(0, $2iZqV$chain)(close(), onSecondaryAction()),
                                variant: "secondary",
                                isDisabled: isSecondaryActionDisabled,
                                fillStyle: "outline",
                                autoFocus: autoFocusButton === 'secondary',
                                children: secondaryActionLabel
                            }),
                            /*#__PURE__*/ (0, $2iZqV$jsx)((0, $067ea9f64ccd4e8e$export$353f5b6fc5456de1), {
                                variant: buttonVariant,
                                isDisabled: isPrimaryActionDisabled,
                                autoFocus: autoFocusButton === 'primary',
                                onPress: ()=>(0, $2iZqV$chain)(close(), onPrimaryAction()),
                                children: primaryActionLabel
                            })
                        ]
                    })
                ]
            })
    });
});


export {$94a8ad475d9a330c$export$de466dd8317b0b75 as AlertDialog};
//# sourceMappingURL=AlertDialog.mjs.map
