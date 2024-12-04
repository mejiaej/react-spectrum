import "./vars.c840a2b4.css";
import $X1F04$tags_vars_cssmodulejs from "./tags_vars_css.module.js";
import {useTag as $X1F04$useTag} from "@react-aria/tag";
import {useStyleProps as $X1F04$useStyleProps, classNames as $X1F04$classNames, SlotProvider as $X1F04$SlotProvider, ClearSlots as $X1F04$ClearSlots} from "@react-spectrum/utils";
import {ClearButton as $X1F04$ClearButton} from "@react-spectrum/button";
import {mergeProps as $X1F04$mergeProps} from "@react-aria/utils";
import $X1F04$react, {useRef as $X1F04$useRef} from "react";
import {Text as $X1F04$Text} from "@react-spectrum/text";
import {useFocusRing as $X1F04$useFocusRing} from "@react-aria/focus";
import {useHover as $X1F04$useHover} from "@react-aria/interactions";


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








function $b5f5ee35d3b6b95c$export$3288d34c523a1192(props) {
    const { item: item, state: state, ...otherProps } = props;
    // @ts-ignore
    let { styleProps: styleProps } = (0, $X1F04$useStyleProps)(otherProps);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $X1F04$useHover)({});
    let { isFocused: isFocused, isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, $X1F04$useFocusRing)({
        within: true
    });
    let ref = (0, $X1F04$useRef)(null);
    let { removeButtonProps: removeButtonProps, gridCellProps: gridCellProps, rowProps: rowProps, allowsRemoving: allowsRemoving } = (0, $X1F04$useTag)({
        ...props,
        item: item
    }, state, ref);
    return /*#__PURE__*/ (0, $X1F04$react).createElement("div", {
        ...(0, $X1F04$mergeProps)(rowProps, hoverProps, focusProps),
        className: (0, $X1F04$classNames)((0, ($parcel$interopDefault($X1F04$tags_vars_cssmodulejs))), 'spectrum-Tag', {
            'focus-ring': isFocusVisible,
            'is-focused': isFocused,
            'is-hovered': isHovered,
            'spectrum-Tag--removable': allowsRemoving
        }, styleProps.className),
        ref: ref
    }, /*#__PURE__*/ (0, $X1F04$react).createElement("div", {
        className: (0, $X1F04$classNames)((0, ($parcel$interopDefault($X1F04$tags_vars_cssmodulejs))), 'spectrum-Tag-cell'),
        ...gridCellProps
    }, /*#__PURE__*/ (0, $X1F04$react).createElement((0, $X1F04$SlotProvider), {
        slots: {
            icon: {
                UNSAFE_className: (0, $X1F04$classNames)((0, ($parcel$interopDefault($X1F04$tags_vars_cssmodulejs))), 'spectrum-Tag-icon'),
                size: 'XS'
            },
            text: {
                UNSAFE_className: (0, $X1F04$classNames)((0, ($parcel$interopDefault($X1F04$tags_vars_cssmodulejs))), 'spectrum-Tag-content')
            },
            avatar: {
                UNSAFE_className: (0, $X1F04$classNames)((0, ($parcel$interopDefault($X1F04$tags_vars_cssmodulejs))), 'spectrum-Tag-avatar'),
                size: 'avatar-size-50'
            }
        }
    }, typeof item.rendered === 'string' ? /*#__PURE__*/ (0, $X1F04$react).createElement((0, $X1F04$Text), null, item.rendered) : item.rendered, /*#__PURE__*/ (0, $X1F04$react).createElement((0, $X1F04$ClearSlots), null, allowsRemoving && /*#__PURE__*/ (0, $X1F04$react).createElement($b5f5ee35d3b6b95c$var$TagRemoveButton, {
        item: item,
        ...removeButtonProps,
        UNSAFE_className: (0, $X1F04$classNames)((0, ($parcel$interopDefault($X1F04$tags_vars_cssmodulejs))), 'spectrum-Tag-removeButton')
    })))));
}
function $b5f5ee35d3b6b95c$var$TagRemoveButton(props) {
    let { styleProps: styleProps } = (0, $X1F04$useStyleProps)(props);
    return /*#__PURE__*/ (0, $X1F04$react).createElement("span", styleProps, /*#__PURE__*/ (0, $X1F04$react).createElement((0, $X1F04$ClearButton), props));
}


export {$b5f5ee35d3b6b95c$export$3288d34c523a1192 as Tag};
//# sourceMappingURL=Tag.module.js.map
