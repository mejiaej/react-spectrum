var $f5a8721b9af05d97$exports = require("./context.main.js");
require("./vars.1aed80f4.css");
var $53124a3a0fd56fca$exports = require("./fieldgroup_vars_css.main.js");
var $bzUrP$reactspectrumutils = require("@react-spectrum/utils");
var $bzUrP$reactspectrumlabel = require("@react-spectrum/label");
var $bzUrP$react = require("react");
var $bzUrP$reactspectrumform = require("@react-spectrum/form");
var $bzUrP$reactspectrumprovider = require("@react-spectrum/provider");
var $bzUrP$reactariaradio = require("@react-aria/radio");
var $bzUrP$reactstatelyradio = require("@react-stately/radio");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "RadioGroup", () => $aa5529d97b69d048$export$a98f0dcb43a68a25);
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








const $aa5529d97b69d048$export$a98f0dcb43a68a25 = /*#__PURE__*/ (0, ($parcel$interopDefault($bzUrP$react))).forwardRef(function RadioGroup(props, ref) {
    props = (0, $bzUrP$reactspectrumprovider.useProviderProps)(props);
    props = (0, $bzUrP$reactspectrumform.useFormProps)(props);
    let { isEmphasized: isEmphasized, children: children, orientation: orientation = 'vertical' } = props;
    let domRef = (0, $bzUrP$reactspectrumutils.useDOMRef)(ref);
    let state = (0, $bzUrP$reactstatelyradio.useRadioGroupState)(props);
    let { radioGroupProps: radioGroupProps, ...otherProps } = (0, $bzUrP$reactariaradio.useRadioGroup)(props, state);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($bzUrP$react))).createElement((0, $bzUrP$reactspectrumlabel.Field), {
        ...props,
        ...otherProps,
        ref: domRef,
        wrapperClassName: (0, $bzUrP$reactspectrumutils.classNames)((0, ($parcel$interopDefault($53124a3a0fd56fca$exports))), 'spectrum-FieldGroup'),
        elementType: "span"
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($bzUrP$react))).createElement("div", {
        ...radioGroupProps,
        className: (0, $bzUrP$reactspectrumutils.classNames)((0, ($parcel$interopDefault($53124a3a0fd56fca$exports))), 'spectrum-FieldGroup-group', {
            'spectrum-FieldGroup-group--horizontal': orientation === 'horizontal'
        })
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($bzUrP$react))).createElement((0, $f5a8721b9af05d97$exports.RadioContext).Provider, {
        value: {
            isEmphasized: isEmphasized,
            state: state
        }
    }, children)));
});


//# sourceMappingURL=RadioGroup.main.js.map
