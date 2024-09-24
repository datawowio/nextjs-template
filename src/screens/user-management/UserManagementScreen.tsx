"use client";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";

import { useTranslations } from "next-intl";

import Button from "@/components/core/button";
import Input from "@/components/core/input";
import LabelStatus from "@/components/label-status";
import Pagination from "@/components/core/pagination";
import Select from "@/components/core/select";
import TableData from "@/components/core/table-data";
import Typography from "@/components/core/typography";
import { colors } from "@/config/palette";
import debounce from "@/utils/debounce";
import rem from "@/utils/rem";

import { card, flexWrapper } from "./styles";
import { useImmer } from "use-immer";
import type { Order } from "@/components/core/table-data";
import type { QueryType } from "./types";

const MOCK_DATA = {
  headers: [
    { key: "name", label: "ชื่อ" },
    { key: "email", label: "อีเมล" },
    { key: "department", label: "ฝ่าย" },
    { key: "agency", label: "กลุ่มงาน" },
    { key: "role", label: "สิทธิ์" },
    { key: "status", label: "สถานะ" },
    { key: "action", label: "" },
  ],
  rows: [
    {
      id: 1,
      name: "Jacquelyn Roberts",
      email: "Werner47@gmail.com",
      department: "male",
      agency: "Cis woman",
      role: "ผู้ดูแลระบบ",
      status: <LabelStatus status="completed" text="Active" />,
      action: (
        <Box display="flex" gap={rem(36)} justifyContent="center">
          <IconButton sx={{ p: 0 }} disableRipple>
            <PauseRoundedIcon
              sx={{ fontSize: rem(18), color: colors.icon.default.base }}
            />
          </IconButton>
          <IconButton sx={{ p: 0 }} disableRipple>
            <EditRoundedIcon
              sx={{ fontSize: rem(16), color: colors.icon.default.base }}
            />
          </IconButton>
        </Box>
      ),
    },
    {
      id: 2,
      name: "Lee Beier",
      email: "Emelia_Gulgowski@hotmail.com",
      department: "male",
      agency: "FTM",
      role: "ผู้ดูแลระบบ",
      status: <LabelStatus status="completed" text="Active" />,
      action: (
        <Box display="flex" gap={rem(36)} justifyContent="center">
          <IconButton sx={{ p: 0 }} disableRipple>
            <PauseRoundedIcon
              sx={{ fontSize: rem(18), color: colors.icon.default.base }}
            />
          </IconButton>
          <IconButton sx={{ p: 0 }} disableRipple>
            <EditRoundedIcon
              sx={{ fontSize: rem(16), color: colors.icon.default.base }}
            />
          </IconButton>
        </Box>
      ),
    },
    {
      id: 3,
      name: "Pablo Prosacco",
      email: "Christa_Kautzer@yahoo.com",
      department: "male",
      agency: "Two* person",
      role: "ผู้ดูแลระบบ",
      status: <LabelStatus status="ready" text="Inactive" />,
      action: (
        <Box display="flex" gap={rem(36)} justifyContent="center">
          <IconButton sx={{ p: 0 }} disableRipple>
            <PlayArrowRoundedIcon
              sx={{ fontSize: rem(18), color: colors.icon.default.base }}
            />
          </IconButton>
          <IconButton sx={{ p: 0 }} disableRipple>
            <EditRoundedIcon
              sx={{ fontSize: rem(16), color: colors.icon.default.base }}
            />
          </IconButton>
        </Box>
      ),
    },
    {
      id: 4,
      name: "Carroll Terry",
      email: "Rozella31@gmail.com",
      department: "female",
      agency: "Demiflux",
      role: "ผู้ดูแลระบบ",
      status: <LabelStatus status="ready" text="Inactive" />,
      action: (
        <Box display="flex" gap={rem(36)} justifyContent="center">
          <IconButton sx={{ p: 0 }} disableRipple>
            <PlayArrowRoundedIcon
              sx={{ fontSize: rem(18), color: colors.icon.default.base }}
            />
          </IconButton>
          <IconButton sx={{ p: 0 }} disableRipple>
            <EditRoundedIcon
              sx={{ fontSize: rem(16), color: colors.icon.default.base }}
            />
          </IconButton>
        </Box>
      ),
    },
    {
      id: 5,
      name: "Laurie Erdman I",
      email: "Jaunita.Kunde94@gmail.com",
      department: "male",
      agency: "Transsexual woman",
      role: "ผู้ดูแลระบบ",
      status: <LabelStatus status="ready" text="Inactive" />,
      action: (
        <Box display="flex" gap={rem(36)} justifyContent="center">
          <IconButton sx={{ p: 0 }} disableRipple>
            <PlayArrowRoundedIcon
              sx={{ fontSize: rem(18), color: colors.icon.default.base }}
            />
          </IconButton>
          <IconButton sx={{ p: 0 }} disableRipple>
            <EditRoundedIcon
              sx={{ fontSize: rem(16), color: colors.icon.default.base }}
            />
          </IconButton>
        </Box>
      ),
    },
    {
      id: 6,
      name: "Leigh Homenick",
      email: "Gwen.Grimes@hotmail.com",
      department: "female",
      agency: "Demiflux",
      role: "ผู้ดูแลระบบ",
      status: <LabelStatus status="ready" text="Inactive" />,
      action: (
        <Box display="flex" gap={rem(36)} justifyContent="center">
          <IconButton sx={{ p: 0 }} disableRipple>
            <PlayArrowRoundedIcon
              sx={{ fontSize: rem(18), color: colors.icon.default.base }}
            />
          </IconButton>
          <IconButton sx={{ p: 0 }} disableRipple>
            <EditRoundedIcon
              sx={{ fontSize: rem(16), color: colors.icon.default.base }}
            />
          </IconButton>
        </Box>
      ),
    },
    {
      id: 7,
      name: "Cesar Kessler",
      email: "Lisandro.Buckridge17@gmail.com",
      department: "female",
      agency: "Pangender",
      role: "ผู้ดูแลระบบ",
      status: <LabelStatus status="completed" text="Active" />,
      action: (
        <Box display="flex" gap={rem(36)} justifyContent="center">
          <IconButton sx={{ p: 0 }} disableRipple>
            <PauseRoundedIcon
              sx={{ fontSize: rem(18), color: colors.icon.default.base }}
            />
          </IconButton>
          <IconButton sx={{ p: 0 }} disableRipple>
            <EditRoundedIcon
              sx={{ fontSize: rem(16), color: colors.icon.default.base }}
            />
          </IconButton>
        </Box>
      ),
    },
    {
      id: 8,
      name: "Janis Kreiger",
      email: "Ervin2@gmail.com",
      department: "female",
      agency: "Two* person",
      role: "ผู้ดูแลระบบ",
      status: <LabelStatus status="completed" text="Active" />,
      action: (
        <Box display="flex" gap={rem(36)} justifyContent="center">
          <IconButton sx={{ p: 0 }} disableRipple>
            <PauseRoundedIcon
              sx={{ fontSize: rem(18), color: colors.icon.default.base }}
            />
          </IconButton>
          <IconButton sx={{ p: 0 }} disableRipple>
            <EditRoundedIcon
              sx={{ fontSize: rem(16), color: colors.icon.default.base }}
            />
          </IconButton>
        </Box>
      ),
    },
    {
      id: 9,
      name: "Dr. Rolando Rodriguez",
      email: "Luigi84@yahoo.com",
      department: "female",
      agency: "Transgender female",
      role: "ผู้ดูแลระบบ",
      status: <LabelStatus status="ready" text="Inactive" />,
      action: (
        <Box display="flex" gap={rem(36)} justifyContent="center">
          <IconButton sx={{ p: 0 }} disableRipple>
            <PlayArrowRoundedIcon
              sx={{ fontSize: rem(18), color: colors.icon.default.base }}
            />
          </IconButton>
          <IconButton sx={{ p: 0 }} disableRipple>
            <EditRoundedIcon
              sx={{ fontSize: rem(16), color: colors.icon.default.base }}
            />
          </IconButton>
        </Box>
      ),
    },
    {
      id: 10,
      name: "Cary Weber",
      email: "Prudence4@hotmail.com",
      department: "male",
      agency: "Transsexual person",
      role: "ผู้ดูแลระบบ",
      status: <LabelStatus status="completed" text="Active" />,
      action: (
        <Box display="flex" gap={rem(36)} justifyContent="center">
          <IconButton sx={{ p: 0 }} disableRipple>
            <PauseRoundedIcon
              sx={{ fontSize: rem(18), color: colors.icon.default.base }}
            />
          </IconButton>
          <IconButton sx={{ p: 0 }} disableRipple>
            <EditRoundedIcon
              sx={{ fontSize: rem(16), color: colors.icon.default.base }}
            />
          </IconButton>
        </Box>
      ),
    },
  ],
};

