import { createNavigation } from "next-intl/navigation";
import { routing } from "@/config/i18n";

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createNavigation(routing);
