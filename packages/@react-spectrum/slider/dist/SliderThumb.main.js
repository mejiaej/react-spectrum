require("./vars.fb2ba660.css");
var $57893a49ef34c169$exports = require("./slider_vars_css.main.js");
var $75NyJ$reactspectrumutils = require("@react-spectrum/utils");
var $75NyJ$reactariafocus = require("@react-aria/focus");
var $75NyJ$reactariautils = require("@react-aria/utils");
var $75NyJ$react = require("react");
var $75NyJ$reactariainteractions = require("@react-aria/interactions");
var $75NyJ$reactariaslider = require("@react-aria/slider");
var $75NyJ$reactariavisuallyhidden = require("@react-aria/visually-hidden");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "SliderThumb", () => $77acc7fb8bfd13d6$export$2c1b491743890dec);
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







function $77acc7fb8bfd13d6$export$2c1b491743890dec(props) {
    let { inputRef: inputRef, state: state } = props;
    let backupRef = (0, $75NyJ$react.useRef)(null);
    inputRef = inputRef || backupRef;
    let { thumbProps: thumbProps, inputProps: inputProps, isDragging: isDragging, isFocused: isFocused } = (0, $75NyJ$reactariaslider.useSliderThumb)({
        ...props,
        inputRef: inputRef
    }, state);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $75NyJ$reactariainteractions.useHover)({});
    return /*#__PURE__*/ (0, ($parcel$interopDefault($75NyJ$react))).createElement((0, $75NyJ$reactariafocus.FocusRing), {
        within: true,
        focusRingClass: (0, $75NyJ$reactspectrumutils.classNames)((0, ($parcel$interopDefault($57893a49ef34c169$exports))), 'is-focused')
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($75NyJ$react))).createElement("div", {
        className: (0, $75NyJ$reactspectrumutils.classNames)((0, ($parcel$interopDefault($57893a49ef34c169$exports))), 'spectrum-Slider-handle', {
            'is-hovered': isHovered,
            'is-dragged': isDragging,
            'is-tophandle': isFocused
        }),
        ...(0, $75NyJ$reactariautils.mergeProps)(thumbProps, hoverProps),
        role: "presentation"
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($75NyJ$react))).createElement((0, $75NyJ$reactariavisuallyhidden.VisuallyHidden), null, /*#__PURE__*/ (0, ($parcel$interopDefault($75NyJ$react))).createElement("input", {
        className: (0, $75NyJ$reactspectrumutils.classNames)((0, ($parcel$interopDefault($57893a49ef34c169$exports))), 'spectrum-Slider-input'),
        ref: inputRef,
        ...inputProps
    }))));
}


//# sourceMappingURL=SliderThumb.main.js.map
