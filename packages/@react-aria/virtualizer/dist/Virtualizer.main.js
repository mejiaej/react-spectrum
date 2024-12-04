var $00ca8c0b29e3e07c$exports = require("./ScrollView.main.js");
var $d6a26279cc31826b$exports = require("./VirtualizerItem.main.js");
var $knrtk$reactstatelyvirtualizer = require("@react-stately/virtualizer");
var $knrtk$reactariautils = require("@react-aria/utils");
var $knrtk$react = require("react");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "Virtualizer", () => $e1fb6f3669e1c329$export$89be5a243e59c4b2);
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




const $e1fb6f3669e1c329$export$89be5a243e59c4b2 = /*#__PURE__*/ (0, ($parcel$interopDefault($knrtk$react))).forwardRef(function Virtualizer(props, forwardedRef) {
    let { children: renderView, renderWrapper: renderWrapper, layout: layout, collection: collection, scrollDirection: scrollDirection, isLoading: isLoading, onLoadMore: onLoadMore, persistedKeys: persistedKeys, layoutOptions: layoutOptions, ...otherProps } = props;
    let ref = (0, $knrtk$reactariautils.useObjectRef)(forwardedRef);
    let state = (0, $knrtk$reactstatelyvirtualizer.useVirtualizerState)({
        layout: layout,
        collection: collection,
        renderView: renderView,
        onVisibleRectChange (rect) {
            if (ref.current) {
                ref.current.scrollLeft = rect.x;
                ref.current.scrollTop = rect.y;
            }
        },
        persistedKeys: persistedKeys,
        layoutOptions: layoutOptions
    });
    (0, $knrtk$reactariautils.useLoadMore)({
        isLoading: isLoading,
        onLoadMore: onLoadMore,
        scrollOffset: 1
    }, ref);
    let onVisibleRectChange = (0, $knrtk$react.useCallback)((rect)=>{
        state.setVisibleRect(rect);
    }, [
        state
    ]);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($knrtk$react))).createElement((0, $00ca8c0b29e3e07c$exports.ScrollView), {
        ...(0, $knrtk$reactariautils.mergeProps)(otherProps, {
            onVisibleRectChange: onVisibleRectChange
        }),
        ref: ref,
        contentSize: state.contentSize,
        onScrollStart: state.startScrolling,
        onScrollEnd: state.endScrolling,
        scrollDirection: scrollDirection
    }, $e1fb6f3669e1c329$var$renderChildren(null, state.visibleViews, renderWrapper || $e1fb6f3669e1c329$var$defaultRenderWrapper));
});
function $e1fb6f3669e1c329$var$renderChildren(parent, views, renderWrapper) {
    return views.map((view)=>{
        return renderWrapper(parent, view, view.children ? Array.from(view.children) : [], (childViews)=>$e1fb6f3669e1c329$var$renderChildren(view, childViews, renderWrapper));
    });
}
function $e1fb6f3669e1c329$var$defaultRenderWrapper(parent, reusableView) {
    return /*#__PURE__*/ (0, ($parcel$interopDefault($knrtk$react))).createElement((0, $d6a26279cc31826b$exports.VirtualizerItem), {
        key: reusableView.key,
        layoutInfo: reusableView.layoutInfo,
        virtualizer: reusableView.virtualizer,
        parent: parent === null || parent === void 0 ? void 0 : parent.layoutInfo
    }, reusableView.rendered);
}


//# sourceMappingURL=Virtualizer.main.js.map
