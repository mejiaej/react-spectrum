require("./vars.afa33fec.css");
var $29add1fad43dc941$exports = require("./tabs_vars_css.main.js");
var $31o9C$reactspectrumutils = require("@react-spectrum/utils");
var $31o9C$reactariautils = require("@react-aria/utils");
var $31o9C$reactariafocus = require("@react-aria/focus");
var $31o9C$reactspectrumpicker = require("@react-spectrum/picker");
var $31o9C$reactstatelylist = require("@react-stately/list");
var $31o9C$react = require("react");
var $31o9C$reactstatelytabs = require("@react-stately/tabs");
var $31o9C$reactspectrumtext = require("@react-spectrum/text");
var $31o9C$reactstatelycollections = require("@react-stately/collections");
var $31o9C$reactariainteractions = require("@react-aria/interactions");
var $31o9C$reactariai18n = require("@react-aria/i18n");
var $31o9C$reactspectrumprovider = require("@react-spectrum/provider");
var $31o9C$reactariatabs = require("@react-aria/tabs");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "Tabs", () => $e8d58e7e32285ba6$export$b2539bed5023c21c);
$parcel$export(module.exports, "TabList", () => $e8d58e7e32285ba6$export$e51a686c67fdaa2d);
$parcel$export(module.exports, "TabPanels", () => $e8d58e7e32285ba6$export$5dae8d435677f210);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 













