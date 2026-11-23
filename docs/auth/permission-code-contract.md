# SDK Auth permission contract

The Auth package exposes `AuthUser.permissions?: string[]`, `SHIVANYA_PERMISSION_CODES`, `ShivanyaPermissionCode`, `userHasPermission()` and `AuthContextValue.hasPermission()`.

These helpers are presentation conveniences only. Every API write/read still requires server-side permission checks. Role slugs remain in the user payload for compatibility; new application code should use stable permission codes where available and retain a safe deny-by-default fallback when permissions are absent.

Cookie mode remains the default. It sends credentials with requests and obtains/sends CSRF tokens for unsafe methods. Token mode is opt-in and should be enabled only for clients with a reviewed token-storage threat model.
