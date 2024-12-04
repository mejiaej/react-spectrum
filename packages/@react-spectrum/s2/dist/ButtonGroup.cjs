require("./ButtonGroup.css");
var $25d06cf8d4e72761$exports = require("./Button.cjs");
var $ac757a4c2bd72aee$exports = require("../icons/useSpectrumContextProps.cjs");
var $5rFNy$reactjsxruntime = require("react/jsx-runtime");
var $5rFNy$reactariacomponents = require("react-aria-components");
var $5rFNy$react = require("react");
var $5rFNy$reactspectrumutils = require("@react-spectrum/utils");
var $5rFNy$reactariautils = require("@react-aria/utils");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "ButtonGroupContext", () => $e1016b8947dbadb8$export$4c574c91bb0be0e2);
$parcel$export(module.exports, "ButtonGroup", () => $e1016b8947dbadb8$export$69b1032f2ecdf404);
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






const $e1016b8947dbadb8$export$4c574c91bb0be0e2 = /*#__PURE__*/ (0, $5rFNy$react.createContext)({});
const $e1016b8947dbadb8$var$buttongroup = function anonymous(props, overrides) {
    let rules = " .";
    let matches = (overrides || '').match(/(?:^|\s)(?:y|z|A|B|_9|_8|h|_5|_4|__A|__c|__d|__a|__b|U|__Q|X|Z|V|W|l|q|r)[^\s]+/g) || [];
    rules += matches.join('');
    let $U = false;
    for (let p of matches)if (/^\s*U/.test(p)) $U = true;
    rules += ' _Ze';
    if (!$U) rules += ' Uc';
    if (props.size === "XL") rules += ' ie';
    else if (props.size === "L") rules += ' ie';
    else if (props.size === "M") rules += ' ie';
    else if (props.size === "S") rules += ' id';
    if (props.size === "XL") rules += ' je';
    else if (props.size === "L") rules += ' je';
    else if (props.size === "M") rules += ' je';
    else if (props.size === "S") rules += ' jd';
    if (props.orientation === "vertical") rules += ' _6b';
    else rules += ' _6a';
    if (props.orientation === "vertical") {
        if (props.align === "center") rules += ' _1c';
        else if (props.align === "end") rules += ' _1b';
        else rules += ' _1a';
    } else rules += ' _1c';
    if (props.orientation === "vertical") {
        if (props.align === "center") rules += ' _2d';
        else if (props.align === "end") rules += ' _2c';
        else rules += ' _2b';
    }
    return rules;
};
const $e1016b8947dbadb8$export$69b1032f2ecdf404 = /*#__PURE__*/ (0, $5rFNy$react.forwardRef)(function ButtonGroup(props, ref) {
    [props, ref] = (0, $ac757a4c2bd72aee$exports.useSpectrumContextProps)(props, ref, $e1016b8947dbadb8$export$4c574c91bb0be0e2);
    let domRef = (0, $5rFNy$reactspectrumutils.useDOMRef)(ref);
    let { size: size = 'M', orientation: orientation = 'horizontal', align: align = 'start', children: children, isDisabled: isDisabled } = props;
    let [hasOverflow, setHasOverflow] = (0, $5rFNy$reactariautils.useValueEffect)(false);
    let checkForOverflow = (0, $5rFNy$react.useCallback)(()=>{
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
        setHasOverflow,
        children
    ]);
    // There are two main reasons we need to remeasure:
    // 1. Internal changes: Check for initial overflow or when orientation/scale/children change (from checkForOverflow dep array)
    (0, $5rFNy$reactariautils.useLayoutEffect)(()=>{
        checkForOverflow();
    }, [
        checkForOverflow
    ]);
    // 2. External changes: buttongroup won't change size due to any parents changing size, so listen to its container for size changes to figure out if we should remeasure
    let parent = (0, $5rFNy$react.useRef)(null);
    (0, $5rFNy$reactariautils.useLayoutEffect)(()=>{
        if (domRef.current) parent.current = domRef.current.parentElement;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        domRef.current
    ]);
    (0, $5rFNy$reactspectrumutils.useResizeObserver)({
        ref: parent,
        onResize: checkForOverflow
    });
    if (props.isHidden) return null;
    let context = {
        styles: " . _8-3t1x",
        size: size,
        isDisabled: isDisabled
    };
    return /*#__PURE__*/ (0, $5rFNy$reactjsxruntime.jsx)("div", {
        ref: domRef,
        style: props.UNSAFE_style,
        className: (props.UNSAFE_className || '') + $e1016b8947dbadb8$var$buttongroup({
            align: align,
            orientation: orientation === 'vertical' || hasOverflow ? 'vertical' : 'horizontal',
            size: size
        }, props.styles),
        children: /*#__PURE__*/ (0, $5rFNy$reactjsxruntime.jsx)((0, $5rFNy$reactariacomponents.Provider), {
            values: [
                [
                    (0, $25d06cf8d4e72761$exports.ButtonContext),
                    context
                ],
                [
                    (0, $25d06cf8d4e72761$exports.LinkButtonContext),
                    context
                ]
            ],
            children: children
        })
    });
});


//# sourceMappingURL=ButtonGroup.cjs.map