const $e8d58e7e32285ba6$var$TabContext = /*#__PURE__*/ (0, ($parcel$interopDefault($31o9C$react))).createContext(null);
const $e8d58e7e32285ba6$export$b2539bed5023c21c = /*#__PURE__*/ (0, ($parcel$interopDefault($31o9C$react))).forwardRef(function Tabs(props, ref) {
    props = (0, $31o9C$reactspectrumprovider.useProviderProps)(props);
    let { orientation: orientation = 'horizontal', density: density = 'regular', children: children, ...otherProps } = props;
    let domRef = (0, $31o9C$reactspectrumutils.useDOMRef)(ref);
    let tablistRef = (0, $31o9C$react.useRef)(null);
    let wrapperRef = (0, $31o9C$react.useRef)(null);
    let { direction: direction } = (0, $31o9C$reactariai18n.useLocale)();
    let { styleProps: styleProps } = (0, $31o9C$reactspectrumutils.useStyleProps)(otherProps);
    let [collapsed, setCollapsed] = (0, $31o9C$react.useState)(false);
    let [selectedTab, setSelectedTab] = (0, $31o9C$react.useState)(null);
    const [tabListState, setTabListState] = (0, $31o9C$react.useState)(null);
    let [tabPositions, setTabPositions] = (0, $31o9C$react.useState)([]);
    let prevTabPositions = (0, $31o9C$react.useRef)(tabPositions);
    (0, $31o9C$react.useEffect)(()=>{
        if (tablistRef.current) {
            var _tabListState_selectedKey;
            var _tabListState_selectedKey_toString;
            let selectedTab = tablistRef.current.querySelector(`[data-key="${CSS.escape((_tabListState_selectedKey_toString = tabListState === null || tabListState === void 0 ? void 0 : (_tabListState_selectedKey = tabListState.selectedKey) === null || _tabListState_selectedKey === void 0 ? void 0 : _tabListState_selectedKey.toString()) !== null && _tabListState_selectedKey_toString !== void 0 ? _tabListState_selectedKey_toString : '')}"]`);
            if (selectedTab != null) setSelectedTab(selectedTab);
        }
    // collapse is in the dep array so selectedTab can be updated for TabLine positioning
    }, [
        children,
        tabListState === null || tabListState === void 0 ? void 0 : tabListState.selectedKey,
        collapsed,
        tablistRef
    ]);
    let checkShouldCollapse = (0, $31o9C$react.useCallback)(()=>{
        if (wrapperRef.current && orientation !== 'vertical') {
            var _tablistRef_current;
            let tabsComponent = wrapperRef.current;
            var _tablistRef_current_querySelectorAll;
            let tabs = (_tablistRef_current_querySelectorAll = (_tablistRef_current = tablistRef.current) === null || _tablistRef_current === void 0 ? void 0 : _tablistRef_current.querySelectorAll('[role="tab"]')) !== null && _tablistRef_current_querySelectorAll !== void 0 ? _tablistRef_current_querySelectorAll : new NodeList();
            let tabDimensions = [
                ...tabs
            ].map((tab)=>tab.getBoundingClientRect());
            let end = direction === 'rtl' ? 'left' : 'right';
            let farEdgeTabList = tabsComponent.getBoundingClientRect()[end];
            let farEdgeLastTab = tabDimensions[tabDimensions.length - 1][end];
            let shouldCollapse = direction === 'rtl' ? farEdgeLastTab < farEdgeTabList : farEdgeTabList < farEdgeLastTab;
            setCollapsed(shouldCollapse);
            if (tabDimensions.length !== prevTabPositions.current.length || tabDimensions.some((box, index)=>{
                var _prevTabPositions_current_index, _prevTabPositions_current_index1;
                return (box === null || box === void 0 ? void 0 : box.left) !== ((_prevTabPositions_current_index = prevTabPositions.current[index]) === null || _prevTabPositions_current_index === void 0 ? void 0 : _prevTabPositions_current_index.left) || (box === null || box === void 0 ? void 0 : box.right) !== ((_prevTabPositions_current_index1 = prevTabPositions.current[index]) === null || _prevTabPositions_current_index1 === void 0 ? void 0 : _prevTabPositions_current_index1.right);
            })) {
                setTabPositions(tabDimensions);
                prevTabPositions.current = tabDimensions;
            }
        }
    }, [
        tablistRef,
        wrapperRef,
        direction,
        orientation,
        setCollapsed,
        prevTabPositions,
        setTabPositions
    ]);
    (0, $31o9C$react.useEffect)(()=>{
        checkShouldCollapse();
    }, [
        children,
        checkShouldCollapse
    ]);
    (0, $31o9C$reactariautils.useResizeObserver)({
        ref: wrapperRef,
        onResize: checkShouldCollapse
    });
    let tabPanelProps = {
        'aria-labelledby': undefined
    };
    // When the tabs are collapsed, the tabPanel should be labelled by the Picker button element.
    let collapsibleTabListId = (0, $31o9C$reactariautils.useId)();
    if (collapsed && orientation !== 'vertical') tabPanelProps['aria-labelledby'] = collapsibleTabListId;
    return /*#__PURE__*/ (0, ($parcel$interopDefault($31o9C$react))).createElement($e8d58e7e32285ba6$var$TabContext.Provider, {
        value: {
            tabProps: {
                ...props,
                orientation: orientation,
                density: density
            },
            tabState: {
                tabListState: tabListState,
                setTabListState: setTabListState,
                selectedTab: selectedTab,
                collapsed: collapsed
            },
            refs: {
                tablistRef: tablistRef,
                wrapperRef: wrapperRef
            },
            tabPanelProps: tabPanelProps,
            tabLineState: tabPositions
        }
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($31o9C$react))).createElement("div", {
        ...(0, $31o9C$reactariautils.filterDOMProps)(otherProps),
        ...styleProps,
        ref: domRef,
        className: (0, $31o9C$reactspectrumutils.classNames)((0, ($parcel$interopDefault($29add1fad43dc941$exports))), 'spectrum-TabsPanel', `spectrum-TabsPanel--${orientation}`, styleProps.className)
    }, props.children));
});
// @private
function $e8d58e7e32285ba6$var$Tab(props) {
    let { item: item, state: state } = props;
    let { key: key, rendered: rendered } = item;
    let ref = (0, $31o9C$react.useRef)(undefined);
    let { tabProps: tabProps, isSelected: isSelected, isDisabled: isDisabled } = (0, $31o9C$reactariatabs.useTab)({
        key: key
    }, state, ref);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $31o9C$reactariainteractions.useHover)({
        ...props
    });
    let ElementType = item.props.href ? 'a' : 'div';
    return /*#__PURE__*/ (0, ($parcel$interopDefault($31o9C$react))).createElement((0, $31o9C$reactariafocus.FocusRing), {
        focusRingClass: (0, $31o9C$reactspectrumutils.classNames)((0, ($parcel$interopDefault($29add1fad43dc941$exports))), 'focus-ring')
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($31o9C$react))).createElement(ElementType, {
        ...(0, $31o9C$reactariautils.mergeProps)(tabProps, hoverProps),
        ref: ref,
        className: (0, $31o9C$reactspectrumutils.classNames)((0, ($parcel$interopDefault($29add1fad43dc941$exports))), 'spectrum-Tabs-item', {
            'is-selected': isSelected,
            'is-disabled': isDisabled,
            'is-hovered': isHovered
        })
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($31o9C$react))).createElement((0, $31o9C$reactspectrumutils.SlotProvider), {
        slots: {
            icon: {
                size: 'S',
                UNSAFE_className: (0, $31o9C$reactspectrumutils.classNames)((0, ($parcel$interopDefault($29add1fad43dc941$exports))), 'spectrum-Icon')
            },
            text: {
                UNSAFE_className: (0, $31o9C$reactspectrumutils.classNames)((0, ($parcel$interopDefault($29add1fad43dc941$exports))), 'spectrum-Tabs-itemLabel')
            }
        }
    }, typeof rendered === 'string' ? /*#__PURE__*/ (0, ($parcel$interopDefault($31o9C$react))).createElement((0, $31o9C$reactspectrumtext.Text), null, rendered) : rendered)));
}
// @private
function $e8d58e7e32285ba6$var$TabLine(props) {
    let { orientation: orientation, selectedTab: // Is either the tab node (non-collapsed) or the picker node (collapsed)
    selectedTab, selectedKey: // selectedKey is provided so that the TabLine styles are updated when the TabPicker's width updates from a selection change
    selectedKey } = props;
    let { direction: direction } = (0, $31o9C$reactariai18n.useLocale)();
    let { scale: scale } = (0, $31o9C$reactspectrumprovider.useProvider)();
    let { tabLineState: tabLineState } = (0, $31o9C$react.useContext)($e8d58e7e32285ba6$var$TabContext);
    let [style, setStyle] = (0, $31o9C$react.useState)({
        width: undefined,
        height: undefined
    });
    let onResize = (0, $31o9C$react.useCallback)(()=>{
        if (selectedTab) {
            var _selectedTab_offsetParent;
            let styleObj = {
                transform: undefined,
                width: undefined,
                height: undefined
            };
            // In RTL, calculate the transform from the right edge of the tablist so that resizing the window doesn't break the Tabline position due to offsetLeft changes
            let offset = direction === 'rtl' ? -1 * (((_selectedTab_offsetParent = selectedTab.offsetParent) === null || _selectedTab_offsetParent === void 0 ? void 0 : _selectedTab_offsetParent.offsetWidth) - selectedTab.offsetWidth - selectedTab.offsetLeft) : selectedTab.offsetLeft;
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
    (0, $31o9C$reactariautils.useLayoutEffect)(()=>{
        onResize();
    }, [
        onResize,
        scale,
        selectedKey,
        tabLineState
    ]);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($31o9C$react))).createElement("div", {
        className: (0, $31o9C$reactspectrumutils.classNames)((0, ($parcel$interopDefault($29add1fad43dc941$exports))), 'spectrum-Tabs-selectionIndicator'),
        role: "presentation",
        style: style
    });
}
function $e8d58e7e32285ba6$export$e51a686c67fdaa2d(props) {
    const tabContext = (0, $31o9C$react.useContext)($e8d58e7e32285ba6$var$TabContext);
    const { refs: refs, tabState: tabState, tabProps: tabProps, tabPanelProps: tabPanelProps } = tabContext;
    const { isQuiet: isQuiet, density: density, isEmphasized: isEmphasized, orientation: orientation } = tabProps;
    const { selectedTab: selectedTab, collapsed: collapsed, setTabListState: setTabListState } = tabState;
    const { tablistRef: tablistRef, wrapperRef: wrapperRef } = refs;
    // Pass original Tab props but override children to create the collection.
    const state = (0, $31o9C$reactstatelytabs.useTabListState)({
        ...tabProps,
        children: props.children
    });
    let { styleProps: styleProps } = (0, $31o9C$reactspectrumutils.useStyleProps)(props);
    const { tabListProps: tabListProps } = (0, $31o9C$reactariatabs.useTabList)({
        ...tabProps,
        ...props
    }, state, tablistRef);
    (0, $31o9C$react.useEffect)(()=>{
        // Passing back to root as useTabPanel needs the TabListState
        setTabListState(state);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        state.disabledKeys,
        state.selectedItem,
        state.selectedKey,
        props.children
    ]);
    let collapseStyle = collapsed && orientation !== 'vertical' ? {
        maxWidth: 'calc(100% + 1px)',
        overflow: 'hidden',
        visibility: 'hidden',
        position: 'absolute'
    } : {
        maxWidth: 'calc(100% + 1px)'
    };
    let stylePropsFinal = orientation === 'vertical' ? styleProps : {
        style: collapseStyle
    };
    if (collapsed && orientation !== 'vertical') tabListProps['aria-hidden'] = true;
    let tabListclassName = (0, $31o9C$reactspectrumutils.classNames)((0, ($parcel$interopDefault($29add1fad43dc941$exports))), 'spectrum-TabsPanel-tabs');
    const tabContent = /*#__PURE__*/ (0, ($parcel$interopDefault($31o9C$react))).createElement("div", {
        ...stylePropsFinal,
        ...tabListProps,
        ref: tablistRef,
        className: (0, $31o9C$reactspectrumutils.classNames)((0, ($parcel$interopDefault($29add1fad43dc941$exports))), 'spectrum-Tabs', `spectrum-Tabs--${orientation}`, tabListclassName, {
            'spectrum-Tabs--quiet': isQuiet,
            'spectrum-Tabs--emphasized': isEmphasized,
            ['spectrum-Tabs--compact']: density === 'compact'
        }, orientation === 'vertical' && styleProps.className)
    }, [
        ...state.collection
    ].map((item)=>/*#__PURE__*/ (0, ($parcel$interopDefault($31o9C$react))).createElement($e8d58e7e32285ba6$var$Tab, {
            key: item.key,
            item: item,
            state: state,
            orientation: orientation
        })), /*#__PURE__*/ (0, ($parcel$interopDefault($31o9C$react))).createElement($e8d58e7e32285ba6$var$TabLine, {
        orientation: orientation,
        selectedTab: selectedTab
    }));
    if (orientation === 'vertical') return tabContent;
    else return /*#__PURE__*/ (0, ($parcel$interopDefault($31o9C$react))).createElement("div", {
        ...styleProps,
        ref: wrapperRef,
        className: (0, $31o9C$reactspectrumutils.classNames)((0, ($parcel$interopDefault($29add1fad43dc941$exports))), 'spectrum-TabsPanel-collapseWrapper', styleProps.className)
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($31o9C$react))).createElement($e8d58e7e32285ba6$var$TabPicker, {
        ...props,
        ...tabProps,
        visible: collapsed,
        id: tabPanelProps['aria-labelledby'],
        state: state,
        className: tabListclassName
    }), tabContent);
}
function $e8d58e7e32285ba6$export$5dae8d435677f210(props) {
    const { tabState: tabState, tabProps: tabProps } = (0, $31o9C$react.useContext)($e8d58e7e32285ba6$var$TabContext);
    const { tabListState: tabListState } = tabState;
    const factory = (0, $31o9C$react.useCallback)((nodes)=>new (0, $31o9C$reactstatelylist.ListCollection)(nodes), []);
    const collection = (0, $31o9C$reactstatelycollections.useCollection)({
        items: tabProps.items,
        ...props
    }, factory, {
        suppressTextValueWarning: true
    });
    const selectedItem = tabListState && tabListState.selectedKey != null ? collection.getItem(tabListState.selectedKey) : null;
    return /*#__PURE__*/ (0, ($parcel$interopDefault($31o9C$react))).createElement($e8d58e7e32285ba6$var$TabPanel, {
        ...props,
        key: tabListState === null || tabListState === void 0 ? void 0 : tabListState.selectedKey
    }, selectedItem && selectedItem.props.children);
}
// @private
function $e8d58e7e32285ba6$var$TabPanel(props) {
    const { tabState: tabState, tabPanelProps: ctxTabPanelProps } = (0, $31o9C$react.useContext)($e8d58e7e32285ba6$var$TabContext);
    const { tabListState: tabListState } = tabState;
    let ref = (0, $31o9C$react.useRef)(null);
    const { tabPanelProps: tabPanelProps } = (0, $31o9C$reactariatabs.useTabPanel)(props, tabListState, ref);
    let { styleProps: styleProps } = (0, $31o9C$reactspectrumutils.useStyleProps)(props);
    if (ctxTabPanelProps['aria-labelledby']) tabPanelProps['aria-labelledby'] = ctxTabPanelProps['aria-labelledby'];
    return /*#__PURE__*/ (0, ($parcel$interopDefault($31o9C$react))).createElement((0, $31o9C$reactariafocus.FocusRing), {
        focusRingClass: (0, $31o9C$reactspectrumutils.classNames)((0, ($parcel$interopDefault($29add1fad43dc941$exports))), 'focus-ring')
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($31o9C$react))).createElement("div", {
        ...styleProps,
        ...tabPanelProps,
        ref: ref,
        className: (0, $31o9C$reactspectrumutils.classNames)((0, ($parcel$interopDefault($29add1fad43dc941$exports))), 'spectrum-TabsPanel-tabpanel', styleProps.className)
    }, props.children));
}
function $e8d58e7e32285ba6$var$TabPicker(props) {
    let { isDisabled: isDisabled, isEmphasized: isEmphasized, isQuiet: isQuiet, state: state, 'aria-labelledby': ariaLabeledBy, 'aria-label': ariaLabel, density: density, className: className, id: id, visible: visible } = props;
    let ref = (0, $31o9C$react.useRef)(null);
    let [pickerNode, setPickerNode] = (0, $31o9C$react.useState)(null);
    (0, $31o9C$react.useEffect)(()=>{
        let node = (0, $31o9C$reactspectrumutils.unwrapDOMRef)(ref);
        setPickerNode(node.current);
    }, [
        ref
    ]);
    let items = [
        ...state.collection
    ];
    let pickerProps = {
        'aria-labelledby': ariaLabeledBy,
        'aria-label': ariaLabel
    };
    const style = visible ? {} : {
        visibility: 'hidden',
        position: 'absolute'
    };
    return /*#__PURE__*/ (0, ($parcel$interopDefault($31o9C$react))).createElement("div", {
        className: (0, $31o9C$reactspectrumutils.classNames)((0, ($parcel$interopDefault($29add1fad43dc941$exports))), 'spectrum-Tabs', 'spectrum-Tabs--horizontal', 'spectrum-Tabs--isCollapsed', {
            'spectrum-Tabs--quiet': isQuiet,
            ['spectrum-Tabs--compact']: density === 'compact',
            'spectrum-Tabs--emphasized': isEmphasized
        }, className),
        style: style,
        "aria-hidden": visible ? undefined : true
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($31o9C$react))).createElement((0, $31o9C$reactspectrumutils.SlotProvider), {
        slots: {
            icon: {
                size: 'S',
                UNSAFE_className: (0, $31o9C$reactspectrumutils.classNames)((0, ($parcel$interopDefault($29add1fad43dc941$exports))), 'spectrum-Icon')
            },
            button: {
                focusRingClass: (0, $31o9C$reactspectrumutils.classNames)((0, ($parcel$interopDefault($29add1fad43dc941$exports))), 'focus-ring')
            }
        }
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($31o9C$react))).createElement((0, $31o9C$reactspectrumpicker.Picker), {
        ...pickerProps,
        id: id,
        items: items,
        ref: ref,
        isQuiet: true,
        isDisabled: !visible || isDisabled,
        selectedKey: state.selectedKey,
        disabledKeys: state.disabledKeys,
        onSelectionChange: state.setSelectedKey,
        UNSAFE_className: (0, $31o9C$reactspectrumutils.classNames)((0, ($parcel$interopDefault($29add1fad43dc941$exports))), 'spectrum-Tabs-picker')
    }, (item)=>/*#__PURE__*/ (0, ($parcel$interopDefault($31o9C$react))).createElement((0, $31o9C$reactspectrumpicker.Item), item.props, item.rendered)), pickerNode && /*#__PURE__*/ (0, ($parcel$interopDefault($31o9C$react))).createElement($e8d58e7e32285ba6$var$TabLine, {
        orientation: "horizontal",
        selectedTab: pickerNode,
        selectedKey: state.selectedKey
    })));
}


//# sourceMappingURL=Tabs.main.js.map
