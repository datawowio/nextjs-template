import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Stack from "@mui/material/Stack";

import Button from "@/components/core/button";
import Typography from "@/components/core/typography";
import { colors } from "@/config/palette";
import type { ConfirmationProps } from "./types";

export default function DialogConfirmationContent({
  title,
  description,
  cancelText,
  confirmText,
  children,
  onCancel,
  onConfirm,
}: ConfirmationProps) {
  return (
    <>
      {title && (
        <DialogTitle>
          <Typography
            customVariant="boldHeadingMD"
            color={colors.surface.primary.darkBlue}
          >
            {title}
          </Typography>
        </DialogTitle>
      )}
      <DialogContent>
        <Stack gap={2}>
          {description && (
            <Typography
              customVariant="regularParagraphLG"
              color={colors.text.primary.subHeader1}
            >
              {description}
            </Typography>
          )}
          {children}
        </Stack>
        <DialogActions>
          <Stack direction="row" gap={1} width={368} ml="auto">
            <Button
              variant="outlined"
              color="primary"
              size="small"
              onClick={() => onCancel?.()}
            >
              {cancelText}
            </Button>
            <Button
              variant="contained"
              color="error"
              size="small"
              onClick={() => onConfirm?.()}
            >
              {confirmText}
            </Button>
          </Stack>
        </DialogActions>
      </DialogContent>
    </>
  );
}
