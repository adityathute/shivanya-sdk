# shivanya-auth

Reusable authentication and account UI for Shivanya applications.

## Architecture

`shivanya-auth` is the reusable frontend package. It talks to the Django `shivanya-auth` backend through `AuthClient` and uses `shivanya-ui` for the visual system.

## Setup

```tsx
import { AuthProvider, AuthModal } from "shivanya-auth";
import "shivanya-auth/styles";

export function App() {
  return (
    <AuthProvider config={{ baseUrl: "http://127.0.0.1:8000" }}>
      <YourApp />
    </AuthProvider>
  );
}
```

Open the modal from any application without navigating away:

```tsx
<AuthModal open={open} onClose={() => setOpen(false)} />
```

For an explicit standalone authentication page:

```tsx
<AuthPage />
```

The package supports login, registration, password recovery, email verification, profile, sessions, security, Google connection state, account deletion, settings, and logout.
