import { customPalette } from "@/config/palette";
import { storyBookPalette } from "./constant";

import Stack from "@mui/material/Stack";
import Typography from "@/components/core/typography";
import CardColor from "./CardColor";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CardColor> = {
  component: CardColor,
  title: "Core/Colors",
};

export default meta;

type Story = StoryObj<typeof CardColor>;

const AllVariantsDecorator = () => {
  return (
    <Stack spacing={4}>
      {storyBookPalette.map((item, index) => {
        const key = Object.keys(item)[0] as keyof typeof item;
        const colorGroups = item[key];

        return (
          <Stack key={index} spacing={2}>
            <Typography customVariant="boldDisplayLG">{key}</Typography>
            <Stack spacing={4}>
              {Array.isArray(colorGroups) &&
                colorGroups?.map((group, groupIndex) => (
                  <Stack direction="row" key={groupIndex} spacing={5}>
                    {Array.isArray(group) &&
                      group.map((color) => {
                        const customColor =
                          customPalette[color as keyof typeof customPalette];
                        const colorName =
                          customColor
                            ?.toString()
                            .replace(/var\(/, "")
                            .replace(/\)/, "") || "";

                        const hexCode = getComputedStyle(
                          document.body,
                        ).getPropertyValue(colorName);
                        return (
                          <CardColor
                            key={color}
                            hexCode={hexCode}
                            colorName={color}
                            sx={{
                              backgroundColor: color,
                              width: 210,
                              height: 100,
                            }}
                          />
                        );
                      })}
                  </Stack>
                ))}
            </Stack>
          </Stack>
        );
      })}
    </Stack>
  );
};

export const All: Story = {
  decorators: [AllVariantsDecorator],
  args: {
    hexCode: "#ffffff",
  },
};
