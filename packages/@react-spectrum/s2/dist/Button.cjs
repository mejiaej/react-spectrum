require("./Button.css");
var $e991cbcdf82ced71$exports = require("./CenterBaseline.cjs");
var $bde97c91243ed164$exports = require("../icons/Icon.cjs");
var $4526404114e78c80$exports = require("./intlStrings.cjs");
var $2061c83559b50a66$exports = require("./pressScale.cjs");
var $1c116ea4b0d2d023$exports = require("./ProgressCircle.cjs");
var $5eb75e0c130e0669$exports = require("../icons/Skeleton.cjs");
var $6367bc87eb7d24ad$exports = require("./Content.cjs");
var $bfa4962d90c8af48$exports = require("./Form.cjs");
var $ac757a4c2bd72aee$exports = require("../icons/useSpectrumContextProps.cjs");
var $8owBJ$reactjsxruntime = require("react/jsx-runtime");
var $8owBJ$reactariacomponents = require("react-aria-components");
var $8owBJ$react = require("react");
var $8owBJ$reactspectrumutils = require("@react-spectrum/utils");
var $8owBJ$reactariai18n = require("@react-aria/i18n");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "ButtonContext", () => $25d06cf8d4e72761$export$24d547caef80ccd1);
$parcel$export(module.exports, "LinkButtonContext", () => $25d06cf8d4e72761$export$1c1a176f3b9e48d3);
$parcel$export(module.exports, "Button", () => $25d06cf8d4e72761$export$353f5b6fc5456de1);
$parcel$export(module.exports, "LinkButton", () => $25d06cf8d4e72761$export$29d11c0fe2fc51d8);
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













