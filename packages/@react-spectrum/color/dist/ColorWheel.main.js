var $2b9adc23f6c7cae1$exports = require("./ColorThumb.main.js");
require("./vars.27a9fa37.css");
var $8fc6b1a2f4e7f682$exports = require("./colorwheel_vars_css.main.js");
var $gEgjt$reactspectrumutils = require("@react-spectrum/utils");
var $gEgjt$reactariacomponents = require("react-aria-components");
var $gEgjt$react = require("react");
var $gEgjt$reactariacolor = require("@react-aria/color");
var $gEgjt$reactstatelycolor = require("@react-stately/color");
var $gEgjt$reactariafocus = require("@react-aria/focus");
var $gEgjt$reactspectrumprovider = require("@react-spectrum/provider");
var $gEgjt$reactariautils = require("@react-aria/utils");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "ColorWheel", () => $63a2864687444ae1$export$f80663f808113381);
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









const $63a2864687444ae1$var$WHEEL_THICKNESS = 24;
const $63a2864687444ae1$export$f80663f808113381 = /*#__PURE__*/ (0, ($parcel$interopDefault($gEgjt$react))).forwardRef(function ColorWheel(props, ref) {
    props = (0, $gEgjt$reactspectrumprovider.useProviderProps)(props);
    let inputRef = (0, $gEgjt$react.useRef)(null);
    let containerRef = (0, $gEgjt$reactspectrumutils.useFocusableRef)(ref, inputRef);
    [props, containerRef] = (0, $gEgjt$reactariacomponents.useContextProps)(props, containerRef, (0, $gEgjt$reactariacomponents.ColorWheelContext));
    let { isDisabled: isDisabled } = props;
    let size = props.size && (0, $gEgjt$reactspectrumutils.dimensionValue)(props.size);
    let { styleProps: styleProps } = (0, $gEgjt$reactspectrumutils.useStyleProps)(props);
    let [wheelRadius, setWheelRadius] = (0, $gEgjt$react.useState)(0);
    let [wheelThickness, setWheelThickness] = (0, $gEgjt$react.useState)($63a2864687444ae1$var$WHEEL_THICKNESS);
    let resizeHandler = (0, $gEgjt$react.useCallback)(()=>{
        if (containerRef.current) {
            setWheelRadius(containerRef.current.offsetWidth / 2);
            let thickness = window.getComputedStyle(containerRef.current).getPropertyValue('--spectrum-colorwheel-track-thickness');
            if (thickness) setWheelThickness(parseInt(thickness, 10));
        }
    }, [
        containerRef,
        setWheelRadius,
        setWheelThickness
    ]);
    (0, $gEgjt$react.useEffect)(()=>{
        // the size observer's fallback to the window resize event doesn't fire on mount
        if (wheelRadius === 0) resizeHandler();
    }, [
        wheelRadius,
        resizeHandler
    ]);
    (0, $gEgjt$reactariautils.useResizeObserver)({
        ref: containerRef,
        onResize: resizeHandler
    });
    let state = (0, $gEgjt$reactstatelycolor.useColorWheelState)(props);
    let { trackProps: trackProps, inputProps: inputProps, thumbProps: thumbProps } = (0, $gEgjt$reactariacolor.useColorWheel)({
        ...props,
        innerRadius: wheelRadius - wheelThickness,
        outerRadius: wheelRadius
    }, state, inputRef);
    let { focusProps: focusProps, isFocusVisible: isFocusVisible } = (0, $gEgjt$reactariafocus.useFocusRing)();
    return /*#__PURE__*/ (0, ($parcel$interopDefault($gEgjt$react))).createElement("div", {
        className: (0, $gEgjt$reactspectrumutils.classNames)((0, ($parcel$interopDefault($8fc6b1a2f4e7f682$exports))), 'spectrum-ColorWheel', {
            'is-disabled': isDisabled
        }, styleProps.className),
        ref: containerRef,
        style: {
            ...styleProps.style,
            // Workaround around https://github.com/adobe/spectrum-css/issues/1032
            'width': size,
            'height': size
        }
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($gEgjt$react))).createElement("div", {
        ...trackProps,
        className: (0, $gEgjt$reactspectrumutils.classNames)((0, ($parcel$interopDefault($8fc6b1a2f4e7f682$exports))), 'spectrum-ColorWheel-gradient')
    }), /*#__PURE__*/ (0, ($parcel$interopDefault($gEgjt$react))).createElement((0, $2b9adc23f6c7cae1$exports.ColorThumb), {
        value: state.getDisplayColor(),
        isFocused: isFocusVisible,
        isDisabled: isDisabled,
        isDragging: state.isDragging,
        containerRef: containerRef,
        className: (0, $gEgjt$reactspectrumutils.classNames)((0, ($parcel$interopDefault($8fc6b1a2f4e7f682$exports))), 'spectrum-ColorWheel-handle'),
        ...thumbProps
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($gEgjt$react))).createElement("input", {
        ...focusProps,
        className: (0, $gEgjt$reactspectrumutils.classNames)((0, ($parcel$interopDefault($8fc6b1a2f4e7f682$exports))), 'spectrum-ColorWheel-slider'),
        ...inputProps,
        ref: inputRef
    })));
});


//# sourceMappingURL=ColorWheel.main.js.map
