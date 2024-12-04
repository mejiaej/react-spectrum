require("./vars.ed1277c0.css");
var $ec6587ec6732a958$exports = require("./image_vars_css.main.js");
var $lyGvT$reactspectrumutils = require("@react-spectrum/utils");
var $lyGvT$reactariautils = require("@react-aria/utils");
var $lyGvT$react = require("react");
var $lyGvT$reactspectrumprovider = require("@react-spectrum/provider");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "Image", () => $bda2e7b47de3a920$export$3e431a229df88919);
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




const $bda2e7b47de3a920$export$3e431a229df88919 = /*#__PURE__*/ (0, ($parcel$interopDefault($lyGvT$react))).forwardRef(function Image(props, ref) {
    /* Slots should be able to pass an alt for default behavior, but in Images, the child may know better. */ let userProvidedAlt = props.alt;
    props = (0, $lyGvT$reactspectrumutils.useSlotProps)(props, 'image');
    props = (0, $lyGvT$reactspectrumprovider.useProviderProps)(props);
    let { objectFit: objectFit, src: src, alt: alt, ...otherProps } = props;
    let { styleProps: styleProps } = (0, $lyGvT$reactspectrumutils.useStyleProps)(otherProps);
    let domRef = (0, $lyGvT$reactspectrumutils.useDOMRef)(ref);
    if (alt == null) console.warn('The `alt` prop was not provided to an image. Add `alt` text for screen readers, or set `alt=""` prop to indicate that the image is decorative or redundant with displayed text and should not be announced by screen readers.');
    return /*#__PURE__*/ (0, ($parcel$interopDefault($lyGvT$react))).createElement("div", {
        ...(0, $lyGvT$reactariautils.filterDOMProps)(props),
        ...styleProps,
        className: (0, $lyGvT$reactspectrumutils.classNames)((0, ($parcel$interopDefault($ec6587ec6732a958$exports))), styleProps.className),
        style: {
            ...styleProps.style,
            overflow: 'hidden'
        },
        ref: domRef
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($lyGvT$react))).createElement("img", {
        src: src,
        alt: userProvidedAlt || alt,
        style: {
            objectFit: objectFit
        },
        className: (0, $lyGvT$reactspectrumutils.classNames)((0, ($parcel$interopDefault($ec6587ec6732a958$exports))), 'spectrum-Image-img'),
        onError: props === null || props === void 0 ? void 0 : props.onError,
        onLoad: props === null || props === void 0 ? void 0 : props.onLoad
    }));
});


//# sourceMappingURL=Image.main.js.map