const $25d06cf8d4e72761$export$24d547caef80ccd1 = /*#__PURE__*/ (0, $8owBJ$react.createContext)(null);
const $25d06cf8d4e72761$export$1c1a176f3b9e48d3 = /*#__PURE__*/ (0, $8owBJ$react.createContext)(null);
const $25d06cf8d4e72761$var$iconOnly = ':has([slot=icon]):not(:has([data-rsp-slot=text]))';
const $25d06cf8d4e72761$var$button = function anonymous(props, overrides) {
    let rules = " .";
    let matches = (overrides || '').match(/(?:^|\s)(?:y|z|A|B|_9|_8|h|_5|_4|__A|__c|__d|__a|__b|U|__Q|X|Z|V|W|l|q|r)[^\s]+/g) || [];
    rules += matches.join('');
    let $U = false;
    let $q = false;
    let $l = false;
    for (let p of matches){
        if (/^\s*U/.test(p)) $U = true;
        if (/^\s*q/.test(p)) $q = true;
        if (/^\s*l/.test(p)) $l = true;
    }
    if (props.isFocusVisible) rules += ' _Lb';
    else rules += ' _La';
    rules += ' da_____z';
    if (props.staticColor === "black") rules += ' db';
    else if (props.staticColor === "white") rules += ' dc';
    else rules += ' dx';
    rules += ' _Nc';
    rules += ' _M-3t1z';
    if (!$U) rules += ' Uc';
    rules += ' _Zd';
    rules += ' _1-soocicc';
    rules += ' _1d';
    rules += ' _2d';
    rules += ' _ja';
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
    rules += ' _ed';
    rules += ' _f-1x99dlob';
    rules += ' _fa';
    if (props.fillStyle === "outline") {
        if (props.isDisabled) rules += ' aa_____B';
        else rules += ' aa_____x';
    } else if (props.fillStyle === "fill") {
        if (props.isDisabled) rules += ' aa_____A';
        else rules += ' aa_____w';
    }
    if (props.staticColor === "black") {
        if (props.isDisabled) rules += ' a_____n';
        else if (props.fillStyle === "outline") {
            if (props.isPressed) rules += ' a_____s';
            else if (props.isFocusVisible) rules += ' a_____s';
            else if (props.isHovered) rules += ' a_____s';
            else rules += ' a_____r';
        } else if (props.fillStyle === "fill") {
            if (props.variant === "secondary") {
                if (props.isPressed) rules += ' a_____s';
                else if (props.isFocusVisible) rules += ' a_____s';
                else if (props.isHovered) rules += ' a_____s';
                else rules += ' a_____r';
            } else if (props.variant === "primary") rules += ' ac';
        }
    } else if (props.staticColor === "white") {
        if (props.isDisabled) rules += ' a_____a';
        else if (props.fillStyle === "outline") {
            if (props.isPressed) rules += ' a_____f';
            else if (props.isFocusVisible) rules += ' a_____f';
            else if (props.isHovered) rules += ' a_____f';
            else rules += ' a_____e';
        } else if (props.fillStyle === "fill") {
            if (props.variant === "secondary") {
                if (props.isPressed) rules += ' a_____f';
                else if (props.isFocusVisible) rules += ' a_____f';
                else if (props.isHovered) rules += ' a_____f';
                else rules += ' a_____e';
            } else if (props.variant === "primary") rules += ' ab';
        }
    } else if (props.fillStyle === "outline") {
        if (props.isDisabled) rules += ' aj';
        else {
            if (props.isPressed) rules += ' ao';
            else if (props.isFocusVisible) rules += ' ao';
            else if (props.isHovered) rules += ' ao';
            else rules += ' an';
        }
    } else if (props.fillStyle === "fill") {
        if (props.isDisabled) rules += ' aj';
        else if (props.variant === "negative") rules += ' ac';
        else if (props.variant === "accent") rules += ' ac';
        else if (props.variant === "secondary") {
            if (props.isPressed) rules += ' ao';
            else if (props.isFocusVisible) rules += ' ao';
            else if (props.isHovered) rules += ' ao';
            else rules += ' an';
        } else if (props.variant === "primary") rules += ' ad';
    }
    rules += ' __Da';
    rules += ' o-375tou';
    if (!$q) {
        if (props.size === "XL") rules += ' q-soocicj';
        else if (props.size === "L") rules += ' q-soocici';
        else if (props.size === "S") rules += ' q-soocich';
        else if (props.size === "XS") rules += ' q-soocicg';
        else rules += ' q-soocicf';
    }
    rules += ' _vg';
    rules += ' _wg';
    rules += ' _xg';
    rules += ' _yg';
    rules += ' __na';
    if (!$l) rules += ' le';
    rules += ' _ld';
    rules += ' C-soocica';
    rules += ' CJ';
    rules += ' D-soocica';
    rules += ' DJ';
    rules += ' Ea';
    rules += ' Fa';
    rules += ' _b-soocicb';
    rules += ' _Oa';
    rules += ' _Q-375x7f';
    rules += ' _Ra';
    rules += ' wa';
    rules += ' u-375tp0';
    rules += ' v-375tp1';
    if (props.fillStyle === "outline") rules += ' sc';
    else if (props.fillStyle === "fill") rules += ' sa';
    if (props.fillStyle === "outline") rules += ' tc';
    else if (props.fillStyle === "fill") rules += ' ta';
    rules += ' -_1gogtue_E--1dbqcch';
    rules += ' -oelgqu_A--soocica';
    rules += ' -oelgqu_A--177861o';
    if (props.isDisabled) rules += ' ca_____B';
    else if (props.isHovered) rules += ' ca_____z';
    else rules += ' ca_____v';
    if (props.staticColor === "black") {
        if (props.isDisabled) rules += ' c_____m';
        else if (props.variant === "secondary") {
            if (props.isPressed) rules += ' c_____n';
            else if (props.isFocusVisible) rules += ' c_____n';
            else if (props.isHovered) rules += ' c_____n';
            else rules += ' c_____m';
        } else if (props.variant === "primary") {
            if (props.isPressed) rules += ' c_____s';
            else if (props.isFocusVisible) rules += ' c_____s';
            else if (props.isHovered) rules += ' c_____s';
            else rules += ' c_____r';
        }
    } else if (props.staticColor === "white") {
        if (props.isDisabled) rules += ' c____9';
        else if (props.variant === "secondary") {
            if (props.isPressed) rules += ' c_____a';
            else if (props.isFocusVisible) rules += ' c_____a';
            else if (props.isHovered) rules += ' c_____a';
            else rules += ' c____9';
        } else if (props.variant === "primary") {
            if (props.isPressed) rules += ' c_____f';
            else if (props.isFocusVisible) rules += ' c_____f';
            else if (props.isHovered) rules += ' c_____f';
            else rules += ' c_____e';
        }
    } else if (props.isDisabled) rules += ' ci';
    else if (props.variant === "secondary") {
        if (props.isPressed) rules += ' cj';
        else if (props.isFocusVisible) rules += ' cj';
        else if (props.isHovered) rules += ' cj';
        else rules += ' ci';
    } else if (props.variant === "primary") {
        if (props.isPressed) rules += ' co';
        else if (props.isFocusVisible) rules += ' co';
        else if (props.isHovered) rules += ' co';
        else rules += ' cn';
    }
    if (props.fillStyle === "outline") rules += ' ba_____w';
    else if (props.fillStyle === "fill") {
        if (props.isDisabled) rules += ' ba_____B';
        else if (props.isHovered) rules += ' ba_____z';
        else rules += ' ba_____x';
    }
    if (props.staticColor === "black") {
        if (props.fillStyle === "outline") {
            if (props.isDisabled) rules += ' ba';
            else if (props.isFocusVisible) rules += ' b_____k';
            else if (props.isPressed) rules += ' b_____k';
            else if (props.isHovered) rules += ' b_____k';
            else rules += ' ba';
        } else if (props.fillStyle === "fill") {
            if (props.isDisabled) rules += ' b_____k';
            else if (props.variant === "secondary") {
                if (props.isPressed) rules += ' b_____l';
                else if (props.isFocusVisible) rules += ' b_____l';
                else if (props.isHovered) rules += ' b_____l';
                else rules += ' b_____k';
            } else if (props.variant === "primary") {
                if (props.isPressed) rules += ' b_____s';
                else if (props.isFocusVisible) rules += ' b_____s';
                else if (props.isHovered) rules += ' b_____s';
                else rules += ' b_____r';
            }
        }
    } else if (props.staticColor === "white") {
        if (props.fillStyle === "outline") {
            if (props.isDisabled) rules += ' ba';
            else if (props.isFocusVisible) rules += ' b____7';
            else if (props.isPressed) rules += ' b____7';
            else if (props.isHovered) rules += ' b____7';
            else rules += ' ba';
        } else if (props.fillStyle === "fill") {
            if (props.isDisabled) rules += ' b____7';
            else if (props.variant === "secondary") {
                if (props.isPressed) rules += ' b____8';
                else if (props.isFocusVisible) rules += ' b____8';
                else if (props.isHovered) rules += ' b____8';
                else rules += ' b____7';
            } else if (props.variant === "primary") {
                if (props.isPressed) rules += ' b_____f';
                else if (props.isFocusVisible) rules += ' b_____f';
                else if (props.isHovered) rules += ' b_____f';
                else rules += ' b_____e';
            }
        }
    } else if (props.fillStyle === "outline") {
        if (props.isDisabled) rules += ' ba';
        else if (props.isFocusVisible) rules += ' bg';
        else if (props.isPressed) rules += ' bg';
        else if (props.isHovered) rules += ' bg';
        else rules += ' ba';
    } else if (props.fillStyle === "fill") {
        if (props.isDisabled) rules += ' bg';
        else if (props.variant === "negative") {
            if (props.isPressed) rules += ' b_____L';
            else if (props.isFocusVisible) rules += ' b_____L';
            else if (props.isHovered) rules += ' b_____L';
            else rules += ' b_____K';
        } else if (props.variant === "accent") {
            if (props.isPressed) rules += ' b_____F';
            else if (props.isFocusVisible) rules += ' b_____F';
            else if (props.isHovered) rules += ' b_____F';
            else rules += ' b_____E';
        } else if (props.variant === "secondary") {
            if (props.isPressed) rules += ' bh';
            else if (props.isFocusVisible) rules += ' bh';
            else if (props.isHovered) rules += ' bh';
            else rules += ' bg';
        } else if (props.variant === "primary") {
            if (props.isPressed) rules += ' bo';
            else if (props.isFocusVisible) rules += ' bo';
            else if (props.isHovered) rules += ' bo';
            else rules += ' bn';
        }
    }
    rules += ' -rwx0fg_e-b';
    rules += ' _zb';
    rules += ' __R-yksgrp';
    if (props.size === "XL") rules += ' -_375tou_o-j';
    else if (props.size === "L") rules += ' -_375tou_o-i';
    else if (props.size === "S") rules += ' -_375tou_o-h';
    else if (props.size === "XS") rules += ' -_375tou_o-g';
    else rules += ' -_375tou_o-f';
    if (props.fillStyle === "outline") rules += ' -_375tp0_u-c';
    else if (props.fillStyle === "fill") rules += ' -_375tp0_u-a';
    if (props.fillStyle === "outline") rules += ' -_375tp1_v-c';
    else if (props.fillStyle === "fill") rules += ' -_375tp1_v-a';
    return rules;
};
const $25d06cf8d4e72761$export$353f5b6fc5456de1 = /*#__PURE__*/ (0, $8owBJ$react.forwardRef)(function Button(props1, ref) {
    [props1, ref] = (0, $ac757a4c2bd72aee$exports.useSpectrumContextProps)(props1, ref, $25d06cf8d4e72761$export$24d547caef80ccd1);
    props1 = (0, $bfa4962d90c8af48$exports.useFormProps)(props1);
    let stringFormatter = (0, $8owBJ$reactariai18n.useLocalizedStringFormatter)((0, ($parcel$interopDefault($4526404114e78c80$exports))), '@react-spectrum/s2');
    let { isPending: isPending, variant: variant = 'primary', fillStyle: fillStyle = 'fill', size: size = 'M', staticColor: staticColor } = props1;
    let domRef = (0, $8owBJ$reactspectrumutils.useFocusableRef)(ref);
    let overlayTriggerState = (0, $8owBJ$react.useContext)((0, $8owBJ$reactariacomponents.OverlayTriggerStateContext));
    let [isProgressVisible, setIsProgressVisible] = (0, $8owBJ$react.useState)(false);
    (0, $8owBJ$react.useEffect)(()=>{
        let timeout;
        if (isPending) // Start timer when isPending is set to true.
        timeout = setTimeout(()=>{
            setIsProgressVisible(true);
        }, 1000);
        else // Exit loading state when isPending is set to false. */
        setIsProgressVisible(false);
        return ()=>{
            // Clean up on unmount or when user removes isPending prop before entering loading state.
            clearTimeout(timeout);
        };
    }, [
        isPending
    ]);
    return /*#__PURE__*/ (0, $8owBJ$reactjsxruntime.jsx)((0, $8owBJ$reactariacomponents.Button), {
        ...props1,
        ref: domRef,
        style: (0, $2061c83559b50a66$exports.pressScale)(domRef, props1.UNSAFE_style),
        className: (renderProps)=>(props1.UNSAFE_className || '') + $25d06cf8d4e72761$var$button({
                ...renderProps,
                // Retain hover styles when an overlay is open.
                isHovered: renderProps.isHovered || overlayTriggerState?.isOpen || false,
                isDisabled: renderProps.isDisabled || isProgressVisible,
                variant: variant,
                fillStyle: fillStyle,
                size: size,
                staticColor: staticColor
            }, props1.styles),
        children: /*#__PURE__*/ (0, $8owBJ$reactjsxruntime.jsxs)((0, $8owBJ$reactariacomponents.Provider), {
            values: [
                [
                    (0, $5eb75e0c130e0669$exports.SkeletonContext),
                    null
                ],
                [
                    (0, $6367bc87eb7d24ad$exports.TextContext),
                    {
                        styles: function anonymous(props) {
                            let rules = " .";
                            rules += ' E-1gogtue';
                            rules += ' F-1gogtue';
                            rules += ' __A-3t1y';
                            if (props.isProgressVisible) rules += ' _K-3t1x';
                            else rules += ' _K-3t1y';
                            return rules;
                        }({
                            isProgressVisible: isProgressVisible
                        }),
                        // @ts-ignore data-attributes allowed on all JSX elements, but adding to DOMProps has been problematic in the past
                        'data-rsp-slot': 'text'
                    }
                ],
                [
                    (0, $bde97c91243ed164$exports.IconContext),
                    {
                        render: (0, $e991cbcdf82ced71$exports.centerBaseline)({
                            slot: 'icon',
                            styles: " . __A-3t1x"
                        }),
                        styles: function anonymous(props) {
                            let rules = " .";
                            rules += ' l-1sthc3k';
                            rules += ' k-1sthc3k';
                            rules += ' y-oelgqu';
                            rules += ' _8-3t1x';
                            if (props.isProgressVisible) rules += ' _K-3t1x';
                            else rules += ' _K-3t1y';
                            return rules;
                        }({
                            isProgressVisible: isProgressVisible
                        })
                    }
                ]
            ],
            children: [
                typeof props1.children === 'string' ? /*#__PURE__*/ (0, $8owBJ$reactjsxruntime.jsx)((0, $6367bc87eb7d24ad$exports.Text), {
                    children: props1.children
                }) : props1.children,
                isPending && /*#__PURE__*/ (0, $8owBJ$reactjsxruntime.jsx)("div", {
                    className: function anonymous(props) {
                        let rules = " .";
                        rules += ' Ua';
                        rules += ' X-3760fj';
                        rules += ' Y-3760fj';
                        rules += ' T-1tktoou';
                        if (props.isProgressVisible) rules += ' _K-3t1y';
                        else rules += ' _K-3t1x';
                        return rules;
                    }({
                        isProgressVisible: isProgressVisible,
                        isPending: isPending
                    }),
                    children: /*#__PURE__*/ (0, $8owBJ$reactjsxruntime.jsx)((0, $1c116ea4b0d2d023$exports.ProgressCircle), {
                        isIndeterminate: true,
                        "aria-label": stringFormatter.format('button.pending'),
                        size: "S",
                        staticColor: staticColor,
                        styles: function anonymous(props) {
                            let rules = " .";
                            if (props.size === "XL") rules += ' lM';
                            else if (props.size === "L") rules += ' lI';
                            else if (props.size === "M") rules += ' lG';
                            else if (props.size === "S") rules += ' lC';
                            if (props.size === "XL") rules += ' kM';
                            else if (props.size === "L") rules += ' kI';
                            else if (props.size === "M") rules += ' kG';
                            else if (props.size === "S") rules += ' kC';
                            return rules;
                        }({
                            size: size
                        })
                    })
                })
            ]
        })
    });
});
const $25d06cf8d4e72761$export$29d11c0fe2fc51d8 = /*#__PURE__*/ (0, $8owBJ$react.forwardRef)(function LinkButton(props, ref) {
    [props, ref] = (0, $ac757a4c2bd72aee$exports.useSpectrumContextProps)(props, ref, $25d06cf8d4e72761$export$1c1a176f3b9e48d3);
    props = (0, $bfa4962d90c8af48$exports.useFormProps)(props);
    let domRef = (0, $8owBJ$reactspectrumutils.useFocusableRef)(ref);
    let overlayTriggerState = (0, $8owBJ$react.useContext)((0, $8owBJ$reactariacomponents.OverlayTriggerStateContext));
    return /*#__PURE__*/ (0, $8owBJ$reactjsxruntime.jsx)((0, $8owBJ$reactariacomponents.Link), {
        ...props,
        ref: domRef,
        style: (0, $2061c83559b50a66$exports.pressScale)(domRef, props.UNSAFE_style),
        className: (renderProps)=>(props.UNSAFE_className || '') + $25d06cf8d4e72761$var$button({
                ...renderProps,
                // Retain hover styles when an overlay is open.
                isHovered: renderProps.isHovered || overlayTriggerState?.isOpen || false,
                variant: props.variant || 'primary',
                fillStyle: props.fillStyle || 'fill',
                size: props.size || 'M',
                staticColor: props.staticColor,
                isPending: false
            }, props.styles),
        children: /*#__PURE__*/ (0, $8owBJ$reactjsxruntime.jsx)((0, $8owBJ$reactariacomponents.Provider), {
            values: [
                [
                    (0, $5eb75e0c130e0669$exports.SkeletonContext),
                    null
                ],
                [
                    (0, $6367bc87eb7d24ad$exports.TextContext),
                    {
                        styles: " . E-1gogtue F-1gogtue __A-3t1y",
                        // @ts-ignore data-attributes allowed on all JSX elements, but adding to DOMProps has been problematic in the past
                        'data-rsp-slot': 'text'
                    }
                ],
                [
                    (0, $bde97c91243ed164$exports.IconContext),
                    {
                        render: (0, $e991cbcdf82ced71$exports.centerBaseline)({
                            slot: 'icon',
                            styles: " . __A-3t1x"
                        }),
                        styles: " . l-1sthc3k k-1sthc3k y-oelgqu _8-3t1x"
                    }
                ]
            ],
            children: typeof props.children === 'string' ? /*#__PURE__*/ (0, $8owBJ$reactjsxruntime.jsx)((0, $6367bc87eb7d24ad$exports.Text), {
                children: props.children
            }) : props.children
        })
    });
});


//# sourceMappingURL=Button.cjs.map
