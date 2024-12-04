require("./vars.fb2ba660.css");
var $57893a49ef34c169$exports = require("./slider_vars_css.main.js");
var $2j89m$reactspectrumutils = require("@react-spectrum/utils");
var $2j89m$react = require("react");
var $2j89m$reactstatelyslider = require("@react-stately/slider");
var $2j89m$reactariai18n = require("@react-aria/i18n");
var $2j89m$reactspectrumprovider = require("@react-spectrum/provider");
var $2j89m$reactariaslider = require("@react-aria/slider");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "SliderBase", () => $ec6ca573d82152ff$export$9418495bb635ebde);
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






const $ec6ca573d82152ff$export$9418495bb635ebde = /*#__PURE__*/ (0, ($parcel$interopDefault($2j89m$react))).forwardRef(function SliderBase(props, ref) {
    props = (0, $2j89m$reactspectrumprovider.useProviderProps)(props);
    let { isDisabled: isDisabled, children: children, classes: classes, style: style, labelPosition: labelPosition = 'top', getValueLabel: getValueLabel, showValueLabel: showValueLabel = !!props.label, formatOptions: formatOptions, minValue: minValue = 0, maxValue: maxValue = 100, ...otherProps } = props;
    let { styleProps: styleProps } = (0, $2j89m$reactspectrumutils.useStyleProps)(otherProps);
    // `Math.abs(Math.sign(a) - Math.sign(b)) === 2` is true if the values have a different sign.
    let alwaysDisplaySign = Math.abs(Math.sign(minValue) - Math.sign(maxValue)) === 2;
    if (alwaysDisplaySign) {
        if (formatOptions != null) {
            if (!('signDisplay' in formatOptions)) formatOptions = {
                ...formatOptions,
                signDisplay: 'exceptZero'
            };
        } else formatOptions = {
            signDisplay: 'exceptZero'
        };
    }
    const formatter = (0, $2j89m$reactariai18n.useNumberFormatter)(formatOptions);
    const state = (0, $2j89m$reactstatelyslider.useSliderState)({
        ...props,
        numberFormatter: formatter,
        minValue: minValue,
        maxValue: maxValue
    });
    let trackRef = (0, $2j89m$react.useRef)(null);
    let { groupProps: groupProps, trackProps: trackProps, labelProps: labelProps, outputProps: outputProps } = (0, $2j89m$reactariaslider.useSlider)(props, state, trackRef);
    let inputRef = (0, $2j89m$react.useRef)(null);
    let domRef = (0, $2j89m$reactspectrumutils.useFocusableRef)(ref, inputRef);
    let displayValue = '';
    let maxLabelLength = null;
    if (typeof getValueLabel === 'function') {
        displayValue = getValueLabel(state.values);
        switch(state.values.length){
            case 1:
                maxLabelLength = Math.max(getValueLabel([
                    minValue
                ]).length, getValueLabel([
                    maxValue
                ]).length);
                break;
            case 2:
                // Try all possible combinations of min and max values.
                maxLabelLength = Math.max(getValueLabel([
                    minValue,
                    minValue
                ]).length, getValueLabel([
                    minValue,
                    maxValue
                ]).length, getValueLabel([
                    maxValue,
                    minValue
                ]).length, getValueLabel([
                    maxValue,
                    maxValue
                ]).length);
                break;
            default:
                throw new Error('Only sliders with 1 or 2 handles are supported!');
        }
    } else {
        maxLabelLength = Math.max([
            ...formatter.format(minValue)
        ].length, [
            ...formatter.format(maxValue)
        ].length);
        switch(state.values.length){
            case 1:
                displayValue = state.getThumbValueLabel(0);
                break;
            case 2:
                // This should really use the NumberFormat#formatRange proposal...
                // https://github.com/tc39/ecma402/issues/393
                // https://github.com/tc39/proposal-intl-numberformat-v3#formatrange-ecma-402-393
                displayValue = `${state.getThumbValueLabel(0)} \u{2013} ${state.getThumbValueLabel(1)}`;
                maxLabelLength = 3 + 2 * Math.max(maxLabelLength, [
                    ...formatter.format(minValue)
                ].length, [
                    ...formatter.format(maxValue)
                ].length);
                break;
            default:
                throw new Error('Only sliders with 1 or 2 handles are supported!');
        }
    }
    let labelNode = /*#__PURE__*/ (0, ($parcel$interopDefault($2j89m$react))).createElement("label", {
        className: (0, $2j89m$reactspectrumutils.classNames)((0, ($parcel$interopDefault($57893a49ef34c169$exports))), 'spectrum-Slider-label'),
        ...labelProps
    }, props.label);
    let valueNode = /*#__PURE__*/ (0, ($parcel$interopDefault($2j89m$react))).createElement("output", {
        ...outputProps,
        className: (0, $2j89m$reactspectrumutils.classNames)((0, ($parcel$interopDefault($57893a49ef34c169$exports))), 'spectrum-Slider-value'),
        style: maxLabelLength != null ? {
            width: `${maxLabelLength}ch`,
            minWidth: `${maxLabelLength}ch`
        } : undefined
    }, displayValue);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($2j89m$react))).createElement("div", {
        ref: domRef,
        className: (0, $2j89m$reactspectrumutils.classNames)((0, ($parcel$interopDefault($57893a49ef34c169$exports))), 'spectrum-Slider', {
            'spectrum-Slider--positionTop': labelPosition === 'top',
            'spectrum-Slider--positionSide': labelPosition === 'side',
            'is-disabled': isDisabled
        }, classes, styleProps.className),
        style: {
            ...style,
            ...styleProps.style
        },
        ...groupProps
    }, props.label && /*#__PURE__*/ (0, ($parcel$interopDefault($2j89m$react))).createElement("div", {
        className: (0, $2j89m$reactspectrumutils.classNames)((0, ($parcel$interopDefault($57893a49ef34c169$exports))), 'spectrum-Slider-labelContainer'),
        role: "presentation"
    }, props.label && labelNode, props.contextualHelp && /*#__PURE__*/ (0, ($parcel$interopDefault($2j89m$react))).createElement((0, $2j89m$reactspectrumutils.SlotProvider), {
        slots: {
            actionButton: {
                UNSAFE_className: (0, $2j89m$reactspectrumutils.classNames)((0, ($parcel$interopDefault($57893a49ef34c169$exports))), 'spectrum-Slider-contextualHelp')
            }
        }
    }, props.contextualHelp), labelPosition === 'top' && showValueLabel && valueNode), /*#__PURE__*/ (0, ($parcel$interopDefault($2j89m$react))).createElement("div", {
        className: (0, $2j89m$reactspectrumutils.classNames)((0, ($parcel$interopDefault($57893a49ef34c169$exports))), 'spectrum-Slider-controls'),
        ref: trackRef,
        ...trackProps,
        role: "presentation"
    }, children({
        trackRef: trackRef,
        inputRef: inputRef,
        state: state
    })), labelPosition === 'side' && /*#__PURE__*/ (0, ($parcel$interopDefault($2j89m$react))).createElement("div", {
        className: (0, $2j89m$reactspectrumutils.classNames)((0, ($parcel$interopDefault($57893a49ef34c169$exports))), 'spectrum-Slider-valueLabelContainer'),
        role: "presentation"
    }, showValueLabel && valueNode));
});


//# sourceMappingURL=SliderBase.main.js.map
