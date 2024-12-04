require("./table.11fc8462.css");
var $4afcd54cfd94dbb9$exports = require("./table_css.main.js");
var $e39c6de4eb69450d$exports = require("./TableViewBase.main.js");
var $k3Oqb$reactspectrumutils = require("@react-spectrum/utils");
var $k3Oqb$react = require("react");
var $k3Oqb$reactariavisuallyhidden = require("@react-aria/visually-hidden");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "InsertionIndicator", () => $c44674ca7612e997$export$2c0bab5914a9d088);
/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 




function $c44674ca7612e997$export$2c0bab5914a9d088(props) {
    var _rowProps_style, _rowProps_style1, _rowProps_style2;
    let { dropState: dropState, dragAndDropHooks: dragAndDropHooks } = (0, $e39c6de4eb69450d$exports.useTableContext)();
    const { target: target, rowProps: rowProps } = props;
    let ref = (0, $k3Oqb$react.useRef)(null);
    let { dropIndicatorProps: dropIndicatorProps } = dragAndDropHooks.useDropIndicator(props, dropState, ref);
    let { visuallyHiddenProps: visuallyHiddenProps } = (0, $k3Oqb$reactariavisuallyhidden.useVisuallyHidden)();
    let isDropTarget = dropState.isDropTarget(target);
    if (!isDropTarget && dropIndicatorProps['aria-hidden']) return null;
    return /*#__PURE__*/ (0, ($parcel$interopDefault($k3Oqb$react))).createElement("div", {
        style: {
            position: 'absolute',
            top: typeof ((_rowProps_style = rowProps.style) === null || _rowProps_style === void 0 ? void 0 : _rowProps_style.top) === 'number' && typeof ((_rowProps_style1 = rowProps.style) === null || _rowProps_style1 === void 0 ? void 0 : _rowProps_style1.height) === 'number' ? rowProps.style.top + (target.dropPosition === 'after' ? rowProps.style.height : 0) : 0,
            width: (_rowProps_style2 = rowProps.style) === null || _rowProps_style2 === void 0 ? void 0 : _rowProps_style2.width
        },
        role: "row",
        "aria-hidden": dropIndicatorProps['aria-hidden']
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($k3Oqb$react))).createElement("div", {
        role: "gridcell",
        className: (0, $k3Oqb$reactspectrumutils.classNames)((0, ($parcel$interopDefault($4afcd54cfd94dbb9$exports))), 'react-spectrum-Table-InsertionIndicator', {
            'react-spectrum-Table-InsertionIndicator--dropTarget': isDropTarget
        })
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($k3Oqb$react))).createElement("div", {
        ...visuallyHiddenProps,
        role: "button",
        ...dropIndicatorProps,
        ref: ref
    })));
}


//# sourceMappingURL=InsertionIndicator.main.js.map
