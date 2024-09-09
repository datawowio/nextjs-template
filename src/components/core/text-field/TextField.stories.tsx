import { IconButton, InputAdornment } from "@mui/material";
import TextField from "./TextField";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TextField> = {
  component: TextField,
  title: "Components/Core/TextField",
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    children: "TextField",
    label: "Password",
    value: "hello",
  },
};
