require("./Disclosure.css");
var $6e265ff388155b91$exports = require("./ActionButton.cjs");
var $e991cbcdf82ced71$exports = require("./CenterBaseline.cjs");
var $1df9f1c9262ce5df$exports = require("./Chevron.cjs");
var $ac757a4c2bd72aee$exports = require("../icons/useSpectrumContextProps.cjs");
var $5FRIp$reactjsxruntime = require("react/jsx-runtime");
var $5FRIp$reactariacomponents = require("react-aria-components");
var $5FRIp$reactariautils = require("@react-aria/utils");
var $5FRIp$react = require("react");
var $5FRIp$reactspectrumutils = require("@react-spectrum/utils");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "DisclosureContext", () => $4e301a98f0cc4e4f$export$d665dd135a51b28a);
$parcel$export(module.exports, "Disclosure", () => $4e301a98f0cc4e4f$export$74a362b31437ec83);
$parcel$export(module.exports, "DisclosureHeader", () => $4e301a98f0cc4e4f$export$1e037ddd32f5b8ac);
$parcel$export(module.exports, "DisclosureTitle", () => $4e301a98f0cc4e4f$export$7843c6a5b3e340a2);
$parcel$export(module.exports, "DisclosurePanel", () => $4e301a98f0cc4e4f$export$feabaa331e1d464c);
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








