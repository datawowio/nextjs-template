import { CSSProperties } from "react";
import { colors } from "@/config/palette";
import rem from "@/utils/rem";

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
  width: 8,
  height: 8,
  borderRadius: "100%",
  marginTop: rem(-2),
};
