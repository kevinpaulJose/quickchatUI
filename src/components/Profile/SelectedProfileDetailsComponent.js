import {
  AccountCircleOutlined,
  ArchiveOutlined,
  EmailOutlined,
} from "@mui/icons-material";
import { Avatar, Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { localTheme } from "../../localTheme/localTheme";

export default function SelectedProfileDetailsComponent({ name, email }) {
  const [initialName, setInitialName] = useState("");

  const getInitials = () => {
    let nameArr = name.split(" ");
    let initial = "";
    nameArr.forEach((v) => {
      initial += v[0];
    });
    setInitialName(initial);
    // console.log(initial);
  };
  useEffect(getInitials, [name]);
  return (
    <Grid container spacing={0} direction={"column"} pb={1}>
      <Grid item style={{ marginTop: 20 }} alignSelf={"center"}>
        <div
          style={
            {
              // backgroundColor: "green",
            }
          }
        >
          <Avatar
            sx={{
              width: 86,
              height: 86,
              bgcolor: localTheme.profileBG,
            }}
          >
            <Typography color={"black"} variant="h5">
              {initialName}
            </Typography>
          </Avatar>
        </div>
      </Grid>
      <Grid container alignContent={"center"} direction="column" mt={1}>
        <Grid item alignSelf={"flex-start"} mt={1}>
          <Grid
            container
            // justifyContent={"center"}
            spacing={1}
            direction={"row-reverse"}
          >
            <Grid item style={{ marginTop: -3 }}>
              <Typography variant="caption" color={"text.secondary"}>
                {email}
              </Typography>
            </Grid>
            <Grid item>
              <EmailOutlined
                //   style={{ marginLeft: 2 }}
                sx={{ width: 16, height: 16 }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item alignSelf={"flex-start"}>
          <Grid
            container
            // justifyContent={"center"}
            spacing={1}
            direction={"row-reverse"}
          >
            <Grid item style={{ marginTop: -3 }}>
              <Typography variant="caption" color={"text.secondary"}>
                {name}
              </Typography>
            </Grid>
            <Grid item>
              <AccountCircleOutlined
                //   style={{ marginLeft: 2 }}
                sx={{ width: 16, height: 16 }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item alignSelf={"center"} paddingBottom={2} mt={1}>
        <Button
          variant="outlined"
          endIcon={<ArchiveOutlined />}
          style={{
            height: 40,
            // marginLeft: 15,
            backgroundColor: "white",
            fontSize: 12,
            textTransform: "capitalize",
            fontWeight: "bold",
            borderRadius: 5,
            //   marginLeft: 5
          }}
        >
          Archive
        </Button>
      </Grid>
    </Grid>
    // </div>
  );
}
