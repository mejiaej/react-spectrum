require("./Picker.css");
var $e991cbcdf82ced71$exports = require("./CenterBaseline.cjs");
var $e741ea6b88ce4866$exports = require("./Menu.cjs");
var $dba2b18fc5727f9b$exports = require("./Checkmark.cjs");
var $1df9f1c9262ce5df$exports = require("./Chevron.cjs");
var $a0b996a550bb0891$exports = require("./Field.cjs");
var $bfa4962d90c8af48$exports = require("./Form.cjs");
var $6367bc87eb7d24ad$exports = require("./Content.cjs");
var $bde97c91243ed164$exports = require("../icons/Icon.cjs");
var $4526404114e78c80$exports = require("./intlStrings.cjs");
var $493371ef39bf7a55$exports = require("./Popover.cjs");
var $2061c83559b50a66$exports = require("./pressScale.cjs");
var $ac757a4c2bd72aee$exports = require("../icons/useSpectrumContextProps.cjs");
var $ceqeb$reactjsxruntime = require("react/jsx-runtime");
var $ceqeb$reactariacomponents = require("react-aria-components");
var $ceqeb$react = require("react");
var $ceqeb$reactspectrumutils = require("@react-spectrum/utils");
var $ceqeb$reactariai18n = require("@react-aria/i18n");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "PickerContext", () => $b9c30139cd63c62a$export$b72b8dade9393cd5);
$parcel$export(module.exports, "menu", () => $b9c30139cd63c62a$export$b1e5508a851be14d);
$parcel$export(module.exports, "Picker", () => $b9c30139cd63c62a$export$ba25329847403e11);
$parcel$export(module.exports, "PickerItem", () => $b9c30139cd63c62a$export$d601881f38163e28);
$parcel$export(module.exports, "PickerSection", () => $b9c30139cd63c62a$export$a340772aca6155cd);
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
















