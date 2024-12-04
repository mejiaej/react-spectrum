"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getComponents = getComponents;
const parser_1 = require("@babel/parser");
const path = require('path');
const fs_1 = require("fs");
const traverse_1 = __importDefault(require("@babel/traverse"));
// These are exported but there are no codemods written for them yet.
// Don't replace imports yet.
const skipped = new Set([
    'Accordion',
    'Card',
    'CardView',
    'TableView',
    'TableHeader',
    'Column',
    'TableBody',
    'Row',
    'Cell'
]);
function getComponents() {
    // Determine list of available components in S2 from index.ts
    let availableComponents = new Set();
    const packagePath = require.resolve('@react-spectrum/s2');
    const indexPath = path.join(path.dirname(packagePath), process.env.NODE_ENV === 'test' ? 'src/index.ts' : '../src/index.ts');
    let index = (0, parser_1.parse)((0, fs_1.readFileSync)(indexPath, 'utf8'), { sourceType: 'module', plugins: ['typescript'] });
    (0, traverse_1.default)(index, {
        ExportNamedDeclaration(path) {
            if (path.node.exportKind === 'value') {
                for (let specifier of path.node.specifiers) {
                    let name = specifier.exported.type === 'Identifier' ? specifier.exported.name : specifier.exported.value;
                    if (!skipped.has(name)) {
                        availableComponents.add(name);
                    }
                }
            }
        }
    });
    return availableComponents;
}
