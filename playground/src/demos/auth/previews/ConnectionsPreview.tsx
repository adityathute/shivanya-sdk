"use client";

import { AuthProvider, Connections } from "shivanya-auth";

export default function ConnectionsPreview() {
  return (
    <AuthProvider config={{ baseUrl: "http://localhost:8000" }}>
      <Connections />
    </AuthProvider>
  );
}