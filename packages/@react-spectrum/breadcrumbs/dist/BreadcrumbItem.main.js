require("./vars.af72e126.css");
var $3292ef9f328419fc$exports = require("./breadcrumb_vars_css.main.js");
var $k4xVk$spectrumiconsuiChevronRightSmall = require("@spectrum-icons/ui/ChevronRightSmall");
var $k4xVk$reactspectrumutils = require("@react-spectrum/utils");
var $k4xVk$reactariafocus = require("@react-aria/focus");
var $k4xVk$reactariautils = require("@react-aria/utils");
var $k4xVk$react = require("react");
var $k4xVk$reactariabreadcrumbs = require("@react-aria/breadcrumbs");
var $k4xVk$reactariainteractions = require("@react-aria/interactions");
var $k4xVk$reactariai18n = require("@react-aria/i18n");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "BreadcrumbItem", () => $d90ab02c74e9be0c$export$c13f210c706eb549);
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








function $d90ab02c74e9be0c$export$c13f210c706eb549(props) {
    let { children: children, isCurrent: isCurrent, isDisabled: isDisabled, isMenu: isMenu } = props;
    let { direction: direction } = (0, $k4xVk$reactariai18n.useLocale)();
    let ref = (0, $k4xVk$react.useRef)(null);
    let ElementType = props.href ? 'a' : 'span';
    let { itemProps: itemProps } = (0, $k4xVk$reactariabreadcrumbs.useBreadcrumbItem)({
        ...props,
        elementType: ElementType
    }, ref);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $k4xVk$reactariainteractions.useHover)(props);
    // If this item contains a menu button, then it shouldn't be a link.
    if (isMenu) itemProps = {};
    return /*#__PURE__*/ (0, ($parcel$interopDefault($k4xVk$react))).createElement((0, $k4xVk$react.Fragment), null, /*#__PURE__*/ (0, ($parcel$interopDefault($k4xVk$react))).createElement((0, $k4xVk$reactariafocus.FocusRing), {
        focusRingClass: (0, $k4xVk$reactspectrumutils.classNames)((0, ($parcel$interopDefault($3292ef9f328419fc$exports))), 'focus-ring')
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($k4xVk$react))).createElement(ElementType, {
        ...(0, $k4xVk$reactariautils.mergeProps)(itemProps, hoverProps),
        ref: ref,
        className: (0, $k4xVk$reactspectrumutils.classNames)((0, ($parcel$interopDefault($3292ef9f328419fc$exports))), {
            'spectrum-Breadcrumbs-itemLink': !isMenu,
            'is-disabled': !isCurrent && isDisabled,
            'is-hovered': isHovered
        })
    }, children)), /*#__PURE__*/ (0, ($parcel$interopDefault($k4xVk$react))).createElement((0, ($parcel$interopDefault($k4xVk$spectrumiconsuiChevronRightSmall))), {
        UNSAFE_className: (0, $k4xVk$reactspectrumutils.classNames)((0, ($parcel$interopDefault($3292ef9f328419fc$exports))), 'spectrum-Breadcrumbs-itemSeparator', {
            'is-reversed': direction === 'rtl'
        })
    }));
}


//# sourceMappingURL=BreadcrumbItem.main.js.map
