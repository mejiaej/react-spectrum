import "./Field.css";
import $e17a4836f4b6cc28$export$2e2bcd8739ae039 from "../icons/AlertTriangle.mjs";
import $8373af657584cab2$export$2e2bcd8739ae039 from "./Asterisk.mjs";
import {centerBaseline as $1f4b04be3f24aae3$export$9d7e2342a7e53afa, CenterBaseline as $1f4b04be3f24aae3$export$768dac55bb57081d, centerBaselineBefore as $1f4b04be3f24aae3$export$179e9489a09b14ac} from "./CenterBaseline.mjs";
import {ContextualHelpContext as $8e176595bc49ca3f$export$41b9afaaba473494} from "./ContextualHelp.mjs";
import {IconContext as $ac8c32e6775ddd1f$export$a49f528ae1a4d0ed} from "../icons/Icon.mjs";
import $7A6HT$intlStringsmjs from "./intlStrings.mjs";
import {mergeStyles as $feb886035e0d4633$export$e618dc39ac9ad607} from "../icons/runtime.mjs";
import {jsxs as $7A6HT$jsxs, jsx as $7A6HT$jsx, Fragment as $7A6HT$Fragment} from "react/jsx-runtime";
import {Label as $7A6HT$Label, Group as $7A6HT$Group, Input as $7A6HT$Input, Text as $7A6HT$Text, FieldError as $7A6HT$FieldError, composeRenderProps as $7A6HT$composeRenderProps, Provider as $7A6HT$Provider} from "react-aria-components";
import {forwardRef as $7A6HT$forwardRef} from "react";
import {useDOMRef as $7A6HT$useDOMRef} from "@react-spectrum/utils";
import {useId as $7A6HT$useId} from "@react-aria/utils";
import {useLocalizedStringFormatter as $7A6HT$useLocalizedStringFormatter} from "@react-aria/i18n";


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 












