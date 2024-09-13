import StatusPipeline from "./StatusPipeline";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof StatusPipeline> = {
  component: StatusPipeline,
  title: "Components/StatusPipeline",
};

export default meta;

type Story = StoryObj<typeof StatusPipeline>;

export const Default: Story = {
  args: {
    status: "ready",
  },
};
