require("./styles.ad343ab0.css");
var $279507a6f189e509$exports = require("./styles_css.main.js");
var $60684b441be8e84c$exports = require("./ListView.main.js");
var $9hpsb$reactspectrumutils = require("@react-spectrum/utils");
var $9hpsb$react = require("react");
var $9hpsb$reactariavisuallyhidden = require("@react-aria/visually-hidden");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "default", () => $fc02fd49ab58c72e$export$2e2bcd8739ae039);





function $fc02fd49ab58c72e$export$2e2bcd8739ae039(props) {
    let { dropState: dropState, dragAndDropHooks: dragAndDropHooks } = (0, $9hpsb$react.useContext)((0, $60684b441be8e84c$exports.ListViewContext));
    const { target: target, isPresentationOnly: isPresentationOnly } = props;
    let ref = (0, $9hpsb$react.useRef)(null);
    let { dropIndicatorProps: dropIndicatorProps } = dragAndDropHooks.useDropIndicator(props, dropState, ref);
    let { visuallyHiddenProps: visuallyHiddenProps } = (0, $9hpsb$reactariavisuallyhidden.useVisuallyHidden)();
    let isDropTarget = dropState.isDropTarget(target);
    if (!isDropTarget && dropIndicatorProps['aria-hidden']) return null;
    return /*#__PURE__*/ (0, ($parcel$interopDefault($9hpsb$react))).createElement("div", {
        role: "row",
        "aria-hidden": dropIndicatorProps['aria-hidden']
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($9hpsb$react))).createElement("div", {
        role: "gridcell",
        "aria-selected": "false",
        className: (0, $9hpsb$reactspectrumutils.classNames)((0, ($parcel$interopDefault($279507a6f189e509$exports))), 'react-spectrum-ListViewInsertionIndicator', {
            'react-spectrum-ListViewInsertionIndicator--dropTarget': isDropTarget
        })
    }, !isPresentationOnly && /*#__PURE__*/ (0, ($parcel$interopDefault($9hpsb$react))).createElement("div", {
        ...visuallyHiddenProps,
        role: "button",
        ...dropIndicatorProps,
        ref: ref
    })));
}


//# sourceMappingURL=InsertionIndicator.main.js.map
