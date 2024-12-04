require("./Card.css");
var $e5a758dd286599f2$exports = require("./ActionMenu.cjs");
var $38071d9ce246d4cf$exports = require("./Avatar.cjs");
var $25d06cf8d4e72761$exports = require("./Button.cjs");
var $af04e099a53d3e85$exports = require("./Checkbox.cjs");
var $6367bc87eb7d24ad$exports = require("./Content.cjs");
var $2d04acb918636de0$exports = require("./Divider.cjs");
var $bde97c91243ed164$exports = require("../icons/Icon.cjs");
var $053b76ed3d29e13b$exports = require("./Image.cjs");
var $a4f1585b527b9b7a$exports = require("./ImageCoordinator.cjs");
var $308b180f49d82d28$exports = require("../icons/runtime.cjs");
var $2061c83559b50a66$exports = require("./pressScale.cjs");
var $5eb75e0c130e0669$exports = require("../icons/Skeleton.cjs");
var $ac757a4c2bd72aee$exports = require("../icons/useSpectrumContextProps.cjs");
var $1B7TP$reactjsxruntime = require("react/jsx-runtime");
var $1B7TP$reactariacomponents = require("react-aria-components");
var $1B7TP$react = require("react");
var $1B7TP$reactariautils = require("@react-aria/utils");
var $1B7TP$reactspectrumutils = require("@react-spectrum/utils");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "InternalCardViewContext", () => $230078a1c4ce81d8$export$cb658fed5fefe1d);
$parcel$export(module.exports, "CardContext", () => $230078a1c4ce81d8$export$d0b2ee33ebf7d64);
$parcel$export(module.exports, "Card", () => $230078a1c4ce81d8$export$60332b2344f7fe41);
$parcel$export(module.exports, "CardPreview", () => $230078a1c4ce81d8$export$115f017852a4bb7c);
$parcel$export(module.exports, "CollectionCardPreview", () => $230078a1c4ce81d8$export$c368ea3e577b1b86);
$parcel$export(module.exports, "AssetCard", () => $230078a1c4ce81d8$export$eff93e4e59ccc3b8);
$parcel$export(module.exports, "UserCard", () => $230078a1c4ce81d8$export$78e8870b5d8ae469);
$parcel$export(module.exports, "ProductCard", () => $230078a1c4ce81d8$export$e6cbe35324ccf844);
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

















