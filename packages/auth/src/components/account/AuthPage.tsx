"use client";

import { useEffect, useMemo, useState } from "react";
import type { AuthFeature } from "../../client/types";
import { Login } from "../login/Login";
import { Register } from "../register/Register";
import { ForgotPassword } from "../forgot-password/ForgotPassword";
import { ResetPassword } from "../reset-password/ResetPassword";
import { VerifyEmail } from "../verify-email/VerifyEmail";
import { AuthShell } from "../shared/AuthShell";
import { resolveAuthFeatures } from "./auth-features";

import "../../styles/AuthPage.css";

export type AuthPageView =
  | "login"
  | "register"
  | "forgot"
  | "reset"
  | "verify";

export interface AuthPageProps {
  initialView?: AuthPageView;
  resetToken?: string;
  verifyToken?: string;
  features?: AuthFeature[];
  onAuthenticated?: () => void;
}

const viewFeature: Record<AuthPageView, AuthFeature> = {
  login: "login",
  register: "register",
  forgot: "forgot",
  reset: "reset",
  verify: "verify",
};

function firstAvailableView(features: Set<AuthFeature>): AuthPageView {
  for (const view of [
    "login",
    "register",
    "forgot",
    "reset",
    "verify",
  ] as AuthPageView[]) {
    if (features.has(viewFeature[view])) {
      return view;
    }
  }

  return "login";
}

export function AuthPage({
  initialView = "login",
  resetToken,
  verifyToken,
  features,
  onAuthenticated,
}: AuthPageProps) {
  const enabled = useMemo(
    () => resolveAuthFeatures(features),
    [features],
  );

  const [view, setView] = useState<AuthPageView>(() =>
    enabled.has(viewFeature[initialView])
      ? initialView
      : firstAvailableView(enabled),
  );

  useEffect(() => {
    setView(
      enabled.has(viewFeature[initialView])
        ? initialView
        : firstAvailableView(enabled),
    );
  }, [initialView, enabled]);

  const title =
    view === "login"
      ? "Welcome back"
      : view === "register"
        ? "Create your account"
        : view === "forgot"
          ? "Reset your password"
          : view === "reset"
            ? "Choose a new password"
            : "Verify your email";

  return (
    <main className="shivanya-auth-page">
      <div className="shivanya-auth-page-content">
        <AuthShell
          title={title}
          subtitle={
            view === "login"
              ? "Sign in to continue to ShivanyaMS."
              : undefined
          }
        >
          {view === "login" && enabled.has("login") && (
            <Login
              onSuccess={onAuthenticated}
              onRegister={
                enabled.has("register")
                  ? () => setView("register")
                  : undefined
              }
              onForgotPassword={
                enabled.has("forgot")
                  ? () => setView("forgot")
                  : undefined
              }
              showGoogle={enabled.has("google")}
            />
          )}

          {view === "register" && enabled.has("register") && (
            <Register
              onLogin={
                enabled.has("login")
                  ? () => setView("login")
                  : undefined
              }
              showGoogle={enabled.has("google")}
            />
          )}

          {view === "forgot" && enabled.has("forgot") && (
            <ForgotPassword
              onBack={
                enabled.has("login")
                  ? () => setView("login")
                  : undefined
              }
            />
          )}

          {view === "reset" &&
            enabled.has("reset") &&
            resetToken && (
              <ResetPassword
                token={resetToken}
                onComplete={() => setView("login")}
              />
            )}

          {view === "verify" &&
            enabled.has("verify") &&
            verifyToken && (
              <VerifyEmail
                token={verifyToken}
                onComplete={() => setView("login")}
              />
            )}
        </AuthShell>
      </div>
    </main>
  );
}