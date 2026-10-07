"use client";

import { useEffect, useMemo, useState } from "react";
import {
  CloseIcon,
  IconButton,
  LockIcon,
  Modal,
  Typography,
} from "shivanya-ui";
import { useAuth } from "../../hooks/useAuth";
import type { AuthFeature } from "../../client/types";
import { Login } from "../login/Login";
import { Register } from "../register/Register";
import { ForgotPassword } from "../forgot-password/ForgotPassword";
import { ResetPassword } from "../reset-password/ResetPassword";
import { VerifyEmail } from "../verify-email/VerifyEmail";
import { AccountModal, type AccountView } from "./AccountModal";
import { resolveAuthFeatures } from "./auth-features";
import { RegisterEmail } from "../register/RegisterEmail";
import { AuthPageHeader } from "../shared/AuthPageHeader";
import { AuthPageFooter } from "../shared/AuthPageFooter";

export type AuthView =
  | "login"
  | "register"
  | "register-email"
  | "forgot"
  | "reset"
  | "verify";

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
  "register-email": "register",
  forgot: "forgot",
  reset: "reset",
  verify: "verify",
};

function firstAvailableView(features: Set<AuthFeature>): AuthView {
  for (const view of [
    "login",
    "register",
    "forgot",
    "reset",
    "verify",
  ] as AuthView[]) {
    if (features.has(viewFeature[view])) {
      return view;
    }
  }

  return "login";
}

function getTitle(view: AuthView) {
  switch (view) {
    case "login":
      return "Welcome Back";

    case "register":
    case "register-email":
      return "Create Account";

    case "forgot":
      return "Reset Your Password";

    case "reset":
      return "Choose a New Password";

    case "verify":
      return "Verify Your Email";
  }
}

function getSubtitle(view: AuthView) {
  switch (view) {
    case "login":
      return "Sign in to your account";

    case "register":
    case "register-email":
      return "Register to get started with ShivanyaMS";

    case "forgot":
      return "We'll help you reset your password";

    case "reset":
      return "Choose a new password for your account";

    case "verify":
      return "Verify your email address";
  }
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

  const [view, setView] = useState<AuthView>(() =>
    enabled.has(viewFeature[initialView])
      ? initialView
      : firstAvailableView(enabled),
  );

  const [accountOpen, setAccountOpen] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);

  useEffect(() => {
    if (open) {
      setRegisterSuccess(false);

      setView(
        enabled.has(viewFeature[initialView])
          ? initialView
          : firstAvailableView(enabled),
      );
    }
  }, [open, initialView, enabled]);

  useEffect(() => {
    if (open && isAuthenticated && enabled.has("account")) {
      setAccountOpen(true);
    }
  }, [open, isAuthenticated, enabled]);

  if (isAuthenticated && accountOpen && enabled.has("account")) {
    return (
      <AccountModal
        open={open}
        onClose={() => {
          setAccountOpen(false);
          onClose();
        }}
        initialView={accountView}
      />
    );
  }

  const goToLogin = () => {
    setRegisterSuccess(false);
    setView("login");
  };

  const success = () => {
    if (enabled.has("account")) {
      setAccountOpen(true);
    }

    onAuthenticated?.();
  };

  const title = getTitle(view);
  const subtitle = getSubtitle(view);

  return (
    <Modal
      open={open}
      onClose={onClose}
      closable={false}
      size="md"
      radius="lg"
      className="shivanya-auth-modal"
    >
      <div className="shivanya-auth-modal-content">
        <IconButton
          size="md"
          variant="ghost"
          iconRotateOnHover
          iconHoverColor="var(--shivanya-color-danger)"
          className="shivanya-auth-modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          <CloseIcon />
        </IconButton>

        {view !== "forgot" && !registerSuccess && (
          <AuthPageHeader title={title} subtitle={subtitle} />
        )}

        <div className="shivanya-auth-modal-body">
          {view === "login" && (
            <Login
              onSuccess={success}
              onRegister={() => setView("register")}
              onForgotPassword={() => setView("forgot")}
            />
          )}

          {view === "register" && (
            <Register
              onRegisterWithEmail={() => setView("register-email")}
              onLogin={goToLogin}
            />
          )}

          {view === "register-email" && (
            <RegisterEmail
              onLogin={goToLogin}
              onSuccess={() => setRegisterSuccess(true)}
            />
          )}

          {view === "forgot" && <ForgotPassword onBack={goToLogin} />}

          {view === "reset" && resetToken && (
            <ResetPassword token={resetToken} onComplete={goToLogin} />
          )}

          {view === "verify" && verifyToken && (
            <VerifyEmail token={verifyToken} onComplete={goToLogin} />
          )}
        </div>

        {view === "login" && <AuthPageFooter />}
      </div>
    </Modal>
  );
}
