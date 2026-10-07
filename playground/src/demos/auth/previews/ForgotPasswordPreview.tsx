"use client";

import {
  AuthPageLayout,
  AuthProvider,
  ForgotPassword,
} from "shivanya-auth";

export default function ForgotPasswordPreview() {
  return (
    <AuthProvider
      config={{
        baseUrl: "http://localhost:8000",
        mode: "cookie",
      }}
    >
      <AuthPageLayout>
        <ForgotPassword
          onBack={() => {
            console.log("Back to sign in");
          }}
        />
      </AuthPageLayout>
    </AuthProvider>
  );
}