const $9afd80978c252040$export$1acdcf5a973a8414 = /*#__PURE__*/ (0, $7A6HT$forwardRef)(function FieldLabel(props, ref) {
    let stringFormatter = (0, $7A6HT$useLocalizedStringFormatter)((0, ($parcel$interopDefault($7A6HT$intlStringsmjs))), '@react-spectrum/s2');
    let { isDisabled: isDisabled, isRequired: isRequired, size: size = 'M', necessityIndicator: necessityIndicator = 'icon', includeNecessityIndicatorInAccessibilityName: includeNecessityIndicatorInAccessibilityName = false, labelAlign: labelAlign, labelPosition: labelPosition, staticColor: staticColor, contextualHelp: contextualHelp, isQuiet: isQuiet, UNSAFE_style: UNSAFE_style, UNSAFE_className: UNSAFE_className = '', ...labelProps } = props;
    let domRef = (0, $7A6HT$useDOMRef)(ref);
    let contextualHelpId = (0, $7A6HT$useId)();
    let fallbackLabelPropsId = (0, $7A6HT$useId)();
    if (contextualHelp && !labelProps.id) labelProps.id = fallbackLabelPropsId;
    if (!props.children) return null;
    return /*#__PURE__*/ (0, $7A6HT$jsxs)("div", {
        className: function anonymous(props) {
            let rules = " .";
            rules += ' __a-4e9m05';
            rules += ' __b-4e9m05';
            rules += ' __c-4e9m05';
            rules += ' __d-4e9m05';
            rules += ' _Zc';
            if (props.labelAlign === "end") rules += ' _jc';
            else if (props.labelAlign === "start") rules += ' _ja';
            if (props.labelPosition === "top") rules += ' F-1inj1bc';
            if (props.isQuiet) rules += ' __ma';
            else if (props.labelPosition === "top") rules += ' __me';
            return rules;
        }({
            labelAlign: labelAlign,
            labelPosition: labelPosition,
            isQuiet: isQuiet
        }),
        children: [
            /*#__PURE__*/ (0, $7A6HT$jsxs)((0, $7A6HT$Label), {
                ...labelProps,
                ref: domRef,
                style: UNSAFE_style,
                className: UNSAFE_className + (0, $feb886035e0d4633$export$e618dc39ac9ad607)(function anonymous(props) {
                    let rules = " .";
                    rules += ' _c-bc1l9oh';
                    rules += ' _c-1uotwbwg';
                    rules += ' _c-eo0c6sf';
                    rules += ' _c-enzzrge';
                    rules += ' _c-enzykdd';
                    rules += ' _c-enzwzjc';
                    rules += ' _c-enzrfpb';
                    rules += ' _ca';
                    if (props.size === "XL") {
                        rules += ' _dbj';
                        rules += ' _di';
                    } else if (props.size === "L") {
                        rules += ' _dbh';
                        rules += ' _dg';
                    } else if (props.size === "S") {
                        rules += ' _dbd';
                        rules += ' _dc';
                    } else if (props.size === "XS") {
                        rules += ' _dbb';
                        rules += ' _da';
                    } else {
                        rules += ' _dbf';
                        rules += ' _de';
                    }
                    rules += ' _eb';
                    rules += ' _f-1x99dlob';
                    rules += ' _fa';
                    rules += ' aa_____x';
                    if (props.staticColor === "black") rules += ' a_____s';
                    else if (props.staticColor === "white") rules += ' a_____d';
                    else if (props.isDisabled) rules += ' aj';
                    else {
                        if (props.isPressed) rules += ' an';
                        else if (props.isFocusVisible) rules += ' an';
                        else if (props.isHovered) rules += ' an';
                        else rules += ' am';
                    }
                    rules += ' __Hb';
                    return rules;
                }({
                    labelPosition: labelPosition,
                    isDisabled: isDisabled,
                    size: size,
                    staticColor: staticColor
                }), props.styles),
                children: [
                    props.children,
                    (isRequired || necessityIndicator === 'label') && /*#__PURE__*/ (0, $7A6HT$jsxs)("span", {
                        className: " . _pb",
                        children: [
                            "\xa0",
                            necessityIndicator === 'icon' && /*#__PURE__*/ (0, $7A6HT$jsx)((0, $8373af657584cab2$export$2e2bcd8739ae039), {
                                size: size === 'S' ? 'M' : size,
                                className: " . -rwx0fg_e-b",
                                "aria-label": includeNecessityIndicatorInAccessibilityName ? stringFormatter.format('label.(required)') : undefined
                            }),
                            necessityIndicator === 'label' && /* The necessity label is hidden to screen readers if the field is required because
              * aria-required is set on the field in that case. That will already be announced,
              * so no need to duplicate it here. If optional, we do want it to be announced here.
              */ /*#__PURE__*/ (0, $7A6HT$jsx)("span", {
                                "aria-hidden": !includeNecessityIndicatorInAccessibilityName ? isRequired : undefined,
                                children: isRequired ? stringFormatter.format('label.(required)') : stringFormatter.format('label.(optional)')
                            })
                        ]
                    })
                ]
            }),
            contextualHelp && /*#__PURE__*/ (0, $7A6HT$jsx)((0, $1f4b04be3f24aae3$export$768dac55bb57081d), {
                styles: " . _Ze ko yc",
                children: /*#__PURE__*/ (0, $7A6HT$jsx)((0, $8e176595bc49ca3f$export$41b9afaaba473494).Provider, {
                    value: {
                        id: contextualHelpId,
                        'aria-labelledby': labelProps?.id ? `${labelProps.id} ${contextualHelpId}` : undefined,
                        size: size === 'L' || size === 'XL' ? 'S' : 'XS'
                    },
                    children: contextualHelp
                })
            })
        ]
    });
});
const $9afd80978c252040$var$fieldGroupStyles = function anonymous(props) {
    let rules = " .";
    if (props.isFocusVisible) rules += ' _Lb';
    else rules += ' _La';
    rules += ' da_____z';
    rules += ' dx';
    rules += ' _Nc';
    rules += ' _M-3t1z';
    rules += ' __a-4cfph1';
    rules += ' __b-4cfph1';
    rules += ' __c-4cfph1';
    rules += ' __d-4cfph1';
    if (props.size === "XL") rules += ' qj';
    else if (props.size === "L") rules += ' qi';
    else if (props.size === "S") rules += ' qh';
    else if (props.size === "XS") rules += ' qg';
    else rules += ' qf';
    if (props.isQuiet) rules += ' __ma';
    else rules += ' __m-1s8glxue';
    if (props.size === "XL") rules += ' -usygro_l-____g';
    else if (props.size === "L") rules += ' -usygro_l-___0';
    else if (props.size === "S") rules += ' -usygro_l-___u';
    else rules += ' -usygro_l-___K';
    rules += ' m-rwozxi';
    rules += ' _Zd';
    rules += ' _1c';
    rules += ' k-375toq';
    rules += ' __na';
    rules += ' C-375tnm';
    rules += ' D-375tnn';
    rules += ' _c-bc1l9oh';
    rules += ' _c-1uotwbwg';
    rules += ' _c-eo0c6sf';
    rules += ' _c-enzzrge';
    rules += ' _c-enzykdd';
    rules += ' _c-enzwzjc';
    rules += ' _c-enzrfpb';
    rules += ' _ca';
    if (props.size === "XL") {
        rules += ' _dbj';
        rules += ' _di';
    } else if (props.size === "L") {
        rules += ' _dbh';
        rules += ' _dg';
    } else if (props.size === "S") {
        rules += ' _dbd';
        rules += ' _dc';
    } else if (props.size === "XS") {
        rules += ' _dbb';
        rules += ' _da';
    } else {
        rules += ' _dbf';
        rules += ' _de';
    }
    rules += ' _eb';
    rules += ' _f-1x99dlob';
    rules += ' _fa';
    if (props.isDisabled) rules += ' aj';
    else {
        if (props.isPressed) rules += ' ao';
        else if (props.isFocusVisible) rules += ' ao';
        else if (props.isHovered) rules += ' ao';
        else rules += ' an';
    }
    rules += ' _vh';
    rules += ' _wh';
    rules += ' _xh';
    rules += ' _yh';
    rules += ' uc';
    rules += ' vc';
    rules += ' s-375toy';
    rules += ' t-375toz';
    rules += ' wa';
    rules += ' _Oa';
    rules += ' _Q-375x7f';
    rules += ' _Ra';
    if (props.isDisabled) {
        rules += ' ca_____B';
        rules += ' ci';
    } else if (props.isFocusWithin) {
        rules += ' ca_____z';
        if (props.isInvalid) rules += ' cP';
        else rules += ' co';
    } else if (props.isInvalid) {
        if (props.isPressed) rules += ' cQ';
        else if (props.isFocusVisible) rules += ' cP';
        else if (props.isHovered) rules += ' cP';
        else rules += ' cO';
    } else {
        if (props.isPressed) rules += ' cj';
        else if (props.isFocusVisible) rules += ' cj';
        else if (props.isHovered) rules += ' cj';
        else rules += ' ci';
    }
    rules += ' bd';
    if (props.isDisabled) rules += ' __Hb';
    else rules += ' __He';
    rules += ' -_375tnm_C-I';
    rules += ' -_375tnn_D-I';
    rules += ' -_375toy_s-c';
    rules += ' -_375toz_t-c';
    if (props.size === "XL") rules += ' -_375toq_k-j';
    else if (props.size === "L") rules += ' -_375toq_k-i';
    else if (props.size === "S") rules += ' -_375toq_k-h';
    else if (props.size === "XS") rules += ' -_375toq_k-g';
    else rules += ' -_375toq_k-f';
    return rules;
};
const $9afd80978c252040$export$f0fe469072bc6950 = /*#__PURE__*/ (0, $7A6HT$forwardRef)(function FieldGroup(props, ref) {
    return /*#__PURE__*/ (0, $7A6HT$jsx)((0, $7A6HT$Group), {
        ref: ref,
        ...props,
        onPointerDown: (e)=>{
            // Forward focus to input element when clicking on a non-interactive child (e.g. icon or padding)
            if (e.pointerType === 'mouse' && !e.target.closest('button,input,textarea')) {
                e.preventDefault();
                e.currentTarget.querySelector('input')?.focus();
            }
        },
        onPointerUp: (e)=>{
            if (e.pointerType !== 'mouse' && !e.target.closest('button,input,textarea')) {
                e.preventDefault();
                e.currentTarget.querySelector('input')?.focus();
            }
        },
        style: props.UNSAFE_style,
        className: (renderProps)=>(props.UNSAFE_className || '') + ' ' + (0, $1f4b04be3f24aae3$export$179e9489a09b14ac) + (0, $feb886035e0d4633$export$e618dc39ac9ad607)($9afd80978c252040$var$fieldGroupStyles({
                ...renderProps,
                size: props.size || 'M'
            }), props.styles)
    });
});
const $9afd80978c252040$export$f5b8910cec6cf069 = /*#__PURE__*/ (0, $7A6HT$forwardRef)(function Input(props, ref) {
    let { UNSAFE_className: UNSAFE_className = '', UNSAFE_style: UNSAFE_style, styles: styles, ...otherProps } = props;
    return /*#__PURE__*/ (0, $7A6HT$jsx)((0, $7A6HT$Input), {
        ...otherProps,
        ref: ref,
        style: UNSAFE_style,
        className: UNSAFE_className + (0, $feb886035e0d4633$export$e618dc39ac9ad607)(" . Ea Fa Ca Da ba a-17zqamw _c-17zqamw _d-17zqamw _e-17zqamw _9-3t1y _8-3t1y qo lb _La wf __vb __wb _ma _pb", styles)
    });
});
const $9afd80978c252040$var$helpTextStyles = function anonymous(props) {
    let rules = " .";
    rules += ' __a-1oa8qr7';
    rules += ' __b-1oa8qr7';
    rules += ' __c-1oa8qr7';
    rules += ' __d-1oa8qr7';
    rules += ' _Zd';
    rules += ' _1d';
    rules += ' ibH';
    rules += ' iG';
    rules += ' jbH';
    rules += ' jG';
    rules += ' _c-bc1l9oh';
    rules += ' _c-1uotwbwg';
    rules += ' _c-eo0c6sf';
    rules += ' _c-enzzrge';
    rules += ' _c-enzykdd';
    rules += ' _c-enzwzjc';
    rules += ' _c-enzrfpb';
    rules += ' _ca';
    if (props.size === "XL") {
        rules += ' _dbj';
        rules += ' _di';
    } else if (props.size === "L") {
        rules += ' _dbh';
        rules += ' _dg';
    } else if (props.size === "S") {
        rules += ' _dbd';
        rules += ' _dc';
    } else if (props.size === "XS") {
        rules += ' _dbb';
        rules += ' _da';
    } else {
        rules += ' _dbf';
        rules += ' _de';
    }
    rules += ' _eb';
    rules += ' _f-1x99dlob';
    rules += ' _fa';
    if (props.isDisabled) rules += ' aj';
    else if (props.isInvalid) {
        if (props.isPressed) rules += ' aP';
        else if (props.isFocusVisible) rules += ' aP';
        else if (props.isHovered) rules += ' aP';
        else rules += ' aO';
    } else {
        if (props.isPressed) rules += ' an';
        else if (props.isFocusVisible) rules += ' an';
        else if (props.isHovered) rules += ' an';
        else rules += ' am';
    }
    rules += ' -rwx0fg_e-b';
    rules += ' __me';
    rules += ' E-1inj1bc';
    if (props.isDisabled) rules += ' __Hb';
    else rules += ' __He';
    return rules;
};
function $9afd80978c252040$export$a67c0bc59081311a(props) {
    let domDescriptionRef = (0, $7A6HT$useDOMRef)(props.descriptionRef || null);
    let domErrorRef = (0, $7A6HT$useDOMRef)(props.errorRef || null);
    if (!props.isInvalid && props.description) return /*#__PURE__*/ (0, $7A6HT$jsx)((0, $7A6HT$Text), {
        slot: "description",
        ref: domDescriptionRef,
        className: $9afd80978c252040$var$helpTextStyles({
            size: props.size || 'M',
            isDisabled: props.isDisabled
        }),
        children: props.description
    });
    return /*#__PURE__*/ (0, $7A6HT$jsx)((0, $7A6HT$FieldError), {
        ...props,
        ref: domErrorRef,
        className: (renderProps)=>$9afd80978c252040$var$helpTextStyles({
                ...renderProps,
                size: props.size || 'M',
                isDisabled: props.isDisabled
            }),
        children: (0, $7A6HT$composeRenderProps)(props.children, (children, { validationErrors: validationErrors })=>/*#__PURE__*/ (0, $7A6HT$jsxs)((0, $7A6HT$Fragment), {
                children: [
                    props.showErrorIcon && /*#__PURE__*/ (0, $7A6HT$jsx)((0, $1f4b04be3f24aae3$export$768dac55bb57081d), {
                        children: /*#__PURE__*/ (0, $7A6HT$jsx)((0, $e17a4836f4b6cc28$export$2e2bcd8739ae039), {})
                    }),
                    /*#__PURE__*/ (0, $7A6HT$jsx)("span", {
                        children: children || validationErrors.join(' ')
                    })
                ]
            }))
    });
}
function $9afd80978c252040$export$bda0d075e0e342c9(props) {
    return /*#__PURE__*/ (0, $7A6HT$jsx)((0, $7A6HT$Provider), {
        values: [
            [
                (0, $ac8c32e6775ddd1f$export$a49f528ae1a4d0ed),
                {
                    render: (0, $1f4b04be3f24aae3$export$9d7e2342a7e53afa)({
                        slot: 'icon',
                        styles: " . __A-3t1x _8-3t1x -rwx0fg_e-e -rwx0fg_e-a_____V"
                    }),
                    styles: " . l-1sthc3k k-1sthc3k yG ybH z-177861o _8-3t1x"
                }
            ]
        ],
        children: !props.isDisabled && /*#__PURE__*/ (0, $7A6HT$jsx)((0, $e17a4836f4b6cc28$export$2e2bcd8739ae039), {})
    });
}


export {$9afd80978c252040$export$1acdcf5a973a8414 as FieldLabel, $9afd80978c252040$export$f0fe469072bc6950 as FieldGroup, $9afd80978c252040$export$f5b8910cec6cf069 as Input, $9afd80978c252040$export$a67c0bc59081311a as HelpText, $9afd80978c252040$export$bda0d075e0e342c9 as FieldErrorIcon};
//# sourceMappingURL=Field.mjs.map
