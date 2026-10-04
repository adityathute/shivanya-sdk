"use client";

import { useEffect, useState } from "react";
import { Modal } from "shivanya-ui";
import { useAuth } from "../../hooks/useAuth";
import { Login } from "../login/Login";
import { Register } from "../register/Register";
import { ForgotPassword } from "../forgot-password/ForgotPassword";
import { ResetPassword } from "../reset-password/ResetPassword";
import { VerifyEmail } from "../verify-email/VerifyEmail";
import { AccountModal, type AccountView } from "./AccountModal";

export type AuthView = "login" | "register" | "forgot" | "reset" | "verify";

export interface AuthModalProps {
  open: boolean;
  onClose: () => void;
  initialView?: AuthView;
  resetToken?: string;
  verifyToken?: string;
  accountView?: AccountView;
  onAuthenticated?: () => void;
}

export function AuthModal({ open, onClose, initialView = "login", resetToken, verifyToken, accountView = "overview", onAuthenticated }: AuthModalProps) {
  const { isAuthenticated } = useAuth();
  const [view, setView] = useState<AuthView>(initialView);
  const [accountOpen, setAccountOpen] = useState(false);

  useEffect(() => { if (open) setView(initialView); }, [open, initialView]);
  useEffect(() => { if (open && isAuthenticated) { setAccountOpen(true); } }, [open, isAuthenticated]);

  if (isAuthenticated && accountOpen) return <AccountModal open={open} onClose={() => { setAccountOpen(false); onClose(); }} initialView={accountView} />;

  const success = () => { setAccountOpen(true); onAuthenticated?.(); };
  const title = view === "login" ? "Welcome back" : view === "register" ? "Create your account" : view === "forgot" ? "Reset your password" : view === "reset" ? "Choose a new password" : "Verify your email";

  return <Modal open={open} onClose={onClose} title={title} size="md"><div className="shivanya-auth-modal-body">{view === "login" && <Login onSuccess={success} onRegister={() => setView("register")} onForgotPassword={() => setView("forgot")} />}{view === "register" && <Register onLogin={() => setView("login")} />}{view === "forgot" && <ForgotPassword onBack={() => setView("login")} />}{view === "reset" && resetToken && <ResetPassword token={resetToken} onComplete={() => setView("login")} />}{view === "verify" && verifyToken && <VerifyEmail token={verifyToken} onComplete={() => setView("login")} />}</div></Modal>;
}
