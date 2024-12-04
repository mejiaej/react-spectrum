var $09704b0efefe5140$exports = require("./useTagGroup.main.js");
var $b6a2538ff098a9ff$exports = require("./intlStrings.main.js");
var $8p8DL$reactariautils = require("@react-aria/utils");
var $8p8DL$reactariagridlist = require("@react-aria/gridlist");
var $8p8DL$reactariainteractions = require("@react-aria/interactions");
var $8p8DL$reactariai18n = require("@react-aria/i18n");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "useTag", () => $a442534c81d8ad16$export$3f568fff7dff2f03);
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





function $a442534c81d8ad16$export$3f568fff7dff2f03(props, state, ref) {
    let { item: item } = props;
    let stringFormatter = (0, $8p8DL$reactariai18n.useLocalizedStringFormatter)((0, ($parcel$interopDefault($b6a2538ff098a9ff$exports))), '@react-aria/tag');
    let buttonId = (0, $8p8DL$reactariautils.useId)();
    let { onRemove: onRemove } = (0, $09704b0efefe5140$exports.hookData).get(state) || {};
    let { rowProps: rowProps, gridCellProps: gridCellProps, ...states } = (0, $8p8DL$reactariagridlist.useGridListItem)({
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
    let modality = (0, $8p8DL$reactariainteractions.useInteractionModality)();
    if (modality === 'virtual' && typeof window !== 'undefined' && 'ontouchstart' in window) modality = 'pointer';
    let description = onRemove && (modality === 'keyboard' || modality === 'virtual') ? stringFormatter.format('removeDescription') : '';
    let descProps = (0, $8p8DL$reactariautils.useDescription)(description);
    let isItemFocused = item.key === state.selectionManager.focusedKey;
    let isFocused = state.selectionManager.focusedKey != null;
    let tabIndex = -1;
    if (!isDisabled && (isItemFocused || !isFocused)) tabIndex = 0;
    let domProps = (0, $8p8DL$reactariautils.filterDOMProps)(item.props);
    let linkProps = (0, $8p8DL$reactariautils.useSyntheticLinkProps)(item.props);
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
        rowProps: (0, $8p8DL$reactariautils.mergeProps)(rowProps, domProps, linkProps, {
            tabIndex: tabIndex,
            onKeyDown: onRemove ? onKeyDown : undefined,
            'aria-describedby': descProps['aria-describedby']
        }),
        gridCellProps: (0, $8p8DL$reactariautils.mergeProps)(gridCellProps, {
            'aria-errormessage': props['aria-errormessage'],
            'aria-label': props['aria-label']
        }),
        ...stateWithoutDescription,
        allowsRemoving: !!onRemove
    };
}


//# sourceMappingURL=useTag.main.js.map
