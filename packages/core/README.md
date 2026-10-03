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

## Development

This package is developed inside the Shivanya SDK pnpm workspace.

From the SDK root:

```bash
pnpm install
```

Build the package:

```bash
pnpm --filter shivanya-core build
```

## Package Structure

```text
packages/core/
├── src/
│   ├── client.ts
│   ├── errors.ts
│   └── index.ts
├── package.json
└── tsconfig.json
```

## Contributing

Make changes in the package source, build the package, and submit a pull request.

## License

ISC
