"use client";

import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMore from "@mui/icons-material/ExpandMore";

import MuiAutocomplete from "@mui/material/Autocomplete";
import Checkbox from "@mui/material/Checkbox";
import Chip from "@mui/material/Chip";

import Input from "@/components/core/input";

import type { AutocompleteProps } from "./types";

export default function SelectMultiple({
  popupIcon = <ExpandMore />,
  multiple = true,
  disableCloseOnSelect = true,
  renderInput = (params) => <Input {...params} label={props?.label} />,
  renderOption = (props, option, { selected }) => {
    const { key, ...optionProps } = props;
    return (
      <li key={key} {...optionProps}>
        <Checkbox
          icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
          checkedIcon={<CheckBoxIcon fontSize="small" />}
          style={{ marginRight: 8 }}
          checked={selected}
        />
        {option.label}
      </li>
    );
  },
  renderTags = (tagValue, getTagProps) => {
    return tagValue.map((option, index) => {
      const { key, ...tagProps } = getTagProps({ index });
      return (
        <Chip
          key={key}
          label={option.label}
          {...tagProps}
          deleteIcon={<CloseIcon fontSize="small" />}
        />
      );
    });
  },
  ...props
}: AutocompleteProps) {
  return (
    <MuiAutocomplete
      {...props}
      popupIcon={popupIcon}
      multiple={multiple}
      renderInput={renderInput}
      renderOption={renderOption}
      renderTags={renderTags}
      disableCloseOnSelect={disableCloseOnSelect}
    />
  );
}
