import {hookData as $d7323bca8d074eeb$export$653eddfc964b0f8a} from "./useTagGroup.module.js";
import $ioKwR$intlStringsmodulejs from "./intlStrings.module.js";
import {useId as $ioKwR$useId, useDescription as $ioKwR$useDescription, filterDOMProps as $ioKwR$filterDOMProps, useSyntheticLinkProps as $ioKwR$useSyntheticLinkProps, mergeProps as $ioKwR$mergeProps} from "@react-aria/utils";
import {useGridListItem as $ioKwR$useGridListItem} from "@react-aria/gridlist";
import {useInteractionModality as $ioKwR$useInteractionModality} from "@react-aria/interactions";
import {useLocalizedStringFormatter as $ioKwR$useLocalizedStringFormatter} from "@react-aria/i18n";


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





function $fc6126c82a4601f1$export$3f568fff7dff2f03(props, state, ref) {
    let { item: item } = props;
    let stringFormatter = (0, $ioKwR$useLocalizedStringFormatter)((0, ($parcel$interopDefault($ioKwR$intlStringsmodulejs))), '@react-aria/tag');
    let buttonId = (0, $ioKwR$useId)();
    let { onRemove: onRemove } = (0, $d7323bca8d074eeb$export$653eddfc964b0f8a).get(state) || {};
    let { rowProps: rowProps, gridCellProps: gridCellProps, ...states } = (0, $ioKwR$useGridListItem)({
        node: item
    }, state, ref);
    // We want the group to handle keyboard navigation between tags.
    delete rowProps.onKeyDownCapture;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let { descriptionProps: _, ...stateWithoutDescription } = states;
    let isDisabled = state.disabledKeys.has(item.key) || item.props.isDisabled;
    let onKeyDown = (e)=>{
        if (e.key === 'Delete' || e.key === 'Backspace') {
            if (isDisabled) return;
            e.preventDefault();
            if (state.selectionManager.isSelected(item.key)) onRemove === null || onRemove === void 0 ? void 0 : onRemove(new Set(state.selectionManager.selectedKeys));
            else onRemove === null || onRemove === void 0 ? void 0 : onRemove(new Set([
                item.key
            ]));
        }
    };
    let modality = (0, $ioKwR$useInteractionModality)();
    if (modality === 'virtual' && typeof window !== 'undefined' && 'ontouchstart' in window) modality = 'pointer';
    let description = onRemove && (modality === 'keyboard' || modality === 'virtual') ? stringFormatter.format('removeDescription') : '';
    let descProps = (0, $ioKwR$useDescription)(description);
    let isItemFocused = item.key === state.selectionManager.focusedKey;
    let isFocused = state.selectionManager.focusedKey != null;
    let tabIndex = -1;
    if (!isDisabled && (isItemFocused || !isFocused)) tabIndex = 0;
    let domProps = (0, $ioKwR$filterDOMProps)(item.props);
    let linkProps = (0, $ioKwR$useSyntheticLinkProps)(item.props);
    return {
        removeButtonProps: {
            'aria-label': stringFormatter.format('removeButtonLabel'),
            'aria-labelledby': `${buttonId} ${rowProps.id}`,
            isDisabled: isDisabled,
            id: buttonId,
            onPress: ()=>onRemove ? onRemove(new Set([
                    item.key
                ])) : null,
            excludeFromTabOrder: true
        },
        rowProps: (0, $ioKwR$mergeProps)(rowProps, domProps, linkProps, {
            tabIndex: tabIndex,
            onKeyDown: onRemove ? onKeyDown : undefined,
            'aria-describedby': descProps['aria-describedby']
        }),
        gridCellProps: (0, $ioKwR$mergeProps)(gridCellProps, {
            'aria-errormessage': props['aria-errormessage'],
            'aria-label': props['aria-label']
        }),
        ...stateWithoutDescription,
        allowsRemoving: !!onRemove
    };
}


export {$fc6126c82a4601f1$export$3f568fff7dff2f03 as useTag};
//# sourceMappingURL=useTag.module.js.map
