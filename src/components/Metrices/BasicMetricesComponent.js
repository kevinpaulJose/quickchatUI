import {
  EventAvailableOutlined,
  PeopleAltOutlined,
  QuickreplyOutlined,
  ScheduleRounded,
} from "@mui/icons-material";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { localTheme } from "../../localTheme/localTheme";
import MetricesCard from "./shared/MetricesCard";

export default function BasicMetircesComponent() {
  const metrices = useSelector((state) => state.data.metrices);
  return (
    <Grid container padding={2} spacing={2}>
      <Grid item xs={12} sm={6} md={12} lg={6}>
        <MetricesCard
          content={metrices.time}
          title={"Time"}
          Icon={() => (
            <ScheduleRounded
              sx={{
                backgroundColor: localTheme.timeIconBG,
                padding: 0.5,
                borderRadius: 10,
                color: localTheme.timeOuter,
              }}
            />
          )}
          timeOuter={localTheme.timeOuter}
          timeBG={localTheme.timeBG}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={12} lg={6}>
        <MetricesCard
          content={metrices.attended}
          title={"Attendeed"}
          Icon={() => (
            <PeopleAltOutlined
              sx={{
                backgroundColor: localTheme.timeIconBG,
                padding: 0.5,
                borderRadius: 10,
                color: localTheme.timeOuter,
              }}
            />
          )}
          timeOuter={localTheme.timeOuter}
          timeBG={localTheme.timeBG}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={12} lg={6}>
        <MetricesCard
          content={metrices.meetings}
          title={"Meetings"}
          Icon={() => (
            <EventAvailableOutlined
              sx={{
                backgroundColor: localTheme.meetingsIconBG,
                padding: 0.5,
                borderRadius: 10,
                color: localTheme.meetingsOuter,
              }}
            />
          )}
          timeOuter={localTheme.meetingsOuter}
          timeBG={localTheme.meetingsBG}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={12} lg={6}>
        <MetricesCard
          content={metrices.rejected}
          title={"Rejected"}
          Icon={() => (
            <QuickreplyOutlined
              sx={{
                backgroundColor: localTheme.rejectedIconBG,
                padding: 0.5,
                borderRadius: 10,
                color: localTheme.rejectedOuter,
              }}
            />
          )}
          timeOuter={localTheme.rejectedOuter}
          timeBG={localTheme.rejectedBG}
        />
      </Grid>
    </Grid>
  );
}
