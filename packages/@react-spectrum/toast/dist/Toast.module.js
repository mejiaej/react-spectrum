import $iu2Jc$intlStringsmodulejs from "./intlStrings.module.js";
import "./vars.84eec607.css";
import $iu2Jc$toast_vars_cssmodulejs from "./toast_vars_css.module.js";
import "./toastContainer.5957ce49.css";
import $iu2Jc$toastContainer_cssmodulejs from "./toastContainer_css.module.js";
import $iu2Jc$spectrumiconsuiAlertMedium from "@spectrum-icons/ui/AlertMedium";
import {Button as $iu2Jc$Button, ClearButton as $iu2Jc$ClearButton} from "@react-spectrum/button";
import {useDOMRef as $iu2Jc$useDOMRef, useStyleProps as $iu2Jc$useStyleProps, classNames as $iu2Jc$classNames} from "@react-spectrum/utils";
import $iu2Jc$spectrumiconsuiCrossMedium from "@spectrum-icons/ui/CrossMedium";
import {mergeProps as $iu2Jc$mergeProps, filterDOMProps as $iu2Jc$filterDOMProps} from "@react-aria/utils";
import $iu2Jc$spectrumiconsuiInfoMedium from "@spectrum-icons/ui/InfoMedium";
import $iu2Jc$react from "react";
import $iu2Jc$spectrumiconsuiSuccessMedium from "@spectrum-icons/ui/SuccessMedium";
import {useFocusRing as $iu2Jc$useFocusRing} from "@react-aria/focus";
import {useLocalizedStringFormatter as $iu2Jc$useLocalizedStringFormatter} from "@react-aria/i18n";
import {useToast as $iu2Jc$useToast} from "@react-aria/toast";


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













const $7e7a2952509f3a56$export$fde44257752a9f60 = {
    info: (0, $iu2Jc$spectrumiconsuiInfoMedium),
    negative: (0, $iu2Jc$spectrumiconsuiAlertMedium),
    positive: (0, $iu2Jc$spectrumiconsuiSuccessMedium)
};
const $7e7a2952509f3a56$export$8d8dc7d5f743331b = /*#__PURE__*/ (0, $iu2Jc$react).forwardRef(function Toast(props, ref) {
    let { toast: { key: key, animation: animation, content: { children: children, variant: variant, actionLabel: actionLabel, onAction: onAction, shouldCloseOnAction: shouldCloseOnAction } }, state: state, ...otherProps } = props;
    let domRef = (0, $iu2Jc$useDOMRef)(ref);
    let { closeButtonProps: closeButtonProps, titleProps: titleProps, toastProps: toastProps, contentProps: contentProps } = (0, $iu2Jc$useToast)(props, state, domRef);
    let { styleProps: styleProps } = (0, $iu2Jc$useStyleProps)(otherProps);
    let stringFormatter = (0, $iu2Jc$useLocalizedStringFormatter)((0, ($parcel$interopDefault($iu2Jc$intlStringsmodulejs))), '@react-spectrum/toast');
    let iconLabel = variant && variant !== 'neutral' ? stringFormatter.format(variant) : null;
    let Icon = $7e7a2952509f3a56$export$fde44257752a9f60[variant];
    let { isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, $iu2Jc$useFocusRing)();
    const handleAction = ()=>{
        if (onAction) onAction();
        if (shouldCloseOnAction) state.close(key);
    };
    return /*#__PURE__*/ (0, $iu2Jc$react).createElement("div", {
        ...styleProps,
        ...(0, $iu2Jc$mergeProps)(toastProps, focusProps),
        ...(0, $iu2Jc$filterDOMProps)(props.toast.content),
        ref: domRef,
        className: (0, $iu2Jc$classNames)((0, ($parcel$interopDefault($iu2Jc$toast_vars_cssmodulejs))), 'spectrum-Toast', {
            ['spectrum-Toast--' + variant]: variant
        }, styleProps.className, (0, $iu2Jc$classNames)((0, ($parcel$interopDefault($iu2Jc$toastContainer_cssmodulejs))), 'spectrum-Toast', {
            'focus-ring': isFocusVisible
        })),
        style: {
            ...styleProps.style,
            zIndex: props.toast.priority
        },
        "data-animation": animation,
        onAnimationEnd: ()=>{
            if (animation === 'exiting') state.remove(key);
        }
    }, /*#__PURE__*/ (0, $iu2Jc$react).createElement("div", {
        ...contentProps,
        className: (0, $iu2Jc$classNames)((0, ($parcel$interopDefault($iu2Jc$toastContainer_cssmodulejs))), 'spectrum-Toast-contentWrapper')
    }, Icon && /*#__PURE__*/ (0, $iu2Jc$react).createElement(Icon, {
        "aria-label": iconLabel,
        UNSAFE_className: (0, $iu2Jc$classNames)((0, ($parcel$interopDefault($iu2Jc$toast_vars_cssmodulejs))), 'spectrum-Toast-typeIcon')
    }), /*#__PURE__*/ (0, $iu2Jc$react).createElement("div", {
        className: (0, $iu2Jc$classNames)((0, ($parcel$interopDefault($iu2Jc$toast_vars_cssmodulejs))), 'spectrum-Toast-body'),
        role: "presentation"
    }, /*#__PURE__*/ (0, $iu2Jc$react).createElement("div", {
        className: (0, $iu2Jc$classNames)((0, ($parcel$interopDefault($iu2Jc$toast_vars_cssmodulejs))), 'spectrum-Toast-content'),
        role: "presentation",
        ...titleProps
    }, children), actionLabel && /*#__PURE__*/ (0, $iu2Jc$react).createElement((0, $iu2Jc$Button), {
        onPress: handleAction,
        UNSAFE_className: (0, $iu2Jc$classNames)((0, ($parcel$interopDefault($iu2Jc$toast_vars_cssmodulejs))), 'spectrum-Button'),
        variant: "secondary",
        staticColor: "white"
    }, actionLabel))), /*#__PURE__*/ (0, $iu2Jc$react).createElement("div", {
        className: (0, $iu2Jc$classNames)((0, ($parcel$interopDefault($iu2Jc$toast_vars_cssmodulejs))), 'spectrum-Toast-buttons')
    }, /*#__PURE__*/ (0, $iu2Jc$react).createElement((0, $iu2Jc$ClearButton), {
        ...closeButtonProps,
        variant: "overBackground"
    }, /*#__PURE__*/ (0, $iu2Jc$react).createElement((0, $iu2Jc$spectrumiconsuiCrossMedium), null))));
});


export {$7e7a2952509f3a56$export$fde44257752a9f60 as ICONS, $7e7a2952509f3a56$export$8d8dc7d5f743331b as Toast};
//# sourceMappingURL=Toast.module.js.map
