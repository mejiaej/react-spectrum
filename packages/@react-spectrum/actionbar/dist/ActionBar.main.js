var $b1ba52ca91e22687$exports = require("./intlStrings.main.js");
require("./actionbar.bdfe7eee.css");
var $ff24c7bbe0c168db$exports = require("./actionbar_css.main.js");
var $643e7$reactspectrumbutton = require("@react-spectrum/button");
var $643e7$reactspectrumactiongroup = require("@react-spectrum/actiongroup");
var $643e7$reactarialiveannouncer = require("@react-aria/live-announcer");
var $643e7$reactspectrumutils = require("@react-spectrum/utils");
var $643e7$spectrumiconsuiCrossLarge = require("@spectrum-icons/ui/CrossLarge");
var $643e7$reactariautils = require("@react-aria/utils");
var $643e7$reactariafocus = require("@react-aria/focus");
var $643e7$reactspectrumoverlays = require("@react-spectrum/overlays");
var $643e7$react = require("react");
var $643e7$reactspectrumtext = require("@react-spectrum/text");
var $643e7$reactariainteractions = require("@react-aria/interactions");
var $643e7$reactariai18n = require("@react-aria/i18n");
var $643e7$reactspectrumprovider = require("@react-spectrum/provider");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "ActionBar", () => $7b5467653feb1153$export$e213cebad6250b4a);
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














const $7b5467653feb1153$export$e213cebad6250b4a = /*#__PURE__*/ (0, ($parcel$interopDefault($643e7$react))).forwardRef(function ActionBar(props, ref) {
    let isOpen = props.selectedItemCount !== 0;
    let domRef = (0, $643e7$reactspectrumutils.useDOMRef)(ref);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($643e7$react))).createElement((0, $643e7$reactspectrumoverlays.OpenTransition), {
        nodeRef: domRef,
        in: isOpen,
        mountOnEnter: true,
        unmountOnExit: true
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($643e7$react))).createElement($7b5467653feb1153$var$ActionBarInnerWithRef, {
        ...props,
        ref: domRef
    }));
});
function $7b5467653feb1153$var$ActionBarInner(props, ref) {
    props = (0, $643e7$reactspectrumprovider.useProviderProps)(props);
    let { children: children, isEmphasized: isEmphasized, onAction: onAction, onClearSelection: onClearSelection, selectedItemCount: selectedItemCount, isOpen: isOpen, buttonLabelBehavior: buttonLabelBehavior = 'collapse', items: items, disabledKeys: disabledKeys } = props;
    let { styleProps: styleProps } = (0, $643e7$reactspectrumutils.useStyleProps)(props);
    let stringFormatter = (0, $643e7$reactariai18n.useLocalizedStringFormatter)((0, ($parcel$interopDefault($b1ba52ca91e22687$exports))), '@react-spectrum/actionbar');
    // Store the last count greater than zero in a ref so that we can retain it while rendering the fade-out animation.
    let [lastCount, setLastCount] = (0, $643e7$react.useState)(selectedItemCount);
    if ((selectedItemCount === 'all' || selectedItemCount > 0) && selectedItemCount !== lastCount) setLastCount(selectedItemCount);
    let { keyboardProps: keyboardProps } = (0, $643e7$reactariainteractions.useKeyboard)({
        onKeyDown (e) {
            if (e.key === 'Escape') {
                e.preventDefault();
                onClearSelection();
            }
        }
    });
    // Announce "actions available" on mount.
    let isInitial = (0, $643e7$react.useRef)(true);
    (0, $643e7$react.useEffect)(()=>{
        if (isInitial.current) {
            isInitial.current = false;
            (0, $643e7$reactarialiveannouncer.announce)(stringFormatter.format('actionsAvailable'));
        }
    }, [
        stringFormatter
    ]);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($643e7$react))).createElement((0, $643e7$reactariafocus.FocusScope), {
        restoreFocus: true
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($643e7$react))).createElement("div", {
        ...(0, $643e7$reactariautils.filterDOMProps)(props),
        ...styleProps,
        ...keyboardProps,
        ref: ref,
        className: (0, $643e7$reactspectrumutils.classNames)((0, ($parcel$interopDefault($ff24c7bbe0c168db$exports))), 'react-spectrum-ActionBar', {
            'react-spectrum-ActionBar--emphasized': isEmphasized,
            'is-open': isOpen
        }, styleProps.className)
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($643e7$react))).createElement("div", {
        className: (0, $643e7$reactspectrumutils.classNames)((0, ($parcel$interopDefault($ff24c7bbe0c168db$exports))), 'react-spectrum-ActionBar-bar')
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($643e7$react))).createElement((0, $643e7$reactspectrumactiongroup.ActionGroup), {
        items: items,
        "aria-label": stringFormatter.format('actions'),
        isQuiet: true,
        staticColor: isEmphasized ? 'white' : undefined,
        overflowMode: "collapse",
        buttonLabelBehavior: buttonLabelBehavior,
        onAction: onAction,
        disabledKeys: disabledKeys,
        UNSAFE_className: (0, $643e7$reactspectrumutils.classNames)((0, ($parcel$interopDefault($ff24c7bbe0c168db$exports))), 'react-spectrum-ActionBar-actionGroup')
    }, children), /*#__PURE__*/ (0, ($parcel$interopDefault($643e7$react))).createElement((0, $643e7$reactspectrumbutton.ActionButton), {
        gridArea: (0, ($parcel$interopDefault($ff24c7bbe0c168db$exports))).clear,
        "aria-label": stringFormatter.format('clearSelection'),
        onPress: ()=>onClearSelection(),
        isQuiet: true,
        staticColor: isEmphasized ? 'white' : undefined
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($643e7$react))).createElement((0, ($parcel$interopDefault($643e7$spectrumiconsuiCrossLarge))), null)), /*#__PURE__*/ (0, ($parcel$interopDefault($643e7$react))).createElement((0, $643e7$reactspectrumtext.Text), {
        UNSAFE_className: (0, $643e7$reactspectrumutils.classNames)((0, ($parcel$interopDefault($ff24c7bbe0c168db$exports))), 'react-spectrum-ActionBar-selectedCount')
    }, lastCount === 'all' ? stringFormatter.format('selectedAll') : stringFormatter.format('selected', {
        count: lastCount
    })))));
}
const $7b5467653feb1153$var$ActionBarInnerWithRef = /*#__PURE__*/ (0, ($parcel$interopDefault($643e7$react))).forwardRef($7b5467653feb1153$var$ActionBarInner);


//# sourceMappingURL=ActionBar.main.js.map
