import "./vars.af72e126.css";
import $9saoi$breadcrumb_vars_cssmodulejs from "./breadcrumb_vars_css.module.js";
import $9saoi$spectrumiconsuiChevronRightSmall from "@spectrum-icons/ui/ChevronRightSmall";
import {classNames as $9saoi$classNames} from "@react-spectrum/utils";
import {FocusRing as $9saoi$FocusRing} from "@react-aria/focus";
import {mergeProps as $9saoi$mergeProps} from "@react-aria/utils";
import $9saoi$react, {useRef as $9saoi$useRef, Fragment as $9saoi$Fragment} from "react";
import {useBreadcrumbItem as $9saoi$useBreadcrumbItem} from "@react-aria/breadcrumbs";
import {useHover as $9saoi$useHover} from "@react-aria/interactions";
import {useLocale as $9saoi$useLocale} from "@react-aria/i18n";


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








function $2bfa2c84c665c457$export$c13f210c706eb549(props) {
    let { children: children, isCurrent: isCurrent, isDisabled: isDisabled, isMenu: isMenu } = props;
    let { direction: direction } = (0, $9saoi$useLocale)();
    let ref = (0, $9saoi$useRef)(null);
    let ElementType = props.href ? 'a' : 'span';
    let { itemProps: itemProps } = (0, $9saoi$useBreadcrumbItem)({
        ...props,
        elementType: ElementType
    }, ref);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $9saoi$useHover)(props);
    // If this item contains a menu button, then it shouldn't be a link.
    if (isMenu) itemProps = {};
    return /*#__PURE__*/ (0, $9saoi$react).createElement((0, $9saoi$Fragment), null, /*#__PURE__*/ (0, $9saoi$react).createElement((0, $9saoi$FocusRing), {
        focusRingClass: (0, $9saoi$classNames)((0, ($parcel$interopDefault($9saoi$breadcrumb_vars_cssmodulejs))), 'focus-ring')
    }, /*#__PURE__*/ (0, $9saoi$react).createElement(ElementType, {
        ...(0, $9saoi$mergeProps)(itemProps, hoverProps),
        ref: ref,
        className: (0, $9saoi$classNames)((0, ($parcel$interopDefault($9saoi$breadcrumb_vars_cssmodulejs))), {
            'spectrum-Breadcrumbs-itemLink': !isMenu,
            'is-disabled': !isCurrent && isDisabled,
            'is-hovered': isHovered
        })
    }, children)), /*#__PURE__*/ (0, $9saoi$react).createElement((0, $9saoi$spectrumiconsuiChevronRightSmall), {
        UNSAFE_className: (0, $9saoi$classNames)((0, ($parcel$interopDefault($9saoi$breadcrumb_vars_cssmodulejs))), 'spectrum-Breadcrumbs-itemSeparator', {
            'is-reversed': direction === 'rtl'
        })
    }));
}


export {$2bfa2c84c665c457$export$c13f210c706eb549 as BreadcrumbItem};
//# sourceMappingURL=BreadcrumbItem.module.js.map
