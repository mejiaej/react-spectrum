var $611e93c7b7c0413c$exports = require("./ListBoxContext.main.js");
require("./vars.954cf9f6.css");
var $3deee0fd2b46e64f$exports = require("./menu_vars_css.main.js");
var $cCu2p$reactspectrumutils = require("@react-spectrum/utils");
var $cCu2p$reactariavirtualizer = require("@react-aria/virtualizer");
var $cCu2p$react = require("react");
var $cCu2p$reactarialistbox = require("@react-aria/listbox");
var $cCu2p$reactariai18n = require("@react-aria/i18n");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "ListBoxSection", () => $0f5fd8483f48ef09$export$dca12b0bb56e4fc);
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






function $0f5fd8483f48ef09$export$dca12b0bb56e4fc(props) {
    let { children: children, layoutInfo: layoutInfo, headerLayoutInfo: headerLayoutInfo, virtualizer: virtualizer, item: item } = props;
    let { headingProps: headingProps, groupProps: groupProps } = (0, $cCu2p$reactarialistbox.useListBoxSection)({
        heading: item.rendered,
        'aria-label': item['aria-label']
    });
    let headerRef = (0, $cCu2p$react.useRef)(null);
    (0, $cCu2p$reactariavirtualizer.useVirtualizerItem)({
        layoutInfo: headerLayoutInfo,
        virtualizer: virtualizer,
        ref: headerRef
    });
    let { direction: direction } = (0, $cCu2p$reactariai18n.useLocale)();
    let { state: state } = (0, $cCu2p$react.useContext)((0, $611e93c7b7c0413c$exports.ListBoxContext));
    return /*#__PURE__*/ (0, ($parcel$interopDefault($cCu2p$react))).createElement((0, $cCu2p$react.Fragment), null, headerLayoutInfo && /*#__PURE__*/ (0, ($parcel$interopDefault($cCu2p$react))).createElement("div", {
        role: "presentation",
        ref: headerRef,
        style: (0, $cCu2p$reactariavirtualizer.layoutInfoToStyle)(headerLayoutInfo, direction)
    }, item.key !== state.collection.getFirstKey() && /*#__PURE__*/ (0, ($parcel$interopDefault($cCu2p$react))).createElement("div", {
        role: "presentation",
        className: (0, $cCu2p$reactspectrumutils.classNames)((0, ($parcel$interopDefault($3deee0fd2b46e64f$exports))), 'spectrum-Menu-divider')
    }), item.rendered && /*#__PURE__*/ (0, ($parcel$interopDefault($cCu2p$react))).createElement("div", {
        ...headingProps,
        className: (0, $cCu2p$reactspectrumutils.classNames)((0, ($parcel$interopDefault($3deee0fd2b46e64f$exports))), 'spectrum-Menu-sectionHeading')
    }, item.rendered)), /*#__PURE__*/ (0, ($parcel$interopDefault($cCu2p$react))).createElement("div", {
        ...groupProps,
        style: (0, $cCu2p$reactariavirtualizer.layoutInfoToStyle)(layoutInfo, direction),
        className: (0, $cCu2p$reactspectrumutils.classNames)((0, ($parcel$interopDefault($3deee0fd2b46e64f$exports))), 'spectrum-Menu')
    }, children));
}


//# sourceMappingURL=ListBoxSection.main.js.map
