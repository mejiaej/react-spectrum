require("./vars.8d25eb32.css");
var $3649bcbba015c4d7$exports = require("./stepper_vars_css.main.js");
var $3rHYV$spectrumiconsworkflowAdd = require("@spectrum-icons/workflow/Add");
var $3rHYV$spectrumiconsuiChevronDownSmall = require("@spectrum-icons/ui/ChevronDownSmall");
var $3rHYV$spectrumiconsuiChevronUpSmall = require("@spectrum-icons/ui/ChevronUpSmall");
var $3rHYV$reactspectrumutils = require("@react-spectrum/utils");
var $3rHYV$reactariafocus = require("@react-aria/focus");
var $3rHYV$reactariautils = require("@react-aria/utils");
var $3rHYV$react = require("react");
var $3rHYV$spectrumiconsworkflowRemove = require("@spectrum-icons/workflow/Remove");
var $3rHYV$reactariabutton = require("@react-aria/button");
var $3rHYV$reactariainteractions = require("@react-aria/interactions");
var $3rHYV$reactspectrumprovider = require("@react-spectrum/provider");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "StepButton", () => $2f3cded204daae76$export$b2f6b60c1d32d6aa);
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











const $2f3cded204daae76$export$b2f6b60c1d32d6aa = /*#__PURE__*/ (0, ($parcel$interopDefault($3rHYV$react))).forwardRef(function StepButton(props, ref) {
    props = (0, $3rHYV$reactspectrumprovider.useProviderProps)(props);
    let { scale: scale } = (0, $3rHYV$reactspectrumprovider.useProvider)();
    let { direction: direction, isDisabled: isDisabled, isQuiet: isQuiet } = props;
    let domRef = (0, $3rHYV$reactspectrumutils.useFocusableRef)(ref);
    /**
   * Must use div for now because Safari pointer event bugs on disabled form elements.
   * Link https://bugs.webkit.org/show_bug.cgi?id=219188.
   */ let { buttonProps: buttonProps, isPressed: isPressed } = (0, $3rHYV$reactariabutton.useButton)({
        ...props,
        elementType: 'div'
    }, domRef);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $3rHYV$reactariainteractions.useHover)(props);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($3rHYV$react))).createElement((0, $3rHYV$reactariafocus.FocusRing), {
        focusRingClass: (0, $3rHYV$reactspectrumutils.classNames)((0, ($parcel$interopDefault($3649bcbba015c4d7$exports))), 'focus-ring')
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($3rHYV$react))).createElement("div", {
        className: (0, $3rHYV$reactspectrumutils.classNames)((0, ($parcel$interopDefault($3649bcbba015c4d7$exports))), 'spectrum-Stepper-button', {
            'spectrum-Stepper-button--stepUp': direction === 'up',
            'spectrum-Stepper-button--stepDown': direction === 'down',
            'spectrum-Stepper-button--isQuiet': isQuiet,
            'is-hovered': isHovered,
            'is-active': isPressed,
            'is-disabled': isDisabled
        }),
        ...(0, $3rHYV$reactariautils.mergeProps)(hoverProps, buttonProps),
        ref: domRef
    }, direction === 'up' && scale === 'large' && /*#__PURE__*/ (0, ($parcel$interopDefault($3rHYV$react))).createElement((0, ($parcel$interopDefault($3rHYV$spectrumiconsworkflowAdd))), {
        UNSAFE_className: (0, $3rHYV$reactspectrumutils.classNames)((0, ($parcel$interopDefault($3649bcbba015c4d7$exports))), 'spectrum-Stepper-button-icon', 'spectrum-Stepper-stepUpIcon'),
        size: "S"
    }), direction === 'up' && scale === 'medium' && /*#__PURE__*/ (0, ($parcel$interopDefault($3rHYV$react))).createElement((0, ($parcel$interopDefault($3rHYV$spectrumiconsuiChevronUpSmall))), {
        UNSAFE_className: (0, $3rHYV$reactspectrumutils.classNames)((0, ($parcel$interopDefault($3649bcbba015c4d7$exports))), 'spectrum-Stepper-button-icon', 'spectrum-Stepper-stepUpIcon')
    }), direction === 'down' && scale === 'large' && /*#__PURE__*/ (0, ($parcel$interopDefault($3rHYV$react))).createElement((0, ($parcel$interopDefault($3rHYV$spectrumiconsworkflowRemove))), {
        UNSAFE_className: (0, $3rHYV$reactspectrumutils.classNames)((0, ($parcel$interopDefault($3649bcbba015c4d7$exports))), 'spectrum-Stepper-button-icon', 'spectrum-Stepper-stepDownIcon'),
        size: "S"
    }), direction === 'down' && scale === 'medium' && /*#__PURE__*/ (0, ($parcel$interopDefault($3rHYV$react))).createElement((0, ($parcel$interopDefault($3rHYV$spectrumiconsuiChevronDownSmall))), {
        UNSAFE_className: (0, $3rHYV$reactspectrumutils.classNames)((0, ($parcel$interopDefault($3649bcbba015c4d7$exports))), 'spectrum-Stepper-button-icon', 'spectrum-Stepper-stepDownIcon')
    })));
});


//# sourceMappingURL=StepButton.main.js.map
