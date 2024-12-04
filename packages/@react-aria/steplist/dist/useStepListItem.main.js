var $V5kbE$reactariaselection = require("@react-aria/selection");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "useStepListItem", () => $0246bc8e841080a9$export$fd9dc107b7325b53);
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
function $0246bc8e841080a9$export$fd9dc107b7325b53(props, state, ref) {
    const { key: key } = props;
    let { selectionManager: manager, selectedKey: selectedKey } = state;
    let isDisabled = !state.isSelectable(key);
    let { itemProps: itemProps } = (0, $V5kbE$reactariaselection.useSelectableItem)({
        isDisabled: isDisabled,
        key: key,
        ref: ref,
        selectionManager: manager
    });
    const isSelected = selectedKey === key;
    let onKeyDown = (event)=>{
        var _itemProps_onKeyDown;
        const { key: eventKey } = event;
        if (eventKey === 'ArrowDown' || eventKey === 'ArrowUp') {
            event.preventDefault();
            event.stopPropagation();
        }
        (_itemProps_onKeyDown = itemProps.onKeyDown) === null || _itemProps_onKeyDown === void 0 ? void 0 : _itemProps_onKeyDown.call(itemProps, event);
    };
    return {
        stepProps: {
            ...itemProps,
            onKeyDown: onKeyDown,
            role: 'link',
            'aria-current': isSelected ? 'step' : undefined,
            'aria-disabled': isDisabled ? true : undefined,
            tabIndex: !isDisabled ? 0 : undefined
        }
    };
}


//# sourceMappingURL=useStepListItem.main.js.map
