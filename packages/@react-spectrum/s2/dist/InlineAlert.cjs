require("./InlineAlert.css");
var $7e7cdbd2b8ae2467$exports = require("../icons/AlertTriangle.cjs");
var $6391be254c189366$exports = require("../icons/CheckmarkCircle.cjs");
var $6367bc87eb7d24ad$exports = require("./Content.cjs");
var $bde97c91243ed164$exports = require("../icons/Icon.cjs");
var $0ed6e07b499b9797$exports = require("../icons/InfoCircle.cjs");
var $4526404114e78c80$exports = require("./intlStrings.cjs");
var $e861f394b642505b$exports = require("../icons/AlertDiamond.cjs");
var $ac757a4c2bd72aee$exports = require("../icons/useSpectrumContextProps.cjs");
var $3stts$reactjsxruntime = require("react/jsx-runtime");
var $3stts$react = require("react");
var $3stts$reactariacomponents = require("react-aria-components");
var $3stts$reactariautils = require("@react-aria/utils");
var $3stts$reactspectrumutils = require("@react-spectrum/utils");
var $3stts$reactaria = require("react-aria");
var $3stts$reactariai18n = require("@react-aria/i18n");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "InlineAlertContext", () => $72bf3a9f94a75d9f$export$c0de4eca0a8bf011);
$parcel$export(module.exports, "InlineAlert", () => $72bf3a9f94a75d9f$export$a3b2c96db9b0eb71);
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














