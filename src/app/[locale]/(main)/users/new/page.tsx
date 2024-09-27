import { unstable_setRequestLocale } from "next-intl/server";
import { NewUsersScreen } from "@/screens/users/new";

import type { BaseParams } from "@/types/params";

interface NewUserManagementScreen extends BaseParams {}

export default function AddUserManagementPage({
  params: { locale },
}: NewUserManagementScreen) {
  // Initial value
  unstable_setRequestLocale(locale);

  return <NewUsersScreen />;
}
