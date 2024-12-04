var $c5ccf687772c0422$exports = require("./utils.main.js");
var $0d6436f6a1b0b001$exports = require("./ProgressBar.main.js");
var $3vfYa$reactarialiveannouncer = require("@react-aria/live-announcer");
var $3vfYa$reactaria = require("react-aria");
var $3vfYa$reactariacollections = require("@react-aria/collections");
var $3vfYa$reactariautils = require("@react-aria/utils");
var $3vfYa$react = require("react");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "ButtonContext", () => $b856e6788a7ea5bf$export$24d547caef80ccd1);
$parcel$export(module.exports, "Button", () => $b856e6788a7ea5bf$export$353f5b6fc5456de1);
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






const $b856e6788a7ea5bf$var$additionalButtonHTMLAttributes = new Set([
    'form',
    'formAction',
    'formEncType',
    'formMethod',
    'formNoValidate',
    'formTarget',
    'name',
    'value'
]);
const $b856e6788a7ea5bf$export$24d547caef80ccd1 = /*#__PURE__*/ (0, $3vfYa$react.createContext)({});
const $b856e6788a7ea5bf$export$353f5b6fc5456de1 = /*#__PURE__*/ (0, $3vfYa$reactariacollections.createHideableComponent)(function Button(props, ref) {
    [props, ref] = (0, $c5ccf687772c0422$exports.useContextProps)(props, ref, $b856e6788a7ea5bf$export$24d547caef80ccd1);
    props = $b856e6788a7ea5bf$var$disablePendingProps(props);
    let ctx = props;
    let { isPending: isPending } = ctx;
    let { buttonProps: buttonProps, isPressed: isPressed } = (0, $3vfYa$reactaria.useButton)(props, ref);
    let { focusProps: focusProps, isFocused: isFocused, isFocusVisible: isFocusVisible } = (0, $3vfYa$reactaria.useFocusRing)(props);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $3vfYa$reactaria.useHover)({
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
    let renderProps = (0, $c5ccf687772c0422$exports.useRenderProps)({
        ...props,
        values: renderValues,
        defaultClassName: 'react-aria-Button'
    });
    let buttonId = (0, $3vfYa$reactaria.useId)(buttonProps.id);
    let progressId = (0, $3vfYa$reactaria.useId)();
    let ariaLabelledby = buttonProps['aria-labelledby'];
    if (isPending) {
        // aria-labelledby wins over aria-label
        // https://www.w3.org/TR/accname-1.2/#computation-steps
        if (ariaLabelledby) ariaLabelledby = `${ariaLabelledby} ${progressId}`;
        else if (buttonProps['aria-label']) ariaLabelledby = `${buttonId} ${progressId}`;
    }
    let wasPending = (0, $3vfYa$react.useRef)(isPending);
    (0, $3vfYa$react.useEffect)(()=>{
        let message = {
            'aria-labelledby': ariaLabelledby || buttonId
        };
        if (!wasPending.current && isFocused && isPending) (0, $3vfYa$reactarialiveannouncer.announce)(message, 'assertive');
        else if (wasPending.current && isFocused && !isPending) (0, $3vfYa$reactarialiveannouncer.announce)(message, 'assertive');
        wasPending.current = isPending;
    }, [
        isPending,
        isFocused,
        ariaLabelledby,
        buttonId
    ]);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($3vfYa$react))).createElement("button", {
        ...(0, $3vfYa$reactariautils.filterDOMProps)(props, {
            propNames: $b856e6788a7ea5bf$var$additionalButtonHTMLAttributes
        }),
        ...(0, $3vfYa$reactaria.mergeProps)(buttonProps, focusProps, hoverProps),
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
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($3vfYa$react))).createElement((0, $0d6436f6a1b0b001$exports.ProgressBarContext).Provider, {
        value: {
            id: progressId
        }
    }, renderProps.children));
});
function $b856e6788a7ea5bf$var$disablePendingProps(props) {
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


//# sourceMappingURL=Button.main.js.map
