import AddRoundedIcon from "@mui/icons-material/AddRounded";
import Button from "@/components/core/button";
import Header from "./Header";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Header> = {
  component: Header,
  title: "Components/Header",
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    text: "Username",
    children: (
      <Button
        variant="contained"
        startIcon={<AddRoundedIcon />}
        sx={{ maxWidth: 144 }}
      >
        Add
      </Button>
    ),
  },
};
