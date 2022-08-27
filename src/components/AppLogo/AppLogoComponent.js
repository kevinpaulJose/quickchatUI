import { Typography } from "@mui/material";

function AppLogoComponent() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div
        style={{
          flex: 1,
          //   backgroundColor: "green",
        }}
      >
        <img
          src={require("../../assets/static/logo.png")}
          alt={"logo"}
          width={60}
          height={50}
        />
      </div>
      <div
        style={{
          flex: 4,
          //   backgroundColor: "blue",
          alignSelf: "center",
        }}
      >
        <Typography
          variant="h6"

          //  backgroundColor={"red"}
        >
          QuickChat
        </Typography>
      </div>
    </div>
  );
}

export default AppLogoComponent;
