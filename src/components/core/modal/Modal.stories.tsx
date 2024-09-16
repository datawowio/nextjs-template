import { Box, Card } from "@mui/material";
import { useArgs } from "@storybook/preview-api";
import { colors } from "@/config/palette";
import Typography from "@/components/core/typography";
import rem from "@/utils/rem";
import Modal from "./Modal";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: "Core/Modal",
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    open: true,
    children: (
      <Card>
        <Box padding={`${rem(4)} ${rem(16)}`}>
          <Typography
            customVariant="mediumParagraphLG"
            color={colors.surface.primary.darkBlue}
          >
            Render anything
          </Typography>
        </Box>
      </Card>
    ),
  },
  render: function Render(args) {
    const [{ open }, updateArgs] = useArgs();

    function onClose() {
      console.log("closed");
      updateArgs({ open: false });
    }

    return <Modal {...args} open={open} onClose={onClose} />;
  },
};
