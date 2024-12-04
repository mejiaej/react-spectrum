require("./vars.f6adca10.css");
var $a8fbff4889c18df2$exports = require("./radio_vars_css.main.js");
var $f5a8721b9af05d97$exports = require("./context.main.js");
var $8lI9m$reactspectrumutils = require("@react-spectrum/utils");
var $8lI9m$reactariafocus = require("@react-aria/focus");
var $8lI9m$react = require("react");
var $8lI9m$reactariainteractions = require("@react-aria/interactions");
var $8lI9m$reactariaradio = require("@react-aria/radio");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "Radio", () => $e8d5518f9c1aca76$export$d7b12c4107be0d61);
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






const $e8d5518f9c1aca76$export$d7b12c4107be0d61 = /*#__PURE__*/ (0, $8lI9m$react.forwardRef)(function Radio(props, ref) {
    let { isDisabled: isDisabled, children: children, autoFocus: autoFocus, ...otherProps } = props;
    let { styleProps: styleProps } = (0, $8lI9m$reactspectrumutils.useStyleProps)(otherProps);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $8lI9m$reactariainteractions.useHover)({
        isDisabled: isDisabled
    });
    let inputRef = (0, $8lI9m$react.useRef)(null);
    let domRef = (0, $8lI9m$reactspectrumutils.useFocusableRef)(ref, inputRef);
    let radioGroupProps = (0, $f5a8721b9af05d97$exports.useRadioProvider)();
    let { isEmphasized: isEmphasized, state: state } = radioGroupProps;
    let { inputProps: inputProps } = (0, $8lI9m$reactariaradio.useRadio)({
        ...props,
        ...radioGroupProps,
        isDisabled: isDisabled
    }, state, inputRef);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($8lI9m$react))).createElement("label", {
        ...styleProps,
        ...hoverProps,
        ref: domRef,
        className: (0, $8lI9m$reactspectrumutils.classNames)((0, ($parcel$interopDefault($a8fbff4889c18df2$exports))), 'spectrum-Radio', {
            // Removing. Pending design feedback.
            // 'spectrum-Radio--labelBelow': labelPosition === 'bottom',
            'spectrum-Radio--quiet': !isEmphasized,
            'is-disabled': isDisabled,
            'is-invalid': state.isInvalid,
            'is-hovered': isHovered
        }, styleProps.className)
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($8lI9m$react))).createElement((0, $8lI9m$reactariafocus.FocusRing), {
        focusRingClass: (0, $8lI9m$reactspectrumutils.classNames)((0, ($parcel$interopDefault($a8fbff4889c18df2$exports))), 'focus-ring'),
        autoFocus: autoFocus
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($8lI9m$react))).createElement("input", {
        ...inputProps,
        ref: inputRef,
        className: (0, $8lI9m$reactspectrumutils.classNames)((0, ($parcel$interopDefault($a8fbff4889c18df2$exports))), 'spectrum-Radio-input')
    })), /*#__PURE__*/ (0, ($parcel$interopDefault($8lI9m$react))).createElement("span", {
        className: (0, $8lI9m$reactspectrumutils.classNames)((0, ($parcel$interopDefault($a8fbff4889c18df2$exports))), 'spectrum-Radio-button')
    }), children && /*#__PURE__*/ (0, ($parcel$interopDefault($8lI9m$react))).createElement("span", {
        className: (0, $8lI9m$reactspectrumutils.classNames)((0, ($parcel$interopDefault($a8fbff4889c18df2$exports))), 'spectrum-Radio-label')
    }, children));
});


//# sourceMappingURL=Radio.main.js.map
