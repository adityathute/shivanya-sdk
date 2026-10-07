"use client";

import { AuthProvider, Register } from "shivanya-auth";
import { Button } from "shivanya-ui";

import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";
import "../auth-demo.css";

export default function RegisterDemo() {
  const openPreview = () => {
    window.open(
      "/auth-preview/register",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section className="demo">
      <DemoHeader
        title="Register"
        description="Registration form for creating a new ShivanyaMS account."
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
            <Register
              onRegisterWithEmail={() => {
                console.log("Register with email clicked");
              }}
              onLogin={() => {
                console.log("Login clicked");
              }}
            />
          </AuthProvider>
        </div>
      </DemoSection>
    </section>
  );
}