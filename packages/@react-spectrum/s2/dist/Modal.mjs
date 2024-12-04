import "./Modal.css";
import {ColorSchemeContext as $9affbfa4e13b9582$export$374e0245597d19a3} from "./Provider.mjs";
import {jsx as $fdAcL$jsx} from "react/jsx-runtime";
import {forwardRef as $fdAcL$forwardRef, useContext as $fdAcL$useContext, useCallback as $fdAcL$useCallback} from "react";
import {useLocale as $fdAcL$useLocale, ModalOverlay as $fdAcL$ModalOverlay, Modal as $fdAcL$Modal} from "react-aria-components";
import {useDOMRef as $fdAcL$useDOMRef} from "@react-spectrum/utils";

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




const $c46d159bd615e407$var$fade = "-_1llqja1";
const $c46d159bd615e407$var$fadeAndSlide = "-_1mhijd";
const $c46d159bd615e407$var$modalOverlayStyles = function anonymous(props) {
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
const $c46d159bd615e407$export$2b77a92f1a5ad772 = /*#__PURE__*/ (0, $fdAcL$forwardRef)(function Modal(props1, ref) {
    let domRef = (0, $fdAcL$useDOMRef)(ref);
    let colorScheme = (0, $fdAcL$useContext)((0, $9affbfa4e13b9582$export$374e0245597d19a3));
    let { locale: locale, direction: direction } = (0, $fdAcL$useLocale)();
    // TODO: should we pass through lang and dir props in RAC?
    let modalRef = (0, $fdAcL$useCallback)((el)=>{
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
    return /*#__PURE__*/ (0, $fdAcL$jsx)((0, $fdAcL$ModalOverlay), {
        ...props1,
        className: (renderProps)=>$c46d159bd615e407$var$modalOverlayStyles({
                ...renderProps,
                colorScheme: colorScheme
            }),
        children: /*#__PURE__*/ (0, $fdAcL$jsx)((0, $fdAcL$Modal), {
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


export {$c46d159bd615e407$export$2b77a92f1a5ad772 as Modal};
//# sourceMappingURL=Modal.mjs.map
