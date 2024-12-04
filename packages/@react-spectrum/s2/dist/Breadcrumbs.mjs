import "./Breadcrumbs.css";
import {ActionButton as $da878a05ab4a403e$export$cfc7921d29ef7b80} from "./ActionButton.mjs";
import $4b69f02ec06b9226$export$2e2bcd8739ae039 from "./Chevron.mjs";
import $8b0a29919990739e$export$2e2bcd8739ae039 from "../icons/FolderBreadcrumb.mjs";
import $a1dfd$intlStringsmjs from "./intlStrings.mjs";
import {Menu as $13afb0ea5f0ed767$export$d9b273488cd8ce6f, MenuItem as $13afb0ea5f0ed767$export$2ce376c2cc3355c8, MenuTrigger as $13afb0ea5f0ed767$export$27d2ad3c5815583e} from "./Menu.mjs";
import {Text as $8e847109a6ab556d$export$5f1af8db9871e1d6} from "./Content.mjs";
import {useSpectrumContextProps as $5ce63c423902f47d$export$764f6146fadd77f7} from "../icons/useSpectrumContextProps.mjs";
import {jsx as $a1dfd$jsx, jsxs as $a1dfd$jsxs, Fragment as $a1dfd$Fragment} from "react/jsx-runtime";
import {createContext as $a1dfd$createContext, forwardRef as $a1dfd$forwardRef, useContext as $a1dfd$useContext, createElement as $a1dfd$createElement, useState as $a1dfd$useState, useMemo as $a1dfd$useMemo, useRef as $a1dfd$useRef, useCallback as $a1dfd$useCallback, useEffect as $a1dfd$useEffect, Fragment as $a1dfd$Fragment1} from "react";
import {Provider as $a1dfd$Provider, Breadcrumbs as $a1dfd$Breadcrumbs, UNSTABLE_CollectionRendererContext as $a1dfd$UNSTABLE_CollectionRendererContext, UNSTABLE_DefaultCollectionRenderer as $a1dfd$UNSTABLE_DefaultCollectionRenderer, Breadcrumb as $a1dfd$Breadcrumb, HeadingContext as $a1dfd$HeadingContext, Link as $a1dfd$Link} from "react-aria-components";
import {useLocale as $a1dfd$useLocale} from "react-aria";
import {useDOMRef as $a1dfd$useDOMRef, useResizeObserver as $a1dfd$useResizeObserver} from "@react-spectrum/utils";
import {useLayoutEffect as $a1dfd$useLayoutEffect} from "@react-aria/utils";
import {useLocalizedStringFormatter as $a1dfd$useLocalizedStringFormatter} from "@react-aria/i18n";


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
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













