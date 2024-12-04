import {DialogContext as $97b119e05830ea0d$export$8b93a07348a7730c} from "./context.mjs";
import $3e38X$intlStringsmodulejs from "./intlStrings.mjs";
import "./vars.895d8ff6.css";
import $3e38X$dialog_vars_cssmodulejs from "./dialog_vars_css.mjs";
import {ActionButton as $3e38X$ActionButton} from "@react-spectrum/button";
import {useSlotProps as $3e38X$useSlotProps, useStyleProps as $3e38X$useStyleProps, useDOMRef as $3e38X$useDOMRef, useHasChild as $3e38X$useHasChild, unwrapDOMRef as $3e38X$unwrapDOMRef, classNames as $3e38X$classNames, SlotProvider as $3e38X$SlotProvider} from "@react-spectrum/utils";
import $3e38X$spectrumiconsuiCrossLarge from "@spectrum-icons/ui/CrossLarge";
import {Grid as $3e38X$Grid} from "@react-spectrum/layout";
import {mergeProps as $3e38X$mergeProps} from "@react-aria/utils";
import $3e38X$react, {useContext as $3e38X$useContext, useRef as $3e38X$useRef, useMemo as $3e38X$useMemo} from "react";
import {useDialog as $3e38X$useDialog} from "@react-aria/dialog";
import {useLocalizedStringFormatter as $3e38X$useLocalizedStringFormatter} from "@react-aria/i18n";


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










