import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import Typography from "./Typography";
import { customVariantStyle } from "./styles";

import type { Meta, StoryObj } from "@storybook/react";
import type { CustomVariant } from "./types";

const meta: Meta<typeof Typography> = {
  component: Typography,
  title: "Components/Typography",
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    children: "Example Text",
    customVariant: "regularDisplayLG",
  },
};

export const All: Story = {
  decorators: [AllVariants],
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
};

/*
 * ================================ Decorators ================================
 */

function AllVariants() {
  // Initial value
  const variants = Object.keys(customVariantStyle) as CustomVariant[];

  // View helpers
  function getFontSizeInPixel(variant: CustomVariant) {
    const customVariant = customVariantStyle[variant];
    const fontSizeVar =
      customVariant.fontSize
        ?.toString()
        ?.replace(/var\(/, "")
        .replace(/\)/, "") || "";

    return (
      parseFloat(
        getComputedStyle(document.body)
          .getPropertyValue(fontSizeVar)
          .replace(/rem/, ""),
      ) * 16
    );
  }

  function getLineHeightInPixel(variant: CustomVariant) {
    const customVariant = customVariantStyle[variant];
    const lineHeightVar =
      customVariant.lineHeight
        ?.toString()
        .replace(/var\(/, "")
        .replace(/\)/, "") || "";

    return (
      parseFloat(
        getComputedStyle(document.body).getPropertyValue(lineHeightVar),
      ) * 16
    );
  }

  return (
    <Stack gap={2}>
      {variants.map((variant) => (
        <Box key={variant}>
          <Typography customVariant={variant}>
            {variant} ({getFontSizeInPixel(variant)}px /{" "}
            {getLineHeightInPixel(variant)}px)
          </Typography>
        </Box>
      ))}
    </Stack>
  );
}
