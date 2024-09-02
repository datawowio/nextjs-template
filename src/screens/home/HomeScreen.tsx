import { Box, Card, Stack } from "@mui/material";
import { useTranslations } from "next-intl";
import Image from "next/image";

import logo from "@/assets/images/brands/logo.svg";
import Button from "@/components/button";
import Typography from "@/components/typography";

import { card, imageWrapper, root } from "./styles";

export default function HomeScreen() {
  const t = useTranslations("screens.home");

  return (
    <Box sx={root}>
      <Card sx={card}>
        <Stack gap={4}>
          <Box sx={imageWrapper}>
            <Image src={logo} alt={t("logoAlt")} fill />
          </Box>
          <Typography customVariant="h4">{t("heading")}</Typography>
          <Typography>{t("description")}</Typography>
          <Button variant="contained">{t("cta")}</Button>
        </Stack>
      </Card>
    </Box>
  );
}
