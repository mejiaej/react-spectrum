import {ListViewContext as $f85fb77f9d4cbc6c$export$870039b0abfe3de0} from "./ListView.mjs";
import $jzbuT$react, {useContext as $jzbuT$useContext, useRef as $jzbuT$useRef} from "react";
import {useVisuallyHidden as $jzbuT$useVisuallyHidden} from "@react-aria/visually-hidden";




function $41a60729487a82d7$export$2e2bcd8739ae039() {
    let { dropState: dropState, dragAndDropHooks: dragAndDropHooks } = (0, $jzbuT$useContext)((0, $f85fb77f9d4cbc6c$export$870039b0abfe3de0));
    let ref = (0, $jzbuT$useRef)(null);
    let { dropIndicatorProps: dropIndicatorProps } = dragAndDropHooks.useDropIndicator({
        target: {
            type: 'root'
        }
    }, dropState, ref);
    let isDropTarget = dropState.isDropTarget({
        type: 'root'
    });
    let { visuallyHiddenProps: visuallyHiddenProps } = (0, $jzbuT$useVisuallyHidden)();
    if (!isDropTarget && dropIndicatorProps['aria-hidden']) return null;
    return /*#__PURE__*/ (0, $jzbuT$react).createElement("div", {
        role: "row",
        "aria-hidden": dropIndicatorProps['aria-hidden']
    }, /*#__PURE__*/ (0, $jzbuT$react).createElement("div", {
        role: "gridcell",
        "aria-selected": "false"
    }, /*#__PURE__*/ (0, $jzbuT$react).createElement("div", {
        role: "button",
        ...visuallyHiddenProps,
        ...dropIndicatorProps,
        ref: ref
    })));
}


export {$41a60729487a82d7$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=RootDropIndicator.module.js.map
