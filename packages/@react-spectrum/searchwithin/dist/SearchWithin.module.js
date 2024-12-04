import $jbMzF$intlStringsmodulejs from "./intlStrings.module.js";
import "./vars.8d585a1e.css";
import $jbMzF$searchwithin_vars_cssmodulejs from "./searchwithin_vars_css.module.js";
import {useStyleProps as $jbMzF$useStyleProps, useFocusableRef as $jbMzF$useFocusableRef, useResizeObserver as $jbMzF$useResizeObserver, classNames as $jbMzF$classNames, SlotProvider as $jbMzF$SlotProvider} from "@react-spectrum/utils";
import {Field as $jbMzF$Field} from "@react-spectrum/label";
import $jbMzF$react, {useRef as $jbMzF$useRef, useState as $jbMzF$useState, useCallback as $jbMzF$useCallback} from "react";
import {useFormProps as $jbMzF$useFormProps} from "@react-spectrum/form";
import {useId as $jbMzF$useId, useLayoutEffect as $jbMzF$useLayoutEffect} from "@react-aria/utils";
import {useLabel as $jbMzF$useLabel} from "@react-aria/label";
import {useLocalizedStringFormatter as $jbMzF$useLocalizedStringFormatter} from "@react-aria/i18n";
import {useProviderProps as $jbMzF$useProviderProps, useProvider as $jbMzF$useProvider} from "@react-spectrum/provider";
import {VisuallyHidden as $jbMzF$VisuallyHidden} from "@react-aria/visually-hidden";


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










const $7b95d30cfbb407ee$export$ccbe498d8dde5cf = /*#__PURE__*/ (0, $jbMzF$react).forwardRef(function SearchWithin(props, ref) {
    props = (0, $jbMzF$useProviderProps)(props);
    props = (0, $jbMzF$useFormProps)(props);
    let stringFormatter = (0, $jbMzF$useLocalizedStringFormatter)((0, ($parcel$interopDefault($jbMzF$intlStringsmodulejs))), '@react-spectrum/searchwithin');
    let { styleProps: styleProps } = (0, $jbMzF$useStyleProps)(props);
    let { children: children, isDisabled: isDisabled, isRequired: isRequired, label: label } = props;
    let defaultAriaLabel = stringFormatter.format('search');
    if (!label && !props['aria-label'] && !props['aria-labelledby']) props['aria-label'] = defaultAriaLabel;
    // Get label and group props (aka fieldProps)
    let { labelProps: labelProps, fieldProps: fieldProps } = (0, $jbMzF$useLabel)(props);
    // Grab aria-labelledby for the search input. Will need the entire concatenated aria-labelledby if it exists since pointing at the group id doesn’t
    // suffice if there is a external label
    let labelledBy = fieldProps['aria-labelledby'] || (fieldProps['aria-label'] !== defaultAriaLabel ? fieldProps.id : '');
    let pickerId = (0, $jbMzF$useId)();
    let domRef = (0, $jbMzF$useFocusableRef)(ref);
    let groupRef = (0, $jbMzF$useRef)(null);
    // Measure the width of the field to inform the width of the menu.
    let [menuWidth, setMenuWidth] = (0, $jbMzF$useState)(null);
    let { scale: scale } = (0, $jbMzF$useProvider)();
    let onResize = (0, $jbMzF$useCallback)(()=>{
        var _groupRef_current, _domRef_current;
        let shouldUseGroup = !!label;
        let width = shouldUseGroup ? (_groupRef_current = groupRef.current) === null || _groupRef_current === void 0 ? void 0 : _groupRef_current.offsetWidth : (_domRef_current = domRef.current) === null || _domRef_current === void 0 ? void 0 : _domRef_current.offsetWidth;
        if (width && !isNaN(width)) setMenuWidth(width);
    }, [
        groupRef,
        domRef,
        setMenuWidth,
        label
    ]);
    (0, $jbMzF$useResizeObserver)({
        ref: domRef,
        onResize: onResize
    });
    (0, $jbMzF$useLayoutEffect)(onResize, [
        scale,
        onResize
    ]);
    let defaultSlotValues = {
        isDisabled: isDisabled,
        isRequired: isRequired,
        label: null,
        isQuiet: false,
        validationState: null,
        description: null,
        errorMessage: null,
        descriptionProps: null,
        errorMessageProps: null,
        'aria-label': null
    };
    let searchFieldClassName = (0, $jbMzF$classNames)((0, ($parcel$interopDefault($jbMzF$searchwithin_vars_cssmodulejs))), 'spectrum-SearchWithin-searchfield');
    let pickerClassName = (0, $jbMzF$classNames)((0, ($parcel$interopDefault($jbMzF$searchwithin_vars_cssmodulejs))), 'spectrum-SearchWithin-picker');
    let visuallyHiddenId = (0, $jbMzF$useId)();
    let slots = {
        searchfield: {
            ...defaultSlotValues,
            UNSAFE_className: searchFieldClassName,
            // Apply aria-labelledby of group or the group id to searchfield. No need to pass the group id (we want a new one) and aria-label (aria-labelledby will suffice)
            'aria-labelledby': `${labelledBy} ${visuallyHiddenId} ${pickerId}`,
            // When label is provided, input should have id referenced by htmlFor of label, instead of group
            id: label && fieldProps.id
        },
        picker: {
            ...defaultSlotValues,
            id: pickerId,
            UNSAFE_className: pickerClassName,
            menuWidth: menuWidth,
            align: 'end',
            'aria-labelledby': `${labelledBy} ${visuallyHiddenId}`
        }
    };
    if (label) // When label is provided, input should have id referenced by htmlFor of label, instead of group
    delete fieldProps.id;
    return /*#__PURE__*/ (0, $jbMzF$react).createElement((0, $jbMzF$Field), {
        ...props,
        labelProps: labelProps,
        ref: domRef,
        wrapperClassName: (0, $jbMzF$classNames)((0, ($parcel$interopDefault($jbMzF$searchwithin_vars_cssmodulejs))), 'spectrum-SearchWithin-container')
    }, /*#__PURE__*/ (0, $jbMzF$react).createElement("div", {
        ...fieldProps,
        role: "group",
        className: (0, $jbMzF$classNames)((0, ($parcel$interopDefault($jbMzF$searchwithin_vars_cssmodulejs))), 'spectrum-SearchWithin', styleProps.className),
        ref: groupRef
    }, /*#__PURE__*/ (0, $jbMzF$react).createElement((0, $jbMzF$VisuallyHidden), {
        id: visuallyHiddenId
    }, stringFormatter.format('searchWithin')), /*#__PURE__*/ (0, $jbMzF$react).createElement((0, $jbMzF$SlotProvider), {
        slots: slots
    }, children)));
});


export {$7b95d30cfbb407ee$export$ccbe498d8dde5cf as SearchWithin};
//# sourceMappingURL=SearchWithin.module.js.map
