import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Stack from "@mui/material/Stack";

import Button from "@/components/core/button";
import Typography from "@/components/core/typography";

import { colors } from "@/config/palette";
import rem from "@/utils/rem";

import type { ConfirmationProps } from "./types";

export default function DialogConfirmationContent({
  cancelText,
  children,
  confirmText,
  description,
  onCancel,
  onConfirm,
  title,
}: ConfirmationProps) {
  return (
    <>
      {title && (
        <DialogTitle>
          <Typography
            color={colors.surface.primary.darkBlue}
            customVariant="boldHeadingMD"
          >
            {title}
          </Typography>
        </DialogTitle>
      )}
      <DialogContent>
        <Stack gap={2}>
          {description && (
            <Typography
              color={colors.text.primary.subHeader1}
              customVariant="regularParagraphLG"
            >
              {description}
            </Typography>
          )}
          {children}
        </Stack>
        <DialogActions>
          <Stack direction="row" gap={1} ml="auto" width={rem(368)}>
            <Button
              color="primary"
              onClick={() => onCancel?.()}
              size="small"
              variant="outlined"
            >
              {cancelText}
            </Button>
            <Button
              color="error"
              onClick={() => onConfirm?.()}
              size="small"
              variant="contained"
            >
              {confirmText}
            </Button>
          </Stack>
        </DialogActions>
      </DialogContent>
    </>
  );
}
