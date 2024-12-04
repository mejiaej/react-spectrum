require("./styles.d49f4d83.css");
var $91c3db8c6a21ca71$exports = require("./styles_css.main.js");
require("./vars.ba84240a.css");
var $40cb3a00c193680f$exports = require("./textfield_vars_css.main.js");
var $9cini$spectrumiconsuiAlertMedium = require("@spectrum-icons/ui/AlertMedium");
var $9cini$spectrumiconsuiCheckmarkMedium = require("@spectrum-icons/ui/CheckmarkMedium");
var $9cini$reactspectrumutils = require("@react-spectrum/utils");
var $9cini$reactariautils = require("@react-aria/utils");
var $9cini$react = require("react");
var $9cini$reactariafocus = require("@react-aria/focus");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "Input", () => $c3ebc4931d9b9977$export$f5b8910cec6cf069);
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







const $c3ebc4931d9b9977$export$f5b8910cec6cf069 = /*#__PURE__*/ (0, ($parcel$interopDefault($9cini$react))).forwardRef(function Input(props, ref) {
    let inputRef = (0, $9cini$react.useRef)(null);
    let { isDisabled: isDisabled, isQuiet: isQuiet, inputClassName: inputClassName, validationState: validationState, children: children, fieldProps: fieldProps, className: className, style: style, disableFocusRing: disableFocusRing } = props;
    // Reserve padding for the error icon when the width of the input is unconstrained.
    // When constrained, don't reserve space because adding it only when invalid will
    // not cause a layout shift.
    let [reservePadding, setReservePadding] = (0, $9cini$reactspectrumutils.useValueEffect)(false);
    let onResize = (0, $9cini$react.useCallback)(()=>setReservePadding(function*(reservePadding) {
            if (inputRef.current && inputRef.current.parentElement) {
                if (reservePadding) // Try to collapse padding if the content is clipped.
                {
                    if (inputRef.current.scrollWidth > inputRef.current.offsetWidth) {
                        let width = inputRef.current.parentElement.offsetWidth;
                        yield false;
                        // If removing padding causes a layout shift, add it back.
                        if (inputRef.current.parentElement.offsetWidth !== width) yield true;
                    }
                } else // Try to add padding if the content is not clipped.
                if (inputRef.current.offsetWidth >= inputRef.current.scrollWidth) {
                    let width = inputRef.current.parentElement.offsetWidth;
                    yield true;
                    // If adding padding does not change the width (i.e. width is constrained), remove it again.
                    if (inputRef.current.parentElement.offsetWidth === width) yield false;
                }
            }
        }), [
        inputRef,
        setReservePadding
    ]);
    (0, $9cini$reactariautils.useLayoutEffect)(onResize, [
        onResize
    ]);
    (0, $9cini$reactariautils.useResizeObserver)({
        ref: inputRef,
        onResize: onResize
    });
    // We also need to listen for resize events of the window so we can detect
    // when there is enough space for the padding to be re-added. Ideally we'd
    // use a resize observer on a parent element, but it's hard to know _what_
    // parent element.
    (0, $9cini$reactariautils.useEvent)((0, $9cini$react.useRef)(typeof window !== 'undefined' ? window : null), 'resize', onResize);
    let { focusProps: focusProps, isFocusVisible: isFocusVisible, isFocused: isFocused } = (0, $9cini$reactariafocus.useFocusRing)({
        isTextInput: true,
        within: true
    });
    let isInvalid = validationState === 'invalid' && !isDisabled;
    let textfieldClass = (0, $9cini$reactspectrumutils.classNames)((0, ($parcel$interopDefault($40cb3a00c193680f$exports))), 'spectrum-Textfield', {
        'spectrum-Textfield--invalid': isInvalid,
        'spectrum-Textfield--valid': validationState === 'valid' && !isDisabled,
        'spectrum-Textfield--quiet': isQuiet,
        'focus-ring': isFocusVisible && !disableFocusRing
    }, (0, $9cini$reactspectrumutils.classNames)((0, ($parcel$interopDefault($91c3db8c6a21ca71$exports))), 'react-spectrum-Datepicker-field'), className);
    let inputClass = (0, $9cini$reactspectrumutils.classNames)((0, ($parcel$interopDefault($40cb3a00c193680f$exports))), 'spectrum-Textfield-input', {
        'is-disabled': isDisabled,
        'is-focused': isFocused
    }, (0, $9cini$reactspectrumutils.classNames)((0, ($parcel$interopDefault($91c3db8c6a21ca71$exports))), 'react-spectrum-DateField-Input'), reservePadding && (0, $9cini$reactspectrumutils.classNames)((0, ($parcel$interopDefault($91c3db8c6a21ca71$exports))), 'react-spectrum-Datepicker-input'), inputClassName);
    let iconClass = (0, $9cini$reactspectrumutils.classNames)((0, ($parcel$interopDefault($40cb3a00c193680f$exports))), 'spectrum-Textfield-validationIcon');
    let validationIcon = null;
    if (validationState === 'invalid' && !isDisabled) validationIcon = /*#__PURE__*/ (0, ($parcel$interopDefault($9cini$react))).createElement((0, ($parcel$interopDefault($9cini$spectrumiconsuiAlertMedium))), {
        "data-testid": "invalid-icon",
        UNSAFE_className: iconClass
    });
    else if (validationState === 'valid' && !isDisabled) validationIcon = /*#__PURE__*/ (0, ($parcel$interopDefault($9cini$react))).createElement((0, ($parcel$interopDefault($9cini$spectrumiconsuiCheckmarkMedium))), {
        "data-testid": "valid-icon",
        UNSAFE_className: iconClass
    });
    return /*#__PURE__*/ (0, ($parcel$interopDefault($9cini$react))).createElement("div", {
        role: "presentation",
        ...(0, $9cini$reactariautils.mergeProps)(fieldProps, focusProps),
        className: textfieldClass,
        style: style
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($9cini$react))).createElement("div", {
        role: "presentation",
        className: inputClass
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($9cini$react))).createElement("div", {
        role: "presentation",
        className: (0, $9cini$reactspectrumutils.classNames)((0, ($parcel$interopDefault($91c3db8c6a21ca71$exports))), 'react-spectrum-Datepicker-inputContents'),
        ref: (0, $9cini$reactariautils.mergeRefs)(ref, inputRef)
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($9cini$react))).createElement("div", {
        role: "presentation",
        className: (0, $9cini$reactspectrumutils.classNames)((0, ($parcel$interopDefault($91c3db8c6a21ca71$exports))), 'react-spectrum-Datepicker-inputSized'),
        style: {
            minWidth: props.minWidth
        }
    }, children))), validationIcon);
});


//# sourceMappingURL=Input.main.js.map
