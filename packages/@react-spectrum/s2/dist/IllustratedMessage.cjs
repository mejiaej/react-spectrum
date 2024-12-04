require("./IllustratedMessage.css");
var $e1016b8947dbadb8$exports = require("./ButtonGroup.cjs");
var $6367bc87eb7d24ad$exports = require("./Content.cjs");
var $bde97c91243ed164$exports = require("../icons/Icon.cjs");
var $ac757a4c2bd72aee$exports = require("../icons/useSpectrumContextProps.cjs");
var $jcfA8$reactjsxruntime = require("react/jsx-runtime");
var $jcfA8$reactariacomponents = require("react-aria-components");
var $jcfA8$react = require("react");
var $jcfA8$reactariautils = require("@react-aria/utils");
var $jcfA8$reactspectrumutils = require("@react-spectrum/utils");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "IllustratedMessageContext", () => $55f1b8940d3e02db$export$d661ef89ad42d682);
$parcel$export(module.exports, "IllustratedMessage", () => $55f1b8940d3e02db$export$406dbc84c317ece0);
/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 








const $55f1b8940d3e02db$var$illustratedMessage = function anonymous(props, overrides) {
    let rules = " .";
    let matches = (overrides || '').match(/(?:^|\s)(?:y|z|A|B|_9|_8|h|_5|_4|__A|__c|__d|__a|__b|U|__Q|X|Z|V|W|l|q|r|k|o|p)[^\s]+/g) || [];
    rules += matches.join('');
    let $r = false;
    for (let p of matches)if (/^\s*r/.test(p)) $r = true;
    rules += ' _Zf';
    rules += ' _c-bc1l9oh';
    rules += ' _c-1uotwbwg';
    rules += ' _c-eo0c6sf';
    rules += ' _c-enzzrge';
    rules += ' _c-enzykdd';
    rules += ' _c-enzwzjc';
    rules += ' _c-enzrfpb';
    rules += ' _ca';
    if (props.size === "XL") {
        rules += ' _dbj';
        rules += ' _di';
    } else if (props.size === "L") {
        rules += ' _dbh';
        rules += ' _dg';
    } else if (props.size === "S") {
        rules += ' _dbd';
        rules += ' _dc';
    } else if (props.size === "XS") {
        rules += ' _dbb';
        rules += ' _da';
    } else {
        rules += ' _dbf';
        rules += ' _de';
    }
    if (!$r) {
        if (props.orientation === "horizontal") rules += ' r________V';
        else if (props.orientation === "vertical") rules += ' r______x';
    }
    if (props.orientation === "horizontal") rules += ' __j-1t3dvev';
    else if (props.orientation === "vertical") rules += ' __j-tu9mw5';
    if (props.orientation === "horizontal") rules += ' __i-1efftez';
    else if (props.orientation === "vertical") {
        if (props.size === "L") rules += ' __i-xadfxd';
        else rules += ' __i-fd9mh8';
    }
    if (props.orientation === "horizontal") rules += ' __h-883psa';
    if (props.orientation === "horizontal") rules += ' _3a';
    else if (props.orientation === "vertical") rules += ' _3c';
    if (props.orientation === "vertical") rules += ' _jb';
    return rules;
};
const $55f1b8940d3e02db$var$illustration = function anonymous(props) {
    let rules = " .";
    rules += ' __a-1e6vo9b';
    rules += ' __b-1e6vo9b';
    rules += ' __c-1e6vo9b';
    rules += ' __d-1e6vo9b';
    if (props.size === "L") rules += ' l__Y';
    else if (props.size === "M") rules += ' l_W';
    else if (props.size === "S") rules += ' l_W';
    if (props.size === "L") rules += ' k__Y';
    else if (props.size === "M") rules += ' k_W';
    else if (props.size === "S") rules += ' k_W';
    rules += ' _4d';
    if (props.isDropTarget) {
        if (props.isPressed) rules += ' -rwx0fg_a-z';
        else if (props.isFocusVisible) rules += ' -rwx0fg_a-z';
        else if (props.isHovered) rules += ' -rwx0fg_a-z';
        else rules += ' -rwx0fg_a-y';
    } else {
        if (props.isPressed) rules += ' -rwx0fg_a-o';
        else if (props.isFocusVisible) rules += ' -rwx0fg_a-o';
        else if (props.isHovered) rules += ' -rwx0fg_a-o';
        else rules += ' -rwx0fg_a-n';
    }
    return rules;
};
const $55f1b8940d3e02db$var$heading = function anonymous(props) {
    let rules = " .";
    rules += ' __a-go5hed';
    rules += ' __b-go5hed';
    rules += ' __c-go5hed';
    rules += ' __d-go5hed';
    if (props.size === "L") {
        rules += ' _c-bc1l9oh';
        rules += ' _c-1uotwbwg';
        rules += ' _c-eo0c6sf';
        rules += ' _c-enzzrge';
        rules += ' _c-enzykdd';
        rules += ' _c-enzwzjc';
        rules += ' _c-enzrfpb';
        rules += ' _ca';
    } else if (props.size === "M") {
        rules += ' _c-bc1l9oh';
        rules += ' _c-1uotwbwg';
        rules += ' _c-eo0c6sf';
        rules += ' _c-enzzrge';
        rules += ' _c-enzykdd';
        rules += ' _c-enzwzjc';
        rules += ' _c-enzrfpb';
        rules += ' _ca';
    } else if (props.size === "S") {
        rules += ' _c-bc1l9oh';
        rules += ' _c-1uotwbwg';
        rules += ' _c-eo0c6sf';
        rules += ' _c-enzzrge';
        rules += ' _c-enzykdd';
        rules += ' _c-enzwzjc';
        rules += ' _c-enzrfpb';
        rules += ' _ca';
    }
    if (props.size === "L") {
        rules += ' _dbm';
        rules += ' _dj';
    } else if (props.size === "M") {
        rules += ' _dbl';
        rules += ' _dk';
    } else if (props.size === "S") {
        rules += ' _dbh';
        rules += ' _dg';
    }
    if (props.size === "L") {
        rules += ' _e-1x99dlod';
        rules += ' _ed';
    } else if (props.size === "M") {
        rules += ' _e-1x99dlod';
        rules += ' _ed';
    } else if (props.size === "S") {
        rules += ' _e-1x99dlod';
        rules += ' _ed';
    }
    if (props.size === "L") {
        rules += ' _f-1x99dlob';
        rules += ' _fa';
    } else if (props.size === "M") {
        rules += ' _f-1x99dlob';
        rules += ' _fa';
    } else if (props.size === "S") {
        rules += ' _f-1x99dlob';
        rules += ' _fa';
    }
    if (props.size === "L") rules += ' ao';
    else if (props.size === "M") rules += ' ao';
    else if (props.size === "S") rules += ' ao';
    rules += ' _4c';
    rules += ' Aa';
    rules += ' Ba';
    rules += ' ya';
    rules += ' za';
    return rules;
};
const $55f1b8940d3e02db$var$content = function anonymous(props) {
    let rules = " .";
    if (props.size === "L") {
        rules += ' _c-bc1l9oh';
        rules += ' _c-1uotwbwg';
        rules += ' _c-eo0c6sf';
        rules += ' _c-enzzrge';
        rules += ' _c-enzykdd';
        rules += ' _c-enzwzjc';
        rules += ' _c-enzrfpb';
        rules += ' _ca';
    } else if (props.size === "M") {
        rules += ' _c-bc1l9oh';
        rules += ' _c-1uotwbwg';
        rules += ' _c-eo0c6sf';
        rules += ' _c-enzzrge';
        rules += ' _c-enzykdd';
        rules += ' _c-enzwzjc';
        rules += ' _c-enzrfpb';
        rules += ' _ca';
    } else if (props.size === "S") {
        rules += ' _c-bc1l9oh';
        rules += ' _c-1uotwbwg';
        rules += ' _c-eo0c6sf';
        rules += ' _c-enzzrge';
        rules += ' _c-enzykdd';
        rules += ' _c-enzwzjc';
        rules += ' _c-enzrfpb';
        rules += ' _ca';
    }
    if (props.size === "L") {
        rules += ' _dbf';
        rules += ' _de';
    } else if (props.size === "M") {
        rules += ' _dbf';
        rules += ' _de';
    } else if (props.size === "S") {
        rules += ' _dbd';
        rules += ' _dc';
    }
    if (props.size === "L") rules += ' _eb';
    else if (props.size === "M") rules += ' _eb';
    else if (props.size === "S") rules += ' _eb';
    if (props.size === "L") {
        rules += ' _f-1x99dloc';
        rules += ' _fb';
    } else if (props.size === "M") {
        rules += ' _f-1x99dloc';
        rules += ' _fb';
    } else if (props.size === "S") {
        rules += ' _f-1x99dloc';
        rules += ' _fb';
    }
    if (props.size === "L") rules += ' an';
    else if (props.size === "M") rules += ' an';
    else if (props.size === "S") rules += ' an';
    rules += ' __a-1mod4sg';
    rules += ' __b-1mod4sg';
    rules += ' __c-1mod4sg';
    rules += ' __d-1mod4sg';
    rules += ' _4b';
    return rules;
};
const $55f1b8940d3e02db$var$buttonGroup = " . __a-3yyxn2 __b-3yyxn2 __c-3yyxn2 __d-3yyxn2 Af";
const $55f1b8940d3e02db$export$d661ef89ad42d682 = /*#__PURE__*/ (0, $jcfA8$react.createContext)(null);
const $55f1b8940d3e02db$export$406dbc84c317ece0 = /*#__PURE__*/ (0, $jcfA8$react.forwardRef)(function IllustratedMessage(props, ref) {
    [props, ref] = (0, $ac757a4c2bd72aee$exports.useSpectrumContextProps)(props, ref, $55f1b8940d3e02db$export$d661ef89ad42d682);
    let domRef = (0, $jcfA8$reactspectrumutils.useDOMRef)(ref);
    let { children: children, orientation: orientation = 'horizontal', size: size = 'M', UNSAFE_className: UNSAFE_className = '', UNSAFE_style: UNSAFE_style, isInDropZone: isInDropZone = false, isDropTarget: isDropTarget = false, ...otherProps } = props;
    return /*#__PURE__*/ (0, $jcfA8$reactjsxruntime.jsx)("div", {
        ...(0, $jcfA8$reactariautils.filterDOMProps)(otherProps),
        style: UNSAFE_style,
        className: UNSAFE_className + $55f1b8940d3e02db$var$illustratedMessage({
            size: props.size || 'M',
            orientation: props.orientation || 'vertical'
        }, props.styles),
        ref: domRef,
        children: /*#__PURE__*/ (0, $jcfA8$reactjsxruntime.jsx)((0, $jcfA8$reactariacomponents.Provider), {
            values: [
                [
                    (0, $6367bc87eb7d24ad$exports.HeadingContext),
                    {
                        styles: $55f1b8940d3e02db$var$heading({
                            orientation: orientation,
                            size: size
                        })
                    }
                ],
                [
                    (0, $6367bc87eb7d24ad$exports.ContentContext),
                    {
                        styles: $55f1b8940d3e02db$var$content({
                            size: size
                        })
                    }
                ],
                [
                    (0, $bde97c91243ed164$exports.IllustrationContext),
                    {
                        size: size === 'L' ? 'L' : 'M',
                        styles: $55f1b8940d3e02db$var$illustration({
                            orientation: orientation,
                            size: size,
                            isInDropZone: isInDropZone,
                            isDropTarget: isDropTarget
                        })
                    }
                ],
                [
                    (0, $e1016b8947dbadb8$exports.ButtonGroupContext),
                    {
                        styles: $55f1b8940d3e02db$var$buttonGroup
                    }
                ]
            ],
            children: children
        })
    });
});


//# sourceMappingURL=IllustratedMessage.cjs.map
