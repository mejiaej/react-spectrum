require("./vars.d8fc2717.css");
var $a10e565ec42bcf96$exports = require("./contextualhelp_vars_css.main.js");
var $ab07f09ac8b48f11$exports = require("./intlStrings.main.js");
var $i0m3o$reactspectrumbutton = require("@react-spectrum/button");
var $i0m3o$reactspectrumutils = require("@react-spectrum/utils");
var $i0m3o$reactspectrumdialog = require("@react-spectrum/dialog");
var $i0m3o$spectrumiconsworkflowHelpOutline = require("@spectrum-icons/workflow/HelpOutline");
var $i0m3o$spectrumiconsworkflowInfoOutline = require("@spectrum-icons/workflow/InfoOutline");
var $i0m3o$reactariautils = require("@react-aria/utils");
var $i0m3o$react = require("react");
var $i0m3o$reactariai18n = require("@react-aria/i18n");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "ContextualHelp", () => $05e6407aa891f27c$export$7d3cdb256c2ba320);
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









const $05e6407aa891f27c$export$7d3cdb256c2ba320 = /*#__PURE__*/ (0, ($parcel$interopDefault($i0m3o$react))).forwardRef(function ContextualHelp(props, ref) {
    let { variant: variant = 'help', placement: placement = 'bottom start', children: children, ...otherProps } = props;
    let stringFormatter = (0, $i0m3o$reactariai18n.useLocalizedStringFormatter)((0, ($parcel$interopDefault($ab07f09ac8b48f11$exports))), '@react-spectrum/contextualhelp');
    let icon = variant === 'info' ? /*#__PURE__*/ (0, ($parcel$interopDefault($i0m3o$react))).createElement((0, ($parcel$interopDefault($i0m3o$spectrumiconsworkflowInfoOutline))), null) : /*#__PURE__*/ (0, ($parcel$interopDefault($i0m3o$react))).createElement((0, ($parcel$interopDefault($i0m3o$spectrumiconsworkflowHelpOutline))), null);
    let slots = {
        content: {
            UNSAFE_className: (0, ($parcel$interopDefault($a10e565ec42bcf96$exports)))['react-spectrum-ContextualHelp-content']
        },
        footer: {
            UNSAFE_className: (0, ($parcel$interopDefault($a10e565ec42bcf96$exports)))['react-spectrum-ContextualHelp-footer']
        }
    };
    let labelProps = (0, $i0m3o$reactariautils.useLabels)(otherProps, stringFormatter.format(variant));
    return /*#__PURE__*/ (0, ($parcel$interopDefault($i0m3o$react))).createElement((0, $i0m3o$reactspectrumdialog.DialogTrigger), {
        ...otherProps,
        type: "popover",
        placement: placement,
        hideArrow: true
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($i0m3o$react))).createElement((0, $i0m3o$reactspectrumbutton.ActionButton), {
        ...(0, $i0m3o$reactariautils.mergeProps)(otherProps, labelProps, {
            isDisabled: false
        }),
        ref: ref,
        UNSAFE_className: (0, $i0m3o$reactspectrumutils.classNames)((0, ($parcel$interopDefault($a10e565ec42bcf96$exports))), 'react-spectrum-ContextualHelp-button', otherProps.UNSAFE_className),
        isQuiet: true
    }, icon), /*#__PURE__*/ (0, ($parcel$interopDefault($i0m3o$react))).createElement((0, $i0m3o$reactspectrumutils.ClearSlots), null, /*#__PURE__*/ (0, ($parcel$interopDefault($i0m3o$react))).createElement((0, $i0m3o$reactspectrumutils.SlotProvider), {
        slots: slots
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($i0m3o$react))).createElement((0, $i0m3o$reactspectrumdialog.Dialog), {
        UNSAFE_className: (0, $i0m3o$reactspectrumutils.classNames)((0, ($parcel$interopDefault($a10e565ec42bcf96$exports))), 'react-spectrum-ContextualHelp-dialog')
    }, children))));
});


//# sourceMappingURL=ContextualHelp.main.js.map
