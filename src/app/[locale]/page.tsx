import { useTranslations } from "next-intl";
import Button from "@/components/button";

export default function Page() {
  const t = useTranslations("pages");
  return (
    <main>
      <h1>{t("home.heading")}</h1>
      <Button>Test</Button>
    </main>
  );
}
