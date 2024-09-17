import SelectMultiple from "./SelectMultiple";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SelectMultiple> = {
  component: SelectMultiple,
  title: "Core/MultiSelect",
};

export default meta;

type Story = StoryObj<typeof SelectMultiple>;

export const Default: Story = {
  args: {
    open: true,
    label: "Select",
    options: [
      { label: "Placeholder 1", value: 1 },
      { label: "Placeholder 2", value: 2 },
      { label: "Placeholder 3", value: 3 },
      { label: "Placeholder 4", value: 4 },
    ],
  },
};
