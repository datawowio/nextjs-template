import Stack from "@mui/material/Stack";
import Typography from "@/components/typography";
import NumberTypography from "./NumberTypography";

import type { PaginationInfoProps } from "./types";

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
    <Stack
      direction="row"
      gap="4px"
      pt="1px"
      display={{ xs: "none", md: "flex" }}
    >
      <Typography customVariant="regularParagraphLG">
        {messages?.display}
        <NumberTypography>{startItemCount}</NumberTypography>
        {messages?.to}
        <NumberTypography>{endItemCount}</NumberTypography>
        {messages?.total}
        <NumberTypography>
          {filteredItems ? filteredItems : totalItems}
        </NumberTypography>
        {messages?.info}
      </Typography>
      {filteredItems && (
        <Typography>
          ({messages?.filter} <NumberTypography>{totalItems}</NumberTypography>{" "}
          {messages?.info})
        </Typography>
      )}
    </Stack>
  );
}
