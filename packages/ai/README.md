# shivanya-ai

AI client for the Shivanya platform.

## Installation

```bash
npm install shivanya-ai
```

## Usage

```ts
import { ShivanyaAI } from "shivanya-ai";

const ai = new ShivanyaAI({
  // Configure the client here
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
├── package.json
└── tsconfig.json
```

## Contributing

Make changes in the package source, build the package, and submit a pull request.

## License

ISC
