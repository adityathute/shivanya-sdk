# shivanya-ai

AI client for the Shivanya platform.

## Installation

```bash
npm install shivanya-ai
```

## Usage

```ts
import { ShivanyaAI } from "shivanya-ai";
import { ShivanyaClient } from "shivanya-core";

const client = new ShivanyaClient({
  baseURL: "https://api.shivanyams.com",
});

const ai = new ShivanyaAI(client);

const response = await ai.chat({
  message: "Hello",
});
```

The exact API behavior is determined by the backend connected to `ShivanyaClient`.

## Dependency

`shivanya-ai` uses `shivanya-core`.

## Development

From the SDK root:

```bash
pnpm install
pnpm --filter shivanya-ai build
```

## Test

Run AI tests:

```bash
pnpm --filter shivanya-ai test
```

Tests verify the chat request path, method, message payload, model, temperature, and returned response.

Build the complete workspace:

```bash
pnpm build
```

## Package structure

```text
packages/ai/
├── src/
│   ├── ai.ts
│   ├── types.ts
│   └── index.ts
├── package.json
└── tsconfig.json
```

## Publish

Check the package version, build it, and publish from this package directory:

```bash
cd packages/ai
npm publish
```

The package is configured for public npm publishing.

## Contributing

Make changes in `packages/ai/src`, build the package, verify dependent packages if needed, then commit the change.

## License

ISC
