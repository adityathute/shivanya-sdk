# Shivanya SDK

Reusable TypeScript packages for building Shivanya applications.

Shivanya SDK provides shared frontend building blocks that can be used across Shivanya applications and other React projects.

## Packages

### shivanya-ui

Reusable React UI components.

```bash
npm install shivanya-ui
```

### shivanya-shell

Reusable application shell and layout components.

```bash
npm install shivanya-shell
```

`shivanya-shell` uses `shivanya-ui` as a package dependency.

## Development

The SDK is maintained as a pnpm monorepo.

Requirements:

- Node.js
- pnpm

Install dependencies:

```bash
pnpm install
```

Build all packages and the development workspace:

```bash
pnpm build
```

## Repository Structure

```text
shivanya-sdk/
├── packages/
│   ├── ui/
│   └── shell/
│
├── playground/
│
├── package.json
├── pnpm-workspace.yaml
└── pnpm-lock.yaml
```

## Playground

The repository includes a small development playground for contributors to test SDK packages locally.

The playground is not part of the published npm packages.

See:

```text
playground/README.md
```

## Package Development

Package source code is located under:

```text
packages/
```

Build a specific package:

```bash
pnpm --filter shivanya-ui build
```

```bash
pnpm --filter shivanya-shell build
```

## Contributing

1. Create a branch.
2. Make the required package changes.
3. Test the changes in the playground.
4. Run the workspace build.
5. Review the Git changes.
6. Commit the changes.
7. Push the branch.
8. Open a pull request.

Useful commands:

```bash
git status
git diff
pnpm build
```

## License

ISC
