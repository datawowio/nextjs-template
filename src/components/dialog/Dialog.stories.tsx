import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useArgs } from "@storybook/preview-api";

import Button from "@/components/button";
import Typography from "@/components/typography";

import Dialog from "./Dialog";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Dialog> = {
  component: Dialog,
  title: "Components/Dialog",
};

export default meta;

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  decorators: [DefaultDialog],
  args: {
    open: true,
  },
};

function DefaultDialog() {
  // Hook
  const [{ open }, updateArgs] = useArgs();

  // Event handler
  function onClose() {
    updateArgs({ open: false });
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        <Typography component="span" customVariant="boldHeadingMD">
          Use Google&apos;s location service?
        </Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description" py={2}>
          <Typography component="span" customVariant="regularParagraphLG">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" color="error">
          Disagree
        </Button>
        <Button variant="contained" color="success">
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
}
