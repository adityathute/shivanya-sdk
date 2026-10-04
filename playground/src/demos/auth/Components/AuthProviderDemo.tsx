import { AuthPage, AuthProvider, useAuth } from "shivanya-auth";

function AuthTestPanel() {
  const { user, loading, isAuthenticated, logout, refreshUser, client } =
    useAuth();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <p>Status: {isAuthenticated ? "Logged in" : "Logged out"}</p>

      {user && <p>User: {user.email}</p>}

      {isAuthenticated ? (
        <>
          <button onClick={logout}>Logout</button>
          <button onClick={refreshUser}>Refresh User</button>
          <button onClick={() => client.refresh()}>Refresh Session</button>
        </>
      ) : (
        <p>Login using the Auth UI above.</p>
      )}
    </div>
  );
}

export default function AuthProviderDemo() {
  return (
    <section className="demo">
      <h1>Auth package</h1>
      <p>Workspace import and UI integration check.</p>

      <AuthProvider config={{ baseUrl: "http://localhost:8000" }}>
        <AuthPage />
        <AuthTestPanel />
      </AuthProvider>
    </section>
  );
}
