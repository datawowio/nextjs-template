import { fontSizetoPixel, lineHeightToPixel } from "./constant";
import { customVariantStyle } from "./styles";
import Typography from "./Typography";

import type { Meta, StoryObj } from "@storybook/react";
import { CustomVariant } from "./types";

const meta: Meta<typeof Typography> = {
  component: Typography,
  title: "Core/Typography",
};

export default meta;

type Story = StoryObj<typeof Typography>;

const AllVariantsDecorator = (_Story) => {
  const variantKeys = Object.keys(customVariantStyle) as Array<CustomVariant>;
  return (
    <div>
      {variantKeys.map((variant: CustomVariant) => {
        const customVariant = customVariantStyle?.[variant];
        const fontSizeVar = customVariant?.fontSize;
        const lineHeightVar = customVariant?.lineHeight;
        return (
          <div key={variant} style={{ marginBottom: "16px" }}>
            <Typography customVariant={variant}>
              {variant}{" "}
              {/* // fontSize and lineHeight needs to extract from css properties */}
              {`(${fontSizetoPixel?.[fontSizeVar]} / ${lineHeightToPixel?.[lineHeightVar]})`}
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
