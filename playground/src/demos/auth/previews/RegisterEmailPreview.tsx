"use client";

import {
  AuthPageLayout,
  AuthProvider,
  RegisterEmail,
} from "shivanya-auth";

export default function RegisterEmailPreview() {
  return (
    <AuthProvider
      config={{
        baseUrl: "http://localhost:8000",
        mode: "cookie",
      }}
    >
      <AuthPageLayout
        title="Create Account"
        subtitle="Register to get started with ShivanyaMS"
      >
        <RegisterEmail
          onLogin={() => {
            console.log("Login clicked");
          }}
          onSuccess={(email) => {
            console.log("Registration successful:", email);
          }}
          showGoogle
        />
      </AuthPageLayout>
    </AuthProvider>
  );
}