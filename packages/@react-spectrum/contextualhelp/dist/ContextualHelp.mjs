import "./vars.d8fc2717.css";
import $eIPk4$contextualhelp_vars_cssmodulejs from "./contextualhelp_vars_css.mjs";
import $eIPk4$intlStringsmodulejs from "./intlStrings.mjs";
import {ActionButton as $eIPk4$ActionButton} from "@react-spectrum/button";
import {classNames as $eIPk4$classNames, ClearSlots as $eIPk4$ClearSlots, SlotProvider as $eIPk4$SlotProvider} from "@react-spectrum/utils";
import {DialogTrigger as $eIPk4$DialogTrigger, Dialog as $eIPk4$Dialog} from "@react-spectrum/dialog";
import $eIPk4$spectrumiconsworkflowHelpOutline from "@spectrum-icons/workflow/HelpOutline";
import $eIPk4$spectrumiconsworkflowInfoOutline from "@spectrum-icons/workflow/InfoOutline";
import {useLabels as $eIPk4$useLabels, mergeProps as $eIPk4$mergeProps} from "@react-aria/utils";
import $eIPk4$react from "react";
import {useLocalizedStringFormatter as $eIPk4$useLocalizedStringFormatter} from "@react-aria/i18n";


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
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









const $9d9069cfc9959198$export$7d3cdb256c2ba320 = /*#__PURE__*/ (0, $eIPk4$react).forwardRef(function ContextualHelp(props, ref) {
    let { variant: variant = 'help', placement: placement = 'bottom start', children: children, ...otherProps } = props;
    let stringFormatter = (0, $eIPk4$useLocalizedStringFormatter)((0, ($parcel$interopDefault($eIPk4$intlStringsmodulejs))), '@react-spectrum/contextualhelp');
    let icon = variant === 'info' ? /*#__PURE__*/ (0, $eIPk4$react).createElement((0, $eIPk4$spectrumiconsworkflowInfoOutline), null) : /*#__PURE__*/ (0, $eIPk4$react).createElement((0, $eIPk4$spectrumiconsworkflowHelpOutline), null);
    let slots = {
        content: {
            UNSAFE_className: (0, ($parcel$interopDefault($eIPk4$contextualhelp_vars_cssmodulejs)))['react-spectrum-ContextualHelp-content']
        },
        footer: {
            UNSAFE_className: (0, ($parcel$interopDefault($eIPk4$contextualhelp_vars_cssmodulejs)))['react-spectrum-ContextualHelp-footer']
        }
    };
    let labelProps = (0, $eIPk4$useLabels)(otherProps, stringFormatter.format(variant));
    return /*#__PURE__*/ (0, $eIPk4$react).createElement((0, $eIPk4$DialogTrigger), {
        ...otherProps,
        type: "popover",
        placement: placement,
        hideArrow: true
    }, /*#__PURE__*/ (0, $eIPk4$react).createElement((0, $eIPk4$ActionButton), {
        ...(0, $eIPk4$mergeProps)(otherProps, labelProps, {
            isDisabled: false
        }),
        ref: ref,
        UNSAFE_className: (0, $eIPk4$classNames)((0, ($parcel$interopDefault($eIPk4$contextualhelp_vars_cssmodulejs))), 'react-spectrum-ContextualHelp-button', otherProps.UNSAFE_className),
        isQuiet: true
    }, icon), /*#__PURE__*/ (0, $eIPk4$react).createElement((0, $eIPk4$ClearSlots), null, /*#__PURE__*/ (0, $eIPk4$react).createElement((0, $eIPk4$SlotProvider), {
        slots: slots
    }, /*#__PURE__*/ (0, $eIPk4$react).createElement((0, $eIPk4$Dialog), {
        UNSAFE_className: (0, $eIPk4$classNames)((0, ($parcel$interopDefault($eIPk4$contextualhelp_vars_cssmodulejs))), 'react-spectrum-ContextualHelp-dialog')
    }, children))));
});


export {$9d9069cfc9959198$export$7d3cdb256c2ba320 as ContextualHelp};
//# sourceMappingURL=ContextualHelp.module.js.map
