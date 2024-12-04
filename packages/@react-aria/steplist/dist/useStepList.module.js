import $lejUC$intlStringsmodulejs from "./intlStrings.module.js";
import {mergeProps as $lejUC$mergeProps, filterDOMProps as $lejUC$filterDOMProps} from "@react-aria/utils";
import {useLocalizedStringFormatter as $lejUC$useLocalizedStringFormatter} from "@react-aria/i18n";
import {useSelectableList as $lejUC$useSelectableList} from "@react-aria/selection";


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



function $8ca870e256ef9d32$export$c51c7b7354499d04(props, state, ref) {
    let { 'aria-label': ariaLabel } = props;
    let { listProps: listProps } = (0, $lejUC$useSelectableList)({
        ...props,
        ...state,
        allowsTabNavigation: true,
        ref: ref
    });
    const strings = (0, $lejUC$useLocalizedStringFormatter)((0, ($parcel$interopDefault($lejUC$intlStringsmodulejs))), '@react-aria/steplist');
    const stepListProps = {
        ...(0, $lejUC$mergeProps)(listProps, (0, $lejUC$filterDOMProps)(props, {
            labelable: true
        })),
        'aria-label': ariaLabel || strings.format('steplist')
    };
    return {
        listProps: {
            ...stepListProps,
            tabIndex: undefined
        }
    };
}


export {$8ca870e256ef9d32$export$c51c7b7354499d04 as useStepList};
//# sourceMappingURL=useStepList.module.js.map
