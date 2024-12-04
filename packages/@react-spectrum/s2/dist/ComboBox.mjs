import "./ComboBox.css";
import {centerBaseline as $1f4b04be3f24aae3$export$9d7e2342a7e53afa} from "./CenterBaseline.mjs";
import {checkmark as $13afb0ea5f0ed767$export$292abbf31ed842a, description as $13afb0ea5f0ed767$export$6d59db4903f20f7d, Divider as $13afb0ea5f0ed767$export$2e0a83ec2e27ecbb, icon as $13afb0ea5f0ed767$export$1ca1ec8b29a4ce27, iconCenterWrapper as $13afb0ea5f0ed767$export$31d1842a0fd736e6, label as $13afb0ea5f0ed767$export$1237798dc640739a, menuitem as $13afb0ea5f0ed767$export$f68e44d881264486, section as $13afb0ea5f0ed767$export$fe2e36411d703b3d, sectionHeader as $13afb0ea5f0ed767$export$562e61a0817eb32e, sectionHeading as $13afb0ea5f0ed767$export$300ac6f106ef584d} from "./Menu.mjs";
import $81cf3d4588736e7d$export$2e2bcd8739ae039 from "./Checkmark.mjs";
import $4b69f02ec06b9226$export$2e2bcd8739ae039 from "./Chevron.mjs";
import {FieldErrorIcon as $9afd80978c252040$export$bda0d075e0e342c9, FieldGroup as $9afd80978c252040$export$f0fe469072bc6950, FieldLabel as $9afd80978c252040$export$1acdcf5a973a8414, HelpText as $9afd80978c252040$export$a67c0bc59081311a, Input as $9afd80978c252040$export$f5b8910cec6cf069} from "./Field.mjs";
import {FormContext as $9b916426527cebe7$export$c24727297075ec6a, useFormProps as $9b916426527cebe7$export$a6b5be5c6b451665} from "./Form.mjs";
import {HeaderContext as $8e847109a6ab556d$export$e0e4026c12a8bdbb, HeadingContext as $8e847109a6ab556d$export$d688439359537581, Text as $8e847109a6ab556d$export$5f1af8db9871e1d6, TextContext as $8e847109a6ab556d$export$9afb8bc826b033ea} from "./Content.mjs";
import {IconContext as $ac8c32e6775ddd1f$export$a49f528ae1a4d0ed} from "../icons/Icon.mjs";
import {menu as $b41c15d27fbaff7d$export$b1e5508a851be14d} from "./Picker.mjs";
import {PopoverBase as $88b746eba92c8d0d$export$fde1b04c590741a3} from "./Popover.mjs";
import {pressScale as $10ea7662e51a285b$export$56e8cba416805d8d} from "./pressScale.mjs";
import {useSpectrumContextProps as $5ce63c423902f47d$export$764f6146fadd77f7} from "../icons/useSpectrumContextProps.mjs";
import {jsx as $5rXoR$jsx, Fragment as $5rXoR$Fragment, jsxs as $5rXoR$jsxs} from "react/jsx-runtime";
import {ComboBox as $5rXoR$ComboBox, InputContext as $5rXoR$InputContext, Button as $5rXoR$Button, Provider as $5rXoR$Provider, ListBox as $5rXoR$ListBox, ListBoxItem as $5rXoR$ListBoxItem, ListBoxSection as $5rXoR$ListBoxSection} from "react-aria-components";
import {createContext as $5rXoR$createContext, forwardRef as $5rXoR$forwardRef, useRef as $5rXoR$useRef, useContext as $5rXoR$useContext, useImperativeHandle as $5rXoR$useImperativeHandle, useState as $5rXoR$useState, useCallback as $5rXoR$useCallback} from "react";
import {createFocusableRef as $5rXoR$createFocusableRef} from "@react-spectrum/utils";
import {useResizeObserver as $5rXoR$useResizeObserver, mergeRefs as $5rXoR$mergeRefs} from "@react-aria/utils";

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
















