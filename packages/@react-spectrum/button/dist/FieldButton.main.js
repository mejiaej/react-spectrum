require("./vars.98146794.css");
var $afc5a4514aca2340$exports = require("./button_vars_css.main.js");
var $7mUYa$reactspectrumutils = require("@react-spectrum/utils");
var $7mUYa$reactariafocus = require("@react-aria/focus");
var $7mUYa$reactariautils = require("@react-aria/utils");
var $7mUYa$react = require("react");
var $7mUYa$reactariabutton = require("@react-aria/button");
var $7mUYa$reactariainteractions = require("@react-aria/interactions");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "FieldButton", () => $5931ec1ea1ec1b0d$export$47dc48f595b075da);
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






const $5931ec1ea1ec1b0d$export$47dc48f595b075da = /*#__PURE__*/ (0, ($parcel$interopDefault($7mUYa$react))).forwardRef(function FieldButton(props, ref) {
    props = (0, $7mUYa$reactspectrumutils.useSlotProps)(props, 'button');
    let { isQuiet: isQuiet, isDisabled: isDisabled, validationState: validationState, isInvalid: isInvalid, children: children, autoFocus: autoFocus, isActive: isActive, focusRingClass: focusRingClass, ...otherProps } = props;
    let domRef = (0, $7mUYa$reactspectrumutils.useFocusableRef)(ref);
    let { buttonProps: buttonProps, isPressed: isPressed } = (0, $7mUYa$reactariabutton.useButton)(props, domRef);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $7mUYa$reactariainteractions.useHover)({
        isDisabled: isDisabled
    });
    let { styleProps: styleProps } = (0, $7mUYa$reactspectrumutils.useStyleProps)(otherProps);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($7mUYa$react))).createElement((0, $7mUYa$reactariafocus.FocusRing), {
        focusRingClass: (0, $7mUYa$reactspectrumutils.classNames)((0, ($parcel$interopDefault($afc5a4514aca2340$exports))), 'focus-ring', focusRingClass),
        autoFocus: autoFocus
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($7mUYa$react))).createElement("button", {
        ...(0, $7mUYa$reactariautils.mergeProps)(buttonProps, hoverProps),
        ref: domRef,
        className: (0, $7mUYa$reactspectrumutils.classNames)((0, ($parcel$interopDefault($afc5a4514aca2340$exports))), 'spectrum-FieldButton', {
            'spectrum-FieldButton--quiet': isQuiet,
            'is-active': isActive || isPressed,
            'is-disabled': isDisabled,
            'spectrum-FieldButton--invalid': isInvalid || validationState === 'invalid',
            'is-hovered': isHovered
        }, styleProps.className)
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($7mUYa$react))).createElement((0, $7mUYa$reactspectrumutils.SlotProvider), {
        slots: {
            icon: {
                size: 'S',
                UNSAFE_className: (0, $7mUYa$reactspectrumutils.classNames)((0, ($parcel$interopDefault($afc5a4514aca2340$exports))), 'spectrum-Icon')
            }
        }
    }, children)));
});


//# sourceMappingURL=FieldButton.main.js.map
