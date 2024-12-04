var $1d718563708db5b5$exports = require("./MenuItem.main.js");
require("./vars.ca367765.css");
var $3deee0fd2b46e64f$exports = require("./menu_vars_css.main.js");
var $3nsTP$reactspectrumutils = require("@react-spectrum/utils");
var $3nsTP$reactstatelycollections = require("@react-stately/collections");
var $3nsTP$react = require("react");
var $3nsTP$reactariamenu = require("@react-aria/menu");
var $3nsTP$reactariaseparator = require("@react-aria/separator");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "MenuSection", () => $5793ff412227d2fc$export$4b1545b4f2016d26);
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






function $5793ff412227d2fc$export$4b1545b4f2016d26(props) {
    var _filter_at;
    let { item: item, state: state } = props;
    let { itemProps: itemProps, headingProps: headingProps, groupProps: groupProps } = (0, $3nsTP$reactariamenu.useMenuSection)({
        heading: item.rendered,
        'aria-label': item['aria-label']
    });
    let { separatorProps: separatorProps } = (0, $3nsTP$reactariaseparator.useSeparator)({
        elementType: 'div'
    });
    let firstSectionKey = state.collection.getFirstKey();
    let lastSectionKey = (_filter_at = [
        ...state.collection
    ].filter((node)=>node.type === 'section').at(-1)) === null || _filter_at === void 0 ? void 0 : _filter_at.key;
    let sectionIsFirst = firstSectionKey === item.key && state.collection.getFirstKey() === firstSectionKey;
    let lastKey = state.collection.getLastKey();
    let sectionIsLast = lastSectionKey === item.key && lastKey != null && state.collection.getItem(lastKey).parentKey === lastSectionKey;
    return /*#__PURE__*/ (0, ($parcel$interopDefault($3nsTP$react))).createElement((0, $3nsTP$react.Fragment), null, item.key !== state.collection.getFirstKey() && /*#__PURE__*/ (0, ($parcel$interopDefault($3nsTP$react))).createElement("div", {
        ...separatorProps,
        className: (0, $3nsTP$reactspectrumutils.classNames)((0, ($parcel$interopDefault($3deee0fd2b46e64f$exports))), 'spectrum-Menu-divider')
    }), /*#__PURE__*/ (0, ($parcel$interopDefault($3nsTP$react))).createElement("div", itemProps, item.rendered && /*#__PURE__*/ (0, ($parcel$interopDefault($3nsTP$react))).createElement("span", {
        ...headingProps,
        className: (0, $3nsTP$reactspectrumutils.classNames)((0, ($parcel$interopDefault($3deee0fd2b46e64f$exports))), 'spectrum-Menu-sectionHeading')
    }, item.rendered), /*#__PURE__*/ (0, ($parcel$interopDefault($3nsTP$react))).createElement("div", {
        ...groupProps,
        className: (0, $3nsTP$reactspectrumutils.classNames)((0, ($parcel$interopDefault($3deee0fd2b46e64f$exports))), 'spectrum-Menu', {
            'spectrum-Menu-section--noHeading': item.rendered == null,
            'spectrum-Menu-section--isFirst': sectionIsFirst,
            'spectrum-Menu-section--isLast': sectionIsLast
        })
    }, [
        ...(0, $3nsTP$reactstatelycollections.getChildNodes)(item, state.collection)
    ].map((node)=>{
        let item = /*#__PURE__*/ (0, ($parcel$interopDefault($3nsTP$react))).createElement((0, $1d718563708db5b5$exports.MenuItem), {
            key: node.key,
            item: node,
            state: state
        });
        if (node.wrapper) item = node.wrapper(item);
        return item;
    }))));
}


//# sourceMappingURL=MenuSection.main.js.map
