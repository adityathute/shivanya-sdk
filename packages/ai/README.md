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

## Dependency

`shivanya-ai` uses `shivanya-core` as a package dependency.

## Development

This package is developed inside the Shivanya SDK pnpm workspace.

From the SDK root:

```bash
pnpm install
```

Build the package:

```bash
pnpm --filter shivanya-ai build
```

## Package Structure

```text
packages/ai/
├── src/
│   ├── ai.ts
│   ├── types.ts
│   └── index.ts
├── package.json
└── tsconfig.json
```

## Contributing

Make changes in the package source, build the package, and submit a pull request.

## License

ISC
