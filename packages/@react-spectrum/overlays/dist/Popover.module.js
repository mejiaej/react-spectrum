import {Overlay as $70305dc5fb729c3b$export$c6fdb837b070b4ff} from "./Overlay.module.js";
import "./overlays.f8d97b78.css";
import $4kQ6h$overlays_cssmodulejs from "./overlays_css.module.js";
import "./vars.3f41eac0.css";
import $4kQ6h$popover_vars_cssmodulejs from "./popover_vars_css.module.js";
import {Underlay as $76a452f4e3df11be$export$f360afc887607b02} from "./Underlay.module.js";
import {usePopover as $4kQ6h$usePopover, DismissButton as $4kQ6h$DismissButton} from "@react-aria/overlays";
import {useDOMRef as $4kQ6h$useDOMRef, useStyleProps as $4kQ6h$useStyleProps, classNames as $4kQ6h$classNames} from "@react-spectrum/utils";
import {useFocusWithin as $4kQ6h$useFocusWithin} from "@react-aria/interactions";
import {useObjectRef as $4kQ6h$useObjectRef, mergeProps as $4kQ6h$mergeProps, useLayoutEffect as $4kQ6h$useLayoutEffect} from "@react-aria/utils";
import $4kQ6h$react, {forwardRef as $4kQ6h$forwardRef, useRef as $4kQ6h$useRef, useState as $4kQ6h$useState} from "react";


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








