import Box from "@mui/material/Box";
import Image from "next/image";

import Avatar from "@/components/avatar";
import logo from "@/assets/images/brands/logo.svg";

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
    logo: (
      <Box sx={{ position: "relative", width: 150, height: 60 }}>
        <Image src={logo} alt="logo" fill />
      </Box>
    ),
    profile: <Avatar />,
  },
};
