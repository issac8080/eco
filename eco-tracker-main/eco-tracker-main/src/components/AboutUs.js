import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { sxTheme } from "../utils/sxTheme";

import FrancisSemwanga from "../images/francis-semwanga.png";
import ViktoriaMoskalenko from "../images/viktoria-moskalenko.jpg";
import KourtneyQueeley from "../images/kourtney-queeley.png";
import RoshanRai from "../images/roshan-rai.png";
import LukeCraven from "../images/luke-craven.jpg";

const profStyle = {
  color: sxTheme.color,
  fontSize: sxTheme.fontSize,
  display: sxTheme.display,
  flexDirection: sxTheme.flexDirection,
  alignItems: sxTheme.alignItems,
};

export const AboutUs = () => {
  return (
    <Paper elevation={3}>
      <Stack spacing={5} sx={{ p: 5, backgroundColor: "#f6f6f6" }}>
        <Typography component="h2" variant="h4" sx={{ textAlign: "center" }}>
          About Us
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "column", md: "row" }}
          justifyContent="space-evenly"
          alignItems={{ xs: "center", sm: "center", md: "flex-start" }}
          spacing={3}
        >
          <Stack alignItems="center" spacing={2}>
            <Link
              href="https://github.com/f-ssemwanga"
              underline="none"
              sx={profStyle}
              target="_blank"
            >
              <Avatar
                alt="Francis Ssemwanga"
                src={FrancisSemwanga}
                sx={{ width: 112, height: 112, marginBottom: 2 }}
              />
              <Typography variant="h3" sx={sxTheme.typography.h2}>
                Francis Ssemwanga
              </Typography>
            </Link>
          </Stack>

          <Stack alignItems="center" spacing={2}>
            <Link
              href="https://github.com/Vikkk111"
              underline="none"
              sx={profStyle}
              target="_blank"
            >
              <Avatar
                alt="Viktoria Moskalenko"
                src={ViktoriaMoskalenko}
                sx={{ width: 112, height: 112, marginBottom: 2 }}
              />
              <Typography variant="h3" sx={sxTheme.typography.h2}>
                Viktoria Moskalenko
              </Typography>
            </Link>
          </Stack>
          <Stack alignItems="center" spacing={2}>
            <Link
              href="https://github.com/Kourtneyq2"
              underline="none"
              sx={profStyle}
              target="_blank"
            >
              <Avatar
                alt="Kourtney Queeley"
                src={KourtneyQueeley}
                sx={{ width: 112, height: 112, marginBottom: 2 }}
              />
              <Typography variant="h3" sx={sxTheme.typography.h2}>
                Kourtney Queeley
              </Typography>
            </Link>
          </Stack>

          <Stack alignItems="center" spacing={2}>
            <Link
              href="https://github.com/LordNinth"
              underline="none"
              sx={profStyle}
              target="_blank"
            >
              <Avatar
                alt="Roshan Rai"
                src={RoshanRai}
                sx={{ width: 112, height: 112, marginBottom: 2 }}
              />
              <Typography variant="h3" sx={sxTheme.typography.h2}>
                Roshan Rai
              </Typography>
            </Link>
          </Stack>

          <Stack alignItems="center" spacing={2}>
            <Link
              href="https://github.com/N20-Dev"
              underline="none"
              sx={profStyle}
              target="_blank"
            >
              <Avatar
                alt="Luke Craven"
                src={LukeCraven}
                sx={{ width: 112, height: 112, marginBottom: 2 }}
              />
              <Typography variant="h3" sx={sxTheme.typography.h2}>
                Luke Craven
              </Typography>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
};
