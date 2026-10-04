# Shivanya SDK

Reusable TypeScript and React packages for Shivanya applications.

## Packages

| Package | Purpose |
| --- | --- |
| `shivanya-core` | Core API client |
| `shivanya-ai` | AI client built on the core client |
| `shivanya-ui` | Reusable React UI components |
| `shivanya-shell` | Reusable React application shell and layouts |
| `shivanya-auth` | Authentication client, AuthProvider, and account UI |

## Requirements

- Node.js
- pnpm 11+
- React 18 or 19 for React packages

The repository is a pnpm workspace.

## Install the SDK repository

Clone the repository and enter it:

```bash
git clone https://github.com/adityathute/shivanya-sdk.git
cd shivanya-sdk
git checkout auth-v2
pnpm install
```

The `auth-v2` branch contains the current V2 authentication work. Do not use this branch as a production release until the V2 tests and integration checks have passed.

## Build

Build every workspace package:

```bash
pnpm build
```

Build one package:

```bash
pnpm --filter shivanya-core build
pnpm --filter shivanya-ai build
pnpm --filter shivanya-ui build
pnpm --filter shivanya-shell build
pnpm --filter shivanya-auth build
```

## Test

Run all package tests:

```bash
pnpm --filter shivanya-core test
pnpm --filter shivanya-ai test
pnpm --filter shivanya-ui test
pnpm --filter shivanya-shell test
pnpm --filter shivanya-auth test
pnpm --filter playground test
```

Run the full build and then all tests:

```bash
pnpm build
pnpm --filter shivanya-core test
pnpm --filter shivanya-ai test
pnpm --filter shivanya-ui test
pnpm --filter shivanya-shell test
pnpm --filter shivanya-auth test
pnpm --filter playground test
```

Each package test command builds its package first and then runs its Node test files. Auth has the most extensive integration-style coverage; the other packages have focused API, export, artifact, and playground smoke coverage.

Before committing SDK changes, run:

```bash
pnpm install
pnpm build
pnpm --filter shivanya-core test
pnpm --filter shivanya-ai test
pnpm --filter shivanya-ui test
pnpm --filter shivanya-shell test
pnpm --filter shivanya-auth test
pnpm --filter playground test
git status
git diff
```

## Install published packages

Applications can install individual packages from npm:

```bash
npm install shivanya-core
npm install shivanya-ai
npm install shivanya-ui
npm install shivanya-shell
npm install shivanya-auth
```

React applications using `shivanya-ui`, `shivanya-shell`, or `shivanya-auth` must provide React and React DOM.

## Quick Auth V2 example

```tsx
"use client";

import {
  AuthProvider,
  AuthModal,
  useAuth,
} from "shivanya-auth";

function App() {
  const { user, loading, logout } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {user ? (
        <button onClick={() => logout()}>Logout</button>
      ) : (
        <AuthModal
          open
          onClose={() => {}}
          features={["login", "register"]}
        />
      )}
    </div>
  );
}

export default function Root() {
  return (
    <AuthProvider
      config={{
        baseUrl: "https://auth.example.com",
        mode: "cookie",
      }}
    >
      <App />
    </AuthProvider>
  );
}
```

## Authentication modes

### Cookie mode

Cookie mode is the default and is intended for browser applications.

```tsx
<AuthProvider
  config={{
    baseUrl: "https://auth.example.com",
    mode: "cookie",
  }}
>
  <App />
</AuthProvider>
```

The SDK uses credentialed requests and the configured CSRF cookie/header for browser authentication.

### Token mode

Token mode is intended for mobile-style clients and API integrations.

```tsx
import {
  AuthProvider,
  MemoryAuthTokenStorage,
} from "shivanya-auth";

<AuthProvider
  config={{
    baseUrl: "https://auth.example.com",
    mode: "token",
    tokenStorage: new MemoryAuthTokenStorage(),
  }}
>
  <App />
</AuthProvider>
```

Token mode sends the access token as a Bearer token and refreshes it when required. For mobile production apps, provide a platform-specific `AuthTokenStorage` implementation instead of relying on in-memory storage.

The Auth API used with token mode must implement the token response/refresh contract expected by the SDK.

## Hosted Auth

A customer application can use a hosted Auth application while keeping the API configuration separate:

```tsx
<AuthProvider
  config={{
    baseUrl: "https://api.example.com",
    authUrl: "https://auth.shivanya.com",
  }}
>
  <App />
</AuthProvider>
```

Redirect explicitly when required:

```ts
auth.redirectToAuth(window.location.href);
```

The SDK does not contain server secrets.

## Package development

Each package contains its own README with package-specific installation, usage, development, and build instructions.

Repository structure:

```text
shivanya-sdk/
├── packages/
│   ├── ai/
│   ├── auth/
│   ├── core/
│   ├── shell/
│   └── ui/
├── playground/
├── package.json
├── pnpm-workspace.yaml
└── pnpm-lock.yaml
```

## Playground

Start the local playground:

```bash
pnpm --filter playground dev
```

Build it:

```bash
pnpm --filter playground build
```

See `playground/README.md` for details.

## Git workflow

Create a feature branch from the intended base branch:

```bash
git checkout test/auth-sdk
git pull
git checkout -b my-feature
```

Check changes:

```bash
git status
git diff
```

Commit and push:

```bash
git add .
git commit -m "describe the change"
git push -u origin my-feature
```

Do not commit secrets, local environment files, credentials, tokens, or private backend source.

## Publishing

Publishing is performed per package after its version has been updated and the package has been tested.

Authenticate with npm:

```bash
npm login
```

Check the package before publishing:

```bash
pnpm --filter shivanya-auth build
pnpm --filter shivanya-auth test
pnpm --filter shivanya-auth pack
```

Publish a package from its package directory:

```bash
cd packages/auth
npm publish
```

Repeat with the appropriate package only after verifying its version and dependencies.

## License

ISC
