"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transform = transform;
const Runner_js_1 = require("jscodeshift/src/Runner.js");
const path_1 = __importDefault(require("path"));
const transformPath = path_1.default.join(__dirname, 'codemods', 'codemod.js');
async function transform(options) {
    let { path: filePath = '.', ...rest } = options;
    return await (0, Runner_js_1.run)(transformPath, [filePath], rest);
}
