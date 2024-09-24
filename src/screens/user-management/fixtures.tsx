import EditRoundedIcon from "@mui/icons-material/EditRounded";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import LabelStatus from "@/components/label-status";
import { colors } from "@/config/palette";
import rem from "@/utils/rem";

export const MOCK_PAGINATION_DATA_FROM_API = {
  totalItems: 200,
  totalPages: 20,
};

export const MOCK_DATA = {
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

export const PAGE_LIMIT_OPTIONS = [
  { label: "10", value: 10 },
  { label: "20", value: 20 },
  { label: "50", value: 50 },
  { label: "100", value: 100 },
];

export const STATUS_OPTIONS = [
  { label: "เปิดใช้งาน", value: "active" },
  { label: "ปิดใช้งาน", value: "inactive" },
];
