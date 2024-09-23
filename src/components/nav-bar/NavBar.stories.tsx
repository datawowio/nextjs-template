import logo from "@/assets/images/brands/logo.svg";
import Avatar from "@/components/core/avatar";
import Logo from "@/components/logo";

import NavBar from "./NavBar";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof NavBar> = {
  component: NavBar,
  title: "Components/NavBar",
};

export default meta;

type Story = StoryObj<typeof NavBar>;

export const Default: Story = {
  args: {
    logo: <Logo imageSrc={logo} alt="logo" width={150} height={60} />,
    profile: <Avatar />,
  },
};
