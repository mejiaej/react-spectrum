require("./flex-gap.bf0f97f4.css");
var $12be0ef8be5abc46$exports = require("./flex-gap_css.main.js");
var $1yXrx$reactspectrumutils = require("@react-spectrum/utils");
var $1yXrx$reactariautils = require("@react-aria/utils");
var $1yXrx$react = require("react");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "Flex", () => $a2ef5497697e8437$export$f51f4c4ede09e011);
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



const $a2ef5497697e8437$var$flexStyleProps = {
    direction: [
        'flexDirection',
        (0, $1yXrx$reactspectrumutils.passthroughStyle)
    ],
    wrap: [
        'flexWrap',
        $a2ef5497697e8437$var$flexWrapValue
    ],
    justifyContent: [
        'justifyContent',
        $a2ef5497697e8437$var$flexAlignValue
    ],
    alignItems: [
        'alignItems',
        $a2ef5497697e8437$var$flexAlignValue
    ],
    alignContent: [
        'alignContent',
        $a2ef5497697e8437$var$flexAlignValue
    ]
};
const $a2ef5497697e8437$export$f51f4c4ede09e011 = /*#__PURE__*/ (0, $1yXrx$react.forwardRef)(function Flex(props, ref) {
    let { children: children, ...otherProps } = props;
    let breakpointProvider = (0, $1yXrx$reactspectrumutils.useBreakpoint)();
    let matchedBreakpoints = (breakpointProvider === null || breakpointProvider === void 0 ? void 0 : breakpointProvider.matchedBreakpoints) || [
        'base'
    ];
    let { styleProps: styleProps } = (0, $1yXrx$reactspectrumutils.useStyleProps)(otherProps);
    let { styleProps: flexStyle } = (0, $1yXrx$reactspectrumutils.useStyleProps)(otherProps, $a2ef5497697e8437$var$flexStyleProps);
    let domRef = (0, $1yXrx$reactspectrumutils.useDOMRef)(ref);
    let style = {
        ...styleProps.style,
        ...flexStyle.style
    };
    if (props.gap != null) style.gap = (0, $1yXrx$reactspectrumutils.responsiveDimensionValue)(props.gap, matchedBreakpoints);
    if (props.columnGap != null) style.columnGap = (0, $1yXrx$reactspectrumutils.responsiveDimensionValue)(props.columnGap, matchedBreakpoints);
    if (props.rowGap != null) style.rowGap = (0, $1yXrx$reactspectrumutils.responsiveDimensionValue)(props.rowGap, matchedBreakpoints);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($1yXrx$react))).createElement("div", {
        ...(0, $1yXrx$reactariautils.filterDOMProps)(otherProps),
        className: (0, $1yXrx$reactspectrumutils.classNames)((0, ($parcel$interopDefault($12be0ef8be5abc46$exports))), 'flex', styleProps.className),
        style: style,
        ref: domRef
    }, children);
});
/**
 * Normalize 'start' and 'end' alignment values to 'flex-start' and 'flex-end'
 * in flex containers for browser compatibility.
 */ function $a2ef5497697e8437$var$flexAlignValue(value) {
    if (value === 'start') return 'flex-start';
    if (value === 'end') return 'flex-end';
    return value;
}
/**
 * Takes a boolean and translates it to flex wrap or nowrap.
 */ function $a2ef5497697e8437$var$flexWrapValue(value) {
    if (typeof value === 'boolean') return value ? 'wrap' : 'nowrap';
    return value;
}


//# sourceMappingURL=Flex.main.js.map
