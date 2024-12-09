import bundleAnalyzer from "@next/bundle-analyzer";
import createNextIntlPlugin from "next-intl/plugin";

// Analyzing your bundles
// Run the following command to analyze your bundles
// ANALYZE=true npm run build
// Ref: https://nextjs.org/docs/app/building-your-application/optimizing/bundle-analyzer
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

// App Router setup with i18n routing
// See: https://next-intl-docs.vercel.app/docs/getting-started/app-router/with-i18n-routing
const withNextIntl = createNextIntlPlugin("./src/config/i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // https://nextjs.org/docs/app/building-your-application/configuring/typescript#statically-typed-links
    typedRoutes: true,
  },
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    NEXT_PUBLIC_BASE_STORYBOOK_URL: process.env.NEXT_PUBLIC_BASE_STORYBOOK_URL,
    NEXT_PUBLIC_BRANCH: process.env.NEXT_PUBLIC_BRANCH,
  },
};

export default withBundleAnalyzer(withNextIntl(nextConfig));
