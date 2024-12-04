import {ColorThumb as $3a90e89d07d7bbd5$export$a3cc47cee1c1ccc} from "./ColorThumb.module.js";
import "./vars.a54898d8.css";
import $fxUYb$colorslider_vars_cssmodulejs from "./colorslider_vars_css.module.js";
import {useFocusableRef as $fxUYb$useFocusableRef, useStyleProps as $fxUYb$useStyleProps, classNames as $fxUYb$classNames, SlotProvider as $fxUYb$SlotProvider} from "@react-spectrum/utils";
import {useContextProps as $fxUYb$useContextProps, ColorSliderContext as $fxUYb$ColorSliderContext} from "react-aria-components";
import {Label as $fxUYb$Label} from "@react-spectrum/label";
import $fxUYb$react, {useRef as $fxUYb$useRef, useState as $fxUYb$useState} from "react";
import {useColorSlider as $fxUYb$useColorSlider} from "@react-aria/color";
import {useColorSliderState as $fxUYb$useColorSliderState} from "@react-stately/color";
import {useFocusVisible as $fxUYb$useFocusVisible, useFocus as $fxUYb$useFocus} from "@react-aria/interactions";
import {useLocale as $fxUYb$useLocale} from "@react-aria/i18n";
import {useProviderProps as $fxUYb$useProviderProps} from "@react-spectrum/provider";


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










const $3870e4ce67ed7ee1$export$44fd664bcca5b6fb = /*#__PURE__*/ (0, $fxUYb$react).forwardRef(function ColorSlider(props, ref) {
    props = (0, $fxUYb$useProviderProps)(props);
    let inputRef = (0, $fxUYb$useRef)(null);
    let trackRef = (0, $fxUYb$useRef)(null);
    let domRef = (0, $fxUYb$useFocusableRef)(ref, inputRef);
    [props, domRef] = (0, $fxUYb$useContextProps)(props, domRef, (0, $fxUYb$ColorSliderContext));
    let { isDisabled: isDisabled, channel: channel, orientation: orientation, label: label, showValueLabel: showValueLabel, 'aria-label': ariaLabel } = props;
    let vertical = orientation === 'vertical';
    let { styleProps: styleProps } = (0, $fxUYb$useStyleProps)(props);
    let { locale: locale } = (0, $fxUYb$useLocale)();
    let state = (0, $fxUYb$useColorSliderState)({
        ...props,
        locale: locale
    });
    // If vertical and a label is provided, use it as an aria-label instead.
    if (vertical && label) {
        ariaLabel = ariaLabel || (typeof label === 'string' ? label : undefined);
        label = null;
    }
    // If no external label, aria-label or aria-labelledby is provided,
    // default to displaying the localized channel value.
    // Specifically check if label is undefined. If label is `null` then display no visible label.
    // A default aria-label is provided by useColorSlider in that case.
    if (label === undefined && !ariaLabel && !props['aria-labelledby'] && !vertical) label = state.value.getChannelName(channel, locale);
    // Show the value label by default if there is a visible label
    if (showValueLabel == null) showValueLabel = !!label;
    let { inputProps: inputProps, thumbProps: thumbProps, trackProps: trackProps, labelProps: labelProps, outputProps: outputProps } = (0, $fxUYb$useColorSlider)({
        ...props,
        label: label,
        'aria-label': ariaLabel,
        trackRef: trackRef,
        inputRef: inputRef
    }, state);
    let { isFocusVisible: isFocusVisible } = (0, $fxUYb$useFocusVisible)();
    let [isFocused, setIsFocused] = (0, $fxUYb$useState)(false);
    let { focusProps: focusProps } = (0, $fxUYb$useFocus)({
        isDisabled: isDisabled,
        onFocusChange: setIsFocused
    });
    return /*#__PURE__*/ (0, $fxUYb$react).createElement("div", {
        ref: domRef,
        ...styleProps,
        className: (0, $fxUYb$classNames)((0, ($parcel$interopDefault($fxUYb$colorslider_vars_cssmodulejs))), {
            'spectrum-ColorSlider-container--horizontal': !vertical,
            'spectrum-ColorSlider-container--vertical': vertical
        })
    }, label && /*#__PURE__*/ (0, $fxUYb$react).createElement("div", {
        className: (0, $fxUYb$classNames)((0, ($parcel$interopDefault($fxUYb$colorslider_vars_cssmodulejs))), 'spectrum-ColorSlider-labelContainer')
    }, /*#__PURE__*/ (0, $fxUYb$react).createElement((0, $fxUYb$Label), labelProps, label), props.contextualHelp && /*#__PURE__*/ (0, $fxUYb$react).createElement((0, $fxUYb$SlotProvider), {
        slots: {
            actionButton: {
                UNSAFE_className: (0, $fxUYb$classNames)((0, ($parcel$interopDefault($fxUYb$colorslider_vars_cssmodulejs))), 'spectrum-ColorSlider-contextualHelp')
            }
        }
    }, props.contextualHelp), showValueLabel && /*#__PURE__*/ (0, $fxUYb$react).createElement((0, $fxUYb$Label), {
        elementType: "span",
        UNSAFE_className: (0, $fxUYb$classNames)((0, ($parcel$interopDefault($fxUYb$colorslider_vars_cssmodulejs))), 'spectrum-ColorSlider-valueLabel')
    }, /*#__PURE__*/ (0, $fxUYb$react).createElement("output", outputProps, state.value.formatChannelValue(channel, locale)))), /*#__PURE__*/ (0, $fxUYb$react).createElement("div", {
        ...trackProps,
        ref: trackRef,
        className: (0, $fxUYb$classNames)((0, ($parcel$interopDefault($fxUYb$colorslider_vars_cssmodulejs))), 'spectrum-ColorSlider', {
            'is-disabled': isDisabled,
            'spectrum-ColorSlider--vertical': vertical
        })
    }, /*#__PURE__*/ (0, $fxUYb$react).createElement((0, $3a90e89d07d7bbd5$export$a3cc47cee1c1ccc), {
        value: state.getDisplayColor(),
        isFocused: isFocused && isFocusVisible,
        isDisabled: isDisabled,
        isDragging: state.isThumbDragging(0),
        containerRef: trackRef,
        className: (0, $fxUYb$classNames)((0, ($parcel$interopDefault($fxUYb$colorslider_vars_cssmodulejs))), 'spectrum-ColorSlider-handle'),
        ...thumbProps
    }, /*#__PURE__*/ (0, $fxUYb$react).createElement("input", {
        ...inputProps,
        ...focusProps,
        ref: inputRef,
        className: (0, $fxUYb$classNames)((0, ($parcel$interopDefault($fxUYb$colorslider_vars_cssmodulejs))), 'spectrum-ColorSlider-slider')
    }))));
});


export {$3870e4ce67ed7ee1$export$44fd664bcca5b6fb as ColorSlider};
//# sourceMappingURL=ColorSlider.module.js.map
