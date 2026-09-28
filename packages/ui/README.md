# shivanya-ui

Reusable React UI components for Shivanya applications.

## Installation

```bash
npm install shivanya-ui
```

## Usage

```tsx
import { Button, Input, Typography } from "shivanya-ui";

export function Example() {
  return (
    <div>
      <Typography variant="h1">
        Shivanya
      </Typography>

      <Input placeholder="Enter something" />

      <Button>
        Continue
      </Button>
    </div>
  );
}
```

## Available Components

Current components:

- `Button`
- `Input`
- `Typography`

More reusable components will be added as the SDK grows.

## Development

This package is developed inside the Shivanya SDK pnpm workspace.

From the SDK root:

```bash
pnpm install
```

Build the package:

```bash
pnpm --filter shivanya-ui build
```

Test changes using the SDK playground:

```bash
pnpm --filter playground dev
```

The playground consumes `shivanya-ui` directly from the workspace.

## Package Structure

```text
packages/ui/
├── src/
│   ├── components/
│   └── index.ts
├── package.json
└── tsconfig.json
```

## React Compatibility

The package supports React 18 and React 19 through peer dependencies.

## Contributing

Make changes in the package source, test them through the playground, build the package, and submit a pull request.

## License

ISC
