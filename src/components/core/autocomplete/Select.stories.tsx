import Select from "./Select";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Select> = {
  component: Select,
  title: "Core/Select",
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    options: [
      { label: "Placehoder 1", value: 1 },
      { label: "Placeholder 2", value: 2 },
      { label: "Placeholder 3", value: 3 },
      { label: "Placeholder 4", value: 4 },
    ],
  },
};
