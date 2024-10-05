import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import type { InputCheckboxProps } from "./types";

export default function InputCheckbox({
  dataTestId = "input-checkbox",
  checkboxProps = {},
  formControlLabelProps = {
    label: "Label",
  },
}: InputCheckboxProps) {
  // Initial value
  const { label, ...restFormControlLabelProps } = formControlLabelProps;

  return (
    <FormControlLabel
      {...restFormControlLabelProps}
      control={<Checkbox {...checkboxProps} />}
      data-testid={dataTestId}
      label={label}
    />
  );
}
