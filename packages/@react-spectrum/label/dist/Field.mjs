import {HelpText as $8e50676506611310$export$a67c0bc59081311a} from "./HelpText.mjs";
import {Label as $00af9ba397a66f43$export$b04be29aa201d4f5} from "./Label.mjs";
import "./vars.6dc4ca00.css";
import $c6ZG4$fieldlabel_vars_cssmodulejs from "./fieldlabel_vars_css.mjs";
import {useStyleProps as $c6ZG4$useStyleProps, classNames as $c6ZG4$classNames, SlotProvider as $c6ZG4$SlotProvider} from "@react-spectrum/utils";
import {Flex as $c6ZG4$Flex} from "@react-spectrum/layout";
import {useId as $c6ZG4$useId, mergeProps as $c6ZG4$mergeProps} from "@react-aria/utils";
import $c6ZG4$react from "react";
import {useFormProps as $c6ZG4$useFormProps} from "@react-spectrum/form";


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







const $b7ca5b4454a2009d$export$a455218a85c89869 = /*#__PURE__*/ (0, $c6ZG4$react).forwardRef(function Field(props, ref) {
    let formProps = (0, $c6ZG4$useFormProps)(props);
    let isInForm = formProps !== props;
    props = formProps;
    let { label: label, labelPosition: labelPosition = 'top', labelAlign: labelAlign, isRequired: isRequired, necessityIndicator: necessityIndicator, includeNecessityIndicatorInAccessibilityName: includeNecessityIndicatorInAccessibilityName, validationState: validationState, isInvalid: isInvalid, description: description, errorMessage: errorMessage = (e)=>e.validationErrors.join(' '), validationErrors: validationErrors, validationDetails: validationDetails, isDisabled: isDisabled, showErrorIcon: showErrorIcon, contextualHelp: contextualHelp, children: children, labelProps: labelProps = {}, descriptionProps: // Not every component that uses <Field> supports help text.
    descriptionProps = {}, errorMessageProps: errorMessageProps = {}, elementType: elementType, wrapperClassName: wrapperClassName, wrapperProps: wrapperProps = {}, ...otherProps } = props;
    let { styleProps: styleProps } = (0, $c6ZG4$useStyleProps)(otherProps);
    let errorMessageString = null;
    if (typeof errorMessage === 'function') errorMessageString = isInvalid != null && validationErrors != null && validationDetails != null ? errorMessage({
        isInvalid: isInvalid,
        validationErrors: validationErrors,
        validationDetails: validationDetails
    }) : null;
    else errorMessageString = errorMessage;
    let hasHelpText = !!description || errorMessageString && (isInvalid || validationState === 'invalid');
    let contextualHelpId = (0, $c6ZG4$useId)();
    let fallbackLabelPropsId = (0, $c6ZG4$useId)();
    if (label && contextualHelp && !labelProps.id) labelProps.id = fallbackLabelPropsId;
    let labelWrapperClass = (0, $c6ZG4$classNames)((0, ($parcel$interopDefault($c6ZG4$fieldlabel_vars_cssmodulejs))), 'spectrum-Field', {
        'spectrum-Field--positionTop': labelPosition === 'top',
        'spectrum-Field--positionSide': labelPosition === 'side',
        'spectrum-Field--alignEnd': labelAlign === 'end',
        'spectrum-Field--hasContextualHelp': !!props.contextualHelp
    }, styleProps.className, wrapperClassName);
    children = /*#__PURE__*/ (0, $c6ZG4$react).cloneElement(children, (0, $c6ZG4$mergeProps)(children.props, {
        className: (0, $c6ZG4$classNames)((0, ($parcel$interopDefault($c6ZG4$fieldlabel_vars_cssmodulejs))), 'spectrum-Field-field')
    }));
    let renderHelpText = ()=>/*#__PURE__*/ (0, $c6ZG4$react).createElement((0, $8e50676506611310$export$a67c0bc59081311a), {
            descriptionProps: descriptionProps,
            errorMessageProps: errorMessageProps,
            description: description,
            errorMessage: errorMessageString,
            validationState: validationState,
            isInvalid: isInvalid,
            isDisabled: isDisabled,
            showErrorIcon: showErrorIcon,
            gridArea: (0, ($parcel$interopDefault($c6ZG4$fieldlabel_vars_cssmodulejs))).helpText
        });
    let renderChildren = ()=>{
        if (labelPosition === 'side') return /*#__PURE__*/ (0, $c6ZG4$react).createElement((0, $c6ZG4$Flex), {
            direction: "column",
            UNSAFE_className: (0, $c6ZG4$classNames)((0, ($parcel$interopDefault($c6ZG4$fieldlabel_vars_cssmodulejs))), 'spectrum-Field-wrapper')
        }, children, hasHelpText && renderHelpText());
        return /*#__PURE__*/ (0, $c6ZG4$react).createElement((0, $c6ZG4$react).Fragment, null, children, hasHelpText && renderHelpText());
    };
    let labelAndContextualHelp = /*#__PURE__*/ (0, $c6ZG4$react).createElement((0, $c6ZG4$react).Fragment, null, label && /*#__PURE__*/ (0, $c6ZG4$react).createElement((0, $00af9ba397a66f43$export$b04be29aa201d4f5), {
        ...labelProps,
        labelPosition: labelPosition,
        labelAlign: labelAlign,
        isRequired: isRequired,
        necessityIndicator: necessityIndicator,
        includeNecessityIndicatorInAccessibilityName: includeNecessityIndicatorInAccessibilityName,
        elementType: elementType
    }, label), label && contextualHelp && /*#__PURE__*/ (0, $c6ZG4$react).createElement((0, $c6ZG4$SlotProvider), {
        slots: {
            actionButton: {
                UNSAFE_className: (0, $c6ZG4$classNames)((0, ($parcel$interopDefault($c6ZG4$fieldlabel_vars_cssmodulejs))), 'spectrum-Field-contextualHelp'),
                id: contextualHelpId,
                'aria-labelledby': (labelProps === null || labelProps === void 0 ? void 0 : labelProps.id) ? `${labelProps.id} ${contextualHelpId}` : undefined
            }
        }
    }, contextualHelp));
    // Need to add an extra wrapper for the label and contextual help if labelPosition is side,
    // so that the table layout works inside forms.
    if (isInForm && labelPosition === 'side' && label && contextualHelp) labelAndContextualHelp = /*#__PURE__*/ (0, $c6ZG4$react).createElement("div", {
        className: (0, $c6ZG4$classNames)((0, ($parcel$interopDefault($c6ZG4$fieldlabel_vars_cssmodulejs))), 'spectrum-Field-labelCell')
    }, /*#__PURE__*/ (0, $c6ZG4$react).createElement("div", {
        className: (0, $c6ZG4$classNames)((0, ($parcel$interopDefault($c6ZG4$fieldlabel_vars_cssmodulejs))), 'spectrum-Field-labelWrapper')
    }, labelAndContextualHelp));
    return /*#__PURE__*/ (0, $c6ZG4$react).createElement("div", {
        ...styleProps,
        ...wrapperProps,
        ref: ref,
        className: labelWrapperClass
    }, labelAndContextualHelp, renderChildren());
});


export {$b7ca5b4454a2009d$export$a455218a85c89869 as Field};
//# sourceMappingURL=Field.module.js.map
