import Box from "@mui/material/Box";
import { useArgs } from "@storybook/preview-api";
import Image from "next/image";

import logo from "@/assets/images/brands/logo.svg";
import Avatar from "@/components/core/avatar/Avatar";
import Typography from "@/components/core/typography";
import LayoutMain from "./LayoutMain";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof LayoutMain> = {
  component: LayoutMain,
  title: "Components/LayoutMain",
};

export default meta;

type Story = StoryObj<typeof LayoutMain>;

export const Default: Story = {
  args: {
    children: (
      <Box>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>{" "}
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>{" "}
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
      </Box>
    ),
    drawerWidth: 240,
    open: true,
    navBarProps: {
      logo: (
        <Box sx={{ position: "relative", width: 150, height: 60 }}>
          <Image src={logo} alt="logo" fill />
        </Box>
      ),
      profile: <Avatar />,
    },
    sideBarProps: {
      children: <Box sx={{ mt: 10, px: 2 }}>Hello</Box>,
    },
  },
  parameters: {
    layout: "fullscreen",
  },
  render: RenderLayout,
};

function RenderLayout() {
  const [
    { children, drawerWidth, open, navBarProps, sideBarProps },
    updateArgs,
  ] = useArgs();

  function onToggle() {
    updateArgs({ open: !open });
  }

  return (
    <LayoutMain
      drawerWidth={drawerWidth}
      open={open}
      navBarProps={navBarProps}
      sideBarProps={sideBarProps}
      handleDrawerToggle={onToggle}
    >
      {children}
    </LayoutMain>
  );
}
