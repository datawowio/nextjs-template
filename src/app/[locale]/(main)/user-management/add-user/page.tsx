import { unstable_setRequestLocale } from "next-intl/server";
import { AddUserManagementScreen } from "@/screens/user-management-add";

import type { BaseParams } from "@/types/params";

interface AddUserManagementPageProps extends BaseParams {}

export default function HomePage({
  params: { locale },
}: AddUserManagementPageProps) {
  // Initial value
  unstable_setRequestLocale(locale);

  return <AddUserManagementScreen />;
}
