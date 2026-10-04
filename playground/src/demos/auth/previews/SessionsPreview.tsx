import { AuthProvider, Sessions } from "shivanya-auth";

export default function SessionsPreview() {
  return (
    <AuthProvider config={{ baseUrl: "http://localhost:8000" }}>
      <Sessions />
    </AuthProvider>
  );
}