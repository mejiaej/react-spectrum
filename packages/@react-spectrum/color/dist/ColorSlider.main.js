var $2b9adc23f6c7cae1$exports = require("./ColorThumb.main.js");
require("./vars.a54898d8.css");
var $28060baf29cc5ac7$exports = require("./colorslider_vars_css.main.js");
var $5EHW1$reactspectrumutils = require("@react-spectrum/utils");
var $5EHW1$reactariacomponents = require("react-aria-components");
var $5EHW1$reactspectrumlabel = require("@react-spectrum/label");
var $5EHW1$react = require("react");
var $5EHW1$reactariacolor = require("@react-aria/color");
var $5EHW1$reactstatelycolor = require("@react-stately/color");
var $5EHW1$reactariainteractions = require("@react-aria/interactions");
var $5EHW1$reactariai18n = require("@react-aria/i18n");
var $5EHW1$reactspectrumprovider = require("@react-spectrum/provider");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "ColorSlider", () => $4537dec0de08c277$export$44fd664bcca5b6fb);
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










const $4537dec0de08c277$export$44fd664bcca5b6fb = /*#__PURE__*/ (0, ($parcel$interopDefault($5EHW1$react))).forwardRef(function ColorSlider(props, ref) {
    props = (0, $5EHW1$reactspectrumprovider.useProviderProps)(props);
    let inputRef = (0, $5EHW1$react.useRef)(null);
    let trackRef = (0, $5EHW1$react.useRef)(null);
    let domRef = (0, $5EHW1$reactspectrumutils.useFocusableRef)(ref, inputRef);
    [props, domRef] = (0, $5EHW1$reactariacomponents.useContextProps)(props, domRef, (0, $5EHW1$reactariacomponents.ColorSliderContext));
    let { isDisabled: isDisabled, channel: channel, orientation: orientation, label: label, showValueLabel: showValueLabel, 'aria-label': ariaLabel } = props;
    let vertical = orientation === 'vertical';
    let { styleProps: styleProps } = (0, $5EHW1$reactspectrumutils.useStyleProps)(props);
    let { locale: locale } = (0, $5EHW1$reactariai18n.useLocale)();
    let state = (0, $5EHW1$reactstatelycolor.useColorSliderState)({
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
    let { inputProps: inputProps, thumbProps: thumbProps, trackProps: trackProps, labelProps: labelProps, outputProps: outputProps } = (0, $5EHW1$reactariacolor.useColorSlider)({
        ...props,
        label: label,
        'aria-label': ariaLabel,
        trackRef: trackRef,
        inputRef: inputRef
    }, state);
    let { isFocusVisible: isFocusVisible } = (0, $5EHW1$reactariainteractions.useFocusVisible)();
    let [isFocused, setIsFocused] = (0, $5EHW1$react.useState)(false);
    let { focusProps: focusProps } = (0, $5EHW1$reactariainteractions.useFocus)({
        isDisabled: isDisabled,
        onFocusChange: setIsFocused
    });
    return /*#__PURE__*/ (0, ($parcel$interopDefault($5EHW1$react))).createElement("div", {
        ref: domRef,
        ...styleProps,
        className: (0, $5EHW1$reactspectrumutils.classNames)((0, ($parcel$interopDefault($28060baf29cc5ac7$exports))), {
            'spectrum-ColorSlider-container--horizontal': !vertical,
            'spectrum-ColorSlider-container--vertical': vertical
        })
    }, label && /*#__PURE__*/ (0, ($parcel$interopDefault($5EHW1$react))).createElement("div", {
        className: (0, $5EHW1$reactspectrumutils.classNames)((0, ($parcel$interopDefault($28060baf29cc5ac7$exports))), 'spectrum-ColorSlider-labelContainer')
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($5EHW1$react))).createElement((0, $5EHW1$reactspectrumlabel.Label), labelProps, label), props.contextualHelp && /*#__PURE__*/ (0, ($parcel$interopDefault($5EHW1$react))).createElement((0, $5EHW1$reactspectrumutils.SlotProvider), {
        slots: {
            actionButton: {
                UNSAFE_className: (0, $5EHW1$reactspectrumutils.classNames)((0, ($parcel$interopDefault($28060baf29cc5ac7$exports))), 'spectrum-ColorSlider-contextualHelp')
            }
        }
    }, props.contextualHelp), showValueLabel && /*#__PURE__*/ (0, ($parcel$interopDefault($5EHW1$react))).createElement((0, $5EHW1$reactspectrumlabel.Label), {
        elementType: "span",
        UNSAFE_className: (0, $5EHW1$reactspectrumutils.classNames)((0, ($parcel$interopDefault($28060baf29cc5ac7$exports))), 'spectrum-ColorSlider-valueLabel')
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($5EHW1$react))).createElement("output", outputProps, state.value.formatChannelValue(channel, locale)))), /*#__PURE__*/ (0, ($parcel$interopDefault($5EHW1$react))).createElement("div", {
        ...trackProps,
        ref: trackRef,
        className: (0, $5EHW1$reactspectrumutils.classNames)((0, ($parcel$interopDefault($28060baf29cc5ac7$exports))), 'spectrum-ColorSlider', {
            'is-disabled': isDisabled,
            'spectrum-ColorSlider--vertical': vertical
        })
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($5EHW1$react))).createElement((0, $2b9adc23f6c7cae1$exports.ColorThumb), {
        value: state.getDisplayColor(),
        isFocused: isFocused && isFocusVisible,
        isDisabled: isDisabled,
        isDragging: state.isThumbDragging(0),
        containerRef: trackRef,
        className: (0, $5EHW1$reactspectrumutils.classNames)((0, ($parcel$interopDefault($28060baf29cc5ac7$exports))), 'spectrum-ColorSlider-handle'),
        ...thumbProps
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($5EHW1$react))).createElement("input", {
        ...inputProps,
        ...focusProps,
        ref: inputRef,
        className: (0, $5EHW1$reactspectrumutils.classNames)((0, ($parcel$interopDefault($28060baf29cc5ac7$exports))), 'spectrum-ColorSlider-slider')
    }))));
});


//# sourceMappingURL=ColorSlider.main.js.map
