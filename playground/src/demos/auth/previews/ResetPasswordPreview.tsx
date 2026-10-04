import { AuthProvider, ResetPassword } from "shivanya-auth";

export default function ResetPasswordPreview() {
  const token = new URLSearchParams(window.location.search).get("token");

  if (!token) {
    return <p>Reset password token is missing.</p>;
  }

  return (
    <AuthProvider config={{ baseUrl: "http://localhost:8000" }}>
      <ResetPassword token={token} />
    </AuthProvider>
  );
}