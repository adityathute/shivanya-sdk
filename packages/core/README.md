# shivanya-core

Core TypeScript client for the Shivanya platform.

## Installation

```bash
npm install shivanya-core
```

## Usage

```ts
import { ShivanyaClient } from "shivanya-core";

const client = new ShivanyaClient({
  baseURL: "https://api.shivanyams.com",
});

const data = await client.request("/api/example");
```

Use the core client when another SDK package needs a shared API client.

## Development

From the SDK root:

```bash
pnpm install
pnpm --filter shivanya-core build
```

Build the complete workspace:

```bash
pnpm build
```

## Package structure

```text
packages/core/
├── src/
│   ├── client.ts
│   ├── errors.ts
│   └── index.ts
├── package.json
└── tsconfig.json
```

## Publish

After testing and confirming the package version:

```bash
cd packages/core
npm publish
```

The package is configured for public npm publishing.

## Contributing

Make changes in `packages/core/src`, build the package, verify dependent packages if needed, then commit the change.

## License

ISC