/**
 * Arrow placement can be done pointing right or down because those paths start at 0, x or y. Because the
 * other two don't, they start at a fractional pixel value, it introduces rounding differences between browsers and
 * between display types (retina with subpixels vs not retina). By flipping them with CSS we can ensure that
 * the path always starts at 0 so that it perfectly overlaps the popover's border.
 * See bottom of file for more explanation.
 */ let $17b503f7de08fecc$var$arrowPlacement = {
    left: 'right',
    right: 'right',
    top: 'bottom',
    bottom: 'bottom'
};
const $17b503f7de08fecc$export$5b6b19405a83ff9d = /*#__PURE__*/ (0, $4kQ6h$forwardRef)(function Popover(props, ref) {
    let { children: children, state: state, ...otherProps } = props;
    let domRef = (0, $4kQ6h$useDOMRef)(ref);
    let wrapperRef = (0, $4kQ6h$useRef)(null);
    return /*#__PURE__*/ (0, $4kQ6h$react).createElement((0, $70305dc5fb729c3b$export$c6fdb837b070b4ff), {
        ...otherProps,
        isOpen: state.isOpen,
        nodeRef: wrapperRef
    }, /*#__PURE__*/ (0, $4kQ6h$react).createElement($17b503f7de08fecc$var$PopoverWrapper, {
        ref: domRef,
        ...props,
        wrapperRef: wrapperRef
    }, children));
});
const $17b503f7de08fecc$var$PopoverWrapper = /*#__PURE__*/ (0, $4kQ6h$forwardRef)((props, ref)=>{
    let { children: children, isOpen: isOpen, hideArrow: hideArrow, isNonModal: isNonModal, enableBothDismissButtons: enableBothDismissButtons, state: state, wrapperRef: wrapperRef, onDismissButtonPress: onDismissButtonPress = ()=>state.close() } = props;
    let { styleProps: styleProps } = (0, $4kQ6h$useStyleProps)(props);
    let objRef = (0, $4kQ6h$useObjectRef)(ref);
    let { size: size, borderWidth: borderWidth, arrowRef: arrowRef } = $17b503f7de08fecc$var$useArrowSize();
    const borderRadius = $17b503f7de08fecc$var$usePopoverBorderRadius(objRef);
    let borderDiagonal = borderWidth * Math.SQRT2;
    let primary = size + borderDiagonal;
    let secondary = primary * 2;
    let { popoverProps: popoverProps, arrowProps: arrowProps, underlayProps: underlayProps, placement: placement } = (0, $4kQ6h$usePopover)({
        ...props,
        popoverRef: objRef,
        maxHeight: undefined,
        arrowSize: hideArrow ? 0 : secondary,
        arrowBoundaryOffset: borderRadius
    }, state);
    let { focusWithinProps: focusWithinProps } = (0, $4kQ6h$useFocusWithin)(props);
    // Attach Transition's nodeRef to outermost wrapper for node.reflow: https://github.com/reactjs/react-transition-group/blob/c89f807067b32eea6f68fd6c622190d88ced82e2/src/Transition.js#L231
    return /*#__PURE__*/ (0, $4kQ6h$react).createElement("div", {
        ref: wrapperRef
    }, !isNonModal && /*#__PURE__*/ (0, $4kQ6h$react).createElement((0, $76a452f4e3df11be$export$f360afc887607b02), {
        isTransparent: true,
        ...(0, $4kQ6h$mergeProps)(underlayProps),
        isOpen: isOpen
    }), /*#__PURE__*/ (0, $4kQ6h$react).createElement("div", {
        ...styleProps,
        ...(0, $4kQ6h$mergeProps)(popoverProps, focusWithinProps),
        style: {
            ...styleProps.style,
            ...popoverProps.style
        },
        ref: objRef,
        className: (0, $4kQ6h$classNames)((0, ($parcel$interopDefault($4kQ6h$popover_vars_cssmodulejs))), 'spectrum-Popover', `spectrum-Popover--${placement}`, {
            'spectrum-Popover--withTip': !hideArrow,
            'is-open': isOpen,
            [`is-open--${placement}`]: isOpen
        }, (0, $4kQ6h$classNames)((0, ($parcel$interopDefault($4kQ6h$overlays_cssmodulejs))), 'spectrum-Popover', 'react-spectrum-Popover'), styleProps.className),
        role: "presentation",
        "data-testid": "popover"
    }, (!isNonModal || enableBothDismissButtons) && /*#__PURE__*/ (0, $4kQ6h$react).createElement((0, $4kQ6h$DismissButton), {
        onDismiss: onDismissButtonPress
    }), children, hideArrow ? null : /*#__PURE__*/ (0, $4kQ6h$react).createElement($17b503f7de08fecc$var$Arrow, {
        arrowProps: arrowProps,
        isLandscape: placement != null ? $17b503f7de08fecc$var$arrowPlacement[placement] === 'bottom' : false,
        arrowRef: arrowRef,
        primary: primary,
        secondary: secondary,
        borderDiagonal: borderDiagonal
    }), /*#__PURE__*/ (0, $4kQ6h$react).createElement((0, $4kQ6h$DismissButton), {
        onDismiss: onDismissButtonPress
    })));
});
function $17b503f7de08fecc$var$usePopoverBorderRadius(popoverRef) {
    let [borderRadius, setBorderRadius] = (0, $4kQ6h$useState)(0);
    (0, $4kQ6h$useLayoutEffect)(()=>{
        if (popoverRef.current) {
            let spectrumBorderRadius = window.getComputedStyle(popoverRef.current).borderRadius;
            if (spectrumBorderRadius !== '') setBorderRadius(parseInt(spectrumBorderRadius, 10));
        }
    }, [
        popoverRef
    ]);
    return borderRadius;
}
function $17b503f7de08fecc$var$useArrowSize() {
    let [size, setSize] = (0, $4kQ6h$useState)(20);
    let [borderWidth, setBorderWidth] = (0, $4kQ6h$useState)(1);
    let arrowRef = (0, $4kQ6h$useRef)(null);
    // get the css value for the tip size and divide it by 2 for this arrow implementation
    (0, $4kQ6h$useLayoutEffect)(()=>{
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
function $17b503f7de08fecc$var$Arrow(props) {
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
    /* use ceil because the svg needs to always accommodate the path inside it */ return /*#__PURE__*/ (0, $4kQ6h$react).createElement("svg", {
        xmlns: "http://www.w3.org/svg/2000",
        width: Math.ceil(isLandscape ? secondary : primary),
        height: Math.ceil(isLandscape ? primary : secondary),
        className: (0, $4kQ6h$classNames)((0, ($parcel$interopDefault($4kQ6h$popover_vars_cssmodulejs))), 'spectrum-Popover-tip'),
        ref: arrowRef,
        ...arrowProps
    }, /*#__PURE__*/ (0, $4kQ6h$react).createElement("path", {
        className: (0, $4kQ6h$classNames)((0, ($parcel$interopDefault($4kQ6h$popover_vars_cssmodulejs))), 'spectrum-Popover-tip-triangle'),
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


export {$17b503f7de08fecc$export$5b6b19405a83ff9d as Popover};
//# sourceMappingURL=Popover.module.js.map
