require("./vars.9d4a6a55.css");
var $2e9803b3bbead7d0$exports = require("./buttongroup_vars_css.main.js");
var $6iGPs$reactspectrumutils = require("@react-spectrum/utils");
var $6iGPs$reactariautils = require("@react-aria/utils");
var $6iGPs$reactspectrumprovider = require("@react-spectrum/provider");
var $6iGPs$react = require("react");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "ButtonGroup", () => $d384d3249418a107$export$69b1032f2ecdf404);
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




const $d384d3249418a107$export$69b1032f2ecdf404 = /*#__PURE__*/ (0, ($parcel$interopDefault($6iGPs$react))).forwardRef(function ButtonGroup(props, ref) {
    let { scale: scale } = (0, $6iGPs$reactspectrumprovider.useProvider)();
    props = (0, $6iGPs$reactspectrumprovider.useProviderProps)(props);
    props = (0, $6iGPs$reactspectrumutils.useSlotProps)(props, 'buttonGroup');
    let { children: children, orientation: orientation = 'horizontal', isDisabled: isDisabled, align: align = 'start', ...otherProps } = props;
    let { styleProps: styleProps } = (0, $6iGPs$reactspectrumutils.useStyleProps)(otherProps);
    let domRef = (0, $6iGPs$reactspectrumutils.useDOMRef)(ref);
    let [hasOverflow, setHasOverflow] = (0, $6iGPs$reactariautils.useValueEffect)(false);
    let checkForOverflow = (0, $6iGPs$react.useCallback)(()=>{
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
    (0, $6iGPs$reactariautils.useLayoutEffect)(()=>{
        checkForOverflow();
    }, [
        checkForOverflow
    ]);
    // 2. External changes: buttongroup won't change size due to any parents changing size, so listen to its container for size changes to figure out if we should remeasure
    let parent = (0, $6iGPs$react.useRef)(undefined);
    (0, $6iGPs$reactariautils.useLayoutEffect)(()=>{
        if (domRef.current) parent.current = domRef.current.parentElement;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        domRef.current
    ]);
    (0, $6iGPs$reactspectrumutils.useResizeObserver)({
        ref: parent,
        onResize: checkForOverflow
    });
    return /*#__PURE__*/ (0, ($parcel$interopDefault($6iGPs$react))).createElement("div", {
        ...(0, $6iGPs$reactariautils.filterDOMProps)(otherProps),
        ...styleProps,
        ref: domRef,
        className: (0, $6iGPs$reactspectrumutils.classNames)((0, ($parcel$interopDefault($2e9803b3bbead7d0$exports))), 'spectrum-ButtonGroup', {
            'spectrum-ButtonGroup--vertical': orientation === 'vertical' || hasOverflow,
            'spectrum-ButtonGroup--alignEnd': align === 'end',
            'spectrum-ButtonGroup--alignCenter': align === 'center'
        }, styleProps.className)
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($6iGPs$react))).createElement((0, $6iGPs$reactspectrumutils.SlotProvider), {
        slots: {
            button: {
                UNSAFE_className: (0, $6iGPs$reactspectrumutils.classNames)((0, ($parcel$interopDefault($2e9803b3bbead7d0$exports))), 'spectrum-ButtonGroup-Button')
            }
        }
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($6iGPs$react))).createElement((0, $6iGPs$reactspectrumprovider.Provider), {
        isDisabled: isDisabled
    }, children)));
});


//# sourceMappingURL=ButtonGroup.main.js.map
