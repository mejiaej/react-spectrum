var $61dVa$reactspectrumutils = require("@react-spectrum/utils");
var $61dVa$reactariafocus = require("@react-aria/focus");
var $61dVa$reactariai18n = require("@react-aria/i18n");
var $61dVa$reactariadatepicker = require("@react-aria/datepicker");
var $61dVa$react = require("react");
var $61dVa$reactariautils = require("@react-aria/utils");
var $61dVa$reactspectrumprovider = require("@react-spectrum/provider");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "useFormatHelpText", () => $4d2e419f522adb48$export$322f4580ccd8dde6);
$parcel$export(module.exports, "useVisibleMonths", () => $4d2e419f522adb48$export$12ce2869ce471b1f);
$parcel$export(module.exports, "useFocusManagerRef", () => $4d2e419f522adb48$export$71a23a36270e4bf0);
$parcel$export(module.exports, "useFormattedDateWidth", () => $4d2e419f522adb48$export$31e22e3c931fc056);
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






function $4d2e419f522adb48$export$322f4580ccd8dde6(props) {
    let formatter = (0, $61dVa$reactariai18n.useDateFormatter)({
        dateStyle: 'short'
    });
    let displayNames = (0, $61dVa$reactariadatepicker.useDisplayNames)();
    return (0, $61dVa$react.useMemo)(()=>{
        if (props.description) return props.description;
        if (props.showFormatHelpText) return formatter.formatToParts(new Date()).map((s)=>{
            if (s.type === 'literal') return s.value;
            return displayNames.of(s.type);
        }).join(' ');
        return '';
    }, [
        props.description,
        props.showFormatHelpText,
        formatter,
        displayNames
    ]);
}
function $4d2e419f522adb48$export$12ce2869ce471b1f(maxVisibleMonths) {
    let { scale: scale } = (0, $61dVa$reactspectrumprovider.useProvider)();
    let [visibleMonths, setVisibleMonths] = (0, $61dVa$react.useState)($4d2e419f522adb48$var$getVisibleMonths(scale));
    (0, $61dVa$reactariautils.useLayoutEffect)(()=>{
        let onResize = ()=>setVisibleMonths($4d2e419f522adb48$var$getVisibleMonths(scale));
        onResize();
        window.addEventListener('resize', onResize);
        return ()=>{
            window.removeEventListener('resize', onResize);
        };
    }, [
        scale
    ]);
    return Math.max(1, Math.min(visibleMonths, maxVisibleMonths, 3));
}
function $4d2e419f522adb48$var$getVisibleMonths(scale) {
    if (typeof window === 'undefined') return 1;
    let monthWidth = scale === 'large' ? 336 : 280;
    let gap = scale === 'large' ? 30 : 24;
    let popoverPadding = scale === 'large' ? 32 : 48;
    return Math.floor((window.innerWidth - popoverPadding * 2) / (monthWidth + gap));
}
function $4d2e419f522adb48$export$71a23a36270e4bf0(ref) {
    let domRef = (0, $61dVa$react.useRef)(null);
    (0, $61dVa$react.useImperativeHandle)(ref, ()=>({
            ...(0, $61dVa$reactspectrumutils.createDOMRef)(domRef),
            focus () {
                (0, $61dVa$reactariafocus.createFocusManager)(domRef).focusFirst({
                    tabbable: true
                });
            }
        }));
    return domRef;
}
function $4d2e419f522adb48$export$31e22e3c931fc056(state) {
    var _useLocale;
    let locale = (_useLocale = (0, $61dVa$reactariai18n.useLocale)()) === null || _useLocale === void 0 ? void 0 : _useLocale.locale;
    let currentDate = new Date();
    let formatedDate = state.getDateFormatter(locale, {
        shouldForceLeadingZeros: true
    }).format(currentDate, locale);
    let totalCharacters = formatedDate.length;
    // The max of two is for times with only hours.
    // As the length of a date grows we need to proportionally increase the width.
    // We use the character count with 'ch' units and add extra padding to accomate for
    // dates with months and time dashes, which are wider characters.
    return totalCharacters + Math.max(Math.floor(totalCharacters / 5), 2);
}


//# sourceMappingURL=utils.main.js.map
