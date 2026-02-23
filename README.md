# minions-test-reports

**Aggregated results, regression diffs, quality trends, and coverage maps**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-test-reports/sdk minions-sdk

# Python
pip install minions-test-reports

# CLI (global)
npm install -g @minions-test-reports/cli
```

---

## CLI

```bash
# Show help
test-reports --help
```

---

## Python SDK

```python
from minions_test_reports import create_client

client = create_client()
```

---

## Project Structure

```
minions-test-reports/
  packages/
    core/           # TypeScript core library (@minions-test-reports/sdk on npm)
    python/         # Python SDK (minions-test-reports on PyPI)
    cli/            # CLI tool (@minions-test-reports/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [test-reports.minions.help](https://test-reports.minions.help)
- Blog: [test-reports.minions.blog](https://test-reports.minions.blog)
- App: [test-reports.minions.wtf](https://test-reports.minions.wtf)

---

## License

[MIT](LICENSE)
