"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = installPackage;
const chalk_1 = __importDefault(require("chalk"));
const fs_1 = __importDefault(require("fs"));
const logger_js_1 = __importDefault(require("./logger.js"));
const path_1 = __importDefault(require("path"));
const execa = require('execa');
function detectPackageManager() {
    let packageManagers = [
        { name: 'yarn', file: 'yarn.lock', installCommand: 'add' },
        { name: 'npm', file: 'package-lock.json', installCommand: 'install' },
        { name: 'pnpm', file: 'pnpm-lock.yaml', installCommand: 'add' }
    ];
    for (let pm of packageManagers) {
        if (fs_1.default.existsSync(pm.file)) {
            return pm;
        }
    }
    return null;
}
function hasPackageJson() {
    return fs_1.default.existsSync(path_1.default.join(process.cwd(), 'package.json'));
}
async function installPackage(packageName, options) {
    logger_js_1.default.info('Checking for package.json...');
    if (!hasPackageJson()) {
        logger_js_1.default.warn(`Could not find package.json in the current directory. Please install ${chalk_1.default.bold(packageName)} manually.\n`);
        return false;
    }
    let packageManager = detectPackageManager();
    if (!packageManager) {
        logger_js_1.default.warn(`Could not detect package manager. Please install ${chalk_1.default.bold(packageName)} manually.\n`);
        return false;
    }
    try {
        logger_js_1.default.info(`Installing ${chalk_1.default.bold(packageName)} using ${chalk_1.default.bold(packageManager.name)}...`);
        const devFlag = options?.dev ? ['-D'] : [];
        await execa(packageManager.name, [packageManager.installCommand, `${packageName}@latest`, ...devFlag]);
        logger_js_1.default.success(`Successfully installed ${chalk_1.default.bold(packageName)}!\n`);
        return true;
    }
    catch (e) {
        logger_js_1.default.warn(`Failed to install ${chalk_1.default.bold(packageName)} with ${chalk_1.default.bold(packageManager.name)}.\n\nReceived error: ${e.message}.\n\nPlease install ${chalk_1.default.bold(packageName)} manually.\n`);
        return false;
    }
}
