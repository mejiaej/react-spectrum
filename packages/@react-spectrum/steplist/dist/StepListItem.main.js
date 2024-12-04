var $fed92386245d94a4$exports = require("./index.main.js");
var $b9b57d2de2195519$exports = require("./StepListContext.main.js");
require("./vars.09815770.css");
var $390add5aac6e4d73$exports = require("./steplist_vars_css.main.js");
var $bJioC$spectrumiconsuiChevronRightMedium = require("@spectrum-icons/ui/ChevronRightMedium");
var $bJioC$reactspectrumutils = require("@react-spectrum/utils");
var $bJioC$reactariafocus = require("@react-aria/focus");
var $bJioC$reactariautils = require("@react-aria/utils");
var $bJioC$react = require("react");
var $bJioC$reactariainteractions = require("@react-aria/interactions");
var $bJioC$reactariai18n = require("@react-aria/i18n");
var $bJioC$reactariasteplist = require("@react-aria/steplist");
var $bJioC$reactariavisuallyhidden = require("@react-aria/visually-hidden");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "StepListItem", () => $d2e2cd0667356b5d$export$87c2a8a94eda1754);
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











function $d2e2cd0667356b5d$export$87c2a8a94eda1754(props) {
    let { isDisabled: isDisabled, item: item } = props;
    let { key: key } = item;
    let ref = (0, $bJioC$react.useRef)(null);
    let { direction: direction } = (0, $bJioC$reactariai18n.useLocale)();
    let state = (0, $bJioC$react.useContext)((0, $b9b57d2de2195519$exports.StepListContext));
    const isSelected = state.selectedKey === key;
    const isCompleted = state.isCompleted(key);
    const isItemDisabled = isDisabled || state.disabledKeys.has(key);
    let { stepProps: stepProps, stepStateProps: stepStateProps } = (0, $bJioC$reactariasteplist.useStepListItem)({
        ...props,
        key: key
    }, state, ref);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $bJioC$reactariainteractions.useHover)({
        ...props,
        isDisabled: isItemDisabled || isSelected || props.isReadOnly
    });
    let stepStateText = '';
    const stringFormatter = (0, $bJioC$reactariai18n.useLocalizedStringFormatter)((0, $fed92386245d94a4$exports.default), '@react-spectrum/steplist');
    const numberFormatter = (0, $bJioC$reactariai18n.useNumberFormatter)();
    if (isSelected) stepStateText = stringFormatter.format('current');
    else if (isCompleted) stepStateText = stringFormatter.format('completed');
    else stepStateText = stringFormatter.format('notCompleted');
    let markerId = (0, $bJioC$reactariautils.useId)();
    let labelId = (0, $bJioC$reactariautils.useId)();
    return /*#__PURE__*/ (0, ($parcel$interopDefault($bJioC$react))).createElement("li", {
        className: (0, $bJioC$reactspectrumutils.classNames)((0, ($parcel$interopDefault($390add5aac6e4d73$exports))), 'spectrum-Steplist-item')
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($bJioC$react))).createElement((0, $bJioC$reactariafocus.FocusRing), {
        within: true,
        focusRingClass: (0, $bJioC$reactspectrumutils.classNames)((0, ($parcel$interopDefault($390add5aac6e4d73$exports))), 'focus-ring')
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($bJioC$react))).createElement("a", {
        ...(0, $bJioC$reactariautils.mergeProps)(hoverProps, stepProps),
        "aria-labelledby": `${markerId} ${labelId}`,
        ref: ref,
        className: (0, $bJioC$reactspectrumutils.classNames)((0, ($parcel$interopDefault($390add5aac6e4d73$exports))), 'spectrum-Steplist-link', {
            'is-selected': isSelected && !isItemDisabled,
            'is-disabled': isItemDisabled,
            'is-hovered': isHovered,
            'is-completed': isCompleted,
            'is-selectable': state.isSelectable(key) && !isSelected
        })
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($bJioC$react))).createElement((0, $bJioC$reactariavisuallyhidden.VisuallyHidden), stepStateProps, stepStateText), /*#__PURE__*/ (0, ($parcel$interopDefault($bJioC$react))).createElement("div", {
        id: labelId,
        "aria-hidden": "true",
        className: (0, $bJioC$reactspectrumutils.classNames)((0, ($parcel$interopDefault($390add5aac6e4d73$exports))), 'spectrum-Steplist-label')
    }, item.rendered), /*#__PURE__*/ (0, ($parcel$interopDefault($bJioC$react))).createElement("div", {
        className: (0, $bJioC$reactspectrumutils.classNames)((0, ($parcel$interopDefault($390add5aac6e4d73$exports))), 'spectrum-Steplist-segment', {
            'is-completed': isCompleted
        })
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($bJioC$react))).createElement("svg", {
        className: (0, $bJioC$reactspectrumutils.classNames)((0, ($parcel$interopDefault($390add5aac6e4d73$exports))), 'spectrum-Steplist-segmentLine'),
        xmlns: "http://www.w3.org/2000/svg",
        height: "100%",
        viewBox: "0 0 2 8",
        preserveAspectRatio: "none"
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($bJioC$react))).createElement("line", {
        x1: "1",
        y1: "0",
        x2: "1",
        y2: "8",
        vectorEffect: "non-scaling-stroke"
    })), /*#__PURE__*/ (0, ($parcel$interopDefault($bJioC$react))).createElement((0, ($parcel$interopDefault($bJioC$spectrumiconsuiChevronRightMedium))), {
        UNSAFE_className: (0, $bJioC$reactspectrumutils.classNames)((0, ($parcel$interopDefault($390add5aac6e4d73$exports))), 'spectrum-Steplist-chevron', {
            'is-reversed': direction === 'rtl'
        })
    })), /*#__PURE__*/ (0, ($parcel$interopDefault($bJioC$react))).createElement("div", {
        "aria-hidden": "true",
        className: (0, $bJioC$reactspectrumutils.classNames)((0, ($parcel$interopDefault($390add5aac6e4d73$exports))), 'spectrum-Steplist-markerWrapper')
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($bJioC$react))).createElement("div", {
        id: markerId,
        className: (0, $bJioC$reactspectrumutils.classNames)((0, ($parcel$interopDefault($390add5aac6e4d73$exports))), 'spectrum-Steplist-marker')
    }, numberFormatter.format((item.index || 0) + 1))))));
}


//# sourceMappingURL=StepListItem.main.js.map
