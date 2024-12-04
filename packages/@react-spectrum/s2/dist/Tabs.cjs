require("./Tabs.css");
var $e991cbcdf82ced71$exports = require("./CenterBaseline.cjs");
var $bde97c91243ed164$exports = require("../icons/Icon.cjs");
var $4526404114e78c80$exports = require("./intlStrings.cjs");
var $9d2c38978395d44a$exports = require("./TabsPicker.cjs");
var $6367bc87eb7d24ad$exports = require("./Content.cjs");
var $ac757a4c2bd72aee$exports = require("../icons/useSpectrumContextProps.cjs");
var $5oxdw$reactjsxruntime = require("react/jsx-runtime");
var $5oxdw$react = require("react");
var $5oxdw$reactariacomponents = require("react-aria-components");
var $5oxdw$reactstatelyutils = require("@react-stately/utils");
var $5oxdw$reactspectrumutils = require("@react-spectrum/utils");
var $5oxdw$reactariautils = require("@react-aria/utils");
var $5oxdw$reactariai18n = require("@react-aria/i18n");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "TabsContext", () => $b27519d6a701105b$export$cfa7aa87c26e7d1f);
$parcel$export(module.exports, "Tabs", () => $b27519d6a701105b$export$b2539bed5023c21c);
$parcel$export(module.exports, "TabList", () => $b27519d6a701105b$export$e51a686c67fdaa2d);
$parcel$export(module.exports, "Tab", () => $b27519d6a701105b$export$3e41faf802a29e71);
$parcel$export(module.exports, "TabPanel", () => $b27519d6a701105b$export$3d96ec278d3efce4);
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












