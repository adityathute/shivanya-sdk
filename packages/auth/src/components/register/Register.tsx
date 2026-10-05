"use client";

import { Button, Typography } from "shivanya-ui";
import { useAuth } from "../../hooks/useAuth";

export interface RegisterProps {
  onRegisterWithEmail?: () => void;
  onLogin?: () => void;
  showGoogle?: boolean;
}

export function Register({
  onRegisterWithEmail,
  onLogin,
  showGoogle = true,
}: RegisterProps) {
  const { client } = useAuth();

  const continueWithGoogle = () => {
    window.location.href = client.googleStartUrl(
      window.location.href,
    );
  };

  return (
    <div className="shivanya-register">
      {showGoogle && (
        <Button
          type="button"
          variant="outline-secondary"
          fullWidth
          onClick={continueWithGoogle}
        >
          <span className="shivanya-register-google">
            <svg
              className="shivanya-register-google-icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill="#4285F4"
                d="M21.35 12.27c0-.79-.07-1.55-.23-2.27H12v4.3h5.22a4.46 4.46 0 0 1-1.94 2.93v2.43h3.14c1.84-1.69 2.93-4.18 2.93-7.39Z"
              />
              <path
                fill="#34A853"
                d="M12 21.75c2.63 0 4.84-.87 6.45-2.36l-3.14-2.43c-.87.58-1.98.92-3.31.92-2.55 0-4.71-1.72-5.48-4.04H3.27v2.5A9.75 9.75 0 0 0 12 21.75Z"
              />
              <path
                fill="#FBBC05"
                d="M6.52 13.84A5.86 5.86 0 0 1 6.21 12c0-.64.11-1.26.31-1.84v-2.5H3.27A9.75 9.75 0 0 0 2.25 12c0 1.57.38 3.05 1.02 4.34l3.25-2.5Z"
              />
              <path
                fill="#EA4335"
                d="M12 6.12c1.43 0 2.71.49 3.72 1.45l2.79-2.79C16.83 3.18 14.63 2.25 12 2.25a9.75 9.75 0 0 0-8.73 5.41l3.25 2.5c1.01-2.32 3.17-4.04 5.72-4.04Z"
              />
            </svg>

            <span>Continue with Google</span>
          </span>
        </Button>
      )}

      <div className="shivanya-register-divider">
        <span className="shivanya-register-divider-line" />

        <Typography
          as="span"
          variant="caption"
          color="secondary"
        >
          or
        </Typography>

        <span className="shivanya-register-divider-line" />
      </div>

      <Button
        type="button"
        fullWidth
        onClick={onRegisterWithEmail}
      >
        Register with Email
      </Button>

      <div className="shivanya-register-switch">
        <Typography
          as="span"
          variant="caption"
          color="secondary"
          size="sm"
        >
          Already have an account?
        </Typography>

        <button
          type="button"
          className="shivanya-register-link"
          onClick={onLogin}
        >
          Login Now
        </button>
      </div>
    </div>
  );
}