import "server-only";
import { setRequestLocale } from "next-intl/server";

import { HomeScreen } from "@/screens/home";

import type { BaseParams } from "@/types/params";

export default function HomePage({ params: { locale } }: BaseParams) {
  // Initial value
  setRequestLocale(locale);

  return <HomeScreen />;
}
