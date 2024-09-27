import Breadcrumbs from "./Breadcrumbs";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Breadcrumbs> = {
  component: Breadcrumbs,
  title: "Components/Breadcrumbs",
};

export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
  parameters: {
    locale: "en",
  },
  args: {
    breadcrumbs: [
      {
        name: "Breadcrumb 1",
        href: "/user-management",
      },
      {
        name: "Breadcrumb 2",
      },
    ],
  },
};
