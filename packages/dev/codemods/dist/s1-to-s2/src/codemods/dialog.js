"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformDialog = transformDialog;
exports.transformDialogTrigger = transformDialogTrigger;
const utils_1 = require("./utils");
const t = __importStar(require("@babel/types"));
function transformDialog(path) {
    path.get('children').forEach(path => {
        // S2 dialogs don't have a divider anymore.
        if (path.isJSXElement()) {
            let name = path.get('openingElement').get('name');
            if (name.referencesImport('@adobe/react-spectrum', 'Divider') || name.referencesImport('@react-spectrum/divider', 'Divider')) {
                path.remove();
            }
        }
    });
}
function transformDialogTrigger(path) {
    path.get('children').forEach(path => {
        // Move close function inside dialog.
        // TODO: handle other types of functions too?
        if (!path.isJSXExpressionContainer()) {
            return;
        }
        let expression = path.get('expression');
        if (!expression.isArrowFunctionExpression()) {
            return;
        }
        let body = expression.get('body');
        if (body.isJSXElement()) {
            let name = body.get('openingElement').get('name');
            if ((name.referencesImport('@adobe/react-spectrum', 'Dialog') || name.referencesImport('@react-spectrum/dialog', 'Dialog'))) {
                body.node.children = [t.jsxExpressionContainer(t.arrowFunctionExpression(expression.node.params, t.jsxFragment(t.jsxOpeningFragment(), t.jsxClosingFragment(), body.node.children)))];
                path.replaceWith(body.node);
                return;
            }
        }
        (0, utils_1.addComment)(body.node, ' TODO(S2-upgrade): update this dialog to move the close function inside');
    });
}
