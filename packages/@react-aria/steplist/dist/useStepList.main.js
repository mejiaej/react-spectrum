var $819d2f6398427998$exports = require("./intlStrings.main.js");
var $7WRFn$reactariautils = require("@react-aria/utils");
var $7WRFn$reactariai18n = require("@react-aria/i18n");
var $7WRFn$reactariaselection = require("@react-aria/selection");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "useStepList", () => $900a30dd63582698$export$c51c7b7354499d04);
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



function $900a30dd63582698$export$c51c7b7354499d04(props, state, ref) {
    let { 'aria-label': ariaLabel } = props;
    let { listProps: listProps } = (0, $7WRFn$reactariaselection.useSelectableList)({
        ...props,
        ...state,
        allowsTabNavigation: true,
        ref: ref
    });
    const strings = (0, $7WRFn$reactariai18n.useLocalizedStringFormatter)((0, ($parcel$interopDefault($819d2f6398427998$exports))), '@react-aria/steplist');
    const stepListProps = {
        ...(0, $7WRFn$reactariautils.mergeProps)(listProps, (0, $7WRFn$reactariautils.filterDOMProps)(props, {
            labelable: true
        })),
        'aria-label': ariaLabel || strings.format('steplist')
    };
    return {
        listProps: {
            ...stepListProps,
            tabIndex: undefined
        }
    };
}


//# sourceMappingURL=useStepList.main.js.map