const $4e301a98f0cc4e4f$export$d665dd135a51b28a = /*#__PURE__*/ (0, $5FRIp$react.createContext)(null);
const $4e301a98f0cc4e4f$var$disclosure = function anonymous(props, overrides) {
    let rules = " .";
    let matches = (overrides || '').match(/(?:^|\s)(?:y|z|A|B|_9|_8|h|_5|_4|__A|__c|__d|__a|__b|U|__Q|X|Z|V|W|l|q|r)[^\s]+/g) || [];
    rules += matches.join('');
    let $q = false;
    for (let p of matches)if (/^\s*q/.test(p)) $q = true;
    rules += ' ao';
    if (props.isQuiet) rules += ' ua';
    else rules += ' ub';
    if (props.isInGroup) {
        if (props.isQuiet) rules += ' v-uamghwa';
        else rules += ' v-uamghwb';
        rules += ' va';
    } else if (props.isQuiet) rules += ' va';
    else rules += ' vb';
    rules += ' sa';
    rules += ' ta';
    rules += ' wa';
    rules += ' ch';
    if (!$q) rules += ' q___C';
    return rules;
};
const $4e301a98f0cc4e4f$export$74a362b31437ec83 = /*#__PURE__*/ (0, $5FRIp$react.forwardRef)(function Disclosure(props, ref) {
    [props, ref] = (0, $ac757a4c2bd72aee$exports.useSpectrumContextProps)(props, ref, $4e301a98f0cc4e4f$export$d665dd135a51b28a);
    let { size: size = 'M', density: density = 'regular', isQuiet: isQuiet, UNSAFE_style: UNSAFE_style, UNSAFE_className: UNSAFE_className = '' } = props;
    let domRef = (0, $5FRIp$reactspectrumutils.useDOMRef)(ref);
    let isInGroup = (0, $5FRIp$react.useContext)($4e301a98f0cc4e4f$export$d665dd135a51b28a) !== null;
    return /*#__PURE__*/ (0, $5FRIp$reactjsxruntime.jsx)((0, $5FRIp$reactariacomponents.Provider), {
        values: [
            [
                $4e301a98f0cc4e4f$export$d665dd135a51b28a,
                {
                    size: size,
                    isQuiet: isQuiet,
                    density: density
                }
            ]
        ],
        children: /*#__PURE__*/ (0, $5FRIp$reactjsxruntime.jsx)((0, $5FRIp$reactariacomponents.Disclosure), {
            ...props,
            ref: domRef,
            style: UNSAFE_style,
            className: (UNSAFE_className ?? '') + $4e301a98f0cc4e4f$var$disclosure({
                isQuiet: isQuiet,
                isInGroup: isInGroup
            }, props.styles),
            children: props.children
        })
    });
});
const $4e301a98f0cc4e4f$var$headingStyle = " . Aa Ba ya za _9-3t1y _Zd _8-3t1y qo";
const $4e301a98f0cc4e4f$var$buttonStyles = function anonymous(props) {
    let rules = " .";
    if (props.isFocusVisible) rules += ' _Lb';
    else rules += ' _La';
    rules += ' da_____z';
    rules += ' dx';
    rules += ' _Nc';
    rules += ' _M-3hmpw';
    rules += ' _c-bc1l9oh';
    rules += ' _c-1uotwbwg';
    rules += ' _c-eo0c6sf';
    rules += ' _c-enzzrge';
    rules += ' _c-enzykdd';
    rules += ' _c-enzwzjc';
    rules += ' _c-enzrfpb';
    rules += ' _ca';
    if (props.size === "XL") {
        rules += ' _dbo';
        rules += ' _dn';
    } else if (props.size === "L") {
        rules += ' _dbm';
        rules += ' _dj';
    } else if (props.size === "M") {
        rules += ' _dbl';
        rules += ' _dk';
    } else if (props.size === "S") {
        rules += ' _dbj';
        rules += ' _di';
    }
    rules += ' _ed';
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
    rules += ' _9-3t1y';
    rules += ' _1d';
    rules += ' C-10cd9hn';
    rules += ' D-10cd9hn';
    rules += ' E-1dbqcch';
    rules += ' F-1dbqcch';
    rules += ' i-10cd9hn';
    rules += ' j-10cd9hn';
    rules += ' o-375tou';
    rules += ' lb';
    if (props.isPressed) rules += ' b-mufwl5';
    else if (props.isHovered) rules += ' b-1tgz9bq';
    else if (props.isFocusVisible) rules += ' b-1tgz9bq';
    else rules += ' ba';
    rules += ' _Oa';
    rules += ' _Q-375x7f';
    rules += ' _Ra';
    rules += ' u-375tp0';
    rules += ' v-375tp1';
    rules += ' sa';
    rules += ' ta';
    if (props.isQuiet) rules += ' _vh';
    else if (props.isFocusVisible) rules += ' _vh';
    else rules += ' _va';
    if (props.isQuiet) rules += ' _wh';
    else if (props.isFocusVisible) rules += ' _wh';
    else rules += ' _wa';
    if (props.isQuiet) rules += ' _xh';
    else if (props.isFocusVisible) rules += ' _xh';
    else rules += ' _xa';
    if (props.isQuiet) rules += ' _yh';
    else if (props.isFocusVisible) rules += ' _yh';
    else rules += ' _ya';
    rules += ' _ja';
    rules += ' __R-yksgrp';
    if (props.size === "XL") {
        if (props.density === "spacious") rules += ' -_375tou_o-_q';
        else if (props.density === "regular") rules += ' -_375tou_o-_i';
        else if (props.density === "compact") rules += ' -_375tou_o-_a';
    } else if (props.size === "L") {
        if (props.density === "spacious") rules += ' -_375tou_o-_i';
        else if (props.density === "regular") rules += ' -_375tou_o-_a';
        else if (props.density === "compact") rules += ' -_375tou_o-2';
    } else if (props.size === "M") {
        if (props.density === "spacious") rules += ' -_375tou_o-_a';
        else if (props.density === "regular") rules += ' -_375tou_o-2';
        else if (props.density === "compact") rules += ' -_375tou_o-U';
    } else if (props.size === "S") {
        if (props.density === "spacious") rules += ' -_375tou_o-2';
        else if (props.density === "regular") rules += ' -_375tou_o-U';
        else if (props.density === "compact") rules += ' -_375tou_o-M';
    }
    rules += ' -_375tp0_u-a';
    rules += ' -_375tp1_v-a';
    return rules;
};
const $4e301a98f0cc4e4f$var$chevronStyles = function anonymous(props) {
    let rules = " .";
    if (props.isExpanded) rules += ' R-3hn0u';
    else if (props.isRTL) rules += ' R-375xa6';
    rules += ' _Oa';
    rules += ' _Q-375x7f';
    rules += ' _Ra';
    rules += ' -rwx0fg_e-b';
    rules += ' _8-3t1x';
    return rules;
};
const $4e301a98f0cc4e4f$var$InternalDisclosureHeader = /*#__PURE__*/ (0, $5FRIp$react.createContext)(null);
function $4e301a98f0cc4e4f$var$DisclosureHeaderWithForwardRef(props, ref) {
    let { UNSAFE_className: UNSAFE_className, UNSAFE_style: UNSAFE_style, children: children } = props;
    let domRef = (0, $5FRIp$reactspectrumutils.useDOMRef)(ref);
    let { size: size, isQuiet: isQuiet, density: density } = (0, $5FRIp$reactariacomponents.useSlottedContext)($4e301a98f0cc4e4f$export$d665dd135a51b28a);
    let mapSize = {
        S: 'XS',
        M: 'S',
        L: 'M',
        XL: 'L'
    };
    // maps to one size smaller in the compact density to ensure there is space between the top and bottom of the action button and container
    let newSize = size;
    if (density === 'compact') newSize = mapSize[size ?? 'M'];
    return /*#__PURE__*/ (0, $5FRIp$reactjsxruntime.jsx)((0, $5FRIp$reactariacomponents.Provider), {
        values: [
            [
                (0, $6e265ff388155b91$exports.ActionButtonContext),
                {
                    size: newSize,
                    isQuiet: isQuiet
                }
            ],
            [
                $4e301a98f0cc4e4f$var$InternalDisclosureHeader,
                {}
            ]
        ],
        children: /*#__PURE__*/ (0, $5FRIp$reactjsxruntime.jsx)("div", {
            style: UNSAFE_style,
            className: (UNSAFE_className ?? '') + " . _Zd _1c ic jc",
            ref: domRef,
            children: children
        })
    });
}
const $4e301a98f0cc4e4f$export$1e037ddd32f5b8ac = /*#__PURE__*/ (0, $5FRIp$react.forwardRef)($4e301a98f0cc4e4f$var$DisclosureHeaderWithForwardRef);
const $4e301a98f0cc4e4f$export$7843c6a5b3e340a2 = /*#__PURE__*/ (0, $5FRIp$react.forwardRef)(function DisclosureTitle(props, ref) {
    let { level: level = 3, UNSAFE_style: UNSAFE_style, UNSAFE_className: UNSAFE_className = '', ...otherProps } = props;
    let domRef = (0, $5FRIp$reactspectrumutils.useDOMRef)(ref);
    const domProps = (0, $5FRIp$reactariautils.filterDOMProps)(otherProps);
    let { direction: direction } = (0, $5FRIp$reactariacomponents.useLocale)();
    let { isExpanded: isExpanded } = (0, $5FRIp$react.useContext)((0, $5FRIp$reactariacomponents.DisclosureStateContext));
    let { size: size, density: density, isQuiet: isQuiet } = (0, $5FRIp$reactariacomponents.useSlottedContext)($4e301a98f0cc4e4f$export$d665dd135a51b28a);
    let isRTL = direction === 'rtl';
    let buttonTrigger = /*#__PURE__*/ (0, $5FRIp$reactjsxruntime.jsx)((0, $5FRIp$reactariacomponents.Heading), {
        ...domProps,
        level: level,
        ref: domRef,
        style: UNSAFE_style,
        className: (UNSAFE_className ?? '') + $4e301a98f0cc4e4f$var$headingStyle,
        children: /*#__PURE__*/ (0, $5FRIp$reactjsxruntime.jsxs)((0, $5FRIp$reactariacomponents.Button), {
            className: (renderProps)=>$4e301a98f0cc4e4f$var$buttonStyles({
                    ...renderProps,
                    size: size,
                    density: density,
                    isQuiet: isQuiet
                }),
            slot: "trigger",
            children: [
                /*#__PURE__*/ (0, $5FRIp$reactjsxruntime.jsx)((0, $e991cbcdf82ced71$exports.CenterBaseline), {
                    children: /*#__PURE__*/ (0, $5FRIp$reactjsxruntime.jsx)((0, $1df9f1c9262ce5df$exports.default), {
                        size: size,
                        className: $4e301a98f0cc4e4f$var$chevronStyles({
                            isExpanded: isExpanded,
                            isRTL: isRTL
                        }),
                        "aria-hidden": "true"
                    })
                }),
                props.children
            ]
        })
    });
    let ctx = (0, $5FRIp$react.useContext)($4e301a98f0cc4e4f$var$InternalDisclosureHeader);
    if (ctx) return buttonTrigger;
    return /*#__PURE__*/ (0, $5FRIp$reactjsxruntime.jsx)($4e301a98f0cc4e4f$export$1e037ddd32f5b8ac, {
        children: buttonTrigger
    });
});
const $4e301a98f0cc4e4f$var$panelStyles = function anonymous(props) {
    let rules = " .";
    rules += ' _c-bc1l9oh';
    rules += ' _c-1uotwbwg';
    rules += ' _c-eo0c6sf';
    rules += ' _c-enzzrge';
    rules += ' _c-enzykdd';
    rules += ' _c-enzwzjc';
    rules += ' _c-enzrfpb';
    rules += ' _ca';
    rules += ' _dbh';
    rules += ' _dg';
    rules += ' _eb';
    rules += ' _f-1x99dloc';
    rules += ' _fb';
    rules += ' an';
    if (props.isExpanded) rules += ' Ed';
    if (props.isExpanded) rules += ' Ff';
    if (props.isExpanded) {
        if (props.size === "XL") rules += ' Cundefined';
        else if (props.size === "L") rules += ' Ce';
        else if (props.size === "M") rules += ' Cundefined';
        else if (props.size === "S") rules += ' Cd';
    }
    if (props.isExpanded) {
        if (props.size === "XL") rules += ' Dundefined';
        else if (props.size === "L") rules += ' De';
        else if (props.size === "M") rules += ' Dundefined';
        else if (props.size === "S") rules += ' Dd';
    }
    return rules;
};
const $4e301a98f0cc4e4f$export$feabaa331e1d464c = /*#__PURE__*/ (0, $5FRIp$react.forwardRef)(function DisclosurePanel(props, ref) {
    let { UNSAFE_style: UNSAFE_style, UNSAFE_className: UNSAFE_className = '', ...otherProps } = props;
    const domProps = (0, $5FRIp$reactariautils.filterDOMProps)(otherProps);
    let { size: size } = (0, $5FRIp$reactariacomponents.useSlottedContext)($4e301a98f0cc4e4f$export$d665dd135a51b28a);
    let { isExpanded: isExpanded } = (0, $5FRIp$react.useContext)((0, $5FRIp$reactariacomponents.DisclosureStateContext));
    let panelRef = (0, $5FRIp$reactspectrumutils.useDOMRef)(ref);
    return /*#__PURE__*/ (0, $5FRIp$reactjsxruntime.jsx)((0, $5FRIp$reactariacomponents.DisclosurePanel), {
        ...domProps,
        ref: panelRef,
        style: UNSAFE_style,
        className: (UNSAFE_className ?? '') + $4e301a98f0cc4e4f$var$panelStyles({
            size: size,
            isExpanded: isExpanded
        }),
        children: props.children
    });
});


//# sourceMappingURL=Disclosure.cjs.map
