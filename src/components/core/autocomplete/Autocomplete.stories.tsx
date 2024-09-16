import { Checkbox, Chip } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import Autocomplete from "./Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import type { Meta, StoryObj } from "@storybook/react";
import TextField from "@/components/core/text-field/TextField";

const meta: Meta<typeof Autocomplete> = {
  component: Autocomplete,
  title: "Core/Autocomplete",
};

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default meta;

type Story = StoryObj<typeof Autocomplete>;

export const Default: Story = {
  args: {
    options: [
      { label: "Placehoder 1", value: 1 },
      { label: "Placeholder 2", value: 2 },
      { label: "Placeholder 3", value: 3 },
      { label: "Placeholder 4", value: 4 },
    ],
    multiple: true,
    disablePortal: true,
    disableCloseOnSelect: true,
    renderInput: (params) => {
      return <TextField {...params} label="Select" />;
    },
    renderOption: (props, option, { selected }) => {
      const { key, ...optionProps } = props;
      return (
        <li key={key} {...optionProps}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.label}
        </li>
      );
    },
    renderTags: (tagValue, getTagProps) =>
      tagValue.map((option, index) => {
        const { key, ...tagProps } = getTagProps({ index });
        return (
          <Chip
            key={key}
            label={option.label}
            {...tagProps}
            deleteIcon={<CloseIcon fontSize="small" />}
          />
        );
      }),
  },
};
