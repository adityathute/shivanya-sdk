"use client";

import { AuthProvider, Connections } from "shivanya-auth";

export default function ConnectionsDemo() {
  return (
    <section className="demo">
      <h1>Connections</h1>
      <p>Authenticated account connection integration check.</p>

      <AuthProvider config={{ baseUrl: "http://localhost:8000" }}>
        <Connections />
      </AuthProvider>
    </section>
  );
}