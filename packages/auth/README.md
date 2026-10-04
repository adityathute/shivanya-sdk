# shivanya-auth

Authentication SDK and reusable account UI for React applications.

## Installation

```bash
npm install shivanya-auth
```

React and React DOM are peer dependencies.

## Quick start

Wrap the application with `AuthProvider`:

```tsx
"use client";

import { AuthProvider } from "shivanya-auth";

export function Root({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider
      config={{
        baseUrl: "https://auth.example.com",
        mode: "cookie",
      }}
    >
      {children}
    </AuthProvider>
  );
}
```

Use authentication from a component:

```tsx
"use client";

import { useAuth } from "shivanya-auth";

export function AccountButton() {
  const { user, loading, logout } = useAuth();

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>Not signed in</div>;

  return <button onClick={() => logout()}>Logout</button>;
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

The SDK uses credentialed browser requests and CSRF protection. The default CSRF cookie name is `csrftoken` and the default CSRF header is `X-CSRFToken`.

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

Token mode sends:

```http
Authorization: Bearer <access-token>
```

The SDK refreshes the access token after an authentication failure and protects concurrent requests with a shared refresh operation.

`MemoryAuthTokenStorage` is suitable for development and tests. A production mobile application should provide an `AuthTokenStorage` implementation backed by the platform's secure storage.

The server used with token mode must return an access token and, when applicable, a refresh token from login/refresh responses. The SDK accepts both camelCase and snake_case token response fields.

## Auth client

For direct SDK access:

```ts
import { AuthClient } from "shivanya-auth";

const auth = new AuthClient({
  baseUrl: "https://auth.example.com",
  mode: "cookie",
});

await auth.login("user@example.com", "password");

const user = await auth.getCurrentUser();

await auth.logout();
```

The same client API is used for cookie and token modes.

Common operations include:

```ts
await auth.login(email, password);
await auth.register(email, password, name);
await auth.logout();
await auth.refresh();
await auth.getCurrentUser();
await auth.getProfile();
await auth.getSessions();
await auth.getSecurity();
await auth.forgotPassword(email);
await auth.resetPassword(token, password);
await auth.verifyEmail(token);
await auth.resendVerification();
```

The exact parameter shape for an operation is defined by the exported TypeScript types.

## Auth UI

### Complete AuthModal

```tsx
import { AuthModal } from "shivanya-auth";

<AuthModal
  open={open}
  onClose={() => setOpen(false)}
/>
```

### Select features

```tsx
<AuthModal
  open={open}
  onClose={() => setOpen(false)}
  features={["login", "register"]}
/>
```

Available features:

- `login`
- `register`
- `forgot`
- `reset`
- `verify`
- `google`
- `account`

If `features` is omitted, the complete configured Auth flow is available.

### AuthPage

Use `AuthPage` when the authentication experience should be rendered as a standalone page instead of a modal.

### AccountModal

Use `AccountModal` for authenticated account, profile, session, security, and account-management UI.

## Hosted Auth redirect

A hosted Auth application can be configured separately from the API:

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

Redirect explicitly:

```ts
auth.redirectToAuth(window.location.href);
```

Or create the URL without redirecting:

```ts
const url = auth.authPageUrl(window.location.href);
```

The SDK does not contain backend secrets.

## Configuration

The main `AuthConfig` options are:

| Option | Purpose |
| --- | --- |
| `baseUrl` | Auth API base URL |
| `apiPrefix` | Optional API prefix |
| `mode` | `cookie` or `token`; defaults to `cookie` |
| `authUrl` | Optional hosted Auth page URL |
| `csrfCookieName` | CSRF cookie name; defaults to `csrftoken` |
| `csrfHeaderName` | CSRF header name; defaults to `X-CSRFToken` |
| `credentials` | Fetch credential mode; automatically selected from the auth mode when omitted |
| `tokenStorage` | Token storage implementation for token mode |
| `tokenRefreshPath` | Optional refresh endpoint override |

## Token storage

Implement `AuthTokenStorage` when the application needs persistent or platform-specific storage:

```ts
import type {
  AuthTokenPair,
  AuthTokenStorage,
} from "shivanya-auth";

export class MyTokenStorage implements AuthTokenStorage {
  async getAccessToken() {
    return null;
  }

  async getRefreshToken() {
    return null;
  }

  async setTokens(tokens: AuthTokenPair) {}

  async clearTokens() {}
}
```

Do not store production refresh tokens in ordinary browser localStorage when a safer storage mechanism is available.

## Redirect helper

The package also exports:

```ts
import { createAuthRedirectUrl } from "shivanya-auth";

const url = createAuthRedirectUrl(
  "https://auth.shivanya.com",
  window.location.href,
);
```

## Development

From the SDK root:

```bash
pnpm install
```

Build Auth:

```bash
pnpm --filter shivanya-auth build
```

Run the complete Auth test suite:

```bash
pnpm --filter shivanya-auth test
```

Run the workspace build:

```bash
pnpm build
```

The Auth test suite includes token login, Authorization headers, refresh rotation, concurrent refresh, failed refresh cleanup, logout cleanup, redirect URLs, feature configuration, Google feature selection, and public exports.

## Test files

```text
packages/auth/tests/
├── auth-client.test.mjs
├── auth-token.test.mjs
└── auth-v2.test.mjs
```

## Publish

Before publishing:

```bash
pnpm --filter shivanya-auth build
pnpm --filter shivanya-auth test
cd packages/auth
npm pack
npm publish
```

Check the package contents with `npm pack` before publishing a release.

## Package structure

```text
packages/auth/
├── src/
│   ├── client/
│   ├── components/
│   ├── context/
│   └── index.ts
├── tests/
├── scripts/
├── package.json
└── tsconfig.json
```

## Important

The SDK is a client library. It does not include the private Shivanya Auth backend, database, signing secrets, OAuth secrets, or other server-side credentials.

Hosted deployments and self-hosted deployments must expose an Auth API compatible with the SDK.

## License

ISC
