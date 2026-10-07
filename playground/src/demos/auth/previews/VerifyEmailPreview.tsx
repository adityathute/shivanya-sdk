"use client";

import {
  AuthPageLayout,
  AuthProvider,
  VerifyEmail,
} from "shivanya-auth";

export default function VerifyEmailPreview() {
  const token = new URLSearchParams(window.location.search).get("token");

  if (!token) {
    return (
      <AuthPageLayout>
        <div className="shivanya-auth-success-panel">
          <h3>Verify email</h3>
          <p>Verification token is missing.</p>
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
        <VerifyEmail
          token={token}
          onComplete={() => {
            console.log("Continue clicked");
          }}
        />
      </AuthPageLayout>
    </AuthProvider>
  );
}