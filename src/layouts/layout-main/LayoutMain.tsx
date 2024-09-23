"use client";

import { useState } from "react";

import logo from "@/assets/images/brands/logo.svg";
import Avatar from "@/components/core/avatar";
import LayoutMainComponent from "@/components/layout-main";
import Logo from "@/components/logo";

import type { ReactNode } from "react";
import type { BaseParams } from "@/types/params";

interface RootLayoutProps extends BaseParams {
  children: ReactNode;
}

export default function LayoutMain({ children }: RootLayoutProps) {
  const [open, setOpen] = useState<boolean>(true);

  function handleDrawerToggle() {
    setOpen(!open);
  }

  return (
    <LayoutMainComponent
      drawerWidth={280}
      open={open}
      handleDrawerToggle={handleDrawerToggle}
      navBarProps={{
        logo: <Logo imageSrc={logo} alt="logo" width={150} height={60} />,
        profile: <Avatar />,
      }}
      sideBarProps={{
        children: <></>,
      }}
    >
      {children}
    </LayoutMainComponent>
  );
}
