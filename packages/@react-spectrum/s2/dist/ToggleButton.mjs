import "./ToggleButton.css";
import {btnStyles as $da878a05ab4a403e$export$446543cff2a0f496} from "./ActionButton.mjs";
import {centerBaseline as $1f4b04be3f24aae3$export$9d7e2342a7e53afa} from "./CenterBaseline.mjs";
import {IconContext as $ac8c32e6775ddd1f$export$a49f528ae1a4d0ed} from "../icons/Icon.mjs";
import {pressScale as $10ea7662e51a285b$export$56e8cba416805d8d} from "./pressScale.mjs";
import {SkeletonContext as $5ad421ec19460c48$export$74e166679b1f49ee} from "../icons/Skeleton.mjs";
import {Text as $8e847109a6ab556d$export$5f1af8db9871e1d6, TextContext as $8e847109a6ab556d$export$9afb8bc826b033ea} from "./Content.mjs";
import {ToggleButtonGroupContext as $b891af863738b7d4$export$298258635ae0dd97} from "./ToggleButtonGroup.mjs";
import {useFormProps as $9b916426527cebe7$export$a6b5be5c6b451665} from "./Form.mjs";
import {useSpectrumContextProps as $5ce63c423902f47d$export$764f6146fadd77f7} from "../icons/useSpectrumContextProps.mjs";
import {jsx as $fpet3$jsx} from "react/jsx-runtime";
import {useSlottedContext as $fpet3$useSlottedContext, ToggleButton as $fpet3$ToggleButton, Provider as $fpet3$Provider} from "react-aria-components";
import {createContext as $fpet3$createContext, forwardRef as $fpet3$forwardRef} from "react";
import {useFocusableRef as $fpet3$useFocusableRef} from "@react-spectrum/utils";

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












const $fe4c9df7420c3c9f$export$43506d75ebd2e218 = /*#__PURE__*/ (0, $fpet3$createContext)(null);
const $fe4c9df7420c3c9f$export$d2b052e7b4be1756 = /*#__PURE__*/ (0, $fpet3$forwardRef)(function ToggleButton(props, ref) {
    [props, ref] = (0, $5ce63c423902f47d$export$764f6146fadd77f7)(props, ref, $fe4c9df7420c3c9f$export$43506d75ebd2e218);
    props = (0, $9b916426527cebe7$export$a6b5be5c6b451665)(props);
    let domRef = (0, $fpet3$useFocusableRef)(ref);
    let ctx = (0, $fpet3$useSlottedContext)((0, $b891af863738b7d4$export$298258635ae0dd97));
    let isInGroup = !!ctx;
    let { density: density = 'regular', isJustified: isJustified, orientation: orientation = 'horizontal', staticColor: staticColor = props.staticColor, isQuiet: isQuiet = props.isQuiet, isEmphasized: isEmphasized = props.isEmphasized, size: size = props.size || 'M', isDisabled: isDisabled = props.isDisabled } = ctx || {};
    return /*#__PURE__*/ (0, $fpet3$jsx)((0, $fpet3$ToggleButton), {
        ...props,
        isDisabled: isDisabled,
        ref: domRef,
        style: (0, $10ea7662e51a285b$export$56e8cba416805d8d)(domRef, props.UNSAFE_style),
        className: (renderProps)=>(props.UNSAFE_className || '') + (0, $da878a05ab4a403e$export$446543cff2a0f496)({
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
        children: /*#__PURE__*/ (0, $fpet3$jsx)((0, $fpet3$Provider), {
            values: [
                [
                    (0, $5ad421ec19460c48$export$74e166679b1f49ee),
                    null
                ],
                [
                    (0, $8e847109a6ab556d$export$9afb8bc826b033ea),
                    {
                        styles: " . E-1gogtue F-1gogtue __A-3t1y __vb __wb _ma _pb"
                    }
                ],
                [
                    (0, $ac8c32e6775ddd1f$export$a49f528ae1a4d0ed),
                    {
                        render: (0, $1f4b04be3f24aae3$export$9d7e2342a7e53afa)({
                            slot: 'icon',
                            styles: " . __A-3t1x"
                        }),
                        styles: " . l-1sthc3k k-1sthc3k y-oelgqu _8-3t1x"
                    }
                ]
            ],
            children: typeof props.children === 'string' ? /*#__PURE__*/ (0, $fpet3$jsx)((0, $8e847109a6ab556d$export$5f1af8db9871e1d6), {
                children: props.children
            }) : props.children
        })
    });
});


export {$fe4c9df7420c3c9f$export$43506d75ebd2e218 as ToggleButtonContext, $fe4c9df7420c3c9f$export$d2b052e7b4be1756 as ToggleButton};
//# sourceMappingURL=ToggleButton.mjs.map
