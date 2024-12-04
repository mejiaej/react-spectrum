import "./TabsPicker.css";
import {centerBaseline as $1f4b04be3f24aae3$export$9d7e2342a7e53afa} from "./CenterBaseline.mjs";
import {checkmark as $13afb0ea5f0ed767$export$292abbf31ed842a, description as $13afb0ea5f0ed767$export$6d59db4903f20f7d, icon as $13afb0ea5f0ed767$export$1ca1ec8b29a4ce27, iconCenterWrapper as $13afb0ea5f0ed767$export$31d1842a0fd736e6, label as $13afb0ea5f0ed767$export$1237798dc640739a, menuitem as $13afb0ea5f0ed767$export$f68e44d881264486, sectionHeader as $13afb0ea5f0ed767$export$562e61a0817eb32e, sectionHeading as $13afb0ea5f0ed767$export$300ac6f106ef584d} from "./Menu.mjs";
import $81cf3d4588736e7d$export$2e2bcd8739ae039 from "./Checkmark.mjs";
import $4b69f02ec06b9226$export$2e2bcd8739ae039 from "./Chevron.mjs";
import {FieldLabel as $9afd80978c252040$export$1acdcf5a973a8414} from "./Field.mjs";
import {HeaderContext as $8e847109a6ab556d$export$e0e4026c12a8bdbb, HeadingContext as $8e847109a6ab556d$export$d688439359537581, Text as $8e847109a6ab556d$export$5f1af8db9871e1d6, TextContext as $8e847109a6ab556d$export$9afb8bc826b033ea} from "./Content.mjs";
import {IconContext as $ac8c32e6775ddd1f$export$a49f528ae1a4d0ed} from "../icons/Icon.mjs";
import $vecDw$intlStringsmjs from "./intlStrings.mjs";
import {PopoverBase as $88b746eba92c8d0d$export$fde1b04c590741a3} from "./Popover.mjs";
import {pressScale as $10ea7662e51a285b$export$56e8cba416805d8d} from "./pressScale.mjs";
import {useFormProps as $9b916426527cebe7$export$a6b5be5c6b451665} from "./Form.mjs";
import {useSpectrumContextProps as $5ce63c423902f47d$export$764f6146fadd77f7} from "../icons/useSpectrumContextProps.mjs";
import {jsx as $vecDw$jsx, jsxs as $vecDw$jsxs, Fragment as $vecDw$Fragment} from "react/jsx-runtime";
import {Select as $vecDw$Select, Button as $vecDw$Button, SelectValue as $vecDw$SelectValue, Provider as $vecDw$Provider, DEFAULT_SLOT as $vecDw$DEFAULT_SLOT, ListBox as $vecDw$ListBox, ListBoxItem as $vecDw$ListBoxItem} from "react-aria-components";
import {createContext as $vecDw$createContext, forwardRef as $vecDw$forwardRef, useRef as $vecDw$useRef, useContext as $vecDw$useContext} from "react";
import {useFocusableRef as $vecDw$useFocusableRef} from "@react-spectrum/utils";
import {useLocalizedStringFormatter as $vecDw$useLocalizedStringFormatter} from "@react-aria/i18n";


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
















