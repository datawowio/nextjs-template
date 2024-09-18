import { useArgs } from "@storybook/preview-api";
import Toast from "./Toast";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Toast> = {
  component: Toast,
  title: "Core/Toast",
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {
    anchorOrigin: { vertical: "top", horizontal: "right" },
    message: "This is a success Alert inside a Snackbar!",
    status: "error",
    open: true,
    autoHideDuration: 3000,
  },
  render: function DefaultToast(args) {
    const [{ open }, updateArgs] = useArgs();

    function onClose() {
      updateArgs({ open: false });
    }

    return <Toast {...args} open={open} onClose={onClose} />;
  },
};
