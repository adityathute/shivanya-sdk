"use client";

import {
  AuthPageLayout,
  AuthProvider,
  Register,
} from "shivanya-auth";

export default function RegisterPreview() {
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
        <Register
          onRegisterWithEmail={() => {
            console.log("Register with email clicked");
          }}
          onLogin={() => {
            console.log("Login clicked");
          }}
        />
      </AuthPageLayout>
    </AuthProvider>
  );
}