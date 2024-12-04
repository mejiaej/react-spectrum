var $a230b81c17190af2$exports = require("./intlStrings.main.js");
require("./vars.8d585a1e.css");
var $639fb8b02c1b3e19$exports = require("./searchwithin_vars_css.main.js");
var $iKOaj$reactspectrumutils = require("@react-spectrum/utils");
var $iKOaj$reactspectrumlabel = require("@react-spectrum/label");
var $iKOaj$react = require("react");
var $iKOaj$reactspectrumform = require("@react-spectrum/form");
var $iKOaj$reactariautils = require("@react-aria/utils");
var $iKOaj$reactarialabel = require("@react-aria/label");
var $iKOaj$reactariai18n = require("@react-aria/i18n");
var $iKOaj$reactspectrumprovider = require("@react-spectrum/provider");
var $iKOaj$reactariavisuallyhidden = require("@react-aria/visually-hidden");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "SearchWithin", () => $d6360eb765c5437e$export$ccbe498d8dde5cf);
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










const $d6360eb765c5437e$export$ccbe498d8dde5cf = /*#__PURE__*/ (0, ($parcel$interopDefault($iKOaj$react))).forwardRef(function SearchWithin(props, ref) {
    props = (0, $iKOaj$reactspectrumprovider.useProviderProps)(props);
    props = (0, $iKOaj$reactspectrumform.useFormProps)(props);
    let stringFormatter = (0, $iKOaj$reactariai18n.useLocalizedStringFormatter)((0, ($parcel$interopDefault($a230b81c17190af2$exports))), '@react-spectrum/searchwithin');
    let { styleProps: styleProps } = (0, $iKOaj$reactspectrumutils.useStyleProps)(props);
    let { children: children, isDisabled: isDisabled, isRequired: isRequired, label: label } = props;
    let defaultAriaLabel = stringFormatter.format('search');
    if (!label && !props['aria-label'] && !props['aria-labelledby']) props['aria-label'] = defaultAriaLabel;
    // Get label and group props (aka fieldProps)
    let { labelProps: labelProps, fieldProps: fieldProps } = (0, $iKOaj$reactarialabel.useLabel)(props);
    // Grab aria-labelledby for the search input. Will need the entire concatenated aria-labelledby if it exists since pointing at the group id doesn’t
    // suffice if there is a external label
    let labelledBy = fieldProps['aria-labelledby'] || (fieldProps['aria-label'] !== defaultAriaLabel ? fieldProps.id : '');
    let pickerId = (0, $iKOaj$reactariautils.useId)();
    let domRef = (0, $iKOaj$reactspectrumutils.useFocusableRef)(ref);
    let groupRef = (0, $iKOaj$react.useRef)(null);
    // Measure the width of the field to inform the width of the menu.
    let [menuWidth, setMenuWidth] = (0, $iKOaj$react.useState)(null);
    let { scale: scale } = (0, $iKOaj$reactspectrumprovider.useProvider)();
    let onResize = (0, $iKOaj$react.useCallback)(()=>{
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
    (0, $iKOaj$reactspectrumutils.useResizeObserver)({
        ref: domRef,
        onResize: onResize
    });
    (0, $iKOaj$reactariautils.useLayoutEffect)(onResize, [
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
    let searchFieldClassName = (0, $iKOaj$reactspectrumutils.classNames)((0, ($parcel$interopDefault($639fb8b02c1b3e19$exports))), 'spectrum-SearchWithin-searchfield');
    let pickerClassName = (0, $iKOaj$reactspectrumutils.classNames)((0, ($parcel$interopDefault($639fb8b02c1b3e19$exports))), 'spectrum-SearchWithin-picker');
    let visuallyHiddenId = (0, $iKOaj$reactariautils.useId)();
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
    return /*#__PURE__*/ (0, ($parcel$interopDefault($iKOaj$react))).createElement((0, $iKOaj$reactspectrumlabel.Field), {
        ...props,
        labelProps: labelProps,
        ref: domRef,
        wrapperClassName: (0, $iKOaj$reactspectrumutils.classNames)((0, ($parcel$interopDefault($639fb8b02c1b3e19$exports))), 'spectrum-SearchWithin-container')
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($iKOaj$react))).createElement("div", {
        ...fieldProps,
        role: "group",
        className: (0, $iKOaj$reactspectrumutils.classNames)((0, ($parcel$interopDefault($639fb8b02c1b3e19$exports))), 'spectrum-SearchWithin', styleProps.className),
        ref: groupRef
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($iKOaj$react))).createElement((0, $iKOaj$reactariavisuallyhidden.VisuallyHidden), {
        id: visuallyHiddenId
    }, stringFormatter.format('searchWithin')), /*#__PURE__*/ (0, ($parcel$interopDefault($iKOaj$react))).createElement((0, $iKOaj$reactspectrumutils.SlotProvider), {
        slots: slots
    }, children)));
});


//# sourceMappingURL=SearchWithin.main.js.map
