import createMiddleware from "next-intl/middleware";
import { routing } from "@/config/i18n";

export default createMiddleware(routing);

export const config = {
  matcher: ["/", "/(en|th)/:path*"],
};
