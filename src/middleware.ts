import createMiddleware from "next-intl/middleware";
import { locales } from "@/config/i18n";

export default createMiddleware({
  defaultLocale: "en",
  locales,
});

export const config = {
  matcher: [
    "/",
    "/(en|th)/:path*",
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
