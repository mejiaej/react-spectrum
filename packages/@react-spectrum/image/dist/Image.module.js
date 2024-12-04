import "./vars.ed1277c0.css";
import $6cGum$image_vars_cssmodulejs from "./image_vars_css.module.js";
import {useSlotProps as $6cGum$useSlotProps, useStyleProps as $6cGum$useStyleProps, useDOMRef as $6cGum$useDOMRef, classNames as $6cGum$classNames} from "@react-spectrum/utils";
import {filterDOMProps as $6cGum$filterDOMProps} from "@react-aria/utils";
import $6cGum$react from "react";
import {useProviderProps as $6cGum$useProviderProps} from "@react-spectrum/provider";


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




const $77e0ac4d4aa3e5ef$export$3e431a229df88919 = /*#__PURE__*/ (0, $6cGum$react).forwardRef(function Image(props, ref) {
    /* Slots should be able to pass an alt for default behavior, but in Images, the child may know better. */ let userProvidedAlt = props.alt;
    props = (0, $6cGum$useSlotProps)(props, 'image');
    props = (0, $6cGum$useProviderProps)(props);
    let { objectFit: objectFit, src: src, alt: alt, ...otherProps } = props;
    let { styleProps: styleProps } = (0, $6cGum$useStyleProps)(otherProps);
    let domRef = (0, $6cGum$useDOMRef)(ref);
    if (alt == null) console.warn('The `alt` prop was not provided to an image. Add `alt` text for screen readers, or set `alt=""` prop to indicate that the image is decorative or redundant with displayed text and should not be announced by screen readers.');
    return /*#__PURE__*/ (0, $6cGum$react).createElement("div", {
        ...(0, $6cGum$filterDOMProps)(props),
        ...styleProps,
        className: (0, $6cGum$classNames)((0, ($parcel$interopDefault($6cGum$image_vars_cssmodulejs))), styleProps.className),
        style: {
            ...styleProps.style,
            overflow: 'hidden'
        },
        ref: domRef
    }, /*#__PURE__*/ (0, $6cGum$react).createElement("img", {
        src: src,
        alt: userProvidedAlt || alt,
        style: {
            objectFit: objectFit
        },
        className: (0, $6cGum$classNames)((0, ($parcel$interopDefault($6cGum$image_vars_cssmodulejs))), 'spectrum-Image-img'),
        onError: props === null || props === void 0 ? void 0 : props.onError,
        onLoad: props === null || props === void 0 ? void 0 : props.onLoad
    }));
});


export {$77e0ac4d4aa3e5ef$export$3e431a229df88919 as Image};
//# sourceMappingURL=Image.module.js.map
