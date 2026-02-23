/**
 * Minions Test-reports SDK
 *
 * Aggregated results, regression diffs, quality trends, and coverage maps
 *
 * @module @minions-test-reports/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Test-reports.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';
