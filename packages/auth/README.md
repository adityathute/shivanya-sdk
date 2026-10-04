# Shivanya Auth

Reusable authentication SDK and account UI for React applications.

## Modes

Cookie mode is the default and is intended for browser applications.

    <AuthProvider
      config={{
        baseUrl: "https://auth.example.com",
        mode: "cookie",
      }}
    >
      <App />
    </AuthProvider>

Token mode is intended for mobile-style clients and API integrations.

    import { MemoryAuthTokenStorage } from "shivanya-auth";

    <AuthProvider
      config={{
        baseUrl: "https://auth.example.com",
        mode: "token",
        tokenStorage: new MemoryAuthTokenStorage(),
      }}
    >
      <App />
    </AuthProvider>

The SDK uses the same AuthClient API for both modes. Token storage can be replaced with a persistent or platform-specific implementation.

## Auth UI

Use the complete flow by default:

    <AuthModal open={open} onClose={() => setOpen(false)} />

Or enable only the features an application needs:

    <AuthModal
      open={open}
      onClose={() => setOpen(false)}
      features={["login", "register"]}
    />

Available features:

- `login`
- `register`
- `forgot`
- `reset`
- `verify`
- `google`
- `account`

## Hosted Auth Redirect

For a standalone hosted Auth application:

    <AuthProvider
      config={{
        baseUrl: "https://api.example.com",
        authUrl: "https://auth.shivanya.com",
      }}
    >
      <App />
    </AuthProvider>

Then:

    auth.redirectToAuth(window.location.href);

The SDK does not expose backend secrets. Hosted and self-hosted deployments only require public API configuration in the client.

## Public API

The package exports:

- `AuthClient`
- `AuthProvider`
- `useAuth`
- `AuthModal`
- `AuthPage`
- `AccountModal`
- token storage interfaces and implementations
- redirect helpers
- authentication types and errors

## Testing

The V2 suite covers token login, token storage, Authorization headers, refresh rotation, concurrent refresh, failed refresh cleanup, logout cleanup, redirect URLs, feature configuration, Google feature selection, and public exports.