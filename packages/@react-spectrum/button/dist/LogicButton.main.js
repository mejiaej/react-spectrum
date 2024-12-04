require("./vars.98146794.css");
var $afc5a4514aca2340$exports = require("./button_vars_css.main.js");
var $adWKT$reactspectrumutils = require("@react-spectrum/utils");
var $adWKT$reactariafocus = require("@react-aria/focus");
var $adWKT$reactariautils = require("@react-aria/utils");
var $adWKT$react = require("react");
var $adWKT$reactariabutton = require("@react-aria/button");
var $adWKT$reactariainteractions = require("@react-aria/interactions");
var $adWKT$reactspectrumprovider = require("@react-spectrum/provider");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "LogicButton", () => $3bd294eda342b0c4$export$9b0b80fed00ba8b1);
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







const $3bd294eda342b0c4$export$9b0b80fed00ba8b1 = /*#__PURE__*/ (0, ($parcel$interopDefault($adWKT$react))).forwardRef(function LogicButton(props, ref) {
    props = (0, $adWKT$reactspectrumprovider.useProviderProps)(props);
    let { variant: variant, children: children, isDisabled: isDisabled, autoFocus: autoFocus, ...otherProps } = props;
    let domRef = (0, $adWKT$reactspectrumutils.useFocusableRef)(ref);
    let { buttonProps: buttonProps, isPressed: isPressed } = (0, $adWKT$reactariabutton.useButton)(props, domRef);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $adWKT$reactariainteractions.useHover)({
        isDisabled: isDisabled
    });
    let { styleProps: styleProps } = (0, $adWKT$reactspectrumutils.useStyleProps)(otherProps);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($adWKT$react))).createElement((0, $adWKT$reactariafocus.FocusRing), {
        focusRingClass: (0, $adWKT$reactspectrumutils.classNames)((0, ($parcel$interopDefault($afc5a4514aca2340$exports))), 'focus-ring'),
        autoFocus: autoFocus
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($adWKT$react))).createElement("button", {
        ...styleProps,
        ...(0, $adWKT$reactariautils.mergeProps)(buttonProps, hoverProps),
        ref: domRef,
        className: (0, $adWKT$reactspectrumutils.classNames)((0, ($parcel$interopDefault($afc5a4514aca2340$exports))), 'spectrum-LogicButton', {
            [`spectrum-LogicButton--${variant}`]: variant,
            'is-disabled': isDisabled,
            'is-active': isPressed,
            'is-hovered': isHovered
        }, styleProps.className)
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($adWKT$react))).createElement("span", {
        className: (0, $adWKT$reactspectrumutils.classNames)((0, ($parcel$interopDefault($afc5a4514aca2340$exports))), 'spectrum-Button-label')
    }, children)));
});


//# sourceMappingURL=LogicButton.main.js.map