const $72bf3a9f94a75d9f$export$c0de4eca0a8bf011 = /*#__PURE__*/ (0, $3stts$react.createContext)(null);
const $72bf3a9f94a75d9f$var$inlineAlert = function anonymous(props, overrides) {
    let rules = " .";
    let matches = (overrides || '').match(/(?:^|\s)(?:y|z|A|B|_9|_8|h|_5|_4|__A|__c|__d|__a|__b|U|__Q|X|Z|V|W|l|q|r)[^\s]+/g) || [];
    rules += matches.join('');
    let $U = false;
    let $r = false;
    for (let p of matches){
        if (/^\s*U/.test(p)) $U = true;
        if (/^\s*r/.test(p)) $r = true;
    }
    if (props.isFocusVisible) rules += ' _Lb';
    else rules += ' _La';
    rules += ' da_____z';
    rules += ' dx';
    rules += ' _Nc';
    rules += ' _M-3t1z';
    rules += ' _Zb';
    if (!$U) rules += ' Uc';
    rules += ' __na';
    if (!$r) rules += ' r_____z';
    rules += ' Eh';
    rules += ' Fh';
    rules += ' Ch';
    rules += ' Dh';
    rules += ' _vd';
    rules += ' _wd';
    rules += ' _xd';
    rules += ' _yd';
    rules += ' wa';
    rules += ' uc';
    rules += ' vc';
    rules += ' sc';
    rules += ' tc';
    if (props.fillStyle === "boldFill") rules += ' ca';
    else if (props.fillStyle === "subtleFill") rules += ' ca';
    else if (props.fillStyle === "border") {
        if (props.variant === "neutral") rules += ' cm';
        else if (props.variant === "negative") rules += ' cN';
        else if (props.variant === "notice") rules += ' c2';
        else if (props.variant === "positive") rules += ' c_4';
        else if (props.variant === "informative") rules += ' cx';
    }
    if (props.variant === "neutral") {
        if (props.fillStyle === "boldFill") {
            if (props.isPressed) rules += ' b_____I';
            else if (props.isFocusVisible) rules += ' b_____I';
            else if (props.isHovered) rules += ' b_____I';
            else rules += ' b_____H';
        } else if (props.fillStyle === "subtleFill") rules += ' b_____J';
        else if (props.fillStyle === "border") rules += ' bd';
    } else if (props.variant === "negative") {
        if (props.fillStyle === "boldFill") {
            if (props.isPressed) rules += ' b_____L';
            else if (props.isFocusVisible) rules += ' b_____L';
            else if (props.isHovered) rules += ' b_____L';
            else rules += ' b_____K';
        } else if (props.fillStyle === "subtleFill") rules += ' b_____M';
        else if (props.fillStyle === "border") rules += ' bd';
    } else if (props.variant === "notice") {
        if (props.fillStyle === "boldFill") rules += ' b_____Q';
        else if (props.fillStyle === "subtleFill") rules += ' b_____R';
        else if (props.fillStyle === "border") rules += ' bd';
    } else if (props.variant === "positive") {
        if (props.fillStyle === "boldFill") {
            if (props.isPressed) rules += ' b_____O';
            else if (props.isFocusVisible) rules += ' b_____O';
            else if (props.isHovered) rules += ' b_____O';
            else rules += ' b_____N';
        } else if (props.fillStyle === "subtleFill") rules += ' b_____P';
        else if (props.fillStyle === "border") rules += ' bd';
    } else if (props.variant === "informative") {
        if (props.fillStyle === "boldFill") {
            if (props.isPressed) rules += ' b_____F';
            else if (props.isFocusVisible) rules += ' b_____F';
            else if (props.isHovered) rules += ' b_____F';
            else rules += ' b_____E';
        } else if (props.fillStyle === "subtleFill") rules += ' b_____G';
        else if (props.fillStyle === "border") rules += ' bd';
    }
    return rules;
};
const $72bf3a9f94a75d9f$var$icon = function anonymous(props) {
    let rules = " .";
    rules += ' __a-ykjmzy';
    rules += ' __b-ykjmzy';
    rules += ' __c-ykjmzy';
    rules += ' __d-ykjmzy';
    if (props.fillStyle === "boldFill") {
        if (props.variant === "notice") rules += ' -rwx0fg_e-z';
        else rules += ' -rwx0fg_e-A';
    } else if (props.fillStyle === "subtleFill") {
        if (props.variant === "neutral") rules += ' -rwx0fg_e-d';
        else if (props.variant === "negative") rules += ' -rwx0fg_e-e';
        else if (props.variant === "notice") rules += ' -rwx0fg_e-e';
        else if (props.variant === "positive") rules += ' -rwx0fg_e-f';
        else if (props.variant === "informative") rules += ' -rwx0fg_e-c';
    } else if (props.fillStyle === "border") {
        if (props.variant === "neutral") rules += ' -rwx0fg_e-d';
        else if (props.variant === "negative") rules += ' -rwx0fg_e-e';
        else if (props.variant === "notice") rules += ' -rwx0fg_e-g';
        else if (props.variant === "positive") rules += ' -rwx0fg_e-f';
        else if (props.variant === "informative") rules += ' -rwx0fg_e-c';
    }
    return rules;
};
const $72bf3a9f94a75d9f$var$grid = " . _Zf jh __h-u2tns7 __i-ld1isw lb __j-11zp5n8";
let $72bf3a9f94a75d9f$var$ICONS = {
    informative: (0, $0ed6e07b499b9797$exports.default),
    positive: (0, $6391be254c189366$exports.default),
    notice: (0, $e861f394b642505b$exports.default),
    negative: (0, $7e7cdbd2b8ae2467$exports.default),
    neutral: undefined
};
const $72bf3a9f94a75d9f$var$heading = function anonymous(props) {
    let rules = " .";
    rules += ' Aa';
    rules += ' __a-go5hed';
    rules += ' __b-go5hed';
    rules += ' __c-go5hed';
    rules += ' __d-go5hed';
    rules += ' _c-bc1l9oh';
    rules += ' _c-1uotwbwg';
    rules += ' _c-eo0c6sf';
    rules += ' _c-enzzrge';
    rules += ' _c-enzykdd';
    rules += ' _c-enzwzjc';
    rules += ' _c-enzrfpb';
    rules += ' _ca';
    rules += ' _dbf';
    rules += ' _de';
    rules += ' _e-1x99dlod';
    rules += ' _ed';
    rules += ' _f-1x99dlob';
    rules += ' _fa';
    if (props.fillStyle === "boldFill") {
        if (props.variant === "notice") rules += ' ab';
        else rules += ' ac';
    } else rules += ' ao';
    return rules;
};
const $72bf3a9f94a75d9f$var$content = function anonymous(props) {
    let rules = " .";
    rules += ' __a-1mod4sg';
    rules += ' __b-1mod4sg';
    rules += ' __c-1mod4sg';
    rules += ' __d-1mod4sg';
    rules += ' _c-bc1l9oh';
    rules += ' _c-1uotwbwg';
    rules += ' _c-eo0c6sf';
    rules += ' _c-enzzrge';
    rules += ' _c-enzykdd';
    rules += ' _c-enzwzjc';
    rules += ' _c-enzrfpb';
    rules += ' _ca';
    rules += ' _dbf';
    rules += ' _de';
    rules += ' _eb';
    rules += ' _f-1x99dloc';
    rules += ' _fb';
    if (props.fillStyle === "boldFill") {
        if (props.variant === "notice") rules += ' ab';
        else rules += ' ac';
    } else rules += ' an';
    return rules;
};
const $72bf3a9f94a75d9f$export$a3b2c96db9b0eb71 = /*#__PURE__*/ (0, $3stts$react.forwardRef)(function InlineAlert(props, ref) {
    let stringFormatter = (0, $3stts$reactariai18n.useLocalizedStringFormatter)((0, ($parcel$interopDefault($4526404114e78c80$exports))), '@react-spectrum/s2');
    [props, ref] = (0, $ac757a4c2bd72aee$exports.useSpectrumContextProps)(props, ref, $72bf3a9f94a75d9f$export$c0de4eca0a8bf011);
    let { children: children, variant: variant = 'neutral', fillStyle: fillStyle = 'border', autoFocus: autoFocus } = props;
    let domRef = (0, $3stts$reactspectrumutils.useDOMRef)(ref);
    let Icon = null;
    let iconAlt = '';
    if (variant in $72bf3a9f94a75d9f$var$ICONS) {
        Icon = $72bf3a9f94a75d9f$var$ICONS[variant];
        if (Icon) iconAlt = stringFormatter.format(`inlinealert.${variant}`);
    }
    let { isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, $3stts$reactaria.useFocusRing)({
        autoFocus: props.autoFocus
    });
    let autoFocusRef = (0, $3stts$react.useRef)(props.autoFocus);
    (0, $3stts$react.useEffect)(()=>{
        if (autoFocusRef.current && domRef.current) domRef.current.focus();
        autoFocusRef.current = false;
    }, [
        domRef
    ]);
    return /*#__PURE__*/ (0, $3stts$reactjsxruntime.jsx)("div", {
        ...(0, $3stts$reactariautils.filterDOMProps)(props),
        ...focusProps,
        ref: domRef,
        tabIndex: autoFocus ? -1 : undefined,
        autoFocus: autoFocus,
        role: "alert",
        style: props.UNSAFE_style,
        className: (props.UNSAFE_className || '') + $72bf3a9f94a75d9f$var$inlineAlert({
            variant: variant,
            fillStyle: fillStyle,
            isFocusVisible: isFocusVisible
        }, props.styles),
        children: /*#__PURE__*/ (0, $3stts$reactjsxruntime.jsx)("div", {
            className: $72bf3a9f94a75d9f$var$grid,
            children: /*#__PURE__*/ (0, $3stts$reactjsxruntime.jsxs)((0, $3stts$reactariacomponents.Provider), {
                values: [
                    [
                        (0, $6367bc87eb7d24ad$exports.HeadingContext),
                        {
                            styles: $72bf3a9f94a75d9f$var$heading({
                                fillStyle: fillStyle
                            })
                        }
                    ],
                    [
                        (0, $6367bc87eb7d24ad$exports.ContentContext),
                        {
                            styles: $72bf3a9f94a75d9f$var$content({
                                fillStyle: fillStyle
                            })
                        }
                    ],
                    [
                        (0, $bde97c91243ed164$exports.IconContext),
                        {
                            styles: $72bf3a9f94a75d9f$var$icon({
                                variant: variant,
                                fillStyle: fillStyle
                            })
                        }
                    ]
                ],
                children: [
                    Icon && /*#__PURE__*/ (0, $3stts$reactjsxruntime.jsx)(Icon, {
                        "aria-label": iconAlt
                    }),
                    children
                ]
            })
        })
    });
});


//# sourceMappingURL=InlineAlert.cjs.map
