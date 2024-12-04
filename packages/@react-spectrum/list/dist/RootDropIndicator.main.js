var $60684b441be8e84c$exports = require("./ListView.main.js");
var $63sFO$react = require("react");
var $63sFO$reactariavisuallyhidden = require("@react-aria/visually-hidden");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "default", () => $c59d3898f402f50b$export$2e2bcd8739ae039);



function $c59d3898f402f50b$export$2e2bcd8739ae039() {
    let { dropState: dropState, dragAndDropHooks: dragAndDropHooks } = (0, $63sFO$react.useContext)((0, $60684b441be8e84c$exports.ListViewContext));
    let ref = (0, $63sFO$react.useRef)(null);
    let { dropIndicatorProps: dropIndicatorProps } = dragAndDropHooks.useDropIndicator({
        target: {
            type: 'root'
        }
    }, dropState, ref);
    let isDropTarget = dropState.isDropTarget({
        type: 'root'
    });
    let { visuallyHiddenProps: visuallyHiddenProps } = (0, $63sFO$reactariavisuallyhidden.useVisuallyHidden)();
    if (!isDropTarget && dropIndicatorProps['aria-hidden']) return null;
    return /*#__PURE__*/ (0, ($parcel$interopDefault($63sFO$react))).createElement("div", {
        role: "row",
        "aria-hidden": dropIndicatorProps['aria-hidden']
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($63sFO$react))).createElement("div", {
        role: "gridcell",
        "aria-selected": "false"
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($63sFO$react))).createElement("div", {
        role: "button",
        ...visuallyHiddenProps,
        ...dropIndicatorProps,
        ref: ref
    })));
}


//# sourceMappingURL=RootDropIndicator.main.js.map