const $0067ea932a992b6a$export$b72b8dade9393cd5 = /*#__PURE__*/ (0, $vecDw$createContext)(null);
const $0067ea932a992b6a$var$inputButton = function anonymous(props) {
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
    rules += ' Uc';
    rules += ' _c-bc1l9oh';
    rules += ' _c-1uotwbwg';
    rules += ' _c-eo0c6sf';
    rules += ' _c-enzzrge';
    rules += ' _c-enzykdd';
    rules += ' _c-enzwzjc';
    rules += ' _c-enzrfpb';
    rules += ' _ca';
    rules += ' _dbf';
    rules += ' _de';
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
    rules += ' _Zd';
    rules += ' _ja';
    rules += ' wf';
    rules += ' _vb';
    rules += ' _wb';
    rules += ' _xb';
    rules += ' _yb';
    rules += ' _1c';
    rules += ' _Oa';
    rules += ' _Q-375x7f';
    rules += ' _Ra';
    rules += ' jbH';
    rules += ' jG';
    rules += ' C-375tnm';
    rules += ' D-375tnn';
    rules += ' ba';
    if (props.isQuiet) rules += ' rd';
    rules += ' __R-yksgrp';
    if (props.density === "compact") rules += ' kU';
    else rules += ' k_a';
    rules += ' __na';
    rules += ' -_375tnm_C-a';
    rules += ' -_375tnn_D-a';
    return rules;
};
let $0067ea932a992b6a$export$b1e5508a851be14d = function anonymous(props) {
    let rules = " .";
    rules += ' _La';
    rules += ' _Zf';
    rules += ' __h-1kgdida';
    rules += ' __na';
    rules += ' p-17zqamw';
    rules += ' __va';
    rules += ' __wa';
    rules += ' Ed';
    rules += ' Fd';
    rules += ' Cd';
    rules += ' Dd';
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
    return rules;
};
const $0067ea932a992b6a$var$valueStyles = " . _9-3t1x __vb __wb _ma _pb _Zd _1c kb";
const $0067ea932a992b6a$var$iconStyles = " . _8-3t1x R-3hn0u -rwx0fg_e-b";
let $0067ea932a992b6a$var$InsideSelectValueContext = /*#__PURE__*/ (0, $vecDw$createContext)(false);
function $0067ea932a992b6a$var$Picker(props, ref) {
    let stringFormatter = (0, $vecDw$useLocalizedStringFormatter)((0, ($parcel$interopDefault($vecDw$intlStringsmjs))), '@react-spectrum/s2');
    [props, ref] = (0, $5ce63c423902f47d$export$764f6146fadd77f7)(props, ref, $0067ea932a992b6a$export$b72b8dade9393cd5);
    let domRef = (0, $vecDw$useFocusableRef)(ref);
    props = (0, $9b916426527cebe7$export$a6b5be5c6b451665)(props);
    let { direction: direction = 'bottom', align: align = 'start', shouldFlip: shouldFlip = true, children: children, items: items, placeholder: placeholder = stringFormatter.format('picker.placeholder'), density: density, ...pickerProps } = props;
    let isQuiet = true;
    const menuOffset = 6;
    const size = 'M';
    return /*#__PURE__*/ (0, $vecDw$jsx)((0, $vecDw$Select), {
        ...pickerProps,
        placeholder: placeholder,
        children: ({ isOpen: isOpen })=>/*#__PURE__*/ (0, $vecDw$jsxs)((0, $vecDw$Fragment), {
                children: [
                    /*#__PURE__*/ (0, $vecDw$jsx)((0, $9afd80978c252040$export$1acdcf5a973a8414), {
                        isQuiet: isQuiet
                    }),
                    /*#__PURE__*/ (0, $vecDw$jsxs)((0, $vecDw$Button), {
                        ref: domRef,
                        style: (renderProps)=>(0, $10ea7662e51a285b$export$56e8cba416805d8d)(domRef)(renderProps),
                        // Prevent press scale from sticking while Picker is open.
                        // @ts-ignore
                        isPressed: false,
                        className: (renderProps)=>$0067ea932a992b6a$var$inputButton({
                                ...renderProps,
                                size: 'M',
                                isOpen: isOpen,
                                isQuiet: isQuiet,
                                density: density
                            }),
                        children: [
                            /*#__PURE__*/ (0, $vecDw$jsx)((0, $vecDw$SelectValue), {
                                className: $0067ea932a992b6a$var$valueStyles + ' ' + "-u6zm92",
                                children: ({ defaultChildren: defaultChildren })=>{
                                    return /*#__PURE__*/ (0, $vecDw$jsx)((0, $vecDw$Provider), {
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
                                                        // Default slot is useful when converting other collections to PickerItems.
                                                        [(0, $vecDw$DEFAULT_SLOT)]: {
                                                            styles: " . _Za _9-3t1y __vb __wb _ma _pb"
                                                        }
                                                    }
                                                }
                                            ],
                                            [
                                                $0067ea932a992b6a$var$InsideSelectValueContext,
                                                true
                                            ]
                                        ],
                                        children: defaultChildren
                                    });
                                }
                            }),
                            /*#__PURE__*/ (0, $vecDw$jsx)((0, $4b69f02ec06b9226$export$2e2bcd8739ae039), {
                                size: size,
                                className: $0067ea932a992b6a$var$iconStyles
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $vecDw$jsx)((0, $88b746eba92c8d0d$export$fde1b04c590741a3), {
                        hideArrow: true,
                        offset: menuOffset,
                        placement: `${direction} ${align}`,
                        shouldFlip: shouldFlip,
                        styles: " . y-375tp4 q___u l-13f72lm -_375tp4_y-M",
                        children: /*#__PURE__*/ (0, $vecDw$jsx)((0, $vecDw$Provider), {
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
                                            description: {
                                                styles: (0, $13afb0ea5f0ed767$export$6d59db4903f20f7d)({
                                                    size: size
                                                })
                                            }
                                        }
                                    }
                                ]
                            ],
                            children: /*#__PURE__*/ (0, $vecDw$jsx)((0, $vecDw$ListBox), {
                                items: items,
                                className: $0067ea932a992b6a$export$b1e5508a851be14d,
                                children: children
                            })
                        })
                    })
                ]
            })
    });
}
/**
 * Pickers allow users to choose a single option from a collapsible list of options when space is limited.
 */ let $0067ea932a992b6a$export$ba25329847403e11 = /*#__PURE__*/ (0, $vecDw$forwardRef)($0067ea932a992b6a$var$Picker);
