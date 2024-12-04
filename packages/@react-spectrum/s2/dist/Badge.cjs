require("./Badge.css");
var $e991cbcdf82ced71$exports = require("./CenterBaseline.cjs");
var $bde97c91243ed164$exports = require("../icons/Icon.cjs");
var $5eb75e0c130e0669$exports = require("../icons/Skeleton.cjs");
var $6367bc87eb7d24ad$exports = require("./Content.cjs");
var $ac757a4c2bd72aee$exports = require("../icons/useSpectrumContextProps.cjs");
var $26Nq1$reactjsxruntime = require("react/jsx-runtime");
var $26Nq1$reactariacomponents = require("react-aria-components");
var $26Nq1$reactariautils = require("@react-aria/utils");
var $26Nq1$react = require("react");
var $26Nq1$reactspectrumutils = require("@react-spectrum/utils");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "BadgeContext", () => $660a621e3a266afc$export$1d4627584e49159a);
$parcel$export(module.exports, "Badge", () => $660a621e3a266afc$export$37acb3580601e69a);
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









const $660a621e3a266afc$export$1d4627584e49159a = /*#__PURE__*/ (0, $26Nq1$react.createContext)(null);
const $660a621e3a266afc$var$badge = function anonymous(props, overrides) {
    let rules = " .";
    let matches = (overrides || '').match(/(?:^|\s)(?:y|z|A|B|_9|_8|h|_5|_4|__A|__c|__d|__a|__b|U|__Q|X|Z|V|W|l|q|r)[^\s]+/g) || [];
    rules += matches.join('');
    rules += ' _Zd';
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
    if (props.fillStyle === "outline") rules += ' ap';
    else if (props.fillStyle === "subtle") rules += ' ap';
    else if (props.fillStyle === "bold") {
        if (props.variant === "celery") rules += ' ab';
        else if (props.variant === "charteuse") rules += ' ab';
        else if (props.variant === "yellow") rules += ' ab';
        else if (props.variant === "orange") rules += ' ab';
        else if (props.variant === "notice") rules += ' ab';
        else rules += ' ac';
    }
    rules += ' _2d';
    rules += ' _1c';
    rules += ' _vh';
    rules += ' _wh';
    rules += ' _xh';
    rules += ' _yh';
    rules += ' o-375tou';
    rules += ' C-1dz4pg9a';
    rules += ' CI';
    rules += ' D-1dz4pg9a';
    rules += ' DI';
    rules += ' -_1gogtue_E--1dbqcch';
    rules += ' _b-1dz4pg9b';
    rules += ' -oelgqu_A--1dz4pg9a';
    rules += ' -oelgqu_A--177861o';
    rules += ' jbH';
    rules += ' jG';
    if (props.fillStyle === "outline") rules += ' b______k';
    else if (props.fillStyle === "subtle") {
        if (props.variant === "silver") rules += ' b______j';
        else if (props.variant === "cinnamon") rules += ' b______f';
        else if (props.variant === "brown") rules += ' b______h';
        else if (props.variant === "turquoise") rules += ' b______d';
        else if (props.variant === "pink") rules += ' b______b';
        else if (props.variant === "magenta") rules += ' b_____9';
        else if (props.variant === "fuchsia") rules += ' b_____7';
        else if (props.variant === "purple") rules += ' b_____5';
        else if (props.variant === "indigo") rules += ' b_____3';
        else if (props.variant === "blue") rules += ' b_____G';
        else if (props.variant === "cyan") rules += ' b_____1';
        else if (props.variant === "seafoam") rules += ' b_____Z';
        else if (props.variant === "green") rules += ' b_____P';
        else if (props.variant === "celery") rules += ' b_____X';
        else if (props.variant === "charteuse") rules += ' b_____V';
        else if (props.variant === "yellow") rules += ' b_____T';
        else if (props.variant === "orange") rules += ' b_____R';
        else if (props.variant === "red") rules += ' b_____M';
        else if (props.variant === "gray") rules += ' b_____J';
        else if (props.variant === "negative") rules += ' b_____M';
        else if (props.variant === "notice") rules += ' b_____R';
        else if (props.variant === "positive") rules += ' b_____P';
        else if (props.variant === "neutral") rules += ' b_____J';
        else if (props.variant === "informative") rules += ' b_____G';
        else if (props.variant === "accent") rules += ' b_____G';
    } else if (props.fillStyle === "bold") {
        if (props.variant === "silver") rules += ' b______i';
        else if (props.variant === "cinnamon") rules += ' b______e';
        else if (props.variant === "brown") rules += ' b______g';
        else if (props.variant === "turquoise") rules += ' b______c';
        else if (props.variant === "pink") rules += ' b______a';
        else if (props.variant === "magenta") rules += ' b_____8';
        else if (props.variant === "fuchsia") rules += ' b_____6';
        else if (props.variant === "purple") rules += ' b_____4';
        else if (props.variant === "indigo") rules += ' b_____2';
        else if (props.variant === "blue") rules += ' b_____E';
        else if (props.variant === "cyan") rules += ' b_____0';
        else if (props.variant === "seafoam") rules += ' b_____Y';
        else if (props.variant === "green") rules += ' b_____N';
        else if (props.variant === "celery") rules += ' b_____W';
        else if (props.variant === "charteuse") rules += ' b_____U';
        else if (props.variant === "yellow") rules += ' b_____S';
        else if (props.variant === "orange") rules += ' b_____Q';
        else if (props.variant === "red") rules += ' b_____K';
        else if (props.variant === "gray") rules += ' b_____H';
        else if (props.variant === "negative") {
            if (props.isPressed) rules += ' b_____L';
            else if (props.isFocusVisible) rules += ' b_____L';
            else if (props.isHovered) rules += ' b_____L';
            else rules += ' b_____K';
        } else if (props.variant === "notice") rules += ' b_____Q';
        else if (props.variant === "positive") {
            if (props.isPressed) rules += ' b_____O';
            else if (props.isFocusVisible) rules += ' b_____O';
            else if (props.isHovered) rules += ' b_____O';
            else rules += ' b_____N';
        } else if (props.variant === "neutral") {
            if (props.isPressed) rules += ' b_____I';
            else if (props.isFocusVisible) rules += ' b_____I';
            else if (props.isHovered) rules += ' b_____I';
            else rules += ' b_____H';
        } else if (props.variant === "informative") {
            if (props.isPressed) rules += ' b_____F';
            else if (props.isFocusVisible) rules += ' b_____F';
            else if (props.isHovered) rules += ' b_____F';
            else rules += ' b_____E';
        } else if (props.variant === "accent") {
            if (props.isPressed) rules += ' b_____F';
            else if (props.isFocusVisible) rules += ' b_____F';
            else if (props.isHovered) rules += ' b_____F';
            else rules += ' b_____E';
        }
    }
    rules += ' wa';
    rules += ' __na';
    rules += ' u-375tp0';
    rules += ' v-375tp1';
    rules += ' sc';
    rules += ' tc';
    if (props.fillStyle === "outline") {
        if (props.variant === "negative") rules += ' c-awl6xt';
        else if (props.variant === "notice") rules += ' c-1c1g5qb';
        else if (props.variant === "positive") rules += ' c-32o7sp';
        else if (props.variant === "neutral") rules += ' c-lj7qwa';
        else if (props.variant === "informative") rules += ' c-1n5lxsq';
        else if (props.variant === "accent") rules += ' c-1n5lxsq';
    } else rules += ' ca';
    rules += ' -rwx0fg_e-b';
    if (props.size === "XL") rules += ' -_375tou_o-j';
    else if (props.size === "L") rules += ' -_375tou_o-i';
    else if (props.size === "S") rules += ' -_375tou_o-h';
    else if (props.size === "XS") rules += ' -_375tou_o-g';
    else rules += ' -_375tou_o-f';
    rules += ' -_375tp0_u-c';
    rules += ' -_375tp1_v-c';
    return rules;
};
const $660a621e3a266afc$export$37acb3580601e69a = /*#__PURE__*/ (0, $26Nq1$react.forwardRef)(function Badge(props, ref) {
    [props, ref] = (0, $ac757a4c2bd72aee$exports.useSpectrumContextProps)(props, ref, $660a621e3a266afc$export$1d4627584e49159a);
    let { children: children, variant: variant = 'neutral', size: size = 'S', fillStyle: fillStyle = 'bold', ...otherProps } = props; // useProviderProps(props) in v3
    let domRef = (0, $26Nq1$reactspectrumutils.useDOMRef)(ref);
    let isTextOnly = (0, ($parcel$interopDefault($26Nq1$react))).Children.toArray(props.children).every((c)=>!/*#__PURE__*/ (0, ($parcel$interopDefault($26Nq1$react))).isValidElement(c));
    return /*#__PURE__*/ (0, $26Nq1$reactjsxruntime.jsx)((0, $26Nq1$reactariacomponents.Provider), {
        values: [
            [
                (0, $6367bc87eb7d24ad$exports.TextContext),
                {
                    styles: " . E-1gogtue F-1gogtue __A-3t1y"
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
        children: /*#__PURE__*/ (0, $26Nq1$reactjsxruntime.jsx)((0, $5eb75e0c130e0669$exports.SkeletonWrapper), {
            children: /*#__PURE__*/ (0, $26Nq1$reactjsxruntime.jsx)("span", {
                ...(0, $26Nq1$reactariautils.filterDOMProps)(otherProps),
                role: "presentation",
                className: (props.UNSAFE_className || '') + $660a621e3a266afc$var$badge({
                    variant: variant,
                    size: size,
                    fillStyle: fillStyle
                }, props.styles),
                style: props.UNSAFE_style,
                ref: domRef,
                children: typeof children === 'string' || isTextOnly ? /*#__PURE__*/ (0, $26Nq1$reactjsxruntime.jsx)((0, $6367bc87eb7d24ad$exports.Text), {
                    children: children
                }) : children
            })
        })
    });
});


//# sourceMappingURL=Badge.cjs.map
