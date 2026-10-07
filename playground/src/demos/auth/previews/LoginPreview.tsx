"use client";

import {
  AuthPageLayout,
  AuthProvider,
  Login,
} from "shivanya-auth";

export default function LoginPreview() {
  return (
    <AuthProvider
      config={{
        baseUrl: "http://localhost:8000",
        mode: "cookie",
      }}
    >
      <AuthPageLayout
        title="Welcome Back"
        subtitle="Sign in to your account"
      >
        <Login
          onRegister={() => {
            console.log("Register clicked");
          }}
          onForgotPassword={() => {
            console.log("Forgot password clicked");
          }}
          showGoogle
        />
      </AuthPageLayout>
    </AuthProvider>
  );
}