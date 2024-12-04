import "./styles.ad343ab0.css";
import $8djIL$styles_cssmodulejs from "./styles_css.module.js";
import {ListViewContext as $f85fb77f9d4cbc6c$export$870039b0abfe3de0} from "./ListView.module.js";
import {classNames as $8djIL$classNames} from "@react-spectrum/utils";
import $8djIL$react, {useContext as $8djIL$useContext, useRef as $8djIL$useRef} from "react";
import {useVisuallyHidden as $8djIL$useVisuallyHidden} from "@react-aria/visually-hidden";


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}





function $0a834ddbc989a3e3$export$2e2bcd8739ae039(props) {
    let { dropState: dropState, dragAndDropHooks: dragAndDropHooks } = (0, $8djIL$useContext)((0, $f85fb77f9d4cbc6c$export$870039b0abfe3de0));
    const { target: target, isPresentationOnly: isPresentationOnly } = props;
    let ref = (0, $8djIL$useRef)(null);
    let { dropIndicatorProps: dropIndicatorProps } = dragAndDropHooks.useDropIndicator(props, dropState, ref);
    let { visuallyHiddenProps: visuallyHiddenProps } = (0, $8djIL$useVisuallyHidden)();
    let isDropTarget = dropState.isDropTarget(target);
    if (!isDropTarget && dropIndicatorProps['aria-hidden']) return null;
    return /*#__PURE__*/ (0, $8djIL$react).createElement("div", {
        role: "row",
        "aria-hidden": dropIndicatorProps['aria-hidden']
    }, /*#__PURE__*/ (0, $8djIL$react).createElement("div", {
        role: "gridcell",
        "aria-selected": "false",
        className: (0, $8djIL$classNames)((0, ($parcel$interopDefault($8djIL$styles_cssmodulejs))), 'react-spectrum-ListViewInsertionIndicator', {
            'react-spectrum-ListViewInsertionIndicator--dropTarget': isDropTarget
        })
    }, !isPresentationOnly && /*#__PURE__*/ (0, $8djIL$react).createElement("div", {
        ...visuallyHiddenProps,
        role: "button",
        ...dropIndicatorProps,
        ref: ref
    })));
}


export {$0a834ddbc989a3e3$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=InsertionIndicator.module.js.map
