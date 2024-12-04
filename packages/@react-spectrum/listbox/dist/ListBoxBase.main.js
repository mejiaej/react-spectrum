var $3d9fe9b46e2d649a$exports = require("./intlStrings.main.js");
var $611e93c7b7c0413c$exports = require("./ListBoxContext.main.js");
var $570d5c216669f686$exports = require("./ListBoxLayout.main.js");
var $2205d250ee1cb1ac$exports = require("./ListBoxOption.main.js");
var $0f5fd8483f48ef09$exports = require("./ListBoxSection.main.js");
require("./vars.954cf9f6.css");
var $3deee0fd2b46e64f$exports = require("./menu_vars_css.main.js");
var $7w19U$reactarialistbox = require("@react-aria/listbox");
var $7w19U$reactspectrumutils = require("@react-spectrum/utils");
var $7w19U$reactariafocus = require("@react-aria/focus");
var $7w19U$reactariautils = require("@react-aria/utils");
var $7w19U$reactspectrumprogress = require("@react-spectrum/progress");
var $7w19U$react = require("react");
var $7w19U$reactariai18n = require("@react-aria/i18n");
var $7w19U$reactspectrumprovider = require("@react-spectrum/provider");
var $7w19U$reactariavirtualizer = require("@react-aria/virtualizer");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "useListBoxLayout", () => $60eb4b34c53310cb$export$25768ea656ae32a7);
$parcel$export(module.exports, "ListBoxBase", () => $60eb4b34c53310cb$export$1afdcf349979fb7e);
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














