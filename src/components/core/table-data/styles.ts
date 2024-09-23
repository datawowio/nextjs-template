import { colors } from "@/config/palette";
import rem from "@/utils/rem";

export const styles = {
  bodyCell: {
    borderBottom: `1px solid ${colors.base.veryLightGray}`,
  },
  headerCell: {
    borderBottom: `1px solid ${colors.base.veryLightGray}`,
    backgroundColor: colors.surface.info.subdued,
  },
  sortIcon: {
    fontSize: rem(12),
    color: colors.text.primary.subHeader2,
  },
  narrowSortIcon: {
    marginTop: rem(-6),
  },
  sortLabel: {
    justifyContent: "space-between",
    width: "100%",
    color: colors.text.primary.subHeader2,
  },
};
