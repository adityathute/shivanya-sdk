"use client";

import { useState } from "react";
import { Login } from "../login/Login";
import { Register } from "../register/Register";
import { ForgotPassword } from "../forgot-password/ForgotPassword";
import { ResetPassword } from "../reset-password/ResetPassword";
import { VerifyEmail } from "../verify-email/VerifyEmail";
import { AuthShell } from "../shared/AuthShell";

export type AuthPageView = "login" | "register" | "forgot" | "reset" | "verify";

export function AuthPage({ initialView = "login", resetToken, verifyToken, onAuthenticated }: { initialView?: AuthPageView; resetToken?: string; verifyToken?: string; onAuthenticated?: () => void }) {
  const [view, setView] = useState<AuthPageView>(initialView);
  return <AuthShell title={view === "login" ? "Welcome back" : view === "register" ? "Create your account" : view === "forgot" ? "Reset your password" : view === "reset" ? "Choose a new password" : "Verify your email"} subtitle={view === "login" ? "Sign in to continue to ShivanyaMS." : undefined}>{view === "login" && <Login onSuccess={onAuthenticated} onRegister={() => setView("register")} onForgotPassword={() => setView("forgot")} />}{view === "register" && <Register onLogin={() => setView("login")} />}{view === "forgot" && <ForgotPassword onBack={() => setView("login")} />}{view === "reset" && resetToken && <ResetPassword token={resetToken} onComplete={() => setView("login")} />}{view === "verify" && verifyToken && <VerifyEmail token={verifyToken} onComplete={() => setView("login")} />}</AuthShell>;
}
