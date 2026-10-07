"use client";

import { AuthProvider, Login } from "shivanya-auth";
import { Button } from "shivanya-ui";

import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";
import "../auth-demo.css";

export default function LoginDemo() {
  const openPreview = () => {
    window.open(
      "/auth-preview/login",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section className="demo">
      <DemoHeader
        title="Login"
        description="Authentication form for signing in to a ShivanyaMS account."
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
            <Login
              onRegister={() => {
                console.log("Register clicked");
              }}
              onForgotPassword={() => {
                console.log("Forgot password clicked");
              }}
              showGoogle
            />
          </AuthProvider>
        </div>
      </DemoSection>
    </section>
  );
}