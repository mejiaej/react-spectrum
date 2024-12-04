#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { parseArgs } = require('node:util');
const src_1 = require("./s1-to-s2/src");
const src_2 = require("./use-monopackages/src");
const codemods = {
    's1-to-s2': src_1.s1_to_s2,
    'use-monopackages': src_2.use_monopackages
};
// https://github.com/facebook/jscodeshift?tab=readme-ov-file#usage-cli
const options = {
    'parser': {
        type: 'string'
    },
    'ignore-pattern': {
        type: 'string'
    },
    'dry': {
        type: 'boolean',
        short: 'd'
    },
    'path': {
        type: 'string'
    },
    'components': {
        type: 'string'
    }
};
const { values, positionals } = parseArgs({
    options,
    allowPositionals: true
});
if (positionals.length < 1) {
    console.error('Please specify a codemod to run. Available codemods: ', Object.keys(codemods).join(', '));
    process.exit(1);
}
const codemodName = positionals[0];
const codemodFunction = codemods[codemodName];
if (!codemodFunction) {
    console.error(`Unknown codemod: ${codemodName}, available codemods: ${Object.keys(codemods).join(', ')}`);
    process.exit(1);
}
try {
    codemodFunction({
        parser: 'tsx',
        ignorePattern: '**/node_modules/**',
        path: '.',
        ...values
    });
}
catch (error) {
    console.error(`Error running codemod: ${error}`);
    process.exit(1);
}
