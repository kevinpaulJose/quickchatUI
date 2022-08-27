import { Timer10Rounded } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { localTheme } from "../../../localTheme/localTheme";

export default function MetricesCard({
  content,
  title,
  Icon,
  timeBG,
  timeOuter,
}) {
  return (
    <div>
      <Stack
        direction={"row"}
        sx={{ backgroundColor: timeBG, borderRadius: 2 }}
        justifyContent="center"
        spacing={2}
        padding={1}
      >
        <Icon />
        <Stack alignContent={"center"}>
          <Typography variant="body" color={timeOuter}>
            {content}
          </Typography>
          <Typography fontSize={10} variant="caption" color={"text.secondary"}>
            {title}
          </Typography>
        </Stack>
      </Stack>
    </div>
  );
}
