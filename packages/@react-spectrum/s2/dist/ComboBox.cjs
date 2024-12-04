require("./ComboBox.css");
var $e991cbcdf82ced71$exports = require("./CenterBaseline.cjs");
var $e741ea6b88ce4866$exports = require("./Menu.cjs");
var $dba2b18fc5727f9b$exports = require("./Checkmark.cjs");
var $1df9f1c9262ce5df$exports = require("./Chevron.cjs");
var $a0b996a550bb0891$exports = require("./Field.cjs");
var $bfa4962d90c8af48$exports = require("./Form.cjs");
var $6367bc87eb7d24ad$exports = require("./Content.cjs");
var $bde97c91243ed164$exports = require("../icons/Icon.cjs");
var $b9c30139cd63c62a$exports = require("./Picker.cjs");
var $493371ef39bf7a55$exports = require("./Popover.cjs");
var $2061c83559b50a66$exports = require("./pressScale.cjs");
var $ac757a4c2bd72aee$exports = require("../icons/useSpectrumContextProps.cjs");
var $1KUtr$reactjsxruntime = require("react/jsx-runtime");
var $1KUtr$reactariacomponents = require("react-aria-components");
var $1KUtr$react = require("react");
var $1KUtr$reactspectrumutils = require("@react-spectrum/utils");
var $1KUtr$reactariautils = require("@react-aria/utils");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "ComboBoxContext", () => $a2d5b35c01bebcd6$export$d414ccceff7063c3);
$parcel$export(module.exports, "ComboBox", () => $a2d5b35c01bebcd6$export$72b9695b8216309a);
$parcel$export(module.exports, "ComboBoxItem", () => $a2d5b35c01bebcd6$export$b674b8ff01584ab1);
$parcel$export(module.exports, "ComboBoxSection", () => $a2d5b35c01bebcd6$export$5510125537491b61);
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
















