import MUIAutocomplete from "@mui/material/Autocomplete";
import type { AutocompleteProps } from "./types";

export default function Autocomplete(props: AutocompleteProps) {
  return <MUIAutocomplete {...props} />;
}
