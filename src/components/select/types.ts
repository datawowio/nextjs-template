import type {
  AutocompleteRenderInputParams,
  AutocompleteProps as MUIAutocompleteProps,
} from "@mui/material/Autocomplete";
import type { ReactNode } from "react";
import type { BaseComponent } from "@/types/components";

export interface AutocompleteProps<
  T = any,
  Multiple extends boolean | undefined = boolean | undefined,
  DisableClearable extends boolean | undefined = boolean | undefined,
  FreeSolo extends boolean | undefined = boolean | undefined,
> extends BaseComponent,
    Omit<
      MUIAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>,
      "renderInput"
    > {
  label: string;
  renderInput?: (params: AutocompleteRenderInputParams) => ReactNode;
}
