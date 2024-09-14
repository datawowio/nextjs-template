import TableGridData from "./TableGridData";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TableGridData> = {
  component: TableGridData,
  title: "Core/TableGridData",
};

export default meta;

type Story = StoryObj<typeof TableGridData>;

export const Default: Story = {
  render: function render() {
    return <div />;
  },
};
