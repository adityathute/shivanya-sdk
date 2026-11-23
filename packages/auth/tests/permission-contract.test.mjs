import { userHasPermission, SHIVANYA_PERMISSION_CODES } from "../dist/client/permissions.js";

test("reads explicit permission codes from the Auth user contract", () => {
  const user = {
    id: "u-1",
    email: "editor@example.com",
    roles: ["editor"],
    permissions: [
      SHIVANYA_PERMISSION_CODES.portalContentRead,
      SHIVANYA_PERMISSION_CODES.portalContentUpdate,
    ],
  };
  assert.equal(userHasPermission(user, "portal.content.read"), true);
  assert.equal(userHasPermission(user, "portal.content.update"), true);
  assert.equal(userHasPermission(user, "portal.analytics.read"), false);
  assert.equal(userHasPermission(null, "portal.content.read"), false);
  assert.equal(userHasPermission(user, ""), false);
});
