import "./FullscreenDialog.css";
import {ButtonGroupContext as $472eaa9a9b344b9a$export$4c574c91bb0be0e2} from "./ButtonGroup.mjs";
import {ContentContext as $8e847109a6ab556d$export$1cbdd774077931b4, HeaderContext as $8e847109a6ab556d$export$e0e4026c12a8bdbb, HeadingContext as $8e847109a6ab556d$export$d688439359537581} from "./Content.mjs";
import {Modal as $c46d159bd615e407$export$2b77a92f1a5ad772} from "./Modal.mjs";
import {jsx as $900FG$jsx} from "react/jsx-runtime";
import {Dialog as $900FG$Dialog, composeRenderProps as $900FG$composeRenderProps, OverlayTriggerStateContext as $900FG$OverlayTriggerStateContext, Provider as $900FG$Provider} from "react-aria-components";
import {forwardRef as $900FG$forwardRef} from "react";
import {useDOMRef as $900FG$useDOMRef} from "@react-spectrum/utils";

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






const $8e7a38ff5b9798e1$var$heading = " . __a-go5hed __b-go5hed __c-go5hed __d-go5hed _9-3t1y Aa Ba _ca _c-enzrfpb _c-enzwzjc _c-enzykdd _c-enzzrge _c-eo0c6sf _c-1uotwbwg _c-bc1l9oh _dj _dbm _ee _e-1x99dloe _fa _f-1x99dlob ao";
const $8e7a38ff5b9798e1$var$header = " . __a-i6pim __b-i6pim __c-i6pim __d-i6pim yc_d zc_d _ca _c-enzrfpb _c-enzwzjc _c-enzykdd _c-enzzrge _c-eo0c6sf _c-1uotwbwg _c-bc1l9oh _di _dbj _eb _fb _f-1x99dloc an";
const $8e7a38ff5b9798e1$var$content = " . __a-1mod4sg __b-1mod4sg __c-1mod4sg __d-1mod4sg _9-3t1y __wa __w-l92dlrd _ca _c-enzrfpb _c-enzwzjc _c-enzykdd _c-enzzrge _c-eo0c6sf _c-1uotwbwg _c-bc1l9oh _dg _dbh _eb _fb _f-1x99dloc an";
const $8e7a38ff5b9798e1$var$buttonGroup = " . __a-15bi2vo __b-15bi2vo __c-15bi2vo __d-15bi2vo y_d rb";
const $8e7a38ff5b9798e1$export$6af31f836f9aa6f2 = " . _Zf __j-1fflgh0 __jc-1viqiso __h-375yi6 __hc-fdenls __i-36luh1 __ic-1wmzwss Eh Ecj Fh Fcj Ch Ccj Dh Dcj jf jch p-17zqamw kb __na _La _ca _c-enzrfpb _c-enzwzjc _c-enzykdd _c-enzzrge _c-eo0c6sf _c-1uotwbwg _c-bc1l9oh _v-17zqamw _w-17zqamw _x-17zqamw _y-17zqamw __va __wa";
const $8e7a38ff5b9798e1$export$7082b7e805d2626f = /*#__PURE__*/ (0, $900FG$forwardRef)(function FullscreenDialog(props, ref) {
    let { variant: variant = 'fullscreen', isKeyboardDismissDisabled: isKeyboardDismissDisabled } = props;
    let domRef = (0, $900FG$useDOMRef)(ref);
    return /*#__PURE__*/ (0, $900FG$jsx)((0, $c46d159bd615e407$export$2b77a92f1a5ad772), {
        size: variant,
        isKeyboardDismissDisabled: isKeyboardDismissDisabled,
        children: /*#__PURE__*/ (0, $900FG$jsx)((0, $900FG$Dialog), {
            ...props,
            ref: domRef,
            style: props.UNSAFE_style,
            className: (props.UNSAFE_className || '') + $8e7a38ff5b9798e1$export$6af31f836f9aa6f2,
            children: (0, $900FG$composeRenderProps)(props.children, (children)=>// Reset OverlayTriggerStateContext so the buttons inside the dialog don't retain their hover state.
                /*#__PURE__*/ (0, $900FG$jsx)((0, $900FG$OverlayTriggerStateContext).Provider, {
                    value: null,
                    children: /*#__PURE__*/ (0, $900FG$jsx)((0, $900FG$Provider), {
                        values: [
                            [
                                (0, $8e847109a6ab556d$export$d688439359537581),
                                {
                                    styles: $8e7a38ff5b9798e1$var$heading
                                }
                            ],
                            [
                                (0, $8e847109a6ab556d$export$e0e4026c12a8bdbb),
                                {
                                    styles: $8e7a38ff5b9798e1$var$header
                                }
                            ],
                            [
                                (0, $8e847109a6ab556d$export$1cbdd774077931b4),
                                {
                                    styles: $8e7a38ff5b9798e1$var$content
                                }
                            ],
                            [
                                (0, $472eaa9a9b344b9a$export$4c574c91bb0be0e2),
                                {
                                    styles: $8e7a38ff5b9798e1$var$buttonGroup
                                }
                            ]
                        ],
                        children: children
                    })
                }))
        })
    });
});


export {$8e7a38ff5b9798e1$export$6af31f836f9aa6f2 as dialogInner, $8e7a38ff5b9798e1$export$7082b7e805d2626f as FullscreenDialog};
//# sourceMappingURL=FullscreenDialog.mjs.map
