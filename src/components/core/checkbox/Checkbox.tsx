import FormControlLabel from "@mui/material/FormControlLabel";
import MUICheckbox from "@mui/material/Checkbox";

import { colors } from "@/config/palette";
import rem from "@/utils/rem";
import { BpCheckedIcon, BpIcon, BpIndeterminateIcon } from "./styles";

import type { CheckboxProps } from "./types";

export default function Checkbox({
  disabled,
  label,
  size = "small",
  labelProps,
  ...props
}: CheckboxProps) {
  return (
    <FormControlLabel
      {...labelProps}
      control={
        <MUICheckbox
          {...props}
          disabled={disabled}
          checkedIcon={<BpCheckedIcon className={size} />}
          icon={<BpIcon className={size} />}
          indeterminateIcon={<BpIndeterminateIcon className={size} />}
        />
      }
      label={label}
      className={size}
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
