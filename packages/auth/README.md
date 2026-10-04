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
  const { user, loading, isAuthenticated, logout } = useAuth();

  if (loading) return <div>Loading...</div>;
  if (!isAuthenticated) return <div>Not signed in</div>;

  return (
    <div>
      <span>{user?.email}</span>
      <button onClick={() => logout()}>Logout</button>
    </div>
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

The SDK automatically attempts one refresh after a `401` response and shares the refresh operation across concurrent requests.

`MemoryAuthTokenStorage` is suitable for development and tests. A production mobile application should provide an `AuthTokenStorage` implementation backed by the platform's secure storage.

The Auth API used with token mode must return an access token from login/refresh responses and should return a refresh token when refresh-token rotation is used. The SDK accepts both camelCase and snake_case token response fields.

## Auth client

For direct SDK access:

```ts
import { AuthClient } from "shivanya-auth";

const auth = new AuthClient({
  baseUrl: "https://auth.example.com",
  mode: "cookie",
});

await auth.login({
  email: "user@example.com",
  password: "password",
});

const user = await auth.getCurrentUser();

await auth.logout();
```

The same client API is used for cookie and token modes.

Common operations:

```ts
await auth.login({
  email: "user@example.com",
  password: "password",
});

await auth.register({
  first_name: "John",
  last_name: "Doe",
  email: "user@example.com",
  password: "password",
  confirm_password: "password",
});

await auth.getCurrentUser();
await auth.getProfile();
await auth.getSessions();
await auth.getConnections();

await auth.forgotPassword("user@example.com");

await auth.validateResetPassword("reset-token");

await auth.resetPassword({
  token: "reset-token",
  new_password: "new-password",
  confirm_password: "new-password",
});

await auth.verifyEmail("verification-token");
await auth.resendVerification("user@example.com");

await auth.changePassword({
  current_password: "old-password",
  new_password: "new-password",
  confirm_password: "new-password",
});

await auth.updateProfile({
  first_name: "John",
});

await auth.updateUsername("john");

await auth.revokeSession("session-id");
await auth.revokeOtherSessions();

await auth.disconnectGoogle();

await auth.deleteAccount("current-password");
await auth.verifyDeleteAccount("current-password");
await auth.cancelDeleteAccount();

await auth.refresh();
await auth.logout();
```

Google OAuth URLs can be generated with:

```ts
const loginUrl = auth.googleStartUrl(window.location.href);
const connectUrl = auth.googleConnectStartUrl(window.location.href);
```

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

If `features` is omitted, all currently supported Auth features are enabled.

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
| `apiPrefix` | Optional API prefix; defaults to `api/v1` |
| `mode` | `cookie` or `token`; defaults to `cookie` |
| `authUrl` | Optional hosted Auth page URL |
| `csrfCookieName` | CSRF cookie name; defaults to `csrftoken` |
| `csrfHeaderName` | CSRF header name; defaults to `X-CSRFToken` |
| `credentials` | Fetch credential mode; selected automatically from the auth mode when omitted |
| `tokenStorage` | Token storage implementation for token mode |
| `tokenRefreshPath` | Optional refresh endpoint override; defaults to `auth/refresh/` |

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

  async setTokens(tokens: AuthTokenPair) {
    // Store tokens in platform-secure storage.
  }

  async clearTokens() {
    // Remove stored tokens.
  }
}
```

For production mobile applications, use secure platform storage rather than ordinary browser localStorage.

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

The Auth test suite covers token login, Authorization headers, refresh rotation, concurrent refresh, failed refresh cleanup, logout cleanup, redirect URLs, feature configuration, Google feature selection, and public exports.

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

Review the files produced by `npm pack` before publishing a release.

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

Hosted and self-hosted deployments must expose an Auth API compatible with the SDK. Token-mode server support must be configured on the Auth API; enabling `mode: "token"` in the client does not convert a cookie-only backend into a token API.

## License

ISC
