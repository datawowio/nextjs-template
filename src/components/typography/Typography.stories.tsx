import Typography from "./Typography";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Typography> = {
  component: Typography,
  title: "Components/Typography",
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    children: "Example Text",
    variant: "subtitle2"
  },
};
