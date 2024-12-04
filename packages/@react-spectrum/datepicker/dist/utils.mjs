import {createDOMRef as $d7JPl$createDOMRef} from "@react-spectrum/utils";
import {createFocusManager as $d7JPl$createFocusManager} from "@react-aria/focus";
import {useDateFormatter as $d7JPl$useDateFormatter, useLocale as $d7JPl$useLocale} from "@react-aria/i18n";
import {useDisplayNames as $d7JPl$useDisplayNames} from "@react-aria/datepicker";
import {useMemo as $d7JPl$useMemo, useState as $d7JPl$useState, useRef as $d7JPl$useRef, useImperativeHandle as $d7JPl$useImperativeHandle} from "react";
import {useLayoutEffect as $d7JPl$useLayoutEffect} from "@react-aria/utils";
import {useProvider as $d7JPl$useProvider} from "@react-spectrum/provider";

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






function $04e96200274b03de$export$322f4580ccd8dde6(props) {
    let formatter = (0, $d7JPl$useDateFormatter)({
        dateStyle: 'short'
    });
    let displayNames = (0, $d7JPl$useDisplayNames)();
    return (0, $d7JPl$useMemo)(()=>{
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
function $04e96200274b03de$export$12ce2869ce471b1f(maxVisibleMonths) {
    let { scale: scale } = (0, $d7JPl$useProvider)();
    let [visibleMonths, setVisibleMonths] = (0, $d7JPl$useState)($04e96200274b03de$var$getVisibleMonths(scale));
    (0, $d7JPl$useLayoutEffect)(()=>{
        let onResize = ()=>setVisibleMonths($04e96200274b03de$var$getVisibleMonths(scale));
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
function $04e96200274b03de$var$getVisibleMonths(scale) {
    if (typeof window === 'undefined') return 1;
    let monthWidth = scale === 'large' ? 336 : 280;
    let gap = scale === 'large' ? 30 : 24;
    let popoverPadding = scale === 'large' ? 32 : 48;
    return Math.floor((window.innerWidth - popoverPadding * 2) / (monthWidth + gap));
}
function $04e96200274b03de$export$71a23a36270e4bf0(ref) {
    let domRef = (0, $d7JPl$useRef)(null);
    (0, $d7JPl$useImperativeHandle)(ref, ()=>({
            ...(0, $d7JPl$createDOMRef)(domRef),
            focus () {
                (0, $d7JPl$createFocusManager)(domRef).focusFirst({
                    tabbable: true
                });
            }
        }));
    return domRef;
}
function $04e96200274b03de$export$31e22e3c931fc056(state) {
    var _useLocale;
    let locale = (_useLocale = (0, $d7JPl$useLocale)()) === null || _useLocale === void 0 ? void 0 : _useLocale.locale;
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


export {$04e96200274b03de$export$322f4580ccd8dde6 as useFormatHelpText, $04e96200274b03de$export$12ce2869ce471b1f as useVisibleMonths, $04e96200274b03de$export$71a23a36270e4bf0 as useFocusManagerRef, $04e96200274b03de$export$31e22e3c931fc056 as useFormattedDateWidth};
//# sourceMappingURL=utils.module.js.map
