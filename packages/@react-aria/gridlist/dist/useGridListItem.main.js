var $7db02799adae605d$exports = require("./utils.main.js");
var $911qM$reactariautils = require("@react-aria/utils");
var $911qM$reactariafocus = require("@react-aria/focus");
var $911qM$reactstatelycollections = require("@react-stately/collections");
var $911qM$react = require("react");
var $911qM$reactariainteractions = require("@react-aria/interactions");
var $911qM$reactariaselection = require("@react-aria/selection");
var $911qM$reactariai18n = require("@react-aria/i18n");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "useGridListItem", () => $f7116f5928c03f32$export$9610e69494fadfd2);
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







const $f7116f5928c03f32$var$EXPANSION_KEYS = {
    'expand': {
        ltr: 'ArrowRight',
        rtl: 'ArrowLeft'
    },
    'collapse': {
        ltr: 'ArrowLeft',
        rtl: 'ArrowRight'
    }
};
function $f7116f5928c03f32$export$9610e69494fadfd2(props, state, ref) {
    var _node_props, _node_props1;
    // Copied from useGridCell + some modifications to make it not so grid specific
    let { node: node, isVirtualized: isVirtualized, shouldSelectOnPressUp: shouldSelectOnPressUp } = props;
    // let stringFormatter = useLocalizedStringFormatter(intlMessages, '@react-aria/gridlist');
    let { direction: direction } = (0, $911qM$reactariai18n.useLocale)();
    let { onAction: onAction, linkBehavior: linkBehavior, keyboardNavigationBehavior: keyboardNavigationBehavior } = (0, $7db02799adae605d$exports.listMap).get(state);
    let descriptionId = (0, $911qM$reactariautils.useSlotId)();
    // We need to track the key of the item at the time it was last focused so that we force
    // focus to go to the item when the DOM node is reused for a different item in a virtualizer.
    let keyWhenFocused = (0, $911qM$react.useRef)(null);
    let focus = ()=>{
        var _ref_current;
        // Don't shift focus to the row if the active element is a element within the row already
        // (e.g. clicking on a row button)
        if (ref.current !== null && (keyWhenFocused.current != null && node.key !== keyWhenFocused.current || !((_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.contains(document.activeElement)))) (0, $911qM$reactariafocus.focusSafely)(ref.current);
    };
    let treeGridRowProps = {};
    let hasChildRows;
    let hasLink = state.selectionManager.isLink(node.key);
    if (node != null && 'expandedKeys' in state) {
        var _state_collection_getChildren, _state_collection, _filter_at;
        // TODO: ideally node.hasChildNodes would be a way to tell if a row has child nodes, but the row's contents make it so that value is always
        // true...
        let children = (_state_collection_getChildren = (_state_collection = state.collection).getChildren) === null || _state_collection_getChildren === void 0 ? void 0 : _state_collection_getChildren.call(_state_collection, node.key);
        hasChildRows = [
            ...children !== null && children !== void 0 ? children : []
        ].length > 1;
        if (onAction == null && !hasLink && state.selectionManager.selectionMode === 'none' && hasChildRows) onAction = ()=>state.toggleKey(node.key);
        let isExpanded = hasChildRows ? state.expandedKeys.has(node.key) : undefined;
        let setSize = 1;
        var _filter_at_index;
        if (node.level > 0 && (node === null || node === void 0 ? void 0 : node.parentKey) != null) {
            let parent = state.collection.getItem(node.parentKey);
            if (parent) {
                var _state_collection_getChildren1, _state_collection1;
                // siblings must exist because our original node exists, same with lastItem
                let siblings = (_state_collection_getChildren1 = (_state_collection1 = state.collection).getChildren) === null || _state_collection_getChildren1 === void 0 ? void 0 : _state_collection_getChildren1.call(_state_collection1, parent.key);
                setSize = (0, $911qM$reactstatelycollections.getLastItem)(siblings).index + 1;
            }
        } else setSize = ((_filter_at_index = (_filter_at = [
            ...state.collection
        ].filter((row)=>row.level === 0).at(-1)) === null || _filter_at === void 0 ? void 0 : _filter_at.index) !== null && _filter_at_index !== void 0 ? _filter_at_index : 0) + 1;
        treeGridRowProps = {
            'aria-expanded': isExpanded,
            'aria-level': node.level + 1,
            'aria-posinset': (node === null || node === void 0 ? void 0 : node.index) + 1,
            'aria-setsize': setSize
        };
    }
    let { itemProps: itemProps, ...itemStates } = (0, $911qM$reactariaselection.useSelectableItem)({
        selectionManager: state.selectionManager,
        key: node.key,
        ref: ref,
        isVirtualized: isVirtualized,
        shouldSelectOnPressUp: shouldSelectOnPressUp,
        onAction: onAction || ((_node_props = node.props) === null || _node_props === void 0 ? void 0 : _node_props.onAction) ? (0, $911qM$reactariautils.chain)((_node_props1 = node.props) === null || _node_props1 === void 0 ? void 0 : _node_props1.onAction, onAction ? ()=>onAction(node.key) : undefined) : undefined,
        focus: focus,
        linkBehavior: linkBehavior
    });
    let onKeyDown = (e)=>{
        if (!e.currentTarget.contains(e.target) || !ref.current || !document.activeElement) return;
        let walker = (0, $911qM$reactariafocus.getFocusableTreeWalker)(ref.current);
        walker.currentNode = document.activeElement;
        if ('expandedKeys' in state && document.activeElement === ref.current) {
            if (e.key === $f7116f5928c03f32$var$EXPANSION_KEYS['expand'][direction] && state.selectionManager.focusedKey === node.key && hasChildRows && !state.expandedKeys.has(node.key)) {
                state.toggleKey(node.key);
                e.stopPropagation();
                return;
            } else if (e.key === $f7116f5928c03f32$var$EXPANSION_KEYS['collapse'][direction] && state.selectionManager.focusedKey === node.key && hasChildRows && state.expandedKeys.has(node.key)) {
                state.toggleKey(node.key);
                e.stopPropagation();
                return;
            }
        }
        switch(e.key){
            case 'ArrowLeft':
                if (keyboardNavigationBehavior === 'arrow') {
                    // Find the next focusable element within the row.
                    let focusable = direction === 'rtl' ? walker.nextNode() : walker.previousNode();
                    if (focusable) {
                        e.preventDefault();
                        e.stopPropagation();
                        (0, $911qM$reactariafocus.focusSafely)(focusable);
                        (0, $911qM$reactariautils.scrollIntoViewport)(focusable, {
                            containingElement: (0, $911qM$reactariautils.getScrollParent)(ref.current)
                        });
                    } else {
                        // If there is no next focusable child, then return focus back to the row
                        e.preventDefault();
                        e.stopPropagation();
                        if (direction === 'rtl') {
                            (0, $911qM$reactariafocus.focusSafely)(ref.current);
                            (0, $911qM$reactariautils.scrollIntoViewport)(ref.current, {
                                containingElement: (0, $911qM$reactariautils.getScrollParent)(ref.current)
                            });
                        } else {
                            walker.currentNode = ref.current;
                            let lastElement = $f7116f5928c03f32$var$last(walker);
                            if (lastElement) {
                                (0, $911qM$reactariafocus.focusSafely)(lastElement);
                                (0, $911qM$reactariautils.scrollIntoViewport)(lastElement, {
                                    containingElement: (0, $911qM$reactariautils.getScrollParent)(ref.current)
                                });
                            }
                        }
                    }
                }
                break;
            case 'ArrowRight':
                if (keyboardNavigationBehavior === 'arrow') {
                    let focusable = direction === 'rtl' ? walker.previousNode() : walker.nextNode();
                    if (focusable) {
                        e.preventDefault();
                        e.stopPropagation();
                        (0, $911qM$reactariafocus.focusSafely)(focusable);
                        (0, $911qM$reactariautils.scrollIntoViewport)(focusable, {
                            containingElement: (0, $911qM$reactariautils.getScrollParent)(ref.current)
                        });
                    } else {
                        e.preventDefault();
                        e.stopPropagation();
                        if (direction === 'ltr') {
                            (0, $911qM$reactariafocus.focusSafely)(ref.current);
                            (0, $911qM$reactariautils.scrollIntoViewport)(ref.current, {
                                containingElement: (0, $911qM$reactariautils.getScrollParent)(ref.current)
                            });
                        } else {
                            walker.currentNode = ref.current;
                            let lastElement = $f7116f5928c03f32$var$last(walker);
                            if (lastElement) {
                                (0, $911qM$reactariafocus.focusSafely)(lastElement);
                                (0, $911qM$reactariautils.scrollIntoViewport)(lastElement, {
                                    containingElement: (0, $911qM$reactariautils.getScrollParent)(ref.current)
                                });
                            }
                        }
                    }
                }
                break;
            case 'ArrowUp':
            case 'ArrowDown':
                // Prevent this event from reaching row children, e.g. menu buttons. We want arrow keys to navigate
                // to the row above/below instead. We need to re-dispatch the event from a higher parent so it still
                // bubbles and gets handled by useSelectableCollection.
                if (!e.altKey && ref.current.contains(e.target)) {
                    var _ref_current_parentElement;
                    e.stopPropagation();
                    e.preventDefault();
                    (_ref_current_parentElement = ref.current.parentElement) === null || _ref_current_parentElement === void 0 ? void 0 : _ref_current_parentElement.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent));
                }
                break;
            case 'Tab':
                if (keyboardNavigationBehavior === 'tab') {
                    // If there is another focusable element within this item, stop propagation so the tab key
                    // is handled by the browser and not by useSelectableCollection (which would take us out of the list).
                    let walker = (0, $911qM$reactariafocus.getFocusableTreeWalker)(ref.current, {
                        tabbable: true
                    });
                    walker.currentNode = document.activeElement;
                    let next = e.shiftKey ? walker.previousNode() : walker.nextNode();
                    if (next) e.stopPropagation();
                }
        }
    };
    let onFocus = (e)=>{
        keyWhenFocused.current = node.key;
        if (e.target !== ref.current) {
            // useSelectableItem only handles setting the focused key when
            // the focused element is the row itself. We also want to
            // set the focused key when a child element receives focus.
            // If focus is currently visible (e.g. the user is navigating with the keyboard),
            // then skip this. We want to restore focus to the previously focused row
            // in that case since the list should act like a single tab stop.
            if (!(0, $911qM$reactariainteractions.isFocusVisible)()) state.selectionManager.setFocusedKey(node.key);
            return;
        }
    };
    let syntheticLinkProps = (0, $911qM$reactariautils.useSyntheticLinkProps)(node.props);
    let linkProps = itemStates.hasAction ? syntheticLinkProps : {};
    // TODO: re-add when we get translations and fix this for iOS VO
    // let rowAnnouncement;
    // if (onAction) {
    //   rowAnnouncement = stringFormatter.format('hasActionAnnouncement');
    // } else if (hasLink) {
    //   rowAnnouncement = stringFormatter.format('hasLinkAnnouncement', {
    //     link: node.props.href
    //   });
    // }
    let rowProps = (0, $911qM$reactariautils.mergeProps)(itemProps, linkProps, {
        role: 'row',
        onKeyDownCapture: onKeyDown,
        onFocus: onFocus,
        // 'aria-label': [(node.textValue || undefined), rowAnnouncement].filter(Boolean).join(', '),
        'aria-label': node.textValue || undefined,
        'aria-selected': state.selectionManager.canSelectItem(node.key) ? state.selectionManager.isSelected(node.key) : undefined,
        'aria-disabled': state.selectionManager.isDisabled(node.key) || undefined,
        'aria-labelledby': descriptionId && node.textValue ? `${(0, $7db02799adae605d$exports.getRowId)(state, node.key)} ${descriptionId}` : undefined,
        id: (0, $7db02799adae605d$exports.getRowId)(state, node.key)
    });
    if (isVirtualized) rowProps['aria-rowindex'] = node.index + 1;
    let gridCellProps = {
        role: 'gridcell',
        'aria-colindex': 1
    };
    // TODO: should isExpanded and hasChildRows be a item state that gets returned by the hook?
    return {
        rowProps: {
            ...(0, $911qM$reactariautils.mergeProps)(rowProps, treeGridRowProps)
        },
        gridCellProps: gridCellProps,
        descriptionProps: {
            id: descriptionId
        },
        ...itemStates
    };
}
function $f7116f5928c03f32$var$last(walker) {
    let next = null;
    let last = null;
    do {
        last = walker.lastChild();
        if (last) next = last;
    }while (last);
    return next;
}


//# sourceMappingURL=useGridListItem.main.js.map
