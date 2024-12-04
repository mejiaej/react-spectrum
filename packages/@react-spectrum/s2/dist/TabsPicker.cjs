require("./TabsPicker.css");
var $e991cbcdf82ced71$exports = require("./CenterBaseline.cjs");
var $e741ea6b88ce4866$exports = require("./Menu.cjs");
var $dba2b18fc5727f9b$exports = require("./Checkmark.cjs");
var $1df9f1c9262ce5df$exports = require("./Chevron.cjs");
var $a0b996a550bb0891$exports = require("./Field.cjs");
var $6367bc87eb7d24ad$exports = require("./Content.cjs");
var $bde97c91243ed164$exports = require("../icons/Icon.cjs");
var $4526404114e78c80$exports = require("./intlStrings.cjs");
var $493371ef39bf7a55$exports = require("./Popover.cjs");
var $2061c83559b50a66$exports = require("./pressScale.cjs");
var $bfa4962d90c8af48$exports = require("./Form.cjs");
var $ac757a4c2bd72aee$exports = require("../icons/useSpectrumContextProps.cjs");
var $7pV4n$reactjsxruntime = require("react/jsx-runtime");
var $7pV4n$reactariacomponents = require("react-aria-components");
var $7pV4n$react = require("react");
var $7pV4n$reactspectrumutils = require("@react-spectrum/utils");
var $7pV4n$reactariai18n = require("@react-aria/i18n");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "Picker", () => $9d2c38978395d44a$export$ba25329847403e11);
$parcel$export(module.exports, "PickerItem", () => $9d2c38978395d44a$export$d601881f38163e28);
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
















