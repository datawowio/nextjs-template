"use client";

import ExpandMore from "@mui/icons-material/ExpandMore";
import MUIAutocomplete from "@mui/material/Autocomplete";

import TextField from "@/components/core/text-field";

import type { AutocompleteProps } from "./types";

export default function Select({
  popupIcon = <ExpandMore />,
  multiple = false,
  renderInput = (params) => <TextField {...params} label={props?.label} />,
  ...props
}: AutocompleteProps) {
  return (
    <MUIAutocomplete
      {...props}
      popupIcon={popupIcon}
      multiple={multiple}
      renderInput={renderInput}
    />
  );
}
