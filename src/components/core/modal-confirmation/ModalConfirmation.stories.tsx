import { Box } from "@mui/material";
import { useArgs } from "@storybook/preview-api";
import { colors } from "@/config/palette";
import Typography from "@/components/core/typography";
import rem from "@/utils/rem";
import ModalConfirmation from "./ModalConfirmation";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ModalConfirmation> = {
  component: ModalConfirmation,
  title: "Core/ModalConfirmation",
};

export default meta;

type Story = StoryObj<typeof ModalConfirmation>;

export const Default: Story = {
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
  render: function Render(args) {
    const [{ open }, updateArgs] = useArgs();

    function onClose() {
      updateArgs({ open: false });
    }

    function onCancel() {
      console.log("cancelled");
      onClose();
    }

    function onConfirm() {
      console.log("confirmed");
      onClose();
    }
    return (
      <ModalConfirmation
        {...args}
        open={open}
        onClose={onClose}
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    );
  },
};
