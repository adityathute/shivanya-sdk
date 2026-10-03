# Shivanya SDK Playground

Small local development environment for testing Shivanya SDK packages.

This playground is for contributors and maintainers. It is not a published SDK package.

## Requirements

- Node.js
- pnpm

## Setup

From the SDK root:

```bash
pnpm install
```

## Start

```bash
pnpm --filter playground dev
```

Open the local URL shown by Vite, usually:

```text
http://localhost:5173
```

## Test SDK Changes

Edit packages such as:

```text
packages/ui/
packages/shell/
```

Then refresh the playground in the browser.

## Build

Build the playground:

```bash
pnpm --filter playground build
```

Build the complete SDK workspace:

```bash
pnpm build
```

## Important

The playground exists only for local development and contribution.

It is not included in the published npm packages.
