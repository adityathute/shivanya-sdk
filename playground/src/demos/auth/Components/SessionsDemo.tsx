import { AuthProvider, Sessions } from "shivanya-auth";

export default function SessionsDemo() {
  return (
    <section className="demo">
      <h1>Sessions</h1>
      <p>Authenticated session management integration check.</p>

      <AuthProvider config={{ baseUrl: "http://localhost:8000" }}>
        <Sessions />
      </AuthProvider>
    </section>
  );
}