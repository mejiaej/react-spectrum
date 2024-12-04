require("./ColorPicker.96797a19.css");
var $f076f5c85640192a$exports = require("./ColorSwatch.main.js");
var $64NP6$reactariacomponents = require("react-aria-components");
var $64NP6$reactspectrumview = require("@react-spectrum/view");
var $64NP6$reactspectrumdialog = require("@react-spectrum/dialog");
var $64NP6$react = require("react");
var $64NP6$reactspectrumutils = require("@react-spectrum/utils");
var $64NP6$reactariautils = require("@react-aria/utils");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "ColorPicker", () => $0c330b4a4fe337a6$export$9feb1bc2e5f1ccb3);
/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 






const $0c330b4a4fe337a6$export$9feb1bc2e5f1ccb3 = /*#__PURE__*/ (0, ($parcel$interopDefault($64NP6$react))).forwardRef(function ColorPicker(props, ref) {
    let swatchRef = (0, $64NP6$react.useRef)(null);
    let domRef = (0, $64NP6$reactspectrumutils.useFocusableRef)(ref);
    let labelId = (0, $64NP6$reactariautils.useId)();
    return /*#__PURE__*/ (0, ($parcel$interopDefault($64NP6$react))).createElement((0, $64NP6$reactariacomponents.ColorPicker), props, /*#__PURE__*/ (0, ($parcel$interopDefault($64NP6$react))).createElement((0, $64NP6$reactspectrumdialog.DialogTrigger), {
        type: "popover",
        mobileType: "tray",
        targetRef: (0, $64NP6$reactspectrumutils.unwrapDOMRef)(swatchRef)
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($64NP6$react))).createElement((0, $64NP6$reactariacomponents.Button), {
        ref: domRef,
        className: function anonymous(props) {
            let rules = "";
            rules += ' s1-bs1-a';
            rules += ' s1-As1-f';
            rules += ' s1-Is1-a';
            rules += ' s1-Js1-a';
            rules += ' s1-Gs1-a';
            rules += ' s1-Hs1-a';
            rules += ' s1-_Ss1-d';
            rules += ' s1-_Us1-c';
            rules += ' s1-ls1-M';
            rules += ' s1-ms1-M';
            rules += ' s1-_Es1-a';
            rules += ' s1-5-bc1l9os1-h';
            rules += ' s1-5-1uotwbws1-g';
            rules += ' s1-5-eo0c6ss1-f';
            rules += ' s1-5-enzzrgs1-e';
            rules += ' s1-5-enzykds1-d';
            rules += ' s1-5-enzwzjs1-c';
            rules += ' s1-5-enzrfps1-b';
            rules += ' s1-5s1-a';
            rules += ' s1-as1-___K';
            if (props.size === "L") rules += ' s1-6s1-d';
            else if (props.size === "M") rules += ' s1-6s1-c';
            else if (props.size === "S") rules += ' s1-6s1-b';
            else if (props.size === "XS") rules += ' s1-6s1-a';
            return rules;
        }({
            size: props.size || 'M'
        })
    }, ({ isFocusVisible: isFocusVisible })=>/*#__PURE__*/ (0, ($parcel$interopDefault($64NP6$react))).createElement((0, ($parcel$interopDefault($64NP6$react))).Fragment, null, /*#__PURE__*/ (0, ($parcel$interopDefault($64NP6$react))).createElement("div", {
            className: function anonymous(props) {
                let rules = "";
                if (props.isFocusVisible) rules += ' s1-_Es1-b';
                else rules += ' s1-_Es1-a';
                rules += ' s1-ds1-as1-___D';
                rules += ' s1-ds1-___I';
                rules += ' s1-_Gs1-c';
                rules += ' s1-_Fs1-c';
                rules += ' s1-_ps1-c';
                rules += ' s1-_qs1-c';
                rules += ' s1-_rs1-c';
                rules += ' s1-_ss1-c';
                return rules;
            }({
                isFocusVisible: isFocusVisible
            })
        }, /*#__PURE__*/ (0, ($parcel$interopDefault($64NP6$react))).createElement((0, $f076f5c85640192a$exports.ColorSwatch), {
            ref: swatchRef,
            color: props.value,
            size: props.size,
            rounding: props.rounding,
            "aria-label": props['aria-label'],
            "aria-labelledby": props['aria-labelledby'],
            "aria-describedby": props['aria-describedby'],
            "aria-details": props['aria-details']
        })), props.label && /*#__PURE__*/ (0, ($parcel$interopDefault($64NP6$react))).createElement("span", {
            id: labelId
        }, props.label))), /*#__PURE__*/ (0, ($parcel$interopDefault($64NP6$react))).createElement((0, $64NP6$reactspectrumdialog.Dialog), {
        "aria-labelledby": props.label ? labelId : props['aria-labelledby'],
        "aria-label": props['aria-label'],
        UNSAFE_style: {
            width: 'fit-content',
            minWidth: 0,
            margin: '0 auto' // Center within tray.
        }
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($64NP6$react))).createElement((0, $64NP6$reactspectrumview.Content), {
        UNSAFE_style: {
            position: 'relative',
            margin: 'calc(var(--spectrum-dialog-padding) * -1)',
            padding: 'var(--spectrum-global-dimension-size-200)'
        }
    }, props.children))));
});


//# sourceMappingURL=ColorPicker.main.js.map
