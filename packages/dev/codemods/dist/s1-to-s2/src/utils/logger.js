"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
function info(message) {
    console.log(chalk_1.default.cyan(message));
}
function success(message) {
    console.log(chalk_1.default.green(`✓ ${message}`));
}
function warn(message) {
    console.log(chalk_1.default.yellow(`WARNING: ${message}`));
}
function error(message) {
    console.error(chalk_1.default.red(`ERROR: ${message}`));
}
exports.default = {
    info,
    success,
    warn,
    error
};
