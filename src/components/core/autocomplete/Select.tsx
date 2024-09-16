import ExpandMore from "@mui/icons-material/ExpandMore";
import MUIAutocomplete from "@mui/material/Autocomplete";

import type { AutocompleteProps } from "./types";

export default function Select({
  popupIcon = <ExpandMore />,
  multiple = false,
  ...props
}: AutocompleteProps) {
  return (
    <MUIAutocomplete {...props} popupIcon={popupIcon} multiple={multiple} />
  );
}
