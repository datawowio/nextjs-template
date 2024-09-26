import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import Typography from "@/components/typography";
import Breadcrumbs from "@/components/breadcrumbs";
import Button from "@/components/button";
import { Link } from "@/lib/navigation";
import { styles } from "./styles";

import type { HeaderProps } from "./types";

export default function Header({
  breadcrumbs,
  children,
  hrefBack,
  sx,
  text,
}: HeaderProps) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={sx}
    >
      <Box>
        <Stack sx={styles.titleWrapper}>
          {hrefBack && (
            <Button sx={styles.backButton} component={Link} href={hrefBack}>
              <ArrowBackRoundedIcon sx={styles.backIcon} />
            </Button>
          )}
          <Typography
            component="h1"
            customVariant="boldDisplayMD"
            sx={styles.title}
          >
            {text}
          </Typography>
        </Stack>
        {breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs} />}
      </Box>
      {children}
    </Stack>
  );
}
