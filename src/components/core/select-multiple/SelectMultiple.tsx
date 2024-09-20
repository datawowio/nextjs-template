"use client";

import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMore from "@mui/icons-material/ExpandMore";

import MuiAutocomplete from "@mui/material/Autocomplete";
import Checkbox from "@mui/material/Checkbox";
import Chip from "@mui/material/Chip";

import Input from "@/components/core/input";
import rem from "@/utils/rem";

import type { AutocompleteProps } from "./types";

export default function SelectMultiple({
  dataTestId = "select-multiple",
  disableCloseOnSelect = true,
  label,
  multiple = true,
  popupIcon,
  renderInput,
  renderOption,
  renderTags,
  ...props
}: AutocompleteProps) {
  // Variables
  const finalPopupIcon = popupIcon || <ExpandMore />;
  const finalRenderInput =
    renderInput || ((params) => <Input {...params} label={label} />);

  const finalRenderOptions =
    renderOption ||
    ((props, option, { selected }) => {
      const { key, ...optionProps } = props;
      return (
        <li key={key} {...optionProps}>
          <Checkbox
            checked={selected}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            style={{ marginRight: rem(8) }}
          />
          {option.label}
        </li>
      );
    });

  const finalRenderTags =
    renderTags ||
    ((tagValue, getTagProps) => {
      return tagValue.map((option, index) => {
        const { key, ...tagProps } = getTagProps({ index });
        return (
          <Chip
            {...tagProps}
            deleteIcon={<CloseIcon fontSize="small" />}
            key={key}
            label={option.label}
          />
        );
      });
    });

  return (
    <MuiAutocomplete
      {...props}
      data-test-id={dataTestId}
      disableCloseOnSelect={disableCloseOnSelect}
      multiple={multiple}
      popupIcon={finalPopupIcon}
      renderInput={finalRenderInput}
      renderOption={finalRenderOptions}
      renderTags={finalRenderTags}
    />
  );
}
