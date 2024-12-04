import "./vars.9d4a6a55.css";
import $i2wAT$buttongroup_vars_cssmodulejs from "./buttongroup_vars_css.mjs";
import {useSlotProps as $i2wAT$useSlotProps, useStyleProps as $i2wAT$useStyleProps, useDOMRef as $i2wAT$useDOMRef, useResizeObserver as $i2wAT$useResizeObserver, classNames as $i2wAT$classNames, SlotProvider as $i2wAT$SlotProvider} from "@react-spectrum/utils";
import {useValueEffect as $i2wAT$useValueEffect, useLayoutEffect as $i2wAT$useLayoutEffect, filterDOMProps as $i2wAT$filterDOMProps} from "@react-aria/utils";
import {useProvider as $i2wAT$useProvider, useProviderProps as $i2wAT$useProviderProps, Provider as $i2wAT$Provider} from "@react-spectrum/provider";
import $i2wAT$react, {useCallback as $i2wAT$useCallback, useRef as $i2wAT$useRef} from "react";


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




const $bd4bfa55854eb3bf$export$69b1032f2ecdf404 = /*#__PURE__*/ (0, $i2wAT$react).forwardRef(function ButtonGroup(props, ref) {
    let { scale: scale } = (0, $i2wAT$useProvider)();
    props = (0, $i2wAT$useProviderProps)(props);
    props = (0, $i2wAT$useSlotProps)(props, 'buttonGroup');
    let { children: children, orientation: orientation = 'horizontal', isDisabled: isDisabled, align: align = 'start', ...otherProps } = props;
    let { styleProps: styleProps } = (0, $i2wAT$useStyleProps)(otherProps);
    let domRef = (0, $i2wAT$useDOMRef)(ref);
    let [hasOverflow, setHasOverflow] = (0, $i2wAT$useValueEffect)(false);
    let checkForOverflow = (0, $i2wAT$useCallback)(()=>{
        let computeHasOverflow = ()=>{
            if (domRef.current && orientation === 'horizontal') {
                let buttonGroupChildren = Array.from(domRef.current.children);
                let maxX = domRef.current.offsetWidth + 1; // + 1 to account for rounding errors
                // If any buttons have negative X positions (align="end") or extend beyond
                // the width of the button group (align="start"), then switch to vertical.
                if (buttonGroupChildren.some((child)=>child.offsetLeft < 0 || child.offsetLeft + child.offsetWidth > maxX)) return true;
                return false;
            }
        };
        if (orientation === 'horizontal') setHasOverflow(function*() {
            // Force to horizontal for measurement.
            yield false;
            // Measure, and update if there is overflow.
            yield computeHasOverflow();
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        domRef,
        orientation,
        scale,
        setHasOverflow,
        children
    ]);
    // There are two main reasons we need to remeasure:
    // 1. Internal changes: Check for initial overflow or when orientation/scale/children change (from checkForOverflow dep array)
    (0, $i2wAT$useLayoutEffect)(()=>{
        checkForOverflow();
    }, [
        checkForOverflow
    ]);
    // 2. External changes: buttongroup won't change size due to any parents changing size, so listen to its container for size changes to figure out if we should remeasure
    let parent = (0, $i2wAT$useRef)(undefined);
    (0, $i2wAT$useLayoutEffect)(()=>{
        if (domRef.current) parent.current = domRef.current.parentElement;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        domRef.current
    ]);
    (0, $i2wAT$useResizeObserver)({
        ref: parent,
        onResize: checkForOverflow
    });
    return /*#__PURE__*/ (0, $i2wAT$react).createElement("div", {
        ...(0, $i2wAT$filterDOMProps)(otherProps),
        ...styleProps,
        ref: domRef,
        className: (0, $i2wAT$classNames)((0, ($parcel$interopDefault($i2wAT$buttongroup_vars_cssmodulejs))), 'spectrum-ButtonGroup', {
            'spectrum-ButtonGroup--vertical': orientation === 'vertical' || hasOverflow,
            'spectrum-ButtonGroup--alignEnd': align === 'end',
            'spectrum-ButtonGroup--alignCenter': align === 'center'
        }, styleProps.className)
    }, /*#__PURE__*/ (0, $i2wAT$react).createElement((0, $i2wAT$SlotProvider), {
        slots: {
            button: {
                UNSAFE_className: (0, $i2wAT$classNames)((0, ($parcel$interopDefault($i2wAT$buttongroup_vars_cssmodulejs))), 'spectrum-ButtonGroup-Button')
            }
        }
    }, /*#__PURE__*/ (0, $i2wAT$react).createElement((0, $i2wAT$Provider), {
        isDisabled: isDisabled
    }, children)));
});


export {$bd4bfa55854eb3bf$export$69b1032f2ecdf404 as ButtonGroup};
//# sourceMappingURL=ButtonGroup.module.js.map
