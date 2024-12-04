var $b2da92ebd9a2bc00$exports = require("./intlStrings.main.js");
require("./vars.98146794.css");
var $afc5a4514aca2340$exports = require("./button_vars_css.main.js");
var $hN0b7$reactspectrumutils = require("@react-spectrum/utils");
var $hN0b7$reactariafocus = require("@react-aria/focus");
var $hN0b7$reactariautils = require("@react-aria/utils");
var $hN0b7$reactspectrumprogress = require("@react-spectrum/progress");
var $hN0b7$react = require("react");
var $hN0b7$reactspectrumtext = require("@react-spectrum/text");
var $hN0b7$reactariabutton = require("@react-aria/button");
var $hN0b7$reactariainteractions = require("@react-aria/interactions");
var $hN0b7$reactariai18n = require("@react-aria/i18n");
var $hN0b7$reactspectrumprovider = require("@react-spectrum/provider");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "Button", () => $842a195ed1671b15$export$353f5b6fc5456de1);
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











function $842a195ed1671b15$var$disablePendingProps(props) {
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
const $842a195ed1671b15$export$353f5b6fc5456de1 = /*#__PURE__*/ (0, ($parcel$interopDefault($hN0b7$react))).forwardRef(function Button(props, ref) {
    var _buttonProps_arialabelledby;
    props = (0, $hN0b7$reactspectrumprovider.useProviderProps)(props);
    props = (0, $hN0b7$reactspectrumutils.useSlotProps)(props, 'button');
    props = $842a195ed1671b15$var$disablePendingProps(props);
    let { elementType: Element = 'button', children: children, variant: variant, style: style = variant === 'accent' || variant === 'cta' ? 'fill' : 'outline', staticColor: staticColor, isDisabled: isDisabled, isPending: isPending, autoFocus: autoFocus, ...otherProps } = props;
    let domRef = (0, $hN0b7$reactspectrumutils.useFocusableRef)(ref);
    let { buttonProps: buttonProps, isPressed: isPressed } = (0, $hN0b7$reactariabutton.useButton)(props, domRef);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $hN0b7$reactariainteractions.useHover)({
        isDisabled: isDisabled
    });
    let [isFocused, onFocusChange] = (0, $hN0b7$react.useState)(false);
    let { focusProps: focusProps } = (0, $hN0b7$reactariainteractions.useFocus)({
        onFocusChange: onFocusChange,
        isDisabled: isDisabled
    });
    let stringFormatter = (0, $hN0b7$reactariai18n.useLocalizedStringFormatter)((0, ($parcel$interopDefault($b2da92ebd9a2bc00$exports))), '@react-spectrum/button');
    let { styleProps: styleProps } = (0, $hN0b7$reactspectrumutils.useStyleProps)(otherProps);
    let hasLabel = (0, $hN0b7$reactspectrumutils.useHasChild)(`.${(0, ($parcel$interopDefault($afc5a4514aca2340$exports)))['spectrum-Button-label']}`, domRef);
    let hasIcon = (0, $hN0b7$reactspectrumutils.useHasChild)(`.${(0, ($parcel$interopDefault($afc5a4514aca2340$exports)))['spectrum-Icon']}`, domRef);
    // an aria label will block children and their labels from being read, this is undesirable for pending state
    let hasAriaLabel = !!buttonProps['aria-label'] || !!buttonProps['aria-labelledby'];
    let [isProgressVisible, setIsProgressVisible] = (0, $hN0b7$react.useState)(false);
    let backupButtonId = (0, $hN0b7$reactariautils.useId)();
    let buttonId = buttonProps.id || backupButtonId;
    let iconId = (0, $hN0b7$reactariautils.useId)();
    let textId = (0, $hN0b7$reactariautils.useId)();
    let spinnerId = (0, $hN0b7$reactariautils.useId)();
    (0, $hN0b7$react.useEffect)(()=>{
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
    if ((0, $hN0b7$reactariautils.isAppleDevice)() && (!hasAriaLabel || (0, $hN0b7$reactariautils.isFirefox)())) ariaLive = 'off';
    let isPendingProps = isPending ? {
        onClick: (e)=>{
            if (e.currentTarget instanceof HTMLButtonElement) e.preventDefault();
        }
    } : {
        // no-op. 
        // Not sure why, but TypeScript wouldn't allow to have an empty object `{}`.
        onClick: ()=>{}
    };
    return /*#__PURE__*/ (0, ($parcel$interopDefault($hN0b7$react))).createElement((0, $hN0b7$reactariafocus.FocusRing), {
        focusRingClass: (0, $hN0b7$reactspectrumutils.classNames)((0, ($parcel$interopDefault($afc5a4514aca2340$exports))), 'focus-ring'),
        autoFocus: autoFocus
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($hN0b7$react))).createElement(Element, {
        ...styleProps,
        ...(0, $hN0b7$reactariautils.mergeProps)(buttonProps, hoverProps, focusProps, isPendingProps),
        id: buttonId,
        ref: domRef,
        "data-variant": variant,
        "data-style": style,
        "data-static-color": staticColor || undefined,
        "aria-disabled": isPending ? 'true' : undefined,
        "aria-label": isPending ? isPendingAriaLiveLabel : buttonProps['aria-label'],
        "aria-labelledby": isPending ? isPendingAriaLiveLabelledby : buttonProps['aria-labelledby'],
        className: (0, $hN0b7$reactspectrumutils.classNames)((0, ($parcel$interopDefault($afc5a4514aca2340$exports))), 'spectrum-Button', {
            'spectrum-Button--iconOnly': hasIcon && !hasLabel,
            'is-disabled': isDisabled || isProgressVisible,
            'is-active': isPressed,
            'is-hovered': isHovered,
            'spectrum-Button--pending': isProgressVisible
        }, styleProps.className)
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($hN0b7$react))).createElement((0, $hN0b7$reactspectrumutils.SlotProvider), {
        slots: {
            icon: {
                id: iconId,
                size: 'S',
                UNSAFE_className: (0, $hN0b7$reactspectrumutils.classNames)((0, ($parcel$interopDefault($afc5a4514aca2340$exports))), 'spectrum-Icon')
            },
            text: {
                id: textId,
                UNSAFE_className: (0, $hN0b7$reactspectrumutils.classNames)((0, ($parcel$interopDefault($afc5a4514aca2340$exports))), 'spectrum-Button-label')
            }
        }
    }, typeof children === 'string' ? /*#__PURE__*/ (0, ($parcel$interopDefault($hN0b7$react))).createElement((0, $hN0b7$reactspectrumtext.Text), null, children) : children, isPending && /*#__PURE__*/ (0, ($parcel$interopDefault($hN0b7$react))).createElement("div", {
        "aria-hidden": "true",
        style: {
            visibility: isProgressVisible ? 'visible' : 'hidden'
        },
        className: (0, $hN0b7$reactspectrumutils.classNames)((0, ($parcel$interopDefault($afc5a4514aca2340$exports))), 'spectrum-Button-circleLoader')
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($hN0b7$react))).createElement((0, $hN0b7$reactspectrumprogress.ProgressCircle), {
        "aria-label": isPendingAriaLiveLabel,
        isIndeterminate: true,
        size: "S",
        staticColor: staticColor
    })), isPending && /*#__PURE__*/ (0, ($parcel$interopDefault($hN0b7$react))).createElement((0, ($parcel$interopDefault($hN0b7$react))).Fragment, null, /*#__PURE__*/ (0, ($parcel$interopDefault($hN0b7$react))).createElement("div", {
        "aria-live": isFocused ? ariaLive : 'off'
    }, isProgressVisible && /*#__PURE__*/ (0, ($parcel$interopDefault($hN0b7$react))).createElement("div", {
        role: "img",
        "aria-labelledby": isPendingAriaLiveLabelledby
    })), /*#__PURE__*/ (0, ($parcel$interopDefault($hN0b7$react))).createElement("div", {
        id: spinnerId,
        role: "img",
        "aria-label": isPendingAriaLiveLabel
    })))));
});


//# sourceMappingURL=Button.main.js.map
