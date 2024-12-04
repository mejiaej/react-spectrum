require("./Dialog.css");
var $e1016b8947dbadb8$exports = require("./ButtonGroup.cjs");
var $2f907cb84c6e9e75$exports = require("./CloseButton.cjs");
var $6367bc87eb7d24ad$exports = require("./Content.cjs");
var $053b76ed3d29e13b$exports = require("./Image.cjs");
var $8e678305a8c10028$exports = require("./Modal.cjs");
var $WjfVF$reactjsxruntime = require("react/jsx-runtime");
var $WjfVF$reactariacomponents = require("react-aria-components");
var $WjfVF$react = require("react");
var $WjfVF$reactspectrumutils = require("@react-spectrum/utils");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "dialogInner", () => $0f4636c7093b9233$export$6af31f836f9aa6f2);
$parcel$export(module.exports, "Dialog", () => $0f4636c7093b9233$export$3ddf2d174ce01153);
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








const $0f4636c7093b9233$var$image = " . lb k__E __Nb";
const $0f4636c7093b9233$var$heading = " . _9-3t1y Aa Ba _ca _c-enzrfpb _c-enzwzjc _c-enzykdd _c-enzzrge _c-eo0c6sf _c-1uotwbwg _c-bc1l9oh _dj _dbm _ee _e-1x99dloe _fa _f-1x99dlob ao";
const $0f4636c7093b9233$var$header = " . _ca _c-enzrfpb _c-enzwzjc _c-enzykdd _c-enzzrge _c-eo0c6sf _c-1uotwbwg _c-bc1l9oh _di _dbj _eb _fb _f-1x99dloc an";
const $0f4636c7093b9233$var$content = " . _9-3t1y __wa __w-l92dlrd _ca _c-enzrfpb _c-enzwzjc _c-enzykdd _c-enzzrge _c-eo0c6sf _c-1uotwbwg _c-bc1l9oh _dg _dbh _eb _fb _f-1x99dloc an yj zj";
const $0f4636c7093b9233$var$footer = " . _9-3t1y _ca _c-enzrfpb _c-enzwzjc _c-enzykdd _c-enzzrge _c-eo0c6sf _c-1uotwbwg _c-bc1l9oh _dg _dbh _eb _fb _f-1x99dloc an";
const $0f4636c7093b9233$var$buttonGroup = " . y_d rb";
const $0f4636c7093b9233$export$6af31f836f9aa6f2 = " . _Zd _6b _9-3t1y p-17zqamw __na _La _ca _c-enzrfpb _c-enzwzjc _c-enzykdd _c-enzzrge _c-eo0c6sf _c-1uotwbwg _c-bc1l9oh _v-17zqamw _w-17zqamw _x-17zqamw _y-17zqamw __va __wa";
const $0f4636c7093b9233$export$3ddf2d174ce01153 = /*#__PURE__*/ (0, $WjfVF$react.forwardRef)(function Dialog(props, ref) {
    let { size: size = 'M', isDismissible: isDismissible, isKeyboardDismissDisabled: isKeyboardDismissDisabled } = props;
    let domRef = (0, $WjfVF$reactspectrumutils.useDOMRef)(ref);
    return /*#__PURE__*/ (0, $WjfVF$reactjsxruntime.jsx)((0, $8e678305a8c10028$exports.Modal), {
        size: size,
        isDismissable: isDismissible,
        isKeyboardDismissDisabled: isKeyboardDismissDisabled,
        children: /*#__PURE__*/ (0, $WjfVF$reactjsxruntime.jsx)((0, $WjfVF$reactariacomponents.Dialog), {
            ...props,
            ref: domRef,
            style: props.UNSAFE_style,
            className: (props.UNSAFE_className || '') + $0f4636c7093b9233$export$6af31f836f9aa6f2,
            children: (0, $WjfVF$reactariacomponents.composeRenderProps)(props.children, (children)=>// Render the children multiple times inside the wrappers we need to implement the layout.
                // Each instance hides certain children so that they are all rendered in the correct locations.
                // Reset OverlayTriggerStateContext so the buttons inside the dialog don't retain their hover state.
                /*#__PURE__*/ (0, $WjfVF$reactjsxruntime.jsxs)((0, $WjfVF$reactariacomponents.OverlayTriggerStateContext).Provider, {
                    value: null,
                    children: [
                        /*#__PURE__*/ (0, $WjfVF$reactjsxruntime.jsx)((0, $WjfVF$reactariacomponents.Provider), {
                            values: [
                                [
                                    (0, $053b76ed3d29e13b$exports.ImageContext),
                                    {
                                        styles: $0f4636c7093b9233$var$image
                                    }
                                ],
                                [
                                    (0, $6367bc87eb7d24ad$exports.HeadingContext),
                                    {
                                        isHidden: true
                                    }
                                ],
                                [
                                    (0, $6367bc87eb7d24ad$exports.HeaderContext),
                                    {
                                        isHidden: true
                                    }
                                ],
                                [
                                    (0, $6367bc87eb7d24ad$exports.ContentContext),
                                    {
                                        isHidden: true
                                    }
                                ],
                                [
                                    (0, $6367bc87eb7d24ad$exports.FooterContext),
                                    {
                                        isHidden: true
                                    }
                                ],
                                [
                                    (0, $e1016b8947dbadb8$exports.ButtonGroupContext),
                                    {
                                        isHidden: true
                                    }
                                ]
                            ],
                            children: children
                        }),
                        /*#__PURE__*/ (0, $WjfVF$reactjsxruntime.jsxs)("div", {
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
                                /*#__PURE__*/ (0, $WjfVF$reactjsxruntime.jsx)("div", {
                                    className: " . _Zd _9-3t1y Ag A-15rr5u6a Bf B-15rr5u6a jh id _6b _6ca _1a _1cc",
                                    children: /*#__PURE__*/ (0, $WjfVF$reactjsxruntime.jsx)((0, $WjfVF$reactariacomponents.Provider), {
                                        values: [
                                            [
                                                (0, $053b76ed3d29e13b$exports.ImageContext),
                                                {
                                                    hidden: true
                                                }
                                            ],
                                            [
                                                (0, $6367bc87eb7d24ad$exports.HeadingContext),
                                                {
                                                    styles: $0f4636c7093b9233$var$heading
                                                }
                                            ],
                                            [
                                                (0, $6367bc87eb7d24ad$exports.HeaderContext),
                                                {
                                                    styles: $0f4636c7093b9233$var$header
                                                }
                                            ],
                                            [
                                                (0, $6367bc87eb7d24ad$exports.ContentContext),
                                                {
                                                    isHidden: true
                                                }
                                            ],
                                            [
                                                (0, $6367bc87eb7d24ad$exports.FooterContext),
                                                {
                                                    isHidden: true
                                                }
                                            ],
                                            [
                                                (0, $e1016b8947dbadb8$exports.ButtonGroupContext),
                                                {
                                                    isHidden: true
                                                }
                                            ]
                                        ],
                                        children: children
                                    })
                                }),
                                props.isDismissible && /*#__PURE__*/ (0, $WjfVF$reactjsxruntime.jsx)((0, $2f907cb84c6e9e75$exports.CloseButton), {
                                    styles: " . Be"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, $WjfVF$reactjsxruntime.jsx)((0, $WjfVF$reactariacomponents.Provider), {
                            values: [
                                [
                                    (0, $053b76ed3d29e13b$exports.ImageContext),
                                    {
                                        hidden: true
                                    }
                                ],
                                [
                                    (0, $6367bc87eb7d24ad$exports.HeadingContext),
                                    {
                                        isHidden: true
                                    }
                                ],
                                [
                                    (0, $6367bc87eb7d24ad$exports.HeaderContext),
                                    {
                                        isHidden: true
                                    }
                                ],
                                [
                                    (0, $6367bc87eb7d24ad$exports.ContentContext),
                                    {
                                        styles: $0f4636c7093b9233$var$content
                                    }
                                ],
                                [
                                    (0, $6367bc87eb7d24ad$exports.FooterContext),
                                    {
                                        isHidden: true
                                    }
                                ],
                                [
                                    (0, $e1016b8947dbadb8$exports.ButtonGroupContext),
                                    {
                                        isHidden: true
                                    }
                                ]
                            ],
                            children: children
                        }),
                        /*#__PURE__*/ (0, $WjfVF$reactjsxruntime.jsx)("div", {
                            className: " . _Zd Cj Dj Fj Ej E-15rr5u6a ih jh _1c _7a",
                            children: /*#__PURE__*/ (0, $WjfVF$reactjsxruntime.jsx)((0, $WjfVF$reactariacomponents.Provider), {
                                values: [
                                    [
                                        (0, $053b76ed3d29e13b$exports.ImageContext),
                                        {
                                            hidden: true
                                        }
                                    ],
                                    [
                                        (0, $6367bc87eb7d24ad$exports.HeadingContext),
                                        {
                                            isHidden: true
                                        }
                                    ],
                                    [
                                        (0, $6367bc87eb7d24ad$exports.HeaderContext),
                                        {
                                            isHidden: true
                                        }
                                    ],
                                    [
                                        (0, $6367bc87eb7d24ad$exports.ContentContext),
                                        {
                                            isHidden: true
                                        }
                                    ],
                                    [
                                        (0, $6367bc87eb7d24ad$exports.FooterContext),
                                        {
                                            styles: $0f4636c7093b9233$var$footer
                                        }
                                    ],
                                    [
                                        (0, $e1016b8947dbadb8$exports.ButtonGroupContext),
                                        {
                                            isHidden: props.isDismissible,
                                            styles: $0f4636c7093b9233$var$buttonGroup,
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


//# sourceMappingURL=Dialog.cjs.map
