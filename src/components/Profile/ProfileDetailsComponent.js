import {
  Logout,
  PersonAdd,
  Settings,
  SettingsOutlined,
} from "@mui/icons-material";
import {
  Avatar,
  Grid,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import { localTheme } from "../../localTheme/localTheme";
import { AntSwitch } from "../utils/AntSwitch";
import MenuComponent from "./utils/MenuComponent";

export default function ProfileDetailsComponent() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Grid
      container
      spacing={0}
      //   alignContent={"center"}
      direction={"column"}
    >
      <Grid item style={{ marginTop: 20 }} alignSelf={"center"}>
        <div>
          <Avatar
            src={require("../../assets/static/profileImg.png")}
            sx={{
              width: 86,
              height: 86,
              bgcolor: localTheme.profileBG,
            }}
          />
        </div>
      </Grid>
      <Grid item alignSelf={"center"} mt={1}>
        <Grid container spacing={1}>
          <Grid item>
            <Typography variant="body1">Bill Bradford</Typography>
          </Grid>
          <Grid item>
            <IconButton sx={{ width: 20, height: 20 }} onClick={handleClick}>
              <SettingsOutlined />
            </IconButton>
            <MenuComponent
              anchorEl={anchorEl}
              handleClose={handleClose}
              open={open}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item alignSelf={"center"}>
        <Typography variant="body2" color={"text.secondary"}>
          Lead UX/UI Designer
        </Typography>
      </Grid>
      <Grid item alignSelf={"center"} paddingBottom={2}>
        <Stack direction={"row"} spacing={1} mt={1}>
          <AntSwitch
            defaultChecked
            inputProps={{ "aria-label": "ant design" }}
          />
          <Typography variant="caption" color={"text.secondary"}>
            Active
          </Typography>
        </Stack>
      </Grid>
    </Grid>
    // </div>
  );
}
