"""
Minions Test-reports SDK — Type Schemas
Custom MinionType schemas for Minions Test-reports.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

test_report_type = MinionType(
    id="test-reports-test-report",
    name="Test report",
    slug="test-report",
    description="An aggregated report across test runs.",
    icon="📊",
    schema=[
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="targetId", type="string", label="targetId"),
        FieldDefinition(name="periodStart", type="string", label="periodStart"),
        FieldDefinition(name="periodEnd", type="string", label="periodEnd"),
        FieldDefinition(name="totalRuns", type="number", label="totalRuns"),
        FieldDefinition(name="passRate", type="number", label="passRate"),
        FieldDefinition(name="avgResponseTimeMs", type="number", label="avgResponseTimeMs"),
        FieldDefinition(name="regressions", type="string", label="regressions"),
        FieldDefinition(name="generatedAt", type="string", label="generatedAt"),
    ],
)

regression_diff_type = MinionType(
    id="test-reports-regression-diff",
    name="Regression diff",
    slug="regression-diff",
    description="A detected regression between report periods.",
    icon="🔻",
    schema=[
        FieldDefinition(name="reportId", type="string", label="reportId"),
        FieldDefinition(name="metric", type="string", label="metric"),
        FieldDefinition(name="previousValue", type="number", label="previousValue"),
        FieldDefinition(name="currentValue", type="number", label="currentValue"),
        FieldDefinition(name="delta", type="number", label="delta"),
        FieldDefinition(name="severity", type="select", label="severity"),
        FieldDefinition(name="detectedAt", type="string", label="detectedAt"),
    ],
)

custom_types: list[MinionType] = [
    test_report_type,
    regression_diff_type,
]

