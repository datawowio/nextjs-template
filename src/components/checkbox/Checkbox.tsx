import MUICheckbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

import { colors } from "@/config/palette";
import rem from "@/utils/rem";

import { BpCheckedIcon, BpIcon, BpIndeterminateIcon } from "./styles";

import type { CheckboxProps } from "./types";

export default function Checkbox({
  dataTestId = "checkbox",
  disabled,
  disableTypography = false,
  label,
  size = "small",
  ...props
}: CheckboxProps) {
  return (
    <FormControlLabel
      className={size}
      control={
        <MUICheckbox
          {...props}
          checkedIcon={<BpCheckedIcon className={size} />}
          disabled={disabled}
          icon={<BpIcon className={size} />}
          indeterminateIcon={<BpIndeterminateIcon className={size} />}
        />
      }
      data-testid={dataTestId}
      disableTypography={disableTypography}
      label={label}
      slotProps={{
        typography: {
          sx: {
            color: disabled
              ? colors.text.placeholder.disabled
              : colors.text.primary.message,
            marginTop: rem(2),
          },
        },
      }}
    />
  );
}