const $b27519d6a701105b$export$cfa7aa87c26e7d1f = /*#__PURE__*/ (0, $5oxdw$react.createContext)(null);
const $b27519d6a701105b$var$InternalTabsContext = /*#__PURE__*/ (0, $5oxdw$react.createContext)({
    onFocus: ()=>{}
});
const $b27519d6a701105b$var$tabs = function anonymous(props, overrides) {
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
const $b27519d6a701105b$export$b2539bed5023c21c = /*#__PURE__*/ (0, $5oxdw$react.forwardRef)(function Tabs(props, ref) {
    [props, ref] = (0, $ac757a4c2bd72aee$exports.useSpectrumContextProps)(props, ref, $b27519d6a701105b$export$cfa7aa87c26e7d1f);
    let { density: density = 'regular', isDisabled: isDisabled, disabledKeys: disabledKeys, orientation: orientation = 'horizontal', iconOnly: iconOnly = false } = props;
    let domRef = (0, $5oxdw$reactspectrumutils.useDOMRef)(ref);
    let [value, setValue] = (0, $5oxdw$reactstatelyutils.useControlledState)(props.selectedKey, props.defaultSelectedKey ?? null, props.onSelectionChange);
    let pickerRef = (0, $5oxdw$react.useRef)(null);
    return /*#__PURE__*/ (0, $5oxdw$reactjsxruntime.jsx)((0, $5oxdw$reactariacomponents.Provider), {
        values: [
            [
                $b27519d6a701105b$var$InternalTabsContext,
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
        children: /*#__PURE__*/ (0, $5oxdw$reactjsxruntime.jsx)($b27519d6a701105b$var$CollapsingCollection, {
            containerRef: domRef,
            children: /*#__PURE__*/ (0, $5oxdw$reactjsxruntime.jsx)((0, $5oxdw$reactariacomponents.Tabs), {
                ...props,
                ref: domRef,
                selectedKey: value,
                onSelectionChange: setValue,
                style: props.UNSAFE_style,
                className: (renderProps)=>(props.UNSAFE_className || '') + $b27519d6a701105b$var$tabs({
                        ...renderProps
                    }, props.styles),
                children: props.children
            })
        })
    });
});
const $b27519d6a701105b$var$tablist = function anonymous(props) {
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
function $b27519d6a701105b$export$e51a686c67fdaa2d(props1) {
    let { density: density, isDisabled: isDisabled, disabledKeys: disabledKeys, orientation: orientation, iconOnly: iconOnly, onFocus: onFocus } = (0, $5oxdw$react.useContext)($b27519d6a701105b$var$InternalTabsContext) ?? {};
    let { showItems: showItems } = (0, $5oxdw$react.useContext)($b27519d6a701105b$var$CollapseContext) ?? {};
    let state = (0, $5oxdw$react.useContext)((0, $5oxdw$reactariacomponents.TabListStateContext));
    let [selectedTab, setSelectedTab] = (0, $5oxdw$react.useState)(undefined);
    let tablistRef = (0, $5oxdw$react.useRef)(null);
    (0, $5oxdw$reactariautils.useLayoutEffect)(()=>{
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
    let prevFocused = (0, $5oxdw$react.useRef)(false);
    (0, $5oxdw$reactariautils.useLayoutEffect)(()=>{
        if (!showItems && !prevFocused.current && state?.selectionManager.isFocused) onFocus();
        prevFocused.current = state?.selectionManager.isFocused;
    }, [
        state?.selectionManager.isFocused,
        state?.selectionManager.focusedKey,
        showItems
    ]);
    return /*#__PURE__*/ (0, $5oxdw$reactjsxruntime.jsxs)("div", {
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
            showItems && orientation === 'vertical' && /*#__PURE__*/ (0, $5oxdw$reactjsxruntime.jsx)($b27519d6a701105b$var$TabLine, {
                disabledKeys: disabledKeys,
                isDisabled: isDisabled,
                selectedTab: selectedTab,
                orientation: orientation,
                density: density
            }),
            /*#__PURE__*/ (0, $5oxdw$reactjsxruntime.jsx)((0, $5oxdw$reactariacomponents.TabList), {
                ...props1,
                ref: tablistRef,
                className: (renderProps)=>$b27519d6a701105b$var$tablist({
                        ...renderProps,
                        isIconOnly: iconOnly,
                        density: density
                    })
            }),
            orientation === 'horizontal' && /*#__PURE__*/ (0, $5oxdw$reactjsxruntime.jsx)($b27519d6a701105b$var$TabLine, {
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
const $b27519d6a701105b$var$selectedIndicator = function anonymous(props) {
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
function $b27519d6a701105b$var$TabLine(props) {
    let { disabledKeys: disabledKeys, isDisabled: isTabsDisabled, selectedTab: selectedTab, orientation: orientation, density: density } = props;
    let { direction: direction } = (0, $5oxdw$reactariai18n.useLocale)();
    let state = (0, $5oxdw$react.useContext)((0, $5oxdw$reactariacomponents.TabListStateContext));
    let isDisabled = (0, $5oxdw$react.useMemo)(()=>{
        return isTabsDisabled || $b27519d6a701105b$var$isAllTabsDisabled(state?.collection, disabledKeys ? new Set(disabledKeys) : new Set());
    }, [
        state?.collection,
        disabledKeys,
        isTabsDisabled
    ]);
    let [style, setStyle] = (0, $5oxdw$react.useState)({
        transform: undefined,
        width: undefined,
        height: undefined
    });
    let onResize = (0, $5oxdw$react.useCallback)(()=>{
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
    (0, $5oxdw$reactariautils.useLayoutEffect)(()=>{
        onResize();
    }, [
        onResize,
        state?.selectedItem?.key,
        direction,
        orientation,
        density
    ]);
    return /*#__PURE__*/ (0, $5oxdw$reactjsxruntime.jsx)("div", {
        style: {
            ...style
        },
        className: $b27519d6a701105b$var$selectedIndicator({
            isDisabled: isDisabled,
            orientation: orientation
        })
    });
}
const $b27519d6a701105b$var$tab = function anonymous(props, overrides) {
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
const $b27519d6a701105b$var$icon = " . _Za _8-3t1x -rwx0fg_e-b";
function $b27519d6a701105b$export$3e41faf802a29e71(props1) {
    let { density: density, iconOnly: iconOnly } = (0, $5oxdw$react.useContext)($b27519d6a701105b$var$InternalTabsContext) ?? {};
    return /*#__PURE__*/ (0, $5oxdw$reactjsxruntime.jsx)((0, $5oxdw$reactariacomponents.Tab), {
        ...props1,
        // @ts-ignore
        originalProps: props1,
        style: props1.UNSAFE_style,
        className: (renderProps)=>(props1.UNSAFE_className || '') + $b27519d6a701105b$var$tab({
                ...renderProps,
                density: density
            }, props1.styles),
        children: ({ isMenu: // @ts-ignore
        isMenu })=>{
            if (isMenu) return props1.children;
            else return /*#__PURE__*/ (0, $5oxdw$reactjsxruntime.jsx)((0, $5oxdw$reactariacomponents.Provider), {
                values: [
                    [
                        (0, $6367bc87eb7d24ad$exports.TextContext),
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
                        (0, $bde97c91243ed164$exports.IconContext),
                        {
                            render: (0, $e991cbcdf82ced71$exports.centerBaseline)({
                                slot: 'icon',
                                styles: " . __A-3t1x"
                            }),
                            styles: $b27519d6a701105b$var$icon
                        }
                    ]
                ],
                children: typeof props1.children === 'string' ? /*#__PURE__*/ (0, $5oxdw$reactjsxruntime.jsx)((0, $6367bc87eb7d24ad$exports.Text), {
                    children: props1.children
                }) : props1.children
            });
        }
    });
}
const $b27519d6a701105b$var$tabPanel = function anonymous(props, overrides) {
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
function $b27519d6a701105b$export$3d96ec278d3efce4(props) {
    return /*#__PURE__*/ (0, $5oxdw$reactjsxruntime.jsx)((0, $5oxdw$reactariacomponents.TabPanel), {
        ...props,
        style: props.UNSAFE_style,
        className: (props.UNSAFE_className || '') + $b27519d6a701105b$var$tabPanel(null, props.styles)
    });
}
function $b27519d6a701105b$var$isAllTabsDisabled(collection, disabledKeys) {
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
let $b27519d6a701105b$var$HiddenTabs = function(props) {
    let { listRef: listRef, items: items, size: size, density: density } = props;
    return /*#__PURE__*/ (0, $5oxdw$reactjsxruntime.jsx)("div", {
        // @ts-ignore
        inert: "true",
        ref: listRef,
        className: " . _Z-17zqamw _6-17zqamw i-17zqamw j-17zqamw _7-17zqamw Ua Xa Za Va Wa __Eb __vb __wb _K-3t1x",
        children: items.map((item)=>{
            // pull off individual props as an allow list, don't want refs or other props getting through
            return /*#__PURE__*/ (0, $5oxdw$reactjsxruntime.jsx)("div", {
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
let $b27519d6a701105b$var$TabsMenu = (props1)=>{
    let stringFormatter = (0, $5oxdw$reactariai18n.useLocalizedStringFormatter)((0, ($parcel$interopDefault($4526404114e78c80$exports))), '@react-spectrum/s2');
    let { items: items } = props1;
    let { density: density, onSelectionChange: onSelectionChange, selectedKey: selectedKey, isDisabled: isDisabled, disabledKeys: disabledKeys, pickerRef: pickerRef } = (0, $5oxdw$react.useContext)($b27519d6a701105b$var$InternalTabsContext);
    let state = (0, $5oxdw$react.useContext)((0, $5oxdw$reactariacomponents.TabListStateContext));
    let allKeysDisabled = (0, $5oxdw$react.useMemo)(()=>{
        return $b27519d6a701105b$var$isAllTabsDisabled(state?.collection, disabledKeys ? new Set(disabledKeys) : new Set());
    }, [
        state?.collection,
        disabledKeys
    ]);
    return /*#__PURE__*/ (0, $5oxdw$reactjsxruntime.jsx)((0, $5oxdw$reactariacomponents.UNSTABLE_CollectionRendererContext).Provider, {
        value: (0, $5oxdw$reactariacomponents.UNSTABLE_DefaultCollectionRenderer),
        children: /*#__PURE__*/ (0, $5oxdw$reactjsxruntime.jsx)("div", {
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
            children: /*#__PURE__*/ (0, $5oxdw$reactjsxruntime.jsx)((0, $9d2c38978395d44a$exports.Picker), {
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
                    return /*#__PURE__*/ (0, $5oxdw$react.createElement)((0, $9d2c38978395d44a$exports.PickerItem), {
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
let $b27519d6a701105b$var$CollapseContext = /*#__PURE__*/ (0, $5oxdw$react.createContext)(null);
function $b27519d6a701105b$var$CollapsingCollection({ children: children, containerRef: containerRef }) {
    let [showItems, _setShowItems] = (0, $5oxdw$react.useState)(true);
    let { orientation: orientation } = (0, $5oxdw$react.useContext)($b27519d6a701105b$var$InternalTabsContext);
    let setShowItems = (0, $5oxdw$react.useCallback)((value)=>{
        if (orientation === 'vertical') // if orientation is vertical, we always show the items
        _setShowItems(true);
        else _setShowItems(value);
    }, [
        orientation
    ]);
    return /*#__PURE__*/ (0, $5oxdw$reactjsxruntime.jsx)($b27519d6a701105b$var$CollapseContext.Provider, {
        value: {
            containerRef: containerRef,
            showItems: orientation === 'vertical' ? true : showItems,
            setShowItems: setShowItems
        },
        children: /*#__PURE__*/ (0, $5oxdw$reactjsxruntime.jsx)((0, $5oxdw$reactariacomponents.UNSTABLE_CollectionRendererContext).Provider, {
            value: $b27519d6a701105b$var$CollapsingCollectionRenderer,
            children: children
        })
    });
}
let $b27519d6a701105b$var$CollapsingCollectionRenderer = {
    CollectionRoot ({ collection: collection }) {
        return $b27519d6a701105b$var$useCollectionRender(collection);
    },
    CollectionBranch ({ collection: collection }) {
        return $b27519d6a701105b$var$useCollectionRender(collection);
    }
};
let $b27519d6a701105b$var$useCollectionRender = (collection)=>{
    let { containerRef: containerRef, showItems: showItems, setShowItems: setShowItems } = (0, $5oxdw$react.useContext)($b27519d6a701105b$var$CollapseContext) ?? {};
    let { density: density = 'regular', orientation: orientation = 'horizontal', onSelectionChange: onSelectionChange } = (0, $5oxdw$react.useContext)($b27519d6a701105b$var$InternalTabsContext);
    let { direction: direction } = (0, $5oxdw$reactariai18n.useLocale)();
    let children = (0, $5oxdw$react.useMemo)(()=>{
        let result = [];
        for (let key of collection.getKeys())result.push(collection.getItem(key));
        return result;
    }, [
        collection
    ]);
    let listRef = (0, $5oxdw$react.useRef)(null);
    let updateOverflow = (0, $5oxdw$reactariautils.useEffectEvent)(()=>{
        if (orientation === 'vertical' || !listRef.current || !containerRef?.current) return;
        let container = listRef.current;
        let containerRect = container.getBoundingClientRect();
        let tabs = container.querySelectorAll('[data-hidden-tab]');
        let lastTab = tabs[tabs.length - 1];
        let lastTabRect = lastTab.getBoundingClientRect();
        if (direction === 'ltr') setShowItems?.(lastTabRect.right <= containerRect.right);
        else setShowItems?.(lastTabRect.left >= containerRect.left);
    });
    (0, $5oxdw$reactariautils.useResizeObserver)({
        ref: containerRef,
        onResize: updateOverflow
    });
    (0, $5oxdw$reactariautils.useLayoutEffect)(()=>{
        if (collection.size > 0) queueMicrotask(updateOverflow);
    }, [
        collection.size,
        updateOverflow
    ]);
    (0, $5oxdw$react.useEffect)(()=>{
        // Recalculate visible tags when fonts are loaded.
        document.fonts?.ready.then(()=>updateOverflow());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return /*#__PURE__*/ (0, $5oxdw$reactjsxruntime.jsxs)((0, $5oxdw$reactjsxruntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, $5oxdw$reactjsxruntime.jsx)($b27519d6a701105b$var$HiddenTabs, {
                items: children,
                density: density,
                listRef: listRef
            }),
            showItems ? children.map((node)=>/*#__PURE__*/ (0, $5oxdw$reactjsxruntime.jsx)((0, $5oxdw$react.Fragment), {
                    children: node.render?.(node)
                }, node.key)) : /*#__PURE__*/ (0, $5oxdw$reactjsxruntime.jsx)((0, $5oxdw$reactjsxruntime.Fragment), {
                children: /*#__PURE__*/ (0, $5oxdw$reactjsxruntime.jsx)($b27519d6a701105b$var$TabsMenu, {
                    items: children,
                    onSelectionChange: onSelectionChange
                })
            })
        ]
    });
};


//# sourceMappingURL=Tabs.cjs.map
