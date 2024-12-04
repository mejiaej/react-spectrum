var $be8a9c035a82f788$exports = require("./TableView.main.js");
var $e770cde7e93c7e49$exports = require("./TreeGridTableView.main.js");
var $kgRYg$react = require("react");
var $kgRYg$reactstatelyflags = require("@react-stately/flags");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "TableView", () => $9802a0717549c6f1$export$b3c27e869d856b7);
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



/**
 * Tables are containers for displaying information. They allow users to quickly scan, sort, compare, and take action on large amounts of data.
 */ const $9802a0717549c6f1$export$b3c27e869d856b7 = /*#__PURE__*/ (0, ($parcel$interopDefault($kgRYg$react))).forwardRef(function TableViewWrapper(props, ref) {
    let { UNSTABLE_allowsExpandableRows: UNSTABLE_allowsExpandableRows, ...otherProps } = props;
    if ((0, $kgRYg$reactstatelyflags.tableNestedRows)() && UNSTABLE_allowsExpandableRows) return /*#__PURE__*/ (0, ($parcel$interopDefault($kgRYg$react))).createElement((0, $e770cde7e93c7e49$exports.TreeGridTableView), {
        ...otherProps,
        ref: ref
    });
    else return /*#__PURE__*/ (0, ($parcel$interopDefault($kgRYg$react))).createElement((0, $be8a9c035a82f788$exports.TableView), {
        ...otherProps,
        ref: ref
    });
});


//# sourceMappingURL=TableViewWrapper.main.js.map
