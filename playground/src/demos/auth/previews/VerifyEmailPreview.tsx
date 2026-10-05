import { AuthProvider, VerifyEmail } from "shivanya-auth";

export default function VerifyEmailPreview() {
  const token = new URLSearchParams(window.location.search).get("token");

  if (!token) {
    return <p>Verification token is missing.</p>;
  }

  return (
    <AuthProvider config={{ baseUrl: "http://localhost:8000" }}>
      <VerifyEmail token={token} />
    </AuthProvider>
  );
}
