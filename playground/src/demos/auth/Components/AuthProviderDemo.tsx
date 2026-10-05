import { AuthProvider, useAuth } from "shivanya-auth";

function AuthProviderTest() {
  const { user, loading, isAuthenticated, refreshUser, logout } = useAuth();

  if (loading) {
    return <p>Loading authentication state…</p>;
  }

  return (
    <div className="demo">
      <p>Status: {isAuthenticated ? "Authenticated" : "Not authenticated"}</p>
      {user?.email && <p>User: {user.email}</p>}
      {isAuthenticated ? (
        <div className="demo-actions">
          <button type="button" onClick={refreshUser}>
            Refresh user
          </button>
          <button type="button" onClick={logout}>
            Logout
          </button>
        </div>
      ) : (
        <p>Open the Auth V2 package demo to sign in.</p>
      )}
    </div>
  );
}

export default function AuthProviderDemo() {
  return (
    <section className="demo">
      <h1>AuthProvider</h1>
      <p>Provider state and session integration.</p>

      <AuthProvider config={{ baseUrl: "http://localhost:8000", mode: "cookie" }}>
        <AuthProviderTest />
      </AuthProvider>
    </section>
  );
}
