import Sidebar from "./SideBar";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
  title: "Components/SideBar",
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  args: {
    open: true,
  },
};
