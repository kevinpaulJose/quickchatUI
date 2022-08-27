import { LinkOutlined } from "@mui/icons-material";
import { Button, Grid, Stack, Typography } from "@mui/material";
// import { maxWidth } from "@mui/system";
import { localTheme } from "../../localTheme/localTheme";

export default function OnBoardClientComponent() {
  return (
    <>
      <Grid container mt={0} pb={1}>
        <Grid item xs sm md lg />
        <Grid item xs={10}>
          {/* <div style={{ marginTop: 30 }}> */}
          <img
            style={{
              objectFit: "fill",
              //   backgroundColor: "red",
              //   maxHeight: "100%",
              maxHeight: "100%",
              maxWidth: "100%",
              //   marginTop: -20,
            }}
            src={require("../../assets/static/arrow.png")}
            alt={"link"}
          />
          {/* </div> */}
        </Grid>
        <Grid item xs sm md lg />
      </Grid>

      <Grid container direction={"column"} alignContent="center">
        <Grid item sm={12} mt={0}>
          <Typography variant="body1" textAlign={"center"} fontWeight={"bold"}>
            Onboard Clients
          </Typography>
        </Grid>
        <Grid item sm={12} mt={2}>
          <Stack>
            <Typography variant="caption" textAlign={"center"}>
              Share the link with prospects
            </Typography>
            <Typography variant="caption" textAlign={"center"}>
              and discuss all stuff
            </Typography>
          </Stack>
        </Grid>
        <Grid item alignSelf={"center"} paddingBottom={2} mt={1}>
          <Button
            variant="contained"
            endIcon={
              <LinkOutlined
                style={{ transform: "rotate(-50deg)", cursor: "pointer" }}
              />
            }
            style={{
              height: 40,
              // marginLeft: 15,
              backgroundColor: localTheme.buttonBG,
              fontSize: 12,
              textTransform: "capitalize",
              fontWeight: "bold",
              borderRadius: 5,
              //   marginLeft: 5
            }}
          >
            Copy Link
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
