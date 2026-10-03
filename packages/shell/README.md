# shivanya-shell

Reusable application shell and layout components for Shivanya applications.

## Installation

```bash
npm install shivanya-shell
```

## Usage

```tsx
import { DashboardShell } from "shivanya-shell";

export function App() {
  return (
    <DashboardShell>
      Your application content
    </DashboardShell>
  );
}
```

## Dependency

`shivanya-shell` uses `shivanya-ui` as a package dependency.

React and React DOM are peer dependencies.

## Development

This package is developed inside the Shivanya SDK pnpm workspace.

From the SDK root:

```bash
pnpm install
```

Build the package:

```bash
pnpm --filter shivanya-shell build
```

Test changes using the SDK playground:

```bash
pnpm --filter playground dev
```

## Package Structure

```text
packages/shell/
├── src/
│   ├── components/
│   ├── context/
│   ├── hooks/
│   ├── layouts/
│   └── index.ts
├── package.json
└── tsconfig.json
```

## Contributing

Make changes in the package source, test them through the playground, build the package, and submit a pull request.

## License

ISC
