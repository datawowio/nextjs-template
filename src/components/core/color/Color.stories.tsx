import { hexToRgb } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import { get, listify } from "radash";

import Typography from "@/components/core/typography";
import { colors } from "@/config/palette";

import Color from "./Color";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Color> = {
  component: Color,
  title: "Core/Colors",
};

export default meta;

type Story = StoryObj<typeof Color>;

export const Default: Story = {
  args: {
    title: "Base",
    tones: getColorTones("base"),
  },
  decorators: [
    (Story) => (
      <Stack spacing={4} width="80%">
        <Header />
        <Story />
        <ColorList />
      </Stack>
    ),
  ],
};

/*
 * ================================ Decorators ================================
 */
function ColorList() {
  return (
    <>
      <Color title="BG" tones={getColorTones("bg")} />
      <Color
        title="Surface / Default"
        tones={getColorTones("surface.default")}
      />
      <Color
        title="Surface / Placeholder"
        tones={getColorTones("surface.placeholder")}
      />
      <Color
        title="Surface / Primary"
        tones={getColorTones("surface.primary")}
      />
      <Color
        title="Surface / Success"
        tones={getColorTones("surface.success")}
      />
      <Color
        title="Surface / Warning"
        tones={getColorTones("surface.warning")}
      />
      <Color title="Surface / Info" tones={getColorTones("surface.info")} />
      <Color title="Surface / Error" tones={getColorTones("surface.error")} />
      <Color
        title="Text / Placeholder"
        tones={getColorTones("text.placeholder")}
      />
      <Color title="Text / Primary" tones={getColorTones("text.primary")} />
      <Color title="Text / Success" tones={getColorTones("text.success")} />
      <Color title="Text / Info" tones={getColorTones("text.info")} />
      <Color title="Text / Warning" tones={getColorTones("text.warning")} />
      <Color title="Icon / Default" tones={getColorTones("icon.default")} />
      <Color title="Icon / Delete" tones={getColorTones("icon.delete")} />
      <Color title="Icon / Success" tones={getColorTones("icon.success")} />
      <Color title="Icon / Info" tones={getColorTones("icon.info")} />
      <Color title="Icon / Warning" tones={getColorTones("icon.warning")} />
      <Color title="Icon / Disabled" tones={getColorTones("icon.disabled")} />
      <Color
        title="Icon / Placeholder"
        tones={getColorTones("icon.placeholder")}
      />
      <Color title="Border / Default" tones={getColorTones("border.default")} />
      <Color title="Border / Primary" tones={getColorTones("border.primary")} />
      <Color title="Border / Error" tones={getColorTones("border.error")} />
      <Color title="Border / Success" tones={getColorTones("border.success")} />
      <Color title="Border / Warning" tones={getColorTones("border.warning")} />
      <Color title="Border / Info" tones={getColorTones("border.info")} />
      <Color
        title="Border / Placeholder"
        tones={getColorTones("border.placeholder")}
      />
      <Color title="Other / Primary" tones={getColorTones("other.primary")} />
    </>
  );
}

function Header() {
  return (
    <Box component="header">
      <Typography component="h1" customVariant="boldDisplayMD">
        Colors
      </Typography>
      <Divider sx={{ marginTop: "0.25rem", marginBottom: "0.25rem" }} />
    </Box>
  );
}

/*
 * =============================== View Helpers ===============================
 */
function getColorTones(outerKey: string) {
  const obj = get(colors, outerKey) as Record<string, string>;
  return listify(obj, (innerKey, value) => {
    const cssVar = getCssVar(value);
    const hex = getHexCode(cssVar);
    const key = `colors.${outerKey}.${innerKey}`;
    const rgb = hexToRgb(hex);

    return {
      cssVar,
      hex,
      key,
      rgb,
    };
  });
}

function getCssVar(color: string) {
  return color.replace(/var\(/, "").replace(/\)/, "") || "";
}

function getHexCode(cssVar: string) {
  return getComputedStyle(document.body).getPropertyValue(cssVar);
}
