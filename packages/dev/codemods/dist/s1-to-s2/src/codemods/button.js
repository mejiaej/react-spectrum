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
exports.transformButton = transformButton;
const utils_1 = require("./utils");
const t = __importStar(require("@babel/types"));
function transformButton(path) {
    path.traverse({
        JSXAttribute(path) {
            let value = (0, utils_1.getPropValue)(path.node.value);
            if (path.node.name.type !== 'JSXIdentifier' || !value) {
                return;
            }
            switch (path.node.name.name) {
                case 'variant': {
                    if (value.type === 'StringLiteral') {
                        if (value.value === 'cta') {
                            value.value = 'accent';
                        }
                        else if (value.value === 'overBackground') {
                            value.value = 'primary';
                            path.insertAfter(t.jsxAttribute(t.jsxIdentifier('staticColor'), t.stringLiteral('white')));
                        }
                    }
                    break;
                }
            }
        }
    });
}
