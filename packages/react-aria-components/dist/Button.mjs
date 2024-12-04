import {useContextProps as $64fa3d84918910a7$export$29f1550f4b0d4415, useRenderProps as $64fa3d84918910a7$export$4d86445c2cf5e3} from "./utils.mjs";
import {ProgressBarContext as $0393f8ab869a0f1a$export$e9f3bf65a26ce129} from "./ProgressBar.mjs";
import {announce as $fM325$announce} from "@react-aria/live-announcer";
import {useButton as $fM325$useButton, useFocusRing as $fM325$useFocusRing, useHover as $fM325$useHover, useId as $fM325$useId, mergeProps as $fM325$mergeProps} from "react-aria";
import {createHideableComponent as $fM325$createHideableComponent} from "@react-aria/collections";
import {filterDOMProps as $fM325$filterDOMProps} from "@react-aria/utils";
import $fM325$react, {createContext as $fM325$createContext, useRef as $fM325$useRef, useEffect as $fM325$useEffect} from "react";

/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 






const $d2b4bc8c273e7be6$var$additionalButtonHTMLAttributes = new Set([
    'form',
    'formAction',
    'formEncType',
    'formMethod',
    'formNoValidate',
    'formTarget',
    'name',
    'value'
]);
const $d2b4bc8c273e7be6$export$24d547caef80ccd1 = /*#__PURE__*/ (0, $fM325$createContext)({});
const $d2b4bc8c273e7be6$export$353f5b6fc5456de1 = /*#__PURE__*/ (0, $fM325$createHideableComponent)(function Button(props, ref) {
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $d2b4bc8c273e7be6$export$24d547caef80ccd1);
    props = $d2b4bc8c273e7be6$var$disablePendingProps(props);
    let ctx = props;
    let { isPending: isPending } = ctx;
    let { buttonProps: buttonProps, isPressed: isPressed } = (0, $fM325$useButton)(props, ref);
    let { focusProps: focusProps, isFocused: isFocused, isFocusVisible: isFocusVisible } = (0, $fM325$useFocusRing)(props);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $fM325$useHover)({
        ...props,
        isDisabled: props.isDisabled || isPending
    });
    let renderValues = {
        isHovered: isHovered,
        isPressed: (ctx.isPressed || isPressed) && !isPending,
        isFocused: isFocused,
        isFocusVisible: isFocusVisible,
        isDisabled: props.isDisabled || false,
        isPending: isPending !== null && isPending !== void 0 ? isPending : false
    };
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        values: renderValues,
        defaultClassName: 'react-aria-Button'
    });
    let buttonId = (0, $fM325$useId)(buttonProps.id);
    let progressId = (0, $fM325$useId)();
    let ariaLabelledby = buttonProps['aria-labelledby'];
    if (isPending) {
        // aria-labelledby wins over aria-label
        // https://www.w3.org/TR/accname-1.2/#computation-steps
        if (ariaLabelledby) ariaLabelledby = `${ariaLabelledby} ${progressId}`;
        else if (buttonProps['aria-label']) ariaLabelledby = `${buttonId} ${progressId}`;
    }
    let wasPending = (0, $fM325$useRef)(isPending);
    (0, $fM325$useEffect)(()=>{
        let message = {
            'aria-labelledby': ariaLabelledby || buttonId
        };
        if (!wasPending.current && isFocused && isPending) (0, $fM325$announce)(message, 'assertive');
        else if (wasPending.current && isFocused && !isPending) (0, $fM325$announce)(message, 'assertive');
        wasPending.current = isPending;
    }, [
        isPending,
        isFocused,
        ariaLabelledby,
        buttonId
    ]);
    return /*#__PURE__*/ (0, $fM325$react).createElement("button", {
        ...(0, $fM325$filterDOMProps)(props, {
            propNames: $d2b4bc8c273e7be6$var$additionalButtonHTMLAttributes
        }),
        ...(0, $fM325$mergeProps)(buttonProps, focusProps, hoverProps),
        ...renderProps,
        id: buttonId,
        ref: ref,
        "aria-labelledby": ariaLabelledby,
        slot: props.slot || undefined,
        "aria-disabled": isPending ? 'true' : buttonProps['aria-disabled'],
        "data-disabled": props.isDisabled || undefined,
        "data-pressed": renderValues.isPressed || undefined,
        "data-hovered": isHovered || undefined,
        "data-focused": isFocused || undefined,
        "data-pending": isPending || undefined,
        "data-focus-visible": isFocusVisible || undefined
    }, /*#__PURE__*/ (0, $fM325$react).createElement((0, $0393f8ab869a0f1a$export$e9f3bf65a26ce129).Provider, {
        value: {
            id: progressId
        }
    }, renderProps.children));
});
function $d2b4bc8c273e7be6$var$disablePendingProps(props) {
    // Don't allow interaction while isPending is true
    if (props.isPending) {
        props.onPress = undefined;
        props.onPressStart = undefined;
        props.onPressEnd = undefined;
        props.onPressChange = undefined;
        props.onPressUp = undefined;
        props.onKeyDown = undefined;
        props.onKeyUp = undefined;
        props.onClick = undefined;
        props.href = undefined;
    }
    return props;
}


export {$d2b4bc8c273e7be6$export$24d547caef80ccd1 as ButtonContext, $d2b4bc8c273e7be6$export$353f5b6fc5456de1 as Button};
//# sourceMappingURL=Button.module.js.map
