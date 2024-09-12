import TableData from "./TableData";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TableData> = {
  component: TableData,
  title: "Core/TableData",
};

export default meta;

type Story = StoryObj<typeof TableData>;

export const Default: Story = {
  args: {},
};
