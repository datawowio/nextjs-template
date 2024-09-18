import InputPassword from "./InputPassword";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof InputPassword> = {
  component: InputPassword,
  title: "Components/InputPassword",
};

export default meta;

type Story = StoryObj<typeof InputPassword>;

export const Default: Story = {
  args: {
    label: "Password",
  },
};
