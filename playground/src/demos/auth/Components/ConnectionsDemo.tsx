"use client";

import { AuthProvider, Connections } from "shivanya-auth";

export default function ConnectionsDemo() {
  return (
    <section className="demo">
      <AuthProvider config={{ baseUrl: "http://localhost:8000" }}>
        <Connections />
      </AuthProvider>
    </section>
  );
}