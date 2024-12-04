require("./FullscreenDialog.css");
var $e1016b8947dbadb8$exports = require("./ButtonGroup.cjs");
var $6367bc87eb7d24ad$exports = require("./Content.cjs");
var $8e678305a8c10028$exports = require("./Modal.cjs");
var $Yi1VH$reactjsxruntime = require("react/jsx-runtime");
var $Yi1VH$reactariacomponents = require("react-aria-components");
var $Yi1VH$react = require("react");
var $Yi1VH$reactspectrumutils = require("@react-spectrum/utils");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "FullscreenDialog", () => $59876d274d9473a9$export$7082b7e805d2626f);
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






const $59876d274d9473a9$var$heading = " . __a-go5hed __b-go5hed __c-go5hed __d-go5hed _9-3t1y Aa Ba _ca _c-enzrfpb _c-enzwzjc _c-enzykdd _c-enzzrge _c-eo0c6sf _c-1uotwbwg _c-bc1l9oh _dj _dbm _ee _e-1x99dloe _fa _f-1x99dlob ao";
const $59876d274d9473a9$var$header = " . __a-i6pim __b-i6pim __c-i6pim __d-i6pim yc_d zc_d _ca _c-enzrfpb _c-enzwzjc _c-enzykdd _c-enzzrge _c-eo0c6sf _c-1uotwbwg _c-bc1l9oh _di _dbj _eb _fb _f-1x99dloc an";
const $59876d274d9473a9$var$content = " . __a-1mod4sg __b-1mod4sg __c-1mod4sg __d-1mod4sg _9-3t1y __wa __w-l92dlrd _ca _c-enzrfpb _c-enzwzjc _c-enzykdd _c-enzzrge _c-eo0c6sf _c-1uotwbwg _c-bc1l9oh _dg _dbh _eb _fb _f-1x99dloc an";
const $59876d274d9473a9$var$buttonGroup = " . __a-15bi2vo __b-15bi2vo __c-15bi2vo __d-15bi2vo y_d rb";
const $59876d274d9473a9$export$6af31f836f9aa6f2 = " . _Zf __j-1fflgh0 __jc-1viqiso __h-375yi6 __hc-fdenls __i-36luh1 __ic-1wmzwss Eh Ecj Fh Fcj Ch Ccj Dh Dcj jf jch p-17zqamw kb __na _La _ca _c-enzrfpb _c-enzwzjc _c-enzykdd _c-enzzrge _c-eo0c6sf _c-1uotwbwg _c-bc1l9oh _v-17zqamw _w-17zqamw _x-17zqamw _y-17zqamw __va __wa";
const $59876d274d9473a9$export$7082b7e805d2626f = /*#__PURE__*/ (0, $Yi1VH$react.forwardRef)(function FullscreenDialog(props, ref) {
    let { variant: variant = 'fullscreen', isKeyboardDismissDisabled: isKeyboardDismissDisabled } = props;
    let domRef = (0, $Yi1VH$reactspectrumutils.useDOMRef)(ref);
    return /*#__PURE__*/ (0, $Yi1VH$reactjsxruntime.jsx)((0, $8e678305a8c10028$exports.Modal), {
        size: variant,
        isKeyboardDismissDisabled: isKeyboardDismissDisabled,
        children: /*#__PURE__*/ (0, $Yi1VH$reactjsxruntime.jsx)((0, $Yi1VH$reactariacomponents.Dialog), {
            ...props,
            ref: domRef,
            style: props.UNSAFE_style,
            className: (props.UNSAFE_className || '') + $59876d274d9473a9$export$6af31f836f9aa6f2,
            children: (0, $Yi1VH$reactariacomponents.composeRenderProps)(props.children, (children)=>// Reset OverlayTriggerStateContext so the buttons inside the dialog don't retain their hover state.
                /*#__PURE__*/ (0, $Yi1VH$reactjsxruntime.jsx)((0, $Yi1VH$reactariacomponents.OverlayTriggerStateContext).Provider, {
                    value: null,
                    children: /*#__PURE__*/ (0, $Yi1VH$reactjsxruntime.jsx)((0, $Yi1VH$reactariacomponents.Provider), {
                        values: [
                            [
                                (0, $6367bc87eb7d24ad$exports.HeadingContext),
                                {
                                    styles: $59876d274d9473a9$var$heading
                                }
                            ],
                            [
                                (0, $6367bc87eb7d24ad$exports.HeaderContext),
                                {
                                    styles: $59876d274d9473a9$var$header
                                }
                            ],
                            [
                                (0, $6367bc87eb7d24ad$exports.ContentContext),
                                {
                                    styles: $59876d274d9473a9$var$content
                                }
                            ],
                            [
                                (0, $e1016b8947dbadb8$exports.ButtonGroupContext),
                                {
                                    styles: $59876d274d9473a9$var$buttonGroup
                                }
                            ]
                        ],
                        children: children
                    })
                }))
        })
    });
});


//# sourceMappingURL=FullscreenDialog.cjs.map
