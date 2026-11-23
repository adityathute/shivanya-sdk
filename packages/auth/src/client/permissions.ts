import type { AuthUser } from "./types.js";

/** Stable permission codes shared by Auth, SDK clients and Portal APIs. */
export const SHIVANYA_PERMISSION_CODES = {
  usersRead: "users.read",
  usersManage: "users.manage",
  rolesRead: "roles.read",
  rolesManage: "roles.manage",
  sessionsManage: "sessions.manage",
  portalContentRead: "portal.content.read",
  portalContentCreate: "portal.content.create",
  portalContentUpdate: "portal.content.update",
  portalContentPublish: "portal.content.publish",
  portalAnalyticsRead: "portal.analytics.read",
  portalCommentsModerate: "portal.comments.moderate",
  portalMediaManage: "portal.media.manage",
} as const;

export type ShivanyaPermissionCode =
  (typeof SHIVANYA_PERMISSION_CODES)[keyof typeof SHIVANYA_PERMISSION_CODES];

export function userHasPermission(
  user: Pick<AuthUser, "permissions"> | null | undefined,
  code: string,
): boolean {
  return Boolean(code && user?.permissions?.includes(code));
}
