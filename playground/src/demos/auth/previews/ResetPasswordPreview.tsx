"use client";

import {
  AuthPageLayout,
  AuthProvider,
  ResetPassword,
} from "shivanya-auth";

export default function ResetPasswordPreview() {
  const token = new URLSearchParams(window.location.search).get("token");

  if (!token) {
    return (
      <AuthPageLayout>
        <div className="shivanya-reset-password-state">
          Reset password token is missing.
        </div>
      </AuthPageLayout>
    );
  }

  return (
    <AuthProvider
      config={{
        baseUrl: "http://localhost:8000",
        mode: "cookie",
      }}
    >
      <AuthPageLayout>
        <ResetPassword
          token={token}
          onComplete={() => {
            console.log("Sign in clicked");
          }}
        />
      </AuthPageLayout>
    </AuthProvider>
  );
}