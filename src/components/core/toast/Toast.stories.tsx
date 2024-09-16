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
    onClose: () => {},
    open: true,
  },
};
