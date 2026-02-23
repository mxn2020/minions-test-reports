/**
 * @module @minions-test-reports/sdk/schemas
 * Custom MinionType schemas for Minions Test-reports.
 */

import type { MinionType } from 'minions-sdk';

export const testreportType: MinionType = {
  id: 'test-reports-test-report',
  name: 'Test report',
  slug: 'test-report',
  description: 'An aggregated report across test runs.',
  icon: '📊',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'targetId', type: 'string', label: 'targetId' },
    { name: 'periodStart', type: 'string', label: 'periodStart' },
    { name: 'periodEnd', type: 'string', label: 'periodEnd' },
    { name: 'totalRuns', type: 'number', label: 'totalRuns' },
    { name: 'passRate', type: 'number', label: 'passRate' },
    { name: 'avgResponseTimeMs', type: 'number', label: 'avgResponseTimeMs' },
    { name: 'regressions', type: 'string', label: 'regressions' },
    { name: 'generatedAt', type: 'string', label: 'generatedAt' },
  ],
};

export const regressiondiffType: MinionType = {
  id: 'test-reports-regression-diff',
  name: 'Regression diff',
  slug: 'regression-diff',
  description: 'A detected regression between report periods.',
  icon: '🔻',
  schema: [
    { name: 'reportId', type: 'string', label: 'reportId' },
    { name: 'metric', type: 'string', label: 'metric' },
    { name: 'previousValue', type: 'number', label: 'previousValue' },
    { name: 'currentValue', type: 'number', label: 'currentValue' },
    { name: 'delta', type: 'number', label: 'delta' },
    { name: 'severity', type: 'select', label: 'severity' },
    { name: 'detectedAt', type: 'string', label: 'detectedAt' },
  ],
};

export const customTypes: MinionType[] = [
  testreportType,
  regressiondiffType,
];

