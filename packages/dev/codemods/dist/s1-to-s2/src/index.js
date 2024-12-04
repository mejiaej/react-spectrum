"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.s1_to_s2 = s1_to_s2;
const addMacroSupport_js_1 = require("./utils/addMacroSupport.js");
const chalk_1 = __importDefault(require("chalk"));
const installPackage_js_1 = __importDefault(require("./utils/installPackage.js"));
const logger_js_1 = __importDefault(require("./utils/logger.js"));
const transform_js_1 = require("./transform.js");
const waitForKeypress_js_1 = require("./utils/waitForKeypress.js");
const boxen = require('boxen');
async function s1_to_s2(options) {
    console.log(boxen('Welcome to the React Spectrum v3 to Spectrum 2 upgrade assistant!\n\n' +
        'This tool will:\n\n' +
        `1. Install the ${chalk_1.default.bold('@react-spectrum/s2')} package and setup your bundler to use the Spectrum 2 style macro.\n\n` +
        '2. Upgrade the components in the current directory to use Spectrum 2.\n\n' +
        '3. Provide next steps to complete your upgrade.', { borderStyle: 'round', padding: 1, borderColor: 'green' }), '\n\n');
    console.log('Press Enter to get started...');
    await (0, waitForKeypress_js_1.waitForKeypress)();
    // Install S2 package
    let isS2PackageInstalled = await (0, installPackage_js_1.default)('@react-spectrum/s2');
    // Add support for macros
    let { isMacroPluginInstalled, isMacroSupportEnabled } = await (0, addMacroSupport_js_1.addMacroSupport)();
    console.log('Press Enter to upgrade components...');
    await (0, waitForKeypress_js_1.waitForKeypress)();
    logger_js_1.default.info('Upgrading components...');
    await (0, transform_js_1.transform)(options);
    logger_js_1.default.success('Upgrade complete!');
    let nextSteps = [
        'Add the following import to the entry component of your app: \n\n' +
            `${chalk_1.default.bold('import \'@react-spectrum/s2/page.css\';')}\n\n` +
            'Note that unlike React Spectrum v3, a Provider is not required.'
    ];
    if (!isS2PackageInstalled) {
        nextSteps.unshift(`Install the ${chalk_1.default.bold('@react-spectrum/s2')} package manually.`);
    }
    if (!isMacroSupportEnabled) {
        nextSteps.push('Configure your bundler to support using the Spectrum 2 style macro.\n\n' +
            `Macros are supported by default in Parcel v2.12.0 or later and can be used with other bundlers by${!isMacroPluginInstalled ? ` installing the ${chalk_1.default.bold('unplugin-parcel-macros')} package and` : ''} adding the plugin to your bundler config. See the examples for:\n\n` +
            `  - Webpack: ${chalk_1.default.underline('https://github.com/adobe/react-spectrum/tree/main/examples/s2-webpack-5-example')}\n` +
            `  - Next.js: ${chalk_1.default.underline('https://github.com/adobe/react-spectrum/tree/main/examples/s2-next-macros')}\n` +
            `  - Vite: ${chalk_1.default.underline('https://github.com/adobe/react-spectrum/tree/main/examples/s2-vite-project')}\n` +
            `  - Rollup: ${chalk_1.default.underline('https://github.com/adobe/react-spectrum/tree/main/examples/s2-rollup-starter-app')}\n` +
            `  - ESBuild: ${chalk_1.default.underline('https://github.com/adobe/react-spectrum/tree/main/examples/s2-esbuild-starter-app')}\n\n` +
            `or view documentation here: ${chalk_1.default.underline('https://react-spectrum.adobe.com/s2/index.html?path=/docs/intro--docs#configuring-your-bundler')}`);
    }
    nextSteps.push('Handle remaining upgrades and run your project\'s linter or formatter.\n\n' +
        'There may have been some upgrades that we couldn\'t handle automatically. We marked these with comments containing:\n\n' +
        `${chalk_1.default.bold('TODO(S2-upgrade)')}\n\n` +
        'You should be able to search your codebase and handle these manually. \n\n' +
        'We also recommend running your project\'s code formatter (i.e. Prettier, ESLint) after the upgrade process to clean up any extraneous formatting from the codemod.\n\n' +
        `For additional help, reference the Spectrum 2 Migration Guide: ${chalk_1.default.underline('https://react-spectrum.adobe.com/s2/index.html?path=/docs/migrating--docs')}`);
    console.log(boxen(`Next steps:\n\n ${nextSteps.map((step, i) => `${i + 1}. ${step}`).join('\n\n\n')}`, { borderStyle: 'round', padding: 1, borderColor: 'green' }));
    process.exit(0);
}
