require("./vars.adff832d.css");
var $ba73465d6d9b6556$exports = require("./tooltip_vars_css.main.js");
var $ed2e56c8503433b4$exports = require("./context.main.js");
var $l0Ry0$spectrumiconsuiAlertSmall = require("@spectrum-icons/ui/AlertSmall");
var $l0Ry0$reactspectrumutils = require("@react-spectrum/utils");
var $l0Ry0$spectrumiconsuiInfoSmall = require("@spectrum-icons/ui/InfoSmall");
var $l0Ry0$reactariautils = require("@react-aria/utils");
var $l0Ry0$react = require("react");
var $l0Ry0$spectrumiconsuiSuccessSmall = require("@spectrum-icons/ui/SuccessSmall");
var $l0Ry0$reactariatooltip = require("@react-aria/tooltip");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "Tooltip", () => $55bd11986fcffc6f$export$28c660c63b792dea);
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








let $55bd11986fcffc6f$var$iconMap = {
    info: (0, ($parcel$interopDefault($l0Ry0$spectrumiconsuiInfoSmall))),
    positive: (0, ($parcel$interopDefault($l0Ry0$spectrumiconsuiSuccessSmall))),
    negative: (0, ($parcel$interopDefault($l0Ry0$spectrumiconsuiAlertSmall)))
};
const $55bd11986fcffc6f$export$28c660c63b792dea = /*#__PURE__*/ (0, ($parcel$interopDefault($l0Ry0$react))).forwardRef(function Tooltip(props, ref) {
    let { ref: overlayRef, arrowProps: arrowProps, state: state, arrowRef: arrowRef, ...tooltipProviderProps } = (0, $l0Ry0$react.useContext)((0, $ed2e56c8503433b4$exports.TooltipContext));
    let defaultRef = (0, $l0Ry0$react.useRef)(null);
    overlayRef = overlayRef || defaultRef;
    let backupPlacement = props.placement;
    props = (0, $l0Ry0$reactariautils.mergeProps)(props, tooltipProviderProps);
    let { variant: variant = 'neutral', placement: placement, isOpen: isOpen, showIcon: showIcon, ...otherProps } = props;
    if (placement == null) placement = backupPlacement !== null && backupPlacement !== void 0 ? backupPlacement : 'top';
    let { styleProps: styleProps } = (0, $l0Ry0$reactspectrumutils.useStyleProps)(otherProps);
    let { tooltipProps: tooltipProps } = (0, $l0Ry0$reactariatooltip.useTooltip)(props, state);
    // Sync ref with overlayRef from context.
    (0, $l0Ry0$react.useImperativeHandle)(ref, ()=>(0, $l0Ry0$reactspectrumutils.createDOMRef)(overlayRef));
    let Icon = $55bd11986fcffc6f$var$iconMap[variant];
    return /*#__PURE__*/ (0, ($parcel$interopDefault($l0Ry0$react))).createElement("div", {
        ...styleProps,
        ...tooltipProps,
        className: (0, $l0Ry0$reactspectrumutils.classNames)((0, ($parcel$interopDefault($ba73465d6d9b6556$exports))), 'spectrum-Tooltip', `spectrum-Tooltip--${variant}`, `spectrum-Tooltip--${placement}`, {
            'is-open': isOpen,
            [`is-open--${placement}`]: isOpen
        }, styleProps.className),
        ref: overlayRef
    }, showIcon && variant !== 'neutral' && /*#__PURE__*/ (0, ($parcel$interopDefault($l0Ry0$react))).createElement(Icon, {
        UNSAFE_className: (0, $l0Ry0$reactspectrumutils.classNames)((0, ($parcel$interopDefault($ba73465d6d9b6556$exports))), 'spectrum-Tooltip-typeIcon'),
        "aria-hidden": true
    }), props.children && /*#__PURE__*/ (0, ($parcel$interopDefault($l0Ry0$react))).createElement("span", {
        className: (0, $l0Ry0$reactspectrumutils.classNames)((0, ($parcel$interopDefault($ba73465d6d9b6556$exports))), 'spectrum-Tooltip-label')
    }, props.children), /*#__PURE__*/ (0, ($parcel$interopDefault($l0Ry0$react))).createElement("span", {
        ...arrowProps,
        ref: arrowRef,
        className: (0, $l0Ry0$reactspectrumutils.classNames)((0, ($parcel$interopDefault($ba73465d6d9b6556$exports))), 'spectrum-Tooltip-tip')
    }));
});


//# sourceMappingURL=Tooltip.main.js.map
