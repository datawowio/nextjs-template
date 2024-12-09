import type { Env } from "@/types/env";

const branch = process.env.NEXT_PUBLIC_BRANCH;

const ENV: Env = {
  BASE_STORYBOOK_URL: process.env.BASE_STORYBOOK_URL || "",
  NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || "",
  NEXT_PUBLIC_BASE_STORYBOOK_URL:
    process.env.NEXT_PUBLIC_BASE_STORYBOOK_URL || "",
  IS_PROD: branch === "production",
};

export default ENV;
