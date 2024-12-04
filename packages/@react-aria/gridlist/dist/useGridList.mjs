import {listMap as $ce9b18daab526bbd$export$5b9bb410392e3991} from "./utils.mjs";
import {useId as $lnALe$useId, filterDOMProps as $lnALe$filterDOMProps, mergeProps as $lnALe$mergeProps} from "@react-aria/utils";
import {useHighlightSelectionDescription as $lnALe$useHighlightSelectionDescription, useGridSelectionAnnouncement as $lnALe$useGridSelectionAnnouncement} from "@react-aria/grid";
import {useHasTabbableChild as $lnALe$useHasTabbableChild} from "@react-aria/focus";
import {useSelectableList as $lnALe$useSelectableList} from "@react-aria/selection";

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




function $f47efb0c3a859cf2$export$664f9155035607eb(props, state, ref) {
    let { isVirtualized: isVirtualized, keyboardDelegate: keyboardDelegate, layoutDelegate: layoutDelegate, onAction: onAction, linkBehavior: linkBehavior = 'action', keyboardNavigationBehavior: keyboardNavigationBehavior = 'arrow' } = props;
    if (!props['aria-label'] && !props['aria-labelledby']) console.warn('An aria-label or aria-labelledby prop is required for accessibility.');
    let { listProps: listProps } = (0, $lnALe$useSelectableList)({
        selectionManager: state.selectionManager,
        collection: state.collection,
        disabledKeys: state.disabledKeys,
        ref: ref,
        keyboardDelegate: keyboardDelegate,
        layoutDelegate: layoutDelegate,
        isVirtualized: isVirtualized,
        selectOnFocus: state.selectionManager.selectionBehavior === 'replace',
        shouldFocusWrap: props.shouldFocusWrap,
        linkBehavior: linkBehavior
    });
    let id = (0, $lnALe$useId)(props.id);
    (0, $ce9b18daab526bbd$export$5b9bb410392e3991).set(state, {
        id: id,
        onAction: onAction,
        linkBehavior: linkBehavior,
        keyboardNavigationBehavior: keyboardNavigationBehavior
    });
    let descriptionProps = (0, $lnALe$useHighlightSelectionDescription)({
        selectionManager: state.selectionManager,
        hasItemActions: !!onAction
    });
    let hasTabbableChild = (0, $lnALe$useHasTabbableChild)(ref, {
        isDisabled: state.collection.size !== 0
    });
    let domProps = (0, $lnALe$filterDOMProps)(props, {
        labelable: true
    });
    let gridProps = (0, $lnALe$mergeProps)(domProps, {
        role: 'grid',
        id: id,
        'aria-multiselectable': state.selectionManager.selectionMode === 'multiple' ? 'true' : undefined
    }, // If collection is empty, make sure the grid is tabbable unless there is a child tabbable element.
    state.collection.size === 0 ? {
        tabIndex: hasTabbableChild ? -1 : 0
    } : listProps, descriptionProps);
    if (isVirtualized) {
        gridProps['aria-rowcount'] = state.collection.size;
        gridProps['aria-colcount'] = 1;
    }
    (0, $lnALe$useGridSelectionAnnouncement)({}, state);
    return {
        gridProps: gridProps
    };
}


export {$f47efb0c3a859cf2$export$664f9155035607eb as useGridList};
//# sourceMappingURL=useGridList.module.js.map
