require("./StatusLight.css");
var $e991cbcdf82ced71$exports = require("./CenterBaseline.cjs");
var $6367bc87eb7d24ad$exports = require("./Content.cjs");
var $5eb75e0c130e0669$exports = require("../icons/Skeleton.cjs");
var $ac757a4c2bd72aee$exports = require("../icons/useSpectrumContextProps.cjs");
var $lz5dj$reactjsxruntime = require("react/jsx-runtime");
var $lz5dj$react = require("react");
var $lz5dj$reactariautils = require("@react-aria/utils");
var $lz5dj$reactspectrumutils = require("@react-spectrum/utils");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "StatusLightContext", () => $dad358896b5630fa$export$d8f8c0b091d8cb9b);
$parcel$export(module.exports, "StatusLight", () => $dad358896b5630fa$export$5f84c37a31c6e41c);
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







const $dad358896b5630fa$export$d8f8c0b091d8cb9b = /*#__PURE__*/ (0, $lz5dj$react.createContext)(null);
const $dad358896b5630fa$var$wrapper = function anonymous(props, overrides) {
    let rules = " .";
    let matches = (overrides || '').match(/(?:^|\s)(?:y|z|A|B|_9|_8|h|_5|_4|__A|__c|__d|__a|__b|U|__Q|X|Z|V|W|l|q|r)[^\s]+/g) || [];
    rules += matches.join('');
    let $l = false;
    for (let p of matches)if (/^\s*l/.test(p)) $l = true;
    rules += ' _Zd';
    rules += ' ibH';
    rules += ' iG';
    rules += ' jbH';
    rules += ' jG';
    rules += ' _1d';
    if (!$l) rules += ' le';
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
    if (props.variant === "neutral") rules += ' al';
    else {
        if (props.isPressed) rules += ' ao';
        else if (props.isFocusVisible) rules += ' ao';
        else if (props.isHovered) rules += ' ao';
        else rules += ' an';
    }
    rules += ' __R-yksgrp';
    return rules;
};
const $dad358896b5630fa$var$light = function anonymous(props) {
    let rules = " .";
    if (props.size === "XL") rules += ' lC';
    else if (props.size === "L") rules += ' lA';
    else if (props.size === "M") rules += ' ly';
    else if (props.size === "S") rules += ' lw';
    if (props.size === "XL") rules += ' kC';
    else if (props.size === "L") rules += ' kA';
    else if (props.size === "M") rules += ' ky';
    else if (props.size === "S") rules += ' kw';
    if (props.isSkeleton) rules += ' eF';
    else if (props.variant === "silver") rules += ' ex';
    else if (props.variant === "brown") rules += ' ew';
    else if (props.variant === "cinnamon") rules += ' ev';
    else if (props.variant === "turquoise") rules += ' eu';
    else if (props.variant === "pink") rules += ' et';
    else if (props.variant === "yellow") rules += ' ej';
    else if (props.variant === "seafoam") rules += ' en';
    else if (props.variant === "indigo") rules += ' ep';
    else if (props.variant === "magenta") rules += ' es';
    else if (props.variant === "purple") rules += ' eq';
    else if (props.variant === "fuchsia") rules += ' er';
    else if (props.variant === "cyan") rules += ' eo';
    else if (props.variant === "chartreuse") rules += ' ek';
    else if (props.variant === "celery") rules += ' el';
    else if (props.variant === "negative") rules += ' ee';
    else if (props.variant === "notice") rules += ' eg';
    else if (props.variant === "positive") rules += ' ef';
    else if (props.variant === "neutral") rules += ' ed';
    else if (props.variant === "informative") rules += ' ec';
    rules += ' __vd';
    rules += ' __wd';
    return rules;
};
const $dad358896b5630fa$export$5f84c37a31c6e41c = /*#__PURE__*/ (0, $lz5dj$react.forwardRef)(function StatusLight(props, ref) {
    [props, ref] = (0, $ac757a4c2bd72aee$exports.useSpectrumContextProps)(props, ref, $dad358896b5630fa$export$d8f8c0b091d8cb9b);
    let { children: children, size: size = 'M', variant: variant, role: role, UNSAFE_className: UNSAFE_className = '', UNSAFE_style: UNSAFE_style, styles: styles } = props;
    let domRef = (0, $lz5dj$reactspectrumutils.useDOMRef)(ref);
    let isSkeleton = (0, $5eb75e0c130e0669$exports.useIsSkeleton)();
    if (!children && !props['aria-label']) console.warn('If no children are provided, an aria-label must be specified');
    if (!role && (props['aria-label'] || props['aria-labelledby'])) console.warn('A labelled StatusLight must have a role.');
    return /*#__PURE__*/ (0, $lz5dj$reactjsxruntime.jsxs)("div", {
        ...(0, $lz5dj$reactariautils.filterDOMProps)(props, {
            labelable: !!role
        }),
        ref: domRef,
        role: role,
        style: UNSAFE_style,
        className: UNSAFE_className + $dad358896b5630fa$var$wrapper({
            size: size,
            variant: variant
        }, styles),
        children: [
            /*#__PURE__*/ (0, $lz5dj$reactjsxruntime.jsx)((0, $e991cbcdf82ced71$exports.CenterBaseline), {
                children: /*#__PURE__*/ (0, $lz5dj$reactjsxruntime.jsx)("svg", {
                    className: $dad358896b5630fa$var$light({
                        size: size,
                        variant: variant,
                        isSkeleton: isSkeleton
                    }),
                    "aria-hidden": "true",
                    children: /*#__PURE__*/ (0, $lz5dj$reactjsxruntime.jsx)("circle", {
                        r: "50%",
                        cx: "50%",
                        cy: "50%"
                    })
                })
            }),
            /*#__PURE__*/ (0, $lz5dj$reactjsxruntime.jsx)((0, $6367bc87eb7d24ad$exports.Text), {
                children: children
            })
        ]
    });
});


//# sourceMappingURL=StatusLight.cjs.map
