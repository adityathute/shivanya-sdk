"use client";

import { AuthProvider, Security } from "shivanya-auth";

export default function SecurityDemo() {
  return (
    <section className="demo">
      <h1>Security</h1>
      <p>Authenticated security and account management integration check.</p>

      <AuthProvider config={{ baseUrl: "http://localhost:8000" }}>
        <Security />
      </AuthProvider>
    </section>
  );
}