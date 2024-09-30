import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";
import Box from "@mui/material/Box";

import Button from "@/components/button";
import Typography from "@/components/typography";
import { styles } from "./styles";

import type { ActionButtonProps } from "./types";

export default function ActionButton({
  status,
  messages,
  onCancelInvite,
  onInvite,
  onReinvite,
}: ActionButtonProps) {
  const { resend, invite } = messages;

  return status === "invited" ? (
    <Box sx={styles.buttonActionWrapper}>
      <Button
        onClick={onReinvite}
        startIcon={<RefreshRoundedIcon sx={styles.refreshIcon} />}
        size="small"
        variant="outlined"
      >
        <Typography
          customVariant="semiboldParagraphMD"
          sx={styles.textDefaultColor}
        >
          {resend}
        </Typography>
      </Button>
      <Button
        color="error"
        onClick={onCancelInvite}
        size="small"
        sx={styles.buttonClose}
        variant="contained"
      >
        <CloseRoundedIcon sx={styles.closeIcon} />
      </Button>
    </Box>
  ) : (
    <Box sx={styles.buttonActionWrapper}>
      <Button
        disabled={status === "active"}
        onClick={onInvite}
        startIcon={<MailOutlineRoundedIcon sx={styles.mailIcon} />}
        size="small"
        variant="contained"
      >
        <Typography customVariant="semiboldParagraphMD">{invite}</Typography>
      </Button>
    </Box>
  );
}
