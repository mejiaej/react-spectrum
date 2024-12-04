var $3114c2382242bdc0$exports = require("./Collection.main.js");
var $c5ccf687772c0422$exports = require("./utils.main.js");
var $c7efb75a1a3fe2d2$exports = require("./Header.main.js");
var $70c886ca98ebdc2b$exports = require("./Keyboard.main.js");
var $2979ab89b336194b$exports = require("./Dialog.main.js");
var $61e2b7078adb18bc$exports = require("./Popover.main.js");
var $54b202ace195eaa4$exports = require("./Separator.main.js");
var $a8a589c28affdc40$exports = require("./Text.main.js");
var $2JTht$reactaria = require("react-aria");
var $2JTht$reactstately = require("react-stately");
var $2JTht$reactariacollections = require("@react-aria/collections");
var $2JTht$reactariautils = require("@react-aria/utils");
var $2JTht$reactstatelyselection = require("@react-stately/selection");
var $2JTht$reactariainteractions = require("@react-aria/interactions");
var $2JTht$react = require("react");
var $2JTht$reactstatelymenu = require("@react-stately/menu");
var $2JTht$reactariamenu = require("@react-aria/menu");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "MenuContext", () => $a8f6e7d095d1cc86$export$c7e742effb1c51e2);
$parcel$export(module.exports, "MenuStateContext", () => $a8f6e7d095d1cc86$export$24aad8519b95b41b);
$parcel$export(module.exports, "RootMenuTriggerStateContext", () => $a8f6e7d095d1cc86$export$795aec4671cbae19);
$parcel$export(module.exports, "MenuTrigger", () => $a8f6e7d095d1cc86$export$27d2ad3c5815583e);
$parcel$export(module.exports, "SubmenuTrigger", () => $a8f6e7d095d1cc86$export$ecabc99eeffab7ca);
$parcel$export(module.exports, "Menu", () => $a8f6e7d095d1cc86$export$d9b273488cd8ce6f);
$parcel$export(module.exports, "MenuSection", () => $a8f6e7d095d1cc86$export$4b1545b4f2016d26);
$parcel$export(module.exports, "MenuItem", () => $a8f6e7d095d1cc86$export$2ce376c2cc3355c8);
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
















