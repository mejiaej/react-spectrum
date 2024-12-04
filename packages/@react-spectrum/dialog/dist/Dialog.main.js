var $0eb909ad2388d989$exports = require("./context.main.js");
var $7827d180f5c8b41b$exports = require("./intlStrings.main.js");
require("./vars.895d8ff6.css");
var $a74c0984b1adb651$exports = require("./dialog_vars_css.main.js");
var $1DWg7$reactspectrumbutton = require("@react-spectrum/button");
var $1DWg7$reactspectrumutils = require("@react-spectrum/utils");
var $1DWg7$spectrumiconsuiCrossLarge = require("@spectrum-icons/ui/CrossLarge");
var $1DWg7$reactspectrumlayout = require("@react-spectrum/layout");
var $1DWg7$reactariautils = require("@react-aria/utils");
var $1DWg7$react = require("react");
var $1DWg7$reactariadialog = require("@react-aria/dialog");
var $1DWg7$reactariai18n = require("@react-aria/i18n");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "Dialog", () => $a57fc2323bf98a33$export$3ddf2d174ce01153);
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










let $a57fc2323bf98a33$var$sizeMap = {
    S: 'small',
    M: 'medium',
    L: 'large',
    fullscreen: 'fullscreen',
    fullscreenTakeover: 'fullscreenTakeover'
};
const $a57fc2323bf98a33$export$3ddf2d174ce01153 = /*#__PURE__*/ (0, ($parcel$interopDefault($1DWg7$react))).forwardRef(function Dialog(props, ref) {
    props = (0, $1DWg7$reactspectrumutils.useSlotProps)(props, 'dialog');
    let { type: type = 'modal', ...contextProps } = (0, $1DWg7$react.useContext)((0, $0eb909ad2388d989$exports.DialogContext)) || {};
    let { children: children, isDismissable: isDismissable = contextProps.isDismissable, onDismiss: onDismiss = contextProps.onClose, size: size, ...otherProps } = props;
    let stringFormatter = (0, $1DWg7$reactariai18n.useLocalizedStringFormatter)((0, ($parcel$interopDefault($7827d180f5c8b41b$exports))), '@react-spectrum/dialog');
    let { styleProps: styleProps } = (0, $1DWg7$reactspectrumutils.useStyleProps)(otherProps);
    size = type === 'popover' ? size || 'S' : size || 'L';
    let domRef = (0, $1DWg7$reactspectrumutils.useDOMRef)(ref);
    let gridRef = (0, $1DWg7$react.useRef)(null);
    let sizeVariant = $a57fc2323bf98a33$var$sizeMap[type] || $a57fc2323bf98a33$var$sizeMap[size];
    let { dialogProps: dialogProps, titleProps: titleProps } = (0, $1DWg7$reactariadialog.useDialog)((0, $1DWg7$reactariautils.mergeProps)(contextProps, props), domRef);
    let hasHeader = (0, $1DWg7$reactspectrumutils.useHasChild)(`.${(0, ($parcel$interopDefault($a74c0984b1adb651$exports)))['spectrum-Dialog-header']}`, (0, $1DWg7$reactspectrumutils.unwrapDOMRef)(gridRef));
    let hasHeading = (0, $1DWg7$reactspectrumutils.useHasChild)(`.${(0, ($parcel$interopDefault($a74c0984b1adb651$exports)))['spectrum-Dialog-heading']}`, (0, $1DWg7$reactspectrumutils.unwrapDOMRef)(gridRef));
    let hasFooter = (0, $1DWg7$reactspectrumutils.useHasChild)(`.${(0, ($parcel$interopDefault($a74c0984b1adb651$exports)))['spectrum-Dialog-footer']}`, (0, $1DWg7$reactspectrumutils.unwrapDOMRef)(gridRef));
    let hasTypeIcon = (0, $1DWg7$reactspectrumutils.useHasChild)(`.${(0, ($parcel$interopDefault($a74c0984b1adb651$exports)))['spectrum-Dialog-typeIcon']}`, (0, $1DWg7$reactspectrumutils.unwrapDOMRef)(gridRef));
    let slots = (0, $1DWg7$react.useMemo)(()=>({
            hero: {
                UNSAFE_className: (0, ($parcel$interopDefault($a74c0984b1adb651$exports)))['spectrum-Dialog-hero']
            },
            heading: {
                UNSAFE_className: (0, $1DWg7$reactspectrumutils.classNames)((0, ($parcel$interopDefault($a74c0984b1adb651$exports))), 'spectrum-Dialog-heading', {
                    'spectrum-Dialog-heading--noHeader': !hasHeader,
                    'spectrum-Dialog-heading--noTypeIcon': !hasTypeIcon
                }),
                level: 2,
                ...titleProps
            },
            header: {
                UNSAFE_className: (0, $1DWg7$reactspectrumutils.classNames)((0, ($parcel$interopDefault($a74c0984b1adb651$exports))), 'spectrum-Dialog-header', {
                    'spectrum-Dialog-header--noHeading': !hasHeading,
                    'spectrum-Dialog-header--noTypeIcon': !hasTypeIcon
                })
            },
            typeIcon: {
                UNSAFE_className: (0, ($parcel$interopDefault($a74c0984b1adb651$exports)))['spectrum-Dialog-typeIcon']
            },
            divider: {
                UNSAFE_className: (0, ($parcel$interopDefault($a74c0984b1adb651$exports)))['spectrum-Dialog-divider'],
                size: 'M'
            },
            content: {
                UNSAFE_className: (0, ($parcel$interopDefault($a74c0984b1adb651$exports)))['spectrum-Dialog-content']
            },
            footer: {
                UNSAFE_className: (0, ($parcel$interopDefault($a74c0984b1adb651$exports)))['spectrum-Dialog-footer']
            },
            buttonGroup: {
                UNSAFE_className: (0, $1DWg7$reactspectrumutils.classNames)((0, ($parcel$interopDefault($a74c0984b1adb651$exports))), 'spectrum-Dialog-buttonGroup', {
                    'spectrum-Dialog-buttonGroup--noFooter': !hasFooter
                }),
                align: 'end'
            }
        }), [
        hasFooter,
        hasHeader,
        titleProps
    ]);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($1DWg7$react))).createElement("section", {
        ...styleProps,
        ...dialogProps,
        className: (0, $1DWg7$reactspectrumutils.classNames)((0, ($parcel$interopDefault($a74c0984b1adb651$exports))), 'spectrum-Dialog', {
            [`spectrum-Dialog--${sizeVariant}`]: sizeVariant,
            'spectrum-Dialog--dismissable': isDismissable
        }, styleProps.className),
        ref: domRef
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($1DWg7$react))).createElement((0, $1DWg7$reactspectrumlayout.Grid), {
        ref: gridRef,
        UNSAFE_className: (0, ($parcel$interopDefault($a74c0984b1adb651$exports)))['spectrum-Dialog-grid']
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($1DWg7$react))).createElement((0, $1DWg7$reactspectrumutils.SlotProvider), {
        slots: slots
    }, children), isDismissable && /*#__PURE__*/ (0, ($parcel$interopDefault($1DWg7$react))).createElement((0, $1DWg7$reactspectrumbutton.ActionButton), {
        UNSAFE_className: (0, ($parcel$interopDefault($a74c0984b1adb651$exports)))['spectrum-Dialog-closeButton'],
        isQuiet: true,
        "aria-label": stringFormatter.format('dismiss'),
        onPress: onDismiss
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($1DWg7$react))).createElement((0, ($parcel$interopDefault($1DWg7$spectrumiconsuiCrossLarge))), null))));
});


//# sourceMappingURL=Dialog.main.js.map
