import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";
import Box from "@mui/material/Box";

import Button from "@/components/button";
import Typography from "@/components/typography";
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
    { key: "action", label: "" },
  ],
  rows: [
    {
      id: 1,
      name: "Jacquelyn Roberts",
      email: "Werner47@gmail.com",
      action: (
        <Box display="flex" width={203} justifyContent="center" ml="auto">
          <Button
            variant="contained"
            startIcon={
              <MailOutlineRoundedIcon
                sx={{ fontSize: rem(16), color: colors.icon.default.white }}
              />
            }
            size="small"
          >
            <Typography
              customVariant="semiboldParagraphMD"
              sx={{ colo: colors.base.white }}
            >
              ส่งคำเชิญ
            </Typography>
          </Button>
        </Box>
      ),
    },
    {
      id: 2,
      name: "Lee Beier",
      email: "Emelia_Gulgowski@hotmail.com",
      action: (
        <Box
          display="flex"
          gap={1}
          width={203}
          justifyContent="center"
          ml="auto"
        >
          <Button
            startIcon={
              <RefreshRoundedIcon
                sx={{ color: colors.text.info.default, flexGrow: 1 }}
              />
            }
            size="small"
            variant="outlined"
          >
            <Typography
              customVariant="semiboldParagraphMD"
              sx={{ colo: colors.text.info.default }}
            >
              ส่งอีเมลอีกครั้ง
            </Typography>
          </Button>
          <Button
            variant="contained"
            color="error"
            size="small"
            sx={{ width: "fit-content", minWidth: rem(40), p: rem(10) }}
          >
            <CloseRoundedIcon sx={{ margin: 0, fontSize: rem(24) }} />
          </Button>
        </Box>
      ),
    },
    {
      id: 3,
      name: "Pablo Prosacco",
      email: "Christa_Kautzer@yahoo.com",
      action: (
        <Box display="flex" width={203} justifyContent="center" ml="auto">
          <Button
            variant="contained"
            startIcon={
              <MailOutlineRoundedIcon
                sx={{ fontSize: rem(16), color: colors.icon.default.white }}
              />
            }
            size="small"
          >
            <Typography
              customVariant="semiboldParagraphMD"
              sx={{ colo: colors.base.white }}
            >
              ส่งคำเชิญ
            </Typography>
          </Button>
        </Box>
      ),
    },
    {
      id: 4,
      name: "Carroll Terry",
      email: "Rozella31@gmail.com",
      action: (
        <Box
          display="flex"
          gap={1}
          width={203}
          justifyContent="center"
          ml="auto"
        >
          <Button
            startIcon={
              <RefreshRoundedIcon
                sx={{ color: colors.text.info.default, flexGrow: 1 }}
              />
            }
            size="small"
            variant="outlined"
          >
            <Typography
              customVariant="semiboldParagraphMD"
              sx={{ colo: colors.text.info.default }}
            >
              ส่งอีเมลอีกครั้ง
            </Typography>
          </Button>
          <Button
            variant="contained"
            color="error"
            size="small"
            sx={{ width: "fit-content", minWidth: rem(40), p: rem(10) }}
          >
            <CloseRoundedIcon sx={{ margin: 0, fontSize: rem(24) }} />
          </Button>
        </Box>
      ),
    },
    {
      id: 5,
      name: "Laurie Erdman I",
      email: "Jaunita.Kunde94@gmail.com",
      action: (
        <Box display="flex" width={203} justifyContent="center" ml="auto">
          <Button
            variant="contained"
            startIcon={
              <MailOutlineRoundedIcon
                sx={{ fontSize: rem(16), color: colors.icon.default.white }}
              />
            }
            size="small"
          >
            <Typography
              customVariant="semiboldParagraphMD"
              sx={{ colo: colors.base.white }}
            >
              ส่งคำเชิญ
            </Typography>
          </Button>
        </Box>
      ),
    },
    {
      id: 6,
      name: "Leigh Homenick",
      email: "Gwen.Grimes@hotmail.com",
      action: (
        <Box
          display="flex"
          gap={1}
          width={203}
          justifyContent="center"
          ml="auto"
        >
          <Button
            startIcon={
              <RefreshRoundedIcon
                sx={{ color: colors.text.info.default, flexGrow: 1 }}
              />
            }
            size="small"
            variant="outlined"
          >
            <Typography
              customVariant="semiboldParagraphMD"
              sx={{ colo: colors.text.info.default }}
            >
              ส่งอีเมลอีกครั้ง
            </Typography>
          </Button>
          <Button
            variant="contained"
            color="error"
            size="small"
            sx={{ width: "fit-content", minWidth: rem(40), p: rem(10) }}
          >
            <CloseRoundedIcon sx={{ margin: 0, fontSize: rem(24) }} />
          </Button>
        </Box>
      ),
    },
    {
      id: 7,
      name: "Cesar Kessler",
      email: "Lisandro.Buckridge17@gmail.com",
      action: (
        <Box
          display="flex"
          gap={1}
          width={203}
          justifyContent="center"
          ml="auto"
        >
          <Button
            startIcon={
              <RefreshRoundedIcon
                sx={{ color: colors.text.info.default, flexGrow: 1 }}
              />
            }
            size="small"
            variant="outlined"
          >
            <Typography
              customVariant="semiboldParagraphMD"
              sx={{ colo: colors.text.info.default }}
            >
              ส่งอีเมลอีกครั้ง
            </Typography>
          </Button>
          <Button
            variant="contained"
            color="error"
            size="small"
            sx={{ width: "fit-content", minWidth: rem(40), p: rem(10) }}
          >
            <CloseRoundedIcon sx={{ margin: 0, fontSize: rem(24) }} />
          </Button>
        </Box>
      ),
    },
    {
      id: 8,
      name: "Janis Kreiger",
      email: "Ervin2@gmail.com",
      action: (
        <Box
          display="flex"
          gap={1}
          width={203}
          justifyContent="center"
          ml="auto"
        >
          <Button
            startIcon={
              <RefreshRoundedIcon
                sx={{ color: colors.text.info.default, flexGrow: 1 }}
              />
            }
            size="small"
            variant="outlined"
          >
            <Typography
              customVariant="semiboldParagraphMD"
              sx={{ colo: colors.text.info.default }}
            >
              ส่งอีเมลอีกครั้ง
            </Typography>
          </Button>
          <Button
            variant="contained"
            color="error"
            size="small"
            sx={{ width: "fit-content", minWidth: rem(40), p: rem(10) }}
          >
            <CloseRoundedIcon sx={{ margin: 0, fontSize: rem(24) }} />
          </Button>
        </Box>
      ),
    },
    {
      id: 9,
      name: "Dr. Rolando Rodriguez",
      email: "Luigi84@yahoo.com",
      action: (
        <Box
          display="flex"
          gap={1}
          width={203}
          justifyContent="center"
          ml="auto"
        >
          <Button
            startIcon={
              <RefreshRoundedIcon
                sx={{ color: colors.text.info.default, flexGrow: 1 }}
              />
            }
            size="small"
            variant="outlined"
          >
            <Typography
              customVariant="semiboldParagraphMD"
              sx={{ colo: colors.text.info.default }}
            >
              ส่งอีเมลอีกครั้ง
            </Typography>
          </Button>
          <Button
            variant="contained"
            color="error"
            size="small"
            sx={{ width: "fit-content", minWidth: rem(40), p: rem(10) }}
          >
            <CloseRoundedIcon sx={{ margin: 0, fontSize: rem(24) }} />
          </Button>
        </Box>
      ),
    },
    {
      id: 10,
      name: "Cary Weber",
      email: "Prudence4@hotmail.com",
      action: (
        <Box
          display="flex"
          gap={1}
          width={203}
          justifyContent="center"
          ml="auto"
        >
          <Button
            startIcon={
              <RefreshRoundedIcon
                sx={{ color: colors.text.info.default, flexGrow: 1 }}
              />
            }
            size="small"
            variant="outlined"
          >
            <Typography
              customVariant="semiboldParagraphMD"
              sx={{ colo: colors.text.info.default }}
            >
              ส่งอีเมลอีกครั้ง
            </Typography>
          </Button>
          <Button
            variant="contained"
            color="error"
            size="small"
            sx={{ width: "fit-content", minWidth: rem(40), p: rem(10) }}
          >
            <CloseRoundedIcon sx={{ margin: 0, fontSize: rem(24) }} />
          </Button>
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
