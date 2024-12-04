require("./Menu.css");
var $af04e099a53d3e85$exports = require("./Checkbox.cjs");
var $e991cbcdf82ced71$exports = require("./CenterBaseline.cjs");
var $dba2b18fc5727f9b$exports = require("./Checkmark.cjs");
var $1df9f1c9262ce5df$exports = require("./Chevron.cjs");
var $2d04acb918636de0$exports = require("./Divider.cjs");
var $6367bc87eb7d24ad$exports = require("./Content.cjs");
var $bde97c91243ed164$exports = require("../icons/Icon.cjs");
var $053b76ed3d29e13b$exports = require("./Image.cjs");
var $377d9a1b51957cfd$exports = require("./LinkOut.cjs");
var $308b180f49d82d28$exports = require("../icons/runtime.cjs");
var $493371ef39bf7a55$exports = require("./Popover.cjs");
var $2061c83559b50a66$exports = require("./pressScale.cjs");
var $ac757a4c2bd72aee$exports = require("../icons/useSpectrumContextProps.cjs");
var $4tP7K$reactjsxruntime = require("react/jsx-runtime");
var $4tP7K$reactariacomponents = require("react-aria-components");
var $4tP7K$react = require("react");
var $4tP7K$reactaria = require("react-aria");
var $4tP7K$reactariainteractions = require("@react-aria/interactions");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "MenuContext", () => $e741ea6b88ce4866$export$c7e742effb1c51e2);
$parcel$export(module.exports, "section", () => $e741ea6b88ce4866$export$fe2e36411d703b3d);
$parcel$export(module.exports, "sectionHeader", () => $e741ea6b88ce4866$export$562e61a0817eb32e);
$parcel$export(module.exports, "sectionHeading", () => $e741ea6b88ce4866$export$300ac6f106ef584d);
$parcel$export(module.exports, "menuitem", () => $e741ea6b88ce4866$export$f68e44d881264486);
$parcel$export(module.exports, "checkmark", () => $e741ea6b88ce4866$export$292abbf31ed842a);
$parcel$export(module.exports, "icon", () => $e741ea6b88ce4866$export$1ca1ec8b29a4ce27);
$parcel$export(module.exports, "iconCenterWrapper", () => $e741ea6b88ce4866$export$31d1842a0fd736e6);
$parcel$export(module.exports, "label", () => $e741ea6b88ce4866$export$1237798dc640739a);
$parcel$export(module.exports, "description", () => $e741ea6b88ce4866$export$6d59db4903f20f7d);
$parcel$export(module.exports, "Menu", () => $e741ea6b88ce4866$export$d9b273488cd8ce6f);
$parcel$export(module.exports, "Divider", () => $e741ea6b88ce4866$export$2e0a83ec2e27ecbb);
$parcel$export(module.exports, "MenuSection", () => $e741ea6b88ce4866$export$4b1545b4f2016d26);
$parcel$export(module.exports, "MenuItem", () => $e741ea6b88ce4866$export$2ce376c2cc3355c8);
$parcel$export(module.exports, "MenuTrigger", () => $e741ea6b88ce4866$export$27d2ad3c5815583e);
$parcel$export(module.exports, "SubmenuTrigger", () => $e741ea6b88ce4866$export$ecabc99eeffab7ca);
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

















