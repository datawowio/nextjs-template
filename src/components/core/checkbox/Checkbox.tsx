import FormControlLabel from "@mui/material/FormControlLabel";
import MUICheckbox from "@mui/material/Checkbox";

import { colors } from "@/config/palette";
import rem from "@/utils/rem";
import { BpCheckedIcon, BpIcon, BpIndeterminateIcon } from "./styles";

import type { CheckboxProps } from "./types";

export default function Checkbox({
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
          disabled={disabled}
          checkedIcon={<BpCheckedIcon className={size} />}
          icon={<BpIcon className={size} />}
          indeterminateIcon={<BpIndeterminateIcon className={size} />}
        />
      }
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