function $0067ea932a992b6a$export$d601881f38163e28(props) {
    let ref = (0, $vecDw$useRef)(null);
    let isLink = props.href != null;
    const size = 'M';
    return /*#__PURE__*/ (0, $vecDw$jsx)((0, $vecDw$ListBoxItem), {
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
            return /*#__PURE__*/ (0, $vecDw$jsx)($0067ea932a992b6a$var$DefaultProvider, {
                context: (0, $ac8c32e6775ddd1f$export$a49f528ae1a4d0ed),
                value: {
                    slots: {
                        icon: {
                            render: (0, $1f4b04be3f24aae3$export$9d7e2342a7e53afa)({
                                slot: 'icon',
                                styles: (0, $13afb0ea5f0ed767$export$31d1842a0fd736e6)
                            }),
                            styles: (0, $13afb0ea5f0ed767$export$1ca1ec8b29a4ce27)
                        }
                    }
                },
                children: /*#__PURE__*/ (0, $vecDw$jsxs)($0067ea932a992b6a$var$DefaultProvider, {
                    context: (0, $8e847109a6ab556d$export$9afb8bc826b033ea),
                    value: {
                        slots: {
                            [(0, $vecDw$DEFAULT_SLOT)]: {
                                styles: (0, $13afb0ea5f0ed767$export$1237798dc640739a)({
                                    size: size
                                })
                            }
                        }
                    },
                    children: [
                        !isLink && /*#__PURE__*/ (0, $vecDw$jsx)((0, $81cf3d4588736e7d$export$2e2bcd8739ae039), {
                            size: size,
                            className: (0, $13afb0ea5f0ed767$export$292abbf31ed842a)({
                                ...renderProps,
                                size: size
                            })
                        }),
                        typeof children === 'string' ? /*#__PURE__*/ (0, $vecDw$jsx)((0, $8e847109a6ab556d$export$5f1af8db9871e1d6), {
                            children: children
                        }) : children
                    ]
                })
            });
        }
    });
}
// A Context.Provider that only sets a value if not inside SelectValue.
function $0067ea932a992b6a$var$DefaultProvider({ context: context, value: value, children: children }) {
    let inSelectValue = (0, $vecDw$useContext)($0067ea932a992b6a$var$InsideSelectValueContext);
    if (inSelectValue) return children;
    return /*#__PURE__*/ (0, $vecDw$jsx)(context.Provider, {
        value: value,
        children: children
    });
}


export {$0067ea932a992b6a$export$b72b8dade9393cd5 as PickerContext, $0067ea932a992b6a$export$b1e5508a851be14d as menu, $0067ea932a992b6a$export$ba25329847403e11 as Picker, $0067ea932a992b6a$export$d601881f38163e28 as PickerItem};
//# sourceMappingURL=TabsPicker.mjs.map
