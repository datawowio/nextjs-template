import type {
  AutocompleteRenderInputParams,
  AutocompleteProps as MUIAutocompleteProps,
} from "@mui/material/Autocomplete";
import type { ReactNode } from "react";

export interface AutocompleteProps<
  T = any,
  Multiple extends boolean | undefined = boolean | undefined,
  DisableClearable extends boolean | undefined = boolean | undefined,
  FreeSolo extends boolean | undefined = boolean | undefined,
> extends Omit<
    MUIAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>,
    "renderInput"
  > {
  label: string;
  dataTestId?: string;
  renderInput?: (params: AutocompleteRenderInputParams) => ReactNode;
}
