var $1e709ec471c88b75$exports = require("./intlStrings.main.js");
require("./vars.84eec607.css");
var $b6e6aa676f8f9e47$exports = require("./toast_vars_css.main.js");
require("./toastContainer.5957ce49.css");
var $e20782d0579ed886$exports = require("./toastContainer_css.main.js");
var $8Jify$spectrumiconsuiAlertMedium = require("@spectrum-icons/ui/AlertMedium");
var $8Jify$reactspectrumbutton = require("@react-spectrum/button");
var $8Jify$reactspectrumutils = require("@react-spectrum/utils");
var $8Jify$spectrumiconsuiCrossMedium = require("@spectrum-icons/ui/CrossMedium");
var $8Jify$reactariautils = require("@react-aria/utils");
var $8Jify$spectrumiconsuiInfoMedium = require("@spectrum-icons/ui/InfoMedium");
var $8Jify$react = require("react");
var $8Jify$spectrumiconsuiSuccessMedium = require("@spectrum-icons/ui/SuccessMedium");
var $8Jify$reactariafocus = require("@react-aria/focus");
var $8Jify$reactariai18n = require("@react-aria/i18n");
var $8Jify$reactariatoast = require("@react-aria/toast");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "Toast", () => $6c5bd1047ecc310e$export$8d8dc7d5f743331b);
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













const $6c5bd1047ecc310e$export$fde44257752a9f60 = {
    info: (0, ($parcel$interopDefault($8Jify$spectrumiconsuiInfoMedium))),
    negative: (0, ($parcel$interopDefault($8Jify$spectrumiconsuiAlertMedium))),
    positive: (0, ($parcel$interopDefault($8Jify$spectrumiconsuiSuccessMedium)))
};
const $6c5bd1047ecc310e$export$8d8dc7d5f743331b = /*#__PURE__*/ (0, ($parcel$interopDefault($8Jify$react))).forwardRef(function Toast(props, ref) {
    let { toast: { key: key, animation: animation, content: { children: children, variant: variant, actionLabel: actionLabel, onAction: onAction, shouldCloseOnAction: shouldCloseOnAction } }, state: state, ...otherProps } = props;
    let domRef = (0, $8Jify$reactspectrumutils.useDOMRef)(ref);
    let { closeButtonProps: closeButtonProps, titleProps: titleProps, toastProps: toastProps, contentProps: contentProps } = (0, $8Jify$reactariatoast.useToast)(props, state, domRef);
    let { styleProps: styleProps } = (0, $8Jify$reactspectrumutils.useStyleProps)(otherProps);
    let stringFormatter = (0, $8Jify$reactariai18n.useLocalizedStringFormatter)((0, ($parcel$interopDefault($1e709ec471c88b75$exports))), '@react-spectrum/toast');
    let iconLabel = variant && variant !== 'neutral' ? stringFormatter.format(variant) : null;
    let Icon = $6c5bd1047ecc310e$export$fde44257752a9f60[variant];
    let { isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, $8Jify$reactariafocus.useFocusRing)();
    const handleAction = ()=>{
        if (onAction) onAction();
        if (shouldCloseOnAction) state.close(key);
    };
    return /*#__PURE__*/ (0, ($parcel$interopDefault($8Jify$react))).createElement("div", {
        ...styleProps,
        ...(0, $8Jify$reactariautils.mergeProps)(toastProps, focusProps),
        ...(0, $8Jify$reactariautils.filterDOMProps)(props.toast.content),
        ref: domRef,
        className: (0, $8Jify$reactspectrumutils.classNames)((0, ($parcel$interopDefault($b6e6aa676f8f9e47$exports))), 'spectrum-Toast', {
            ['spectrum-Toast--' + variant]: variant
        }, styleProps.className, (0, $8Jify$reactspectrumutils.classNames)((0, ($parcel$interopDefault($e20782d0579ed886$exports))), 'spectrum-Toast', {
            'focus-ring': isFocusVisible
        })),
        style: {
            ...styleProps.style,
            zIndex: props.toast.priority
        },
        "data-animation": animation,
        onAnimationEnd: ()=>{
            if (animation === 'exiting') state.remove(key);
        }
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($8Jify$react))).createElement("div", {
        ...contentProps,
        className: (0, $8Jify$reactspectrumutils.classNames)((0, ($parcel$interopDefault($e20782d0579ed886$exports))), 'spectrum-Toast-contentWrapper')
    }, Icon && /*#__PURE__*/ (0, ($parcel$interopDefault($8Jify$react))).createElement(Icon, {
        "aria-label": iconLabel,
        UNSAFE_className: (0, $8Jify$reactspectrumutils.classNames)((0, ($parcel$interopDefault($b6e6aa676f8f9e47$exports))), 'spectrum-Toast-typeIcon')
    }), /*#__PURE__*/ (0, ($parcel$interopDefault($8Jify$react))).createElement("div", {
        className: (0, $8Jify$reactspectrumutils.classNames)((0, ($parcel$interopDefault($b6e6aa676f8f9e47$exports))), 'spectrum-Toast-body'),
        role: "presentation"
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($8Jify$react))).createElement("div", {
        className: (0, $8Jify$reactspectrumutils.classNames)((0, ($parcel$interopDefault($b6e6aa676f8f9e47$exports))), 'spectrum-Toast-content'),
        role: "presentation",
        ...titleProps
    }, children), actionLabel && /*#__PURE__*/ (0, ($parcel$interopDefault($8Jify$react))).createElement((0, $8Jify$reactspectrumbutton.Button), {
        onPress: handleAction,
        UNSAFE_className: (0, $8Jify$reactspectrumutils.classNames)((0, ($parcel$interopDefault($b6e6aa676f8f9e47$exports))), 'spectrum-Button'),
        variant: "secondary",
        staticColor: "white"
    }, actionLabel))), /*#__PURE__*/ (0, ($parcel$interopDefault($8Jify$react))).createElement("div", {
        className: (0, $8Jify$reactspectrumutils.classNames)((0, ($parcel$interopDefault($b6e6aa676f8f9e47$exports))), 'spectrum-Toast-buttons')
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($8Jify$react))).createElement((0, $8Jify$reactspectrumbutton.ClearButton), {
        ...closeButtonProps,
        variant: "overBackground"
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($8Jify$react))).createElement((0, ($parcel$interopDefault($8Jify$spectrumiconsuiCrossMedium))), null))));
});


//# sourceMappingURL=Toast.main.js.map