const $f329dd4f2aa58cd0$var$MIN_VISIBLE_ITEMS = 1;
const $f329dd4f2aa58cd0$var$MAX_VISIBLE_ITEMS = 4;
const $f329dd4f2aa58cd0$export$65596d3621b0a4a0 = /*#__PURE__*/ (0, $a1dfd$createContext)(null);
const $f329dd4f2aa58cd0$var$wrapper = function anonymous(props, overrides) {
    let rules = " .";
    let matches = (overrides || '').match(/(?:^|\s)(?:y|z|A|B|_9|_8|h|_5|_4|__A|__c|__d|__a|__b|U|__Q|X|Z|V|W|l|q|r)[^\s]+/g) || [];
    rules += matches.join('');
    let $U = false;
    let $_9 = false;
    let $_8 = false;
    let $h = false;
    let $A = false;
    let $B = false;
    let $y = false;
    for (let p of matches){
        if (/^\s*U/.test(p)) $U = true;
        if (/^\s*_9/.test(p)) $_9 = true;
        if (/^\s*_8/.test(p)) $_8 = true;
        if (/^\s*h/.test(p)) $h = true;
        if (/^\s*A/.test(p)) $A = true;
        if (/^\s*B/.test(p)) $B = true;
        if (/^\s*y/.test(p)) $y = true;
    }
    if (!$U) rules += ' Uc';
    rules += ' _Zd';
    rules += ' _2b';
    rules += ' _ga';
    rules += ' _7c';
    if (!$_9) rules += ' _9-3t1y';
    if (!$_8) rules += ' _8-3t1x';
    if (!$h) rules += ' ha';
    if (props.size === "L") rules += ' i-1dtpt05';
    else if (props.size === "M") rules += ' i-ve8p9e';
    if (props.size === "L") rules += ' j-1dtpt05';
    else if (props.size === "M") rules += ' j-ve8p9e';
    rules += ' Ea';
    rules += ' Fa';
    rules += ' Ca';
    rules += ' Da';
    rules += ' _Oa';
    rules += ' _Q-375x7f';
    rules += ' _Ra';
    if (!$A) rules += ' Aa';
    if (!$B) rules += ' Ba';
    if (!$y) {
        if (props.size === "L") rules += ' y-1dtpt05';
        else if (props.size === "M") rules += ' y-ve8p9e';
    }
    return rules;
};
const $f329dd4f2aa58cd0$var$InternalBreadcrumbsContext = /*#__PURE__*/ (0, $a1dfd$createContext)({});
const $f329dd4f2aa58cd0$export$2dc68d50d56fbbd = /*#__PURE__*/ (0, $a1dfd$forwardRef)(function Breadcrumbs(props, ref) {
    [props, ref] = (0, $5ce63c423902f47d$export$764f6146fadd77f7)(props, ref, $f329dd4f2aa58cd0$export$65596d3621b0a4a0);
    let domRef = (0, $a1dfd$useDOMRef)(ref);
    let { UNSAFE_className: UNSAFE_className = '', UNSAFE_style: UNSAFE_style, styles: styles, size: size = 'M', children: children, isDisabled: isDisabled, ...otherProps } = props;
    return /*#__PURE__*/ (0, $a1dfd$jsx)((0, $a1dfd$Provider), {
        values: [
            [
                $f329dd4f2aa58cd0$var$InternalBreadcrumbsContext,
                {
                    size: size,
                    isDisabled: isDisabled
                }
            ]
        ],
        children: /*#__PURE__*/ (0, $a1dfd$jsx)($f329dd4f2aa58cd0$var$CollapsingCollection, {
            containerRef: domRef,
            onAction: props.onAction,
            children: /*#__PURE__*/ (0, $a1dfd$jsx)((0, $a1dfd$Breadcrumbs), {
                ...otherProps,
                isDisabled: isDisabled,
                ref: domRef,
                style: UNSAFE_style,
                className: UNSAFE_className + $f329dd4f2aa58cd0$var$wrapper({
                    size: size
                }, styles),
                children: children
            })
        })
    });
});
let $f329dd4f2aa58cd0$var$BreadcrumbMenu = (props)=>{
    let stringFormatter = (0, $a1dfd$useLocalizedStringFormatter)((0, ($parcel$interopDefault($a1dfd$intlStringsmjs))), '@react-spectrum/s2');
    let { items: items, onAction: onAction } = props;
    let { direction: direction } = (0, $a1dfd$useLocale)();
    let { size: size, isDisabled: isDisabled } = (0, $a1dfd$useContext)($f329dd4f2aa58cd0$var$InternalBreadcrumbsContext);
    let label = stringFormatter.format('breadcrumbs.more');
    return /*#__PURE__*/ (0, $a1dfd$jsx)((0, $a1dfd$UNSTABLE_CollectionRendererContext).Provider, {
        value: (0, $a1dfd$UNSTABLE_DefaultCollectionRenderer),
        children: /*#__PURE__*/ (0, $a1dfd$jsxs)("li", {
            className: $f329dd4f2aa58cd0$var$breadcrumbStyles({
                size: size,
                isDisabled: isDisabled,
                isMenu: true
            }),
            children: [
                /*#__PURE__*/ (0, $a1dfd$jsxs)((0, $13afb0ea5f0ed767$export$27d2ad3c5815583e), {
                    children: [
                        /*#__PURE__*/ (0, $a1dfd$jsx)((0, $da878a05ab4a403e$export$cfc7921d29ef7b80), {
                            isDisabled: isDisabled,
                            isQuiet: true,
                            "aria-label": label,
                            children: /*#__PURE__*/ (0, $a1dfd$jsx)((0, $8b0a29919990739e$export$2e2bcd8739ae039), {})
                        }),
                        /*#__PURE__*/ (0, $a1dfd$jsx)((0, $13afb0ea5f0ed767$export$d9b273488cd8ce6f), {
                            items: items,
                            onAction: onAction,
                            children: (item)=>/*#__PURE__*/ (0, $a1dfd$createElement)((0, $13afb0ea5f0ed767$export$2ce376c2cc3355c8), {
                                    ...item.props.originalProps,
                                    key: item.key
                                }, /*#__PURE__*/ (0, $a1dfd$jsx)((0, $8e847109a6ab556d$export$5f1af8db9871e1d6), {
                                    slot: "label",
                                    children: item.props.children({
                                        size: size,
                                        isCurrent: false,
                                        isMenu: true
                                    })
                                }))
                        })
                    ]
                }),
                /*#__PURE__*/ (0, $a1dfd$jsx)((0, $4b69f02ec06b9226$export$2e2bcd8739ae039), {
                    size: size,
                    className: $f329dd4f2aa58cd0$var$chevronStyles({
                        direction: direction,
                        isMenu: true
                    })
                })
            ]
        })
    });
};
let $f329dd4f2aa58cd0$var$HiddenBreadcrumbs = function(props) {
    let { listRef: listRef, items: items, size: size } = props;
    return /*#__PURE__*/ (0, $a1dfd$jsxs)("div", {
        // @ts-ignore
        inert: "true",
        ref: listRef,
        className: " . _Z-17zqamw i-17zqamw j-17zqamw _7-17zqamw Ua Xa Za __Eb __vb __wb _K-3t1x",
        children: [
            items.map((item, idx)=>{
                // pull off individual props as an allow list, don't want refs or other props getting through
                return /*#__PURE__*/ (0, $a1dfd$jsx)("div", {
                    "data-hidden-breadcrumb": true,
                    style: item.props.UNSAFE_style,
                    className: item.props.className({
                        size: size,
                        isCurrent: idx === items.length - 1
                    }),
                    children: item.props.children({
                        size: size,
                        isCurrent: idx === items.length - 1
                    })
                }, item.key);
            }),
            /*#__PURE__*/ (0, $a1dfd$jsx)((0, $da878a05ab4a403e$export$cfc7921d29ef7b80), {
                "data-hidden-button": true,
                isQuiet: true,
                children: /*#__PURE__*/ (0, $a1dfd$jsx)((0, $8b0a29919990739e$export$2e2bcd8739ae039), {})
            })
        ]
    });
};
const $f329dd4f2aa58cd0$var$breadcrumbStyles = function anonymous(props) {
    let rules = " .";
    rules += ' _Zd';
    rules += ' _1c';
    rules += ' _2b';
    if (props.size === "XL") rules += ' kj';
    else if (props.size === "L") rules += ' ki';
    else if (props.size === "S") rules += ' kh';
    else if (props.size === "XS") rules += ' kg';
    else rules += ' kf';
    rules += ' _Oa';
    rules += ' _Q-375x7f';
    rules += ' _Ra';
    rules += ' Uc';
    rules += ' _8-3t1x';
    if (props.isDisabled) rules += ' aa_____B';
    else rules += ' aa_____x';
    if (props.isDisabled) rules += ' aj';
    else {
        if (props.isPressed) rules += ' ao';
        else if (props.isFocusVisible) rules += ' ao';
        else if (props.isHovered) rules += ' ao';
        else rules += ' an';
    }
    rules += ' wf';
    if (props.isMenu) rules += ' y-460fe7';
    return rules;
};
const $f329dd4f2aa58cd0$var$chevronStyles = function anonymous(props) {
    let rules = " .";
    if (props.direction === "rtl") rules += ' S-3hmpv';
    if (props.isMenu) rules += ' ya';
    else {
        rules += ' ybH';
        rules += ' yG';
    }
    rules += ' aa_____D';
    if (props.isPressed) rules += ' ao';
    else if (props.isFocusVisible) rules += ' ao';
    else if (props.isHovered) rules += ' ao';
    else rules += ' an';
    rules += ' -rwx0fg_e-b';
    return rules;
};
const $f329dd4f2aa58cd0$var$linkStyles = function anonymous(props) {
    let rules = " .";
    if (props.isFocusVisible) rules += ' _Lb';
    else rules += ' _La';
    rules += ' da_____z';
    rules += ' dx';
    rules += ' _Nc';
    rules += ' _M-3t1z';
    rules += ' _vb';
    rules += ' _wb';
    rules += ' _xb';
    rules += ' _yb';
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
    if (props.isDisabled) rules += ' aa_____B';
    else rules += ' aa_____D';
    if (props.isCurrent) {
        if (props.isPressed) rules += ' ao';
        else if (props.isFocusVisible) rules += ' ao';
        else if (props.isHovered) rules += ' ao';
        else rules += ' an';
    } else if (props.isDisabled) rules += ' aj';
    else {
        if (props.isPressed) rules += ' an';
        else if (props.isFocusVisible) rules += ' an';
        else if (props.isHovered) rules += ' an';
        else rules += ' am';
    }
    rules += ' _Oa';
    rules += ' _Q-375x7f';
    rules += ' _Ra';
    if (props.isDisabled) rules += ' _ld';
    else if (props.isFocusVisible) rules += ' _la';
    else if (props.isHovered) rules += ' _la';
    else rules += ' _ld';
    if (props.isDisabled) rules += ' __Hb';
    else rules += ' __Hc';
    rules += ' __R-yksgrp';
    return rules;
};
const $f329dd4f2aa58cd0$var$currentStyles = function anonymous(props) {
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
    rules += ' an';
    return rules;
};
// TODO: support user heading size customization, for now just set it to large
const $f329dd4f2aa58cd0$var$heading = " . Aa Ba ya za _ca _c-enzrfpb _c-enzwzjc _c-enzykdd _c-enzzrge _c-eo0c6sf _c-1uotwbwg _c-bc1l9oh _dn _dbo _ee _fa _f-1x99dlob ao";
const $f329dd4f2aa58cd0$export$dabcc1ec9dd9d1cc = /*#__PURE__*/ (0, $a1dfd$forwardRef)(function Breadcrumb({ children: children, ...props }, ref) {
    let { href: href, target: target, rel: rel, download: download, ping: ping, referrerPolicy: referrerPolicy } = props;
    let { size: size = 'M' } = (0, $a1dfd$useContext)($f329dd4f2aa58cd0$var$InternalBreadcrumbsContext) ?? {};
    let domRef = (0, $a1dfd$useDOMRef)(ref);
    let { direction: direction } = (0, $a1dfd$useLocale)();
    return /*#__PURE__*/ (0, $a1dfd$jsx)((0, $a1dfd$Breadcrumb), {
        ...props,
        ref: domRef,
        // @ts-ignore
        originalProps: props,
        className: ({ isCurrent: isCurrent, isDisabled: isDisabled })=>$f329dd4f2aa58cd0$var$breadcrumbStyles({
                size: size,
                isCurrent: isCurrent,
                isDisabled: isDisabled
            }),
        children: ({ isCurrent: isCurrent, isDisabled: isDisabled, isMenu: // @ts-ignore
        isMenu })=>{
            if (isMenu) return children;
            return isCurrent ? /*#__PURE__*/ (0, $a1dfd$jsx)("div", {
                className: $f329dd4f2aa58cd0$var$currentStyles({
                    size: size
                }),
                children: /*#__PURE__*/ (0, $a1dfd$jsx)((0, $a1dfd$Provider), {
                    values: [
                        [
                            (0, $a1dfd$HeadingContext),
                            {
                                className: $f329dd4f2aa58cd0$var$heading
                            }
                        ]
                    ],
                    children: children
                })
            }) : /*#__PURE__*/ (0, $a1dfd$jsxs)((0, $a1dfd$Fragment), {
                children: [
                    /*#__PURE__*/ (0, $a1dfd$jsx)((0, $a1dfd$Link), {
                        style: ({ isFocusVisible: isFocusVisible })=>({
                                clipPath: isFocusVisible ? 'none' : 'margin-box'
                            }),
                        href: href,
                        target: target,
                        rel: rel,
                        download: download,
                        ping: ping,
                        referrerPolicy: referrerPolicy,
                        isDisabled: isDisabled || isCurrent,
                        className: ({ isFocused: isFocused, isFocusVisible: isFocusVisible, isHovered: isHovered, isDisabled: isDisabled, isPressed: isPressed })=>$f329dd4f2aa58cd0$var$linkStyles({
                                isFocused: isFocused,
                                isFocusVisible: isFocusVisible,
                                isHovered: isHovered,
                                isDisabled: isDisabled,
                                size: size,
                                isPressed: isPressed
                            }),
                        children: children
                    }),
                    /*#__PURE__*/ (0, $a1dfd$jsx)((0, $4b69f02ec06b9226$export$2e2bcd8739ae039), {
                        size: "M",
                        className: $f329dd4f2aa58cd0$var$chevronStyles({
                            direction: direction
                        })
                    })
                ]
            });
        }
    });
});
// Context for passing the count for the custom renderer
let $f329dd4f2aa58cd0$var$CollapseContext = /*#__PURE__*/ (0, $a1dfd$createContext)(null);
function $f329dd4f2aa58cd0$var$CollapsingCollection({ children: children, containerRef: containerRef, onAction: onAction }) {
    return /*#__PURE__*/ (0, $a1dfd$jsx)($f329dd4f2aa58cd0$var$CollapseContext.Provider, {
        value: {
            containerRef: containerRef,
            onAction: onAction
        },
        children: /*#__PURE__*/ (0, $a1dfd$jsx)((0, $a1dfd$UNSTABLE_CollectionRendererContext).Provider, {
            value: $f329dd4f2aa58cd0$var$CollapsingCollectionRenderer,
            children: children
        })
    });
}
let $f329dd4f2aa58cd0$var$CollapsingCollectionRenderer = {
    CollectionRoot ({ collection: collection }) {
        return $f329dd4f2aa58cd0$var$useCollectionRender(collection);
    },
    CollectionBranch ({ collection: collection }) {
        return $f329dd4f2aa58cd0$var$useCollectionRender(collection);
    }
};
let $f329dd4f2aa58cd0$var$useCollectionRender = (collection)=>{
    let { containerRef: containerRef, onAction: onAction } = (0, $a1dfd$useContext)($f329dd4f2aa58cd0$var$CollapseContext) ?? {};
    let [visibleItems, setVisibleItems] = (0, $a1dfd$useState)(collection.size);
    let { size: size = 'M' } = (0, $a1dfd$useContext)($f329dd4f2aa58cd0$var$InternalBreadcrumbsContext);
    let children = (0, $a1dfd$useMemo)(()=>{
        let result = [];
        for (let key of collection.getKeys())result.push(collection.getItem(key));
        return result;
    }, [
        collection
    ]);
    let listRef = (0, $a1dfd$useRef)(null);
    let updateOverflow = (0, $a1dfd$useCallback)(()=>{
        let currListRef = listRef.current;
        if (!currListRef) {
            setVisibleItems(collection.size);
            return;
        }
        let container = currListRef.parentElement;
        if (!container) {
            setVisibleItems(collection.size);
            return;
        }
        let listItems = Array.from(currListRef.querySelectorAll('[data-hidden-breadcrumb]'));
        let folder = currListRef.querySelector('button');
        if (listItems.length <= 0) {
            setVisibleItems(collection.size);
            return;
        }
        let containerWidth = container.offsetWidth;
        let containerGap = parseInt(getComputedStyle(container).gap, 10);
        let folderGap = parseInt(getComputedStyle(folder).marginInlineStart, 10);
        let newVisibleItems = 0;
        let maxVisibleItems = $f329dd4f2aa58cd0$var$MAX_VISIBLE_ITEMS;
        let widths = [];
        let totalWidth = 0;
        for (let breadcrumb of listItems){
            let width = breadcrumb.offsetWidth + 1; // offsetWidth is rounded down
            widths.push(width);
            totalWidth += width;
        }
        // can we fit all the items without collapsing
        if (totalWidth <= containerWidth - collection.size * containerGap && collection.size <= $f329dd4f2aa58cd0$var$MAX_VISIBLE_ITEMS) {
            setVisibleItems(collection.size);
            return;
        }
        // we know there is always at least one item because of the listItems.length check up above
        let widthOfFirst = widths.shift();
        let availableWidth = containerWidth - widthOfFirst - folderGap - folder.offsetWidth - containerGap;
        maxVisibleItems -= 2; // account for the first item and folder
        for (let width of widths.reverse()){
            availableWidth -= width;
            if (availableWidth <= 0) break;
            availableWidth -= containerGap;
            newVisibleItems++;
        }
        setVisibleItems(Math.max($f329dd4f2aa58cd0$var$MIN_VISIBLE_ITEMS, Math.min(maxVisibleItems, newVisibleItems)));
    }, [
        collection.size,
        setVisibleItems
    ]);
    // making bad assumption that i can listen to containerRef when it's declared in the parent?
    (0, $a1dfd$useResizeObserver)({
        ref: containerRef,
        onResize: updateOverflow
    });
    (0, $a1dfd$useLayoutEffect)(()=>{
        if (collection.size > 0) queueMicrotask(updateOverflow);
    }, [
        collection.size,
        updateOverflow
    ]);
    (0, $a1dfd$useEffect)(()=>{
        // Recalculate visible tags when fonts are loaded.
        document.fonts?.ready.then(()=>updateOverflow());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    let sliceIndex = collection.size - visibleItems;
    return /*#__PURE__*/ (0, $a1dfd$jsxs)((0, $a1dfd$Fragment), {
        children: [
            /*#__PURE__*/ (0, $a1dfd$jsx)($f329dd4f2aa58cd0$var$HiddenBreadcrumbs, {
                items: children,
                size: size,
                listRef: listRef
            }),
            visibleItems < collection.size && collection.size > 2 ? /*#__PURE__*/ (0, $a1dfd$jsxs)((0, $a1dfd$Fragment), {
                children: [
                    children[0].render?.(children[0]),
                    /*#__PURE__*/ (0, $a1dfd$jsx)($f329dd4f2aa58cd0$var$BreadcrumbMenu, {
                        items: children.slice(1, sliceIndex),
                        onAction: onAction
                    }),
                    children.slice(sliceIndex).map((node)=>/*#__PURE__*/ (0, $a1dfd$jsx)((0, $a1dfd$Fragment1), {
                            children: node.render?.(node)
                        }, node.key))
                ]
            }) : /*#__PURE__*/ (0, $a1dfd$jsx)((0, $a1dfd$Fragment), {
                children: children.map((node)=>/*#__PURE__*/ (0, $a1dfd$jsx)((0, $a1dfd$Fragment1), {
                        children: node.render?.(node)
                    }, node.key))
            })
        ]
    });
};


export {$f329dd4f2aa58cd0$export$65596d3621b0a4a0 as BreadcrumbsContext, $f329dd4f2aa58cd0$export$2dc68d50d56fbbd as Breadcrumbs, $f329dd4f2aa58cd0$export$dabcc1ec9dd9d1cc as Breadcrumb};
//# sourceMappingURL=Breadcrumbs.mjs.map
