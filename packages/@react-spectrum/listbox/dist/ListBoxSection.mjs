import {ListBoxContext as $0c6f792811e33483$export$7ff8f37d2d81a48d} from "./ListBoxContext.mjs";
import "./vars.954cf9f6.css";
import $dzUX8$menu_vars_cssmodulejs from "./menu_vars_css.mjs";
import {classNames as $dzUX8$classNames} from "@react-spectrum/utils";
import {useVirtualizerItem as $dzUX8$useVirtualizerItem, layoutInfoToStyle as $dzUX8$layoutInfoToStyle} from "@react-aria/virtualizer";
import $dzUX8$react, {useRef as $dzUX8$useRef, useContext as $dzUX8$useContext, Fragment as $dzUX8$Fragment} from "react";
import {useListBoxSection as $dzUX8$useListBoxSection} from "@react-aria/listbox";
import {useLocale as $dzUX8$useLocale} from "@react-aria/i18n";


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






function $92d678ed88836094$export$dca12b0bb56e4fc(props) {
    let { children: children, layoutInfo: layoutInfo, headerLayoutInfo: headerLayoutInfo, virtualizer: virtualizer, item: item } = props;
    let { headingProps: headingProps, groupProps: groupProps } = (0, $dzUX8$useListBoxSection)({
        heading: item.rendered,
        'aria-label': item['aria-label']
    });
    let headerRef = (0, $dzUX8$useRef)(null);
    (0, $dzUX8$useVirtualizerItem)({
        layoutInfo: headerLayoutInfo,
        virtualizer: virtualizer,
        ref: headerRef
    });
    let { direction: direction } = (0, $dzUX8$useLocale)();
    let { state: state } = (0, $dzUX8$useContext)((0, $0c6f792811e33483$export$7ff8f37d2d81a48d));
    return /*#__PURE__*/ (0, $dzUX8$react).createElement((0, $dzUX8$Fragment), null, headerLayoutInfo && /*#__PURE__*/ (0, $dzUX8$react).createElement("div", {
        role: "presentation",
        ref: headerRef,
        style: (0, $dzUX8$layoutInfoToStyle)(headerLayoutInfo, direction)
    }, item.key !== state.collection.getFirstKey() && /*#__PURE__*/ (0, $dzUX8$react).createElement("div", {
        role: "presentation",
        className: (0, $dzUX8$classNames)((0, ($parcel$interopDefault($dzUX8$menu_vars_cssmodulejs))), 'spectrum-Menu-divider')
    }), item.rendered && /*#__PURE__*/ (0, $dzUX8$react).createElement("div", {
        ...headingProps,
        className: (0, $dzUX8$classNames)((0, ($parcel$interopDefault($dzUX8$menu_vars_cssmodulejs))), 'spectrum-Menu-sectionHeading')
    }, item.rendered)), /*#__PURE__*/ (0, $dzUX8$react).createElement("div", {
        ...groupProps,
        style: (0, $dzUX8$layoutInfoToStyle)(layoutInfo, direction),
        className: (0, $dzUX8$classNames)((0, ($parcel$interopDefault($dzUX8$menu_vars_cssmodulejs))), 'spectrum-Menu')
    }, children));
}


export {$92d678ed88836094$export$dca12b0bb56e4fc as ListBoxSection};
//# sourceMappingURL=ListBoxSection.module.js.map
