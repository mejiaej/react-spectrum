var $bdf3bf7fe71fe120$exports = require("./context.main.js");
require("./vars.1be3e4c7.css");
var $53124a3a0fd56fca$exports = require("./fieldgroup_vars_css.main.js");
var $5yQLk$reactspectrumutils = require("@react-spectrum/utils");
var $5yQLk$reactspectrumlabel = require("@react-spectrum/label");
var $5yQLk$reactspectrumprovider = require("@react-spectrum/provider");
var $5yQLk$react = require("react");
var $5yQLk$reactariacheckbox = require("@react-aria/checkbox");
var $5yQLk$reactstatelycheckbox = require("@react-stately/checkbox");
var $5yQLk$reactspectrumform = require("@react-spectrum/form");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "CheckboxGroup", () => $1151290755e16c44$export$4aa08d5625cb8ead);
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








const $1151290755e16c44$export$4aa08d5625cb8ead = /*#__PURE__*/ (0, ($parcel$interopDefault($5yQLk$react))).forwardRef(function CheckboxGroup(props, ref) {
    props = (0, $5yQLk$reactspectrumprovider.useProviderProps)(props);
    props = (0, $5yQLk$reactspectrumform.useFormProps)(props);
    let { isEmphasized: isEmphasized, children: children, orientation: orientation = 'vertical' } = props;
    let domRef = (0, $5yQLk$reactspectrumutils.useDOMRef)(ref);
    let state = (0, $5yQLk$reactstatelycheckbox.useCheckboxGroupState)(props);
    let { groupProps: groupProps, ...otherProps } = (0, $5yQLk$reactariacheckbox.useCheckboxGroup)(props, state);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($5yQLk$react))).createElement((0, $5yQLk$reactspectrumlabel.Field), {
        ...props,
        ...otherProps,
        ref: domRef,
        wrapperClassName: (0, $5yQLk$reactspectrumutils.classNames)((0, ($parcel$interopDefault($53124a3a0fd56fca$exports))), 'spectrum-FieldGroup'),
        elementType: "span",
        includeNecessityIndicatorInAccessibilityName: true
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($5yQLk$react))).createElement("div", {
        ...groupProps,
        className: (0, $5yQLk$reactspectrumutils.classNames)((0, ($parcel$interopDefault($53124a3a0fd56fca$exports))), 'spectrum-FieldGroup-group', {
            'spectrum-FieldGroup-group--horizontal': orientation === 'horizontal'
        })
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($5yQLk$react))).createElement((0, $5yQLk$reactspectrumprovider.Provider), {
        isEmphasized: isEmphasized
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($5yQLk$react))).createElement((0, $bdf3bf7fe71fe120$exports.CheckboxGroupContext).Provider, {
        value: state
    }, children))));
});


//# sourceMappingURL=CheckboxGroup.main.js.map
