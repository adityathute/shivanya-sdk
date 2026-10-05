import { AuthProvider, Profile } from "shivanya-auth";

export default function ProfileDemo() {
  return (
    <section className="demo">
      <AuthProvider config={{ baseUrl: "http://localhost:8000" }}>
        <Profile />
      </AuthProvider>
    </section>
  );
}