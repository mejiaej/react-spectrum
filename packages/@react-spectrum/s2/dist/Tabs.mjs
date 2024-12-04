import "./Tabs.css";
import {centerBaseline as $1f4b04be3f24aae3$export$9d7e2342a7e53afa} from "./CenterBaseline.mjs";
import {IconContext as $ac8c32e6775ddd1f$export$a49f528ae1a4d0ed} from "../icons/Icon.mjs";
import $8bRfI$intlStringsmjs from "./intlStrings.mjs";
import {Picker as $0067ea932a992b6a$export$ba25329847403e11, PickerItem as $0067ea932a992b6a$export$d601881f38163e28} from "./TabsPicker.mjs";
import {Text as $8e847109a6ab556d$export$5f1af8db9871e1d6, TextContext as $8e847109a6ab556d$export$9afb8bc826b033ea} from "./Content.mjs";
import {useSpectrumContextProps as $5ce63c423902f47d$export$764f6146fadd77f7} from "../icons/useSpectrumContextProps.mjs";
import {jsx as $8bRfI$jsx, jsxs as $8bRfI$jsxs, Fragment as $8bRfI$Fragment} from "react/jsx-runtime";
import {createContext as $8bRfI$createContext, forwardRef as $8bRfI$forwardRef, useRef as $8bRfI$useRef, useContext as $8bRfI$useContext, useState as $8bRfI$useState, useMemo as $8bRfI$useMemo, useCallback as $8bRfI$useCallback, createElement as $8bRfI$createElement, useEffect as $8bRfI$useEffect, Fragment as $8bRfI$Fragment1} from "react";
import {Provider as $8bRfI$Provider, Tabs as $8bRfI$Tabs, TabListStateContext as $8bRfI$TabListStateContext, TabList as $8bRfI$TabList, Tab as $8bRfI$Tab, TabPanel as $8bRfI$TabPanel, UNSTABLE_CollectionRendererContext as $8bRfI$UNSTABLE_CollectionRendererContext, UNSTABLE_DefaultCollectionRenderer as $8bRfI$UNSTABLE_DefaultCollectionRenderer} from "react-aria-components";
import {useControlledState as $8bRfI$useControlledState} from "@react-stately/utils";
import {useDOMRef as $8bRfI$useDOMRef} from "@react-spectrum/utils";
import {useLayoutEffect as $8bRfI$useLayoutEffect, useEffectEvent as $8bRfI$useEffectEvent, useResizeObserver as $8bRfI$useResizeObserver} from "@react-aria/utils";
import {useLocale as $8bRfI$useLocale, useLocalizedStringFormatter as $8bRfI$useLocalizedStringFormatter} from "@react-aria/i18n";


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












