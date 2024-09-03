import Typography from "./Typography";
import { customVariantStyle } from "./styles";

import type { Meta, StoryObj } from "@storybook/react";
import type { CustomVariant } from "./types";

const meta: Meta<typeof Typography> = {
  component: Typography,
  title: "Core/Typography",
};

export default meta;

type Story = StoryObj<typeof Typography>;

const AllVariantsDecorator = () => {
  const variantKeys = Object.keys(customVariantStyle) as CustomVariant[];

  return (
    <div>
      {variantKeys.map((variant) => {
        const customVariant = customVariantStyle[variant];
        const fontSizeVar =
          customVariant.fontSize
            ?.toString()
            ?.replace(/var\(/, "")
            .replace(/\)/, "") || "";

        const lineHeightVar =
          customVariant.lineHeight
            ?.toString()
            .replace(/var\(/, "")
            .replace(/\)/, "") || "";

        const fontSizeInPixel =
          parseFloat(
            getComputedStyle(document.body)
              .getPropertyValue(fontSizeVar)
              .replace(/rem/, ""),
          ) * 16;

        const lineHeightInPixel =
          parseFloat(
            getComputedStyle(document.body).getPropertyValue(lineHeightVar),
          ) * 16;

        return (
          <div key={variant} style={{ marginBottom: "16px" }}>
            <Typography customVariant={variant}>
              {variant} ({fontSizeInPixel}px / {lineHeightInPixel}px)
            </Typography>
          </div>
        );
      })}
    </div>
  );
};

export const Default: Story = {
  args: {
    children: "Example Text",
    customVariant: "regularDisplayLG",
  },
};

export const All: Story = {
  decorators: [AllVariantsDecorator],
  args: {
    children: "Example Text",
  },
};
