import { colors } from "@/config/palette";

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

function getColorName(color?: string) {
  return color?.replace(/var\(/, "").replace(/\)/, "") || "";
}

function getHexCode(colorName: string) {
  return getComputedStyle(document.body).getPropertyValue(colorName);
}

function renderColorStack(object: Object) {
  return (
    <Stack direction="row" spacing={5}>
      {Object.entries(object).map(([key, value]) => {
        const colorName = getColorName(value);
        const hexCode = getHexCode(colorName);
        return (
          <CardColor
            key={key}
            hexCode={hexCode}
            colorName={value}
            sx={{
              backgroundColor: value,
              minWidth: 300,
              width: "auto",
              height: 100,
            }}
          />
        );
      })}
    </Stack>
  );
}

const AllVariantsDecorator = () => {
  return (
    <Stack spacing={4}>
      <Stack spacing={2}>
        <Typography customVariant="boldDisplayLG">Base Colors</Typography>
        <Stack direction="row" spacing={5}>
          {Object.entries(colors.base)
            .slice(0, 3)
            .map(([key, value]) => {
              const colorName = getColorName(value);
              const hexCode = getHexCode(colorName);
              return (
                <CardColor
                  key={key}
                  hexCode={hexCode}
                  colorName={value}
                  sx={{
                    backgroundColor: value,
                    minWidth: 300,
                    width: "auto",
                    height: 100,
                  }}
                />
              );
            })}
        </Stack>
        <Stack direction="row" spacing={5}>
          {Object.entries(colors.base)
            .slice(3, 7)
            .map(([key, value]) => {
              const colorName = getColorName(value);
              const hexCode = getHexCode(colorName);
              return (
                <CardColor
                  key={key}
                  hexCode={hexCode}
                  colorName={value}
                  sx={{
                    backgroundColor: value,
                    minWidth: 300,
                    width: "auto",
                    height: 100,
                  }}
                />
              );
            })}
        </Stack>
        <Stack direction="row" spacing={5}>
          {Object.entries(colors.base)
            .slice(7, 11)
            .map(([key, value]) => {
              const colorName = getColorName(value);
              const hexCode = getHexCode(colorName);
              return (
                <CardColor
                  key={key}
                  hexCode={hexCode}
                  colorName={value}
                  sx={{
                    backgroundColor: value,
                    minWidth: 300,
                    width: "auto",
                    height: 100,
                  }}
                />
              );
            })}
        </Stack>
        <Stack direction="row" spacing={5}>
          {Object.entries(colors.base)
            .slice(11, 16)
            .map(([key, value]) => {
              const colorName = getColorName(value);
              const hexCode = getHexCode(colorName);
              return (
                <CardColor
                  key={key}
                  hexCode={hexCode}
                  colorName={value}
                  sx={{
                    backgroundColor: value,
                    minWidth: 300,
                    width: "auto",
                    height: 100,
                  }}
                />
              );
            })}
        </Stack>
      </Stack>
      <Stack spacing={2}>
        <Typography customVariant="boldDisplayLG">Bg Colors</Typography>
        {renderColorStack(colors.bg)}
      </Stack>
      <Stack spacing={2}>
        <Typography customVariant="boldDisplayLG">Surface Colors</Typography>
        {renderColorStack(colors.surface.default)}
        {renderColorStack(colors.surface.placeholder)}
        {renderColorStack(colors.surface.primary)}
        {renderColorStack(colors.surface.success)}
        {renderColorStack(colors.surface.warning)}
        {renderColorStack(colors.surface.info)}
        {renderColorStack(colors.surface.error)}
      </Stack>
      <Stack spacing={2}>
        <Typography customVariant="boldDisplayLG">Text Colors</Typography>
        {renderColorStack(colors.text.placeholder)}
        {renderColorStack(colors.text.primary)}
        {renderColorStack(colors.text.success)}
        {renderColorStack(colors.text.info)}
        {renderColorStack(colors.text.warning)}
      </Stack>
      <Stack spacing={2}>
        <Typography customVariant="boldDisplayLG">Icon Colors</Typography>
        {renderColorStack(colors.icon.default)}
        {renderColorStack(colors.icon.delete)}
        {renderColorStack(colors.icon.success)}
        {renderColorStack(colors.icon.info)}
        {renderColorStack(colors.icon.warning)}
        {renderColorStack(colors.icon.disabled)}
        {renderColorStack(colors.icon.placeholder)}
      </Stack>
      <Stack spacing={2}>
        <Typography customVariant="boldDisplayLG">Other Colors</Typography>
        {renderColorStack(colors.other.primary)}
      </Stack>
    </Stack>
  );
};

export const All: Story = {
  decorators: [AllVariantsDecorator],
  args: {
    hexCode: "#ffffff",
  },
};
