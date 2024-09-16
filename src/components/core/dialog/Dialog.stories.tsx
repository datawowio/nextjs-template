import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useArgs } from "@storybook/preview-api";

import Button from "@/components/core/button";
import Dialog from "./Dialog";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Dialog> = {
  component: Dialog,
  title: "Core/Dialog",
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
  const [{ open }, updateArgs] = useArgs();

  function onClose() {
    updateArgs({ open: false });
  }
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{"Use Google's location service?"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="error">
          Disagree
        </Button>
        <Button variant="contained" color="success">
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
}
