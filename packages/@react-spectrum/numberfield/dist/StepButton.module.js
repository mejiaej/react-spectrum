import "./vars.8d25eb32.css";
import $3dAkq$stepper_vars_cssmodulejs from "./stepper_vars_css.module.js";
import $3dAkq$spectrumiconsworkflowAdd from "@spectrum-icons/workflow/Add";
import $3dAkq$spectrumiconsuiChevronDownSmall from "@spectrum-icons/ui/ChevronDownSmall";
import $3dAkq$spectrumiconsuiChevronUpSmall from "@spectrum-icons/ui/ChevronUpSmall";
import {useFocusableRef as $3dAkq$useFocusableRef, classNames as $3dAkq$classNames} from "@react-spectrum/utils";
import {FocusRing as $3dAkq$FocusRing} from "@react-aria/focus";
import {mergeProps as $3dAkq$mergeProps} from "@react-aria/utils";
import $3dAkq$react from "react";
import $3dAkq$spectrumiconsworkflowRemove from "@spectrum-icons/workflow/Remove";
import {useButton as $3dAkq$useButton} from "@react-aria/button";
import {useHover as $3dAkq$useHover} from "@react-aria/interactions";
import {useProviderProps as $3dAkq$useProviderProps, useProvider as $3dAkq$useProvider} from "@react-spectrum/provider";


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











const $7f00b388e0d3b2f6$export$b2f6b60c1d32d6aa = /*#__PURE__*/ (0, $3dAkq$react).forwardRef(function StepButton(props, ref) {
    props = (0, $3dAkq$useProviderProps)(props);
    let { scale: scale } = (0, $3dAkq$useProvider)();
    let { direction: direction, isDisabled: isDisabled, isQuiet: isQuiet } = props;
    let domRef = (0, $3dAkq$useFocusableRef)(ref);
    /**
   * Must use div for now because Safari pointer event bugs on disabled form elements.
   * Link https://bugs.webkit.org/show_bug.cgi?id=219188.
   */ let { buttonProps: buttonProps, isPressed: isPressed } = (0, $3dAkq$useButton)({
        ...props,
        elementType: 'div'
    }, domRef);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $3dAkq$useHover)(props);
    return /*#__PURE__*/ (0, $3dAkq$react).createElement((0, $3dAkq$FocusRing), {
        focusRingClass: (0, $3dAkq$classNames)((0, ($parcel$interopDefault($3dAkq$stepper_vars_cssmodulejs))), 'focus-ring')
    }, /*#__PURE__*/ (0, $3dAkq$react).createElement("div", {
        className: (0, $3dAkq$classNames)((0, ($parcel$interopDefault($3dAkq$stepper_vars_cssmodulejs))), 'spectrum-Stepper-button', {
            'spectrum-Stepper-button--stepUp': direction === 'up',
            'spectrum-Stepper-button--stepDown': direction === 'down',
            'spectrum-Stepper-button--isQuiet': isQuiet,
            'is-hovered': isHovered,
            'is-active': isPressed,
            'is-disabled': isDisabled
        }),
        ...(0, $3dAkq$mergeProps)(hoverProps, buttonProps),
        ref: domRef
    }, direction === 'up' && scale === 'large' && /*#__PURE__*/ (0, $3dAkq$react).createElement((0, $3dAkq$spectrumiconsworkflowAdd), {
        UNSAFE_className: (0, $3dAkq$classNames)((0, ($parcel$interopDefault($3dAkq$stepper_vars_cssmodulejs))), 'spectrum-Stepper-button-icon', 'spectrum-Stepper-stepUpIcon'),
        size: "S"
    }), direction === 'up' && scale === 'medium' && /*#__PURE__*/ (0, $3dAkq$react).createElement((0, $3dAkq$spectrumiconsuiChevronUpSmall), {
        UNSAFE_className: (0, $3dAkq$classNames)((0, ($parcel$interopDefault($3dAkq$stepper_vars_cssmodulejs))), 'spectrum-Stepper-button-icon', 'spectrum-Stepper-stepUpIcon')
    }), direction === 'down' && scale === 'large' && /*#__PURE__*/ (0, $3dAkq$react).createElement((0, $3dAkq$spectrumiconsworkflowRemove), {
        UNSAFE_className: (0, $3dAkq$classNames)((0, ($parcel$interopDefault($3dAkq$stepper_vars_cssmodulejs))), 'spectrum-Stepper-button-icon', 'spectrum-Stepper-stepDownIcon'),
        size: "S"
    }), direction === 'down' && scale === 'medium' && /*#__PURE__*/ (0, $3dAkq$react).createElement((0, $3dAkq$spectrumiconsuiChevronDownSmall), {
        UNSAFE_className: (0, $3dAkq$classNames)((0, ($parcel$interopDefault($3dAkq$stepper_vars_cssmodulejs))), 'spectrum-Stepper-button-icon', 'spectrum-Stepper-stepDownIcon')
    })));
});


export {$7f00b388e0d3b2f6$export$b2f6b60c1d32d6aa as StepButton};
//# sourceMappingURL=StepButton.module.js.map
