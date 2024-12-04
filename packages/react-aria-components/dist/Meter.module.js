import {useContextProps as $64fa3d84918910a7$export$29f1550f4b0d4415, useRenderProps as $64fa3d84918910a7$export$4d86445c2cf5e3, useSlot as $64fa3d84918910a7$export$9d4c57ee4c6ffdd8} from "./utils.module.js";
import {LabelContext as $01b77f81d0f07f68$export$75b6ee27786ba447} from "./Label.module.js";
import {useMeter as $9ESvm$useMeter} from "react-aria";
import {clamp as $9ESvm$clamp} from "@react-stately/utils";
import $9ESvm$react, {createContext as $9ESvm$createContext, forwardRef as $9ESvm$forwardRef} from "react";

/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 




const $c0c9ced265f3594c$export$8b645da15a96b44f = /*#__PURE__*/ (0, $9ESvm$createContext)(null);
const $c0c9ced265f3594c$export$62e3ae2a4090b879 = /*#__PURE__*/ (0, $9ESvm$forwardRef)(function Meter(props, ref) {
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $c0c9ced265f3594c$export$8b645da15a96b44f);
    let { value: value = 0, minValue: minValue = 0, maxValue: maxValue = 100 } = props;
    value = (0, $9ESvm$clamp)(value, minValue, maxValue);
    let [labelRef, label] = (0, $64fa3d84918910a7$export$9d4c57ee4c6ffdd8)();
    let { meterProps: meterProps, labelProps: labelProps } = (0, $9ESvm$useMeter)({
        ...props,
        label: label
    });
    // Calculate the width of the progress bar as a percentage
    let percentage = (value - minValue) / (maxValue - minValue) * 100;
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        defaultClassName: 'react-aria-Meter',
        values: {
            percentage: percentage,
            valueText: meterProps['aria-valuetext']
        }
    });
    return /*#__PURE__*/ (0, $9ESvm$react).createElement("div", {
        ...meterProps,
        ...renderProps,
        ref: ref,
        slot: props.slot || undefined
    }, /*#__PURE__*/ (0, $9ESvm$react).createElement((0, $01b77f81d0f07f68$export$75b6ee27786ba447).Provider, {
        value: {
            ...labelProps,
            ref: labelRef,
            elementType: 'span'
        }
    }, renderProps.children));
});


export {$c0c9ced265f3594c$export$8b645da15a96b44f as MeterContext, $c0c9ced265f3594c$export$62e3ae2a4090b879 as Meter};
//# sourceMappingURL=Meter.module.js.map
