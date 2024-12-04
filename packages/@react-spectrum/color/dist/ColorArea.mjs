import {ColorThumb as $3a90e89d07d7bbd5$export$a3cc47cee1c1ccc} from "./ColorThumb.mjs";
import "./vars.053845e3.css";
import $4eSry$colorarea_vars_cssmodulejs from "./colorarea_vars_css.mjs";
import {useFocusableRef as $4eSry$useFocusableRef, dimensionValue as $4eSry$dimensionValue, useStyleProps as $4eSry$useStyleProps, classNames as $4eSry$classNames} from "@react-spectrum/utils";
import {useContextProps as $4eSry$useContextProps, ColorAreaContext as $4eSry$ColorAreaContext} from "react-aria-components";
import {mergeProps as $4eSry$mergeProps} from "@react-aria/utils";
import $4eSry$react, {useRef as $4eSry$useRef} from "react";
import {useColorArea as $4eSry$useColorArea} from "@react-aria/color";
import {useColorAreaState as $4eSry$useColorAreaState} from "@react-stately/color";
import {useFocusRing as $4eSry$useFocusRing} from "@react-aria/focus";
import {useProviderProps as $4eSry$useProviderProps} from "@react-spectrum/provider";


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
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









const $40046aa1a7ccb226$export$b2103f68a961418e = /*#__PURE__*/ (0, $4eSry$react).forwardRef(function ColorArea(props, ref) {
    props = (0, $4eSry$useProviderProps)(props);
    let inputXRef = (0, $4eSry$useRef)(null);
    let inputYRef = (0, $4eSry$useRef)(null);
    let containerRef = (0, $4eSry$useFocusableRef)(ref, inputXRef);
    [props, containerRef] = (0, $4eSry$useContextProps)(props, containerRef, (0, $4eSry$ColorAreaContext));
    let { isDisabled: isDisabled } = props;
    let size = props.size && (0, $4eSry$dimensionValue)(props.size);
    let { styleProps: styleProps } = (0, $4eSry$useStyleProps)(props);
    let state = (0, $4eSry$useColorAreaState)(props);
    let { colorAreaProps: colorAreaProps, xInputProps: xInputProps, yInputProps: yInputProps, thumbProps: thumbProps } = (0, $4eSry$useColorArea)({
        ...props,
        inputXRef: inputXRef,
        inputYRef: inputYRef,
        containerRef: containerRef
    }, state);
    let { focusProps: focusProps, isFocusVisible: isFocusVisible } = (0, $4eSry$useFocusRing)();
    return /*#__PURE__*/ (0, $4eSry$react).createElement("div", {
        ...colorAreaProps,
        className: (0, $4eSry$classNames)((0, ($parcel$interopDefault($4eSry$colorarea_vars_cssmodulejs))), 'spectrum-ColorArea', {
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
    }, /*#__PURE__*/ (0, $4eSry$react).createElement((0, $3a90e89d07d7bbd5$export$a3cc47cee1c1ccc), {
        value: state.getDisplayColor(),
        isFocused: isFocusVisible,
        isDisabled: isDisabled,
        isDragging: state.isDragging,
        containerRef: containerRef,
        className: (0, $4eSry$classNames)((0, ($parcel$interopDefault($4eSry$colorarea_vars_cssmodulejs))), 'spectrum-ColorArea-handle'),
        ...thumbProps
    }, /*#__PURE__*/ (0, $4eSry$react).createElement("div", {
        role: "presentation"
    }, /*#__PURE__*/ (0, $4eSry$react).createElement("input", {
        className: (0, $4eSry$classNames)((0, ($parcel$interopDefault($4eSry$colorarea_vars_cssmodulejs))), 'spectrum-ColorArea-slider'),
        ...(0, $4eSry$mergeProps)(xInputProps, focusProps),
        ref: inputXRef
    }), /*#__PURE__*/ (0, $4eSry$react).createElement("input", {
        className: (0, $4eSry$classNames)((0, ($parcel$interopDefault($4eSry$colorarea_vars_cssmodulejs))), 'spectrum-ColorArea-slider'),
        ...(0, $4eSry$mergeProps)(yInputProps, focusProps),
        ref: inputYRef
    }))));
});


export {$40046aa1a7ccb226$export$b2103f68a961418e as ColorArea};
//# sourceMappingURL=ColorArea.module.js.map
