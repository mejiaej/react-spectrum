import $62132693388ec24a$export$2e2bcd8739ae039 from "./index.mjs";
import {StepListContext as $739a883ac33f90d8$export$66136572efa4af6e} from "./StepListContext.mjs";
import "./vars.09815770.css";
import $j1UBu$steplist_vars_cssmodulejs from "./steplist_vars_css.mjs";
import $j1UBu$spectrumiconsuiChevronRightMedium from "@spectrum-icons/ui/ChevronRightMedium";
import {classNames as $j1UBu$classNames} from "@react-spectrum/utils";
import {FocusRing as $j1UBu$FocusRing} from "@react-aria/focus";
import {useId as $j1UBu$useId, mergeProps as $j1UBu$mergeProps} from "@react-aria/utils";
import $j1UBu$react, {useRef as $j1UBu$useRef, useContext as $j1UBu$useContext} from "react";
import {useHover as $j1UBu$useHover} from "@react-aria/interactions";
import {useLocale as $j1UBu$useLocale, useLocalizedStringFormatter as $j1UBu$useLocalizedStringFormatter, useNumberFormatter as $j1UBu$useNumberFormatter} from "@react-aria/i18n";
import {useStepListItem as $j1UBu$useStepListItem} from "@react-aria/steplist";
import {VisuallyHidden as $j1UBu$VisuallyHidden} from "@react-aria/visually-hidden";


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 











function $24c3cb1adfb0acc5$export$87c2a8a94eda1754(props) {
    let { isDisabled: isDisabled, item: item } = props;
    let { key: key } = item;
    let ref = (0, $j1UBu$useRef)(null);
    let { direction: direction } = (0, $j1UBu$useLocale)();
    let state = (0, $j1UBu$useContext)((0, $739a883ac33f90d8$export$66136572efa4af6e));
    const isSelected = state.selectedKey === key;
    const isCompleted = state.isCompleted(key);
    const isItemDisabled = isDisabled || state.disabledKeys.has(key);
    let { stepProps: stepProps, stepStateProps: stepStateProps } = (0, $j1UBu$useStepListItem)({
        ...props,
        key: key
    }, state, ref);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $j1UBu$useHover)({
        ...props,
        isDisabled: isItemDisabled || isSelected || props.isReadOnly
    });
    let stepStateText = '';
    const stringFormatter = (0, $j1UBu$useLocalizedStringFormatter)((0, $62132693388ec24a$export$2e2bcd8739ae039), '@react-spectrum/steplist');
    const numberFormatter = (0, $j1UBu$useNumberFormatter)();
    if (isSelected) stepStateText = stringFormatter.format('current');
    else if (isCompleted) stepStateText = stringFormatter.format('completed');
    else stepStateText = stringFormatter.format('notCompleted');
    let markerId = (0, $j1UBu$useId)();
    let labelId = (0, $j1UBu$useId)();
    return /*#__PURE__*/ (0, $j1UBu$react).createElement("li", {
        className: (0, $j1UBu$classNames)((0, ($parcel$interopDefault($j1UBu$steplist_vars_cssmodulejs))), 'spectrum-Steplist-item')
    }, /*#__PURE__*/ (0, $j1UBu$react).createElement((0, $j1UBu$FocusRing), {
        within: true,
        focusRingClass: (0, $j1UBu$classNames)((0, ($parcel$interopDefault($j1UBu$steplist_vars_cssmodulejs))), 'focus-ring')
    }, /*#__PURE__*/ (0, $j1UBu$react).createElement("a", {
        ...(0, $j1UBu$mergeProps)(hoverProps, stepProps),
        "aria-labelledby": `${markerId} ${labelId}`,
        ref: ref,
        className: (0, $j1UBu$classNames)((0, ($parcel$interopDefault($j1UBu$steplist_vars_cssmodulejs))), 'spectrum-Steplist-link', {
            'is-selected': isSelected && !isItemDisabled,
            'is-disabled': isItemDisabled,
            'is-hovered': isHovered,
            'is-completed': isCompleted,
            'is-selectable': state.isSelectable(key) && !isSelected
        })
    }, /*#__PURE__*/ (0, $j1UBu$react).createElement((0, $j1UBu$VisuallyHidden), stepStateProps, stepStateText), /*#__PURE__*/ (0, $j1UBu$react).createElement("div", {
        id: labelId,
        "aria-hidden": "true",
        className: (0, $j1UBu$classNames)((0, ($parcel$interopDefault($j1UBu$steplist_vars_cssmodulejs))), 'spectrum-Steplist-label')
    }, item.rendered), /*#__PURE__*/ (0, $j1UBu$react).createElement("div", {
        className: (0, $j1UBu$classNames)((0, ($parcel$interopDefault($j1UBu$steplist_vars_cssmodulejs))), 'spectrum-Steplist-segment', {
            'is-completed': isCompleted
        })
    }, /*#__PURE__*/ (0, $j1UBu$react).createElement("svg", {
        className: (0, $j1UBu$classNames)((0, ($parcel$interopDefault($j1UBu$steplist_vars_cssmodulejs))), 'spectrum-Steplist-segmentLine'),
        xmlns: "http://www.w3.org/2000/svg",
        height: "100%",
        viewBox: "0 0 2 8",
        preserveAspectRatio: "none"
    }, /*#__PURE__*/ (0, $j1UBu$react).createElement("line", {
        x1: "1",
        y1: "0",
        x2: "1",
        y2: "8",
        vectorEffect: "non-scaling-stroke"
    })), /*#__PURE__*/ (0, $j1UBu$react).createElement((0, $j1UBu$spectrumiconsuiChevronRightMedium), {
        UNSAFE_className: (0, $j1UBu$classNames)((0, ($parcel$interopDefault($j1UBu$steplist_vars_cssmodulejs))), 'spectrum-Steplist-chevron', {
            'is-reversed': direction === 'rtl'
        })
    })), /*#__PURE__*/ (0, $j1UBu$react).createElement("div", {
        "aria-hidden": "true",
        className: (0, $j1UBu$classNames)((0, ($parcel$interopDefault($j1UBu$steplist_vars_cssmodulejs))), 'spectrum-Steplist-markerWrapper')
    }, /*#__PURE__*/ (0, $j1UBu$react).createElement("div", {
        id: markerId,
        className: (0, $j1UBu$classNames)((0, ($parcel$interopDefault($j1UBu$steplist_vars_cssmodulejs))), 'spectrum-Steplist-marker')
    }, numberFormatter.format((item.index || 0) + 1))))));
}


export {$24c3cb1adfb0acc5$export$87c2a8a94eda1754 as StepListItem};
//# sourceMappingURL=StepListItem.module.js.map
