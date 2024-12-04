require("./Link.css");
var $5eb75e0c130e0669$exports = require("../icons/Skeleton.cjs");
var $ac757a4c2bd72aee$exports = require("../icons/useSpectrumContextProps.cjs");
var $7PkpH$reactjsxruntime = require("react/jsx-runtime");
var $7PkpH$reactariacomponents = require("react-aria-components");
var $7PkpH$react = require("react");
var $7PkpH$reactspectrumutils = require("@react-spectrum/utils");
var $7PkpH$reactariautils = require("@react-aria/utils");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "LinkContext", () => $064658f378a85eef$export$e2509388b49734e7);
$parcel$export(module.exports, "Link", () => $064658f378a85eef$export$a6c7ac8248d6e38a);
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






const $064658f378a85eef$export$e2509388b49734e7 = /*#__PURE__*/ (0, $7PkpH$react.createContext)(null);
const $064658f378a85eef$var$link = function anonymous(props, overrides) {
    let rules = " .";
    let matches = (overrides || '').match(/(?:^|\s)(?:y|z|A|B|_9|_8|h|_5|_4|__A|__c|__d|__a|__b|U|__Q|X|Z|V|W|l|q|r)[^\s]+/g) || [];
    rules += matches.join('');
    if (props.isFocusVisible) rules += ' _Lb';
    else rules += ' _La';
    rules += ' da_____z';
    if (props.staticColor === "black") rules += ' db';
    else if (props.staticColor === "white") rules += ' dc';
    else rules += ' dx';
    rules += ' _Nc';
    rules += ' _M-3t1z';
    rules += ' _vb';
    rules += ' _wb';
    rules += ' _xb';
    rules += ' _yb';
    if (props.isStandalone) {
        rules += ' _c-bc1l9oh';
        rules += ' _c-1uotwbwg';
        rules += ' _c-eo0c6sf';
        rules += ' _c-enzzrge';
        rules += ' _c-enzykdd';
        rules += ' _c-enzwzjc';
        rules += ' _c-enzrfpb';
        rules += ' _ca';
    }
    if (props.isStandalone) {
        rules += ' _dbf';
        rules += ' _de';
    }
    if (props.isStandalone) rules += ' _ec';
    if (props.isStandalone) {
        rules += ' _f-1x99dlob';
        rules += ' _fa';
    }
    rules += ' aa_____D';
    if (props.staticColor === "black") rules += ' ab';
    else if (props.staticColor === "white") rules += ' ac';
    else if (props.variant === "secondary") {
        if (props.isPressed) rules += ' ao';
        else if (props.isFocusVisible) rules += ' ao';
        else if (props.isHovered) rules += ' ao';
        else rules += ' an';
    } else if (props.variant === "primary") {
        if (props.isPressed) rules += ' az';
        else if (props.isFocusVisible) rules += ' az';
        else if (props.isHovered) rules += ' az';
        else rules += ' ay';
    }
    rules += ' _Oa';
    rules += ' _Q-375x7f';
    rules += ' _Ra';
    if (props.isStandalone) {
        if (props.isQuiet) {
            if (props.isFocusVisible) rules += ' _la';
            else if (props.isHovered) rules += ' _la';
            else rules += ' _ld';
        }
    } else rules += ' _la';
    rules += ' __R-yksgrp';
    return rules;
};
const $064658f378a85eef$export$a6c7ac8248d6e38a = /*#__PURE__*/ (0, $7PkpH$react.forwardRef)(function Link(props, ref) {
    [props, ref] = (0, $ac757a4c2bd72aee$exports.useSpectrumContextProps)(props, ref, $064658f378a85eef$export$e2509388b49734e7);
    let { variant: variant = 'primary', staticColor: staticColor, isQuiet: isQuiet, isStandalone: isStandalone, UNSAFE_style: UNSAFE_style, UNSAFE_className: UNSAFE_className = '', styles: styles, children: children } = props;
    let domRef = (0, $7PkpH$reactspectrumutils.useFocusableRef)(ref);
    let isSkeleton = (0, $7PkpH$react.useContext)((0, $5eb75e0c130e0669$exports.SkeletonContext)) || false;
    [children, UNSAFE_style] = (0, $5eb75e0c130e0669$exports.useSkeletonText)(children, UNSAFE_style);
    (0, $7PkpH$reactariautils.useLayoutEffect)(()=>{
        if (domRef.current) // TODO: should RAC Link pass through inert?
        domRef.current.inert = isSkeleton;
    }, [
        domRef,
        isSkeleton
    ]);
    return /*#__PURE__*/ (0, $7PkpH$reactjsxruntime.jsx)((0, $7PkpH$reactariacomponents.Link), {
        ...props,
        ref: domRef,
        style: UNSAFE_style,
        className: (renderProps)=>UNSAFE_className + $064658f378a85eef$var$link({
                ...renderProps,
                variant: variant,
                staticColor: staticColor,
                isQuiet: isQuiet,
                isStandalone: isStandalone,
                isSkeleton: isSkeleton
            }, styles),
        children: children
    });
});


//# sourceMappingURL=Link.cjs.map
