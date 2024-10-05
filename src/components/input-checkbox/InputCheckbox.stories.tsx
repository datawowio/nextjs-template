import FormGroup from "@mui/material/FormGroup";

import InputCheckbox from "./InputCheckbox";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof InputCheckbox> = {
  component: InputCheckbox,
  title: "Components/InputCheckbox",
};

export default meta;

type Story = StoryObj<typeof InputCheckbox>;

export const Default: Story = {
  args: {
    formControlLabelProps: {
      label: "Label",
    },
  },
};

export const MultipleCheckboxes: Story = {
  render: function Render() {
    return (
      <FormGroup row>
        <InputCheckbox formControlLabelProps={{ label: "Choice 1" }} />
        <InputCheckbox formControlLabelProps={{ label: "Choice 2" }} />
        <InputCheckbox formControlLabelProps={{ label: "Choice 3" }} />
      </FormGroup>
    );
  },
};
