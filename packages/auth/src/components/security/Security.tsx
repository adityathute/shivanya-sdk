"use client";

import { useEffect, useState } from "react";
import {
  Button,
  ConfirmDialog,
  ErrorMessage,
  PasswordInput,
  ShieldCheckIcon,
  Typography,
} from "shivanya-ui";

import { useAuth } from "../../hooks/useAuth";
import { useAuthAction } from "../../hooks/useAuthAction";

export function Security() {
  const { client, logout, clearAuth, user, refreshUser } = useAuth();

  const [current, setCurrent] = useState("");
  const [next, setNext] = useState("");
  const [confirm, setConfirm] = useState("");
  const [deletionPassword, setDeletionPassword] = useState("");
  const [deletionVerificationToken, setDeletionVerificationToken] = useState("");
  const [hasPassword, setHasPassword] = useState(true);
  const [verificationToken, setVerificationToken] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [passwordSetupError, setPasswordSetupError] = useState<string | null>(null);
  const [passwordSetupLoading, setPasswordSetupLoading] = useState(false);
  const [deleteGoogleLoading, setDeleteGoogleLoading] = useState(false);

  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);

  const changePassword = useAuthAction(async () =>
    client.changePassword({
      current_password: current,
      new_password: next,
      confirm_password: confirm,
    }),
  );

  const verifyDeletion = useAuthAction(async () =>
    client.verifyDeleteAccount(deletionPassword),
  );

  const deletion = useAuthAction(async () =>
    client.deleteAccount(deletionPassword),
  );

  const cancellation = useAuthAction(async () => client.cancelDeleteAccount());

  useEffect(() => {
    let active = true;

    void client.getConnections().then((value) => {
      if (active) setHasPassword(value.has_password);
    }).catch(() => {});

    const params = new URLSearchParams(window.location.search);
    const googleCode = params.get("google_code");
    const googleAction = params.get("google_action");
    if (googleCode) {
      params.delete("google_code");
      const query = params.toString();
      window.history.replaceState(
        {},
        "",
        `${window.location.pathname}${query ? `?${query}` : ""}${window.location.hash}`,
      );

      setPasswordSetupLoading(true);
      void client.verifyGooglePassword(googleCode).then(async (result) => {
        setHasPassword(false);
        setPasswordSetupError(null);
        if (googleAction === "delete") {
          await client.verifyDeleteAccount({ verification_token: result.verification_token });
          setDeletionVerificationToken(result.verification_token);
          setDeleteConfirmOpen(true);
        } else {
          setVerificationToken(result.verification_token);
        }
      }).catch((error) => {
        setPasswordSetupError(
          error instanceof Error ? error.message : "Google verification failed.",
        );
      }).finally(() => {
        setPasswordSetupLoading(false);
        setDeleteGoogleLoading(false);
      });
    }

    return () => { active = false; };
  }, [client]);

  const verifyGoogleForPassword = async () => {
    setPasswordSetupError(null);
    setPasswordSetupLoading(true);
    try {
      window.location.href = await client.startGooglePasswordVerificationUrl(window.location.href, "verify-password");
    } catch (error) {
      setPasswordSetupError(
        error instanceof Error ? error.message : "Unable to start Google verification.",
      );
      setPasswordSetupLoading(false);
    }
  };

  const verifyGoogleForDeletion = async () => {
    setPasswordSetupError(null);
    setDeleteGoogleLoading(true);
    try {
      window.location.href = await client.startGooglePasswordVerificationUrl(window.location.href, "verify-delete");
    } catch (error) {
      setPasswordSetupError(
        error instanceof Error ? error.message : "Unable to start Google verification.",
      );
      setDeleteGoogleLoading(false);
    }
  };

  const submitCreatePassword = async () => {
    setPasswordSetupError(null);
    setPasswordSetupLoading(true);
    try {
      await client.createPassword({
        verification_token: verificationToken,
        new_password: newPassword,
        confirm_password: confirmNewPassword,
      });
      setHasPassword(true);
      setVerificationToken("");
      setNewPassword("");
      setConfirmNewPassword("");
      await refreshUser();
    } catch (error) {
      setPasswordSetupError(
        error instanceof Error ? error.message : "Unable to create password.",
      );
    } finally {
      setPasswordSetupLoading(false);
    }
  };

  const cancelDeletion = async () => {
    try {
      await cancellation.run();
      await refreshUser();
    } catch {}
  };

  const currentPasswordError =
    changePassword.fieldErrors.current_password ||
    (changePassword.error === "Current password is incorrect."
      ? changePassword.error
      : undefined);

  const newPasswordError =
    changePassword.fieldErrors.new_password ||
    changePassword.fieldErrors.non_field_errors;

  const hasChangePasswordFieldError =
    Object.keys(changePassword.fieldErrors).length > 0 ||
    Boolean(currentPasswordError);

  /*
   * Replace this with the exact field returned by your backend.
   *
   * Example:
   * user.deletion_scheduled_at
   */
  const deletionScheduledAt =
    (user as { deletion_scheduled_at?: string | null } | null)
      ?.deletion_scheduled_at ?? null;

  const deletionScheduled = Boolean(deletionScheduledAt);

  const getRemainingTime = () => {
    if (!deletionScheduledAt) {
      return null;
    }

    const target = new Date(deletionScheduledAt).getTime();
    const now = Date.now();

    const difference = target - now;

    if (difference <= 0) {
      return "Deletion is being processed.";
    }

    const totalMinutes = Math.floor(difference / (1000 * 60));

    const days = Math.floor(totalMinutes / (60 * 24));
    const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
    const minutes = totalMinutes % 60;

    if (days > 0) {
      return `${days}d ${hours}h ${minutes}m remaining`;
    }

    if (hours > 0) {
      return `${hours}h ${minutes}m remaining`;
    }

    return `${minutes}m remaining`;
  };

  const submitPassword = async () => {
    try {
      await changePassword.run();

      setCurrent("");
      setNext("");
      setConfirm("");

      clearAuth();
    } catch {}
  };

  const verifyDeletionPassword = async () => {
    if (!hasPassword) {
      await verifyGoogleForDeletion();
      return;
    }
    try {
      await verifyDeletion.run();
      setDeleteConfirmOpen(true);
    } catch {}
  };

  const scheduleDeletion = async () => {
    try {
      if (hasPassword) {
        await deletion.run();
      } else {
        await client.deleteAccount({ verification_token: deletionVerificationToken });
      }

      setDeleteConfirmOpen(false);
      setDeletionPassword("");

      await logout();
    } catch {}
  };

  return (
    <>
      <div className="shivanya-account-section shivanya-security">
        <div className="shivanya-security-header">
          <div className="shivanya-security-title">
            <span className="shivanya-security-title-icon">
              <ShieldCheckIcon size="md" />
            </span>

            <div className="shivanya-security-title-content">
              <Typography as="h3" variant="h3" size="lg" weight="semibold">
                Security
              </Typography>

              <Typography as="p" variant="body" size="xs" color="muted">
                Protect your account and manage sensitive actions.
              </Typography>
            </div>
          </div>
        </div>

        <section className="shivanya-security-card">
          <div className="shivanya-security-card-header">
            <Typography as="h4" variant="body" weight="semibold">
              {hasPassword ? "Change password" : "Create password"}
            </Typography>

            <Typography as="p" variant="caption" color="muted">
              {hasPassword
                ? "Use a new password you do not reuse elsewhere."
                : "Verify your Google account first, then create a password for email sign-in."}
            </Typography>
          </div>

          {!hasPassword ? (
            <>
              {passwordSetupError && (
                <ErrorMessage size="sm" variant="error">{passwordSetupError}</ErrorMessage>
              )}

              {!verificationToken ? (
                <div className="shivanya-security-actions">
                  <Button loading={passwordSetupLoading} onClick={verifyGoogleForPassword}>
                    Verify with Google
                  </Button>
                </div>
              ) : (
                <>
                  <div className="shivanya-security-fields">
                    <div className="shivanya-security-field">
                      <PasswordInput
                        label="New password"
                        value={newPassword}
                        onChange={(event) => setNewPassword(event.target.value)}
                        helperText="At least 8 characters."
                        fullWidth
                      />
                    </div>
                    <div className="shivanya-security-field">
                      <PasswordInput
                        label="Confirm new password"
                        value={confirmNewPassword}
                        onChange={(event) => setConfirmNewPassword(event.target.value)}
                        fullWidth
                      />
                    </div>
                  </div>
                  <div className="shivanya-security-actions">
                    <Button
                      loading={passwordSetupLoading}
                      disabled={!newPassword || !confirmNewPassword}
                      onClick={submitCreatePassword}
                    >
                      Create password
                    </Button>
                  </div>
                </>
              )}
            </>
          ) : (
            <>
              {!hasChangePasswordFieldError && changePassword.error && (
                <ErrorMessage size="sm" variant="error">{changePassword.error}</ErrorMessage>
              )}

              <div className="shivanya-security-fields">
                <div className="shivanya-security-field">
                  <PasswordInput
                    label="Current password"
                    value={current}
                    onChange={(event) => setCurrent(event.target.value)}
                    fullWidth
                    error={currentPasswordError}
                  />
                </div>
                <div className="shivanya-security-field">
                  <PasswordInput
                    label="New password"
                    value={next}
                    onChange={(event) => setNext(event.target.value)}
                    helperText="At least 8 characters."
                    fullWidth
                    error={newPasswordError}
                  />
                </div>
                <div className="shivanya-security-field">
                  <PasswordInput
                    label="Confirm new password"
                    value={confirm}
                    onChange={(event) => setConfirm(event.target.value)}
                    fullWidth
                    error={changePassword.fieldErrors.confirm_password}
                  />
                </div>
              </div>

              <div className="shivanya-security-actions">
                <Button loading={changePassword.loading} onClick={submitPassword}>
                  Change password
                </Button>
              </div>
            </>
          )}
        </section>

        <section
          className={`shivanya-security-card ${
            deletionScheduled
              ? "shivanya-security-deletion-scheduled"
              : "shivanya-security-danger"
          }`}
        >
          <div className="shivanya-security-card-header">
            <Typography as="h4" variant="body" weight="semibold">
              Delete account
            </Typography>

            {deletionScheduled ? (
              <Typography as="p" variant="caption" color="muted">
                Your account is scheduled for deletion.
              </Typography>
            ) : (
              <Typography as="p" variant="caption" color="muted">
                Your account can be scheduled for deletion. This action should
                only be used when you are sure.
              </Typography>
            )}
          </div>

          {deletionScheduled ? (
            <div className="shivanya-security-deletion-status">
              <div className="shivanya-security-deletion-status-icon">!</div>

              <div className="shivanya-security-deletion-status-content">
                <Typography as="h4" variant="body" weight="semibold">
                  Account deletion scheduled
                </Typography>

                <Typography as="p" variant="caption" color="muted">
                  Your account will be permanently deleted after the deletion
                  period ends.
                </Typography>

                <div className="shivanya-security-deletion-timer">
                  {getRemainingTime()}
                </div>

                <div className="shivanya-security-deletion-actions">
                  <Button
                    variant="outline"
                    loading={cancellation.loading}
                    onClick={cancelDeletion}
                  >
                    Cancel deletion
                  </Button>
                </div>

                {cancellation.error && (
                  <ErrorMessage size="sm" variant="error">
                    {cancellation.error}
                  </ErrorMessage>
                )}
              </div>
            </div>
          ) : (
            <>
              {hasPassword ? (
                <div className="shivanya-security-field">
                  <PasswordInput
                    label="Current password"
                    value={deletionPassword}
                    onChange={(event) => setDeletionPassword(event.target.value)}
                    fullWidth
                    error={verifyDeletion.fieldErrors.current_password}
                  />
                </div>
              ) : (
                <Typography as="p" variant="caption" color="muted">
                  This account has no password. Verify the Google account linked to {user?.email ?? "your account"} to continue.
                </Typography>
              )}

              {Object.keys(verifyDeletion.fieldErrors).length === 0 &&
                verifyDeletion.error && (
                  <ErrorMessage size="sm" variant="error">
                    {verifyDeletion.error}
                  </ErrorMessage>
                )}

              <div className="shivanya-security-actions">
                <Button
                  variant="danger"
                  loading={verifyDeletion.loading || (hasPassword ? false : deleteGoogleLoading)}
                  onClick={verifyDeletionPassword}
                >
                  {hasPassword ? "Schedule account deletion" : "Verify with Google"}
                </Button>
              </div>
            </>
          )}
        </section>
      </div>

      <ConfirmDialog
        open={deleteConfirmOpen}
        title="Schedule account deletion"
        message="Are you sure you want to schedule your account for deletion? Your account will be scheduled for deletion and can be restored before the deletion period ends."
        confirmText="Schedule deletion"
        cancelText="Cancel"
        variant="danger"
        size="md"
        onCancel={() => {
          setDeleteConfirmOpen(false);
        }}
        onConfirm={scheduleDeletion}
      />
    </>
  );
}
