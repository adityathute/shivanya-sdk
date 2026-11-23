# Step 137 — SDK permission-code contract

Added optional `AuthUser.permissions`, stable `SHIVANYA_PERMISSION_CODES`, the `ShivanyaPermissionCode` type, `userHasPermission()` and `AuthProvider.hasPermission()`. Added a package test for allow/deny behavior and a permission-contract reference document.

These methods are UI helpers only; backend APIs must enforce all access controls. Cookie mode remains the default and token mode remains opt-in.