const $b9c30139cd63c62a$export$b72b8dade9393cd5 = /*#__PURE__*/ (0, $ceqeb$react.createContext)(null);
const $b9c30139cd63c62a$var$inputButton = function anonymous(props) {
    let rules = " .";
    if (props.isQuiet) rules += ' _La';
    else if (props.isFocusVisible) rules += ' _Lb';
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
    rules += ' _Zd';
    rules += ' _ja';
    rules += ' waa';
    rules += ' wf';
    if (props.isDisabled) rules += ' ca_____B';
    else rules += ' ca_____x';
    rules += ' _vh';
    rules += ' _wh';
    rules += ' _xh';
    rules += ' _yh';
    rules += ' _1c';
    rules += ' k-375toq';
    rules += ' _Oa';
    rules += ' _Q-375x7f';
    rules += ' _Ra';
    if (props.isQuiet) {
        rules += ' jbH';
        rules += ' jG';
    } else rules += ' jF';
    rules += ' C-375tnm';
    rules += ' D-375tnn';
    if (props.isQuiet) rules += ' ba';
    else if (props.isDisabled) rules += ' bg';
    else if (props.isOpen) rules += ' bh';
    else {
        if (props.isPressed) rules += ' bh';
        else if (props.isFocusVisible) rules += ' bh';
        else if (props.isHovered) rules += ' bh';
        else rules += ' bg';
    }
    if (props.isQuiet) rules += ' rd';
    rules += ' __R-yksgrp';
    if (props.isQuiet) rules += ' -_375tnm_C-a';
    else rules += ' -_375tnm_C-I';
    if (props.isQuiet) rules += ' -_375tnn_D-a';
    else rules += ' -_375tnn_D-I';
    if (props.size === "XL") rules += ' -_375toq_k-j';
    else if (props.size === "L") rules += ' -_375toq_k-i';
    else if (props.size === "S") rules += ' -_375toq_k-h';
    else if (props.size === "XS") rules += ' -_375toq_k-g';
    else rules += ' -_375toq_k-f';
    return rules;
};
const $b9c30139cd63c62a$var$quietFocusLine = " . lb k-375zlr Ua Za _vf _wf _xf _yf bx ba_____z";
let $b9c30139cd63c62a$export$b1e5508a851be14d = function anonymous(props) {
    let rules = " .";
    rules += ' _La';
    rules += ' _Zf';
    if (props.size === "XL") rules += ' __h-358ibk';
    else if (props.size === "L") rules += ' __h-1w0s9l0';
    else if (props.size === "M") rules += ' __h-1kgdida';
    else if (props.size === "S") rules += ' __h-17i5a9u';
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
const $b9c30139cd63c62a$var$invalidBorder = function anonymous(props) {
    let rules = " .";
    rules += ' Ua';
    rules += ' Xa';
    rules += ' Ya';
    rules += ' Za';
    rules += ' _aa';
    rules += ' __Ba';
    rules += ' _vh';
    rules += ' _wh';
    rules += ' _xh';
    rules += ' _yh';
    rules += ' wa';
    rules += ' uc';
    rules += ' vc';
    rules += ' sc';
    rules += ' tc';
    if (props.isPressed) rules += ' cQ';
    else if (props.isFocusVisible) rules += ' cP';
    else if (props.isHovered) rules += ' cP';
    else rules += ' cO';
    rules += ' _Oa';
    rules += ' _Q-375x7f';
    rules += ' _Ra';
    return rules;
};
const $b9c30139cd63c62a$var$valueStyles = function anonymous(props) {
    let rules = " .";
    if (props.isQuiet) rules += ' _9-3t1x';
    else rules += ' _9-3t1y';
    rules += ' __vb';
    rules += ' __wb';
    rules += ' _ma';
    rules += ' _pb';
    rules += ' _Zd';
    rules += ' _1c';
    return rules;
};
const $b9c30139cd63c62a$var$iconStyles = " . _8-3t1x R-3hn0u -rwx0fg_e-b";
let $b9c30139cd63c62a$var$InternalPickerContext = /*#__PURE__*/ (0, $ceqeb$react.createContext)({
    size: 'M'
});
let $b9c30139cd63c62a$var$InsideSelectValueContext = /*#__PURE__*/ (0, $ceqeb$react.createContext)(false);
const $b9c30139cd63c62a$export$ba25329847403e11 = /*#__PURE__*/ (0, $ceqeb$react.forwardRef)(function Picker(props1, ref) {
    let stringFormatter = (0, $ceqeb$reactariai18n.useLocalizedStringFormatter)((0, ($parcel$interopDefault($4526404114e78c80$exports))), '@react-spectrum/s2');
    [props1, ref] = (0, $ac757a4c2bd72aee$exports.useSpectrumContextProps)(props1, ref, $b9c30139cd63c62a$export$b72b8dade9393cd5);
    let domRef = (0, $ceqeb$reactspectrumutils.useFocusableRef)(ref);
    let formContext = (0, $ceqeb$react.useContext)((0, $bfa4962d90c8af48$exports.FormContext));
    props1 = (0, $bfa4962d90c8af48$exports.useFormProps)(props1);
    let { direction: direction = 'bottom', align: align = 'start', shouldFlip: shouldFlip = true, menuWidth: menuWidth, label: label, description: descriptionMessage, errorMessage: errorMessage, children: children, items: items, size: size = 'M', labelPosition: labelPosition = 'top', labelAlign: labelAlign = 'start', necessityIndicator: necessityIndicator, UNSAFE_className: UNSAFE_className = '', UNSAFE_style: UNSAFE_style, placeholder: placeholder = stringFormatter.format('picker.placeholder'), isQuiet: isQuiet, ...pickerProps } = props1;
    // Better way to encode this into a style? need to account for flipping
    let menuOffset;
    if (size === 'S') menuOffset = 6;
    else if (size === 'M') menuOffset = 6;
    else if (size === 'L') menuOffset = 7;
    else menuOffset = 8;
    return /*#__PURE__*/ (0, $ceqeb$reactjsxruntime.jsx)((0, $ceqeb$reactariacomponents.Select), {
        ...pickerProps,
        placeholder: placeholder,
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
        children: ({ isDisabled: isDisabled, isOpen: isOpen, isFocusVisible: isFocusVisible, isInvalid: isInvalid, isRequired: isRequired })=>/*#__PURE__*/ (0, $ceqeb$reactjsxruntime.jsx)((0, $ceqeb$reactjsxruntime.Fragment), {
                children: /*#__PURE__*/ (0, $ceqeb$reactjsxruntime.jsxs)($b9c30139cd63c62a$var$InternalPickerContext.Provider, {
                    value: {
                        size: size
                    },
                    children: [
                        /*#__PURE__*/ (0, $ceqeb$reactjsxruntime.jsx)((0, $a0b996a550bb0891$exports.FieldLabel), {
                            isDisabled: isDisabled,
                            isRequired: isRequired,
                            size: size,
                            labelPosition: labelPosition,
                            labelAlign: labelAlign,
                            isQuiet: isQuiet,
                            necessityIndicator: necessityIndicator,
                            contextualHelp: props1.contextualHelp,
                            children: label
                        }),
                        /*#__PURE__*/ (0, $ceqeb$reactjsxruntime.jsx)((0, $ceqeb$reactariacomponents.Button), {
                            ref: domRef,
                            style: (renderProps)=>(0, $2061c83559b50a66$exports.pressScale)(domRef)(renderProps),
                            // Prevent press scale from sticking while Picker is open.
                            // @ts-ignore
                            isPressed: false,
                            className: (renderProps)=>$b9c30139cd63c62a$var$inputButton({
                                    ...renderProps,
                                    size: size,
                                    isOpen: isOpen,
                                    isQuiet: isQuiet
                                }),
                            children: (renderProps)=>/*#__PURE__*/ (0, $ceqeb$reactjsxruntime.jsxs)((0, $ceqeb$reactjsxruntime.Fragment), {
                                    children: [
                                        /*#__PURE__*/ (0, $ceqeb$reactjsxruntime.jsx)((0, $ceqeb$reactariacomponents.SelectValue), {
                                            className: $b9c30139cd63c62a$var$valueStyles({
                                                isQuiet: isQuiet
                                            }) + ' ' + "-u6zm92",
                                            children: ({ defaultChildren: defaultChildren })=>{
                                                return /*#__PURE__*/ (0, $ceqeb$reactjsxruntime.jsx)((0, $ceqeb$reactariacomponents.Provider), {
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
                                                                    description: {},
                                                                    label: {
                                                                        styles: " . _Za _9-3t1y __vb __wb _ma _pb"
                                                                    }
                                                                }
                                                            }
                                                        ],
                                                        [
                                                            $b9c30139cd63c62a$var$InsideSelectValueContext,
                                                            true
                                                        ]
                                                    ],
                                                    children: defaultChildren
                                                });
                                            }
                                        }),
                                        isInvalid && /*#__PURE__*/ (0, $ceqeb$reactjsxruntime.jsx)((0, $a0b996a550bb0891$exports.FieldErrorIcon), {
                                            isDisabled: isDisabled
                                        }),
                                        /*#__PURE__*/ (0, $ceqeb$reactjsxruntime.jsx)((0, $1df9f1c9262ce5df$exports.default), {
                                            size: size,
                                            className: $b9c30139cd63c62a$var$iconStyles
                                        }),
                                        isFocusVisible && isQuiet && /*#__PURE__*/ (0, $ceqeb$reactjsxruntime.jsx)("span", {
                                            className: $b9c30139cd63c62a$var$quietFocusLine
                                        }),
                                        isInvalid && !isDisabled && !isQuiet && // @ts-ignore known limitation detecting functions from the theme
                                        /*#__PURE__*/ (0, $ceqeb$reactjsxruntime.jsx)("div", {
                                            className: $b9c30139cd63c62a$var$invalidBorder({
                                                ...renderProps,
                                                size: size
                                            })
                                        })
                                    ]
                                })
                        }),
                        /*#__PURE__*/ (0, $ceqeb$reactjsxruntime.jsx)((0, $a0b996a550bb0891$exports.HelpText), {
                            size: size,
                            isDisabled: isDisabled,
                            isInvalid: isInvalid,
                            description: descriptionMessage,
                            children: errorMessage
                        }),
                        /*#__PURE__*/ (0, $ceqeb$reactjsxruntime.jsx)((0, $493371ef39bf7a55$exports.PopoverBase), {
                            hideArrow: true,
                            offset: menuOffset,
                            placement: `${direction} ${align}`,
                            shouldFlip: shouldFlip,
                            UNSAFE_style: {
                                width: menuWidth && !isQuiet ? `${menuWidth}px` : undefined
                            },
                            styles: function anonymous(props) {
                                let rules = " .";
                                rules += ' y-375tp4';
                                if (props.isQuiet) rules += ' q___u';
                                else rules += ' q-1utmx2y';
                                if (props.isQuiet) rules += ' l-13f72lm';
                                else rules += ' l-1utmx2y';
                                if (props.isQuiet) rules += ' -_375tp4_y-M';
                                return rules;
                            }(props1),
                            children: /*#__PURE__*/ (0, $ceqeb$reactjsxruntime.jsx)((0, $ceqeb$reactariacomponents.Provider), {
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
                                children: /*#__PURE__*/ (0, $ceqeb$reactjsxruntime.jsx)((0, $ceqeb$reactariacomponents.ListBox), {
                                    items: items,
                                    className: $b9c30139cd63c62a$export$b1e5508a851be14d({
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
const $b9c30139cd63c62a$var$checkmarkIconSize = {
    S: 'XS',
    M: 'M',
    L: 'L',
    XL: 'XL'
};
function $b9c30139cd63c62a$export$d601881f38163e28(props) {
    let ref = (0, $ceqeb$react.useRef)(null);
    let isLink = props.href != null;
    let { size: size } = (0, $ceqeb$react.useContext)($b9c30139cd63c62a$var$InternalPickerContext);
    return /*#__PURE__*/ (0, $ceqeb$reactjsxruntime.jsx)((0, $ceqeb$reactariacomponents.ListBoxItem), {
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
            return /*#__PURE__*/ (0, $ceqeb$reactjsxruntime.jsx)($b9c30139cd63c62a$var$DefaultProvider, {
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
                children: /*#__PURE__*/ (0, $ceqeb$reactjsxruntime.jsxs)($b9c30139cd63c62a$var$DefaultProvider, {
                    context: (0, $6367bc87eb7d24ad$exports.TextContext),
                    value: {
                        slots: {
                            label: {
                                styles: (0, $e741ea6b88ce4866$exports.label)({
                                    size: size
                                })
                            },
                            description: {
                                styles: (0, $e741ea6b88ce4866$exports.description)({
                                    ...renderProps,
                                    size: size
                                })
                            }
                        }
                    },
                    children: [
                        !isLink && /*#__PURE__*/ (0, $ceqeb$reactjsxruntime.jsx)((0, $dba2b18fc5727f9b$exports.default), {
                            size: $b9c30139cd63c62a$var$checkmarkIconSize[size],
                            className: (0, $e741ea6b88ce4866$exports.checkmark)({
                                ...renderProps,
                                size: size
                            })
                        }),
                        typeof children === 'string' ? /*#__PURE__*/ (0, $ceqeb$reactjsxruntime.jsx)((0, $6367bc87eb7d24ad$exports.Text), {
                            slot: "label",
                            children: children
                        }) : children
                    ]
                })
            });
        }
    });
}
// A Context.Provider that only sets a value if not inside SelectValue.
function $b9c30139cd63c62a$var$DefaultProvider({ context: context, value: value, children: children }) {
    let inSelectValue = (0, $ceqeb$react.useContext)($b9c30139cd63c62a$var$InsideSelectValueContext);
    if (inSelectValue) return children;
    return /*#__PURE__*/ (0, $ceqeb$reactjsxruntime.jsx)(context.Provider, {
        value: value,
        children: children
    });
}
function $b9c30139cd63c62a$export$a340772aca6155cd(props) {
    return /*#__PURE__*/ (0, $ceqeb$reactjsxruntime.jsxs)((0, $ceqeb$reactjsxruntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, $ceqeb$reactjsxruntime.jsx)((0, $ceqeb$reactariacomponents.ListBoxSection), {
                ...props,
                className: (0, $e741ea6b88ce4866$exports.section),
                children: props.children
            }),
            /*#__PURE__*/ (0, $ceqeb$reactjsxruntime.jsx)((0, $e741ea6b88ce4866$exports.Divider), {})
        ]
    });
}


//# sourceMappingURL=Picker.cjs.map