export default function UserManagementScreen() {
  const t = useTranslations("screens.userManagement");
  const tCommon = useTranslations("common");
  const [state, setState] = useImmer<QueryType>({
    pagination: {
      page: 1,
      limit: 10,
      totalItems: 200,
      totalPages: 20,
    },
    filters: {
      name: undefined,
      status: undefined,
    },
    sort: {
      key: "name",
      orderBy: "asc",
    },
  });

  function filterChangeHandler(
    key: keyof typeof state.filters,
    value?: string,
  ) {
    setState((draft) => {
      draft.filters[key] = value;
    });
  }

  function paginationChangeHandler(
    key: keyof typeof state.pagination,
    value: number,
  ) {
    setState((draft) => {
      draft.pagination[key] = value;
    });
  }

  function sortChangeHandler(key: string, value: Order) {
    setState((draft) => {
      draft.sort.key = key;
      draft.sort.orderBy = value;
    });
  }

  return (
    <Stack gap={3}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography
          customVariant="boldDisplayMD"
          sx={{ color: colors.text.primary.header }}
          component="h1"
        >
          {t("title")}
        </Typography>
        <Button
          variant="contained"
          sx={{ maxWidth: 144 }}
          startIcon={<AddRoundedIcon />}
        >
          {t("addUser")}
        </Button>
      </Stack>
      <Box sx={card}>
        <Stack sx={{ p: 2 }}>
          <Box sx={flexWrapper}>
            <Box sx={{ ...flexWrapper, flexGrow: 1 }}>
              <Input
                label={t("filters.search")}
                InputProps={{
                  endAdornment: (
                    <SearchRoundedIcon
                      sx={{ color: colors.icon.placeholder.default }}
                    />
                  ),
                }}
                onChange={(e) => {
                  debounce(
                    () => filterChangeHandler("name", e.target.value ?? ""),
                    1000,
                  )();
                }}
                sx={{ flexGrow: 1 }}
              />
              <Select
                label={t("filters.status")}
                sx={{ width: 244 }}
                options={[
                  { label: "เปิดใช้งาน", value: "active" },
                  { label: "ปิดใช้งาน", value: "inactive" },
                ]}
                onChange={(_, options) =>
                  filterChangeHandler("status", options?.value ?? undefined)
                }
              />
            </Box>
            <Box sx={flexWrapper}>
              <Select
                label={tCommon("pagination.show")}
                sx={{ width: 100 }}
                options={[
                  { label: "10", value: 10 },
                  { label: "20", value: 20 },
                  { label: "50", value: 50 },
                  { label: "100", value: 100 },
                ]}
                onChange={(_, options) =>
                  paginationChangeHandler("limit", options?.value ?? undefined)
                }
              />
              <Typography customVariant="regularParagraphLG">
                {tCommon("pagination.perPage")}
              </Typography>
            </Box>
          </Box>
        </Stack>
        <TableData
          data={MOCK_DATA}
          orderBy={state.sort.orderBy}
          sortColumn={state.sort.key}
          onSortColumn={(key, orderBy) => sortChangeHandler(key, orderBy)}
        />
        <Pagination
          count={state.pagination.totalPages}
          page={state.pagination.page}
          limit={state.pagination.limit}
          totalItems={state.pagination.totalItems}
          messages={{
            display: tCommon("pagination.display"),
            filter: tCommon("pagination.filter"),
            info: tCommon("pagination.info"),
            to: tCommon("pagination.to"),
            total: tCommon("pagination.total"),
          }}
          onChange={(_e, page) => paginationChangeHandler("page", page)}
          sx={{
            p: 2,
          }}
        />
      </Box>
    </Stack>
  );
}
