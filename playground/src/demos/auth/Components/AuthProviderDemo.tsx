import { AuthPage, AuthProvider } from "shivanya-auth";

export default function AuthProviderDemo() {
  return (
    <section className="demo">
      <h1>Auth package</h1>
      <p>Workspace import and UI integration check.</p>

      <AuthProvider config={{ baseUrl: "http://127.0.0.1:8000" }}>
        <AuthPage />
      </AuthProvider>
    </section>
  );
}