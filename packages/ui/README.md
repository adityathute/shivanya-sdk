# shivanya-ui

Reusable React UI components for Shivanya applications.

## Installation

```bash
npm install shivanya-ui
```

React and React DOM are peer dependencies.

## Usage

```tsx
import { Button, Input, Typography } from "shivanya-ui";

export function Example() {
  return (
    <div>
      <Typography variant="h1">Shivanya</Typography>
      <Input placeholder="Enter something" />
      <Button>Continue</Button>
    </div>
  );
}
```

## Development

From the SDK root:

```bash
pnpm install
pnpm --filter shivanya-ui build
```

The build also generates the package icon entrypoints and copies required assets.

Build the complete workspace:

```bash
pnpm build
```

Use the playground for visual development:

```bash
pnpm --filter playground dev
```

## Package structure

```text
packages/ui/
├── src/
│   ├── components/
│   └── index.ts
├── scripts/
├── package.json
└── tsconfig.json
```

## React compatibility

The package supports React 18 and React 19 through peer dependencies.

## Publish

After testing and confirming the package version:

```bash
cd packages/ui
npm publish
```

The package is configured for public npm publishing.

## Contributing

Make changes in `packages/ui/src`, test visual changes through the playground, build the package, and commit the change.

## License

ISC