const $230078a1c4ce81d8$var$borderRadius = {
    default: 'lg',
    size: {
        XS: 'default',
        S: 'default'
    }
};
let $230078a1c4ce81d8$var$card = function anonymous(props, overrides) {
    let rules = " .";
    let matches = (overrides || '').match(/(?:^|\s)(?:y|z|A|B|_9|_8|h|_5|_4|__A|__c|__d|__a|__b|U|__Q|X|Z|V|W|l|q|r)[^\s]+/g) || [];
    rules += matches.join('');
    let $U = false;
    let $l = false;
    for (let p of matches){
        if (/^\s*U/.test(p)) $U = true;
        if (/^\s*l/.test(p)) $l = true;
    }
    rules += ' _Zd';
    rules += ' _6b';
    if (!$U) rules += ' Uc';
    if (props.size === "S") rules += ' _vc';
    else if (props.size === "XS") rules += ' _vc';
    else rules += ' _vd';
    if (props.size === "S") rules += ' _wc';
    else if (props.size === "XS") rules += ' _wc';
    else rules += ' _wd';
    if (props.size === "S") rules += ' _xc';
    else if (props.size === "XS") rules += ' _xc';
    else rules += ' _xd';
    if (props.size === "S") rules += ' _yc';
    else if (props.size === "XS") rules += ' _yc';
    else rules += ' _yd';
    rules += ' -_1de2x0q_b-a_____w';
    if (props.variant === "secondary") rules += ' -_1de2x0q_b-e';
    else if (props.variant === "primary") rules += ' -_1de2x0q_b-______k';
    if (props.variant === "quiet") rules += ' ba';
    else if (props.variant === "tertiary") rules += ' ba';
    else rules += ' b-1de2x0q';
    if (props.variant === "quiet") rules += ' _td';
    else if (props.variant === "tertiary") {
        rules += ' _ta-8u3g88';
        if (props.isSelected) rules += ' _td';
        else if (props.isFocusVisible) rules += ' _t-1l158k4';
        else if (props.isHovered) rules += ' _t-1l158k4';
        else rules += ' _t-9p5yze';
    } else {
        rules += ' _ta-8u3g88';
        if (props.isSelected) rules += ' _tb';
        else if (props.isFocusVisible) rules += ' _tb';
        else if (props.isHovered) rules += ' _tb';
        else rules += ' _ta';
    }
    rules += ' _zb';
    rules += ' _Oa';
    rules += ' _Q-375x7f';
    rules += ' _Ra';
    rules += ' _c-bc1l9oh';
    rules += ' _c-1uotwbwg';
    rules += ' _c-eo0c6sf';
    rules += ' _c-enzzrge';
    rules += ' _c-enzykdd';
    rules += ' _c-enzwzjc';
    rules += ' _c-enzrfpb';
    rules += ' _ca';
    if (props.variant === "quiet") rules += ' __vd';
    else rules += ' __vc';
    if (props.variant === "quiet") rules += ' __wd';
    else rules += ' __wc';
    rules += ' __mf';
    rules += ' __R-yksgrp';
    if (props.isCardView) rules += ' __Da';
    if (props.isLink) rules += ' __Hc';
    if (!$l) {
        if (props.isCardView) rules += ' lb';
        else if (props.size === "XL") rules += ' l______Q';
        else if (props.size === "L") rules += ' l_____y';
        else if (props.size === "M") rules += ' l____g';
        else if (props.size === "S") rules += ' l___u';
        else if (props.size === "XS") rules += ' l__c';
    }
    rules += ' kb';
    if (props.density === "spacious") {
        if (props.size === "XL") rules += ' -nxovgr_E-i';
        else if (props.size === "L") rules += ' -nxovgr_E-h';
        else if (props.size === "M") rules += ' -nxovgr_E-g';
        else if (props.size === "S") rules += ' -nxovgr_E-f';
        else if (props.size === "XS") rules += ' -nxovgr_E-e';
    } else if (props.density === "regular") {
        if (props.size === "XL") rules += ' -nxovgr_E-h';
        else if (props.size === "L") rules += ' -nxovgr_E-g';
        else if (props.size === "M") rules += ' -nxovgr_E-f';
        else if (props.size === "S") rules += ' -nxovgr_E-e';
        else if (props.size === "XS") rules += ' -nxovgr_E-d';
    } else if (props.density === "compact") {
        if (props.size === "XL") rules += ' -nxovgr_E-g';
        else if (props.size === "L") rules += ' -nxovgr_E-f';
        else if (props.size === "M") rules += ' -nxovgr_E-e';
        else if (props.size === "S") rules += ' -nxovgr_E-d';
        else if (props.size === "XS") rules += ' -nxovgr_E-undefined';
    }
    if (props.variant === "quiet") rules += ' -_1bqkh6r_E-a';
    else rules += ' -_1bqkh6r_E--nxovgr';
    if (props.variant === "quiet") rules += ' -_1bqkh6q_C-a';
    else rules += ' -_1bqkh6q_C--nxovgr';
    rules += ' E-1bqkh6r';
    rules += ' F-1bqkh6r';
    rules += ' C-1bqkh6q';
    rules += ' D-1bqkh6q';
    rules += ' __na';
    if (props.variant === "quiet") rules += ' _La';
    else if (props.isFocusVisible) rules += ' _Lb';
    else rules += ' _La';
    rules += ' da_____z';
    rules += ' dx';
    rules += ' _Nc';
    rules += ' _M-3t1z';
    return rules;
};
let $230078a1c4ce81d8$var$selectionIndicator = function anonymous(props) {
    let rules = " .";
    rules += ' Ua';
    rules += ' Xa';
    rules += ' Za';
    rules += ' Va';
    rules += ' Wa';
    rules += ' __Q-3t1z';
    if (props.size === "S") rules += ' _vc';
    else if (props.size === "XS") rules += ' _vc';
    else rules += ' _vd';
    if (props.size === "S") rules += ' _wc';
    else if (props.size === "XS") rules += ' _wc';
    else rules += ' _wd';
    if (props.size === "S") rules += ' _xc';
    else if (props.size === "XS") rules += ' _xc';
    else rules += ' _xd';
    if (props.size === "S") rules += ' _yc';
    else if (props.size === "XS") rules += ' _yc';
    else rules += ' _yd';
    rules += ' __Ba';
    rules += ' uc';
    rules += ' vc';
    rules += ' sc';
    rules += ' tc';
    rules += ' wa';
    rules += ' cp';
    rules += ' _Oa';
    rules += ' _Q-375x7f';
    rules += ' _Ra';
    if (props.isSelected) rules += ' _K-3t1y';
    else rules += ' _K-3t1x';
    rules += ' d-834pbw';
    rules += ' _M-3hmpy';
    if (props.isStrokeInner) rules += ' _Lb';
    else rules += ' _La';
    rules += ' _Nc';
    return rules;
};
let $230078a1c4ce81d8$var$preview = function anonymous(props) {
    let rules = " .";
    rules += ' Uc';
    rules += ' _Oa';
    rules += ' _Q-375x7f';
    rules += ' _Ra';
    rules += ' __vc';
    rules += ' __wc';
    rules += ' y-orfo3s';
    rules += ' z-orfo3s';
    rules += ' A-ja89ex';
    rules += ' B-uamghw-ja89ex';
    if (props.isQuiet) {
        if (props.size === "S") rules += ' _vc';
        else if (props.size === "XS") rules += ' _vc';
        else rules += ' _vd';
    }
    if (props.isQuiet) {
        if (props.size === "S") rules += ' _wc';
        else if (props.size === "XS") rules += ' _wc';
        else rules += ' _wd';
    }
    if (props.isQuiet) {
        if (props.size === "S") rules += ' _xc';
        else if (props.size === "XS") rules += ' _xc';
        else rules += ' _xd';
    }
    if (props.isQuiet) {
        if (props.size === "S") rules += ' _yc';
        else if (props.size === "XS") rules += ' _yc';
        else rules += ' _yd';
    }
    if (props.isQuiet) {
        if (props.isSelected) rules += ' _tb';
        else if (props.isFocusVisible) rules += ' _tb';
        else if (props.isHovered) rules += ' _tb';
    }
    if (props.isQuiet) {
        if (props.isFocusVisible) rules += ' _Lb';
    } else rules += ' _La';
    rules += ' da_____z';
    rules += ' dx';
    rules += ' _Nc';
    rules += ' _M-3t1z';
    return rules;
};
const $230078a1c4ce81d8$var$image = " . lb _b-375yqh __Nb __Da __Ba";
let $230078a1c4ce81d8$var$title = function anonymous(props) {
    let rules = " .";
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
    } else if (props.size === "M") {
        rules += ' _dbf';
        rules += ' _de';
    } else if (props.size === "S") {
        rules += ' _dbd';
        rules += ' _dc';
    } else if (props.size === "XS") {
        rules += ' _dbd';
        rules += ' _dc';
    }
    rules += ' _e-1x99dlod';
    rules += ' _ed';
    rules += ' _f-1x99dlob';
    rules += ' _fa';
    rules += ' ao';
    rules += ' _n-3t20';
    rules += ' __a-4k3jmv';
    rules += ' __b-4k3jmv';
    rules += ' __c-4k3jmv';
    rules += ' __d-4k3jmv';
    return rules;
};
let $230078a1c4ce81d8$var$description = function anonymous(props) {
    let rules = " .";
    rules += ' _c-bc1l9oh';
    rules += ' _c-1uotwbwg';
    rules += ' _c-eo0c6sf';
    rules += ' _c-enzzrge';
    rules += ' _c-enzykdd';
    rules += ' _c-enzwzjc';
    rules += ' _c-enzrfpb';
    rules += ' _ca';
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
    } else if (props.size === "XS") {
        rules += ' _dbb';
        rules += ' _da';
    }
    rules += ' _eb';
    rules += ' _f-1x99dloc';
    rules += ' _fb';
    rules += ' an';
    rules += ' _n-3t20';
    rules += ' __a-14f9fux';
    rules += ' __b-14f9fux';
    rules += ' __c-14f9fux';
    rules += ' __d-14f9fux';
    return rules;
};
let $230078a1c4ce81d8$var$content = function anonymous(props) {
    let rules = " .";
    rules += ' _Zf';
    rules += ' __h-8mtrwf-ho9dum';
    rules += ' __h-375yi6';
    rules += ' __j-8mtrwf-1h7qlgk';
    rules += ' __j-1272nor';
    rules += ' jc';
    rules += ' _9-3t1y';
    rules += ' _1d';
    rules += ' _0e';
    if (props.size === "XL") rules += ' id';
    else if (props.size === "L") rules += ' i-6njx2e';
    else if (props.size === "M") rules += ' i-6njx2e';
    else if (props.size === "S") rules += ' ic';
    else if (props.size === "XS") rules += ' ic';
    rules += ' E-13alit4a';
    rules += ' E-nxovgr';
    rules += ' F-uamghwa';
    rules += ' F-sh5t6w';
    return rules;
};
let $230078a1c4ce81d8$var$actionMenu = " . __a-ykmrkq __b-ykmrkq __c-ykmrkq __d-ykmrkq A-1rxwibp B-1rxwibp";
let $230078a1c4ce81d8$var$footer = " . _Zd _6a _1b _2e id jd E-sh5t6w";
const $230078a1c4ce81d8$export$cb658fed5fefe1d = /*#__PURE__*/ (0, $1B7TP$react.createContext)('div');
const $230078a1c4ce81d8$export$d0b2ee33ebf7d64 = /*#__PURE__*/ (0, $1B7TP$react.createContext)(null);
const $230078a1c4ce81d8$var$InternalCardContext = /*#__PURE__*/ (0, $1B7TP$react.createContext)({
    isQuiet: false,
    size: 'M',
    isSelected: false,
    isHovered: false,
    isFocusVisible: false,
    isPressed: false,
    isCheckboxSelection: true
});
const $230078a1c4ce81d8$var$actionButtonSize = {
    XS: 'XS',
    S: 'XS',
    M: 'S',
    L: 'M',
    XL: 'L'
};
const $230078a1c4ce81d8$export$60332b2344f7fe41 = /*#__PURE__*/ (0, $1B7TP$react.forwardRef)(function Card(props, ref) {
    [props] = (0, $ac757a4c2bd72aee$exports.useSpectrumContextProps)(props, ref, $230078a1c4ce81d8$export$d0b2ee33ebf7d64);
    let domRef = (0, $1B7TP$reactspectrumutils.useDOMRef)(ref);
    let { density: density = 'regular', size: size = 'M', variant: variant = 'primary', UNSAFE_className: UNSAFE_className = '', UNSAFE_style: UNSAFE_style, styles: styles, id: id, ...otherProps } = props;
    let isQuiet = variant === 'quiet';
    let isSkeleton = (0, $5eb75e0c130e0669$exports.useIsSkeleton)();
    let children = /*#__PURE__*/ (0, $1B7TP$reactjsxruntime.jsx)((0, $1B7TP$reactariacomponents.Provider), {
        values: [
            [
                (0, $053b76ed3d29e13b$exports.ImageContext),
                {
                    alt: '',
                    styles: $230078a1c4ce81d8$var$image
                }
            ],
            [
                (0, $6367bc87eb7d24ad$exports.TextContext),
                {
                    slots: {
                        [(0, $1B7TP$reactariacomponents.DEFAULT_SLOT)]: {},
                        title: {
                            styles: $230078a1c4ce81d8$var$title({
                                size: size
                            })
                        },
                        description: {
                            styles: $230078a1c4ce81d8$var$description({
                                size: size
                            })
                        }
                    }
                }
            ],
            [
                (0, $6367bc87eb7d24ad$exports.ContentContext),
                {
                    styles: $230078a1c4ce81d8$var$content({
                        size: size
                    })
                }
            ],
            [
                (0, $2d04acb918636de0$exports.DividerContext),
                {
                    size: 'S'
                }
            ],
            [
                (0, $6367bc87eb7d24ad$exports.FooterContext),
                {
                    styles: $230078a1c4ce81d8$var$footer
                }
            ],
            [
                (0, $e5a758dd286599f2$exports.ActionMenuContext),
                {
                    isQuiet: true,
                    size: $230078a1c4ce81d8$var$actionButtonSize[size],
                    isDisabled: isSkeleton,
                    // @ts-ignore
                    'data-slot': 'menu',
                    styles: $230078a1c4ce81d8$var$actionMenu
                }
            ],
            [
                (0, $5eb75e0c130e0669$exports.SkeletonContext),
                isSkeleton
            ]
        ],
        children: /*#__PURE__*/ (0, $1B7TP$reactjsxruntime.jsx)((0, $a4f1585b527b9b7a$exports.ImageCoordinator), {
            children: typeof props.children === 'function' ? props.children({
                size: size
            }) : props.children
        })
    });
    let ElementType = (0, $1B7TP$react.useContext)($230078a1c4ce81d8$export$cb658fed5fefe1d);
    if (ElementType === 'div' || isSkeleton) return /*#__PURE__*/ (0, $1B7TP$reactjsxruntime.jsx)("div", {
        ...(0, $1B7TP$reactariautils.filterDOMProps)(otherProps),
        id: id != null ? String(id) : undefined,
        // @ts-ignore - React < 19 compat
        inert: isSkeleton ? 'true' : undefined,
        ref: domRef,
        className: UNSAFE_className + $230078a1c4ce81d8$var$card({
            size: size,
            density: density,
            variant: variant,
            isCardView: ElementType !== 'div'
        }, styles),
        style: UNSAFE_style,
        children: /*#__PURE__*/ (0, $1B7TP$reactjsxruntime.jsx)($230078a1c4ce81d8$var$InternalCardContext.Provider, {
            value: {
                size: size,
                isQuiet: isQuiet,
                isCheckboxSelection: false,
                isHovered: false,
                isFocusVisible: false,
                isSelected: false,
                isPressed: false
            },
            children: children
        })
    });
    let press = (0, $2061c83559b50a66$exports.pressScale)(domRef, UNSAFE_style);
    return /*#__PURE__*/ (0, $1B7TP$reactjsxruntime.jsx)(ElementType, {
        ...props,
        ref: domRef,
        className: (renderProps)=>UNSAFE_className + $230078a1c4ce81d8$var$card({
                ...renderProps,
                isCardView: true,
                isLink: !!props.href,
                size: size,
                density: density,
                variant: variant
            }, styles),
        style: (renderProps)=>// Only the preview in quiet cards scales down on press
            variant === 'quiet' ? UNSAFE_style : press(renderProps),
        children: ({ selectionMode: selectionMode, selectionBehavior: selectionBehavior, isHovered: isHovered, isFocusVisible: isFocusVisible, isSelected: isSelected, isPressed: isPressed })=>/*#__PURE__*/ (0, $1B7TP$reactjsxruntime.jsxs)($230078a1c4ce81d8$var$InternalCardContext.Provider, {
                value: {
                    size: size,
                    isQuiet: isQuiet,
                    isCheckboxSelection: selectionMode !== 'none' && selectionBehavior === 'toggle',
                    isHovered: isHovered,
                    isFocusVisible: isFocusVisible,
                    isSelected: isSelected,
                    isPressed: isPressed
                },
                children: [
                    !isQuiet && /*#__PURE__*/ (0, $1B7TP$reactjsxruntime.jsx)($230078a1c4ce81d8$var$SelectionIndicator, {}),
                    !isQuiet && selectionMode !== 'none' && selectionBehavior === 'toggle' && /*#__PURE__*/ (0, $1B7TP$reactjsxruntime.jsx)($230078a1c4ce81d8$var$CardCheckbox, {}),
                    /*#__PURE__*/ (0, $1B7TP$reactjsxruntime.jsx)("div", {
                        className: " . _Zh",
                        children: children
                    })
                ]
            })
    });
});
function $230078a1c4ce81d8$var$SelectionIndicator() {
    let { size: size, isSelected: isSelected, isQuiet: isQuiet, isCheckboxSelection: isCheckboxSelection } = (0, $1B7TP$react.useContext)($230078a1c4ce81d8$var$InternalCardContext);
    return /*#__PURE__*/ (0, $1B7TP$reactjsxruntime.jsx)("div", {
        className: $230078a1c4ce81d8$var$selectionIndicator({
            size: size,
            isSelected: isSelected,
            // Add an inner stroke only for quiet cards with no checkbox to
            // help distinguish the selected state from the preview.
            isStrokeInner: isQuiet && !isCheckboxSelection
        })
    });
}
function $230078a1c4ce81d8$var$CardCheckbox() {
    let { size: size } = (0, $1B7TP$react.useContext)($230078a1c4ce81d8$var$InternalCardContext);
    return /*#__PURE__*/ (0, $1B7TP$reactjsxruntime.jsx)("div", {
        className: " . Ua X-nxovgr V-nxovgr __Q-3t1z Ec Fc Cc Dc b-834pbw _vc _wc _xc _yc _ta",
        children: /*#__PURE__*/ (0, $1B7TP$reactjsxruntime.jsx)((0, $af04e099a53d3e85$exports.Checkbox), {
            slot: "selection",
            excludeFromTabOrder: true,
            size: size === 'XS' ? 'S' : size
        })
    });
}
const $230078a1c4ce81d8$export$115f017852a4bb7c = /*#__PURE__*/ (0, $1B7TP$react.forwardRef)(function CardPreview(props, ref) {
    let { size: size, isQuiet: isQuiet, isHovered: isHovered, isFocusVisible: isFocusVisible, isSelected: isSelected, isPressed: isPressed, isCheckboxSelection: isCheckboxSelection } = (0, $1B7TP$react.useContext)($230078a1c4ce81d8$var$InternalCardContext);
    let { UNSAFE_className: UNSAFE_className, UNSAFE_style: UNSAFE_style } = props;
    let domRef = (0, $1B7TP$reactspectrumutils.useDOMRef)(ref);
    return /*#__PURE__*/ (0, $1B7TP$reactjsxruntime.jsxs)("div", {
        ...(0, $1B7TP$reactariautils.filterDOMProps)(props),
        slot: "preview",
        ref: domRef,
        className: UNSAFE_className + $230078a1c4ce81d8$var$preview({
            size: size,
            isQuiet: isQuiet,
            isHovered: isHovered,
            isFocusVisible: isFocusVisible,
            isSelected: isSelected
        }),
        style: isQuiet ? (0, $2061c83559b50a66$exports.pressScale)(domRef)({
            isPressed: isPressed
        }) : UNSAFE_style,
        children: [
            isQuiet && /*#__PURE__*/ (0, $1B7TP$reactjsxruntime.jsx)($230078a1c4ce81d8$var$SelectionIndicator, {}),
            isQuiet && isCheckboxSelection && /*#__PURE__*/ (0, $1B7TP$reactjsxruntime.jsx)($230078a1c4ce81d8$var$CardCheckbox, {}),
            /*#__PURE__*/ (0, $1B7TP$reactjsxruntime.jsx)("div", {
                className: " . _v-17zqamw _w-17zqamw _x-17zqamw _y-17zqamw __vc __wc",
                children: props.children
            })
        ]
    });
});
const $230078a1c4ce81d8$var$collection = function anonymous(props) {
    let rules = " .";
    rules += ' _Zf';
    rules += ' __h-1hkn3tr';
    if (props.size === "S") rules += ' ib';
    else if (props.size === "XS") rules += ' ib';
    else rules += ' ic';
    if (props.size === "S") rules += ' jb';
    else if (props.size === "XS") rules += ' jb';
    else rules += ' jc';
    return rules;
};
const $230078a1c4ce81d8$var$collectionImage = " . lb _bb _b-7ptyxf-375yqh __b-7ptyxf-7u9dhm __Nb __Ba __Da";
const $230078a1c4ce81d8$export$c368ea3e577b1b86 = /*#__PURE__*/ (0, $1B7TP$react.forwardRef)(function CollectionCardPreview(props, ref) {
    let { size: size } = (0, $1B7TP$react.useContext)($230078a1c4ce81d8$var$InternalCardContext);
    return /*#__PURE__*/ (0, $1B7TP$reactjsxruntime.jsx)($230078a1c4ce81d8$export$115f017852a4bb7c, {
        ...props,
        ref: ref,
        children: /*#__PURE__*/ (0, $1B7TP$reactjsxruntime.jsx)("div", {
            className: $230078a1c4ce81d8$var$collection({
                size: size
            }),
            children: /*#__PURE__*/ (0, $1B7TP$reactjsxruntime.jsx)((0, $053b76ed3d29e13b$exports.ImageContext).Provider, {
                value: {
                    styles: $230078a1c4ce81d8$var$collectionImage
                },
                children: props.children
            })
        })
    });
});
const $230078a1c4ce81d8$export$eff93e4e59ccc3b8 = /*#__PURE__*/ (0, $1B7TP$react.forwardRef)(function AssetCard(props, ref) {
    return /*#__PURE__*/ (0, $1B7TP$reactjsxruntime.jsx)($230078a1c4ce81d8$export$60332b2344f7fe41, {
        ...props,
        ref: ref,
        density: "regular",
        children: (0, $1B7TP$reactariacomponents.composeRenderProps)(props.children, (children)=>/*#__PURE__*/ (0, $1B7TP$reactjsxruntime.jsx)((0, $1B7TP$reactariacomponents.Provider), {
                values: [
                    [
                        (0, $053b76ed3d29e13b$exports.ImageContext),
                        {
                            alt: '',
                            styles: " . lb _bb __Na __Ba __Da"
                        }
                    ],
                    [
                        (0, $bde97c91243ed164$exports.IllustrationContext),
                        {
                            render (icon) {
                                return /*#__PURE__*/ (0, $1B7TP$reactjsxruntime.jsx)((0, $5eb75e0c130e0669$exports.SkeletonWrapper), {
                                    children: /*#__PURE__*/ (0, $1B7TP$reactjsxruntime.jsx)("div", {
                                        className: " . _Zd _1c _2d bg _bb",
                                        children: icon
                                    })
                                });
                            },
                            styles: " . ka r__Z p__Z l-3760fj"
                        }
                    ]
                ],
                children: children
            }))
    });
});
const $230078a1c4ce81d8$var$avatarSize = {
    XS: 24,
    S: 48,
    M: 64,
    L: 64,
    XL: 80
};
const $230078a1c4ce81d8$export$78e8870b5d8ae469 = /*#__PURE__*/ (0, $1B7TP$react.forwardRef)(function UserCard(props, ref) {
    let { size: size = 'M' } = props;
    return /*#__PURE__*/ (0, $1B7TP$reactjsxruntime.jsx)($230078a1c4ce81d8$export$60332b2344f7fe41, {
        ...props,
        ref: ref,
        density: "spacious",
        children: (0, $1B7TP$reactariacomponents.composeRenderProps)(props.children, (children)=>/*#__PURE__*/ (0, $1B7TP$reactjsxruntime.jsx)((0, $1B7TP$reactariacomponents.Provider), {
                values: [
                    [
                        (0, $053b76ed3d29e13b$exports.ImageContext),
                        {
                            alt: '',
                            styles: " . lb _b-375yqg __Nb __Ba __Da"
                        }
                    ],
                    [
                        (0, $38071d9ce246d4cf$exports.AvatarContext),
                        {
                            size: $230078a1c4ce81d8$var$avatarSize[size],
                            UNSAFE_style: {
                                '--size': $230078a1c4ce81d8$var$avatarSize[size] + 'px'
                            },
                            styles: " . Uc Aa A-1d75it2-1oavddy",
                            isOverBackground: true
                        }
                    ]
                ],
                children: children
            }))
    });
});
const $230078a1c4ce81d8$var$buttonSize = {
    XS: 'S',
    S: 'S',
    M: 'M',
    L: 'L',
    XL: 'XL'
};
const $230078a1c4ce81d8$export$e6cbe35324ccf844 = /*#__PURE__*/ (0, $1B7TP$react.forwardRef)(function ProductCard(props1, ref) {
    let { size: size = 'M' } = props1;
    return /*#__PURE__*/ (0, $1B7TP$reactjsxruntime.jsx)($230078a1c4ce81d8$export$60332b2344f7fe41, {
        ...props1,
        ref: ref,
        density: "spacious",
        children: (0, $1B7TP$reactariacomponents.composeRenderProps)(props1.children, (children)=>/*#__PURE__*/ (0, $1B7TP$reactjsxruntime.jsx)((0, $1B7TP$reactariacomponents.Provider), {
                values: [
                    [
                        (0, $053b76ed3d29e13b$exports.ImageContext),
                        {
                            slots: {
                                preview: {
                                    alt: '',
                                    styles: " . lb _b-3760ey __Nb __Ba __Da"
                                },
                                thumbnail: {
                                    alt: '',
                                    styles: function anonymous(props) {
                                        let rules = " .";
                                        rules += ' Uc';
                                        rules += ' __Ba';
                                        rules += ' __Da';
                                        if (props.size === "XL") rules += ' l_i';
                                        else if (props.size === "L") rules += ' l6';
                                        else if (props.size === "M") rules += ' l2';
                                        else if (props.size === "S") rules += ' lY';
                                        else if (props.size === "XS") rules += ' lM';
                                        rules += ' k-375toq';
                                        if (props.size === "S") rules += ' _vb';
                                        else if (props.size === "XS") rules += ' _vb';
                                        else rules += ' _vc';
                                        if (props.size === "S") rules += ' _wb';
                                        else if (props.size === "XS") rules += ' _wb';
                                        else rules += ' _wc';
                                        if (props.size === "S") rules += ' _xb';
                                        else if (props.size === "XS") rules += ' _xb';
                                        else rules += ' _xc';
                                        if (props.size === "S") rules += ' _yb';
                                        else if (props.size === "XS") rules += ' _yb';
                                        else rules += ' _yc';
                                        rules += ' __Nb';
                                        rules += ' A-1d75it2-6grsbv';
                                        rules += ' Aa';
                                        rules += ' _Lb';
                                        if (props.size === "XS") rules += ' _Nb';
                                        else rules += ' _Nc';
                                        rules += ' d-1de2x0q';
                                        if (props.size === "XL") rules += ' -_375toq_k-_i';
                                        else if (props.size === "L") rules += ' -_375toq_k-6';
                                        else if (props.size === "M") rules += ' -_375toq_k-2';
                                        else if (props.size === "S") rules += ' -_375toq_k-Y';
                                        else if (props.size === "XS") rules += ' -_375toq_k-M';
                                        return rules;
                                    }({
                                        size: size
                                    })
                                }
                            }
                        }
                    ],
                    [
                        (0, $6367bc87eb7d24ad$exports.FooterContext),
                        {
                            styles: (0, $308b180f49d82d28$exports.mergeStyles)($230078a1c4ce81d8$var$footer, " . _2c")
                        }
                    ],
                    [
                        (0, $25d06cf8d4e72761$exports.ButtonContext),
                        {
                            size: $230078a1c4ce81d8$var$buttonSize[size]
                        }
                    ],
                    [
                        (0, $25d06cf8d4e72761$exports.LinkButtonContext),
                        {
                            size: $230078a1c4ce81d8$var$buttonSize[size]
                        }
                    ]
                ],
                children: children
            }))
    });
});


//# sourceMappingURL=Card.cjs.map
