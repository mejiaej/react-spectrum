import {StepListContext as $739a883ac33f90d8$export$66136572efa4af6e} from "./StepListContext.module.js";
import {StepListItem as $24c3cb1adfb0acc5$export$87c2a8a94eda1754} from "./StepListItem.module.js";
import "./vars.09815770.css";
import $kkmdw$steplist_vars_cssmodulejs from "./steplist_vars_css.module.js";
import {useStepList as $kkmdw$useStepList} from "@react-aria/steplist";
import {useStyleProps as $kkmdw$useStyleProps, useDOMRef as $kkmdw$useDOMRef, classNames as $kkmdw$classNames} from "@react-spectrum/utils";
import $kkmdw$react from "react";
import {useProviderProps as $kkmdw$useProviderProps} from "@react-spectrum/provider";
import {useStepListState as $kkmdw$useStepListState} from "@react-stately/steplist";


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 







const $6bd0589d5d2f8b66$export$ff2e09ca3ba758a9 = /*#__PURE__*/ (0, $kkmdw$react).forwardRef(function StepList(props, ref) {
    const { size: size = 'M', orientation: orientation = 'horizontal' } = props;
    props = (0, $kkmdw$useProviderProps)(props);
    const { isDisabled: isDisabled, isEmphasized: isEmphasized } = props;
    let { styleProps: styleProps } = (0, $kkmdw$useStyleProps)(props);
    let domRef = (0, $kkmdw$useDOMRef)(ref);
    let state = (0, $kkmdw$useStepListState)(props);
    let { listProps: listProps } = (0, $kkmdw$useStepList)(props, state, domRef);
    return /*#__PURE__*/ (0, $kkmdw$react).createElement("ol", {
        ...listProps,
        ...styleProps,
        ref: domRef,
        className: (0, $kkmdw$classNames)((0, ($parcel$interopDefault($kkmdw$steplist_vars_cssmodulejs))), 'spectrum-Steplist', styleProps.className, {
            'spectrum-Steplist--small': size === 'S',
            'spectrum-Steplist--medium': size === 'M',
            'spectrum-Steplist--large': size === 'L',
            'spectrum-Steplist--xlarge': size === 'XL',
            'spectrum-Steplist--emphasized': isEmphasized,
            'spectrum-Steplist--horizontal': orientation === 'horizontal',
            'spectrum-Steplist--vertical': orientation === 'vertical'
        })
    }, /*#__PURE__*/ (0, $kkmdw$react).createElement((0, $739a883ac33f90d8$export$66136572efa4af6e).Provider, {
        value: state
    }, [
        ...state.collection
    ].map((item)=>/*#__PURE__*/ (0, $kkmdw$react).createElement((0, $24c3cb1adfb0acc5$export$87c2a8a94eda1754), {
            key: item.key,
            isDisabled: isDisabled,
            item: item
        }))));
});


export {$6bd0589d5d2f8b66$export$ff2e09ca3ba758a9 as StepList};
//# sourceMappingURL=StepList.module.js.map
