var $b9b57d2de2195519$exports = require("./StepListContext.main.js");
var $d2e2cd0667356b5d$exports = require("./StepListItem.main.js");
require("./vars.09815770.css");
var $390add5aac6e4d73$exports = require("./steplist_vars_css.main.js");
var $i9j2Q$reactariasteplist = require("@react-aria/steplist");
var $i9j2Q$reactspectrumutils = require("@react-spectrum/utils");
var $i9j2Q$react = require("react");
var $i9j2Q$reactspectrumprovider = require("@react-spectrum/provider");
var $i9j2Q$reactstatelysteplist = require("@react-stately/steplist");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "StepList", () => $a64198f1506264d6$export$ff2e09ca3ba758a9);
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







const $a64198f1506264d6$export$ff2e09ca3ba758a9 = /*#__PURE__*/ (0, ($parcel$interopDefault($i9j2Q$react))).forwardRef(function StepList(props, ref) {
    const { size: size = 'M', orientation: orientation = 'horizontal' } = props;
    props = (0, $i9j2Q$reactspectrumprovider.useProviderProps)(props);
    const { isDisabled: isDisabled, isEmphasized: isEmphasized } = props;
    let { styleProps: styleProps } = (0, $i9j2Q$reactspectrumutils.useStyleProps)(props);
    let domRef = (0, $i9j2Q$reactspectrumutils.useDOMRef)(ref);
    let state = (0, $i9j2Q$reactstatelysteplist.useStepListState)(props);
    let { listProps: listProps } = (0, $i9j2Q$reactariasteplist.useStepList)(props, state, domRef);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($i9j2Q$react))).createElement("ol", {
        ...listProps,
        ...styleProps,
        ref: domRef,
        className: (0, $i9j2Q$reactspectrumutils.classNames)((0, ($parcel$interopDefault($390add5aac6e4d73$exports))), 'spectrum-Steplist', styleProps.className, {
            'spectrum-Steplist--small': size === 'S',
            'spectrum-Steplist--medium': size === 'M',
            'spectrum-Steplist--large': size === 'L',
            'spectrum-Steplist--xlarge': size === 'XL',
            'spectrum-Steplist--emphasized': isEmphasized,
            'spectrum-Steplist--horizontal': orientation === 'horizontal',
            'spectrum-Steplist--vertical': orientation === 'vertical'
        })
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($i9j2Q$react))).createElement((0, $b9b57d2de2195519$exports.StepListContext).Provider, {
        value: state
    }, [
        ...state.collection
    ].map((item)=>/*#__PURE__*/ (0, ($parcel$interopDefault($i9j2Q$react))).createElement((0, $d2e2cd0667356b5d$exports.StepListItem), {
            key: item.key,
            isDisabled: isDisabled,
            item: item
        }))));
});


//# sourceMappingURL=StepList.main.js.map