const $9d2c38978395d44a$export$b72b8dade9393cd5 = /*#__PURE__*/ (0, $7pV4n$react.createContext)(null);
const $9d2c38978395d44a$var$inputButton = function anonymous(props) {
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
let $9d2c38978395d44a$export$b1e5508a851be14d = function anonymous(props) {
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
const $9d2c38978395d44a$var$valueStyles = " . _9-3t1x __vb __wb _ma _pb _Zd _1c kb";
const $9d2c38978395d44a$var$iconStyles = " . _8-3t1x R-3hn0u -rwx0fg_e-b";
let $9d2c38978395d44a$var$InsideSelectValueContext = /*#__PURE__*/ (0, $7pV4n$react.createContext)(false);
function $9d2c38978395d44a$var$Picker(props, ref) {
    let stringFormatter = (0, $7pV4n$reactariai18n.useLocalizedStringFormatter)((0, ($parcel$interopDefault($4526404114e78c80$exports))), '@react-spectrum/s2');
    [props, ref] = (0, $ac757a4c2bd72aee$exports.useSpectrumContextProps)(props, ref, $9d2c38978395d44a$export$b72b8dade9393cd5);
    let domRef = (0, $7pV4n$reactspectrumutils.useFocusableRef)(ref);
    props = (0, $bfa4962d90c8af48$exports.useFormProps)(props);
    let { direction: direction = 'bottom', align: align = 'start', shouldFlip: shouldFlip = true, children: children, items: items, placeholder: placeholder = stringFormatter.format('picker.placeholder'), density: density, ...pickerProps } = props;
    let isQuiet = true;
    const menuOffset = 6;
    const size = 'M';
    return /*#__PURE__*/ (0, $7pV4n$reactjsxruntime.jsx)((0, $7pV4n$reactariacomponents.Select), {
        ...pickerProps,
        placeholder: placeholder,
        children: ({ isOpen: isOpen })=>/*#__PURE__*/ (0, $7pV4n$reactjsxruntime.jsxs)((0, $7pV4n$reactjsxruntime.Fragment), {
                children: [
                    /*#__PURE__*/ (0, $7pV4n$reactjsxruntime.jsx)((0, $a0b996a550bb0891$exports.FieldLabel), {
                        isQuiet: isQuiet
                    }),
                    /*#__PURE__*/ (0, $7pV4n$reactjsxruntime.jsxs)((0, $7pV4n$reactariacomponents.Button), {
                        ref: domRef,
                        style: (renderProps)=>(0, $2061c83559b50a66$exports.pressScale)(domRef)(renderProps),
                        // Prevent press scale from sticking while Picker is open.
                        // @ts-ignore
                        isPressed: false,
                        className: (renderProps)=>$9d2c38978395d44a$var$inputButton({
                                ...renderProps,
                                size: 'M',
                                isOpen: isOpen,
                                isQuiet: isQuiet,
                                density: density
                            }),
                        children: [
                            /*#__PURE__*/ (0, $7pV4n$reactjsxruntime.jsx)((0, $7pV4n$reactariacomponents.SelectValue), {
                                className: $9d2c38978395d44a$var$valueStyles + ' ' + "-u6zm92",
                                children: ({ defaultChildren: defaultChildren })=>{
                                    return /*#__PURE__*/ (0, $7pV4n$reactjsxruntime.jsx)((0, $7pV4n$reactariacomponents.Provider), {
                                        values: [
                                            [
                                                (0, $bde97c91243ed164$exports.IconContext),
                                                {
                                                    slots: {
                                                        icon: {
                                                            render: (0, $e991cbcdf82ced71$exports.centerBaseline)({
                                                                slot: 'icon',
                                                                styles: (0, $e741ea6b88ce4866$exports.iconCenterWrapper)
                                                            }),
                                                            styles: (0, $e741ea6b88ce4866$exports.icon)
                                                        }
                                                    }
                                                }
                                            ],
                                            [
                                                (0, $6367bc87eb7d24ad$exports.TextContext),
                                                {
                                                    slots: {
                                                        // Default slot is useful when converting other collections to PickerItems.
                                                        [(0, $7pV4n$reactariacomponents.DEFAULT_SLOT)]: {
                                                            styles: " . _Za _9-3t1y __vb __wb _ma _pb"
                                                        }
                                                    }
                                                }
                                            ],
                                            [
                                                $9d2c38978395d44a$var$InsideSelectValueContext,
                                                true
                                            ]
                                        ],
                                        children: defaultChildren
                                    });
                                }
                            }),
                            /*#__PURE__*/ (0, $7pV4n$reactjsxruntime.jsx)((0, $1df9f1c9262ce5df$exports.default), {
                                size: size,
                                className: $9d2c38978395d44a$var$iconStyles
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $7pV4n$reactjsxruntime.jsx)((0, $493371ef39bf7a55$exports.PopoverBase), {
                        hideArrow: true,
                        offset: menuOffset,
                        placement: `${direction} ${align}`,
                        shouldFlip: shouldFlip,
                        styles: " . y-375tp4 q___u l-13f72lm -_375tp4_y-M",
                        children: /*#__PURE__*/ (0, $7pV4n$reactjsxruntime.jsx)((0, $7pV4n$reactariacomponents.Provider), {
                            values: [
                                [
                                    (0, $6367bc87eb7d24ad$exports.HeaderContext),
                                    {
                                        styles: (0, $e741ea6b88ce4866$exports.sectionHeader)({
                                            size: size
                                        })
                                    }
                                ],
                                [
                                    (0, $6367bc87eb7d24ad$exports.HeadingContext),
                                    {
                                        styles: (0, $e741ea6b88ce4866$exports.sectionHeading)
                                    }
                                ],
                                [
                                    (0, $6367bc87eb7d24ad$exports.TextContext),
                                    {
                                        slots: {
                                            description: {
                                                styles: (0, $e741ea6b88ce4866$exports.description)({
                                                    size: size
                                                })
                                            }
                                        }
                                    }
                                ]
                            ],
                            children: /*#__PURE__*/ (0, $7pV4n$reactjsxruntime.jsx)((0, $7pV4n$reactariacomponents.ListBox), {
                                items: items,
                                className: $9d2c38978395d44a$export$b1e5508a851be14d,
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
 */ let $9d2c38978395d44a$export$ba25329847403e11 = /*#__PURE__*/ (0, $7pV4n$react.forwardRef)($9d2c38978395d44a$var$Picker);
function $9d2c38978395d44a$export$d601881f38163e28(props) {
    let ref = (0, $7pV4n$react.useRef)(null);
    let isLink = props.href != null;
    const size = 'M';
    return /*#__PURE__*/ (0, $7pV4n$reactjsxruntime.jsx)((0, $7pV4n$reactariacomponents.ListBoxItem), {
        ...props,
        ref: ref,
        textValue: props.textValue || (typeof props.children === 'string' ? props.children : undefined),
        style: (0, $2061c83559b50a66$exports.pressScale)(ref, props.UNSAFE_style),
        className: (renderProps)=>(props.UNSAFE_className || '') + (0, $e741ea6b88ce4866$exports.menuitem)({
                ...renderProps,
                size: size,
                isLink: isLink
            }, props.styles),
        children: (renderProps)=>{
            let { children: children } = props;
            return /*#__PURE__*/ (0, $7pV4n$reactjsxruntime.jsx)($9d2c38978395d44a$var$DefaultProvider, {
                context: (0, $bde97c91243ed164$exports.IconContext),
                value: {
                    slots: {
                        icon: {
                            render: (0, $e991cbcdf82ced71$exports.centerBaseline)({
                                slot: 'icon',
                                styles: (0, $e741ea6b88ce4866$exports.iconCenterWrapper)
                            }),
                            styles: (0, $e741ea6b88ce4866$exports.icon)
                        }
                    }
                },
                children: /*#__PURE__*/ (0, $7pV4n$reactjsxruntime.jsxs)($9d2c38978395d44a$var$DefaultProvider, {
                    context: (0, $6367bc87eb7d24ad$exports.TextContext),
                    value: {
                        slots: {
                            [(0, $7pV4n$reactariacomponents.DEFAULT_SLOT)]: {
                                styles: (0, $e741ea6b88ce4866$exports.label)({
                                    size: size
                                })
                            }
                        }
                    },
                    children: [
                        !isLink && /*#__PURE__*/ (0, $7pV4n$reactjsxruntime.jsx)((0, $dba2b18fc5727f9b$exports.default), {
                            size: size,
                            className: (0, $e741ea6b88ce4866$exports.checkmark)({
                                ...renderProps,
                                size: size
                            })
                        }),
                        typeof children === 'string' ? /*#__PURE__*/ (0, $7pV4n$reactjsxruntime.jsx)((0, $6367bc87eb7d24ad$exports.Text), {
                            children: children
                        }) : children
                    ]
                })
            });
        }
    });
}
// A Context.Provider that only sets a value if not inside SelectValue.
function $9d2c38978395d44a$var$DefaultProvider({ context: context, value: value, children: children }) {
    let inSelectValue = (0, $7pV4n$react.useContext)($9d2c38978395d44a$var$InsideSelectValueContext);
    if (inSelectValue) return children;
    return /*#__PURE__*/ (0, $7pV4n$reactjsxruntime.jsx)(context.Provider, {
        value: value,
        children: children
    });
}


//# sourceMappingURL=TabsPicker.cjs.map
