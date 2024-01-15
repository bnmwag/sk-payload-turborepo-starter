import type { AccessArgs } from "payload/config";

import { checkRole } from "../collections/users/check-role";
import type { User } from "@repo/payload-config/types";

type isAdmin = (args: AccessArgs<unknown, User>) => boolean;

export const admins: isAdmin = ({ req: { user } }) => {
  return checkRole(["admin"], user);
};
