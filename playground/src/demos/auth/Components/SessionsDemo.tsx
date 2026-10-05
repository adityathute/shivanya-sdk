import { AuthProvider, Sessions } from "shivanya-auth";

export default function SessionsDemo() {
  return (
    <section className="demo">
      <AuthProvider config={{ baseUrl: "http://localhost:8000" }}>
        <Sessions />
      </AuthProvider>
    </section>
  );
}