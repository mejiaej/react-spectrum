require("./vars.98146794.css");
var $afc5a4514aca2340$exports = require("./button_vars_css.main.js");
var $3cv9y$reactspectrumutils = require("@react-spectrum/utils");
var $3cv9y$spectrumiconsuiCrossSmall = require("@spectrum-icons/ui/CrossSmall");
var $3cv9y$reactariafocus = require("@react-aria/focus");
var $3cv9y$reactariautils = require("@react-aria/utils");
var $3cv9y$react = require("react");
var $3cv9y$reactariabutton = require("@react-aria/button");
var $3cv9y$reactariainteractions = require("@react-aria/interactions");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "ClearButton", () => $9c84a434f1c9da63$export$13ec83e50bf04290);
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







const $9c84a434f1c9da63$export$13ec83e50bf04290 = /*#__PURE__*/ (0, ($parcel$interopDefault($3cv9y$react))).forwardRef(function ClearButton(props, ref) {
    let { children: children = /*#__PURE__*/ (0, ($parcel$interopDefault($3cv9y$react))).createElement((0, ($parcel$interopDefault($3cv9y$spectrumiconsuiCrossSmall))), {
        UNSAFE_className: (0, ($parcel$interopDefault($afc5a4514aca2340$exports)))['spectrum-Icon']
    }), focusClassName: focusClassName, variant: variant, autoFocus: autoFocus, isDisabled: isDisabled, preventFocus: preventFocus, elementType: elementType = preventFocus ? 'div' : 'button', ...otherProps } = props;
    let domRef = (0, $3cv9y$reactspectrumutils.useFocusableRef)(ref);
    let { buttonProps: buttonProps, isPressed: isPressed } = (0, $3cv9y$reactariabutton.useButton)({
        ...props,
        elementType: elementType
    }, domRef);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $3cv9y$reactariainteractions.useHover)({
        isDisabled: isDisabled
    });
    let { styleProps: styleProps } = (0, $3cv9y$reactspectrumutils.useStyleProps)(otherProps);
    // For cases like the clear button in a search field, remove the tabIndex so
    // iOS 14 with VoiceOver doesn't focus the button and hide the keyboard when
    // moving the cursor over the clear button.
    if (preventFocus) delete buttonProps.tabIndex;
    let ElementType = elementType;
    return /*#__PURE__*/ (0, ($parcel$interopDefault($3cv9y$react))).createElement((0, $3cv9y$reactariafocus.FocusRing), {
        focusRingClass: (0, $3cv9y$reactspectrumutils.classNames)((0, ($parcel$interopDefault($afc5a4514aca2340$exports))), 'focus-ring', focusClassName),
        autoFocus: autoFocus
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($3cv9y$react))).createElement(ElementType, {
        ...styleProps,
        ...(0, $3cv9y$reactariautils.mergeProps)(buttonProps, hoverProps),
        ref: domRef,
        className: (0, $3cv9y$reactspectrumutils.classNames)((0, ($parcel$interopDefault($afc5a4514aca2340$exports))), 'spectrum-ClearButton', {
            [`spectrum-ClearButton--${variant}`]: variant,
            'is-disabled': isDisabled,
            'is-active': isPressed,
            'is-hovered': isHovered
        }, styleProps.className)
    }, children));
});


//# sourceMappingURL=ClearButton.main.js.map
