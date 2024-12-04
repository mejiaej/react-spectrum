import "./ProgressCircle.css";
import {useSpectrumContextProps as $5ce63c423902f47d$export$764f6146fadd77f7} from "../icons/useSpectrumContextProps.mjs";
import {jsx as $8ijGz$jsx, jsxs as $8ijGz$jsxs} from "react/jsx-runtime";
import {ProgressBar as $8ijGz$ProgressBar} from "react-aria-components";
import {createContext as $8ijGz$createContext, forwardRef as $8ijGz$forwardRef} from "react";
import {useDOMRef as $8ijGz$useDOMRef} from "@react-spectrum/utils";

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




const $41ddd91dbbf0c389$export$afffa1e5edf12209 = /*#__PURE__*/ (0, $8ijGz$createContext)(null);
// Double check the types passed to each style, may not need all for each
const $41ddd91dbbf0c389$var$wrapper = function anonymous(props, overrides) {
    let rules = " .";
    let matches = (overrides || '').match(/(?:^|\s)(?:y|z|A|B|_9|_8|h|_5|_4|__A|__c|__d|__a|__b|U|__Q|X|Z|V|W|l|q|r|k|o|p)[^\s]+/g) || [];
    rules += matches.join('');
    let $l = false;
    let $k = false;
    for (let p of matches){
        if (/^\s*l/.test(p)) $l = true;
        if (/^\s*k/.test(p)) $k = true;
    }
    if (!$l) {
        if (props.size === "L") rules += ' l_q';
        else if (props.size === "S") rules += ' lE';
        else rules += ' lU';
    }
    if (!$k) {
        if (props.size === "L") rules += ' k_q';
        else if (props.size === "S") rules += ' kE';
        else rules += ' kU';
    }
    rules += ' _bb';
    return rules;
};
const $41ddd91dbbf0c389$var$track = function anonymous(props) {
    let rules = " .";
    rules += ' fa_____w';
    if (props.staticColor === "black") rules += ' f_____o';
    else if (props.staticColor === "white") rules += ' f_____b';
    else rules += ' fk';
    return rules;
};
const $41ddd91dbbf0c389$var$fill = function anonymous(props) {
    let rules = " .";
    rules += ' fa_____B';
    if (props.staticColor === "black") rules += ' f_____u';
    else if (props.staticColor === "white") rules += ' f_____h';
    else rules += ' fA';
    rules += ' R-375ty3';
    rules += ' __Ga';
    return rules;
};
const $41ddd91dbbf0c389$var$rotationAnimation = "-u41dq3";
// stroke-dashoffset represents `100 - percentage`. See below for how this works.
const $41ddd91dbbf0c389$var$dashoffsetAnimation = "-_1i5ccgk";
const $41ddd91dbbf0c389$export$c79b9d6b4cc92af7 = /*#__PURE__*/ (0, $8ijGz$forwardRef)(function ProgressCircle(props, ref) {
    [props, ref] = (0, $5ce63c423902f47d$export$764f6146fadd77f7)(props, ref, $41ddd91dbbf0c389$export$afffa1e5edf12209);
    let { size: size = 'M', staticColor: staticColor, UNSAFE_style: UNSAFE_style, UNSAFE_className: UNSAFE_className = '' } = props;
    let domRef = (0, $8ijGz$useDOMRef)(ref);
    let strokeWidth = 3;
    if (size === 'S') strokeWidth = 2;
    else if (size === 'L') strokeWidth = 4;
    // SVG strokes are centered, so subtract half the stroke width from the radius to create an inner stroke.
    let radius = `calc(50% - ${strokeWidth / 2}px)`;
    return /*#__PURE__*/ (0, $8ijGz$jsx)((0, $8ijGz$ProgressBar), {
        ...props,
        ref: domRef,
        style: UNSAFE_style,
        className: (renderProps)=>UNSAFE_className + $41ddd91dbbf0c389$var$wrapper({
                ...renderProps,
                size: size
            }, props.styles),
        children: ({ percentage: percentage, isIndeterminate: isIndeterminate })=>/*#__PURE__*/ (0, $8ijGz$jsxs)("svg", {
                fill: "none",
                width: "100%",
                height: "100%",
                children: [
                    /*#__PURE__*/ (0, $8ijGz$jsx)("circle", {
                        cx: "50%",
                        cy: "50%",
                        r: radius,
                        strokeWidth: strokeWidth,
                        className: $41ddd91dbbf0c389$var$track({
                            staticColor: staticColor
                        })
                    }),
                    /*#__PURE__*/ (0, $8ijGz$jsx)("circle", {
                        cx: "50%",
                        cy: "50%",
                        r: radius,
                        strokeWidth: strokeWidth,
                        className: $41ddd91dbbf0c389$var$fill({
                            staticColor: staticColor
                        }),
                        style: {
                            // These cubic-bezier timing functions were derived from the previous animation keyframes
                            // using a best fit algorithm, and then manually adjusted to approximate the original animation.
                            animation: isIndeterminate ? `${$41ddd91dbbf0c389$var$rotationAnimation} 1s cubic-bezier(.6, .1, .3, .9) infinite, ${$41ddd91dbbf0c389$var$dashoffsetAnimation} 1s cubic-bezier(.25, .1, .25, 1.3) infinite` : undefined
                        },
                        // Normalize the path length to 100 so we can easily set stroke-dashoffset to a percentage.
                        pathLength: "100",
                        // Add extra gap between dashes so 0% works in Chrome.
                        strokeDasharray: "100 200",
                        strokeDashoffset: isIndeterminate || percentage == null ? undefined : 100 - percentage,
                        strokeLinecap: "round"
                    })
                ]
            })
    });
});


export {$41ddd91dbbf0c389$export$afffa1e5edf12209 as ProgressCircleContext, $41ddd91dbbf0c389$export$c79b9d6b4cc92af7 as ProgressCircle};
//# sourceMappingURL=ProgressCircle.mjs.map
