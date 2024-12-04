import $l1zrX$intlStringsmodulejs from "./intlStrings.mjs";
import "./vars.98146794.css";
import $l1zrX$button_vars_cssmodulejs from "./button_vars_css.mjs";
import {useSlotProps as $l1zrX$useSlotProps, useFocusableRef as $l1zrX$useFocusableRef, useStyleProps as $l1zrX$useStyleProps, useHasChild as $l1zrX$useHasChild, classNames as $l1zrX$classNames, SlotProvider as $l1zrX$SlotProvider} from "@react-spectrum/utils";
import {FocusRing as $l1zrX$FocusRing} from "@react-aria/focus";
import {useId as $l1zrX$useId, isAppleDevice as $l1zrX$isAppleDevice, isFirefox as $l1zrX$isFirefox, mergeProps as $l1zrX$mergeProps} from "@react-aria/utils";
import {ProgressCircle as $l1zrX$ProgressCircle} from "@react-spectrum/progress";
import $l1zrX$react, {useState as $l1zrX$useState, useEffect as $l1zrX$useEffect} from "react";
import {Text as $l1zrX$Text} from "@react-spectrum/text";
import {useButton as $l1zrX$useButton} from "@react-aria/button";
import {useHover as $l1zrX$useHover, useFocus as $l1zrX$useFocus} from "@react-aria/interactions";
import {useLocalizedStringFormatter as $l1zrX$useLocalizedStringFormatter} from "@react-aria/i18n";
import {useProviderProps as $l1zrX$useProviderProps} from "@react-spectrum/provider";


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