let $99cd51dc4eb569f7$var$sizeMap = {
    S: 'small',
    M: 'medium',
    L: 'large',
    fullscreen: 'fullscreen',
    fullscreenTakeover: 'fullscreenTakeover'
};
const $99cd51dc4eb569f7$export$3ddf2d174ce01153 = /*#__PURE__*/ (0, $3e38X$react).forwardRef(function Dialog(props, ref) {
    props = (0, $3e38X$useSlotProps)(props, 'dialog');
    let { type: type = 'modal', ...contextProps } = (0, $3e38X$useContext)((0, $97b119e05830ea0d$export$8b93a07348a7730c)) || {};
    let { children: children, isDismissable: isDismissable = contextProps.isDismissable, onDismiss: onDismiss = contextProps.onClose, size: size, ...otherProps } = props;
    let stringFormatter = (0, $3e38X$useLocalizedStringFormatter)((0, ($parcel$interopDefault($3e38X$intlStringsmodulejs))), '@react-spectrum/dialog');
    let { styleProps: styleProps } = (0, $3e38X$useStyleProps)(otherProps);
    size = type === 'popover' ? size || 'S' : size || 'L';
    let domRef = (0, $3e38X$useDOMRef)(ref);
    let gridRef = (0, $3e38X$useRef)(null);
    let sizeVariant = $99cd51dc4eb569f7$var$sizeMap[type] || $99cd51dc4eb569f7$var$sizeMap[size];
    let { dialogProps: dialogProps, titleProps: titleProps } = (0, $3e38X$useDialog)((0, $3e38X$mergeProps)(contextProps, props), domRef);
    let hasHeader = (0, $3e38X$useHasChild)(`.${(0, ($parcel$interopDefault($3e38X$dialog_vars_cssmodulejs)))['spectrum-Dialog-header']}`, (0, $3e38X$unwrapDOMRef)(gridRef));
    let hasHeading = (0, $3e38X$useHasChild)(`.${(0, ($parcel$interopDefault($3e38X$dialog_vars_cssmodulejs)))['spectrum-Dialog-heading']}`, (0, $3e38X$unwrapDOMRef)(gridRef));
    let hasFooter = (0, $3e38X$useHasChild)(`.${(0, ($parcel$interopDefault($3e38X$dialog_vars_cssmodulejs)))['spectrum-Dialog-footer']}`, (0, $3e38X$unwrapDOMRef)(gridRef));
    let hasTypeIcon = (0, $3e38X$useHasChild)(`.${(0, ($parcel$interopDefault($3e38X$dialog_vars_cssmodulejs)))['spectrum-Dialog-typeIcon']}`, (0, $3e38X$unwrapDOMRef)(gridRef));
    let slots = (0, $3e38X$useMemo)(()=>({
            hero: {
                UNSAFE_className: (0, ($parcel$interopDefault($3e38X$dialog_vars_cssmodulejs)))['spectrum-Dialog-hero']
            },
            heading: {
                UNSAFE_className: (0, $3e38X$classNames)((0, ($parcel$interopDefault($3e38X$dialog_vars_cssmodulejs))), 'spectrum-Dialog-heading', {
                    'spectrum-Dialog-heading--noHeader': !hasHeader,
                    'spectrum-Dialog-heading--noTypeIcon': !hasTypeIcon
                }),
                level: 2,
                ...titleProps
            },
            header: {
                UNSAFE_className: (0, $3e38X$classNames)((0, ($parcel$interopDefault($3e38X$dialog_vars_cssmodulejs))), 'spectrum-Dialog-header', {
                    'spectrum-Dialog-header--noHeading': !hasHeading,
                    'spectrum-Dialog-header--noTypeIcon': !hasTypeIcon
                })
            },
            typeIcon: {
                UNSAFE_className: (0, ($parcel$interopDefault($3e38X$dialog_vars_cssmodulejs)))['spectrum-Dialog-typeIcon']
            },
            divider: {
                UNSAFE_className: (0, ($parcel$interopDefault($3e38X$dialog_vars_cssmodulejs)))['spectrum-Dialog-divider'],
                size: 'M'
            },
            content: {
                UNSAFE_className: (0, ($parcel$interopDefault($3e38X$dialog_vars_cssmodulejs)))['spectrum-Dialog-content']
            },
            footer: {
                UNSAFE_className: (0, ($parcel$interopDefault($3e38X$dialog_vars_cssmodulejs)))['spectrum-Dialog-footer']
            },
            buttonGroup: {
                UNSAFE_className: (0, $3e38X$classNames)((0, ($parcel$interopDefault($3e38X$dialog_vars_cssmodulejs))), 'spectrum-Dialog-buttonGroup', {
                    'spectrum-Dialog-buttonGroup--noFooter': !hasFooter
                }),
                align: 'end'
            }
        }), [
        hasFooter,
        hasHeader,
        titleProps
    ]);
    return /*#__PURE__*/ (0, $3e38X$react).createElement("section", {
        ...styleProps,
        ...dialogProps,
        className: (0, $3e38X$classNames)((0, ($parcel$interopDefault($3e38X$dialog_vars_cssmodulejs))), 'spectrum-Dialog', {
            [`spectrum-Dialog--${sizeVariant}`]: sizeVariant,
            'spectrum-Dialog--dismissable': isDismissable
        }, styleProps.className),
        ref: domRef
    }, /*#__PURE__*/ (0, $3e38X$react).createElement((0, $3e38X$Grid), {
        ref: gridRef,
        UNSAFE_className: (0, ($parcel$interopDefault($3e38X$dialog_vars_cssmodulejs)))['spectrum-Dialog-grid']
    }, /*#__PURE__*/ (0, $3e38X$react).createElement((0, $3e38X$SlotProvider), {
        slots: slots
    }, children), isDismissable && /*#__PURE__*/ (0, $3e38X$react).createElement((0, $3e38X$ActionButton), {
        UNSAFE_className: (0, ($parcel$interopDefault($3e38X$dialog_vars_cssmodulejs)))['spectrum-Dialog-closeButton'],
        isQuiet: true,
        "aria-label": stringFormatter.format('dismiss'),
        onPress: onDismiss
    }, /*#__PURE__*/ (0, $3e38X$react).createElement((0, $3e38X$spectrumiconsuiCrossLarge), null))));
});


export {$99cd51dc4eb569f7$export$3ddf2d174ce01153 as Dialog};
//# sourceMappingURL=Dialog.module.js.map
