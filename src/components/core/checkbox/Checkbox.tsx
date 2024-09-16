import MUICheckbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import Typography from "@/components/core/typography";

import { getCustomTextVariant } from "./helpers";
import { BpCheckedIcon, BpIcon, BpIndeterminateIcon } from "./styles";

import type { CheckboxProps } from "./types";
import { colors } from "@/config/palette";
import rem from "@/utils/rem";

export default function Checkbox({
  size = "small",
  label,
  disabled,
  ...props
}: CheckboxProps) {
  return (
    <Stack direction="row" alignItems="center">
      <MUICheckbox
        {...props}
        disabled={disabled}
        checkedIcon={<BpCheckedIcon className={size} />}
        icon={<BpIcon className={size} />}
        indeterminateIcon={<BpIndeterminateIcon className={size} />}
      />
      {label && (
        <Typography
          customVariant={getCustomTextVariant(size)}
          sx={{
            color: disabled
              ? colors.text.placeholder.disabled
              : colors.text.primary.message,
            marginTop: rem(1),
          }}
        >
          {label}
        </Typography>
      )}
    </Stack>
  );
}
