import { useSelector } from "react-redux";
import { localTheme } from "../localTheme/localTheme";
import AppLogoComponent from "./AppLogo/AppLogoComponent";
import ConversationsListComponent from "./Conversations/ConversationsListComponent";
import MessagesComponent from "./Conversations/MessagesComponent";
import UserMetricesComponent from "./Metrices/UserMetricesComponent";
import OnBoardClientComponent from "./OnboardClient/OnBoardClientComponent";
import ProfileDetailsComponent from "./Profile/ProfileDetailsComponent";
import SelectedProfileDetailsComponent from "./Profile/SelectedProfileDetailsComponent";

const { Box, Grid, Paper } = require("@mui/material");

function HomeComponent() {
  const currentUser = useSelector((state) => state.selected);
  const currentEmail = useSelector(
    (state) => state.data.users.filter((v) => v.name === currentUser)[0].email
  );

  return (
    <Box padding={4}>
      <Grid container spacing={6} height="100vh" flex={1}>
        <Grid item md={3} sm={12} xs={12}>
          <Paper elevation={0}>
            <Grid
              container
              direction={"column"}
              justifyContent={"flex-start"}
              alignItems={"center"}
            >
              <div
                style={{
                  width: "100%",
                }}
              >
                <AppLogoComponent />
                <div
                  style={{
                    backgroundColor: localTheme.chatBG,
                    margin: 10,
                    borderRadius: 10,
                    border: `solid ${localTheme.borderColor} 2px`,
                  }}
                >
                  <ProfileDetailsComponent />
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                }}
              >
                <ConversationsListComponent />
              </div>
            </Grid>
          </Paper>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <Paper
            style={{
              backgroundColor: localTheme.chatBG,
              borderRadius: 10,
            }}
            elevation={0}
          >
            <MessagesComponent />
          </Paper>
        </Grid>
        <Grid item md={3} sm={12} xs={12}>
          <Paper elevation={0}>
            <Grid
              container
              direction={"column"}
              justifyContent={"flex-start"}
              alignItems={"center"}
            >
              <div
                style={{
                  width: "100%",
                }}
              >
                <div
                  style={{
                    backgroundColor: localTheme.chatBG,
                    margin: 10,
                    borderRadius: 10,
                    border: `solid ${localTheme.borderColor} 2px`,
                  }}
                >
                  <SelectedProfileDetailsComponent
                    name={currentUser}
                    email={currentEmail}
                  />
                </div>
                <div
                  style={{
                    backgroundColor: localTheme.metricesBG,
                    margin: 10,
                    borderRadius: 10,
                    border: `solid ${localTheme.borderColor} 2px`,
                  }}
                >
                  <UserMetricesComponent />
                </div>
                <div
                  style={{
                    backgroundColor: localTheme.chatBG,
                    margin: 10,
                    borderRadius: 10,
                    border: `solid ${localTheme.borderColor} 2px`,
                  }}
                >
                  <OnBoardClientComponent />
                </div>
              </div>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
    // </Box>
  );
}

export default HomeComponent;
