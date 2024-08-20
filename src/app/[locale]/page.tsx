import { useTranslations } from "next-intl";
import Button from "@/components/button";

export default function Page() {
  const t = useTranslations("home");
  return (
    <main>
      <h1>{t("title")}</h1>
      <Button>Test</Button>
    </main>
  );
}
