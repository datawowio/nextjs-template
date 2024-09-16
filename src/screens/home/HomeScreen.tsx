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
import { useState } from "react";
import ModalConfirm from "@/components/core/modal-confirmation";
import rem from "@/utils/rem";
import { colors } from "@/config/palette";

export default function HomeScreen() {
  const t = useTranslations("screens.home");

  const [open, setOpen] = useState(false);

  const onOpenModal = () => {
    setOpen(true);
  };

  const onCloseModal = () => {
    setOpen(false);
  };
  return (
    <>
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
            <Button variant="contained" onClick={onOpenModal}>
              {t("cta")}
            </Button>
            <Input label="Enter your name" />
          </Stack>
        </Card>
      </Box>
      <ModalConfirm
        open={open}
        onClose={onCloseModal}
        onCancel={onCloseModal}
        onConfirm={onCloseModal}
        title={t("modalTitle")}
        description={t("modalDescription")}
      >
        <Box
          padding={`${rem(4)} ${rem(16)}`}
          sx={{ backgroundColor: colors.surface.info.subdued }}
        >
          <Typography
            customVariant="mediumParagraphLG"
            color={colors.surface.primary.darkBlue}
          >{`ผู้ดูแลระบบ > ผู้ใช้งานทั่วไป`}</Typography>
        </Box>
      </ModalConfirm>
    </>
  );
}
