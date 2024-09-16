import type {
  AutocompleteRenderInputParams,
  AutocompleteProps as MUIAutocompleteProps,
} from "@mui/material/Autocomplete";

export interface AutocompleteProps<
  T = any,
  Multiple extends boolean | undefined = boolean | undefined,
  DisableClearable extends boolean | undefined = boolean | undefined,
  FreeSolo extends boolean | undefined = boolean | undefined,
> extends Omit<
    MUIAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>,
    "renderInput"
  > {
  label?: string;
  renderInput?: (params: AutocompleteRenderInputParams) => React.ReactNode;
}
