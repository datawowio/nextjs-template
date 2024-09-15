import { unstable_setRequestLocale } from "next-intl/server";

import { TableDataScreen } from "@/screens/examples/table-data";
import type { BaseParams } from "@/types/params";

interface TableDataPageProps extends BaseParams {}

export default function Page({ params: { locale } }: TableDataPageProps) {
  // Initial value
  unstable_setRequestLocale(locale);

  return <TableDataScreen />;
}
