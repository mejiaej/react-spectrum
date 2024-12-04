import $dIfdp$intlStringsmodulejs from "./intlStrings.module.js";
import "./vars.27f08d5f.css";
import $dIfdp$table_vars_cssmodulejs from "./table_vars_css.module.js";
import {useTableContext as $bd013581c0a4b065$export$3cb274deb6c2d854, useVirtualizerContext as $bd013581c0a4b065$export$3f8f74b6bfd2c5df} from "./TableViewBase.module.js";
import {classNames as $dIfdp$classNames} from "@react-spectrum/utils";
import {FocusRing as $dIfdp$FocusRing} from "@react-aria/focus";
import {isWebKit as $dIfdp$isWebKit, useObjectRef as $dIfdp$useObjectRef, mergeProps as $dIfdp$mergeProps} from "@react-aria/utils";
import $dIfdp$react, {createContext as $dIfdp$createContext, useContext as $dIfdp$useContext, useState as $dIfdp$useState, useEffect as $dIfdp$useEffect} from "react";
import $dIfdp$reactdom from "react-dom";
import {useLocalizedStringFormatter as $dIfdp$useLocalizedStringFormatter, useLocale as $dIfdp$useLocale} from "@react-aria/i18n";
import {useTableColumnResize as $dIfdp$useTableColumnResize} from "@react-aria/table";
import {useUNSTABLE_PortalContext as $dIfdp$useUNSTABLE_PortalContext} from "@react-aria/overlays";


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

var $2fc56f9fdd93be52$exports = {};
$2fc56f9fdd93be52$exports = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"-1 0 31 32\">\n  <filter id=\"shadow\">\n    <feDropShadow dx=\"0\" dy=\"0.5\" stdDeviation=\"1.2\" flood-opacity=\"0.7\"></feDropShadow>\n  </filter>\n  <g filter=\"url('#shadow')\" transform=\"translate(.5 0)\">\n    <path d=\"M9.5,2c.27614,0,.5,.22388,.5,.5v6.5h3v-1.74951c0-.14893,.12215-.25049,.2513-.25049,.05457,0,.1104,.01819,.15875,.05847l2.58995,2.44153-2.58995,2.44153c-.04837,.04028-.10419,.05847-.15875,.05847-.12914,0-.2513-.10156-.2513-.25049v-1.74951h-3v6.5c0,.27612-.22386,.5-.5,.5h-1c-.27614,0-.5-.22388-.5-.5V2.5c0-.27612,.22386-.5,.5-.5h1Zm0-1h-1c-.82843,0-1.5,.67157-1.5,1.5v14c0,.82843,.67157,1.5,1.5,1.5h1c.82843,0,1.5-.67157,1.5-1.5v-5.5h1v.67757c0,.40416,.1632,.80501,.48197,1.05347,.49639,.3869,1.14001,.33571,1.56838-.02144l.02344-.01953,.0222-.02087,2.97589-2.80537c.20937-.19737,.20937-.53028,0-.72765l-2.97589-2.80537-.0222-.02087-.02345-.01965c-.22456-.18713-.5083-.29028-.79895-.29028-.3208,0-.62624,.12134-.86003,.34167-.24872,.23438-.39136,.56567-.39136,.90881v.74951h-1V2.5c0-.82843-.67157-1.5-1.5-1.5Z\" fill=\"#fff\"></path>\n    <path d=\"M10,16.5v-6.5h3v1.74952c0,.21196,.24721,.32775,.41005,.19206l2.58995-2.44158-2.58995-2.44158c-.16283-.13569-.41005-.0199-.41005,.19206v1.74952h-3V2.5c0-.27614-.22386-.5-.5-.5h-1c-.27614,0-.5,.22386-.5,.5v14c0,.27614,.22386,.5,.5,.5h1c.27614,0,.5-.22386,.5-.5Z\"></path>\n  </g>\n</svg>\n";


