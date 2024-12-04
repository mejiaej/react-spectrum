var $3114c2382242bdc0$exports = require("./Collection.main.js");
var $c5ccf687772c0422$exports = require("./utils.main.js");
var $ke4kY$reactaria = require("react-aria");
var $ke4kY$reactariacollections = require("@react-aria/collections");
var $ke4kY$reactariautils = require("@react-aria/utils");
var $ke4kY$reactstately = require("react-stately");
var $ke4kY$react = require("react");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "TabsContext", () => $f982e6cd1aac14a3$export$cfa7aa87c26e7d1f);
$parcel$export(module.exports, "TabListStateContext", () => $f982e6cd1aac14a3$export$364712098d2aa57c);
$parcel$export(module.exports, "Tabs", () => $f982e6cd1aac14a3$export$b2539bed5023c21c);
$parcel$export(module.exports, "TabList", () => $f982e6cd1aac14a3$export$e51a686c67fdaa2d);
$parcel$export(module.exports, "Tab", () => $f982e6cd1aac14a3$export$3e41faf802a29e71);
$parcel$export(module.exports, "TabPanel", () => $f982e6cd1aac14a3$export$3d96ec278d3efce4);
/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 






const $f982e6cd1aac14a3$export$cfa7aa87c26e7d1f = /*#__PURE__*/ (0, $ke4kY$react.createContext)(null);
const $f982e6cd1aac14a3$export$364712098d2aa57c = /*#__PURE__*/ (0, $ke4kY$react.createContext)(null);
const $f982e6cd1aac14a3$export$b2539bed5023c21c = /*#__PURE__*/ (0, $ke4kY$react.forwardRef)(function Tabs(props, ref) {
    [props, ref] = (0, $c5ccf687772c0422$exports.useContextProps)(props, ref, $f982e6cd1aac14a3$export$cfa7aa87c26e7d1f);
    let { children: children, orientation: orientation = 'horizontal' } = props;
    children = (0, $ke4kY$react.useMemo)(()=>typeof children === 'function' ? children({
            orientation: orientation,
            defaultChildren: null
        }) : children, [
        children,
        orientation
    ]);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($ke4kY$react))).createElement((0, $ke4kY$reactariacollections.CollectionBuilder), {
        content: children
    }, (collection)=>/*#__PURE__*/ (0, ($parcel$interopDefault($ke4kY$react))).createElement($f982e6cd1aac14a3$var$TabsInner, {
            props: props,
            collection: collection,
            tabsRef: ref
        }));
});
function $f982e6cd1aac14a3$var$TabsInner({ props: props, tabsRef: ref, collection: collection }) {
    let { orientation: orientation = 'horizontal' } = props;
    let state = (0, $ke4kY$reactstately.useTabListState)({
        ...props,
        collection: collection,
        children: undefined
    });
    let { focusProps: focusProps, isFocused: isFocused, isFocusVisible: isFocusVisible } = (0, $ke4kY$reactaria.useFocusRing)({
        within: true
    });
    let values = (0, $ke4kY$react.useMemo)(()=>({
            orientation: orientation,
            isFocusWithin: isFocused,
            isFocusVisible: isFocusVisible
        }), [
        orientation,
        isFocused,
        isFocusVisible
    ]);
    let renderProps = (0, $c5ccf687772c0422$exports.useRenderProps)({
        ...props,
        defaultClassName: 'react-aria-Tabs',
        values: values
    });
    return /*#__PURE__*/ (0, ($parcel$interopDefault($ke4kY$react))).createElement("div", {
        ...(0, $ke4kY$reactariautils.filterDOMProps)(props),
        ...focusProps,
        ...renderProps,
        ref: ref,
        slot: props.slot || undefined,
        "data-focused": isFocused || undefined,
        "data-orientation": orientation,
        "data-focus-visible": isFocusVisible || undefined,
        "data-disabled": state.isDisabled || undefined
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($ke4kY$react))).createElement((0, $c5ccf687772c0422$exports.Provider), {
        values: [
            [
                $f982e6cd1aac14a3$export$cfa7aa87c26e7d1f,
                props
            ],
            [
                $f982e6cd1aac14a3$export$364712098d2aa57c,
                state
            ]
        ]
    }, renderProps.children));
}
const $f982e6cd1aac14a3$export$e51a686c67fdaa2d = /*#__PURE__*/ (0, $ke4kY$react.forwardRef)(function TabList(props, ref) {
    let state = (0, $ke4kY$react.useContext)($f982e6cd1aac14a3$export$364712098d2aa57c);
    return state ? /*#__PURE__*/ (0, ($parcel$interopDefault($ke4kY$react))).createElement($f982e6cd1aac14a3$var$TabListInner, {
        props: props,
        forwardedRef: ref
    }) : /*#__PURE__*/ (0, ($parcel$interopDefault($ke4kY$react))).createElement((0, $ke4kY$reactariacollections.Collection), props);
});
function $f982e6cd1aac14a3$var$TabListInner({ props: props, forwardedRef: ref }) {
    let state = (0, $ke4kY$react.useContext)($f982e6cd1aac14a3$export$364712098d2aa57c);
    let { CollectionRoot: CollectionRoot } = (0, $ke4kY$react.useContext)((0, $3114c2382242bdc0$exports.CollectionRendererContext));
    let { orientation: orientation = 'horizontal', keyboardActivation: keyboardActivation = 'automatic' } = (0, $c5ccf687772c0422$exports.useSlottedContext)($f982e6cd1aac14a3$export$cfa7aa87c26e7d1f);
    let objectRef = (0, $ke4kY$reactariautils.useObjectRef)(ref);
    let { tabListProps: tabListProps } = (0, $ke4kY$reactaria.useTabList)({
        ...props,
        orientation: orientation,
        keyboardActivation: keyboardActivation
    }, state, objectRef);
    let renderProps = (0, $c5ccf687772c0422$exports.useRenderProps)({
        ...props,
        children: null,
        defaultClassName: 'react-aria-TabList',
        values: {
            orientation: orientation,
            state: state
        }
    });
    let DOMProps = (0, $ke4kY$reactariautils.filterDOMProps)(props);
    delete DOMProps.id;
    return /*#__PURE__*/ (0, ($parcel$interopDefault($ke4kY$react))).createElement("div", {
        ...DOMProps,
        ...tabListProps,
        ref: objectRef,
        ...renderProps,
        "data-orientation": orientation || undefined
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($ke4kY$react))).createElement(CollectionRoot, {
        collection: state.collection,
        persistedKeys: (0, $3114c2382242bdc0$exports.usePersistedKeys)(state.selectionManager.focusedKey)
    }));
}
const $f982e6cd1aac14a3$export$3e41faf802a29e71 = /*#__PURE__*/ (0, $ke4kY$reactariacollections.createLeafComponent)('item', (props, forwardedRef, item)=>{
    let state = (0, $ke4kY$react.useContext)($f982e6cd1aac14a3$export$364712098d2aa57c);
    let ref = (0, $ke4kY$reactariautils.useObjectRef)(forwardedRef);
    let { tabProps: tabProps, isSelected: isSelected, isDisabled: isDisabled, isPressed: isPressed } = (0, $ke4kY$reactaria.useTab)({
        key: item.key,
        ...props
    }, state, ref);
    let { focusProps: focusProps, isFocused: isFocused, isFocusVisible: isFocusVisible } = (0, $ke4kY$reactaria.useFocusRing)();
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $ke4kY$reactaria.useHover)({
        isDisabled: isDisabled,
        onHoverStart: props.onHoverStart,
        onHoverEnd: props.onHoverEnd,
        onHoverChange: props.onHoverChange
    });
    let renderProps = (0, $c5ccf687772c0422$exports.useRenderProps)({
        ...props,
        id: undefined,
        children: item.rendered,
        defaultClassName: 'react-aria-Tab',
        values: {
            isSelected: isSelected,
            isDisabled: isDisabled,
            isFocused: isFocused,
            isFocusVisible: isFocusVisible,
            isPressed: isPressed,
            isHovered: isHovered
        }
    });
    let ElementType = item.props.href ? 'a' : 'div';
    return /*#__PURE__*/ (0, ($parcel$interopDefault($ke4kY$react))).createElement(ElementType, {
        ...(0, $ke4kY$reactaria.mergeProps)(tabProps, focusProps, hoverProps, renderProps),
        ref: ref,
        "data-selected": isSelected || undefined,
        "data-disabled": isDisabled || undefined,
        "data-focused": isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-pressed": isPressed || undefined,
        "data-hovered": isHovered || undefined
    }, renderProps.children);
});
const $f982e6cd1aac14a3$export$3d96ec278d3efce4 = /*#__PURE__*/ (0, $ke4kY$reactariacollections.createHideableComponent)(function TabPanel(props, forwardedRef) {
    const state = (0, $ke4kY$react.useContext)($f982e6cd1aac14a3$export$364712098d2aa57c);
    let ref = (0, $ke4kY$reactariautils.useObjectRef)(forwardedRef);
    let { tabPanelProps: tabPanelProps } = (0, $ke4kY$reactaria.useTabPanel)(props, state, ref);
    let { focusProps: focusProps, isFocused: isFocused, isFocusVisible: isFocusVisible } = (0, $ke4kY$reactaria.useFocusRing)();
    let isSelected = state.selectedKey === props.id;
    let renderProps = (0, $c5ccf687772c0422$exports.useRenderProps)({
        ...props,
        defaultClassName: 'react-aria-TabPanel',
        values: {
            isFocused: isFocused,
            isFocusVisible: isFocusVisible,
            isInert: !isSelected,
            state: state
        }
    });
    if (!isSelected && !props.shouldForceMount) return null;
    let DOMProps = (0, $ke4kY$reactariautils.filterDOMProps)(props);
    delete DOMProps.id;
    let domProps = isSelected ? (0, $ke4kY$reactaria.mergeProps)(DOMProps, tabPanelProps, focusProps, renderProps) : renderProps;
    return /*#__PURE__*/ (0, ($parcel$interopDefault($ke4kY$react))).createElement("div", {
        ...domProps,
        ref: ref,
        "data-focused": isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        // @ts-ignore
        inert: !isSelected ? 'true' : undefined,
        "data-inert": !isSelected ? 'true' : undefined
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($ke4kY$react))).createElement((0, $c5ccf687772c0422$exports.Provider), {
        values: [
            [
                $f982e6cd1aac14a3$export$cfa7aa87c26e7d1f,
                null
            ],
            [
                $f982e6cd1aac14a3$export$364712098d2aa57c,
                null
            ]
        ]
    }, renderProps.children));
});


//# sourceMappingURL=Tabs.main.js.map
