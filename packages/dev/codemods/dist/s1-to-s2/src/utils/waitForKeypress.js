"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitForKeypress = waitForKeypress;
async function waitForKeypress() {
    await new Promise((resolve) => {
        process.stdin.once('data', () => {
            resolve();
        });
    });
}
