import "./Dialog.css";
import {ButtonGroupContext as $472eaa9a9b344b9a$export$4c574c91bb0be0e2} from "./ButtonGroup.mjs";
import {CloseButton as $a9cda54c4f47ce52$export$de65de8213222d10} from "./CloseButton.mjs";
import {ContentContext as $8e847109a6ab556d$export$1cbdd774077931b4, FooterContext as $8e847109a6ab556d$export$5630640b68817ed6, HeaderContext as $8e847109a6ab556d$export$e0e4026c12a8bdbb, HeadingContext as $8e847109a6ab556d$export$d688439359537581} from "./Content.mjs";
import {ImageContext as $dbd6f0b2503b938c$export$8151eb379fcf2442} from "./Image.mjs";
import {Modal as $c46d159bd615e407$export$2b77a92f1a5ad772} from "./Modal.mjs";
import {jsx as $9Rtwv$jsx, jsxs as $9Rtwv$jsxs} from "react/jsx-runtime";
import {Dialog as $9Rtwv$Dialog, composeRenderProps as $9Rtwv$composeRenderProps, OverlayTriggerStateContext as $9Rtwv$OverlayTriggerStateContext, Provider as $9Rtwv$Provider} from "react-aria-components";
import {forwardRef as $9Rtwv$forwardRef} from "react";
import {useDOMRef as $9Rtwv$useDOMRef} from "@react-spectrum/utils";

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