const $a2f262fac286a920$export$d414ccceff7063c3 = /*#__PURE__*/ (0, $5rXoR$createContext)(null);
const $a2f262fac286a920$var$inputButton = function anonymous(props) {
    let rules = " .";
    rules += ' _Zd';
    rules += ' _La';
    rules += ' _jb';
    rules += ' wf';
    rules += ' _vi';
    rules += ' _wi';
    rules += ' _xi';
    rules += ' _yi';
    rules += ' _1c';
    rules += ' _2d';
    if (props.size === "XL") rules += ' lU';
    else if (props.size === "L") rules += ' lM';
    else if (props.size === "M") rules += ' lI';
    else if (props.size === "S") rules += ' lE';
    if (props.size === "XL") rules += ' kU';
    else if (props.size === "L") rules += ' kM';
    else if (props.size === "M") rules += ' kI';
    else if (props.size === "S") rules += ' kE';
    rules += ' yF';
    rules += ' _bb';
    rules += ' _8-3t1x';
    rules += ' _Oag';
    rules += ' _Oa';
    rules += ' _Qa-375x7f';
    rules += ' _Q-375x7f';
    rules += ' _Raa';
    rules += ' _Ra';
    if (props.isDisabled) rules += ' ba_____B';
    else if (props.isOpen) rules += ' ba_____z';
    else if (props.isHovered) rules += ' ba_____z';
    else rules += ' ba_____x';
    if (props.isDisabled) rules += ' bg';
    else if (props.isOpen) rules += ' bh';
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
    return rules;
};
const $a2f262fac286a920$var$iconStyles = " . _8-3t1x R-3hn0u -rwx0fg_e-b";
let $a2f262fac286a920$var$InternalComboboxContext = /*#__PURE__*/ (0, $5rXoR$createContext)({
    size: 'M'
});
const $a2f262fac286a920$export$72b9695b8216309a = /*#__PURE__*/ (0, $5rXoR$forwardRef)(function ComboBox(props1, ref) {
    [props1, ref] = (0, $5ce63c423902f47d$export$764f6146fadd77f7)(props1, ref, $a2f262fac286a920$export$d414ccceff7063c3);
    let inputRef = (0, $5rXoR$useRef)(null);
    let domRef = (0, $5rXoR$useRef)(null);
    let buttonRef = (0, $5rXoR$useRef)(null);
    let formContext = (0, $5rXoR$useContext)((0, $9b916426527cebe7$export$c24727297075ec6a));
    props1 = (0, $9b916426527cebe7$export$a6b5be5c6b451665)(props1);
    let { direction: direction = 'bottom', align: align = 'start', shouldFlip: shouldFlip = true, menuWidth: menuWidth, label: label, description: descriptionMessage, errorMessage: errorMessage, children: children, items: items, size: size = 'M', labelPosition: labelPosition = 'top', labelAlign: labelAlign = 'start', necessityIndicator: necessityIndicator, UNSAFE_className: UNSAFE_className = '', UNSAFE_style: UNSAFE_style, ...pickerProps } = props1;
    // Expose imperative interface for ref
    (0, $5rXoR$useImperativeHandle)(ref, ()=>({
            ...(0, $5rXoR$createFocusableRef)(domRef, inputRef),
            select () {
                if (inputRef.current) inputRef.current.select();
            },
            getInputElement () {
                return inputRef.current;
            }
        }));
    // Better way to encode this into a style? need to account for flipping
    let menuOffset;
    if (size === 'S') menuOffset = 6;
    else if (size === 'M') menuOffset = 6;
    else if (size === 'L') menuOffset = 7;
    else menuOffset = 8;
    let triggerRef = (0, $5rXoR$useRef)(null);
    // Make menu width match input + button
    let [triggerWidth, setTriggerWidth] = (0, $5rXoR$useState)(null);
    let onResize = (0, $5rXoR$useCallback)(()=>{
        if (triggerRef.current) {
            let inputRect = triggerRef.current.getBoundingClientRect();
            let minX = inputRect.left;
            let maxX = inputRect.right;
            setTriggerWidth(maxX - minX + 'px');
        }
    }, [
        triggerRef,
        setTriggerWidth
    ]);
    (0, $5rXoR$useResizeObserver)({
        ref: triggerRef,
        onResize: onResize
    });
    return /*#__PURE__*/ (0, $5rXoR$jsx)((0, $5rXoR$ComboBox), {
        ...pickerProps,
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
        children: ({ isDisabled: isDisabled, isOpen: isOpen, isRequired: isRequired, isInvalid: isInvalid })=>/*#__PURE__*/ (0, $5rXoR$jsx)((0, $5rXoR$Fragment), {
                children: /*#__PURE__*/ (0, $5rXoR$jsxs)($a2f262fac286a920$var$InternalComboboxContext.Provider, {
                    value: {
                        size: size
                    },
                    children: [
                        /*#__PURE__*/ (0, $5rXoR$jsx)((0, $9afd80978c252040$export$1acdcf5a973a8414), {
                            isDisabled: isDisabled,
                            isRequired: isRequired,
                            size: size,
                            labelPosition: labelPosition,
                            labelAlign: labelAlign,
                            necessityIndicator: necessityIndicator,
                            contextualHelp: props1.contextualHelp,
                            children: label
                        }),
                        /*#__PURE__*/ (0, $5rXoR$jsxs)((0, $9afd80978c252040$export$f0fe469072bc6950), {
                            ref: triggerRef,
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
                                rules += ' -_375tnn_D--45az6c';
                                return rules;
                            }({
                                size: size
                            }),
                            children: [
                                /*#__PURE__*/ (0, $5rXoR$jsx)((0, $5rXoR$InputContext).Consumer, {
                                    children: (ctx)=>/*#__PURE__*/ (0, $5rXoR$jsx)((0, $5rXoR$InputContext).Provider, {
                                            value: {
                                                ...ctx,
                                                ref: (0, $5rXoR$mergeRefs)(ctx?.ref, inputRef)
                                            },
                                            children: /*#__PURE__*/ (0, $5rXoR$jsx)((0, $9afd80978c252040$export$f5b8910cec6cf069), {})
                                        })
                                }),
                                isInvalid && /*#__PURE__*/ (0, $5rXoR$jsx)((0, $9afd80978c252040$export$bda0d075e0e342c9), {
                                    isDisabled: isDisabled
                                }),
                                /*#__PURE__*/ (0, $5rXoR$jsx)((0, $5rXoR$Button), {
                                    ref: buttonRef,
                                    // Prevent press scale from sticking while ComboBox is open.
                                    // @ts-ignore
                                    isPressed: false,
                                    style: (renderProps)=>(0, $10ea7662e51a285b$export$56e8cba416805d8d)(buttonRef)(renderProps),
                                    className: (renderProps)=>$a2f262fac286a920$var$inputButton({
                                            ...renderProps,
                                            size: size,
                                            isOpen: isOpen
                                        }),
                                    children: /*#__PURE__*/ (0, $5rXoR$jsx)((0, $4b69f02ec06b9226$export$2e2bcd8739ae039), {
                                        size: size,
                                        className: $a2f262fac286a920$var$iconStyles
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, $5rXoR$jsx)((0, $9afd80978c252040$export$a67c0bc59081311a), {
                            size: size,
                            isDisabled: isDisabled,
                            isInvalid: isInvalid,
                            description: descriptionMessage,
                            children: errorMessage
                        }),
                        /*#__PURE__*/ (0, $5rXoR$jsx)((0, $88b746eba92c8d0d$export$fde1b04c590741a3), {
                            hideArrow: true,
                            triggerRef: triggerRef,
                            offset: menuOffset,
                            placement: `${direction} ${align}`,
                            shouldFlip: shouldFlip,
                            UNSAFE_style: {
                                width: menuWidth ? `${menuWidth}px` : undefined,
                                // manually subtract border as we can't set Popover to border-box, it causes the contents to spill out
                                '--trigger-width': `calc(${triggerWidth} - 2px)`
                            },
                            styles: " . q-1utmx2y l-1utmx2y",
                            children: /*#__PURE__*/ (0, $5rXoR$jsx)((0, $5rXoR$Provider), {
                                values: [
                                    [
                                        (0, $8e847109a6ab556d$export$e0e4026c12a8bdbb),
                                        {
                                            styles: (0, $13afb0ea5f0ed767$export$562e61a0817eb32e)({
                                                size: size
                                            })
                                        }
                                    ],
                                    [
                                        (0, $8e847109a6ab556d$export$d688439359537581),
                                        {
                                            styles: (0, $13afb0ea5f0ed767$export$300ac6f106ef584d)
                                        }
                                    ],
                                    [
                                        (0, $8e847109a6ab556d$export$9afb8bc826b033ea),
                                        {
                                            slots: {
                                                'description': {
                                                    styles: (0, $13afb0ea5f0ed767$export$6d59db4903f20f7d)({
                                                        size: size
                                                    })
                                                }
                                            }
                                        }
                                    ]
                                ],
                                children: /*#__PURE__*/ (0, $5rXoR$jsx)((0, $5rXoR$ListBox), {
                                    items: items,
                                    className: (0, $b41c15d27fbaff7d$export$b1e5508a851be14d)({
                                        size: size
                                    }),
                                    children: children
                                })
                            })
                        })
                    ]
                })
            })
    });
});
const $a2f262fac286a920$var$checkmarkIconSize = {
    S: 'XS',
    M: 'M',
    L: 'L',
    XL: 'XL'
};
function $a2f262fac286a920$export$b674b8ff01584ab1(props) {
    let ref = (0, $5rXoR$useRef)(null);
    let isLink = props.href != null;
    let { size: size } = (0, $5rXoR$useContext)($a2f262fac286a920$var$InternalComboboxContext);
    return /*#__PURE__*/ (0, $5rXoR$jsx)((0, $5rXoR$ListBoxItem), {
        ...props,
        ref: ref,
        textValue: props.textValue || (typeof props.children === 'string' ? props.children : undefined),
        style: (0, $10ea7662e51a285b$export$56e8cba416805d8d)(ref, props.UNSAFE_style),
        className: (renderProps)=>(props.UNSAFE_className || '') + (0, $13afb0ea5f0ed767$export$f68e44d881264486)({
                ...renderProps,
                size: size,
                isLink: isLink
            }, props.styles),
        children: (renderProps)=>{
            let { children: children } = props;
            return /*#__PURE__*/ (0, $5rXoR$jsx)((0, $5rXoR$Fragment), {
                children: /*#__PURE__*/ (0, $5rXoR$jsxs)((0, $5rXoR$Provider), {
                    values: [
                        [
                            (0, $ac8c32e6775ddd1f$export$a49f528ae1a4d0ed),
                            {
                                slots: {
                                    icon: {
                                        render: (0, $1f4b04be3f24aae3$export$9d7e2342a7e53afa)({
                                            slot: 'icon',
                                            styles: (0, $13afb0ea5f0ed767$export$31d1842a0fd736e6)
                                        }),
                                        styles: (0, $13afb0ea5f0ed767$export$1ca1ec8b29a4ce27)
                                    }
                                }
                            }
                        ],
                        [
                            (0, $8e847109a6ab556d$export$9afb8bc826b033ea),
                            {
                                slots: {
                                    label: {
                                        styles: (0, $13afb0ea5f0ed767$export$1237798dc640739a)({
                                            size: size
                                        })
                                    },
                                    description: {
                                        styles: (0, $13afb0ea5f0ed767$export$6d59db4903f20f7d)({
                                            ...renderProps,
                                            size: size
                                        })
                                    }
                                }
                            }
                        ]
                    ],
                    children: [
                        !isLink && /*#__PURE__*/ (0, $5rXoR$jsx)((0, $81cf3d4588736e7d$export$2e2bcd8739ae039), {
                            size: $a2f262fac286a920$var$checkmarkIconSize[size],
                            className: (0, $13afb0ea5f0ed767$export$292abbf31ed842a)({
                                ...renderProps,
                                size: size
                            })
                        }),
                        typeof children === 'string' ? /*#__PURE__*/ (0, $5rXoR$jsx)((0, $8e847109a6ab556d$export$5f1af8db9871e1d6), {
                            slot: "label",
                            children: children
                        }) : children
                    ]
                })
            });
        }
    });
}
function $a2f262fac286a920$export$5510125537491b61(props) {
    return /*#__PURE__*/ (0, $5rXoR$jsxs)((0, $5rXoR$Fragment), {
        children: [
            /*#__PURE__*/ (0, $5rXoR$jsx)((0, $5rXoR$ListBoxSection), {
                ...props,
                className: (0, $13afb0ea5f0ed767$export$fe2e36411d703b3d),
                children: props.children
            }),
            /*#__PURE__*/ (0, $5rXoR$jsx)((0, $13afb0ea5f0ed767$export$2e0a83ec2e27ecbb), {})
        ]
    });
}


export {$a2f262fac286a920$export$d414ccceff7063c3 as ComboBoxContext, $a2f262fac286a920$export$72b9695b8216309a as ComboBox, $a2f262fac286a920$export$b674b8ff01584ab1 as ComboBoxItem, $a2f262fac286a920$export$5510125537491b61 as ComboBoxSection};
//# sourceMappingURL=ComboBox.mjs.map
