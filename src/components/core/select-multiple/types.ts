import type { AutocompleteProps as MUIAutocompleteProps } from "@mui/material/Autocomplete";

export interface AutocompleteProps<
  T = any,
  Multiple extends boolean | undefined = boolean | undefined,
  DisableClearable extends boolean | undefined = boolean | undefined,
  FreeSolo extends boolean | undefined = boolean | undefined,
> extends MUIAutocompleteProps<T, Multiple, DisableClearable, FreeSolo> {
  label?: string;
}
