import MUICheckbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import Typography from "@/components/core/typography";

import { getCustomTextVariant } from "./helpers";
import { BpCheckedIcon, BpIcon, BpIndeterminateIcon } from "./styles";

import type { CheckboxProps } from "./types";

export default function Checkbox({
  size = "small",
  label,
  ...props
}: CheckboxProps) {
  return (
    <Stack direction="row" alignItems="center">
      <MUICheckbox
        {...props}
        checkedIcon={<BpCheckedIcon className={size} />}
        icon={<BpIcon className={size} />}
        indeterminateIcon={<BpIndeterminateIcon className={size} />}
      />
      {label && (
        <Typography customVariant={getCustomTextVariant(size)}>
          {label}
        </Typography>
      )}
    </Stack>
  );
}
