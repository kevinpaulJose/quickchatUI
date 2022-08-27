import { Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import BarComoponent from "./shared/BarComponent";

export default function GraphComponent() {
  const graphData = useSelector((state) => state.data.metrices.graph);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginLeft: 20,
          marginTop: 15,
        }}
      >
        <div style={{ flex: 1 }}>
          <Typography fontWeight={"bold"} variant="body1">
            Current week
          </Typography>
        </div>
        <div style={{ flex: 1, textAlign: "end", marginRight: 20 }}>
          <Typography variant="caption" color={"text.secondary"}>
            Activity
          </Typography>
        </div>
      </div>
      <Grid
        container
        direction={"row"}
        spacing={2}
        justifyContent={"center"}
        mt={0.1}
        wrap={"nowrap"}
        overflow={"hidden"}
      >
        {Object.entries(graphData).map(([key, v]) => {
          return (
            <Grid item>
              <BarComoponent
                day={key}
                heigth={v["value"]}
                current={v["current"]}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
