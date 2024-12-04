import "./Menu.css";
import {box as $9b405e0f8095dce0$export$827f4ee28efc37, iconStyles as $9b405e0f8095dce0$export$2c99b98b77550cb4} from "./Checkbox.mjs";
import {centerBaseline as $1f4b04be3f24aae3$export$9d7e2342a7e53afa} from "./CenterBaseline.mjs";
import $81cf3d4588736e7d$export$2e2bcd8739ae039 from "./Checkmark.mjs";
import $4b69f02ec06b9226$export$2e2bcd8739ae039 from "./Chevron.mjs";
import {divider as $bdf52657dac0f070$export$e8c9778bf415dd08} from "./Divider.mjs";
import {HeaderContext as $8e847109a6ab556d$export$e0e4026c12a8bdbb, HeadingContext as $8e847109a6ab556d$export$d688439359537581, KeyboardContext as $8e847109a6ab556d$export$744d98a3b8a94e1c, Text as $8e847109a6ab556d$export$5f1af8db9871e1d6, TextContext as $8e847109a6ab556d$export$9afb8bc826b033ea} from "./Content.mjs";
import {IconContext as $ac8c32e6775ddd1f$export$a49f528ae1a4d0ed} from "../icons/Icon.mjs";
import {ImageContext as $dbd6f0b2503b938c$export$8151eb379fcf2442} from "./Image.mjs";
import $d9f847a2895a93dc$export$2e2bcd8739ae039 from "./LinkOut.mjs";
import {mergeStyles as $feb886035e0d4633$export$e618dc39ac9ad607} from "../icons/runtime.mjs";
import {PopoverBase as $88b746eba92c8d0d$export$fde1b04c590741a3} from "./Popover.mjs";
import {pressScale as $10ea7662e51a285b$export$56e8cba416805d8d} from "./pressScale.mjs";
import {useSpectrumContextProps as $5ce63c423902f47d$export$764f6146fadd77f7} from "../icons/useSpectrumContextProps.mjs";
import {jsx as $g2Qzl$jsx, jsxs as $g2Qzl$jsxs, Fragment as $g2Qzl$Fragment} from "react/jsx-runtime";
import {Provider as $g2Qzl$Provider, Menu as $g2Qzl$Menu, Separator as $g2Qzl$Separator, MenuSection as $g2Qzl$MenuSection, MenuItem as $g2Qzl$MenuItem, MenuTrigger as $g2Qzl$MenuTrigger, SubmenuTrigger as $g2Qzl$SubmenuTrigger} from "react-aria-components";
import {createContext as $g2Qzl$createContext, forwardRef as $g2Qzl$forwardRef, useContext as $g2Qzl$useContext, useRef as $g2Qzl$useRef} from "react";
import {useLocale as $g2Qzl$useLocale} from "react-aria";
import {PressResponder as $g2Qzl$PressResponder} from "@react-aria/interactions";

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

















