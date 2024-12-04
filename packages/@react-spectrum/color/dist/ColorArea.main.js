var $2b9adc23f6c7cae1$exports = require("./ColorThumb.main.js");
require("./vars.053845e3.css");
var $d4b4e0a63f9ca8c1$exports = require("./colorarea_vars_css.main.js");
var $6Gwd1$reactspectrumutils = require("@react-spectrum/utils");
var $6Gwd1$reactariacomponents = require("react-aria-components");
var $6Gwd1$reactariautils = require("@react-aria/utils");
var $6Gwd1$react = require("react");
var $6Gwd1$reactariacolor = require("@react-aria/color");
var $6Gwd1$reactstatelycolor = require("@react-stately/color");
var $6Gwd1$reactariafocus = require("@react-aria/focus");
var $6Gwd1$reactspectrumprovider = require("@react-spectrum/provider");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "ColorArea", () => $5f016e950c2dc3a6$export$b2103f68a961418e);
/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 









const $5f016e950c2dc3a6$export$b2103f68a961418e = /*#__PURE__*/ (0, ($parcel$interopDefault($6Gwd1$react))).forwardRef(function ColorArea(props, ref) {
    props = (0, $6Gwd1$reactspectrumprovider.useProviderProps)(props);
    let inputXRef = (0, $6Gwd1$react.useRef)(null);
    let inputYRef = (0, $6Gwd1$react.useRef)(null);
    let containerRef = (0, $6Gwd1$reactspectrumutils.useFocusableRef)(ref, inputXRef);
    [props, containerRef] = (0, $6Gwd1$reactariacomponents.useContextProps)(props, containerRef, (0, $6Gwd1$reactariacomponents.ColorAreaContext));
    let { isDisabled: isDisabled } = props;
    let size = props.size && (0, $6Gwd1$reactspectrumutils.dimensionValue)(props.size);
    let { styleProps: styleProps } = (0, $6Gwd1$reactspectrumutils.useStyleProps)(props);
    let state = (0, $6Gwd1$reactstatelycolor.useColorAreaState)(props);
    let { colorAreaProps: colorAreaProps, xInputProps: xInputProps, yInputProps: yInputProps, thumbProps: thumbProps } = (0, $6Gwd1$reactariacolor.useColorArea)({
        ...props,
        inputXRef: inputXRef,
        inputYRef: inputYRef,
        containerRef: containerRef
    }, state);
    let { focusProps: focusProps, isFocusVisible: isFocusVisible } = (0, $6Gwd1$reactariafocus.useFocusRing)();
    return /*#__PURE__*/ (0, ($parcel$interopDefault($6Gwd1$react))).createElement("div", {
        ...colorAreaProps,
        className: (0, $6Gwd1$reactspectrumutils.classNames)((0, ($parcel$interopDefault($d4b4e0a63f9ca8c1$exports))), 'spectrum-ColorArea', {
            'is-disabled': isDisabled
        }, styleProps.className),
        ref: containerRef,
        style: {
            ...isDisabled ? {} : colorAreaProps.style,
            ...styleProps.style,
            // Workaround around https://github.com/adobe/spectrum-css/issues/1032
            width: size,
            height: size
        }
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($6Gwd1$react))).createElement((0, $2b9adc23f6c7cae1$exports.ColorThumb), {
        value: state.getDisplayColor(),
        isFocused: isFocusVisible,
        isDisabled: isDisabled,
        isDragging: state.isDragging,
        containerRef: containerRef,
        className: (0, $6Gwd1$reactspectrumutils.classNames)((0, ($parcel$interopDefault($d4b4e0a63f9ca8c1$exports))), 'spectrum-ColorArea-handle'),
        ...thumbProps
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($6Gwd1$react))).createElement("div", {
        role: "presentation"
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($6Gwd1$react))).createElement("input", {
        className: (0, $6Gwd1$reactspectrumutils.classNames)((0, ($parcel$interopDefault($d4b4e0a63f9ca8c1$exports))), 'spectrum-ColorArea-slider'),
        ...(0, $6Gwd1$reactariautils.mergeProps)(xInputProps, focusProps),
        ref: inputXRef
    }), /*#__PURE__*/ (0, ($parcel$interopDefault($6Gwd1$react))).createElement("input", {
        className: (0, $6Gwd1$reactspectrumutils.classNames)((0, ($parcel$interopDefault($d4b4e0a63f9ca8c1$exports))), 'spectrum-ColorArea-slider'),
        ...(0, $6Gwd1$reactariautils.mergeProps)(yInputProps, focusProps),
        ref: inputYRef
    }))));
});


//# sourceMappingURL=ColorArea.main.js.map
