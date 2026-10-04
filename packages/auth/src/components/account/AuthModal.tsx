"use client";

import { useEffect, useMemo, useState } from "react";
import { Modal } from "shivanya-ui";
import { useAuth } from "../../hooks/useAuth";
import type { AuthFeature } from "../../client/types";
import { Login } from "../login/Login";
import { Register } from "../register/Register";
import { ForgotPassword } from "../forgot-password/ForgotPassword";
import { ResetPassword } from "../reset-password/ResetPassword";
import { VerifyEmail } from "../verify-email/VerifyEmail";
import { AccountModal, type AccountView } from "./AccountModal";
import { resolveAuthFeatures } from "./auth-features";

export type AuthView = "login" | "register" | "forgot" | "reset" | "verify";

export interface AuthModalProps {
  open: boolean;
  onClose: () => void;
  initialView?: AuthView;
  resetToken?: string;
  verifyToken?: string;
  accountView?: AccountView;
  features?: AuthFeature[];
  onAuthenticated?: () => void;
}

const viewFeature: Record<AuthView, AuthFeature> = {
  login: "login",
  register: "register",
  forgot: "forgot",
  reset: "reset",
  verify: "verify",
};

function firstAvailableView(features: Set<AuthFeature>): AuthView {
  for (const view of ["login", "register", "forgot", "reset", "verify"] as AuthView[]) {
    if (features.has(viewFeature[view])) return view;
  }
  return "login";
}

export function AuthModal({
  open,
  onClose,
  initialView = "login",
  resetToken,
  verifyToken,
  accountView = "overview",
  features,
  onAuthenticated,
}: AuthModalProps) {
  const { isAuthenticated } = useAuth();
  const enabled = useMemo(() => resolveAuthFeatures(features), [features]);
  const [view, setView] = useState<AuthView>(() => enabled.has(viewFeature[initialView]) ? initialView : firstAvailableView(enabled));
  const [accountOpen, setAccountOpen] = useState(false);

  useEffect(() => {
    if (open) setView(enabled.has(viewFeature[initialView]) ? initialView : firstAvailableView(enabled));
  }, [open, initialView, enabled]);

  useEffect(() => {
    if (open && isAuthenticated && enabled.has("account")) setAccountOpen(true);
  }, [open, isAuthenticated, enabled]);

  if (isAuthenticated && accountOpen && enabled.has("account")) {
    return <AccountModal open={open} onClose={() => { setAccountOpen(false); onClose(); }} initialView={accountView} />;
  }

  const title =
    view === "login" ? "Welcome back" :
    view === "register" ? "Create your account" :
    view === "forgot" ? "Reset your password" :
    view === "reset" ? "Choose a new password" :
    "Verify your email";

  return (
    <Modal open={open} onClose={onClose} title={title} size="md">
      <div className="shivanya-auth-modal-body">
        {view === "login" && enabled.has("login") && (
          <Login
            onSuccess={() => { if (enabled.has("account")) setAccountOpen(true); onAuthenticated?.(); }}
            onRegister={enabled.has("register") ? () => setView("register") : undefined}
            onForgotPassword={enabled.has("forgot") ? () => setView("forgot") : undefined}
          />
        )}
        {view === "register" && enabled.has("register") && (
          <Register onLogin={enabled.has("login") ? () => setView("login") : undefined} />
        )}
        {view === "forgot" && enabled.has("forgot") && (
          <ForgotPassword onBack={enabled.has("login") ? () => setView("login") : undefined} />
        )}
        {view === "reset" && enabled.has("reset") && resetToken && (
          <ResetPassword token={resetToken} onComplete={() => setView("login")} />
        )}
        {view === "verify" && enabled.has("verify") && verifyToken && (
          <VerifyEmail token={verifyToken} onComplete={() => setView("login")} />
        )}
      </div>
    </Modal>
  );
}
