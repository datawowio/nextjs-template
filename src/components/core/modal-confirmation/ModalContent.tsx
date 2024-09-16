import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";

import Button from "@/components/core/button";
import Typography from "@/components/core/typography";
import { colors } from "@/config/palette";
import type { CardProps } from "./types";

export default function ModalContent(props: CardProps) {
  return (
    <Card {...props} className="modal">
      <CardContent>
        <Stack gap={2}>
          <Typography
            customVariant="boldHeadingMD"
            color={colors.surface.primary.darkBlue}
          >
            {props.title}
          </Typography>
          <Typography
            customVariant="regularParagraphLG"
            color={colors.text.primary.subHeader1}
          >
            {props.description}
          </Typography>
          {props.children}
        </Stack>
      </CardContent>
      <CardActions>
        <Stack direction="row" gap={1} width={368} ml="auto">
          <Button
            variant="outlined"
            color="primary"
            size="small"
            onClick={() => props?.onCancel?.()}
          >
            {props.cancelText}
          </Button>
          <Button
            variant="contained"
            color="error"
            size="small"
            onClick={() => props?.onConfirm?.()}
          >
            {props.confirmText}
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
}
