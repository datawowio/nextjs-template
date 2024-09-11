import Table from "./Table";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Table> = {
  component: Table,
  title: "Core/Table",
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {},
};
