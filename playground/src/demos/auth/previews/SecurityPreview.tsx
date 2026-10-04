"use client";

import { AuthProvider, Security } from "shivanya-auth";

export default function SecurityPreview() {
  return (
    <AuthProvider config={{ baseUrl: "http://localhost:8000" }}>
      <Security />
    </AuthProvider>
  );
}