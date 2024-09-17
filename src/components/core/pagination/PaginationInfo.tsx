import Stack from "@mui/material/Stack";
import Typography from "@/components/core/typography";
import { colors } from "@/config/palette";

import type { PaginationInfoProps } from "./types";

function NumberTypography({ number }: { number: Number }) {
  return (
    <Typography
      component="span"
      sx={{ color: colors.text.primary.header, mx: "8px" }}
      customVariant="mediumParagraphLG"
    >
      <>{number}</>
    </Typography>
  );
}

export default function PaginationInfo({
  page,
  limit,
  totalItems,
  filteredItems,
  messages,
}: PaginationInfoProps) {
  const startItemCount = page ? (page > 1 ? (page - 1) * limit + 1 : page) : 1;
  const endItemCount = startItemCount + limit - 1;
  return (
    <Stack direction="row" gap="4px" pt="1px">
      <Typography customVariant="regularParagraphLG">
        {messages?.display}
        <NumberTypography number={startItemCount} />
        {messages?.to}
        <NumberTypography number={endItemCount} />
        {messages?.total}
        <NumberTypography number={filteredItems ? filteredItems : totalItems} />
        {messages?.info}
      </Typography>
      {filteredItems && (
        <Typography>
          ({messages?.filter} <NumberTypography number={totalItems} />{" "}
          {messages?.info})
        </Typography>
      )}
    </Stack>
  );
}
