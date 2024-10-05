import { useTranslations } from "next-intl";
import Typography from "@mui/material/Typography";

export default function Sample() {
  const t = useTranslations("common");
  return <Typography>{t("actions.ok")}</Typography>;
}
