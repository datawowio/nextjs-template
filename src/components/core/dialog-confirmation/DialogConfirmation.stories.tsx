import Box from "@mui/material/Box";
import { useArgs } from "@storybook/preview-api";

import Typography from "@/components/core/typography";
import { colors } from "@/config/palette";
import rem from "@/utils/rem";
import DialogConfirmation from "./DialogConfirmation";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof DialogConfirmation> = {
  component: DialogConfirmation,
  title: "Core/DialogConfirmation",
};

export default meta;

type Story = StoryObj<typeof DialogConfirmation>;

export const Default: Story = {
  decorators: [RenderDialog],
  args: {
    open: true,
    title: "ยืนยันการแก้ไขสิทธิ์",
    description: "กรุณายืนยันการแก้ไขสิทธิ์ของ สถาพร คำเมือง",
    confirmText: "ยืนยัน",
    cancelText: "ยกเลิก",
    children: (
      <Box
        padding={`${rem(4)} ${rem(16)}`}
        sx={{ backgroundColor: colors.surface.info.subdued }}
      >
        <Typography
          customVariant="mediumParagraphLG"
          color={colors.surface.primary.darkBlue}
        >{`ผู้ดูแลระบบ > ผู้ใช้งานทั่วไป`}</Typography>
      </Box>
    ),
  },
};

function RenderDialog() {
  const [
    { open, title, description, cancelText, confirmText, children },
    updateArgs,
  ] = useArgs();

  function onClose() {
    updateArgs({ open: false });
  }

  function onCancel() {
    onClose();
  }

  function onConfirm() {
    onClose();
  }
  return (
    <DialogConfirmation
      open={open}
      title={title}
      description={description}
      confirmText={confirmText}
      cancelText={cancelText}
      onClose={onClose}
      onCancel={onCancel}
      onConfirm={onConfirm}
    >
      {children}
    </DialogConfirmation>
  );
}
