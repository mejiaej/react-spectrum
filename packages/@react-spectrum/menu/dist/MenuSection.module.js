import {MenuItem as $48fb8f5e1202c980$export$2ce376c2cc3355c8} from "./MenuItem.module.js";
import "./vars.ca367765.css";
import $9353d$menu_vars_cssmodulejs from "./menu_vars_css.module.js";
import {classNames as $9353d$classNames} from "@react-spectrum/utils";
import {getChildNodes as $9353d$getChildNodes} from "@react-stately/collections";
import $9353d$react, {Fragment as $9353d$Fragment} from "react";
import {useMenuSection as $9353d$useMenuSection} from "@react-aria/menu";
import {useSeparator as $9353d$useSeparator} from "@react-aria/separator";


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
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






function $b966e606890cc5ca$export$4b1545b4f2016d26(props) {
    var _filter_at;
    let { item: item, state: state } = props;
    let { itemProps: itemProps, headingProps: headingProps, groupProps: groupProps } = (0, $9353d$useMenuSection)({
        heading: item.rendered,
        'aria-label': item['aria-label']
    });
    let { separatorProps: separatorProps } = (0, $9353d$useSeparator)({
        elementType: 'div'
    });
    let firstSectionKey = state.collection.getFirstKey();
    let lastSectionKey = (_filter_at = [
        ...state.collection
    ].filter((node)=>node.type === 'section').at(-1)) === null || _filter_at === void 0 ? void 0 : _filter_at.key;
    let sectionIsFirst = firstSectionKey === item.key && state.collection.getFirstKey() === firstSectionKey;
    let lastKey = state.collection.getLastKey();
    let sectionIsLast = lastSectionKey === item.key && lastKey != null && state.collection.getItem(lastKey).parentKey === lastSectionKey;
    return /*#__PURE__*/ (0, $9353d$react).createElement((0, $9353d$Fragment), null, item.key !== state.collection.getFirstKey() && /*#__PURE__*/ (0, $9353d$react).createElement("div", {
        ...separatorProps,
        className: (0, $9353d$classNames)((0, ($parcel$interopDefault($9353d$menu_vars_cssmodulejs))), 'spectrum-Menu-divider')
    }), /*#__PURE__*/ (0, $9353d$react).createElement("div", itemProps, item.rendered && /*#__PURE__*/ (0, $9353d$react).createElement("span", {
        ...headingProps,
        className: (0, $9353d$classNames)((0, ($parcel$interopDefault($9353d$menu_vars_cssmodulejs))), 'spectrum-Menu-sectionHeading')
    }, item.rendered), /*#__PURE__*/ (0, $9353d$react).createElement("div", {
        ...groupProps,
        className: (0, $9353d$classNames)((0, ($parcel$interopDefault($9353d$menu_vars_cssmodulejs))), 'spectrum-Menu', {
            'spectrum-Menu-section--noHeading': item.rendered == null,
            'spectrum-Menu-section--isFirst': sectionIsFirst,
            'spectrum-Menu-section--isLast': sectionIsLast
        })
    }, [
        ...(0, $9353d$getChildNodes)(item, state.collection)
    ].map((node)=>{
        let item = /*#__PURE__*/ (0, $9353d$react).createElement((0, $48fb8f5e1202c980$export$2ce376c2cc3355c8), {
            key: node.key,
            item: node,
            state: state
        });
        if (node.wrapper) item = node.wrapper(item);
        return item;
    }))));
}


export {$b966e606890cc5ca$export$4b1545b4f2016d26 as MenuSection};
//# sourceMappingURL=MenuSection.module.js.map
