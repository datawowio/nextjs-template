"use client";

import ExpandMore from "@mui/icons-material/ExpandMore";
import MUIAutocomplete from "@mui/material/Autocomplete";

import Input from "@/components/core/input";

import type { AutocompleteProps } from "./types";

export default function Select({
  label,
  popupIcon,
  multiple = false,
  renderInput,
  ...props
}: AutocompleteProps) {
  return (
    <MUIAutocomplete
      {...props}
      popupIcon={popupIcon ? popupIcon : <ExpandMore />}
      multiple={multiple}
      renderInput={
        renderInput
          ? renderInput
          : (params) => <Input {...params} label={label} />
      }
    />
  );
}
