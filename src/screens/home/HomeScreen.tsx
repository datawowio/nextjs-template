"use client";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";

import { useTranslations } from "next-intl";
import Image from "next/image";

import logo from "@/assets/images/brands/logo.svg";
import Button from "@/components/core/button";
import Input from "@/components/core/input";
import Typography from "@/components/core/typography";

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
          <Typography customVariant="regularDisplayLG">
            {t("heading")}
          </Typography>
          <Typography>{t("description")}</Typography>
          <Button variant="contained">{t("cta")}</Button>
          <Input label="Enter your name" />
        </Stack>
      </Card>
    </Box>
  );
}
