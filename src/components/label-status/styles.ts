import { colors } from "@/config/palette";
import rem from "@/utils/rem";

import type { CSSProperties } from "react";
import type { CustomStatusVariantStyle } from "./types";

export const customStatusStyle: CustomStatusVariantStyle = {
  ready: {
    color: colors.icon.default.gray,
  },
  running: {
    color: colors.other.primary.blue,
  },
  completed: {
    color: colors.other.primary.darkBlue,
  },
  failed: {
    color: colors.text.placeholder.error,
  },
  cancelled: {
    color: colors.other.primary.brown,
  },
};

export const statusIconStyle: CSSProperties = {
  marginTop: rem(-2),
  borderRadius: "100%",
  width: rem(8),
  height: rem(8),
};
