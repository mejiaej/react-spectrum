require("./vars.98146794.css");
var $afc5a4514aca2340$exports = require("./button_vars_css.main.js");
var $9HF4v$reactspectrumutils = require("@react-spectrum/utils");
var $9HF4v$spectrumiconsuiCornerTriangle = require("@spectrum-icons/ui/CornerTriangle");
var $9HF4v$reactariafocus = require("@react-aria/focus");
var $9HF4v$reactariautils = require("@react-aria/utils");
var $9HF4v$react = require("react");
var $9HF4v$reactspectrumtext = require("@react-spectrum/text");
var $9HF4v$reactariabutton = require("@react-aria/button");
var $9HF4v$reactariainteractions = require("@react-aria/interactions");
var $9HF4v$reactspectrumprovider = require("@react-spectrum/provider");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "ActionButton", () => $65dbde0e8e7aba71$export$cfc7921d29ef7b80);
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









const $65dbde0e8e7aba71$export$cfc7921d29ef7b80 = /*#__PURE__*/ (0, ($parcel$interopDefault($9HF4v$react))).forwardRef(function ActionButton(props, ref) {
    props = (0, $9HF4v$reactspectrumprovider.useProviderProps)(props);
    props = (0, $9HF4v$reactspectrumutils.useSlotProps)(props, 'actionButton');
    let textProps = (0, $9HF4v$reactspectrumutils.useSlotProps)({
        UNSAFE_className: (0, $9HF4v$reactspectrumutils.classNames)((0, ($parcel$interopDefault($afc5a4514aca2340$exports))), 'spectrum-ActionButton-label')
    }, 'text');
    let { isQuiet: isQuiet, isDisabled: isDisabled, staticColor: staticColor, children: children, autoFocus: autoFocus, holdAffordance: // @ts-ignore (private)
    holdAffordance, hideButtonText: // @ts-ignore (private)
    hideButtonText, ...otherProps } = props;
    let domRef = (0, $9HF4v$reactspectrumutils.useFocusableRef)(ref);
    let { buttonProps: buttonProps, isPressed: isPressed } = (0, $9HF4v$reactariabutton.useButton)(props, domRef);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $9HF4v$reactariainteractions.useHover)({
        isDisabled: isDisabled
    });
    let { styleProps: styleProps } = (0, $9HF4v$reactspectrumutils.useStyleProps)(otherProps);
    let isTextOnly = (0, ($parcel$interopDefault($9HF4v$react))).Children.toArray(props.children).every((c)=>!/*#__PURE__*/ (0, ($parcel$interopDefault($9HF4v$react))).isValidElement(c));
    return /*#__PURE__*/ (0, ($parcel$interopDefault($9HF4v$react))).createElement((0, $9HF4v$reactariafocus.FocusRing), {
        focusRingClass: (0, $9HF4v$reactspectrumutils.classNames)((0, ($parcel$interopDefault($afc5a4514aca2340$exports))), 'focus-ring'),
        autoFocus: autoFocus
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($9HF4v$react))).createElement("button", {
        ...styleProps,
        ...(0, $9HF4v$reactariautils.mergeProps)(buttonProps, hoverProps),
        ref: domRef,
        className: (0, $9HF4v$reactspectrumutils.classNames)((0, ($parcel$interopDefault($afc5a4514aca2340$exports))), 'spectrum-ActionButton', {
            'spectrum-ActionButton--quiet': isQuiet,
            'spectrum-ActionButton--staticColor': !!staticColor,
            'spectrum-ActionButton--staticWhite': staticColor === 'white',
            'spectrum-ActionButton--staticBlack': staticColor === 'black',
            'is-active': isPressed,
            'is-disabled': isDisabled,
            'is-hovered': isHovered
        }, styleProps.className)
    }, holdAffordance && /*#__PURE__*/ (0, ($parcel$interopDefault($9HF4v$react))).createElement((0, ($parcel$interopDefault($9HF4v$spectrumiconsuiCornerTriangle))), {
        UNSAFE_className: (0, $9HF4v$reactspectrumutils.classNames)((0, ($parcel$interopDefault($afc5a4514aca2340$exports))), 'spectrum-ActionButton-hold')
    }), /*#__PURE__*/ (0, ($parcel$interopDefault($9HF4v$react))).createElement((0, $9HF4v$reactspectrumutils.ClearSlots), null, /*#__PURE__*/ (0, ($parcel$interopDefault($9HF4v$react))).createElement((0, $9HF4v$reactspectrumutils.SlotProvider), {
        slots: {
            icon: {
                size: 'S',
                UNSAFE_className: (0, $9HF4v$reactspectrumutils.classNames)((0, ($parcel$interopDefault($afc5a4514aca2340$exports))), 'spectrum-Icon', {
                    'spectrum-ActionGroup-itemIcon': hideButtonText
                })
            },
            text: {
                ...textProps
            }
        }
    }, typeof children === 'string' || isTextOnly ? /*#__PURE__*/ (0, ($parcel$interopDefault($9HF4v$react))).createElement((0, $9HF4v$reactspectrumtext.Text), null, children) : children))));
});


//# sourceMappingURL=ActionButton.main.js.map
