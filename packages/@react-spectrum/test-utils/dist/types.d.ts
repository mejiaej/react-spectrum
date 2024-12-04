/**
 * Mocks screen width to simulate mobile experience, useful for testing Tray rendering.
 * @param width Optional width to apply. Automatically clamped to the maximum value allowed for mobile rendering.
 */
export function simulateMobile(width?: number): void;
/**
 * Mocks screen width to simulate standard desktop experience.
 * @param width Optional width to apply. Automatically clamped to the minimum value allowed for desktop rendering.
 */
export function simulateDesktop(width?: number): void;
export * from '@react-aria/test-utils';

//# sourceMappingURL=types.d.ts.map
