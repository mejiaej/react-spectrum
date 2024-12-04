require("./Modal.css");
var $914a06b3a1c679bc$exports = require("./Provider.cjs");
var $j6TWk$reactjsxruntime = require("react/jsx-runtime");
var $j6TWk$react = require("react");
var $j6TWk$reactariacomponents = require("react-aria-components");
var $j6TWk$reactspectrumutils = require("@react-spectrum/utils");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "Modal", () => $8e678305a8c10028$export$2b77a92f1a5ad772);
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




const $8e678305a8c10028$var$fade = "-_1llqja1";
const $8e678305a8c10028$var$fadeAndSlide = "-_1mhijd";
const $8e678305a8c10028$var$modalOverlayStyles = function anonymous(props) {
    let rules = " .";
    if (props.colorScheme === "dark") rules += ' _Ab';
    else if (props.colorScheme === "light") rules += ' _Aa';
    else if (props.colorScheme === "light dark") rules += ' _Ac';
    else rules += ' _A-10jn6wd';
    rules += ' Ub';
    rules += ' Xa';
    rules += ' Za';
    rules += ' Va';
    rules += ' Wa';
    rules += ' __Fa';
    rules += ' b_____o';
    rules += ' _Zd';
    rules += ' _1c';
    rules += ' _2d';
    if (props.isExiting) rules += ' _S-1nys8p3';
    else if (props.isEntering) rules += ' _S-1nys8p3';
    if (props.isExiting) rules += ' _T-375x5l';
    else if (props.isEntering) rules += ' _T-375y1o';
    if (props.isExiting) rules += ' _Ya';
    else if (props.isEntering) rules += ' _Ya';
    if (props.isExiting) rules += ' _Vb';
    else if (props.isEntering) rules += ' _Va';
    return rules;
};
const $8e678305a8c10028$export$2b77a92f1a5ad772 = /*#__PURE__*/ (0, $j6TWk$react.forwardRef)(function Modal(props1, ref) {
    let domRef = (0, $j6TWk$reactspectrumutils.useDOMRef)(ref);
    let colorScheme = (0, $j6TWk$react.useContext)((0, $914a06b3a1c679bc$exports.ColorSchemeContext));
    let { locale: locale, direction: direction } = (0, $j6TWk$reactariacomponents.useLocale)();
    // TODO: should we pass through lang and dir props in RAC?
    let modalRef = (0, $j6TWk$react.useCallback)((el)=>{
        domRef.current = el;
        if (el) {
            el.lang = locale;
            el.dir = direction;
        }
    }, [
        locale,
        direction,
        domRef
    ]);
    return /*#__PURE__*/ (0, $j6TWk$reactjsxruntime.jsx)((0, $j6TWk$reactariacomponents.ModalOverlay), {
        ...props1,
        className: (renderProps)=>$8e678305a8c10028$var$modalOverlayStyles({
                ...renderProps,
                colorScheme: colorScheme
            }),
        children: /*#__PURE__*/ (0, $j6TWk$reactjsxruntime.jsx)((0, $j6TWk$reactariacomponents.Modal), {
            ...props1,
            ref: modalRef,
            className: (renderProps)=>(function anonymous(props) {
                    let rules = " .";
                    rules += ' _Zd';
                    rules += ' _6b';
                    if (props.size === "fullscreenTakeover") rules += ' _va';
                    else rules += ' _ve';
                    if (props.size === "fullscreenTakeover") rules += ' _wa';
                    else rules += ' _we';
                    if (props.size === "fullscreenTakeover") rules += ' _xa';
                    else rules += ' _xe';
                    if (props.size === "fullscreenTakeover") rules += ' _ya';
                    else rules += ' _ye';
                    if (props.size === "fullscreenTakeover") rules += ' lb';
                    else if (props.size === "fullscreen") rules += ' l-tp2nko';
                    else if (props.size === "L") rules += ' l_________G';
                    else if (props.size === "M") rules += ' l______6';
                    else if (props.size === "S") rules += ' l_____O';
                    if (props.size === "fullscreenTakeover") rules += ' kb';
                    else if (props.size === "fullscreen") rules += ' k-tp2nko';
                    if (props.size === "fullscreenTakeover") rules += ' ro';
                    else if (props.size === "fullscreen") rules += ' ro';
                    else rules += ' r-yjhhbv';
                    if (props.size === "fullscreenTakeover") rules += ' po';
                    else if (props.size === "fullscreen") rules += ' po';
                    else rules += ' p-yjhhbg';
                    rules += ' -_1de2x0q_b-______k';
                    rules += ' b-1de2x0q';
                    if (props.isExiting) rules += ' _S-1nys8p3';
                    else if (props.isEntering) rules += ' _S-3zirke';
                    if (props.isExiting) rules += ' _T-375x5l';
                    else if (props.isEntering) rules += ' _T-375y1o';
                    if (props.isExiting) rules += ' _Ya';
                    else if (props.isEntering) rules += ' _Ya';
                    if (props.isExiting) rules += ' _U-3t1x';
                    else if (props.isEntering) rules += ' _U-375x8c';
                    if (props.isExiting) rules += ' _Vb';
                    else if (props.isEntering) rules += ' _Va';
                    rules += ' _Wd';
                    rules += ' _Lb';
                    rules += ' _Nb';
                    rules += ' da';
                    return rules;
                })({
                    ...renderProps,
                    size: props1.size
                })
        })
    });
});


//# sourceMappingURL=Modal.cjs.map