var $ff1f3562a1be2216$exports = {};
$ff1f3562a1be2216$exports = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"-1 0 31 32\">\n  <filter id=\"shadow\">\n    <feDropShadow dx=\"0\" dy=\"0.5\" stdDeviation=\"1.2\" flood-opacity=\"0.7\"></feDropShadow>\n  </filter>\n  <g filter=\"url('#shadow')\" transform=\"translate(.5 0)\">\n    <path fill=\"#fff\" d=\"M9.5,2a.5.5,0,0,1,.5.5V9h3V7.2505A.25014.25014,0,0,1,13.24978,7h.00152a.246.246,0,0,1,.15875.05847L16,9.5l-2.58995,2.44153A.24611.24611,0,0,1,13.2513,12,.25016.25016,0,0,1,13,11.751V10H10v6.5a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5V10H5v1.7495A.25014.25014,0,0,1,4.75022,12H4.7487A.246.246,0,0,1,4.59,11.94153L2,9.5,4.59,7.05847A.246.246,0,0,1,4.7487,7,.25016.25016,0,0,1,5,7.249V9H8V2.5A.5.5,0,0,1,8.5,2Zm0-1h-1A1.5,1.5,0,0,0,7,2.5V8H6V7.32389a1.33,1.33,0,0,0-.4816-1.05444,1.23962,1.23962,0,0,0-1.56876.021l-.02344.01953-.0222.02088L.92812,9.13618A.5.5,0,0,0,.90726,9.843l.02086.02085L3.904,12.66919l.02221.02088.02345.01965a1.23986,1.23986,0,0,0,1.56836.02116A1.3294,1.3294,0,0,0,6,11.6765V11H7v5.5A1.5,1.5,0,0,0,8.5,18h1A1.5,1.5,0,0,0,11,16.5V11h1v.67757a1.32792,1.32792,0,0,0,.482,1.05347,1.24,1.24,0,0,0,1.56839-.02144l.02343-.01953.02221-.02088,2.97588-2.80537a.5.5,0,0,0,.02086-.70679l-.02086-.02085L14.096,6.33081l-.02221-.02087-.02345-.01965A1.24978,1.24978,0,0,0,12,7.2505V8H11V2.5A1.5,1.5,0,0,0,9.5,1Z\"></path>\n    <path d=\"M10,16.5V10h3v1.7495a.25.25,0,0,0,.41.19206L16,9.5,13.41,7.05842A.25.25,0,0,0,13,7.2505V9H10V2.5A.5.5,0,0,0,9.5,2h-1a.5.5,0,0,0-.5.5V9H5V7.2505a.25.25,0,0,0-.41-.19206L2,9.5l2.59,2.44158A.25.25,0,0,0,5,11.7495V10H8v6.5a.5.5,0,0,0,.5.5h1A.5.5,0,0,0,10,16.5Z\"></path>\n  </g>\n</svg>\n";












var $58407c2d4eb33511$exports = {};
$58407c2d4eb33511$exports = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"-1 0 31 32\">\n  <filter id=\"shadow\">\n    <feDropShadow dx=\"0\" dy=\"0.5\" stdDeviation=\"1.2\" flood-opacity=\"0.7\"></feDropShadow>\n  </filter>\n  <g filter=\"url('#shadow')\" transform=\"translate(.5 0)\">\n    <path d=\"M9.5,2c.27614,0,.5,.22388,.5,.5v14c0,.27612-.22386,.5-.5,.5h-1c-.27614,0-.5-.22388-.5-.5v-6.5h-3v1.74951c0,.14893-.12215,.25049-.2513,.25049-.05457,0-.1104-.01819-.15875-.05847l-2.58995-2.44153,2.58995-2.44153c.04837-.04028,.10419-.05847,.15875-.05847,.12914,0,.2513,.10156,.2513,.25049v1.74951h3V2.5c0-.27612,.22386-.5,.5-.5h1Zm0-1h-1c-.82843,0-1.5,.67157-1.5,1.5v5.5h-1v-.67611c0-.40436-.1629-.80555-.48159-1.05444-.4961-.38744-1.14015-.33635-1.56876,.02095l-.02344,.01953-.0222,.02087L.92811,9.13618c-.20937,.19737-.20937,.53028,0,.72765l2.97589,2.80537,.0222,.02087,.02345,.01965c.42839,.35694,1.07208,.40833,1.56837,.02116,.31886-.24875,.48198-.64994,.48198-1.05435v-.67652s.99999,0,.99999,0v5.5c0,.82843,.67157,1.5,1.5,1.5h1c.82843,0,1.5-.67157,1.5-1.5V2.5c0-.82843-.67157-1.5-1.5-1.5Z\" fill=\"#fff\"></path>\n    <path d=\"M10,16.5V2.5c0-.27614-.22386-.5-.5-.5h-1c-.27614,0-.5,.22386-.5,.5v6.5h-3v-1.74952c0-.21196-.24721-.32775-.41005-.19206l-2.58995,2.44158,2.58995,2.44158c.16283,.13569,.41005,.0199,.41005-.19206v-1.74952h3v6.5c0,.27614,.22386,.5,.5,.5h1c.27614,0,.5-.22386,.5-.5Z\"></path>\n  </g>\n</svg>\n";


