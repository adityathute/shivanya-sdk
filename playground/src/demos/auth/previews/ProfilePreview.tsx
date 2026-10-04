import { AuthProvider, Profile } from "shivanya-auth";

export default function ProfilePreview() {
  return (
    <AuthProvider config={{ baseUrl: "http://localhost:8000" }}>
      <Profile />
    </AuthProvider>
  );
}