const $a2d5b35c01bebcd6$export$d414ccceff7063c3 = /*#__PURE__*/ (0, $1KUtr$react.createContext)(null);
const $a2d5b35c01bebcd6$var$inputButton = function anonymous(props) {
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
const $a2d5b35c01bebcd6$var$iconStyles = " . _8-3t1x R-3hn0u -rwx0fg_e-b";
let $a2d5b35c01bebcd6$var$InternalComboboxContext = /*#__PURE__*/ (0, $1KUtr$react.createContext)({
    size: 'M'
});
const $a2d5b35c01bebcd6$export$72b9695b8216309a = /*#__PURE__*/ (0, $1KUtr$react.forwardRef)(function ComboBox(props1, ref) {
    [props1, ref] = (0, $ac757a4c2bd72aee$exports.useSpectrumContextProps)(props1, ref, $a2d5b35c01bebcd6$export$d414ccceff7063c3);
    let inputRef = (0, $1KUtr$react.useRef)(null);
    let domRef = (0, $1KUtr$react.useRef)(null);
    let buttonRef = (0, $1KUtr$react.useRef)(null);
    let formContext = (0, $1KUtr$react.useContext)((0, $bfa4962d90c8af48$exports.FormContext));
    props1 = (0, $bfa4962d90c8af48$exports.useFormProps)(props1);
    let { direction: direction = 'bottom', align: align = 'start', shouldFlip: shouldFlip = true, menuWidth: menuWidth, label: label, description: descriptionMessage, errorMessage: errorMessage, children: children, items: items, size: size = 'M', labelPosition: labelPosition = 'top', labelAlign: labelAlign = 'start', necessityIndicator: necessityIndicator, UNSAFE_className: UNSAFE_className = '', UNSAFE_style: UNSAFE_style, ...pickerProps } = props1;
    // Expose imperative interface for ref
    (0, $1KUtr$react.useImperativeHandle)(ref, ()=>({
            ...(0, $1KUtr$reactspectrumutils.createFocusableRef)(domRef, inputRef),
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
    let triggerRef = (0, $1KUtr$react.useRef)(null);
    // Make menu width match input + button
    let [triggerWidth, setTriggerWidth] = (0, $1KUtr$react.useState)(null);
    let onResize = (0, $1KUtr$react.useCallback)(()=>{
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
    (0, $1KUtr$reactariautils.useResizeObserver)({
        ref: triggerRef,
        onResize: onResize
    });
    return /*#__PURE__*/ (0, $1KUtr$reactjsxruntime.jsx)((0, $1KUtr$reactariacomponents.ComboBox), {
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
        children: ({ isDisabled: isDisabled, isOpen: isOpen, isRequired: isRequired, isInvalid: isInvalid })=>/*#__PURE__*/ (0, $1KUtr$reactjsxruntime.jsx)((0, $1KUtr$reactjsxruntime.Fragment), {
                children: /*#__PURE__*/ (0, $1KUtr$reactjsxruntime.jsxs)($a2d5b35c01bebcd6$var$InternalComboboxContext.Provider, {
                    value: {
                        size: size
                    },
                    children: [
                        /*#__PURE__*/ (0, $1KUtr$reactjsxruntime.jsx)((0, $a0b996a550bb0891$exports.FieldLabel), {
                            isDisabled: isDisabled,
                            isRequired: isRequired,
                            size: size,
                            labelPosition: labelPosition,
                            labelAlign: labelAlign,
                            necessityIndicator: necessityIndicator,
                            contextualHelp: props1.contextualHelp,
                            children: label
                        }),
                        /*#__PURE__*/ (0, $1KUtr$reactjsxruntime.jsxs)((0, $a0b996a550bb0891$exports.FieldGroup), {
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
                                /*#__PURE__*/ (0, $1KUtr$reactjsxruntime.jsx)((0, $1KUtr$reactariacomponents.InputContext).Consumer, {
                                    children: (ctx)=>/*#__PURE__*/ (0, $1KUtr$reactjsxruntime.jsx)((0, $1KUtr$reactariacomponents.InputContext).Provider, {
                                            value: {
                                                ...ctx,
                                                ref: (0, $1KUtr$reactariautils.mergeRefs)(ctx?.ref, inputRef)
                                            },
                                            children: /*#__PURE__*/ (0, $1KUtr$reactjsxruntime.jsx)((0, $a0b996a550bb0891$exports.Input), {})
                                        })
                                }),
                                isInvalid && /*#__PURE__*/ (0, $1KUtr$reactjsxruntime.jsx)((0, $a0b996a550bb0891$exports.FieldErrorIcon), {
                                    isDisabled: isDisabled
                                }),
                                /*#__PURE__*/ (0, $1KUtr$reactjsxruntime.jsx)((0, $1KUtr$reactariacomponents.Button), {
                                    ref: buttonRef,
                                    // Prevent press scale from sticking while ComboBox is open.
                                    // @ts-ignore
                                    isPressed: false,
                                    style: (renderProps)=>(0, $2061c83559b50a66$exports.pressScale)(buttonRef)(renderProps),
                                    className: (renderProps)=>$a2d5b35c01bebcd6$var$inputButton({
                                            ...renderProps,
                                            size: size,
                                            isOpen: isOpen
                                        }),
                                    children: /*#__PURE__*/ (0, $1KUtr$reactjsxruntime.jsx)((0, $1df9f1c9262ce5df$exports.default), {
                                        size: size,
                                        className: $a2d5b35c01bebcd6$var$iconStyles
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, $1KUtr$reactjsxruntime.jsx)((0, $a0b996a550bb0891$exports.HelpText), {
                            size: size,
                            isDisabled: isDisabled,
                            isInvalid: isInvalid,
                            description: descriptionMessage,
                            children: errorMessage
                        }),
                        /*#__PURE__*/ (0, $1KUtr$reactjsxruntime.jsx)((0, $493371ef39bf7a55$exports.PopoverBase), {
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
                            children: /*#__PURE__*/ (0, $1KUtr$reactjsxruntime.jsx)((0, $1KUtr$reactariacomponents.Provider), {
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
                                                'description': {
                                                    styles: (0, $e741ea6b88ce4866$exports.description)({
                                                        size: size
                                                    })
                                                }
                                            }
                                        }
                                    ]
                                ],
                                children: /*#__PURE__*/ (0, $1KUtr$reactjsxruntime.jsx)((0, $1KUtr$reactariacomponents.ListBox), {
                                    items: items,
                                    className: (0, $b9c30139cd63c62a$exports.menu)({
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
const $a2d5b35c01bebcd6$var$checkmarkIconSize = {
    S: 'XS',
    M: 'M',
    L: 'L',
    XL: 'XL'
};
function $a2d5b35c01bebcd6$export$b674b8ff01584ab1(props) {
    let ref = (0, $1KUtr$react.useRef)(null);
    let isLink = props.href != null;
    let { size: size } = (0, $1KUtr$react.useContext)($a2d5b35c01bebcd6$var$InternalComboboxContext);
    return /*#__PURE__*/ (0, $1KUtr$reactjsxruntime.jsx)((0, $1KUtr$reactariacomponents.ListBoxItem), {
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
            return /*#__PURE__*/ (0, $1KUtr$reactjsxruntime.jsx)((0, $1KUtr$reactjsxruntime.Fragment), {
                children: /*#__PURE__*/ (0, $1KUtr$reactjsxruntime.jsxs)((0, $1KUtr$reactariacomponents.Provider), {
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
                            }
                        ]
                    ],
                    children: [
                        !isLink && /*#__PURE__*/ (0, $1KUtr$reactjsxruntime.jsx)((0, $dba2b18fc5727f9b$exports.default), {
                            size: $a2d5b35c01bebcd6$var$checkmarkIconSize[size],
                            className: (0, $e741ea6b88ce4866$exports.checkmark)({
                                ...renderProps,
                                size: size
                            })
                        }),
                        typeof children === 'string' ? /*#__PURE__*/ (0, $1KUtr$reactjsxruntime.jsx)((0, $6367bc87eb7d24ad$exports.Text), {
                            slot: "label",
                            children: children
                        }) : children
                    ]
                })
            });
        }
    });
}
function $a2d5b35c01bebcd6$export$5510125537491b61(props) {
    return /*#__PURE__*/ (0, $1KUtr$reactjsxruntime.jsxs)((0, $1KUtr$reactjsxruntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, $1KUtr$reactjsxruntime.jsx)((0, $1KUtr$reactariacomponents.ListBoxSection), {
                ...props,
                className: (0, $e741ea6b88ce4866$exports.section),
                children: props.children
            }),
            /*#__PURE__*/ (0, $1KUtr$reactjsxruntime.jsx)((0, $e741ea6b88ce4866$exports.Divider), {})
        ]
    });
}


//# sourceMappingURL=ComboBox.cjs.map
