import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { routing } from "@/config/i18n";

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);