function $fc695d2eafc2b351$var$getCursor(svg, fallback) {
    // WebKit renders SVG cursors blurry on 2x screens: https://bugs.webkit.org/show_bug.cgi?id=160657
    // To work around this, we generate two SVGs at different sizes and use image-set to pick between them.
    // Only do this in WebKit to avoid Firefox rendering the cursor at twice the size.
    if ((0, $dIfdp$isWebKit)()) return `image-set(url("data:image/svg+xml,${encodeURIComponent(svg)}") 1x, url("data:image/svg+xml,${encodeURIComponent(svg.replace('width="32" height="32"', 'width="64" height="64"'))}") 2x) 8 8, ${fallback}`;
    else return `url("data:image/svg+xml,${encodeURIComponent(svg)}") 8 8, ${fallback}`;
}
const $fc695d2eafc2b351$var$CURSORS = {
    ew: $fc695d2eafc2b351$var$getCursor((0, (/*@__PURE__*/$parcel$interopDefault($ff1f3562a1be2216$exports))), 'ew-resize'),
    w: $fc695d2eafc2b351$var$getCursor((0, (/*@__PURE__*/$parcel$interopDefault($58407c2d4eb33511$exports))), 'w-resize'),
    e: $fc695d2eafc2b351$var$getCursor((0, (/*@__PURE__*/$parcel$interopDefault($2fc56f9fdd93be52$exports))), 'e-resize')
};
const $fc695d2eafc2b351$export$b517d84d4ad20b24 = /*#__PURE__*/ (0, $dIfdp$createContext)(null);
const $fc695d2eafc2b351$export$48a76196cafe3b93 = /*#__PURE__*/ (0, $dIfdp$react).forwardRef(function Resizer(props, ref) {
    let { column: column, showResizer: showResizer } = props;
    let objectRef = (0, $dIfdp$useObjectRef)(ref);
    let { isEmpty: isEmpty, onFocusedResizer: onFocusedResizer } = (0, $bd013581c0a4b065$export$3cb274deb6c2d854)();
    let layout = (0, $dIfdp$useContext)($fc695d2eafc2b351$export$b517d84d4ad20b24);
    // Virtualizer re-renders, but these components are all cached
    // in order to get around that and cause a rerender here, we use context
    // but we don't actually need any value, they are available on the layout object
    (0, $bd013581c0a4b065$export$3f8f74b6bfd2c5df)();
    let stringFormatter = (0, $dIfdp$useLocalizedStringFormatter)((0, ($parcel$interopDefault($dIfdp$intlStringsmodulejs))), '@react-spectrum/table');
    let { direction: direction } = (0, $dIfdp$useLocale)();
    let [isPointerDown, setIsPointerDown] = (0, $dIfdp$useState)(false);
    (0, $dIfdp$useEffect)(()=>{
        let setDown = (e)=>{
            if (e.pointerType === 'mouse') setIsPointerDown(true);
        };
        let setUp = (e)=>{
            if (e.pointerType === 'mouse') setIsPointerDown(false);
        };
        document.addEventListener('pointerdown', setDown, {
            capture: true
        });
        document.addEventListener('pointerup', setUp, {
            capture: true
        });
        return ()=>{
            document.removeEventListener('pointerdown', setDown, {
                capture: true
            });
            document.removeEventListener('pointerup', setUp, {
                capture: true
            });
        };
    }, []);
    let { inputProps: inputProps, resizerProps: resizerProps } = (0, $dIfdp$useTableColumnResize)((0, $dIfdp$mergeProps)(props, {
        'aria-label': stringFormatter.format('columnResizer'),
        isDisabled: isEmpty
    }), layout, objectRef);
    let isEResizable = layout.getColumnMinWidth(column.key) >= layout.getColumnWidth(column.key);
    let isWResizable = layout.getColumnMaxWidth(column.key) <= layout.getColumnWidth(column.key);
    let isResizing = layout.resizingColumn === column.key;
    let cursor = '';
    if (isEResizable) cursor = direction === 'rtl' ? $fc695d2eafc2b351$var$CURSORS.w : $fc695d2eafc2b351$var$CURSORS.e;
    else if (isWResizable) cursor = direction === 'rtl' ? $fc695d2eafc2b351$var$CURSORS.e : $fc695d2eafc2b351$var$CURSORS.w;
    else cursor = $fc695d2eafc2b351$var$CURSORS.ew;
    let style = {
        ...resizerProps.style,
        height: '100%',
        display: showResizer ? undefined : 'none',
        cursor: cursor
    };
    return /*#__PURE__*/ (0, $dIfdp$react).createElement((0, $dIfdp$react).Fragment, null, /*#__PURE__*/ (0, $dIfdp$react).createElement((0, $dIfdp$FocusRing), {
        within: true,
        focusRingClass: (0, $dIfdp$classNames)((0, ($parcel$interopDefault($dIfdp$table_vars_cssmodulejs))), 'focus-ring')
    }, /*#__PURE__*/ (0, $dIfdp$react).createElement("div", {
        ...resizerProps,
        role: "presentation",
        style: style,
        className: (0, $dIfdp$classNames)((0, ($parcel$interopDefault($dIfdp$table_vars_cssmodulejs))), 'spectrum-Table-columnResizer')
    }, /*#__PURE__*/ (0, $dIfdp$react).createElement("input", {
        ref: objectRef,
        ...(0, $dIfdp$mergeProps)(inputProps, {
            onFocus: onFocusedResizer
        })
    }))), /*#__PURE__*/ (0, $dIfdp$react).createElement("div", {
        "aria-hidden": true,
        role: "presentation",
        className: (0, $dIfdp$classNames)((0, ($parcel$interopDefault($dIfdp$table_vars_cssmodulejs))), 'spectrum-Table-columnResizerPlaceholder')
    }), /*#__PURE__*/ (0, $dIfdp$react).createElement($fc695d2eafc2b351$var$CursorOverlay, {
        show: isResizing && isPointerDown
    }, /*#__PURE__*/ (0, $dIfdp$react).createElement("div", {
        style: {
            position: 'fixed',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            cursor: cursor
        }
    })));
});
function $fc695d2eafc2b351$var$CursorOverlay(props) {
    let { show: show, children: children } = props;
    let { getContainer: getContainer } = (0, $dIfdp$useUNSTABLE_PortalContext)();
    var _getContainer;
    return show ? /*#__PURE__*/ (0, $dIfdp$reactdom).createPortal(children, (_getContainer = getContainer === null || getContainer === void 0 ? void 0 : getContainer()) !== null && _getContainer !== void 0 ? _getContainer : document.body) : null;
}


export {$fc695d2eafc2b351$export$b517d84d4ad20b24 as ResizeStateContext, $fc695d2eafc2b351$export$48a76196cafe3b93 as Resizer};
//# sourceMappingURL=Resizer.module.js.map
