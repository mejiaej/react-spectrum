import "./ColorPicker.96797a19.css";
import {ColorSwatch as $d68786ae409fa722$export$cae13e90592f246a} from "./ColorSwatch.module.js";
import {ColorPicker as $5bRyn$ColorPicker, Button as $5bRyn$Button} from "react-aria-components";
import {Content as $5bRyn$Content} from "@react-spectrum/view";
import {DialogTrigger as $5bRyn$DialogTrigger, Dialog as $5bRyn$Dialog} from "@react-spectrum/dialog";
import $5bRyn$react, {useRef as $5bRyn$useRef} from "react";
import {useFocusableRef as $5bRyn$useFocusableRef, unwrapDOMRef as $5bRyn$unwrapDOMRef} from "@react-spectrum/utils";
import {useId as $5bRyn$useId} from "@react-aria/utils";

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






const $d9654c66f3a7e70a$export$9feb1bc2e5f1ccb3 = /*#__PURE__*/ (0, $5bRyn$react).forwardRef(function ColorPicker(props, ref) {
    let swatchRef = (0, $5bRyn$useRef)(null);
    let domRef = (0, $5bRyn$useFocusableRef)(ref);
    let labelId = (0, $5bRyn$useId)();
    return /*#__PURE__*/ (0, $5bRyn$react).createElement((0, $5bRyn$ColorPicker), props, /*#__PURE__*/ (0, $5bRyn$react).createElement((0, $5bRyn$DialogTrigger), {
        type: "popover",
        mobileType: "tray",
        targetRef: (0, $5bRyn$unwrapDOMRef)(swatchRef)
    }, /*#__PURE__*/ (0, $5bRyn$react).createElement((0, $5bRyn$Button), {
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
    }, ({ isFocusVisible: isFocusVisible })=>/*#__PURE__*/ (0, $5bRyn$react).createElement((0, $5bRyn$react).Fragment, null, /*#__PURE__*/ (0, $5bRyn$react).createElement("div", {
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
        }, /*#__PURE__*/ (0, $5bRyn$react).createElement((0, $d68786ae409fa722$export$cae13e90592f246a), {
            ref: swatchRef,
            color: props.value,
            size: props.size,
            rounding: props.rounding,
            "aria-label": props['aria-label'],
            "aria-labelledby": props['aria-labelledby'],
            "aria-describedby": props['aria-describedby'],
            "aria-details": props['aria-details']
        })), props.label && /*#__PURE__*/ (0, $5bRyn$react).createElement("span", {
            id: labelId
        }, props.label))), /*#__PURE__*/ (0, $5bRyn$react).createElement((0, $5bRyn$Dialog), {
        "aria-labelledby": props.label ? labelId : props['aria-labelledby'],
        "aria-label": props['aria-label'],
        UNSAFE_style: {
            width: 'fit-content',
            minWidth: 0,
            margin: '0 auto' // Center within tray.
        }
    }, /*#__PURE__*/ (0, $5bRyn$react).createElement((0, $5bRyn$Content), {
        UNSAFE_style: {
            position: 'relative',
            margin: 'calc(var(--spectrum-dialog-padding) * -1)',
            padding: 'var(--spectrum-global-dimension-size-200)'
        }
    }, props.children))));
});


export {$d9654c66f3a7e70a$export$9feb1bc2e5f1ccb3 as ColorPicker};
//# sourceMappingURL=ColorPicker.module.js.map
