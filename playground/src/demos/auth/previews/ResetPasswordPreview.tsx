"use client";

import { useState } from "react";
import { AuthProvider, ResetPassword } from "shivanya-auth";
import { Modal } from "shivanya-ui";
import "./ResetPasswordPreview.css";

export default function ResetPasswordPreview() {
  const token = new URLSearchParams(window.location.search).get("token");
  const [open, setOpen] = useState(true);

  if (!token) {
    return (
      <div className="reset-password-preview-message">
        Reset password token is missing.
      </div>
    );
  }

  return (
    <div className="reset-password-preview">
      <AuthProvider config={{ baseUrl: "http://localhost:8000" }}>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          closable={false}
          closeOnOverlayClick
          closeOnEscape
          size="sm"
          radius="lg"
          className="reset-password-preview-modal"
        >
          <ResetPassword token={token} />
        </Modal>
      </AuthProvider>

      {!open && (
        <button
          type="button"
          className="reset-password-preview-open"
          onClick={() => setOpen(true)}
        >
          Open Reset Password
        </button>
      )}
    </div>
  );
}