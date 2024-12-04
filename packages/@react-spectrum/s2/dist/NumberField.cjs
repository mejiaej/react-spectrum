require("./NumberField.css");
var $54686c7c3f031ee2$exports = require("./Add.cjs");
var $84c37b7bd5c1374e$exports = require("./Dash.cjs");
var $a0b996a550bb0891$exports = require("./Field.cjs");
var $bfa4962d90c8af48$exports = require("./Form.cjs");
var $2061c83559b50a66$exports = require("./pressScale.cjs");
var $ac757a4c2bd72aee$exports = require("../icons/useSpectrumContextProps.cjs");
var $fwzUK$reactjsxruntime = require("react/jsx-runtime");
var $fwzUK$reactariacomponents = require("react-aria-components");
var $fwzUK$react = require("react");
var $fwzUK$reactspectrumutils = require("@react-spectrum/utils");
var $fwzUK$reactariautils = require("@react-aria/utils");
var $fwzUK$reactaria = require("react-aria");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "NumberFieldContext", () => $a366ef8f467b1cb5$export$b414a48cf5dcbc11);
$parcel$export(module.exports, "NumberField", () => $a366ef8f467b1cb5$export$63c5fa0b2fdccd2e);
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











const $a366ef8f467b1cb5$export$b414a48cf5dcbc11 = /*#__PURE__*/ (0, $fwzUK$react.createContext)(null);
const $a366ef8f467b1cb5$var$inputButton = function anonymous(props) {
    let rules = " .";
    rules += ' _Zd';
    rules += ' _La';
    rules += ' _jb';
    rules += ' wf';
    if (props.type === "decrementStep") rules += ' _va';
    else {
        if (props.size === "XL") rules += ' _v-3762yr';
        else if (props.size === "L") rules += ' _v-37624i';
        else if (props.size === "M") rules += ' _v-3761a9';
        else if (props.size === "S") rules += ' _v-3760g0';
    }
    if (props.type === "decrementStep") rules += ' _wa';
    else {
        if (props.size === "XL") rules += ' _w-3762yr';
        else if (props.size === "L") rules += ' _w-37624i';
        else if (props.size === "M") rules += ' _w-3761a9';
        else if (props.size === "S") rules += ' _w-3760g0';
    }
    if (props.type === "incrementStep") rules += ' _xa';
    else {
        if (props.size === "XL") rules += ' _x-3762yr';
        else if (props.size === "L") rules += ' _x-37624i';
        else if (props.size === "M") rules += ' _x-3761a9';
        else if (props.size === "S") rules += ' _x-3760g0';
    }
    if (props.type === "incrementStep") rules += ' _ya';
    else {
        if (props.size === "XL") rules += ' _y-3762yr';
        else if (props.size === "L") rules += ' _y-37624i';
        else if (props.size === "M") rules += ' _y-3761a9';
        else if (props.size === "S") rules += ' _y-3760g0';
    }
    rules += ' _1c';
    rules += ' _2d';
    if (props.size === "XL") rules += ' lU';
    else if (props.size === "L") rules += ' lM';
    else if (props.size === "M") rules += ' lI';
    else if (props.size === "S") rules += ' lE';
    rules += ' ka';
    if (props.type === "increment") rules += ' ya';
    else rules += ' yF';
    rules += ' _bb';
    rules += ' _8-3t1x';
    rules += ' oo';
    rules += ' _Oag';
    rules += ' _Oa';
    rules += ' _Qa-375x7f';
    rules += ' _Q-375x7f';
    rules += ' _Raa';
    rules += ' _Ra';
    if (props.isDisabled) rules += ' ba_____B';
    else if (props.isHovered) rules += ' ba_____z';
    else rules += ' ba_____x';
    if (props.isDisabled) rules += ' bg';
    else {
        if (props.isPressed) rules += ' bh';
        else if (props.isFocusVisible) rules += ' bh';
        else if (props.isHovered) rules += ' bh';
        else rules += ' bg';
    }
    rules += ' aa_____w';
    if (props.isDisabled) rules += ' aj';
    else {
        if (props.isPressed) rules += ' ao';
        else if (props.isFocusVisible) rules += ' ao';
        else if (props.isHovered) rules += ' ao';
        else rules += ' an';
    }
    rules += ' __Hb';
    return rules;
};
const $a366ef8f467b1cb5$var$iconStyles = function anonymous(props) {
    let rules = " .";
    rules += ' _8-3t1x';
    if (props.type === "decrementStep") rules += ' R-3hn0u';
    else if (props.type === "incrementStep") rules += ' R-375y3i';
    else rules += ' R-3t1x';
    rules += ' -rwx0fg_e-b';
    return rules;
};
const $a366ef8f467b1cb5$var$stepperContainerStyles = function anonymous(props) {
    let rules = " .";
    rules += ' _Zd';
    rules += ' _6a';
    if (props.size === "XL") rules += ' id';
    else if (props.size === "L") rules += ' id';
    else if (props.size === "M") rules += ' ic';
    else if (props.size === "S") rules += ' id';
    if (props.size === "XL") rules += ' jd';
    else if (props.size === "L") rules += ' jd';
    else if (props.size === "M") rules += ' jc';
    else if (props.size === "S") rules += ' jd';
    if (props.size === "XL") rules += ' D-6njx2e';
    else if (props.size === "L") rules += ' D-6njx2e';
    else if (props.size === "M") rules += ' Dc';
    else if (props.size === "S") rules += ' Db';
    return rules;
};
const $a366ef8f467b1cb5$export$63c5fa0b2fdccd2e = /*#__PURE__*/ (0, $fwzUK$react.forwardRef)(function NumberField(props1, ref) {
    [props1, ref] = (0, $ac757a4c2bd72aee$exports.useSpectrumContextProps)(props1, ref, $a366ef8f467b1cb5$export$b414a48cf5dcbc11);
    let { label: label, contextualHelp: contextualHelp, description: descriptionMessage, errorMessage: errorMessage, hideStepper: hideStepper, isRequired: isRequired, size: size = 'M', labelPosition: labelPosition = 'top', necessityIndicator: necessityIndicator, labelAlign: labelAlign = 'start', UNSAFE_className: UNSAFE_className = '', UNSAFE_style: UNSAFE_style, ...numberFieldProps } = props1;
    let formContext = (0, $fwzUK$react.useContext)((0, $bfa4962d90c8af48$exports.FormContext));
    let domRef = (0, $fwzUK$react.useRef)(null);
    let inputRef = (0, $fwzUK$react.useRef)(null);
    let decrementButtonRef = (0, $fwzUK$react.useRef)(null);
    let incrementButtonRef = (0, $fwzUK$react.useRef)(null);
    // Expose imperative interface for ref
    (0, $fwzUK$react.useImperativeHandle)(ref, ()=>({
            ...(0, $fwzUK$reactspectrumutils.createFocusableRef)(domRef, inputRef),
            select () {
                if (inputRef.current) inputRef.current.select();
            },
            getInputElement () {
                return inputRef.current;
            }
        }));
    return /*#__PURE__*/ (0, $fwzUK$reactjsxruntime.jsx)((0, $fwzUK$reactariacomponents.NumberField), {
        isRequired: isRequired,
        ...numberFieldProps,
        style: UNSAFE_style,
        className: UNSAFE_className + function anonymous(props, overrides) {
            let rules = " .";
            let matches = (overrides || '').match(/(?:^|\s)(?:y|z|A|B|_9|_8|h|_5|_4|__A|__c|__d|__a|__b|U|__Q|X|Z|V|W|l|q|r)[^\s]+/g) || [];
            rules += matches.join('');
            let $__a = false;
            let $__b = false;
            for (let p of matches){
                if (/^\s*__a/.test(p)) $__a = true;
                if (/^\s*__b/.test(p)) $__b = true;
            }
            rules += ' _Zf';
            if (!$__a) {
                if (props.isInForm) rules += ' __a-3t1y';
            }
            if (!$__b) {
                if (props.isInForm) {
                    if (props.labelPosition === "side") rules += ' __b-7u9dhl';
                }
            }
            if (props.isInForm) rules += ' __h-1cwd7ud';
            else {
                if (props.labelPosition === "side") rules += ' __h-jyg4vb';
                else if (props.labelPosition === "top") rules += ' __h-375yi6';
            }
            if (props.labelPosition === "side") rules += ' __i-jyg4vb';
            else if (props.labelPosition === "top") rules += ' __i-fdenls';
            if (props.labelPosition === "side") rules += ' __j-5eez8j';
            else if (props.labelPosition === "top") rules += ' __j-xlaqir';
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
            rules += ' _1d';
            rules += ' _f-1x99dlob';
            rules += ' _fa';
            if (props.size === "XL") rules += ' -aqrvqh_k-j';
            else if (props.size === "L") rules += ' -aqrvqh_k-i';
            else if (props.size === "S") rules += ' -aqrvqh_k-h';
            else if (props.size === "XS") rules += ' -aqrvqh_k-g';
            else rules += ' -aqrvqh_k-f';
            rules += ' -_1inj1bc_i--prjw07';
            rules += ' je';
            rules += ' __R-yksgrp';
            return rules;
        }({
            isInForm: !!formContext,
            labelPosition: labelPosition,
            size: size
        }, props1.styles),
        children: ({ isDisabled: isDisabled, isInvalid: isInvalid })=>{
            return /*#__PURE__*/ (0, $fwzUK$reactjsxruntime.jsxs)((0, $fwzUK$reactjsxruntime.Fragment), {
                children: [
                    /*#__PURE__*/ (0, $fwzUK$reactjsxruntime.jsx)((0, $a0b996a550bb0891$exports.FieldLabel), {
                        isDisabled: isDisabled,
                        isRequired: isRequired,
                        size: size,
                        labelPosition: labelPosition,
                        labelAlign: labelAlign,
                        necessityIndicator: necessityIndicator,
                        contextualHelp: contextualHelp,
                        children: label
                    }),
                    /*#__PURE__*/ (0, $fwzUK$reactjsxruntime.jsxs)((0, $a0b996a550bb0891$exports.FieldGroup), {
                        role: "presentation",
                        isDisabled: isDisabled,
                        isInvalid: isInvalid,
                        size: size,
                        styles: function anonymous(props) {
                            let rules = " .";
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
                            rules += ' C-375tnm';
                            rules += ' D-375tnn';
                            rules += ' -_375tnm_C-I';
                            if (props.isStepperHidden) rules += ' -_375tnn_D-I';
                            else rules += ' -_375tnn_D-a';
                            return rules;
                        }({
                            size: size,
                            isStepperHidden: hideStepper
                        }),
                        children: [
                            /*#__PURE__*/ (0, $fwzUK$reactjsxruntime.jsx)((0, $fwzUK$reactariacomponents.InputContext).Consumer, {
                                children: (ctx)=>/*#__PURE__*/ (0, $fwzUK$reactjsxruntime.jsx)((0, $fwzUK$reactariacomponents.InputContext).Provider, {
                                        value: {
                                            ...ctx,
                                            ref: (0, $fwzUK$reactariautils.mergeRefs)(ctx?.ref, inputRef)
                                        },
                                        children: /*#__PURE__*/ (0, $fwzUK$reactjsxruntime.jsx)((0, $a0b996a550bb0891$exports.Input), {})
                                    })
                            }),
                            isInvalid && /*#__PURE__*/ (0, $fwzUK$reactjsxruntime.jsx)((0, $a0b996a550bb0891$exports.FieldErrorIcon), {
                                isDisabled: isDisabled
                            }),
                            !hideStepper && /*#__PURE__*/ (0, $fwzUK$reactjsxruntime.jsxs)("div", {
                                className: $a366ef8f467b1cb5$var$stepperContainerStyles({
                                    size: size
                                }),
                                children: [
                                    /*#__PURE__*/ (0, $fwzUK$reactjsxruntime.jsx)($a366ef8f467b1cb5$var$StepButton, {
                                        ref: decrementButtonRef,
                                        slot: "decrement",
                                        style: (renderProps)=>(0, $2061c83559b50a66$exports.pressScale)(decrementButtonRef)(renderProps),
                                        className: (renderProps)=>$a366ef8f467b1cb5$var$inputButton({
                                                ...renderProps,
                                                type: 'decrement',
                                                size: size
                                            }),
                                        children: /*#__PURE__*/ (0, $fwzUK$reactjsxruntime.jsx)((0, $84c37b7bd5c1374e$exports.default), {
                                            size: size,
                                            className: $a366ef8f467b1cb5$var$iconStyles({})
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $fwzUK$reactjsxruntime.jsx)($a366ef8f467b1cb5$var$StepButton, {
                                        ref: incrementButtonRef,
                                        slot: "increment",
                                        style: (renderProps)=>(0, $2061c83559b50a66$exports.pressScale)(incrementButtonRef)(renderProps),
                                        className: (renderProps)=>$a366ef8f467b1cb5$var$inputButton({
                                                ...renderProps,
                                                type: 'increment',
                                                size: size
                                            }),
                                        children: /*#__PURE__*/ (0, $fwzUK$reactjsxruntime.jsx)((0, $54686c7c3f031ee2$exports.default), {
                                            size: size,
                                            className: $a366ef8f467b1cb5$var$iconStyles({})
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    descriptionMessage && /*#__PURE__*/ (0, $fwzUK$reactjsxruntime.jsx)((0, $fwzUK$reactariacomponents.Text), {
                        slot: "description",
                        children: descriptionMessage
                    }),
                    /*#__PURE__*/ (0, $fwzUK$reactjsxruntime.jsx)((0, $a0b996a550bb0891$exports.HelpText), {
                        size: size,
                        isDisabled: isDisabled,
                        isInvalid: isInvalid,
                        description: descriptionMessage,
                        children: errorMessage
                    })
                ]
            });
        }
    });
});
const $a366ef8f467b1cb5$var$additionalButtonHTMLAttributes = new Set([
    'form',
    'formAction',
    'formEncType',
    'formMethod',
    'formNoValidate',
    'formTarget',
    'name',
    'value'
]);
let $a366ef8f467b1cb5$var$StepButton = /*#__PURE__*/ (0, $fwzUK$react.forwardRef)((props, ref)=>{
    [props, ref] = (0, $fwzUK$reactariacomponents.useContextProps)(props, ref, (0, $fwzUK$reactariacomponents.ButtonContext));
    let ctx = props;
    /**
   * Must use div for now because Safari pointer event bugs on disabled form elements.
   * Link https://bugs.webkit.org/show_bug.cgi?id=219188.
   */ let { buttonProps: buttonProps, isPressed: isPressed } = (0, $fwzUK$reactaria.useButton)({
        ...props,
        elementType: 'div'
    }, ref);
    let { focusProps: focusProps, isFocused: isFocused, isFocusVisible: isFocusVisible } = (0, $fwzUK$reactaria.useFocusRing)(props);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $fwzUK$reactaria.useHover)(props);
    let renderProps = $a366ef8f467b1cb5$var$useRenderProps({
        ...props,
        values: {
            isHovered: isHovered,
            isPressed: isPressed,
            isFocused: isFocused,
            isFocusVisible: isFocusVisible,
            isDisabled: props.isDisabled || false
        },
        defaultClassName: 'react-aria-Button'
    });
    return /*#__PURE__*/ (0, $fwzUK$reactjsxruntime.jsx)("div", {
        ...(0, $fwzUK$reactariautils.filterDOMProps)(props, {
            propNames: $a366ef8f467b1cb5$var$additionalButtonHTMLAttributes
        }),
        ...(0, $fwzUK$reactariautils.mergeProps)(buttonProps, focusProps, hoverProps),
        ...renderProps,
        ref: ref,
        slot: props.slot || undefined,
        "data-disabled": props.isDisabled || undefined,
        "data-pressed": ctx.isPressed || isPressed || undefined,
        "data-hovered": isHovered || undefined,
        "data-focused": isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined
    });
});
// replace from RAC
function $a366ef8f467b1cb5$var$useRenderProps(props) {
    let { className: className, style: style, children: children, defaultClassName: defaultClassName, defaultChildren: defaultChildren, defaultStyle: defaultStyle, values: values } = props;
    return (0, $fwzUK$react.useMemo)(()=>{
        let computedClassName;
        let computedStyle;
        let computedChildren;
        if (typeof className === 'function') computedClassName = className({
            ...values,
            defaultClassName: defaultClassName
        });
        else computedClassName = className;
        if (typeof style === 'function') computedStyle = style({
            ...values,
            defaultStyle: defaultStyle || {}
        });
        else computedStyle = style;
        if (typeof children === 'function') computedChildren = children({
            ...values,
            defaultChildren: defaultChildren
        });
        else if (children == null) computedChildren = defaultChildren;
        else computedChildren = children;
        return {
            className: computedClassName ?? defaultClassName,
            style: computedStyle || defaultStyle ? {
                ...defaultStyle,
                ...computedStyle
            } : undefined,
            children: computedChildren ?? defaultChildren,
            'data-rac': ''
        };
    }, [
        className,
        style,
        children,
        defaultClassName,
        defaultChildren,
        defaultStyle,
        values
    ]);
}


//# sourceMappingURL=NumberField.cjs.map
