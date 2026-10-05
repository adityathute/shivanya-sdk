"use client";

import { AuthProvider, Security } from "shivanya-auth";

export default function SecurityDemo() {
  return (
    <section className="demo">
      <AuthProvider config={{ baseUrl: "http://localhost:8000" }}>
        <Security />
      </AuthProvider>
    </section>
  );
}