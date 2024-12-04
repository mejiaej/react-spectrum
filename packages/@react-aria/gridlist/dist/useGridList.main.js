var $7db02799adae605d$exports = require("./utils.main.js");
var $i2dnl$reactariautils = require("@react-aria/utils");
var $i2dnl$reactariagrid = require("@react-aria/grid");
var $i2dnl$reactariafocus = require("@react-aria/focus");
var $i2dnl$reactariaselection = require("@react-aria/selection");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "useGridList", () => $acf209ae814f1c93$export$664f9155035607eb);
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




function $acf209ae814f1c93$export$664f9155035607eb(props, state, ref) {
    let { isVirtualized: isVirtualized, keyboardDelegate: keyboardDelegate, layoutDelegate: layoutDelegate, onAction: onAction, linkBehavior: linkBehavior = 'action', keyboardNavigationBehavior: keyboardNavigationBehavior = 'arrow' } = props;
    if (!props['aria-label'] && !props['aria-labelledby']) console.warn('An aria-label or aria-labelledby prop is required for accessibility.');
    let { listProps: listProps } = (0, $i2dnl$reactariaselection.useSelectableList)({
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
    let id = (0, $i2dnl$reactariautils.useId)(props.id);
    (0, $7db02799adae605d$exports.listMap).set(state, {
        id: id,
        onAction: onAction,
        linkBehavior: linkBehavior,
        keyboardNavigationBehavior: keyboardNavigationBehavior
    });
    let descriptionProps = (0, $i2dnl$reactariagrid.useHighlightSelectionDescription)({
        selectionManager: state.selectionManager,
        hasItemActions: !!onAction
    });
    let hasTabbableChild = (0, $i2dnl$reactariafocus.useHasTabbableChild)(ref, {
        isDisabled: state.collection.size !== 0
    });
    let domProps = (0, $i2dnl$reactariautils.filterDOMProps)(props, {
        labelable: true
    });
    let gridProps = (0, $i2dnl$reactariautils.mergeProps)(domProps, {
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
    (0, $i2dnl$reactariagrid.useGridSelectionAnnouncement)({}, state);
    return {
        gridProps: gridProps
    };
}


//# sourceMappingURL=useGridList.main.js.map