const $9bbc115952dac5a6$var$image = " . lb k__E __Nb";
const $9bbc115952dac5a6$var$heading = " . _9-3t1y Aa Ba _ca _c-enzrfpb _c-enzwzjc _c-enzykdd _c-enzzrge _c-eo0c6sf _c-1uotwbwg _c-bc1l9oh _dj _dbm _ee _e-1x99dloe _fa _f-1x99dlob ao";
const $9bbc115952dac5a6$var$header = " . _ca _c-enzrfpb _c-enzwzjc _c-enzykdd _c-enzzrge _c-eo0c6sf _c-1uotwbwg _c-bc1l9oh _di _dbj _eb _fb _f-1x99dloc an";
const $9bbc115952dac5a6$var$content = " . _9-3t1y __wa __w-l92dlrd _ca _c-enzrfpb _c-enzwzjc _c-enzykdd _c-enzzrge _c-eo0c6sf _c-1uotwbwg _c-bc1l9oh _dg _dbh _eb _fb _f-1x99dloc an yj zj";
const $9bbc115952dac5a6$var$footer = " . _9-3t1y _ca _c-enzrfpb _c-enzwzjc _c-enzykdd _c-enzzrge _c-eo0c6sf _c-1uotwbwg _c-bc1l9oh _dg _dbh _eb _fb _f-1x99dloc an";
const $9bbc115952dac5a6$var$buttonGroup = " . y_d rb";
const $9bbc115952dac5a6$export$6af31f836f9aa6f2 = " . _Zd _6b _9-3t1y p-17zqamw __na _La _ca _c-enzrfpb _c-enzwzjc _c-enzykdd _c-enzzrge _c-eo0c6sf _c-1uotwbwg _c-bc1l9oh _v-17zqamw _w-17zqamw _x-17zqamw _y-17zqamw __va __wa";
const $9bbc115952dac5a6$export$3ddf2d174ce01153 = /*#__PURE__*/ (0, $9Rtwv$forwardRef)(function Dialog(props, ref) {
    let { size: size = 'M', isDismissible: isDismissible, isKeyboardDismissDisabled: isKeyboardDismissDisabled } = props;
    let domRef = (0, $9Rtwv$useDOMRef)(ref);
    return /*#__PURE__*/ (0, $9Rtwv$jsx)((0, $c46d159bd615e407$export$2b77a92f1a5ad772), {
        size: size,
        isDismissable: isDismissible,
        isKeyboardDismissDisabled: isKeyboardDismissDisabled,
        children: /*#__PURE__*/ (0, $9Rtwv$jsx)((0, $9Rtwv$Dialog), {
            ...props,
            ref: domRef,
            style: props.UNSAFE_style,
            className: (props.UNSAFE_className || '') + $9bbc115952dac5a6$export$6af31f836f9aa6f2,
            children: (0, $9Rtwv$composeRenderProps)(props.children, (children)=>// Render the children multiple times inside the wrappers we need to implement the layout.
                // Each instance hides certain children so that they are all rendered in the correct locations.
                // Reset OverlayTriggerStateContext so the buttons inside the dialog don't retain their hover state.
                /*#__PURE__*/ (0, $9Rtwv$jsxs)((0, $9Rtwv$OverlayTriggerStateContext).Provider, {
                    value: null,
                    children: [
                        /*#__PURE__*/ (0, $9Rtwv$jsx)((0, $9Rtwv$Provider), {
                            values: [
                                [
                                    (0, $dbd6f0b2503b938c$export$8151eb379fcf2442),
                                    {
                                        styles: $9bbc115952dac5a6$var$image
                                    }
                                ],
                                [
                                    (0, $8e847109a6ab556d$export$d688439359537581),
                                    {
                                        isHidden: true
                                    }
                                ],
                                [
                                    (0, $8e847109a6ab556d$export$e0e4026c12a8bdbb),
                                    {
                                        isHidden: true
                                    }
                                ],
                                [
                                    (0, $8e847109a6ab556d$export$1cbdd774077931b4),
                                    {
                                        isHidden: true
                                    }
                                ],
                                [
                                    (0, $8e847109a6ab556d$export$5630640b68817ed6),
                                    {
                                        isHidden: true
                                    }
                                ],
                                [
                                    (0, $472eaa9a9b344b9a$export$4c574c91bb0be0e2),
                                    {
                                        isHidden: true
                                    }
                                ]
                            ],
                            children: children
                        }),
                        /*#__PURE__*/ (0, $9Rtwv$jsxs)("div", {
                            className: function anonymous(props) {
                                let rules = " .";
                                rules += ' _Zd';
                                rules += ' _1a';
                                rules += ' je';
                                rules += ' yj';
                                if (props.isDismissible) rules += ' ze';
                                else rules += ' zj';
                                rules += ' Ae';
                                return rules;
                            }({
                                isDismissible: props.isDismissible
                            }),
                            children: [
                                /*#__PURE__*/ (0, $9Rtwv$jsx)("div", {
                                    className: " . _Zd _9-3t1y Ag A-15rr5u6a Bf B-15rr5u6a jh id _6b _6ca _1a _1cc",
                                    children: /*#__PURE__*/ (0, $9Rtwv$jsx)((0, $9Rtwv$Provider), {
                                        values: [
                                            [
                                                (0, $dbd6f0b2503b938c$export$8151eb379fcf2442),
                                                {
                                                    hidden: true
                                                }
                                            ],
                                            [
                                                (0, $8e847109a6ab556d$export$d688439359537581),
                                                {
                                                    styles: $9bbc115952dac5a6$var$heading
                                                }
                                            ],
                                            [
                                                (0, $8e847109a6ab556d$export$e0e4026c12a8bdbb),
                                                {
                                                    styles: $9bbc115952dac5a6$var$header
                                                }
                                            ],
                                            [
                                                (0, $8e847109a6ab556d$export$1cbdd774077931b4),
                                                {
                                                    isHidden: true
                                                }
                                            ],
                                            [
                                                (0, $8e847109a6ab556d$export$5630640b68817ed6),
                                                {
                                                    isHidden: true
                                                }
                                            ],
                                            [
                                                (0, $472eaa9a9b344b9a$export$4c574c91bb0be0e2),
                                                {
                                                    isHidden: true
                                                }
                                            ]
                                        ],
                                        children: children
                                    })
                                }),
                                props.isDismissible && /*#__PURE__*/ (0, $9Rtwv$jsx)((0, $a9cda54c4f47ce52$export$de65de8213222d10), {
                                    styles: " . Be"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, $9Rtwv$jsx)((0, $9Rtwv$Provider), {
                            values: [
                                [
                                    (0, $dbd6f0b2503b938c$export$8151eb379fcf2442),
                                    {
                                        hidden: true
                                    }
                                ],
                                [
                                    (0, $8e847109a6ab556d$export$d688439359537581),
                                    {
                                        isHidden: true
                                    }
                                ],
                                [
                                    (0, $8e847109a6ab556d$export$e0e4026c12a8bdbb),
                                    {
                                        isHidden: true
                                    }
                                ],
                                [
                                    (0, $8e847109a6ab556d$export$1cbdd774077931b4),
                                    {
                                        styles: $9bbc115952dac5a6$var$content
                                    }
                                ],
                                [
                                    (0, $8e847109a6ab556d$export$5630640b68817ed6),
                                    {
                                        isHidden: true
                                    }
                                ],
                                [
                                    (0, $472eaa9a9b344b9a$export$4c574c91bb0be0e2),
                                    {
                                        isHidden: true
                                    }
                                ]
                            ],
                            children: children
                        }),
                        /*#__PURE__*/ (0, $9Rtwv$jsx)("div", {
                            className: " . _Zd Cj Dj Fj Ej E-15rr5u6a ih jh _1c _7a",
                            children: /*#__PURE__*/ (0, $9Rtwv$jsx)((0, $9Rtwv$Provider), {
                                values: [
                                    [
                                        (0, $dbd6f0b2503b938c$export$8151eb379fcf2442),
                                        {
                                            hidden: true
                                        }
                                    ],
                                    [
                                        (0, $8e847109a6ab556d$export$d688439359537581),
                                        {
                                            isHidden: true
                                        }
                                    ],
                                    [
                                        (0, $8e847109a6ab556d$export$e0e4026c12a8bdbb),
                                        {
                                            isHidden: true
                                        }
                                    ],
                                    [
                                        (0, $8e847109a6ab556d$export$1cbdd774077931b4),
                                        {
                                            isHidden: true
                                        }
                                    ],
                                    [
                                        (0, $8e847109a6ab556d$export$5630640b68817ed6),
                                        {
                                            styles: $9bbc115952dac5a6$var$footer
                                        }
                                    ],
                                    [
                                        (0, $472eaa9a9b344b9a$export$4c574c91bb0be0e2),
                                        {
                                            isHidden: props.isDismissible,
                                            styles: $9bbc115952dac5a6$var$buttonGroup,
                                            align: 'end'
                                        }
                                    ]
                                ],
                                children: children
                            })
                        })
                    ]
                }))
        })
    });
});


export {$9bbc115952dac5a6$export$6af31f836f9aa6f2 as dialogInner, $9bbc115952dac5a6$export$3ddf2d174ce01153 as Dialog};
//# sourceMappingURL=Dialog.mjs.map
