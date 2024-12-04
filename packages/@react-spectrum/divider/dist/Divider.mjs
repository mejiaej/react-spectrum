import "./vars.e377bd1e.css";
import $budPV$rule_vars_cssmodulejs from "./rule_vars_css.mjs";
import {useSlotProps as $budPV$useSlotProps, useDOMRef as $budPV$useDOMRef, useStyleProps as $budPV$useStyleProps, classNames as $budPV$classNames} from "@react-spectrum/utils";
import $budPV$react from "react";
import {useSeparator as $budPV$useSeparator} from "@react-aria/separator";


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
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



let $269e81ee206e9515$var$sizeMap = {
    S: 'small',
    M: 'medium',
    L: 'large'
};
const $269e81ee206e9515$export$2e0a83ec2e27ecbb = /*#__PURE__*/ (0, $budPV$react).forwardRef(function Divider(props, ref) {
    props = (0, $budPV$useSlotProps)(props, 'divider');
    let { size: size = 'L', orientation: orientation = 'horizontal', ...otherProps } = props;
    let domRef = (0, $budPV$useDOMRef)(ref);
    let { styleProps: styleProps } = (0, $budPV$useStyleProps)(otherProps);
    let weight = $269e81ee206e9515$var$sizeMap[size];
    let Element = 'hr';
    if (orientation === 'vertical') Element = 'div';
    let { separatorProps: separatorProps } = (0, $budPV$useSeparator)({
        ...props,
        elementType: Element
    });
    return /*#__PURE__*/ (0, $budPV$react).createElement(Element, {
        ...styleProps,
        className: (0, $budPV$classNames)((0, ($parcel$interopDefault($budPV$rule_vars_cssmodulejs))), 'spectrum-Rule', `spectrum-Rule--${weight}`, {
            'spectrum-Rule--vertical': orientation === 'vertical',
            'spectrum-Rule--horizontal': orientation === 'horizontal'
        }, styleProps.className),
        // @ts-ignore https://github.com/Microsoft/TypeScript/issues/28892
        ref: domRef,
        ...separatorProps
    });
});


export {$269e81ee206e9515$export$2e0a83ec2e27ecbb as Divider};
//# sourceMappingURL=Divider.module.js.map
