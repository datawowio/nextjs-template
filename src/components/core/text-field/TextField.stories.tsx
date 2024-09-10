import TextField from "./TextField";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TextField> = {
  component: TextField,
  title: "Core/TextField",
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    children: "TextField",
    label: "Password",
  },
};
