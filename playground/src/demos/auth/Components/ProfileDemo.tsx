import { AuthProvider, Profile } from "shivanya-auth";

export default function ProfileDemo() {
  return (
    <section className="demo">
      <h1>Profile</h1>
      <p>Authenticated profile integration check.</p>

      <AuthProvider config={{ baseUrl: "http://localhost:8000" }}>
        <Profile />
      </AuthProvider>
    </section>
  );
}