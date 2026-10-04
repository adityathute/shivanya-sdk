# shivanya-shell

Reusable React application shell and layout components for Shivanya applications.

## Installation

```bash
npm install shivanya-shell
```

`shivanya-shell` depends on `shivanya-ui`.

React and React DOM are peer dependencies.

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

## Development

From the SDK root:

```bash
pnpm install
pnpm --filter shivanya-shell build
```

Build the complete workspace:

```bash
pnpm build
```

Use the playground for local UI testing:

```bash
pnpm --filter playground dev
```

## Package structure

```text
packages/shell/
├── src/
│   ├── components/
│   ├── context/
│   ├── hooks/
│   ├── layouts/
│   └── index.ts
├── scripts/
├── package.json
└── tsconfig.json
```

## Publish

After testing and confirming the package version:

```bash
cd packages/shell
npm publish
```

The package is configured for public npm publishing.

## Contributing

Make changes in `packages/shell/src`, test UI changes through the playground, build the package, and commit the change.

## License

ISC
