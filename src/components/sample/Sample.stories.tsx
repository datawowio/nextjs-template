import Sample from "./Sample";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Sample> = {
  component: Sample,
  title: "Components/Sample",
};

export default meta;

type Story = StoryObj<typeof Sample>;

export const Default: Story = {
  args: {},
};
