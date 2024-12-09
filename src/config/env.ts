const branch = process.env.NEXT_PUBLIC_BRANCH;

interface Env {
  BASE_STORYBOOK_URL: string;
  NEXT_PUBLIC_BASE_URL: string;
  NEXT_PUBLIC_BASE_STORYBOOK_URL: string;
  IS_PROD: boolean;
}

const envObj: Env = {
  BASE_STORYBOOK_URL: process.env.BASE_STORYBOOK_URL || "",
  NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || "",
  NEXT_PUBLIC_BASE_STORYBOOK_URL:
    process.env.NEXT_PUBLIC_BASE_STORYBOOK_URL || "",
  IS_PROD: branch === "production",
};

export default envObj;
