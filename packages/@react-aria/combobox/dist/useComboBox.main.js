var $8d1e5da058b86bb9$exports = require("./intlStrings.main.js");
var $BGXP4$reactarialiveannouncer = require("@react-aria/live-announcer");
var $BGXP4$reactariaoverlays = require("@react-aria/overlays");
var $BGXP4$reactarialistbox = require("@react-aria/listbox");
var $BGXP4$reactariautils = require("@react-aria/utils");
var $BGXP4$react = require("react");
var $BGXP4$reactstatelycollections = require("@react-stately/collections");
var $BGXP4$reactariaselection = require("@react-aria/selection");
var $BGXP4$reactstatelyform = require("@react-stately/form");
var $BGXP4$reactariai18n = require("@react-aria/i18n");
var $BGXP4$reactariamenu = require("@react-aria/menu");
var $BGXP4$reactariatextfield = require("@react-aria/textfield");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "useComboBox", () => $242452271d1e4c0e$export$8c18d1b4f7232bbf);
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











function $242452271d1e4c0e$export$8c18d1b4f7232bbf(props, state) {
    let { buttonRef: buttonRef, popoverRef: popoverRef, inputRef: inputRef, listBoxRef: listBoxRef, keyboardDelegate: keyboardDelegate, layoutDelegate: layoutDelegate, shouldFocusWrap: // completionMode = 'suggest',
    shouldFocusWrap, isReadOnly: isReadOnly, isDisabled: isDisabled, rootRef: rootRef } = props;
    let backupBtnRef = (0, $BGXP4$react.useRef)(null);
    buttonRef = buttonRef !== null && buttonRef !== void 0 ? buttonRef : backupBtnRef;
    let stringFormatter = (0, $BGXP4$reactariai18n.useLocalizedStringFormatter)((0, ($parcel$interopDefault($8d1e5da058b86bb9$exports))), '@react-aria/combobox');
    let { menuTriggerProps: menuTriggerProps, menuProps: menuProps } = (0, $BGXP4$reactariamenu.useMenuTrigger)({
        type: 'listbox',
        isDisabled: isDisabled || isReadOnly
    }, state, buttonRef);
    // Set listbox id so it can be used when calling getItemId later
    (0, $BGXP4$reactarialistbox.listData).set(state, {
        id: menuProps.id
    });
    // By default, a KeyboardDelegate is provided which uses the DOM to query layout information (e.g. for page up/page down).
    // When virtualized, the layout object will be passed in as a prop and override this.
    let { collection: collection } = state;
    let { disabledKeys: disabledKeys } = state.selectionManager;
    let delegate = (0, $BGXP4$react.useMemo)(()=>keyboardDelegate || new (0, $BGXP4$reactariaselection.ListKeyboardDelegate)({
            collection: collection,
            disabledKeys: disabledKeys,
            ref: listBoxRef,
            layoutDelegate: layoutDelegate
        }), [
        keyboardDelegate,
        layoutDelegate,
        collection,
        disabledKeys,
        listBoxRef
    ]);
    // Use useSelectableCollection to get the keyboard handlers to apply to the textfield
    let { collectionProps: collectionProps } = (0, $BGXP4$reactariaselection.useSelectableCollection)({
        selectionManager: state.selectionManager,
        keyboardDelegate: delegate,
        disallowTypeAhead: true,
        disallowEmptySelection: true,
        shouldFocusWrap: shouldFocusWrap,
        ref: inputRef,
        // Prevent item scroll behavior from being applied here, should be handled in the user's Popover + ListBox component
        isVirtualized: true
    });
    let router = (0, $BGXP4$reactariautils.useRouter)();
    // For textfield specific keydown operations
    let onKeyDown = (e)=>{
        if (e.nativeEvent.isComposing) return;
        switch(e.key){
            case 'Enter':
            case 'Tab':
                // Prevent form submission if menu is open since we may be selecting a option
                if (state.isOpen && e.key === 'Enter') e.preventDefault();
                // If the focused item is a link, trigger opening it. Items that are links are not selectable.
                if (state.isOpen && listBoxRef.current && state.selectionManager.focusedKey != null && state.selectionManager.isLink(state.selectionManager.focusedKey)) {
                    let item = listBoxRef.current.querySelector(`[data-key="${CSS.escape(state.selectionManager.focusedKey.toString())}"]`);
                    if (e.key === 'Enter' && item instanceof HTMLAnchorElement) {
                        let collectionItem = state.collection.getItem(state.selectionManager.focusedKey);
                        if (collectionItem) router.open(item, e, collectionItem.props.href, collectionItem.props.routerOptions);
                    }
                    state.close();
                } else state.commit();
                break;
            case 'Escape':
                if (state.selectedKey !== null || state.inputValue === '' || props.allowsCustomValue) e.continuePropagation();
                state.revert();
                break;
            case 'ArrowDown':
                state.open('first', 'manual');
                break;
            case 'ArrowUp':
                state.open('last', 'manual');
                break;
            case 'ArrowLeft':
            case 'ArrowRight':
                state.selectionManager.setFocusedKey(null);
                break;
        }
    };
    let onBlur = (e)=>{
        var _popoverRef_current;
        let blurFromButton = (buttonRef === null || buttonRef === void 0 ? void 0 : buttonRef.current) && buttonRef.current === e.relatedTarget;
        let blurIntoPopover = (_popoverRef_current = popoverRef.current) === null || _popoverRef_current === void 0 ? void 0 : _popoverRef_current.contains(e.relatedTarget);
        // Ignore blur if focused moved to the button(if exists) or into the popover.
        if (blurFromButton || blurIntoPopover) return;
        if (props.onBlur) props.onBlur(e);
        state.setFocused(false);
    };
    let onFocus = (e)=>{
        if (state.isFocused) return;
        if (props.onFocus) props.onFocus(e);
        state.setFocused(true);
    };
    let { isInvalid: isInvalid, validationErrors: validationErrors, validationDetails: validationDetails } = state.displayValidation;
    let { labelProps: labelProps, inputProps: inputProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps } = (0, $BGXP4$reactariatextfield.useTextField)({
        ...props,
        onChange: state.setInputValue,
        onKeyDown: !isReadOnly ? (0, $BGXP4$reactariautils.chain)(state.isOpen && collectionProps.onKeyDown, onKeyDown, props.onKeyDown) : props.onKeyDown,
        onBlur: onBlur,
        value: state.inputValue,
        onFocus: onFocus,
        autoComplete: 'off',
        validate: undefined,
        [(0, $BGXP4$reactstatelyform.privateValidationStateProp)]: state
    }, inputRef);
    // Press handlers for the ComboBox button
    let onPress = (e)=>{
        if (e.pointerType === 'touch') {
            var // Focus the input field in case it isn't focused yet
            _inputRef_current;
            (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.focus();
            state.toggle(null, 'manual');
        }
    };
    let onPressStart = (e)=>{
        if (e.pointerType !== 'touch') {
            var _inputRef_current;
            (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.focus();
            state.toggle(e.pointerType === 'keyboard' || e.pointerType === 'virtual' ? 'first' : null, 'manual');
        }
    };
    let triggerLabelProps = (0, $BGXP4$reactariautils.useLabels)({
        id: menuTriggerProps.id,
        'aria-label': stringFormatter.format('buttonLabel'),
        'aria-labelledby': props['aria-labelledby'] || labelProps.id
    });
    let listBoxProps = (0, $BGXP4$reactariautils.useLabels)({
        id: menuProps.id,
        'aria-label': stringFormatter.format('listboxLabel'),
        'aria-labelledby': props['aria-labelledby'] || labelProps.id
    });
    // If a touch happens on direct center of ComboBox input, might be virtual click from iPad so open ComboBox menu
    let lastEventTime = (0, $BGXP4$react.useRef)(0);
    let onTouchEnd = (e)=>{
        if (isDisabled || isReadOnly) return;
        // Sometimes VoiceOver on iOS fires two touchend events in quick succession. Ignore the second one.
        if (e.timeStamp - lastEventTime.current < 500) {
            var _inputRef_current;
            e.preventDefault();
            (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.focus();
            return;
        }
        let rect = e.target.getBoundingClientRect();
        let touch = e.changedTouches[0];
        let centerX = Math.ceil(rect.left + .5 * rect.width);
        let centerY = Math.ceil(rect.top + .5 * rect.height);
        if (touch.clientX === centerX && touch.clientY === centerY) {
            var _inputRef_current1;
            e.preventDefault();
            (_inputRef_current1 = inputRef.current) === null || _inputRef_current1 === void 0 ? void 0 : _inputRef_current1.focus();
            state.toggle(null, 'manual');
            lastEventTime.current = e.timeStamp;
        }
    };
    // VoiceOver has issues with announcing aria-activedescendant properly on change
    // (especially on iOS). We use a live region announcer to announce focus changes
    // manually. In addition, section titles are announced when navigating into a new section.
    let focusedItem = state.selectionManager.focusedKey != null && state.isOpen ? state.collection.getItem(state.selectionManager.focusedKey) : undefined;
    var _focusedItem_parentKey;
    let sectionKey = (_focusedItem_parentKey = focusedItem === null || focusedItem === void 0 ? void 0 : focusedItem.parentKey) !== null && _focusedItem_parentKey !== void 0 ? _focusedItem_parentKey : null;
    var _state_selectionManager_focusedKey;
    let itemKey = (_state_selectionManager_focusedKey = state.selectionManager.focusedKey) !== null && _state_selectionManager_focusedKey !== void 0 ? _state_selectionManager_focusedKey : null;
    let lastSection = (0, $BGXP4$react.useRef)(sectionKey);
    let lastItem = (0, $BGXP4$react.useRef)(itemKey);
    (0, $BGXP4$react.useEffect)(()=>{
        if ((0, $BGXP4$reactariautils.isAppleDevice)() && focusedItem != null && itemKey != null && itemKey !== lastItem.current) {
            let isSelected = state.selectionManager.isSelected(itemKey);
            let section = sectionKey != null ? state.collection.getItem(sectionKey) : null;
            let sectionTitle = (section === null || section === void 0 ? void 0 : section['aria-label']) || (typeof (section === null || section === void 0 ? void 0 : section.rendered) === 'string' ? section.rendered : '') || '';
            var _ref;
            let announcement = stringFormatter.format('focusAnnouncement', {
                isGroupChange: (_ref = section && sectionKey !== lastSection.current) !== null && _ref !== void 0 ? _ref : false,
                groupTitle: sectionTitle,
                groupCount: section ? [
                    ...(0, $BGXP4$reactstatelycollections.getChildNodes)(section, state.collection)
                ].length : 0,
                optionText: focusedItem['aria-label'] || focusedItem.textValue || '',
                isSelected: isSelected
            });
            (0, $BGXP4$reactarialiveannouncer.announce)(announcement);
        }
        lastSection.current = sectionKey;
        lastItem.current = itemKey;
    });
    // Announce the number of available suggestions when it changes
    let optionCount = (0, $BGXP4$reactstatelycollections.getItemCount)(state.collection);
    let lastSize = (0, $BGXP4$react.useRef)(optionCount);
    let lastOpen = (0, $BGXP4$react.useRef)(state.isOpen);
    (0, $BGXP4$react.useEffect)(()=>{
        // Only announce the number of options available when the menu opens if there is no
        // focused item, otherwise screen readers will typically read e.g. "1 of 6".
        // The exception is VoiceOver since this isn't included in the message above.
        let didOpenWithoutFocusedItem = state.isOpen !== lastOpen.current && (state.selectionManager.focusedKey == null || (0, $BGXP4$reactariautils.isAppleDevice)());
        if (state.isOpen && (didOpenWithoutFocusedItem || optionCount !== lastSize.current)) {
            let announcement = stringFormatter.format('countAnnouncement', {
                optionCount: optionCount
            });
            (0, $BGXP4$reactarialiveannouncer.announce)(announcement);
        }
        lastSize.current = optionCount;
        lastOpen.current = state.isOpen;
    });
    // Announce when a selection occurs for VoiceOver. Other screen readers typically do this automatically.
    let lastSelectedKey = (0, $BGXP4$react.useRef)(state.selectedKey);
    (0, $BGXP4$react.useEffect)(()=>{
        if ((0, $BGXP4$reactariautils.isAppleDevice)() && state.isFocused && state.selectedItem && state.selectedKey !== lastSelectedKey.current) {
            let optionText = state.selectedItem['aria-label'] || state.selectedItem.textValue || '';
            let announcement = stringFormatter.format('selectedAnnouncement', {
                optionText: optionText
            });
            (0, $BGXP4$reactarialiveannouncer.announce)(announcement);
        }
        lastSelectedKey.current = state.selectedKey;
    });
    (0, $BGXP4$react.useEffect)(()=>{
        if (state.isOpen) return (0, $BGXP4$reactariaoverlays.ariaHideOutside)([
            inputRef.current,
            popoverRef.current
        ].filter((element)=>element != null), rootRef.current ? rootRef.current : undefined);
    }, [
        state.isOpen,
        inputRef,
        popoverRef,
        rootRef
    ]);
    return {
        labelProps: labelProps,
        buttonProps: {
            ...menuTriggerProps,
            ...triggerLabelProps,
            excludeFromTabOrder: true,
            preventFocusOnPress: true,
            onPress: onPress,
            onPressStart: onPressStart,
            isDisabled: isDisabled || isReadOnly
        },
        inputProps: (0, $BGXP4$reactariautils.mergeProps)(inputProps, {
            role: 'combobox',
            'aria-expanded': menuTriggerProps['aria-expanded'],
            'aria-controls': state.isOpen ? menuProps.id : undefined,
            // TODO: readd proper logic for completionMode = complete (aria-autocomplete: both)
            'aria-autocomplete': 'list',
            'aria-activedescendant': focusedItem ? (0, $BGXP4$reactarialistbox.getItemId)(state, focusedItem.key) : undefined,
            onTouchEnd: onTouchEnd,
            // This disable's iOS's autocorrect suggestions, since the combo box provides its own suggestions.
            autoCorrect: 'off',
            // This disable's the macOS Safari spell check auto corrections.
            spellCheck: 'false'
        }),
        listBoxProps: (0, $BGXP4$reactariautils.mergeProps)(menuProps, listBoxProps, {
            autoFocus: state.focusStrategy,
            shouldUseVirtualFocus: true,
            shouldSelectOnPressUp: true,
            shouldFocusOnHover: true,
            linkBehavior: 'selection'
        }),
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        isInvalid: isInvalid,
        validationErrors: validationErrors,
        validationDetails: validationDetails
    };
}


//# sourceMappingURL=useComboBox.main.js.map
