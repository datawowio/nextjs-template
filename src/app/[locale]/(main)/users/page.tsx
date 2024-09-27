import { unstable_setRequestLocale } from "next-intl/server";
import { UsersScreen } from "@/screens/users";

import type { BaseParams } from "@/types/params";

interface HomePageProps extends BaseParams {}

export default function HomePage({ params: { locale } }: HomePageProps) {
  // Initial value
  unstable_setRequestLocale(locale);

  return <UsersScreen />;
}