const $a8f6e7d095d1cc86$export$c7e742effb1c51e2 = /*#__PURE__*/ (0, $2JTht$react.createContext)(null);
const $a8f6e7d095d1cc86$export$24aad8519b95b41b = /*#__PURE__*/ (0, $2JTht$react.createContext)(null);
const $a8f6e7d095d1cc86$export$795aec4671cbae19 = /*#__PURE__*/ (0, $2JTht$react.createContext)(null);
const $a8f6e7d095d1cc86$var$SelectionManagerContext = /*#__PURE__*/ (0, $2JTht$react.createContext)(null);
function $a8f6e7d095d1cc86$export$27d2ad3c5815583e(props) {
    let state = (0, $2JTht$reactstately.useMenuTriggerState)(props);
    let ref = (0, $2JTht$react.useRef)(null);
    let { menuTriggerProps: menuTriggerProps, menuProps: menuProps } = (0, $2JTht$reactaria.useMenuTrigger)({
        ...props,
        type: 'menu'
    }, state, ref);
    // Allows menu width to match button
    let [buttonWidth, setButtonWidth] = (0, $2JTht$react.useState)(null);
    let onResize = (0, $2JTht$react.useCallback)(()=>{
        if (ref.current) setButtonWidth(ref.current.offsetWidth + 'px');
    }, [
        ref
    ]);
    (0, $2JTht$reactariautils.useResizeObserver)({
        ref: ref,
        onResize: onResize
    });
    let scrollRef = (0, $2JTht$react.useRef)(null);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($2JTht$react))).createElement((0, $c5ccf687772c0422$exports.Provider), {
        values: [
            [
                $a8f6e7d095d1cc86$export$c7e742effb1c51e2,
                {
                    ...menuProps,
                    ref: scrollRef
                }
            ],
            [
                (0, $2979ab89b336194b$exports.OverlayTriggerStateContext),
                state
            ],
            [
                $a8f6e7d095d1cc86$export$795aec4671cbae19,
                state
            ],
            [
                (0, $61e2b7078adb18bc$exports.PopoverContext),
                {
                    trigger: 'MenuTrigger',
                    triggerRef: ref,
                    scrollRef: scrollRef,
                    placement: 'bottom start',
                    style: {
                        '--trigger-width': buttonWidth
                    }
                }
            ]
        ]
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($2JTht$react))).createElement((0, $2JTht$reactariainteractions.PressResponder), {
        ...menuTriggerProps,
        ref: ref,
        isPressed: state.isOpen
    }, props.children));
}
const $a8f6e7d095d1cc86$var$SubmenuTriggerContext = /*#__PURE__*/ (0, $2JTht$react.createContext)(null);
const $a8f6e7d095d1cc86$export$ecabc99eeffab7ca = /*#__PURE__*/ (0, $2JTht$reactariacollections.createBranchComponent)('submenutrigger', (props, ref, item)=>{
    let { CollectionBranch: CollectionBranch } = (0, $2JTht$react.useContext)((0, $3114c2382242bdc0$exports.CollectionRendererContext));
    let state = (0, $2JTht$react.useContext)($a8f6e7d095d1cc86$export$24aad8519b95b41b);
    let rootMenuTriggerState = (0, $2JTht$react.useContext)($a8f6e7d095d1cc86$export$795aec4671cbae19);
    let submenuTriggerState = (0, $2JTht$reactstatelymenu.useSubmenuTriggerState)({
        triggerKey: item.key
    }, rootMenuTriggerState);
    let submenuRef = (0, $2JTht$react.useRef)(null);
    let itemRef = (0, $2JTht$reactariautils.useObjectRef)(ref);
    let { parentMenuRef: parentMenuRef } = (0, $2JTht$react.useContext)($a8f6e7d095d1cc86$var$SubmenuTriggerContext);
    let { submenuTriggerProps: submenuTriggerProps, submenuProps: submenuProps, popoverProps: popoverProps } = (0, $2JTht$reactariamenu.useSubmenuTrigger)({
        parentMenuRef: parentMenuRef,
        submenuRef: submenuRef,
        delay: props.delay
    }, submenuTriggerState, itemRef);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($2JTht$react))).createElement((0, $c5ccf687772c0422$exports.Provider), {
        values: [
            [
                $a8f6e7d095d1cc86$var$MenuItemContext,
                {
                    ...submenuTriggerProps,
                    onAction: undefined,
                    ref: itemRef
                }
            ],
            [
                $a8f6e7d095d1cc86$export$c7e742effb1c51e2,
                submenuProps
            ],
            [
                (0, $2979ab89b336194b$exports.OverlayTriggerStateContext),
                submenuTriggerState
            ],
            [
                (0, $61e2b7078adb18bc$exports.PopoverContext),
                {
                    ref: submenuRef,
                    trigger: 'SubmenuTrigger',
                    triggerRef: itemRef,
                    placement: 'end top',
                    // Prevent parent popover from hiding submenu.
                    // @ts-ignore
                    'data-react-aria-top-layer': true,
                    ...popoverProps
                }
            ]
        ]
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($2JTht$react))).createElement(CollectionBranch, {
        collection: state.collection,
        parent: item
    }), props.children[1]);
}, (props)=>props.children[0]);
const $a8f6e7d095d1cc86$export$d9b273488cd8ce6f = /*#__PURE__*/ (0, $2JTht$react.forwardRef)(function Menu(props, ref) {
    [props, ref] = (0, $c5ccf687772c0422$exports.useContextProps)(props, ref, $a8f6e7d095d1cc86$export$c7e742effb1c51e2);
    // Delay rendering the actual menu until we have the collection so that auto focus works properly.
    return /*#__PURE__*/ (0, ($parcel$interopDefault($2JTht$react))).createElement((0, $2JTht$reactariacollections.CollectionBuilder), {
        content: /*#__PURE__*/ (0, ($parcel$interopDefault($2JTht$react))).createElement((0, $2JTht$reactariacollections.Collection), props)
    }, (collection)=>collection.size > 0 && /*#__PURE__*/ (0, ($parcel$interopDefault($2JTht$react))).createElement($a8f6e7d095d1cc86$var$MenuInner, {
            props: props,
            collection: collection,
            menuRef: ref
        }));
});
function $a8f6e7d095d1cc86$var$MenuInner({ props: props, collection: collection, menuRef: ref }) {
    let state = (0, $2JTht$reactstately.useTreeState)({
        ...props,
        collection: collection,
        children: undefined
    });
    let triggerState = (0, $2JTht$react.useContext)($a8f6e7d095d1cc86$export$795aec4671cbae19);
    let { isVirtualized: isVirtualized, CollectionRoot: CollectionRoot } = (0, $2JTht$react.useContext)((0, $3114c2382242bdc0$exports.CollectionRendererContext));
    let { menuProps: menuProps } = (0, $2JTht$reactaria.useMenu)({
        ...props,
        isVirtualized: isVirtualized,
        onClose: props.onClose || (triggerState === null || triggerState === void 0 ? void 0 : triggerState.close)
    }, state, ref);
    let renderProps = (0, $c5ccf687772c0422$exports.useRenderProps)({
        defaultClassName: 'react-aria-Menu',
        className: props.className,
        style: props.style,
        values: {}
    });
    return /*#__PURE__*/ (0, ($parcel$interopDefault($2JTht$react))).createElement((0, $2JTht$reactaria.FocusScope), null, /*#__PURE__*/ (0, ($parcel$interopDefault($2JTht$react))).createElement("div", {
        ...(0, $2JTht$reactariautils.filterDOMProps)(props),
        ...menuProps,
        ...renderProps,
        ref: ref,
        slot: props.slot || undefined,
        onScroll: props.onScroll
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($2JTht$react))).createElement((0, $c5ccf687772c0422$exports.Provider), {
        values: [
            [
                $a8f6e7d095d1cc86$export$24aad8519b95b41b,
                state
            ],
            [
                (0, $54b202ace195eaa4$exports.SeparatorContext),
                {
                    elementType: 'div'
                }
            ],
            [
                (0, $3114c2382242bdc0$exports.SectionContext),
                {
                    name: 'MenuSection',
                    render: $a8f6e7d095d1cc86$var$MenuSectionInner
                }
            ],
            [
                $a8f6e7d095d1cc86$var$SubmenuTriggerContext,
                {
                    parentMenuRef: ref
                }
            ],
            [
                $a8f6e7d095d1cc86$var$MenuItemContext,
                null
            ],
            [
                $a8f6e7d095d1cc86$var$SelectionManagerContext,
                state.selectionManager
            ]
        ]
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($2JTht$react))).createElement(CollectionRoot, {
        collection: collection,
        persistedKeys: (0, $3114c2382242bdc0$exports.usePersistedKeys)(state.selectionManager.focusedKey),
        scrollRef: ref
    }))));
}
// A subclass of SelectionManager that forwards focus-related properties to the parent,
// but has its own local selection state.
class $a8f6e7d095d1cc86$var$GroupSelectionManager extends (0, $2JTht$reactstatelyselection.SelectionManager) {
    get focusedKey() {
        return this.parent.focusedKey;
    }
    get isFocused() {
        return this.parent.isFocused;
    }
    setFocusedKey(key, childFocusStrategy) {
        return this.parent.setFocusedKey(key, childFocusStrategy);
    }
    setFocused(isFocused) {
        this.parent.setFocused(isFocused);
    }
    get childFocusStrategy() {
        return this.parent.childFocusStrategy;
    }
    constructor(parent, state){
        super(parent.collection, state);
        this.parent = parent;
    }
}
function $a8f6e7d095d1cc86$var$MenuSectionInner(props, ref, section, className = 'react-aria-MenuSection') {
    var _section_props, _section_props1;
    let state = (0, $2JTht$react.useContext)($a8f6e7d095d1cc86$export$24aad8519b95b41b);
    let { CollectionBranch: CollectionBranch } = (0, $2JTht$react.useContext)((0, $3114c2382242bdc0$exports.CollectionRendererContext));
    let [headingRef, heading] = (0, $c5ccf687772c0422$exports.useSlot)();
    var _section_props_arialabel;
    let { headingProps: headingProps, groupProps: groupProps } = (0, $2JTht$reactaria.useMenuSection)({
        heading: heading,
        'aria-label': (_section_props_arialabel = section.props['aria-label']) !== null && _section_props_arialabel !== void 0 ? _section_props_arialabel : undefined
    });
    let renderProps = (0, $c5ccf687772c0422$exports.useRenderProps)({
        defaultClassName: className,
        className: (_section_props = section.props) === null || _section_props === void 0 ? void 0 : _section_props.className,
        style: (_section_props1 = section.props) === null || _section_props1 === void 0 ? void 0 : _section_props1.style,
        values: {}
    });
    let parent = (0, $2JTht$react.useContext)($a8f6e7d095d1cc86$var$SelectionManagerContext);
    let selectionState = (0, $2JTht$reactstatelyselection.useMultipleSelectionState)(props);
    let manager = props.selectionMode != null ? new $a8f6e7d095d1cc86$var$GroupSelectionManager(parent, selectionState) : parent;
    return /*#__PURE__*/ (0, ($parcel$interopDefault($2JTht$react))).createElement("section", {
        ...(0, $2JTht$reactariautils.filterDOMProps)(props),
        ...groupProps,
        ...renderProps,
        ref: ref
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($2JTht$react))).createElement((0, $c5ccf687772c0422$exports.Provider), {
        values: [
            [
                (0, $c7efb75a1a3fe2d2$exports.HeaderContext),
                {
                    ...headingProps,
                    ref: headingRef
                }
            ],
            [
                $a8f6e7d095d1cc86$var$SelectionManagerContext,
                manager
            ]
        ]
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($2JTht$react))).createElement(CollectionBranch, {
        collection: state.collection,
        parent: section
    })));
}
const $a8f6e7d095d1cc86$export$4b1545b4f2016d26 = /*#__PURE__*/ (0, $2JTht$reactariacollections.createBranchComponent)('section', $a8f6e7d095d1cc86$var$MenuSectionInner);
const $a8f6e7d095d1cc86$var$MenuItemContext = /*#__PURE__*/ (0, $2JTht$react.createContext)(null);
const $a8f6e7d095d1cc86$export$2ce376c2cc3355c8 = /*#__PURE__*/ (0, $2JTht$reactariacollections.createLeafComponent)('item', function MenuItem(props, forwardedRef, item) {
    var _useSlottedContext;
    [props, forwardedRef] = (0, $c5ccf687772c0422$exports.useContextProps)(props, forwardedRef, $a8f6e7d095d1cc86$var$MenuItemContext);
    let id = (_useSlottedContext = (0, $c5ccf687772c0422$exports.useSlottedContext)($a8f6e7d095d1cc86$var$MenuItemContext)) === null || _useSlottedContext === void 0 ? void 0 : _useSlottedContext.id;
    let state = (0, $2JTht$react.useContext)($a8f6e7d095d1cc86$export$24aad8519b95b41b);
    let ref = (0, $2JTht$reactariautils.useObjectRef)(forwardedRef);
    let selectionManager = (0, $2JTht$react.useContext)($a8f6e7d095d1cc86$var$SelectionManagerContext);
    let { menuItemProps: menuItemProps, labelProps: labelProps, descriptionProps: descriptionProps, keyboardShortcutProps: keyboardShortcutProps, ...states } = (0, $2JTht$reactaria.useMenuItem)({
        ...props,
        id: id,
        key: item.key,
        selectionManager: selectionManager
    }, state, ref);
    let { isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, $2JTht$reactaria.useFocusRing)();
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $2JTht$reactariainteractions.useHover)({
        isDisabled: states.isDisabled
    });
    let renderProps = (0, $c5ccf687772c0422$exports.useRenderProps)({
        ...props,
        id: undefined,
        children: item.rendered,
        defaultClassName: 'react-aria-MenuItem',
        values: {
            ...states,
            isHovered: isHovered,
            isFocusVisible: isFocusVisible,
            selectionMode: selectionManager.selectionMode,
            selectionBehavior: selectionManager.selectionBehavior,
            hasSubmenu: !!props['aria-haspopup'],
            isOpen: props['aria-expanded'] === 'true'
        }
    });
    let ElementType = props.href ? 'a' : 'div';
    return /*#__PURE__*/ (0, ($parcel$interopDefault($2JTht$react))).createElement(ElementType, {
        ...(0, $2JTht$reactaria.mergeProps)(menuItemProps, focusProps, hoverProps),
        ...renderProps,
        ref: ref,
        "data-disabled": states.isDisabled || undefined,
        "data-hovered": isHovered || undefined,
        "data-focused": states.isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-pressed": states.isPressed || undefined,
        "data-selected": states.isSelected || undefined,
        "data-selection-mode": selectionManager.selectionMode === 'none' ? undefined : selectionManager.selectionMode,
        "data-has-submenu": !!props['aria-haspopup'] || undefined,
        "data-open": props['aria-expanded'] === 'true' || undefined
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($2JTht$react))).createElement((0, $c5ccf687772c0422$exports.Provider), {
        values: [
            [
                (0, $a8a589c28affdc40$exports.TextContext),
                {
                    slots: {
                        label: labelProps,
                        description: descriptionProps
                    }
                }
            ],
            [
                (0, $70c886ca98ebdc2b$exports.KeyboardContext),
                keyboardShortcutProps
            ]
        ]
    }, renderProps.children));
});


//# sourceMappingURL=Menu.main.js.map
