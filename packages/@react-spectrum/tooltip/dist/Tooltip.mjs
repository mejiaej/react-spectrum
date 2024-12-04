import "./vars.adff832d.css";
import $dcNtB$tooltip_vars_cssmodulejs from "./tooltip_vars_css.mjs";
import {TooltipContext as $b8c00169fae46ac7$export$39ae08fa83328b12} from "./context.mjs";
import $dcNtB$spectrumiconsuiAlertSmall from "@spectrum-icons/ui/AlertSmall";
import {useStyleProps as $dcNtB$useStyleProps, createDOMRef as $dcNtB$createDOMRef, classNames as $dcNtB$classNames} from "@react-spectrum/utils";
import $dcNtB$spectrumiconsuiInfoSmall from "@spectrum-icons/ui/InfoSmall";
import {mergeProps as $dcNtB$mergeProps} from "@react-aria/utils";
import $dcNtB$react, {useContext as $dcNtB$useContext, useRef as $dcNtB$useRef, useImperativeHandle as $dcNtB$useImperativeHandle} from "react";
import $dcNtB$spectrumiconsuiSuccessSmall from "@spectrum-icons/ui/SuccessSmall";
import {useTooltip as $dcNtB$useTooltip} from "@react-aria/tooltip";


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








let $dc9e2a6f9971fb04$var$iconMap = {
    info: (0, $dcNtB$spectrumiconsuiInfoSmall),
    positive: (0, $dcNtB$spectrumiconsuiSuccessSmall),
    negative: (0, $dcNtB$spectrumiconsuiAlertSmall)
};
const $dc9e2a6f9971fb04$export$28c660c63b792dea = /*#__PURE__*/ (0, $dcNtB$react).forwardRef(function Tooltip(props, ref) {
    let { ref: overlayRef, arrowProps: arrowProps, state: state, arrowRef: arrowRef, ...tooltipProviderProps } = (0, $dcNtB$useContext)((0, $b8c00169fae46ac7$export$39ae08fa83328b12));
    let defaultRef = (0, $dcNtB$useRef)(null);
    overlayRef = overlayRef || defaultRef;
    let backupPlacement = props.placement;
    props = (0, $dcNtB$mergeProps)(props, tooltipProviderProps);
    let { variant: variant = 'neutral', placement: placement, isOpen: isOpen, showIcon: showIcon, ...otherProps } = props;
    if (placement == null) placement = backupPlacement !== null && backupPlacement !== void 0 ? backupPlacement : 'top';
    let { styleProps: styleProps } = (0, $dcNtB$useStyleProps)(otherProps);
    let { tooltipProps: tooltipProps } = (0, $dcNtB$useTooltip)(props, state);
    // Sync ref with overlayRef from context.
    (0, $dcNtB$useImperativeHandle)(ref, ()=>(0, $dcNtB$createDOMRef)(overlayRef));
    let Icon = $dc9e2a6f9971fb04$var$iconMap[variant];
    return /*#__PURE__*/ (0, $dcNtB$react).createElement("div", {
        ...styleProps,
        ...tooltipProps,
        className: (0, $dcNtB$classNames)((0, ($parcel$interopDefault($dcNtB$tooltip_vars_cssmodulejs))), 'spectrum-Tooltip', `spectrum-Tooltip--${variant}`, `spectrum-Tooltip--${placement}`, {
            'is-open': isOpen,
            [`is-open--${placement}`]: isOpen
        }, styleProps.className),
        ref: overlayRef
    }, showIcon && variant !== 'neutral' && /*#__PURE__*/ (0, $dcNtB$react).createElement(Icon, {
        UNSAFE_className: (0, $dcNtB$classNames)((0, ($parcel$interopDefault($dcNtB$tooltip_vars_cssmodulejs))), 'spectrum-Tooltip-typeIcon'),
        "aria-hidden": true
    }), props.children && /*#__PURE__*/ (0, $dcNtB$react).createElement("span", {
        className: (0, $dcNtB$classNames)((0, ($parcel$interopDefault($dcNtB$tooltip_vars_cssmodulejs))), 'spectrum-Tooltip-label')
    }, props.children), /*#__PURE__*/ (0, $dcNtB$react).createElement("span", {
        ...arrowProps,
        ref: arrowRef,
        className: (0, $dcNtB$classNames)((0, ($parcel$interopDefault($dcNtB$tooltip_vars_cssmodulejs))), 'spectrum-Tooltip-tip')
    }));
});


export {$dc9e2a6f9971fb04$export$28c660c63b792dea as Tooltip};
//# sourceMappingURL=Tooltip.module.js.map
