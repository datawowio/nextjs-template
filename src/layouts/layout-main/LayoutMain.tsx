"use client";

import { useEffect, useState } from "react";

import { useTheme, useMediaQuery } from "@mui/material";

import logo from "@/assets/images/brands/logo.svg";
import Avatar from "@/components/avatar";
import LayoutMainComponent from "@/components/layout-main";
import Logo from "@/components/logo";

import type { ReactNode } from "react";
import type { BaseParams } from "@/types/params";

interface RootLayoutProps extends BaseParams {
  children?: ReactNode;
}

export default function LayoutMain({ children }: RootLayoutProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState<boolean>(false);

  function handleDrawerToggle() {
    setOpen(!open);
  }

  useEffect(() => {
    setOpen(!isMobile);
  }, [isMobile]);

  return (
    <LayoutMainComponent
      drawerWidth={280}
      open={open}
      handleDrawerToggle={handleDrawerToggle}
      navBarProps={{
        logo: <Logo alt="logo" height={60} src={logo} width={150} />,
        profile: <Avatar />,
      }}
      sideBarProps={{
        children: null,
      }}
    >
      {children}
    </LayoutMainComponent>
  );
}
