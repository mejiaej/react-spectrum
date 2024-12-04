require("./ToggleButton.css");
var $6e265ff388155b91$exports = require("./ActionButton.cjs");
var $e991cbcdf82ced71$exports = require("./CenterBaseline.cjs");
var $bde97c91243ed164$exports = require("../icons/Icon.cjs");
var $2061c83559b50a66$exports = require("./pressScale.cjs");
var $5eb75e0c130e0669$exports = require("../icons/Skeleton.cjs");
var $6367bc87eb7d24ad$exports = require("./Content.cjs");
var $428d056a8f9b19e5$exports = require("./ToggleButtonGroup.cjs");
var $bfa4962d90c8af48$exports = require("./Form.cjs");
var $ac757a4c2bd72aee$exports = require("../icons/useSpectrumContextProps.cjs");
var $kyLWK$reactjsxruntime = require("react/jsx-runtime");
var $kyLWK$reactariacomponents = require("react-aria-components");
var $kyLWK$react = require("react");
var $kyLWK$reactspectrumutils = require("@react-spectrum/utils");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "ToggleButtonContext", () => $d16e5203405a91b7$export$43506d75ebd2e218);
$parcel$export(module.exports, "ToggleButton", () => $d16e5203405a91b7$export$d2b052e7b4be1756);
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












const $d16e5203405a91b7$export$43506d75ebd2e218 = /*#__PURE__*/ (0, $kyLWK$react.createContext)(null);
const $d16e5203405a91b7$export$d2b052e7b4be1756 = /*#__PURE__*/ (0, $kyLWK$react.forwardRef)(function ToggleButton(props, ref) {
    [props, ref] = (0, $ac757a4c2bd72aee$exports.useSpectrumContextProps)(props, ref, $d16e5203405a91b7$export$43506d75ebd2e218);
    props = (0, $bfa4962d90c8af48$exports.useFormProps)(props);
    let domRef = (0, $kyLWK$reactspectrumutils.useFocusableRef)(ref);
    let ctx = (0, $kyLWK$reactariacomponents.useSlottedContext)((0, $428d056a8f9b19e5$exports.ToggleButtonGroupContext));
    let isInGroup = !!ctx;
    let { density: density = 'regular', isJustified: isJustified, orientation: orientation = 'horizontal', staticColor: staticColor = props.staticColor, isQuiet: isQuiet = props.isQuiet, isEmphasized: isEmphasized = props.isEmphasized, size: size = props.size || 'M', isDisabled: isDisabled = props.isDisabled } = ctx || {};
    return /*#__PURE__*/ (0, $kyLWK$reactjsxruntime.jsx)((0, $kyLWK$reactariacomponents.ToggleButton), {
        ...props,
        isDisabled: isDisabled,
        ref: domRef,
        style: (0, $2061c83559b50a66$exports.pressScale)(domRef, props.UNSAFE_style),
        className: (renderProps)=>(props.UNSAFE_className || '') + (0, $6e265ff388155b91$exports.btnStyles)({
                ...renderProps,
                staticColor: staticColor,
                size: size,
                isQuiet: isQuiet,
                isEmphasized: isEmphasized,
                isPending: false,
                density: density,
                isJustified: isJustified,
                orientation: orientation,
                isInGroup: isInGroup
            }, props.styles),
        children: /*#__PURE__*/ (0, $kyLWK$reactjsxruntime.jsx)((0, $kyLWK$reactariacomponents.Provider), {
            values: [
                [
                    (0, $5eb75e0c130e0669$exports.SkeletonContext),
                    null
                ],
                [
                    (0, $6367bc87eb7d24ad$exports.TextContext),
                    {
                        styles: " . E-1gogtue F-1gogtue __A-3t1y __vb __wb _ma _pb"
                    }
                ],
                [
                    (0, $bde97c91243ed164$exports.IconContext),
                    {
                        render: (0, $e991cbcdf82ced71$exports.centerBaseline)({
                            slot: 'icon',
                            styles: " . __A-3t1x"
                        }),
                        styles: " . l-1sthc3k k-1sthc3k y-oelgqu _8-3t1x"
                    }
                ]
            ],
            children: typeof props.children === 'string' ? /*#__PURE__*/ (0, $kyLWK$reactjsxruntime.jsx)((0, $6367bc87eb7d24ad$exports.Text), {
                children: props.children
            }) : props.children
        })
    });
});


//# sourceMappingURL=ToggleButton.cjs.map
