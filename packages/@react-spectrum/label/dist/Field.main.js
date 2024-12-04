var $2d1b5114e5b358b6$exports = require("./HelpText.main.js");
var $38a9afbd39356629$exports = require("./Label.main.js");
require("./vars.6dc4ca00.css");
var $eb2fc0ee655eff6b$exports = require("./fieldlabel_vars_css.main.js");
var $bW4vJ$reactspectrumutils = require("@react-spectrum/utils");
var $bW4vJ$reactspectrumlayout = require("@react-spectrum/layout");
var $bW4vJ$reactariautils = require("@react-aria/utils");
var $bW4vJ$react = require("react");
var $bW4vJ$reactspectrumform = require("@react-spectrum/form");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "Field", () => $0e5410371a445d59$export$a455218a85c89869);
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







const $0e5410371a445d59$export$a455218a85c89869 = /*#__PURE__*/ (0, ($parcel$interopDefault($bW4vJ$react))).forwardRef(function Field(props, ref) {
    let formProps = (0, $bW4vJ$reactspectrumform.useFormProps)(props);
    let isInForm = formProps !== props;
    props = formProps;
    let { label: label, labelPosition: labelPosition = 'top', labelAlign: labelAlign, isRequired: isRequired, necessityIndicator: necessityIndicator, includeNecessityIndicatorInAccessibilityName: includeNecessityIndicatorInAccessibilityName, validationState: validationState, isInvalid: isInvalid, description: description, errorMessage: errorMessage = (e)=>e.validationErrors.join(' '), validationErrors: validationErrors, validationDetails: validationDetails, isDisabled: isDisabled, showErrorIcon: showErrorIcon, contextualHelp: contextualHelp, children: children, labelProps: labelProps = {}, descriptionProps: // Not every component that uses <Field> supports help text.
    descriptionProps = {}, errorMessageProps: errorMessageProps = {}, elementType: elementType, wrapperClassName: wrapperClassName, wrapperProps: wrapperProps = {}, ...otherProps } = props;
    let { styleProps: styleProps } = (0, $bW4vJ$reactspectrumutils.useStyleProps)(otherProps);
    let errorMessageString = null;
    if (typeof errorMessage === 'function') errorMessageString = isInvalid != null && validationErrors != null && validationDetails != null ? errorMessage({
        isInvalid: isInvalid,
        validationErrors: validationErrors,
        validationDetails: validationDetails
    }) : null;
    else errorMessageString = errorMessage;
    let hasHelpText = !!description || errorMessageString && (isInvalid || validationState === 'invalid');
    let contextualHelpId = (0, $bW4vJ$reactariautils.useId)();
    let fallbackLabelPropsId = (0, $bW4vJ$reactariautils.useId)();
    if (label && contextualHelp && !labelProps.id) labelProps.id = fallbackLabelPropsId;
    let labelWrapperClass = (0, $bW4vJ$reactspectrumutils.classNames)((0, ($parcel$interopDefault($eb2fc0ee655eff6b$exports))), 'spectrum-Field', {
        'spectrum-Field--positionTop': labelPosition === 'top',
        'spectrum-Field--positionSide': labelPosition === 'side',
        'spectrum-Field--alignEnd': labelAlign === 'end',
        'spectrum-Field--hasContextualHelp': !!props.contextualHelp
    }, styleProps.className, wrapperClassName);
    children = /*#__PURE__*/ (0, ($parcel$interopDefault($bW4vJ$react))).cloneElement(children, (0, $bW4vJ$reactariautils.mergeProps)(children.props, {
        className: (0, $bW4vJ$reactspectrumutils.classNames)((0, ($parcel$interopDefault($eb2fc0ee655eff6b$exports))), 'spectrum-Field-field')
    }));
    let renderHelpText = ()=>/*#__PURE__*/ (0, ($parcel$interopDefault($bW4vJ$react))).createElement((0, $2d1b5114e5b358b6$exports.HelpText), {
            descriptionProps: descriptionProps,
            errorMessageProps: errorMessageProps,
            description: description,
            errorMessage: errorMessageString,
            validationState: validationState,
            isInvalid: isInvalid,
            isDisabled: isDisabled,
            showErrorIcon: showErrorIcon,
            gridArea: (0, ($parcel$interopDefault($eb2fc0ee655eff6b$exports))).helpText
        });
    let renderChildren = ()=>{
        if (labelPosition === 'side') return /*#__PURE__*/ (0, ($parcel$interopDefault($bW4vJ$react))).createElement((0, $bW4vJ$reactspectrumlayout.Flex), {
            direction: "column",
            UNSAFE_className: (0, $bW4vJ$reactspectrumutils.classNames)((0, ($parcel$interopDefault($eb2fc0ee655eff6b$exports))), 'spectrum-Field-wrapper')
        }, children, hasHelpText && renderHelpText());
        return /*#__PURE__*/ (0, ($parcel$interopDefault($bW4vJ$react))).createElement((0, ($parcel$interopDefault($bW4vJ$react))).Fragment, null, children, hasHelpText && renderHelpText());
    };
    let labelAndContextualHelp = /*#__PURE__*/ (0, ($parcel$interopDefault($bW4vJ$react))).createElement((0, ($parcel$interopDefault($bW4vJ$react))).Fragment, null, label && /*#__PURE__*/ (0, ($parcel$interopDefault($bW4vJ$react))).createElement((0, $38a9afbd39356629$exports.Label), {
        ...labelProps,
        labelPosition: labelPosition,
        labelAlign: labelAlign,
        isRequired: isRequired,
        necessityIndicator: necessityIndicator,
        includeNecessityIndicatorInAccessibilityName: includeNecessityIndicatorInAccessibilityName,
        elementType: elementType
    }, label), label && contextualHelp && /*#__PURE__*/ (0, ($parcel$interopDefault($bW4vJ$react))).createElement((0, $bW4vJ$reactspectrumutils.SlotProvider), {
        slots: {
            actionButton: {
                UNSAFE_className: (0, $bW4vJ$reactspectrumutils.classNames)((0, ($parcel$interopDefault($eb2fc0ee655eff6b$exports))), 'spectrum-Field-contextualHelp'),
                id: contextualHelpId,
                'aria-labelledby': (labelProps === null || labelProps === void 0 ? void 0 : labelProps.id) ? `${labelProps.id} ${contextualHelpId}` : undefined
            }
        }
    }, contextualHelp));
    // Need to add an extra wrapper for the label and contextual help if labelPosition is side,
    // so that the table layout works inside forms.
    if (isInForm && labelPosition === 'side' && label && contextualHelp) labelAndContextualHelp = /*#__PURE__*/ (0, ($parcel$interopDefault($bW4vJ$react))).createElement("div", {
        className: (0, $bW4vJ$reactspectrumutils.classNames)((0, ($parcel$interopDefault($eb2fc0ee655eff6b$exports))), 'spectrum-Field-labelCell')
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($bW4vJ$react))).createElement("div", {
        className: (0, $bW4vJ$reactspectrumutils.classNames)((0, ($parcel$interopDefault($eb2fc0ee655eff6b$exports))), 'spectrum-Field-labelWrapper')
    }, labelAndContextualHelp));
    return /*#__PURE__*/ (0, ($parcel$interopDefault($bW4vJ$react))).createElement("div", {
        ...styleProps,
        ...wrapperProps,
        ref: ref,
        className: labelWrapperClass
    }, labelAndContextualHelp, renderChildren());
});


//# sourceMappingURL=Field.main.js.map
