"use client";
import Image from "next/image";
import { useState } from "react";

import Box from "@mui/material/Box";

import logo from "@/assets/images/brands/logo.svg";
import Avatar from "@/components/core/avatar";
import LayoutMain from "@/components/layout-main";

import type { ReactNode } from "react";
import type { BaseParams } from "@/types/params";

interface RootLayoutProps extends BaseParams {
  children: ReactNode;
}

export default function MainLayout({ children }: RootLayoutProps) {
  const [open, setOpen] = useState<boolean>(true);

  function handleDrawerToggle() {
    setOpen(!open);
  }

  return (
    <LayoutMain
      drawerWidth={280}
      open={open}
      handleDrawerToggle={handleDrawerToggle}
      navBarProps={{
        logo: (
          <Box sx={{ position: "relative", width: 150, height: 60 }}>
            <Image src={logo} alt="logo" fill />
          </Box>
        ),
        profile: <Avatar />,
      }}
      sideBarProps={{
        children: <Box>Hello</Box>,
      }}
    >
      {children}
    </LayoutMain>
  );
}