const $13afb0ea5f0ed767$export$c7e742effb1c51e2 = /*#__PURE__*/ (0, $g2Qzl$createContext)(null);
let $13afb0ea5f0ed767$export$b1e5508a851be14d = function anonymous(props, overrides) {
    let rules = " .";
    let matches = (overrides || '').match(/(?:^|\s)(?:y|z|A|B|_9|_8|h|_5|_4|__A|__c|__d|__a|__b|U|__Q|X|Z|V|W|l|q|r)[^\s]+/g) || [];
    rules += matches.join('');
    let $r = false;
    for (let p of matches)if (/^\s*r/.test(p)) $r = true;
    rules += ' _La';
    rules += ' _Zf';
    if (props.size === "XL") rules += ' __h-358ibk';
    else if (props.size === "L") rules += ' __h-1w0s9l0';
    else if (props.size === "M") rules += ' __h-1kgdida';
    else if (props.size === "S") rules += ' __h-17i5a9u';
    rules += ' __na';
    rules += ' p-17zqamw';
    if (props.isPopover) rules += ' __va';
    if (props.isPopover) rules += ' __wa';
    if (!$r) {
        if (props.isPopover) rules += ' r_____z';
    }
    if (props.isPopover) rules += ' Ed';
    if (props.isPopover) rules += ' Fd';
    if (props.isPopover) rules += ' Cd';
    if (props.isPopover) rules += ' Dd';
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
let $13afb0ea5f0ed767$export$fe2e36411d703b3d = " . __a-3t1y __b-3hmpv _1c _Zf __j-f9k53a __h-1cwd7ud";
let $13afb0ea5f0ed767$export$562e61a0817eb32e = function anonymous(props) {
    let rules = " .";
    if (props.isPressed) rules += ' ao';
    else if (props.isFocusVisible) rules += ' ao';
    else if (props.isHovered) rules += ' ao';
    else rules += ' an';
    rules += ' __a-3t1z';
    rules += ' __b-3hmpw';
    rules += ' __na';
    rules += ' o-375tou';
    rules += ' E-1dbqcch';
    rules += ' F-1dbqcch';
    if (props.size === "XL") rules += ' -_375tou_o-j';
    else if (props.size === "L") rules += ' -_375tou_o-i';
    else if (props.size === "S") rules += ' -_375tou_o-h';
    else if (props.size === "XS") rules += ' -_375tou_o-g';
    else rules += ' -_375tou_o-f';
    return rules;
};
let $13afb0ea5f0ed767$export$300ac6f106ef584d = " . _ca _c-enzrfpb _c-enzwzjc _c-enzykdd _c-enzzrge _c-eo0c6sf _c-1uotwbwg _c-bc1l9oh _de _dbf _ed _fa _f-1x99dlob an Aa Ba ya za";
let $13afb0ea5f0ed767$export$f68e44d881264486 = function anonymous(props, overrides) {
    let rules = " .";
    let matches = (overrides || '').match(/(?:^|\s)(?:y|z|A|B|_9|_8|h|_5|_4|__A|__c|__d|__a|__b|U|__Q|X|Z|V|W|l|q|r)[^\s]+/g) || [];
    rules += matches.join('');
    let $U = false;
    let $__a = false;
    let $__b = false;
    for (let p of matches){
        if (/^\s*U/.test(p)) $U = true;
        if (/^\s*__a/.test(p)) $__a = true;
        if (/^\s*__b/.test(p)) $__b = true;
    }
    if (props.isFocusVisible) rules += ' _Lb';
    else rules += ' _La';
    rules += ' da_____z';
    rules += ' dx';
    rules += ' _Nc';
    rules += ' _M-3t1z';
    rules += ' __na';
    rules += ' _vh';
    rules += ' _wh';
    rules += ' _xh';
    rules += ' _yh';
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
    if (props.isDisabled) {
        rules += ' aa_____B';
        rules += ' aj';
    } else {
        if (props.isPressed) rules += ' ao';
        else if (props.isFocusVisible) rules += ' ao';
        else if (props.isHovered) rules += ' ao';
        else rules += ' an';
    }
    rules += ' -_1gogtue_E--1dbqcch';
    rules += ' F-1gogtue';
    if (props.isFocused) rules += ' bh';
    else rules += ' ba';
    if (!$U) rules += ' Uc';
    if (!$__a) rules += ' __a-3t1y';
    if (!$__b) rules += ' __b-3hmpv';
    rules += ' _Zf';
    rules += ' __j-f9k53a';
    rules += ' __h-1cwd7ud';
    rules += ' __i-1mnwavb-1wamrdj';
    rules += ' __i-kmtuht';
    rules += ' i-1mnwavb-cplj4k';
    rules += ' _1d';
    rules += ' o-375tou';
    rules += ' _ld';
    if (props.isLink) rules += ' __Hc';
    else rules += ' __Hb';
    rules += ' _Oa';
    rules += ' _Q-375x7f';
    rules += ' _Ra';
    if (props.size === "XL") rules += ' -_375tou_o-j';
    else if (props.size === "L") rules += ' -_375tou_o-i';
    else if (props.size === "S") rules += ' -_375tou_o-h';
    else if (props.size === "XS") rules += ' -_375tou_o-g';
    else rules += ' -_375tou_o-f';
    return rules;
};
let $13afb0ea5f0ed767$export$292abbf31ed842a = function anonymous(props) {
    let rules = " .";
    if (props.isSelected) rules += ' __Ea';
    else rules += ' __Eb';
    rules += ' __a-jjmfgu';
    rules += ' __b-jjmfgu';
    rules += ' __c-jjmfgu';
    rules += ' __d-jjmfgu';
    if (props.isPressed) rules += ' az';
    else if (props.isFocusVisible) rules += ' az';
    else if (props.isHovered) rules += ' az';
    else rules += ' ay';
    rules += ' -rwx0fg_e-a_____X';
    rules += ' -rwx0fg_e-b';
    rules += ' zF';
    rules += ' _bb';
    return rules;
};
let $13afb0ea5f0ed767$var$checkbox = " . __a-jjmfgu __b-jjmfgu __c-jjmfgu __d-jjmfgu zF";
let $13afb0ea5f0ed767$export$1ca1ec8b29a4ce27 = " . _Za l-1sthc3k k-1sthc3k zG zbH -rwx0fg_e-b";
let $13afb0ea5f0ed767$export$31d1842a0fd736e6 = " . _Zd __a-ykjmzy __b-ykjmzy __c-ykjmzy __d-ykjmzy";
let $13afb0ea5f0ed767$var$image = function anonymous(props) {
    let rules = " .";
    rules += ' __a-ykjmzy';
    rules += ' __b-ykjmzy';
    rules += ' __c-ykjmzy';
    rules += ' __d-7u9dhl';
    rules += ' zbH';
    rules += ' zG';
    rules += ' A-1kmz9hv';
    rules += ' _4d';
    rules += ' _vb';
    rules += ' _wb';
    rules += ' _xb';
    rules += ' _yb';
    if (props.size === "XL") rules += ' l_a';
    else if (props.size === "L") rules += ' l6';
    else if (props.size === "M") rules += ' l2';
    else if (props.size === "S") rules += ' lU';
    else rules += ' l2';
    if (props.size === "XL") rules += ' k_a';
    else if (props.size === "L") rules += ' k6';
    else if (props.size === "M") rules += ' k2';
    else if (props.size === "S") rules += ' kU';
    else rules += ' k2';
    rules += ' _bb';
    rules += ' __Na';
    return rules;
};
let $13afb0ea5f0ed767$export$1237798dc640739a = function anonymous(props) {
    let rules = " .";
    rules += ' __a-4e9m05';
    rules += ' __b-4e9m05';
    rules += ' __c-4e9m05';
    rules += ' __d-4e9m05';
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
    rules += ' _ec';
    rules += ' _f-1x99dlob';
    rules += ' _fa';
    rules += ' a-17zqamw';
    rules += ' A-1gogtue';
    return rules;
};
let $13afb0ea5f0ed767$export$6d59db4903f20f7d = function anonymous(props) {
    let rules = " .";
    rules += ' __a-14f9fux';
    rules += ' __b-14f9fux';
    rules += ' __c-14f9fux';
    rules += ' __d-14f9fux';
    if (props.size === "XL") {
        rules += ' _c-bc1l9oh';
        rules += ' _c-1uotwbwg';
        rules += ' _c-eo0c6sf';
        rules += ' _c-enzzrge';
        rules += ' _c-enzykdd';
        rules += ' _c-enzwzjc';
        rules += ' _c-enzrfpb';
        rules += ' _ca';
    } else if (props.size === "L") {
        rules += ' _c-bc1l9oh';
        rules += ' _c-1uotwbwg';
        rules += ' _c-eo0c6sf';
        rules += ' _c-enzzrge';
        rules += ' _c-enzykdd';
        rules += ' _c-enzwzjc';
        rules += ' _c-enzrfpb';
        rules += ' _ca';
    } else if (props.size === "M") {
        rules += ' _c-bc1l9oh';
        rules += ' _c-1uotwbwg';
        rules += ' _c-eo0c6sf';
        rules += ' _c-enzzrge';
        rules += ' _c-enzykdd';
        rules += ' _c-enzwzjc';
        rules += ' _c-enzrfpb';
        rules += ' _ca';
    } else if (props.size === "S") {
        rules += ' _c-bc1l9oh';
        rules += ' _c-1uotwbwg';
        rules += ' _c-eo0c6sf';
        rules += ' _c-enzzrge';
        rules += ' _c-enzykdd';
        rules += ' _c-enzwzjc';
        rules += ' _c-enzrfpb';
        rules += ' _ca';
    } else {
        rules += ' _c-bc1l9oh';
        rules += ' _c-1uotwbwg';
        rules += ' _c-eo0c6sf';
        rules += ' _c-enzzrge';
        rules += ' _c-enzykdd';
        rules += ' _c-enzwzjc';
        rules += ' _c-enzrfpb';
        rules += ' _ca';
    }
    if (props.size === "XL") {
        rules += ' _dbh';
        rules += ' _dg';
    } else if (props.size === "L") {
        rules += ' _dbf';
        rules += ' _de';
    } else if (props.size === "M") {
        rules += ' _dbd';
        rules += ' _dc';
    } else if (props.size === "S") {
        rules += ' _dbb';
        rules += ' _da';
    } else {
        rules += ' _dbd';
        rules += ' _dc';
    }
    if (props.size === "XL") rules += ' _eb';
    else if (props.size === "L") rules += ' _eb';
    else if (props.size === "M") rules += ' _eb';
    else if (props.size === "S") rules += ' _eb';
    else rules += ' _eb';
    if (props.size === "XL") {
        rules += ' _f-1x99dlob';
        rules += ' _fa';
    } else if (props.size === "L") {
        rules += ' _f-1x99dlob';
        rules += ' _fa';
    } else if (props.size === "M") {
        rules += ' _f-1x99dlob';
        rules += ' _fa';
    } else if (props.size === "S") {
        rules += ' _f-1x99dlob';
        rules += ' _fa';
    } else {
        rules += ' _f-1x99dlob';
        rules += ' _fa';
    }
    if (props.isDisabled) rules += ' aj';
    else if (props.isFocused) rules += ' an';
    else {
        if (props.isPressed) rules += ' an';
        else if (props.isFocusVisible) rules += ' an';
        else if (props.isHovered) rules += ' an';
        else rules += ' am';
    }
    rules += ' _Oa';
    rules += ' _Q-375x7f';
    rules += ' _Ra';
    return rules;
};
let $13afb0ea5f0ed767$var$value = " . __a-4lc1fm __b-4lc1fm __c-4lc1fm __d-4lc1fm yd";
let $13afb0ea5f0ed767$var$keyboard = function anonymous(props) {
    let rules = " .";
    rules += ' __a-1fzj7g6';
    rules += ' __b-1fzj7g6';
    rules += ' __c-1fzj7g6';
    rules += ' __d-1fzj7g6';
    rules += ' yd';
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
    rules += ' _ea';
    rules += ' _f-1x99dlob';
    rules += ' _fa';
    if (props.isDisabled) rules += ' aa_____B';
    if (props.isDisabled) rules += ' aj';
    else rules += ' al';
    return rules;
};
let $13afb0ea5f0ed767$var$descriptor = " . __a-1eqbudg __b-1eqbudg __c-1eqbudg __d-1eqbudg yd -rwx0fg_e-b";
let $13afb0ea5f0ed767$var$InternalMenuContext = /*#__PURE__*/ (0, $g2Qzl$createContext)({
    size: 'M',
    isSubmenu: false
});
let $13afb0ea5f0ed767$var$InternalMenuTriggerContext = /*#__PURE__*/ (0, $g2Qzl$createContext)(null);
const $13afb0ea5f0ed767$export$d9b273488cd8ce6f = /*#__PURE__*/ (0, $g2Qzl$forwardRef)(function Menu(props, ref) {
    [props, ref] = (0, $5ce63c423902f47d$export$764f6146fadd77f7)(props, ref, $13afb0ea5f0ed767$export$c7e742effb1c51e2);
    let { isSubmenu: isSubmenu, size: ctxSize } = (0, $g2Qzl$useContext)($13afb0ea5f0ed767$var$InternalMenuContext);
    let { children: children, size: size = ctxSize, UNSAFE_style: UNSAFE_style, UNSAFE_className: UNSAFE_className, styles: styles } = props;
    let ctx = (0, $g2Qzl$useContext)($13afb0ea5f0ed767$var$InternalMenuTriggerContext);
    let { align: align = 'start', direction: direction = 'bottom', shouldFlip: shouldFlip } = ctx ?? {};
    // TODO: change offset/crossoffset based on size? scale?
    // actual values?
    let initialPlacement;
    switch(direction){
        case 'left':
        case 'right':
        case 'start':
        case 'end':
            initialPlacement = `${direction} ${align === 'end' ? 'bottom' : 'top'}`;
            break;
        case 'bottom':
        case 'top':
        default:
            initialPlacement = `${direction} ${align}`;
    }
    if (isSubmenu) initialPlacement = 'end top';
    let content = /*#__PURE__*/ (0, $g2Qzl$jsx)($13afb0ea5f0ed767$var$InternalMenuContext.Provider, {
        value: {
            size: size,
            isSubmenu: true
        },
        children: /*#__PURE__*/ (0, $g2Qzl$jsx)((0, $g2Qzl$Provider), {
            values: [
                [
                    (0, $8e847109a6ab556d$export$e0e4026c12a8bdbb),
                    {
                        styles: $13afb0ea5f0ed767$export$562e61a0817eb32e({
                            size: size
                        })
                    }
                ],
                [
                    (0, $8e847109a6ab556d$export$d688439359537581),
                    {
                        styles: $13afb0ea5f0ed767$export$300ac6f106ef584d
                    }
                ],
                [
                    (0, $8e847109a6ab556d$export$9afb8bc826b033ea),
                    {
                        slots: {
                            'description': {
                                styles: $13afb0ea5f0ed767$export$6d59db4903f20f7d({
                                    size: size
                                })
                            }
                        }
                    }
                ]
            ],
            children: /*#__PURE__*/ (0, $g2Qzl$jsx)((0, $g2Qzl$Menu), {
                ...props,
                className: $13afb0ea5f0ed767$export$b1e5508a851be14d({
                    size: size,
                    isPopover: !!ctx || isSubmenu
                }, ctx ? null : styles),
                children: children
            })
        })
    });
    if (ctx || isSubmenu) return /*#__PURE__*/ (0, $g2Qzl$jsx)((0, $88b746eba92c8d0d$export$fde1b04c590741a3), {
        ref: ref,
        hideArrow: true,
        placement: initialPlacement,
        shouldFlip: shouldFlip,
        // For submenus, the offset from the edge of the popover should be 10px.
        // Subtract 8px for the padding around the parent menu.
        offset: isSubmenu ? -2 : 8,
        // Offset by padding + border so that the first item in a submenu lines up with the parent menu item.
        crossOffset: isSubmenu ? -9 : 0,
        UNSAFE_style: UNSAFE_style,
        UNSAFE_className: UNSAFE_className,
        styles: styles,
        children: content
    });
    return content;
});
function $13afb0ea5f0ed767$export$2e0a83ec2e27ecbb(props) {
    return /*#__PURE__*/ (0, $g2Qzl$jsx)((0, $g2Qzl$Separator), {
        ...props,
        className: (0, $feb886035e0d4633$export$e618dc39ac9ad607)((0, $bdf52657dac0f070$export$e8c9778bf415dd08)({
            size: 'M',
            orientation: 'horizontal',
            staticColor: undefined
        }), " . _Zf _Z-uamghwj __a-3t1z __b-3hmpw A-1x1h2a6 B-1x1h2a6")
    });
}
function $13afb0ea5f0ed767$export$4b1545b4f2016d26(props) {
    // remember, context doesn't work if it's around Section nor inside
    return /*#__PURE__*/ (0, $g2Qzl$jsxs)((0, $g2Qzl$Fragment), {
        children: [
            /*#__PURE__*/ (0, $g2Qzl$jsx)((0, $g2Qzl$MenuSection), {
                ...props,
                className: $13afb0ea5f0ed767$export$fe2e36411d703b3d,
                children: props.children
            }),
            /*#__PURE__*/ (0, $g2Qzl$jsx)($13afb0ea5f0ed767$export$2e0a83ec2e27ecbb, {})
        ]
    });
}
const $13afb0ea5f0ed767$var$checkmarkIconSize = {
    S: 'XS',
    M: 'M',
    L: 'L',
    XL: 'XL'
};
const $13afb0ea5f0ed767$var$linkIconSize = {
    S: 'M',
    M: 'L',
    L: 'XL',
    XL: 'XL'
};
function $13afb0ea5f0ed767$export$2ce376c2cc3355c8(props1) {
    let ref = (0, $g2Qzl$useRef)(null);
    let isLink = props1.href != null;
    let isLinkOut = isLink && props1.target === '_blank';
    let { size: size } = (0, $g2Qzl$useContext)($13afb0ea5f0ed767$var$InternalMenuContext);
    let textValue = props1.textValue || (typeof props1.children === 'string' ? props1.children : undefined);
    let { direction: direction } = (0, $g2Qzl$useLocale)();
    return /*#__PURE__*/ (0, $g2Qzl$jsx)((0, $g2Qzl$MenuItem), {
        ...props1,
        textValue: textValue,
        ref: ref,
        style: (0, $10ea7662e51a285b$export$56e8cba416805d8d)(ref, props1.UNSAFE_style),
        className: (renderProps)=>(props1.UNSAFE_className || '') + $13afb0ea5f0ed767$export$f68e44d881264486({
                ...renderProps,
                isFocused: renderProps.hasSubmenu && renderProps.isOpen || renderProps.isFocused,
                size: size,
                isLink: isLink
            }, props1.styles),
        children: (renderProps)=>{
            let { children: children } = props1;
            let checkboxRenderProps = {
                ...renderProps,
                size: size,
                isFocused: false,
                isFocusVisible: false,
                isIndeterminate: false,
                isReadOnly: false,
                isInvalid: false,
                isRequired: false
            };
            return /*#__PURE__*/ (0, $g2Qzl$jsx)((0, $g2Qzl$Fragment), {
                children: /*#__PURE__*/ (0, $g2Qzl$jsxs)((0, $g2Qzl$Provider), {
                    values: [
                        [
                            (0, $ac8c32e6775ddd1f$export$a49f528ae1a4d0ed),
                            {
                                slots: {
                                    icon: {
                                        render: (0, $1f4b04be3f24aae3$export$9d7e2342a7e53afa)({
                                            slot: 'icon',
                                            styles: $13afb0ea5f0ed767$export$31d1842a0fd736e6
                                        }),
                                        styles: $13afb0ea5f0ed767$export$1ca1ec8b29a4ce27
                                    },
                                    descriptor: {
                                        render: (0, $1f4b04be3f24aae3$export$9d7e2342a7e53afa)({
                                            slot: 'descriptor',
                                            styles: $13afb0ea5f0ed767$var$descriptor
                                        })
                                    } // TODO: remove once we have default?
                                }
                            }
                        ],
                        [
                            (0, $8e847109a6ab556d$export$9afb8bc826b033ea),
                            {
                                slots: {
                                    label: {
                                        styles: $13afb0ea5f0ed767$export$1237798dc640739a({
                                            size: size
                                        })
                                    },
                                    description: {
                                        styles: $13afb0ea5f0ed767$export$6d59db4903f20f7d({
                                            ...renderProps,
                                            size: size
                                        })
                                    },
                                    value: {
                                        styles: $13afb0ea5f0ed767$var$value
                                    }
                                }
                            }
                        ],
                        [
                            (0, $8e847109a6ab556d$export$744d98a3b8a94e1c),
                            {
                                styles: $13afb0ea5f0ed767$var$keyboard({
                                    size: size,
                                    isDisabled: renderProps.isDisabled
                                })
                            }
                        ],
                        [
                            (0, $dbd6f0b2503b938c$export$8151eb379fcf2442),
                            {
                                styles: $13afb0ea5f0ed767$var$image({
                                    size: size
                                })
                            }
                        ]
                    ],
                    children: [
                        renderProps.selectionMode === 'single' && !isLink && !renderProps.hasSubmenu && /*#__PURE__*/ (0, $g2Qzl$jsx)((0, $81cf3d4588736e7d$export$2e2bcd8739ae039), {
                            size: $13afb0ea5f0ed767$var$checkmarkIconSize[size],
                            className: $13afb0ea5f0ed767$export$292abbf31ed842a({
                                ...renderProps,
                                size: size
                            })
                        }),
                        renderProps.selectionMode === 'multiple' && !isLink && !renderProps.hasSubmenu && /*#__PURE__*/ (0, $g2Qzl$jsx)("div", {
                            className: (0, $feb886035e0d4633$export$e618dc39ac9ad607)($13afb0ea5f0ed767$var$checkbox, (0, $9b405e0f8095dce0$export$827f4ee28efc37)(checkboxRenderProps)),
                            children: /*#__PURE__*/ (0, $g2Qzl$jsx)((0, $81cf3d4588736e7d$export$2e2bcd8739ae039), {
                                size: size,
                                className: (0, $9b405e0f8095dce0$export$2c99b98b77550cb4)
                            })
                        }),
                        typeof children === 'string' ? /*#__PURE__*/ (0, $g2Qzl$jsx)((0, $8e847109a6ab556d$export$5f1af8db9871e1d6), {
                            slot: "label",
                            children: children
                        }) : children,
                        isLinkOut && /*#__PURE__*/ (0, $g2Qzl$jsx)((0, $d9f847a2895a93dc$export$2e2bcd8739ae039), {
                            size: $13afb0ea5f0ed767$var$linkIconSize[size],
                            className: $13afb0ea5f0ed767$var$descriptor
                        }),
                        renderProps.hasSubmenu && /*#__PURE__*/ (0, $g2Qzl$jsx)("div", {
                            slot: "descriptor",
                            className: $13afb0ea5f0ed767$var$descriptor,
                            children: /*#__PURE__*/ (0, $g2Qzl$jsx)((0, $4b69f02ec06b9226$export$2e2bcd8739ae039), {
                                size: size,
                                className: function anonymous(props) {
                                    let rules = " .";
                                    if (props.direction === "rtl") rules += ' S-3hmpv';
                                    return rules;
                                }({
                                    direction: direction
                                })
                            })
                        })
                    ]
                })
            });
        }
    });
}
/**
 * The MenuTrigger serves as a wrapper around a Menu and its associated trigger,
 * linking the Menu's open state with the trigger's press state.
 */ function $13afb0ea5f0ed767$export$27d2ad3c5815583e(props) {
    return /*#__PURE__*/ (0, $g2Qzl$jsx)($13afb0ea5f0ed767$var$InternalMenuTriggerContext.Provider, {
        value: {
            align: props.align,
            direction: props.direction,
            shouldFlip: props.shouldFlip
        },
        children: /*#__PURE__*/ (0, $g2Qzl$jsx)((0, $g2Qzl$MenuTrigger), {
            ...props,
            children: /*#__PURE__*/ (0, $g2Qzl$jsx)((0, $g2Qzl$PressResponder), {
                isPressed: false,
                children: props.children
            })
        })
    });
}
const $13afb0ea5f0ed767$export$ecabc99eeffab7ca = (0, $g2Qzl$SubmenuTrigger);
function $13afb0ea5f0ed767$export$aebfca372ec4a7db(props) {
    return /*#__PURE__*/ (0, $g2Qzl$jsx)("div", {});
}


export {$13afb0ea5f0ed767$export$c7e742effb1c51e2 as MenuContext, $13afb0ea5f0ed767$export$b1e5508a851be14d as menu, $13afb0ea5f0ed767$export$fe2e36411d703b3d as section, $13afb0ea5f0ed767$export$562e61a0817eb32e as sectionHeader, $13afb0ea5f0ed767$export$300ac6f106ef584d as sectionHeading, $13afb0ea5f0ed767$export$f68e44d881264486 as menuitem, $13afb0ea5f0ed767$export$292abbf31ed842a as checkmark, $13afb0ea5f0ed767$export$1ca1ec8b29a4ce27 as icon, $13afb0ea5f0ed767$export$31d1842a0fd736e6 as iconCenterWrapper, $13afb0ea5f0ed767$export$1237798dc640739a as label, $13afb0ea5f0ed767$export$6d59db4903f20f7d as description, $13afb0ea5f0ed767$export$d9b273488cd8ce6f as Menu, $13afb0ea5f0ed767$export$2e0a83ec2e27ecbb as Divider, $13afb0ea5f0ed767$export$4b1545b4f2016d26 as MenuSection, $13afb0ea5f0ed767$export$2ce376c2cc3355c8 as MenuItem, $13afb0ea5f0ed767$export$27d2ad3c5815583e as MenuTrigger, $13afb0ea5f0ed767$export$ecabc99eeffab7ca as SubmenuTrigger, $13afb0ea5f0ed767$export$aebfca372ec4a7db as CombinedMenu};
//# sourceMappingURL=Menu.mjs.map