function $b865a6f0049e2d66$var$disablePendingProps(props) {
    // Don't allow interaction while isPending is true
    if (props.isPending) {
        props.onPress = undefined;
        props.onPressStart = undefined;
        props.onPressEnd = undefined;
        props.onPressChange = undefined;
        props.onPressUp = undefined;
        props.onKeyDown = undefined;
        props.onKeyUp = undefined;
        props.onClick = undefined;
        props.href = undefined;
    }
    return props;
}
const $b865a6f0049e2d66$export$353f5b6fc5456de1 = /*#__PURE__*/ (0, $l1zrX$react).forwardRef(function Button(props, ref) {
    var _buttonProps_arialabelledby;
    props = (0, $l1zrX$useProviderProps)(props);
    props = (0, $l1zrX$useSlotProps)(props, 'button');
    props = $b865a6f0049e2d66$var$disablePendingProps(props);
    let { elementType: Element = 'button', children: children, variant: variant, style: style = variant === 'accent' || variant === 'cta' ? 'fill' : 'outline', staticColor: staticColor, isDisabled: isDisabled, isPending: isPending, autoFocus: autoFocus, ...otherProps } = props;
    let domRef = (0, $l1zrX$useFocusableRef)(ref);
    let { buttonProps: buttonProps, isPressed: isPressed } = (0, $l1zrX$useButton)(props, domRef);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $l1zrX$useHover)({
        isDisabled: isDisabled
    });
    let [isFocused, onFocusChange] = (0, $l1zrX$useState)(false);
    let { focusProps: focusProps } = (0, $l1zrX$useFocus)({
        onFocusChange: onFocusChange,
        isDisabled: isDisabled
    });
    let stringFormatter = (0, $l1zrX$useLocalizedStringFormatter)((0, ($parcel$interopDefault($l1zrX$intlStringsmodulejs))), '@react-spectrum/button');
    let { styleProps: styleProps } = (0, $l1zrX$useStyleProps)(otherProps);
    let hasLabel = (0, $l1zrX$useHasChild)(`.${(0, ($parcel$interopDefault($l1zrX$button_vars_cssmodulejs)))['spectrum-Button-label']}`, domRef);
    let hasIcon = (0, $l1zrX$useHasChild)(`.${(0, ($parcel$interopDefault($l1zrX$button_vars_cssmodulejs)))['spectrum-Icon']}`, domRef);
    // an aria label will block children and their labels from being read, this is undesirable for pending state
    let hasAriaLabel = !!buttonProps['aria-label'] || !!buttonProps['aria-labelledby'];
    let [isProgressVisible, setIsProgressVisible] = (0, $l1zrX$useState)(false);
    let backupButtonId = (0, $l1zrX$useId)();
    let buttonId = buttonProps.id || backupButtonId;
    let iconId = (0, $l1zrX$useId)();
    let textId = (0, $l1zrX$useId)();
    let spinnerId = (0, $l1zrX$useId)();
    (0, $l1zrX$useEffect)(()=>{
        let timeout;
        if (isPending) // Start timer when isPending is set to true.
        timeout = setTimeout(()=>{
            setIsProgressVisible(true);
        }, 1000);
        else // Exit loading state when isPending is set to false. */
        setIsProgressVisible(false);
        return ()=>{
            // Clean up on unmount or when user removes isPending prop before entering loading state.
            clearTimeout(timeout);
        };
    }, [
        isPending
    ]);
    if (variant === 'cta') variant = 'accent';
    else if (variant === 'overBackground') {
        variant = 'primary';
        staticColor = 'white';
    }
    const isPendingAriaLiveLabel = `${hasAriaLabel ? buttonProps['aria-label'] : ''} ${stringFormatter.format('pending')}`.trim();
    var _buttonProps_arialabelledby_replace;
    const isPendingAriaLiveLabelledby = hasAriaLabel ? (_buttonProps_arialabelledby_replace = (_buttonProps_arialabelledby = buttonProps['aria-labelledby']) === null || _buttonProps_arialabelledby === void 0 ? void 0 : _buttonProps_arialabelledby.replace(buttonId, spinnerId)) !== null && _buttonProps_arialabelledby_replace !== void 0 ? _buttonProps_arialabelledby_replace : spinnerId : `${hasIcon ? iconId : ''} ${hasLabel ? textId : ''} ${spinnerId}`.trim();
    let ariaLive = 'polite';
    if ((0, $l1zrX$isAppleDevice)() && (!hasAriaLabel || (0, $l1zrX$isFirefox)())) ariaLive = 'off';
    let isPendingProps = isPending ? {
        onClick: (e)=>{
            if (e.currentTarget instanceof HTMLButtonElement) e.preventDefault();
        }
    } : {
        // no-op. 
        // Not sure why, but TypeScript wouldn't allow to have an empty object `{}`.
        onClick: ()=>{}
    };
    return /*#__PURE__*/ (0, $l1zrX$react).createElement((0, $l1zrX$FocusRing), {
        focusRingClass: (0, $l1zrX$classNames)((0, ($parcel$interopDefault($l1zrX$button_vars_cssmodulejs))), 'focus-ring'),
        autoFocus: autoFocus
    }, /*#__PURE__*/ (0, $l1zrX$react).createElement(Element, {
        ...styleProps,
        ...(0, $l1zrX$mergeProps)(buttonProps, hoverProps, focusProps, isPendingProps),
        id: buttonId,
        ref: domRef,
        "data-variant": variant,
        "data-style": style,
        "data-static-color": staticColor || undefined,
        "aria-disabled": isPending ? 'true' : undefined,
        "aria-label": isPending ? isPendingAriaLiveLabel : buttonProps['aria-label'],
        "aria-labelledby": isPending ? isPendingAriaLiveLabelledby : buttonProps['aria-labelledby'],
        className: (0, $l1zrX$classNames)((0, ($parcel$interopDefault($l1zrX$button_vars_cssmodulejs))), 'spectrum-Button', {
            'spectrum-Button--iconOnly': hasIcon && !hasLabel,
            'is-disabled': isDisabled || isProgressVisible,
            'is-active': isPressed,
            'is-hovered': isHovered,
            'spectrum-Button--pending': isProgressVisible
        }, styleProps.className)
    }, /*#__PURE__*/ (0, $l1zrX$react).createElement((0, $l1zrX$SlotProvider), {
        slots: {
            icon: {
                id: iconId,
                size: 'S',
                UNSAFE_className: (0, $l1zrX$classNames)((0, ($parcel$interopDefault($l1zrX$button_vars_cssmodulejs))), 'spectrum-Icon')
            },
            text: {
                id: textId,
                UNSAFE_className: (0, $l1zrX$classNames)((0, ($parcel$interopDefault($l1zrX$button_vars_cssmodulejs))), 'spectrum-Button-label')
            }
        }
    }, typeof children === 'string' ? /*#__PURE__*/ (0, $l1zrX$react).createElement((0, $l1zrX$Text), null, children) : children, isPending && /*#__PURE__*/ (0, $l1zrX$react).createElement("div", {
        "aria-hidden": "true",
        style: {
            visibility: isProgressVisible ? 'visible' : 'hidden'
        },
        className: (0, $l1zrX$classNames)((0, ($parcel$interopDefault($l1zrX$button_vars_cssmodulejs))), 'spectrum-Button-circleLoader')
    }, /*#__PURE__*/ (0, $l1zrX$react).createElement((0, $l1zrX$ProgressCircle), {
        "aria-label": isPendingAriaLiveLabel,
        isIndeterminate: true,
        size: "S",
        staticColor: staticColor
    })), isPending && /*#__PURE__*/ (0, $l1zrX$react).createElement((0, $l1zrX$react).Fragment, null, /*#__PURE__*/ (0, $l1zrX$react).createElement("div", {
        "aria-live": isFocused ? ariaLive : 'off'
    }, isProgressVisible && /*#__PURE__*/ (0, $l1zrX$react).createElement("div", {
        role: "img",
        "aria-labelledby": isPendingAriaLiveLabelledby
    })), /*#__PURE__*/ (0, $l1zrX$react).createElement("div", {
        id: spinnerId,
        role: "img",
        "aria-label": isPendingAriaLiveLabel
    })))));
});


export {$b865a6f0049e2d66$export$353f5b6fc5456de1 as Button};
//# sourceMappingURL=Button.module.js.map