const $79e2b4a1b34d1592$export$cfa7aa87c26e7d1f = /*#__PURE__*/ (0, $8bRfI$createContext)(null);
const $79e2b4a1b34d1592$var$InternalTabsContext = /*#__PURE__*/ (0, $8bRfI$createContext)({
    onFocus: ()=>{}
});
const $79e2b4a1b34d1592$var$tabs = function anonymous(props, overrides) {
    let rules = " .";
    let matches = (overrides || '').match(/(?:^|\s)(?:y|z|A|B|_9|_8|h|_5|_4|__A|__c|__d|__a|__b|U|__Q|X|Z|V|W|l|q|r|k|o|p)[^\s]+/g) || [];
    rules += matches.join('');
    let $_8 = false;
    for (let p of matches)if (/^\s*_8/.test(p)) $_8 = true;
    rules += ' _Zd';
    if (!$_8) rules += ' _8-3t1x';
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
    rules += ' _eb';
    rules += ' _f-1x99dlob';
    rules += ' _fa';
    rules += ' an';
    if (props.orientation === "horizontal") rules += ' _6b';
    return rules;
};
const $79e2b4a1b34d1592$export$b2539bed5023c21c = /*#__PURE__*/ (0, $8bRfI$forwardRef)(function Tabs(props, ref) {
    [props, ref] = (0, $5ce63c423902f47d$export$764f6146fadd77f7)(props, ref, $79e2b4a1b34d1592$export$cfa7aa87c26e7d1f);
    let { density: density = 'regular', isDisabled: isDisabled, disabledKeys: disabledKeys, orientation: orientation = 'horizontal', iconOnly: iconOnly = false } = props;
    let domRef = (0, $8bRfI$useDOMRef)(ref);
    let [value, setValue] = (0, $8bRfI$useControlledState)(props.selectedKey, props.defaultSelectedKey ?? null, props.onSelectionChange);
    let pickerRef = (0, $8bRfI$useRef)(null);
    return /*#__PURE__*/ (0, $8bRfI$jsx)((0, $8bRfI$Provider), {
        values: [
            [
                $79e2b4a1b34d1592$var$InternalTabsContext,
                {
                    density: density,
                    isDisabled: isDisabled,
                    orientation: orientation,
                    disabledKeys: disabledKeys,
                    selectedKey: value,
                    onSelectionChange: setValue,
                    iconOnly: iconOnly,
                    onFocus: ()=>pickerRef.current?.focus(),
                    pickerRef: pickerRef
                }
            ]
        ],
        children: /*#__PURE__*/ (0, $8bRfI$jsx)($79e2b4a1b34d1592$var$CollapsingCollection, {
            containerRef: domRef,
            children: /*#__PURE__*/ (0, $8bRfI$jsx)((0, $8bRfI$Tabs), {
                ...props,
                ref: domRef,
                selectedKey: value,
                onSelectionChange: setValue,
                style: props.UNSAFE_style,
                className: (renderProps)=>(props.UNSAFE_className || '') + $79e2b4a1b34d1592$var$tabs({
                        ...renderProps
                    }, props.styles),
                children: props.children
            })
        })
    });
});
const $79e2b4a1b34d1592$var$tablist = function anonymous(props) {
    let rules = " .";
    rules += ' _Zd';
    if (props.orientation === "horizontal") {
        if (props.isIconOnly) {
            if (props.density === "regular") rules += ' ih';
            else if (props.density === "compact") rules += ' if';
        } else if (props.density === "regular") rules += ' ij';
        else if (props.density === "compact") rules += ' ih';
    }
    if (props.orientation === "horizontal") {
        if (props.isIconOnly) {
            if (props.density === "regular") rules += ' jh';
            else if (props.density === "compact") rules += ' jf';
        } else if (props.density === "regular") rules += ' jj';
        else if (props.density === "compact") rules += ' jh';
    }
    if (props.orientation === "vertical") rules += ' _6b';
    if (props.orientation === "vertical") rules += ' Dg';
    if (props.orientation === "vertical") rules += ' Ce';
    rules += ' _8-3t1x';
    rules += ' h-3hmsa';
    return rules;
};
function $79e2b4a1b34d1592$export$e51a686c67fdaa2d(props1) {
    let { density: density, isDisabled: isDisabled, disabledKeys: disabledKeys, orientation: orientation, iconOnly: iconOnly, onFocus: onFocus } = (0, $8bRfI$useContext)($79e2b4a1b34d1592$var$InternalTabsContext) ?? {};
    let { showItems: showItems } = (0, $8bRfI$useContext)($79e2b4a1b34d1592$var$CollapseContext) ?? {};
    let state = (0, $8bRfI$useContext)((0, $8bRfI$TabListStateContext));
    let [selectedTab, setSelectedTab] = (0, $8bRfI$useState)(undefined);
    let tablistRef = (0, $8bRfI$useRef)(null);
    (0, $8bRfI$useLayoutEffect)(()=>{
        if (tablistRef?.current && showItems) {
            let tab = tablistRef.current.querySelector('[role=tab][data-selected=true]');
            if (tab != null) setSelectedTab(tab);
        } else if (tablistRef?.current) {
            let picker = tablistRef.current.querySelector('button');
            if (picker != null) setSelectedTab(picker);
        }
    }, [
        tablistRef,
        state?.selectedItem?.key,
        showItems
    ]);
    let prevFocused = (0, $8bRfI$useRef)(false);
    (0, $8bRfI$useLayoutEffect)(()=>{
        if (!showItems && !prevFocused.current && state?.selectionManager.isFocused) onFocus();
        prevFocused.current = state?.selectionManager.isFocused;
    }, [
        state?.selectionManager.isFocused,
        state?.selectionManager.focusedKey,
        showItems
    ]);
    return /*#__PURE__*/ (0, $8bRfI$jsxs)("div", {
        style: props1.UNSAFE_style,
        className: (props1.UNSAFE_className || '') + function anonymous(props, overrides) {
            let rules = " .";
            let matches = (overrides || '').match(/(?:^|\s)(?:y|z|A|B|_9|_8|h|_5|_4|__A|__c|__d|__a|__b|U|__Q|X|Z|V|W|l|q|r)[^\s]+/g) || [];
            rules += matches.join('');
            let $U = false;
            for (let p of matches)if (/^\s*U/.test(p)) $U = true;
            if (!$U) rules += ' Uc';
            return rules;
        }(null, props1.styles),
        children: [
            showItems && orientation === 'vertical' && /*#__PURE__*/ (0, $8bRfI$jsx)($79e2b4a1b34d1592$var$TabLine, {
                disabledKeys: disabledKeys,
                isDisabled: isDisabled,
                selectedTab: selectedTab,
                orientation: orientation,
                density: density
            }),
            /*#__PURE__*/ (0, $8bRfI$jsx)((0, $8bRfI$TabList), {
                ...props1,
                ref: tablistRef,
                className: (renderProps)=>$79e2b4a1b34d1592$var$tablist({
                        ...renderProps,
                        isIconOnly: iconOnly,
                        density: density
                    })
            }),
            orientation === 'horizontal' && /*#__PURE__*/ (0, $8bRfI$jsx)($79e2b4a1b34d1592$var$TabLine, {
                showItems: showItems,
                disabledKeys: disabledKeys,
                isDisabled: isDisabled,
                selectedTab: selectedTab,
                orientation: orientation,
                density: density
            })
        ]
    });
}
const $79e2b4a1b34d1592$var$selectedIndicator = function anonymous(props) {
    let rules = " .";
    rules += ' Ua';
    if (props.isDisabled) rules += ' ba_____B';
    else rules += ' ba_____z';
    if (props.isDisabled) rules += ' bg';
    else {
        if (props.isPressed) rules += ' bo';
        else if (props.isFocusVisible) rules += ' bo';
        else if (props.isHovered) rules += ' bo';
        else rules += ' bn';
    }
    if (props.orientation === "horizontal") rules += ' k-375zlr';
    if (props.orientation === "vertical") rules += ' l-375zlr';
    if (props.orientation === "horizontal") rules += ' Za';
    rules += ' wf';
    rules += ' _vf';
    rules += ' _wf';
    rules += ' _xf';
    rules += ' _yf';
    rules += ' _Q-375x5l';
    rules += ' _Ra';
    return rules;
};
function $79e2b4a1b34d1592$var$TabLine(props) {
    let { disabledKeys: disabledKeys, isDisabled: isTabsDisabled, selectedTab: selectedTab, orientation: orientation, density: density } = props;
    let { direction: direction } = (0, $8bRfI$useLocale)();
    let state = (0, $8bRfI$useContext)((0, $8bRfI$TabListStateContext));
    let isDisabled = (0, $8bRfI$useMemo)(()=>{
        return isTabsDisabled || $79e2b4a1b34d1592$var$isAllTabsDisabled(state?.collection, disabledKeys ? new Set(disabledKeys) : new Set());
    }, [
        state?.collection,
        disabledKeys,
        isTabsDisabled
    ]);
    let [style, setStyle] = (0, $8bRfI$useState)({
        transform: undefined,
        width: undefined,
        height: undefined
    });
    let onResize = (0, $8bRfI$useCallback)(()=>{
        if (selectedTab) {
            let styleObj = {
                transform: undefined,
                width: undefined,
                height: undefined
            };
            // In RTL, calculate the transform from the right edge of the tablist so that resizing the window doesn't break the Tabline position due to offsetLeft changes
            let offset = direction === 'rtl' ? -1 * (selectedTab.offsetParent?.offsetWidth - selectedTab.offsetWidth - selectedTab.offsetLeft) : selectedTab.offsetLeft;
            styleObj.transform = orientation === 'vertical' ? `translateY(${selectedTab.offsetTop}px)` : `translateX(${offset}px)`;
            if (orientation === 'horizontal') styleObj.width = `${selectedTab.offsetWidth}px`;
            else styleObj.height = `${selectedTab.offsetHeight}px`;
            setStyle(styleObj);
        }
    }, [
        direction,
        setStyle,
        selectedTab,
        orientation
    ]);
    (0, $8bRfI$useLayoutEffect)(()=>{
        onResize();
    }, [
        onResize,
        state?.selectedItem?.key,
        direction,
        orientation,
        density
    ]);
    return /*#__PURE__*/ (0, $8bRfI$jsx)("div", {
        style: {
            ...style
        },
        className: $79e2b4a1b34d1592$var$selectedIndicator({
            isDisabled: isDisabled,
            orientation: orientation
        })
    });
}
const $79e2b4a1b34d1592$var$tab = function anonymous(props, overrides) {
    let rules = " .";
    let matches = (overrides || '').match(/(?:^|\s)(?:y|z|A|B|_9|_8|h|_5|_4|__A|__c|__d|__a|__b|U|__Q|X|Z|V|W|l|q|r)[^\s]+/g) || [];
    rules += matches.join('');
    let $U = false;
    let $_8 = false;
    for (let p of matches){
        if (/^\s*U/.test(p)) $U = true;
        if (/^\s*_8/.test(p)) $_8 = true;
    }
    if (props.isFocusVisible) rules += ' _Lb';
    else rules += ' _La';
    rules += ' da_____z';
    rules += ' dx';
    rules += ' _Nc';
    rules += ' _M-3t1z';
    rules += ' _Zd';
    if (props.isDisabled) rules += ' aa_____B';
    else if (props.isSelected) rules += ' aa_____z';
    if (props.isDisabled) rules += ' aj';
    else if (props.isHovered) {
        if (props.isPressed) rules += ' an';
        else if (props.isFocusVisible) rules += ' an';
        else if (props.isHovered) rules += ' an';
        else rules += ' am';
    } else if (props.isSelected) {
        if (props.isPressed) rules += ' ao';
        else if (props.isFocusVisible) rules += ' ao';
        else rules += ' an';
    } else {
        if (props.isPressed) rules += ' an';
        else if (props.isFocusVisible) rules += ' an';
        else rules += ' am';
    }
    rules += ' _vb';
    rules += ' _wb';
    rules += ' _xb';
    rules += ' _yb';
    rules += ' ibH';
    rules += ' iG';
    rules += ' jbH';
    rules += ' jG';
    if (props.density === "regular") rules += ' k_a';
    else if (props.density === "compact") rules += ' kU';
    rules += ' _1c';
    if (!$U) rules += ' Uc';
    rules += ' __Hb';
    if (!$_8) rules += ' _8-3t1x';
    rules += ' _Oa';
    rules += ' _Q-375x7f';
    rules += ' _Ra';
    return rules;
};
const $79e2b4a1b34d1592$var$icon = " . _Za _8-3t1x -rwx0fg_e-b";
function $79e2b4a1b34d1592$export$3e41faf802a29e71(props1) {
    let { density: density, iconOnly: iconOnly } = (0, $8bRfI$useContext)($79e2b4a1b34d1592$var$InternalTabsContext) ?? {};
    return /*#__PURE__*/ (0, $8bRfI$jsx)((0, $8bRfI$Tab), {
        ...props1,
        // @ts-ignore
        originalProps: props1,
        style: props1.UNSAFE_style,
        className: (renderProps)=>(props1.UNSAFE_className || '') + $79e2b4a1b34d1592$var$tab({
                ...renderProps,
                density: density
            }, props1.styles),
        children: ({ isMenu: // @ts-ignore
        isMenu })=>{
            if (isMenu) return props1.children;
            else return /*#__PURE__*/ (0, $8bRfI$jsx)((0, $8bRfI$Provider), {
                values: [
                    [
                        (0, $8e847109a6ab556d$export$9afb8bc826b033ea),
                        {
                            styles: function anonymous(props) {
                                let rules = " .";
                                rules += ' __A-3t1y';
                                if (props.isIconOnly) rules += ' _Zj';
                                return rules;
                            }({
                                isIconOnly: iconOnly
                            })
                        }
                    ],
                    [
                        (0, $ac8c32e6775ddd1f$export$a49f528ae1a4d0ed),
                        {
                            render: (0, $1f4b04be3f24aae3$export$9d7e2342a7e53afa)({
                                slot: 'icon',
                                styles: " . __A-3t1x"
                            }),
                            styles: $79e2b4a1b34d1592$var$icon
                        }
                    ]
                ],
                children: typeof props1.children === 'string' ? /*#__PURE__*/ (0, $8bRfI$jsx)((0, $8e847109a6ab556d$export$5f1af8db9871e1d6), {
                    children: props1.children
                }) : props1.children
            });
        }
    });
}
const $79e2b4a1b34d1592$var$tabPanel = function anonymous(props, overrides) {
    let rules = " .";
    let matches = (overrides || '').match(/(?:^|\s)(?:y|z|A|B|_9|_8|h|_5|_4|__A|__c|__d|__a|__b|U|__Q|X|Z|V|W|l|q|r|k|o|p)[^\s]+/g) || [];
    rules += matches.join('');
    let $A = false;
    let $_9 = false;
    let $h = false;
    let $o = false;
    let $q = false;
    for (let p of matches){
        if (/^\s*A/.test(p)) $A = true;
        if (/^\s*_9/.test(p)) $_9 = true;
        if (/^\s*h/.test(p)) $h = true;
        if (/^\s*o/.test(p)) $o = true;
        if (/^\s*q/.test(p)) $q = true;
    }
    if (!$A) rules += ' Ac';
    rules += ' an';
    if (!$_9) rules += ' _9-3t1y';
    if (!$h) rules += ' h-3hmsa';
    if (!$o) rules += ' oo';
    if (!$q) rules += ' qo';
    return rules;
};
function $79e2b4a1b34d1592$export$3d96ec278d3efce4(props) {
    return /*#__PURE__*/ (0, $8bRfI$jsx)((0, $8bRfI$TabPanel), {
        ...props,
        style: props.UNSAFE_style,
        className: (props.UNSAFE_className || '') + $79e2b4a1b34d1592$var$tabPanel(null, props.styles)
    });
}
function $79e2b4a1b34d1592$var$isAllTabsDisabled(collection, disabledKeys) {
    let testKey = null;
    if (collection && collection.size > 0) {
        testKey = collection.getFirstKey();
        let index = 0;
        while(testKey && index < collection.size){
            // We have to check if the item in the collection has a key in disabledKeys or has the isDisabled prop set directly on it
            if (!disabledKeys.has(testKey) && !collection.getItem(testKey)?.props?.isDisabled) return false;
            testKey = collection.getKeyAfter(testKey);
            index++;
        }
        return true;
    }
    return false;
}
let $79e2b4a1b34d1592$var$HiddenTabs = function(props) {
    let { listRef: listRef, items: items, size: size, density: density } = props;
    return /*#__PURE__*/ (0, $8bRfI$jsx)("div", {
        // @ts-ignore
        inert: "true",
        ref: listRef,
        className: " . _Z-17zqamw _6-17zqamw i-17zqamw j-17zqamw _7-17zqamw Ua Xa Za Va Wa __Eb __vb __wb _K-3t1x",
        children: items.map((item)=>{
            // pull off individual props as an allow list, don't want refs or other props getting through
            return /*#__PURE__*/ (0, $8bRfI$jsx)("div", {
                "data-hidden-tab": true,
                style: item.props.UNSAFE_style,
                className: item.props.className({
                    size: size,
                    density: density
                }),
                children: item.props.children({
                    size: size,
                    density: density
                })
            }, item.key);
        })
    });
};
let $79e2b4a1b34d1592$var$TabsMenu = (props1)=>{
    let stringFormatter = (0, $8bRfI$useLocalizedStringFormatter)((0, ($parcel$interopDefault($8bRfI$intlStringsmjs))), '@react-spectrum/s2');
    let { items: items } = props1;
    let { density: density, onSelectionChange: onSelectionChange, selectedKey: selectedKey, isDisabled: isDisabled, disabledKeys: disabledKeys, pickerRef: pickerRef } = (0, $8bRfI$useContext)($79e2b4a1b34d1592$var$InternalTabsContext);
    let state = (0, $8bRfI$useContext)((0, $8bRfI$TabListStateContext));
    let allKeysDisabled = (0, $8bRfI$useMemo)(()=>{
        return $79e2b4a1b34d1592$var$isAllTabsDisabled(state?.collection, disabledKeys ? new Set(disabledKeys) : new Set());
    }, [
        state?.collection,
        disabledKeys
    ]);
    return /*#__PURE__*/ (0, $8bRfI$jsx)((0, $8bRfI$UNSTABLE_CollectionRendererContext).Provider, {
        value: (0, $8bRfI$UNSTABLE_DefaultCollectionRenderer),
        children: /*#__PURE__*/ (0, $8bRfI$jsx)("div", {
            className: function anonymous(props) {
                let rules = " .";
                rules += ' _Zd';
                rules += ' _1c';
                if (props.density === "regular") rules += ' k_a';
                else if (props.density === "compact") rules += ' kU';
                return rules;
            }({
                density: density
            }),
            children: /*#__PURE__*/ (0, $8bRfI$jsx)((0, $0067ea932a992b6a$export$ba25329847403e11), {
                ref: pickerRef ? pickerRef : undefined,
                isDisabled: isDisabled || allKeysDisabled,
                density: density,
                items: items,
                disabledKeys: disabledKeys,
                selectedKey: selectedKey,
                onSelectionChange: onSelectionChange,
                "aria-label": stringFormatter.format('tabs.selectorLabel'),
                children: (item)=>{
                    // need to determine the best way to handle icon only -> icon and text
                    // good enough to aria-label the picker item?
                    return /*#__PURE__*/ (0, $8bRfI$createElement)((0, $0067ea932a992b6a$export$d601881f38163e28), {
                        ...item.props.originalProps,
                        isDisabled: isDisabled || allKeysDisabled,
                        key: item.key
                    }, item.props.children({
                        density: density,
                        isMenu: true
                    }));
                }
            })
        })
    });
};
// Context for passing the count for the custom renderer
let $79e2b4a1b34d1592$var$CollapseContext = /*#__PURE__*/ (0, $8bRfI$createContext)(null);
function $79e2b4a1b34d1592$var$CollapsingCollection({ children: children, containerRef: containerRef }) {
    let [showItems, _setShowItems] = (0, $8bRfI$useState)(true);
    let { orientation: orientation } = (0, $8bRfI$useContext)($79e2b4a1b34d1592$var$InternalTabsContext);
    let setShowItems = (0, $8bRfI$useCallback)((value)=>{
        if (orientation === 'vertical') // if orientation is vertical, we always show the items
        _setShowItems(true);
        else _setShowItems(value);
    }, [
        orientation
    ]);
    return /*#__PURE__*/ (0, $8bRfI$jsx)($79e2b4a1b34d1592$var$CollapseContext.Provider, {
        value: {
            containerRef: containerRef,
            showItems: orientation === 'vertical' ? true : showItems,
            setShowItems: setShowItems
        },
        children: /*#__PURE__*/ (0, $8bRfI$jsx)((0, $8bRfI$UNSTABLE_CollectionRendererContext).Provider, {
            value: $79e2b4a1b34d1592$var$CollapsingCollectionRenderer,
            children: children
        })
    });
}
let $79e2b4a1b34d1592$var$CollapsingCollectionRenderer = {
    CollectionRoot ({ collection: collection }) {
        return $79e2b4a1b34d1592$var$useCollectionRender(collection);
    },
    CollectionBranch ({ collection: collection }) {
        return $79e2b4a1b34d1592$var$useCollectionRender(collection);
    }
};
let $79e2b4a1b34d1592$var$useCollectionRender = (collection)=>{
    let { containerRef: containerRef, showItems: showItems, setShowItems: setShowItems } = (0, $8bRfI$useContext)($79e2b4a1b34d1592$var$CollapseContext) ?? {};
    let { density: density = 'regular', orientation: orientation = 'horizontal', onSelectionChange: onSelectionChange } = (0, $8bRfI$useContext)($79e2b4a1b34d1592$var$InternalTabsContext);
    let { direction: direction } = (0, $8bRfI$useLocale)();
    let children = (0, $8bRfI$useMemo)(()=>{
        let result = [];
        for (let key of collection.getKeys())result.push(collection.getItem(key));
        return result;
    }, [
        collection
    ]);
    let listRef = (0, $8bRfI$useRef)(null);
    let updateOverflow = (0, $8bRfI$useEffectEvent)(()=>{
        if (orientation === 'vertical' || !listRef.current || !containerRef?.current) return;
        let container = listRef.current;
        let containerRect = container.getBoundingClientRect();
        let tabs = container.querySelectorAll('[data-hidden-tab]');
        let lastTab = tabs[tabs.length - 1];
        let lastTabRect = lastTab.getBoundingClientRect();
        if (direction === 'ltr') setShowItems?.(lastTabRect.right <= containerRect.right);
        else setShowItems?.(lastTabRect.left >= containerRect.left);
    });
    (0, $8bRfI$useResizeObserver)({
        ref: containerRef,
        onResize: updateOverflow
    });
    (0, $8bRfI$useLayoutEffect)(()=>{
        if (collection.size > 0) queueMicrotask(updateOverflow);
    }, [
        collection.size,
        updateOverflow
    ]);
    (0, $8bRfI$useEffect)(()=>{
        // Recalculate visible tags when fonts are loaded.
        document.fonts?.ready.then(()=>updateOverflow());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return /*#__PURE__*/ (0, $8bRfI$jsxs)((0, $8bRfI$Fragment), {
        children: [
            /*#__PURE__*/ (0, $8bRfI$jsx)($79e2b4a1b34d1592$var$HiddenTabs, {
                items: children,
                density: density,
                listRef: listRef
            }),
            showItems ? children.map((node)=>/*#__PURE__*/ (0, $8bRfI$jsx)((0, $8bRfI$Fragment1), {
                    children: node.render?.(node)
                }, node.key)) : /*#__PURE__*/ (0, $8bRfI$jsx)((0, $8bRfI$Fragment), {
                children: /*#__PURE__*/ (0, $8bRfI$jsx)($79e2b4a1b34d1592$var$TabsMenu, {
                    items: children,
                    onSelectionChange: onSelectionChange
                })
            })
        ]
    });
};


export {$79e2b4a1b34d1592$export$cfa7aa87c26e7d1f as TabsContext, $79e2b4a1b34d1592$export$b2539bed5023c21c as Tabs, $79e2b4a1b34d1592$export$e51a686c67fdaa2d as TabList, $79e2b4a1b34d1592$export$3e41faf802a29e71 as Tab, $79e2b4a1b34d1592$export$3d96ec278d3efce4 as TabPanel};
//# sourceMappingURL=Tabs.mjs.map
