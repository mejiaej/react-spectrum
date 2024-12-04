var $e937566cb5c6349c$exports = require("./Slider.cjs");
var $bfa4962d90c8af48$exports = require("./Form.cjs");
var $4526404114e78c80$exports = require("./intlStrings.cjs");
var $2061c83559b50a66$exports = require("./pressScale.cjs");
var $ac757a4c2bd72aee$exports = require("../icons/useSpectrumContextProps.cjs");
var $lbQ1p$reactjsxruntime = require("react/jsx-runtime");
var $lbQ1p$reactariacomponents = require("react-aria-components");
var $lbQ1p$react = require("react");
var $lbQ1p$reactspectrumutils = require("@react-spectrum/utils");
var $lbQ1p$reactariai18n = require("@react-aria/i18n");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "RangeSliderContext", () => $bf1a51351cead47b$export$9e0b46d8c4f4c18f);
$parcel$export(module.exports, "RangeSlider", () => $bf1a51351cead47b$export$826424dabc3dd705);
/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 









const $bf1a51351cead47b$export$9e0b46d8c4f4c18f = /*#__PURE__*/ (0, $lbQ1p$react.createContext)(null);
const $bf1a51351cead47b$export$826424dabc3dd705 = /*#__PURE__*/ (0, $lbQ1p$react.forwardRef)(function RangeSlider(props, ref) {
    let stringFormatter = (0, $lbQ1p$reactariai18n.useLocalizedStringFormatter)((0, ($parcel$interopDefault($4526404114e78c80$exports))), '@react-spectrum/s2');
    [props, ref] = (0, $ac757a4c2bd72aee$exports.useSpectrumContextProps)(props, ref, $bf1a51351cead47b$export$9e0b46d8c4f4c18f);
    let formContext = (0, $lbQ1p$react.useContext)((0, $bfa4962d90c8af48$exports.FormContext));
    props = (0, $bfa4962d90c8af48$exports.useFormProps)(props);
    let { labelPosition: labelPosition = 'top', size: size = 'M', isEmphasized: isEmphasized, trackStyle: trackStyle = 'thin', thumbStyle: thumbStyle = 'default' } = props;
    let lowerThumbRef = (0, $lbQ1p$react.useRef)(null);
    let upperThumbRef = (0, $lbQ1p$react.useRef)(null);
    let inputRef = (0, $lbQ1p$react.useRef)(null); // TODO: need to pass inputRef to SliderThumb when we release the next version of RAC 1.3.0
    let domRef = (0, $lbQ1p$reactspectrumutils.useFocusableRef)(ref, inputRef);
    let { direction: direction } = (0, $lbQ1p$reactariai18n.useLocale)();
    let cssDirection = direction === 'rtl' ? 'right' : 'left';
    return /*#__PURE__*/ (0, $lbQ1p$reactjsxruntime.jsx)((0, $e937566cb5c6349c$exports.SliderBase), {
        ...props,
        value: props.value ? [
            props.value.start,
            props.value.end
        ] : undefined,
        defaultValue: props.defaultValue ? [
            props.defaultValue.start,
            props.defaultValue.end
        ] : [
            props.minValue ?? 0,
            props.maxValue ?? 100
        ],
        onChange: (v)=>props.onChange?.({
                start: v[0],
                end: v[1]
            }),
        onChangeEnd: (v)=>props.onChangeEnd?.({
                start: v[0],
                end: v[1]
            }),
        sliderRef: domRef,
        children: /*#__PURE__*/ (0, $lbQ1p$reactjsxruntime.jsx)((0, $lbQ1p$reactariacomponents.SliderTrack), {
            className: (0, $e937566cb5c6349c$exports.track)({
                size: size,
                labelPosition: labelPosition,
                isInForm: !!formContext
            }),
            children: ({ state: state, isDisabled: isDisabled })=>/*#__PURE__*/ (0, $lbQ1p$reactjsxruntime.jsxs)((0, $lbQ1p$reactjsxruntime.Fragment), {
                    children: [
                        /*#__PURE__*/ (0, $lbQ1p$reactjsxruntime.jsx)("div", {
                            className: (0, $e937566cb5c6349c$exports.upperTrack)({
                                isDisabled: isDisabled,
                                trackStyle: trackStyle
                            })
                        }),
                        /*#__PURE__*/ (0, $lbQ1p$reactjsxruntime.jsx)("div", {
                            style: {
                                width: `${Math.abs(state.getThumbPercent(0) - state.getThumbPercent(1)) * 100}%`,
                                [cssDirection]: `${state.getThumbPercent(0) * 100}%`
                            },
                            className: (0, $e937566cb5c6349c$exports.filledTrack)({
                                isDisabled: isDisabled,
                                isEmphasized: isEmphasized,
                                trackStyle: trackStyle
                            })
                        }),
                        /*#__PURE__*/ (0, $lbQ1p$reactjsxruntime.jsx)((0, $lbQ1p$reactariacomponents.SliderThumb), {
                            className: (0, $e937566cb5c6349c$exports.thumbContainer),
                            index: 0,
                            name: props.startName,
                            "aria-label": stringFormatter.format('slider.minimum'),
                            ref: lowerThumbRef,
                            style: (renderProps)=>(0, $2061c83559b50a66$exports.pressScale)(lowerThumbRef, {
                                    transform: 'translate(-50%, -50%)',
                                    zIndex: state.getThumbPercent(0) === 1 ? 1 : undefined
                                })({
                                    ...renderProps,
                                    isPressed: renderProps.isDragging
                                }),
                            children: (renderProps)=>/*#__PURE__*/ (0, $lbQ1p$reactjsxruntime.jsx)("div", {
                                    className: (0, $e937566cb5c6349c$exports.thumbHitArea)({
                                        size: size
                                    }),
                                    children: /*#__PURE__*/ (0, $lbQ1p$reactjsxruntime.jsx)("div", {
                                        className: (0, $e937566cb5c6349c$exports.thumb)({
                                            ...renderProps,
                                            size: size,
                                            thumbStyle: thumbStyle
                                        })
                                    })
                                })
                        }),
                        /*#__PURE__*/ (0, $lbQ1p$reactjsxruntime.jsx)((0, $lbQ1p$reactariacomponents.SliderThumb), {
                            className: (0, $e937566cb5c6349c$exports.thumbContainer),
                            index: 1,
                            name: props.endName,
                            "aria-label": stringFormatter.format('slider.maximum'),
                            ref: upperThumbRef,
                            style: (renderProps)=>(0, $2061c83559b50a66$exports.pressScale)(upperThumbRef, {
                                    transform: 'translate(-50%, -50%)'
                                })({
                                    ...renderProps,
                                    isPressed: renderProps.isDragging
                                }),
                            children: (renderProps)=>/*#__PURE__*/ (0, $lbQ1p$reactjsxruntime.jsx)("div", {
                                    className: (0, $e937566cb5c6349c$exports.thumbHitArea)({
                                        size: size
                                    }),
                                    children: /*#__PURE__*/ (0, $lbQ1p$reactjsxruntime.jsx)("div", {
                                        className: (0, $e937566cb5c6349c$exports.thumb)({
                                            ...renderProps,
                                            size: size,
                                            thumbStyle: thumbStyle
                                        })
                                    })
                                })
                        })
                    ]
                })
        })
    });
});


//# sourceMappingURL=RangeSlider.cjs.map
