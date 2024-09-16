import { styled } from "@mui/material";

import { colors } from "@/config/palette";
import rem from "@/utils/rem";

export const BpIcon = styled("span")(() => ({
  "borderRadius": rem(4),
  "width": rem(16),
  "height": rem(16),
  "borderStyle": "solid",
  "borderWidth": rem(1),
  "borderColor": colors.border.default.base,
  "backgroundColor": colors.base.white,
  "input:hover ~ &": {
    backgroundColor: colors.surface.default.disabled,
  },
  "input:disabled ~ &": {
    borderStyle: "solid",
    borderWidth: rem(1),
    borderColor: colors.border.default.base,
    backgroundColor: colors.surface.default.disabled,
  },
  "&.medium": {
    width: rem(20),
    height: rem(20),
  },
  "&.large": {
    width: rem(24),
    height: rem(24),
  },
}));

export const BpCheckedIcon = styled(BpIcon)({
  "backgroundColor": colors.surface.info.default,
  "border": "none",
  "backgroundImage":
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&::before": {
    display: "block",
    width: rem(16),
    height: rem(16),
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: colors.surface.info.hover,
  },
  "input:disabled ~ &": {
    "backgroundColor": colors.surface.default.disabled,
    "&::before": {
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23C7CACD' transform='translate(-1, -1)'/%3E%3C/svg%3E\")",
    },
  },
  "&.medium": {
    "&::before": {
      width: rem(20),
      height: rem(20),
    },
  },
  "&.large": {
    "&::before": {
      width: rem(24),
      height: rem(24),
    },
  },
});

export const BpIndeterminateIcon = styled(BpIcon)({
  "backgroundColor": colors.surface.info.default,
  "border": "none",
  "&::before": {
    display: "block",
    width: rem(16),
    height: rem(16),
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M4 8h8v2H4z' fill='%23ffffff' transform='translate(0, -1)'/%3E%3C/svg%3E\")",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: colors.surface.info.hover,
  },
  "input:disabled ~ &": {
    "backgroundColor": colors.surface.default.disabled,
    "&::before": {
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M4 8h8v2H4z' fill='%23C7CACD' transform='translate(-0.7, -2)'/%3E%3C/svg%3E\")",
    },
  },
  "&.medium": {
    "&::before": {
      width: rem(20),
      height: rem(20),
    },
  },
  "&.large": {
    "&::before": {
      width: rem(24),
      height: rem(24),
    },
  },
});

export const styles = {
  text: {
    marginTop: rem(1),
    userSelect: "none",
  },
};
