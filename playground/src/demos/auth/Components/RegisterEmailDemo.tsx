"use client";

import { AuthProvider, RegisterEmail } from "shivanya-auth";
import { Button } from "shivanya-ui";

import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";
import "../auth-demo.css";

export default function RegisterEmailDemo() {
  const openPreview = () => {
    window.open(
      "/auth-preview/register-email",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section className="demo">
      <DemoHeader
        title="Register Email"
        description="Registration form for creating a ShivanyaMS account with email and password."
      />

      <DemoSection title="Preview">
        <div className="auth-demo-actions">
          <Button
            variant="primary"
            onClick={openPreview}
          >
            Open Full Preview
          </Button>
        </div>
      </DemoSection>

      <DemoSection title="Default">
        <div className="auth-demo-panel">
          <AuthProvider
            config={{
              baseUrl: "http://localhost:8000",
              mode: "cookie",
            }}
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
          </AuthProvider>
        </div>
      </DemoSection>
    </section>
  );
}