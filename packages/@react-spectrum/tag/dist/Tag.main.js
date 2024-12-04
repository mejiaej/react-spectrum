require("./vars.c840a2b4.css");
var $ed889f8f1f091fc8$exports = require("./tags_vars_css.main.js");
var $hZPqg$reactariatag = require("@react-aria/tag");
var $hZPqg$reactspectrumutils = require("@react-spectrum/utils");
var $hZPqg$reactspectrumbutton = require("@react-spectrum/button");
var $hZPqg$reactariautils = require("@react-aria/utils");
var $hZPqg$react = require("react");
var $hZPqg$reactspectrumtext = require("@react-spectrum/text");
var $hZPqg$reactariafocus = require("@react-aria/focus");
var $hZPqg$reactariainteractions = require("@react-aria/interactions");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "Tag", () => $dd2c5d00108c1840$export$3288d34c523a1192);
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








function $dd2c5d00108c1840$export$3288d34c523a1192(props) {
    const { item: item, state: state, ...otherProps } = props;
    // @ts-ignore
    let { styleProps: styleProps } = (0, $hZPqg$reactspectrumutils.useStyleProps)(otherProps);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $hZPqg$reactariainteractions.useHover)({});
    let { isFocused: isFocused, isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, $hZPqg$reactariafocus.useFocusRing)({
        within: true
    });
    let ref = (0, $hZPqg$react.useRef)(null);
    let { removeButtonProps: removeButtonProps, gridCellProps: gridCellProps, rowProps: rowProps, allowsRemoving: allowsRemoving } = (0, $hZPqg$reactariatag.useTag)({
        ...props,
        item: item
    }, state, ref);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($hZPqg$react))).createElement("div", {
        ...(0, $hZPqg$reactariautils.mergeProps)(rowProps, hoverProps, focusProps),
        className: (0, $hZPqg$reactspectrumutils.classNames)((0, ($parcel$interopDefault($ed889f8f1f091fc8$exports))), 'spectrum-Tag', {
            'focus-ring': isFocusVisible,
            'is-focused': isFocused,
            'is-hovered': isHovered,
            'spectrum-Tag--removable': allowsRemoving
        }, styleProps.className),
        ref: ref
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($hZPqg$react))).createElement("div", {
        className: (0, $hZPqg$reactspectrumutils.classNames)((0, ($parcel$interopDefault($ed889f8f1f091fc8$exports))), 'spectrum-Tag-cell'),
        ...gridCellProps
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($hZPqg$react))).createElement((0, $hZPqg$reactspectrumutils.SlotProvider), {
        slots: {
            icon: {
                UNSAFE_className: (0, $hZPqg$reactspectrumutils.classNames)((0, ($parcel$interopDefault($ed889f8f1f091fc8$exports))), 'spectrum-Tag-icon'),
                size: 'XS'
            },
            text: {
                UNSAFE_className: (0, $hZPqg$reactspectrumutils.classNames)((0, ($parcel$interopDefault($ed889f8f1f091fc8$exports))), 'spectrum-Tag-content')
            },
            avatar: {
                UNSAFE_className: (0, $hZPqg$reactspectrumutils.classNames)((0, ($parcel$interopDefault($ed889f8f1f091fc8$exports))), 'spectrum-Tag-avatar'),
                size: 'avatar-size-50'
            }
        }
    }, typeof item.rendered === 'string' ? /*#__PURE__*/ (0, ($parcel$interopDefault($hZPqg$react))).createElement((0, $hZPqg$reactspectrumtext.Text), null, item.rendered) : item.rendered, /*#__PURE__*/ (0, ($parcel$interopDefault($hZPqg$react))).createElement((0, $hZPqg$reactspectrumutils.ClearSlots), null, allowsRemoving && /*#__PURE__*/ (0, ($parcel$interopDefault($hZPqg$react))).createElement($dd2c5d00108c1840$var$TagRemoveButton, {
        item: item,
        ...removeButtonProps,
        UNSAFE_className: (0, $hZPqg$reactspectrumutils.classNames)((0, ($parcel$interopDefault($ed889f8f1f091fc8$exports))), 'spectrum-Tag-removeButton')
    })))));
}
function $dd2c5d00108c1840$var$TagRemoveButton(props) {
    let { styleProps: styleProps } = (0, $hZPqg$reactspectrumutils.useStyleProps)(props);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($hZPqg$react))).createElement("span", styleProps, /*#__PURE__*/ (0, ($parcel$interopDefault($hZPqg$react))).createElement((0, $hZPqg$reactspectrumbutton.ClearButton), props));
}


//# sourceMappingURL=Tag.main.js.map
