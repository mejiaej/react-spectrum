var $2aebdc186fd41e87$exports = require("./Overlay.main.js");
require("./overlays.f8d97b78.css");
var $e9a663ccb19ed1b0$exports = require("./overlays_css.main.js");
require("./vars.3f41eac0.css");
var $16e1dca4664d0b1c$exports = require("./popover_vars_css.main.js");
var $b900e75089bdd9cd$exports = require("./Underlay.main.js");
var $cgMBg$reactariaoverlays = require("@react-aria/overlays");
var $cgMBg$reactspectrumutils = require("@react-spectrum/utils");
var $cgMBg$reactariainteractions = require("@react-aria/interactions");
var $cgMBg$reactariautils = require("@react-aria/utils");
var $cgMBg$react = require("react");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "Popover", () => $f02bba55a62f20dd$export$5b6b19405a83ff9d);
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








/**
 * Arrow placement can be done pointing right or down because those paths start at 0, x or y. Because the
 * other two don't, they start at a fractional pixel value, it introduces rounding differences between browsers and
 * between display types (retina with subpixels vs not retina). By flipping them with CSS we can ensure that
 * the path always starts at 0 so that it perfectly overlaps the popover's border.
 * See bottom of file for more explanation.
 */ let $f02bba55a62f20dd$var$arrowPlacement = {
    left: 'right',
    right: 'right',
    top: 'bottom',
    bottom: 'bottom'
};
const $f02bba55a62f20dd$export$5b6b19405a83ff9d = /*#__PURE__*/ (0, $cgMBg$react.forwardRef)(function Popover(props, ref) {
    let { children: children, state: state, ...otherProps } = props;
    let domRef = (0, $cgMBg$reactspectrumutils.useDOMRef)(ref);
    let wrapperRef = (0, $cgMBg$react.useRef)(null);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($cgMBg$react))).createElement((0, $2aebdc186fd41e87$exports.Overlay), {
        ...otherProps,
        isOpen: state.isOpen,
        nodeRef: wrapperRef
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($cgMBg$react))).createElement($f02bba55a62f20dd$var$PopoverWrapper, {
        ref: domRef,
        ...props,
        wrapperRef: wrapperRef
    }, children));
});
const $f02bba55a62f20dd$var$PopoverWrapper = /*#__PURE__*/ (0, $cgMBg$react.forwardRef)((props, ref)=>{
    let { children: children, isOpen: isOpen, hideArrow: hideArrow, isNonModal: isNonModal, enableBothDismissButtons: enableBothDismissButtons, state: state, wrapperRef: wrapperRef, onDismissButtonPress: onDismissButtonPress = ()=>state.close() } = props;
    let { styleProps: styleProps } = (0, $cgMBg$reactspectrumutils.useStyleProps)(props);
    let objRef = (0, $cgMBg$reactariautils.useObjectRef)(ref);
    let { size: size, borderWidth: borderWidth, arrowRef: arrowRef } = $f02bba55a62f20dd$var$useArrowSize();
    const borderRadius = $f02bba55a62f20dd$var$usePopoverBorderRadius(objRef);
    let borderDiagonal = borderWidth * Math.SQRT2;
    let primary = size + borderDiagonal;
    let secondary = primary * 2;
    let { popoverProps: popoverProps, arrowProps: arrowProps, underlayProps: underlayProps, placement: placement } = (0, $cgMBg$reactariaoverlays.usePopover)({
        ...props,
        popoverRef: objRef,
        maxHeight: undefined,
        arrowSize: hideArrow ? 0 : secondary,
        arrowBoundaryOffset: borderRadius
    }, state);
    let { focusWithinProps: focusWithinProps } = (0, $cgMBg$reactariainteractions.useFocusWithin)(props);
    // Attach Transition's nodeRef to outermost wrapper for node.reflow: https://github.com/reactjs/react-transition-group/blob/c89f807067b32eea6f68fd6c622190d88ced82e2/src/Transition.js#L231
    return /*#__PURE__*/ (0, ($parcel$interopDefault($cgMBg$react))).createElement("div", {
        ref: wrapperRef
    }, !isNonModal && /*#__PURE__*/ (0, ($parcel$interopDefault($cgMBg$react))).createElement((0, $b900e75089bdd9cd$exports.Underlay), {
        isTransparent: true,
        ...(0, $cgMBg$reactariautils.mergeProps)(underlayProps),
        isOpen: isOpen
    }), /*#__PURE__*/ (0, ($parcel$interopDefault($cgMBg$react))).createElement("div", {
        ...styleProps,
        ...(0, $cgMBg$reactariautils.mergeProps)(popoverProps, focusWithinProps),
        style: {
            ...styleProps.style,
            ...popoverProps.style
        },
        ref: objRef,
        className: (0, $cgMBg$reactspectrumutils.classNames)((0, ($parcel$interopDefault($16e1dca4664d0b1c$exports))), 'spectrum-Popover', `spectrum-Popover--${placement}`, {
            'spectrum-Popover--withTip': !hideArrow,
            'is-open': isOpen,
            [`is-open--${placement}`]: isOpen
        }, (0, $cgMBg$reactspectrumutils.classNames)((0, ($parcel$interopDefault($e9a663ccb19ed1b0$exports))), 'spectrum-Popover', 'react-spectrum-Popover'), styleProps.className),
        role: "presentation",
        "data-testid": "popover"
    }, (!isNonModal || enableBothDismissButtons) && /*#__PURE__*/ (0, ($parcel$interopDefault($cgMBg$react))).createElement((0, $cgMBg$reactariaoverlays.DismissButton), {
        onDismiss: onDismissButtonPress
    }), children, hideArrow ? null : /*#__PURE__*/ (0, ($parcel$interopDefault($cgMBg$react))).createElement($f02bba55a62f20dd$var$Arrow, {
        arrowProps: arrowProps,
        isLandscape: placement != null ? $f02bba55a62f20dd$var$arrowPlacement[placement] === 'bottom' : false,
        arrowRef: arrowRef,
        primary: primary,
        secondary: secondary,
        borderDiagonal: borderDiagonal
    }), /*#__PURE__*/ (0, ($parcel$interopDefault($cgMBg$react))).createElement((0, $cgMBg$reactariaoverlays.DismissButton), {
        onDismiss: onDismissButtonPress
    })));
});
function $f02bba55a62f20dd$var$usePopoverBorderRadius(popoverRef) {
    let [borderRadius, setBorderRadius] = (0, $cgMBg$react.useState)(0);
    (0, $cgMBg$reactariautils.useLayoutEffect)(()=>{
        if (popoverRef.current) {
            let spectrumBorderRadius = window.getComputedStyle(popoverRef.current).borderRadius;
            if (spectrumBorderRadius !== '') setBorderRadius(parseInt(spectrumBorderRadius, 10));
        }
    }, [
        popoverRef
    ]);
    return borderRadius;
}
function $f02bba55a62f20dd$var$useArrowSize() {
    let [size, setSize] = (0, $cgMBg$react.useState)(20);
    let [borderWidth, setBorderWidth] = (0, $cgMBg$react.useState)(1);
    let arrowRef = (0, $cgMBg$react.useRef)(null);
    // get the css value for the tip size and divide it by 2 for this arrow implementation
    (0, $cgMBg$reactariautils.useLayoutEffect)(()=>{
        if (arrowRef.current) {
            let spectrumTipWidth = window.getComputedStyle(arrowRef.current).getPropertyValue('--spectrum-popover-tip-size');
            if (spectrumTipWidth !== '') setSize(parseInt(spectrumTipWidth, 10) / 2);
            let spectrumBorderWidth = window.getComputedStyle(arrowRef.current).getPropertyValue('--spectrum-popover-tip-borderWidth');
            if (spectrumBorderWidth !== '') setBorderWidth(parseInt(spectrumBorderWidth, 10));
        }
    }, []);
    return {
        size: size,
        borderWidth: borderWidth,
        arrowRef: arrowRef
    };
}
function $f02bba55a62f20dd$var$Arrow(props) {
    let { primary: primary, secondary: secondary, isLandscape: isLandscape, arrowProps: arrowProps, borderDiagonal: borderDiagonal, arrowRef: arrowRef } = props;
    let halfBorderDiagonal = borderDiagonal / 2;
    let primaryStart = 0;
    let primaryEnd = primary - halfBorderDiagonal;
    let secondaryStart = halfBorderDiagonal;
    let secondaryMiddle = secondary / 2;
    let secondaryEnd = secondary - halfBorderDiagonal;
    let pathData = isLandscape ? [
        'M',
        secondaryStart,
        primaryStart,
        'L',
        secondaryMiddle,
        primaryEnd,
        'L',
        secondaryEnd,
        primaryStart
    ] : [
        'M',
        primaryStart,
        secondaryStart,
        'L',
        primaryEnd,
        secondaryMiddle,
        'L',
        primaryStart,
        secondaryEnd
    ];
    /* use ceil because the svg needs to always accommodate the path inside it */ return /*#__PURE__*/ (0, ($parcel$interopDefault($cgMBg$react))).createElement("svg", {
        xmlns: "http://www.w3.org/svg/2000",
        width: Math.ceil(isLandscape ? secondary : primary),
        height: Math.ceil(isLandscape ? primary : secondary),
        className: (0, $cgMBg$reactspectrumutils.classNames)((0, ($parcel$interopDefault($16e1dca4664d0b1c$exports))), 'spectrum-Popover-tip'),
        ref: arrowRef,
        ...arrowProps
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($cgMBg$react))).createElement("path", {
        className: (0, $cgMBg$reactspectrumutils.classNames)((0, ($parcel$interopDefault($16e1dca4664d0b1c$exports))), 'spectrum-Popover-tip-triangle'),
        d: pathData.join(' ')
    }));
} /**
 * More explanation on popover tips.
 * - I tried changing the calculation of the popover placement in an effort to get it squarely onto the pixel grid.
 * This did not work because the problem was in the svg partial pixel end of the path in the popover right and popover bottom.
 * - I tried creating an extra 'bandaid' path that matched the background color and would overlap the popover border.
 * This didn't work because the border on the svg triangle didn't extend all the way to match nicely with the popover border.
 * - I tried getting the client bounding box and setting the svg to that partial pixel value
 * This didn't work because again the issue was inside the svg
 * - I didn't try drawing the svg backwards
 * This could still be tried
 * - I tried changing the calculation of the popover placement AND the svg height/width so that they were all rounded
 * This seems to have done the trick.
 */ 


//# sourceMappingURL=Popover.main.js.map
