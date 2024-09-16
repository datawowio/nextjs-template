import LabelStatus from "./LabelStatus";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof LabelStatus> = {
  component: LabelStatus,
  title: "Components/LabelStatus",
};

export default meta;

type Story = StoryObj<typeof LabelStatus>;

export const Default: Story = {
  args: {
    status: "ready",
  },
};
