"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addMacroSupport = addMacroSupport;
const path = require('path');
const installPackage_1 = __importDefault(require("./installPackage"));
const logger_1 = __importDefault(require("./logger"));
async function addMacroSupport() {
    const packageJson = require(path.join(process.cwd(), 'package.json'));
    const parcelVersion = packageJson && (packageJson.dependencies?.parcel || packageJson.devDependencies?.parcel);
    if (parcelVersion) {
        logger_1.default.success('Parcel detected in package.json. Macros are supported by default in v2.12.0 and newer.');
        return { isMacroPluginInstalled: false, isMacroSupportEnabled: false };
    }
    let isMacroPluginInstalled = await (0, installPackage_1.default)('unplugin-parcel-macros', { dev: true });
    // TODO: Try to automatically update bundle config
    return { isMacroPluginInstalled, isMacroSupportEnabled: false };
}