const $e741ea6b88ce4866$export$c7e742effb1c51e2 = /*#__PURE__*/ (0, $4tP7K$react.createContext)(null);
let $e741ea6b88ce4866$export$b1e5508a851be14d = function anonymous(props, overrides) {
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
let $e741ea6b88ce4866$export$fe2e36411d703b3d = " . __a-3t1y __b-3hmpv _1c _Zf __j-f9k53a __h-1cwd7ud";
let $e741ea6b88ce4866$export$562e61a0817eb32e = function anonymous(props) {
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
let $e741ea6b88ce4866$export$300ac6f106ef584d = " . _ca _c-enzrfpb _c-enzwzjc _c-enzykdd _c-enzzrge _c-eo0c6sf _c-1uotwbwg _c-bc1l9oh _de _dbf _ed _fa _f-1x99dlob an Aa Ba ya za";
let $e741ea6b88ce4866$export$f68e44d881264486 = function anonymous(props, overrides) {
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
let $e741ea6b88ce4866$export$292abbf31ed842a = function anonymous(props) {
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
let $e741ea6b88ce4866$var$checkbox = " . __a-jjmfgu __b-jjmfgu __c-jjmfgu __d-jjmfgu zF";
let $e741ea6b88ce4866$export$1ca1ec8b29a4ce27 = " . _Za l-1sthc3k k-1sthc3k zG zbH -rwx0fg_e-b";
let $e741ea6b88ce4866$export$31d1842a0fd736e6 = " . _Zd __a-ykjmzy __b-ykjmzy __c-ykjmzy __d-ykjmzy";
let $e741ea6b88ce4866$var$image = function anonymous(props) {
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
let $e741ea6b88ce4866$export$1237798dc640739a = function anonymous(props) {
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
let $e741ea6b88ce4866$export$6d59db4903f20f7d = function anonymous(props) {
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
let $e741ea6b88ce4866$var$value = " . __a-4lc1fm __b-4lc1fm __c-4lc1fm __d-4lc1fm yd";
let $e741ea6b88ce4866$var$keyboard = function anonymous(props) {
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
let $e741ea6b88ce4866$var$descriptor = " . __a-1eqbudg __b-1eqbudg __c-1eqbudg __d-1eqbudg yd -rwx0fg_e-b";
let $e741ea6b88ce4866$var$InternalMenuContext = /*#__PURE__*/ (0, $4tP7K$react.createContext)({
    size: 'M',
    isSubmenu: false
});
let $e741ea6b88ce4866$var$InternalMenuTriggerContext = /*#__PURE__*/ (0, $4tP7K$react.createContext)(null);
const $e741ea6b88ce4866$export$d9b273488cd8ce6f = /*#__PURE__*/ (0, $4tP7K$react.forwardRef)(function Menu(props, ref) {
    [props, ref] = (0, $ac757a4c2bd72aee$exports.useSpectrumContextProps)(props, ref, $e741ea6b88ce4866$export$c7e742effb1c51e2);
    let { isSubmenu: isSubmenu, size: ctxSize } = (0, $4tP7K$react.useContext)($e741ea6b88ce4866$var$InternalMenuContext);
    let { children: children, size: size = ctxSize, UNSAFE_style: UNSAFE_style, UNSAFE_className: UNSAFE_className, styles: styles } = props;
    let ctx = (0, $4tP7K$react.useContext)($e741ea6b88ce4866$var$InternalMenuTriggerContext);
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
    let content = /*#__PURE__*/ (0, $4tP7K$reactjsxruntime.jsx)($e741ea6b88ce4866$var$InternalMenuContext.Provider, {
        value: {
            size: size,
            isSubmenu: true
        },
        children: /*#__PURE__*/ (0, $4tP7K$reactjsxruntime.jsx)((0, $4tP7K$reactariacomponents.Provider), {
            values: [
                [
                    (0, $6367bc87eb7d24ad$exports.HeaderContext),
                    {
                        styles: $e741ea6b88ce4866$export$562e61a0817eb32e({
                            size: size
                        })
                    }
                ],
                [
                    (0, $6367bc87eb7d24ad$exports.HeadingContext),
                    {
                        styles: $e741ea6b88ce4866$export$300ac6f106ef584d
                    }
                ],
                [
                    (0, $6367bc87eb7d24ad$exports.TextContext),
                    {
                        slots: {
                            'description': {
                                styles: $e741ea6b88ce4866$export$6d59db4903f20f7d({
                                    size: size
                                })
                            }
                        }
                    }
                ]
            ],
            children: /*#__PURE__*/ (0, $4tP7K$reactjsxruntime.jsx)((0, $4tP7K$reactariacomponents.Menu), {
                ...props,
                className: $e741ea6b88ce4866$export$b1e5508a851be14d({
                    size: size,
                    isPopover: !!ctx || isSubmenu
                }, ctx ? null : styles),
                children: children
            })
        })
    });
    if (ctx || isSubmenu) return /*#__PURE__*/ (0, $4tP7K$reactjsxruntime.jsx)((0, $493371ef39bf7a55$exports.PopoverBase), {
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
function $e741ea6b88ce4866$export$2e0a83ec2e27ecbb(props) {
    return /*#__PURE__*/ (0, $4tP7K$reactjsxruntime.jsx)((0, $4tP7K$reactariacomponents.Separator), {
        ...props,
        className: (0, $308b180f49d82d28$exports.mergeStyles)((0, $2d04acb918636de0$exports.divider)({
            size: 'M',
            orientation: 'horizontal',
            staticColor: undefined
        }), " . _Zf _Z-uamghwj __a-3t1z __b-3hmpw A-1x1h2a6 B-1x1h2a6")
    });
}
function $e741ea6b88ce4866$export$4b1545b4f2016d26(props) {
    // remember, context doesn't work if it's around Section nor inside
    return /*#__PURE__*/ (0, $4tP7K$reactjsxruntime.jsxs)((0, $4tP7K$reactjsxruntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, $4tP7K$reactjsxruntime.jsx)((0, $4tP7K$reactariacomponents.MenuSection), {
                ...props,
                className: $e741ea6b88ce4866$export$fe2e36411d703b3d,
                children: props.children
            }),
            /*#__PURE__*/ (0, $4tP7K$reactjsxruntime.jsx)($e741ea6b88ce4866$export$2e0a83ec2e27ecbb, {})
        ]
    });
}
const $e741ea6b88ce4866$var$checkmarkIconSize = {
    S: 'XS',
    M: 'M',
    L: 'L',
    XL: 'XL'
};
const $e741ea6b88ce4866$var$linkIconSize = {
    S: 'M',
    M: 'L',
    L: 'XL',
    XL: 'XL'
};
function $e741ea6b88ce4866$export$2ce376c2cc3355c8(props1) {
    let ref = (0, $4tP7K$react.useRef)(null);
    let isLink = props1.href != null;
    let isLinkOut = isLink && props1.target === '_blank';
    let { size: size } = (0, $4tP7K$react.useContext)($e741ea6b88ce4866$var$InternalMenuContext);
    let textValue = props1.textValue || (typeof props1.children === 'string' ? props1.children : undefined);
    let { direction: direction } = (0, $4tP7K$reactaria.useLocale)();
    return /*#__PURE__*/ (0, $4tP7K$reactjsxruntime.jsx)((0, $4tP7K$reactariacomponents.MenuItem), {
        ...props1,
        textValue: textValue,
        ref: ref,
        style: (0, $2061c83559b50a66$exports.pressScale)(ref, props1.UNSAFE_style),
        className: (renderProps)=>(props1.UNSAFE_className || '') + $e741ea6b88ce4866$export$f68e44d881264486({
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
            return /*#__PURE__*/ (0, $4tP7K$reactjsxruntime.jsx)((0, $4tP7K$reactjsxruntime.Fragment), {
                children: /*#__PURE__*/ (0, $4tP7K$reactjsxruntime.jsxs)((0, $4tP7K$reactariacomponents.Provider), {
                    values: [
                        [
                            (0, $bde97c91243ed164$exports.IconContext),
                            {
                                slots: {
                                    icon: {
                                        render: (0, $e991cbcdf82ced71$exports.centerBaseline)({
                                            slot: 'icon',
                                            styles: $e741ea6b88ce4866$export$31d1842a0fd736e6
                                        }),
                                        styles: $e741ea6b88ce4866$export$1ca1ec8b29a4ce27
                                    },
                                    descriptor: {
                                        render: (0, $e991cbcdf82ced71$exports.centerBaseline)({
                                            slot: 'descriptor',
                                            styles: $e741ea6b88ce4866$var$descriptor
                                        })
                                    } // TODO: remove once we have default?
                                }
                            }
                        ],
                        [
                            (0, $6367bc87eb7d24ad$exports.TextContext),
                            {
                                slots: {
                                    label: {
                                        styles: $e741ea6b88ce4866$export$1237798dc640739a({
                                            size: size
                                        })
                                    },
                                    description: {
                                        styles: $e741ea6b88ce4866$export$6d59db4903f20f7d({
                                            ...renderProps,
                                            size: size
                                        })
                                    },
                                    value: {
                                        styles: $e741ea6b88ce4866$var$value
                                    }
                                }
                            }
                        ],
                        [
                            (0, $6367bc87eb7d24ad$exports.KeyboardContext),
                            {
                                styles: $e741ea6b88ce4866$var$keyboard({
                                    size: size,
                                    isDisabled: renderProps.isDisabled
                                })
                            }
                        ],
                        [
                            (0, $053b76ed3d29e13b$exports.ImageContext),
                            {
                                styles: $e741ea6b88ce4866$var$image({
                                    size: size
                                })
                            }
                        ]
                    ],
                    children: [
                        renderProps.selectionMode === 'single' && !isLink && !renderProps.hasSubmenu && /*#__PURE__*/ (0, $4tP7K$reactjsxruntime.jsx)((0, $dba2b18fc5727f9b$exports.default), {
                            size: $e741ea6b88ce4866$var$checkmarkIconSize[size],
                            className: $e741ea6b88ce4866$export$292abbf31ed842a({
                                ...renderProps,
                                size: size
                            })
                        }),
                        renderProps.selectionMode === 'multiple' && !isLink && !renderProps.hasSubmenu && /*#__PURE__*/ (0, $4tP7K$reactjsxruntime.jsx)("div", {
                            className: (0, $308b180f49d82d28$exports.mergeStyles)($e741ea6b88ce4866$var$checkbox, (0, $af04e099a53d3e85$exports.box)(checkboxRenderProps)),
                            children: /*#__PURE__*/ (0, $4tP7K$reactjsxruntime.jsx)((0, $dba2b18fc5727f9b$exports.default), {
                                size: size,
                                className: (0, $af04e099a53d3e85$exports.iconStyles)
                            })
                        }),
                        typeof children === 'string' ? /*#__PURE__*/ (0, $4tP7K$reactjsxruntime.jsx)((0, $6367bc87eb7d24ad$exports.Text), {
                            slot: "label",
                            children: children
                        }) : children,
                        isLinkOut && /*#__PURE__*/ (0, $4tP7K$reactjsxruntime.jsx)((0, $377d9a1b51957cfd$exports.default), {
                            size: $e741ea6b88ce4866$var$linkIconSize[size],
                            className: $e741ea6b88ce4866$var$descriptor
                        }),
                        renderProps.hasSubmenu && /*#__PURE__*/ (0, $4tP7K$reactjsxruntime.jsx)("div", {
                            slot: "descriptor",
                            className: $e741ea6b88ce4866$var$descriptor,
                            children: /*#__PURE__*/ (0, $4tP7K$reactjsxruntime.jsx)((0, $1df9f1c9262ce5df$exports.default), {
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
 */ function $e741ea6b88ce4866$export$27d2ad3c5815583e(props) {
    return /*#__PURE__*/ (0, $4tP7K$reactjsxruntime.jsx)($e741ea6b88ce4866$var$InternalMenuTriggerContext.Provider, {
        value: {
            align: props.align,
            direction: props.direction,
            shouldFlip: props.shouldFlip
        },
        children: /*#__PURE__*/ (0, $4tP7K$reactjsxruntime.jsx)((0, $4tP7K$reactariacomponents.MenuTrigger), {
            ...props,
            children: /*#__PURE__*/ (0, $4tP7K$reactjsxruntime.jsx)((0, $4tP7K$reactariainteractions.PressResponder), {
                isPressed: false,
                children: props.children
            })
        })
    });
}
const $e741ea6b88ce4866$export$ecabc99eeffab7ca = (0, $4tP7K$reactariacomponents.SubmenuTrigger);
function $e741ea6b88ce4866$export$aebfca372ec4a7db(props) {
    return /*#__PURE__*/ (0, $4tP7K$reactjsxruntime.jsx)("div", {});
}


//# sourceMappingURL=Menu.cjs.map