function $60eb4b34c53310cb$export$25768ea656ae32a7() {
    let { scale: scale } = (0, $7w19U$reactspectrumprovider.useProvider)();
    let layout = (0, $7w19U$react.useMemo)(()=>new (0, $570d5c216669f686$exports.ListBoxLayout)({
            estimatedRowHeight: scale === 'large' ? 48 : 32,
            estimatedHeadingHeight: scale === 'large' ? 33 : 26,
            padding: scale === 'large' ? 5 : 4,
            placeholderHeight: scale === 'large' ? 48 : 32
        }), [
        scale
    ]);
    return layout;
}
const $60eb4b34c53310cb$export$1afdcf349979fb7e = /*#__PURE__*/ (0, ($parcel$interopDefault($7w19U$react))).forwardRef(function ListBoxBase(props, ref) {
    let { layout: layout, state: state, shouldFocusOnHover: shouldFocusOnHover = false, shouldUseVirtualFocus: shouldUseVirtualFocus = false, domProps: domProps = {}, isLoading: isLoading, showLoadingSpinner: showLoadingSpinner = isLoading, onScroll: onScroll, renderEmptyState: renderEmptyState } = props;
    let objectRef = (0, $7w19U$reactariautils.useObjectRef)(ref);
    let { listBoxProps: listBoxProps } = (0, $7w19U$reactarialistbox.useListBox)({
        ...props,
        layoutDelegate: layout,
        isVirtualized: true
    }, state, objectRef);
    let { styleProps: styleProps } = (0, $7w19U$reactspectrumutils.useStyleProps)(props);
    let renderWrapper = (0, $7w19U$react.useCallback)((parent, reusableView, children, renderChildren)=>{
        var _children_find;
        var _children_find_layoutInfo;
        if (reusableView.viewType === 'section') return /*#__PURE__*/ (0, ($parcel$interopDefault($7w19U$react))).createElement((0, $0f5fd8483f48ef09$exports.ListBoxSection), {
            key: reusableView.key,
            item: reusableView.content,
            layoutInfo: reusableView.layoutInfo,
            virtualizer: reusableView.virtualizer,
            headerLayoutInfo: (_children_find_layoutInfo = (_children_find = children.find((c)=>c.viewType === 'header')) === null || _children_find === void 0 ? void 0 : _children_find.layoutInfo) !== null && _children_find_layoutInfo !== void 0 ? _children_find_layoutInfo : null
        }, renderChildren(children.filter((c)=>c.viewType === 'item')));
        return /*#__PURE__*/ (0, ($parcel$interopDefault($7w19U$react))).createElement((0, $7w19U$reactariavirtualizer.VirtualizerItem), {
            key: reusableView.key,
            layoutInfo: reusableView.layoutInfo,
            virtualizer: reusableView.virtualizer,
            parent: parent === null || parent === void 0 ? void 0 : parent.layoutInfo
        }, reusableView.rendered);
    }, []);
    let focusedKey = state.selectionManager.focusedKey;
    let persistedKeys = (0, $7w19U$react.useMemo)(()=>focusedKey != null ? new Set([
            focusedKey
        ]) : null, [
        focusedKey
    ]);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($7w19U$react))).createElement((0, $611e93c7b7c0413c$exports.ListBoxContext).Provider, {
        value: {
            state: state,
            renderEmptyState: renderEmptyState,
            shouldFocusOnHover: shouldFocusOnHover,
            shouldUseVirtualFocus: shouldUseVirtualFocus
        }
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($7w19U$react))).createElement((0, $7w19U$reactariafocus.FocusScope), null, /*#__PURE__*/ (0, ($parcel$interopDefault($7w19U$react))).createElement((0, $7w19U$reactariavirtualizer.Virtualizer), {
        ...styleProps,
        ...(0, $7w19U$reactariautils.mergeProps)(listBoxProps, domProps),
        ref: objectRef,
        persistedKeys: persistedKeys,
        autoFocus: !!props.autoFocus || undefined,
        scrollDirection: "vertical",
        className: (0, $7w19U$reactspectrumutils.classNames)((0, ($parcel$interopDefault($3deee0fd2b46e64f$exports))), 'spectrum-Menu', styleProps.className),
        layout: layout,
        layoutOptions: (0, $7w19U$react.useMemo)(()=>({
                isLoading: showLoadingSpinner
            }), [
            showLoadingSpinner
        ]),
        collection: state.collection,
        renderWrapper: renderWrapper,
        isLoading: isLoading,
        onLoadMore: props.onLoadMore,
        onScroll: onScroll
    }, (0, $7w19U$react.useCallback)((type, item)=>{
        if (type === 'item') return /*#__PURE__*/ (0, ($parcel$interopDefault($7w19U$react))).createElement((0, $2205d250ee1cb1ac$exports.ListBoxOption), {
            item: item
        });
        else if (type === 'loader') return /*#__PURE__*/ (0, ($parcel$interopDefault($7w19U$react))).createElement($60eb4b34c53310cb$var$LoadingState, null);
        else if (type === 'placeholder') return /*#__PURE__*/ (0, ($parcel$interopDefault($7w19U$react))).createElement($60eb4b34c53310cb$var$EmptyState, null);
        else return null;
    }, []))));
});
function $60eb4b34c53310cb$var$LoadingState() {
    let { state: state } = (0, $7w19U$react.useContext)((0, $611e93c7b7c0413c$exports.ListBoxContext));
    let stringFormatter = (0, $7w19U$reactariai18n.useLocalizedStringFormatter)((0, ($parcel$interopDefault($3d9fe9b46e2d649a$exports))), '@react-spectrum/listbox');
    return(// aria-selected isn't needed here since this option is not selectable.
    // eslint-disable-next-line jsx-a11y/role-has-required-aria-props
    /*#__PURE__*/ (0, ($parcel$interopDefault($7w19U$react))).createElement("div", {
        role: "option",
        style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%'
        }
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($7w19U$react))).createElement((0, $7w19U$reactspectrumprogress.ProgressCircle), {
        isIndeterminate: true,
        size: "S",
        "aria-label": state.collection.size > 0 ? stringFormatter.format('loadingMore') : stringFormatter.format('loading'),
        UNSAFE_className: (0, $7w19U$reactspectrumutils.classNames)((0, ($parcel$interopDefault($3deee0fd2b46e64f$exports))), 'spectrum-Dropdown-progressCircle')
    })));
}
function $60eb4b34c53310cb$var$EmptyState() {
    let { renderEmptyState: renderEmptyState } = (0, $7w19U$react.useContext)((0, $611e93c7b7c0413c$exports.ListBoxContext));
    let emptyState = renderEmptyState ? renderEmptyState() : null;
    if (emptyState == null) return null;
    return /*#__PURE__*/ (0, ($parcel$interopDefault($7w19U$react))).createElement("div", {
        // aria-selected isn't needed here since this option is not selectable.
        // eslint-disable-next-line jsx-a11y/role-has-required-aria-props
        role: "option"
    }, emptyState);
}


//# sourceMappingURL=ListBoxBase.main.js.map
