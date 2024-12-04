require("./vars.98146794.css");
var $afc5a4514aca2340$exports = require("./button_vars_css.main.js");
var $58xyJ$reactspectrumutils = require("@react-spectrum/utils");
var $58xyJ$reactariafocus = require("@react-aria/focus");
var $58xyJ$reactariautils = require("@react-aria/utils");
var $58xyJ$react = require("react");
var $58xyJ$reactspectrumtext = require("@react-spectrum/text");
var $58xyJ$reactariainteractions = require("@react-aria/interactions");
var $58xyJ$reactspectrumprovider = require("@react-spectrum/provider");
var $58xyJ$reactariabutton = require("@react-aria/button");
var $58xyJ$reactstatelytoggle = require("@react-stately/toggle");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "ToggleButton", () => $b5c927da7d8f1be6$export$d2b052e7b4be1756);
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









const $b5c927da7d8f1be6$export$d2b052e7b4be1756 = /*#__PURE__*/ (0, ($parcel$interopDefault($58xyJ$react))).forwardRef(function ToggleButton(props, ref) {
    props = (0, $58xyJ$reactspectrumprovider.useProviderProps)(props);
    let { isQuiet: isQuiet, isDisabled: isDisabled, isEmphasized: isEmphasized, staticColor: staticColor, children: children, autoFocus: autoFocus, ...otherProps } = props;
    let domRef = (0, $58xyJ$reactspectrumutils.useFocusableRef)(ref);
    let state = (0, $58xyJ$reactstatelytoggle.useToggleState)(props);
    let { buttonProps: buttonProps, isPressed: isPressed } = (0, $58xyJ$reactariabutton.useToggleButton)(props, state, domRef);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $58xyJ$reactariainteractions.useHover)({
        isDisabled: isDisabled
    });
    let { styleProps: styleProps } = (0, $58xyJ$reactspectrumutils.useStyleProps)(otherProps);
    let isTextOnly = (0, ($parcel$interopDefault($58xyJ$react))).Children.toArray(props.children).every((c)=>!/*#__PURE__*/ (0, ($parcel$interopDefault($58xyJ$react))).isValidElement(c));
    return /*#__PURE__*/ (0, ($parcel$interopDefault($58xyJ$react))).createElement((0, $58xyJ$reactariafocus.FocusRing), {
        focusRingClass: (0, $58xyJ$reactspectrumutils.classNames)((0, ($parcel$interopDefault($afc5a4514aca2340$exports))), 'focus-ring'),
        autoFocus: autoFocus
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($58xyJ$react))).createElement("button", {
        ...styleProps,
        ...(0, $58xyJ$reactariautils.mergeProps)(buttonProps, hoverProps),
        ref: domRef,
        className: (0, $58xyJ$reactspectrumutils.classNames)((0, ($parcel$interopDefault($afc5a4514aca2340$exports))), 'spectrum-ActionButton', {
            'spectrum-ActionButton--quiet': isQuiet,
            'spectrum-ActionButton--emphasized': isEmphasized,
            'spectrum-ActionButton--staticColor': !!staticColor,
            'spectrum-ActionButton--staticWhite': staticColor === 'white',
            'spectrum-ActionButton--staticBlack': staticColor === 'black',
            'is-active': isPressed,
            'is-disabled': isDisabled,
            'is-hovered': isHovered,
            'is-selected': state.isSelected
        }, styleProps.className)
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($58xyJ$react))).createElement((0, $58xyJ$reactspectrumutils.SlotProvider), {
        slots: {
            icon: {
                size: 'S',
                UNSAFE_className: (0, $58xyJ$reactspectrumutils.classNames)((0, ($parcel$interopDefault($afc5a4514aca2340$exports))), 'spectrum-Icon')
            },
            text: {
                UNSAFE_className: (0, $58xyJ$reactspectrumutils.classNames)((0, ($parcel$interopDefault($afc5a4514aca2340$exports))), 'spectrum-ActionButton-label')
            }
        }
    }, typeof children === 'string' || isTextOnly ? /*#__PURE__*/ (0, ($parcel$interopDefault($58xyJ$react))).createElement((0, $58xyJ$reactspectrumtext.Text), null, children) : children)));
});


//# sourceMappingURL=ToggleButton.main.js.map
