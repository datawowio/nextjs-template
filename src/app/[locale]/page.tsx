import "server-only";
import { setRequestLocale } from "next-intl/server";

import { HomeScreen } from "@/screens/home";

import type { BaseParams } from "@/types/params";

export default async function HomePage({ params }: BaseParams) {
  // Initial value
  const { locale } = await params;
  setRequestLocale(locale);

  return <HomeScreen />;
}
