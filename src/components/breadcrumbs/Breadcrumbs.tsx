import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import MUIBreadcrumbs from "@mui/material/Breadcrumbs";

import { Link } from "@/lib/navigation";
import Typography from "@/components/typography";
import { colors } from "@/config/palette";
import { styles } from "./styles";

import type { BreadcrumbsProps } from "./types";

export default function Breadcrumbs({
  dataTestId = "breadcrumbs",
  breadcrumbs,
  ...props
}: BreadcrumbsProps) {
  const breadcrumbsList = breadcrumbs.map((item, i) => {
    return item?.href ? (
      <Link href={item.href} style={styles.link}>
        <Typography
          customVariant="regularParagraphLG"
          color={colors.text.primary.header}
        >
          {item.name}
        </Typography>
      </Link>
    ) : (
      <Typography
        key={i}
        customVariant="semiboldParagraphLG"
        color={colors.text.primary.header}
      >
        {item.name}
      </Typography>
    );
  });

  return (
    <MUIBreadcrumbs
      {...props}
      separator={<NavigateNextIcon fontSize="small" sx={styles.separateIcon} />}
      aria-label="breadcrumb"
    >
      {breadcrumbsList}
    </MUIBreadcrumbs>
  );
}
