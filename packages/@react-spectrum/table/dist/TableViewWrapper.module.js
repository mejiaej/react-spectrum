import {TableView as $d14697b14e638114$export$b3c27e869d856b7} from "./TableView.module.js";
import {TreeGridTableView as $be90f60881eac8aa$export$5669566ac2c90964} from "./TreeGridTableView.module.js";
import $k3cyS$react from "react";
import {tableNestedRows as $k3cyS$tableNestedRows} from "@react-stately/flags";

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
 */ const $9f67189e3f884740$export$b3c27e869d856b7 = /*#__PURE__*/ (0, $k3cyS$react).forwardRef(function TableViewWrapper(props, ref) {
    let { UNSTABLE_allowsExpandableRows: UNSTABLE_allowsExpandableRows, ...otherProps } = props;
    if ((0, $k3cyS$tableNestedRows)() && UNSTABLE_allowsExpandableRows) return /*#__PURE__*/ (0, $k3cyS$react).createElement((0, $be90f60881eac8aa$export$5669566ac2c90964), {
        ...otherProps,
        ref: ref
    });
    else return /*#__PURE__*/ (0, $k3cyS$react).createElement((0, $d14697b14e638114$export$b3c27e869d856b7), {
        ...otherProps,
        ref: ref
    });
});


export {$9f67189e3f884740$export$b3c27e869d856b7 as TableView};
//# sourceMappingURL=TableViewWrapper.module.js.map
