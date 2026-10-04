# Shivanya SDK Playground

Local development environment for testing Shivanya SDK packages.

The playground is for contributors and maintainers. It is not a published SDK package.

## Requirements

- Node.js
- pnpm 11+

## Setup

From the SDK root:

```bash
pnpm install
```

## Start

```bash
pnpm --filter playground dev
```

Vite normally starts the playground at:

```text
http://localhost:5173
```

Use the URL printed by the terminal if the port is different.

## Test SDK changes

Build the package being changed first when useful:

```bash
pnpm --filter shivanya-ui build
pnpm --filter shivanya-shell build
pnpm --filter shivanya-auth build
```

Then start the playground:

```bash
pnpm --filter playground dev
```

For Auth V2 changes, run the automated tests separately:

```bash
pnpm --filter shivanya-auth test
```

## Build

Build the playground:

```bash
pnpm --filter playground build
```

Build the complete SDK workspace:

```bash
pnpm build
```

## Development workflow

1. Edit a package under `packages/`.
2. Build the affected package.
3. Start the playground.
4. Verify the UI or integration manually.
5. Run the package tests when tests exist.
6. Run `pnpm build` before committing.

## Important

The playground is for local development only. It is not included in published npm packages.

Do not place production secrets or private backend credentials in the playground.
