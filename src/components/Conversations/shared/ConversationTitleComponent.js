import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { Avatar, Stack, Typography } from "@mui/material";
import { localTheme } from "../../../localTheme/localTheme";

function ConversationTitleComponent({
  value,
  mt,
  expanded,
  handleExpand,
  total,
}) {
  return (
    <div
      onClick={handleExpand}
      style={{
        display: "flex",
        flexDirection: "row",
        marginTop: mt ? mt : 0,
        cursor: "pointer",
      }}
    >
      <div
        style={{
          flex: 4,
          // backgroundColor: "blue"
        }}
      >
        <Stack direction={"row"} spacing={1}>
          <Typography variant="body1">{value} Conversations</Typography>
          <div style={{ marginTop: 2 }}>
            <Avatar
              sx={{ width: 18, height: 18, bgcolor: localTheme.userListBG }}
            >
              <Typography
                variant="subtitle1"
                style={{ fontSize: "10px", color: "black" }}
              >
                {total}
              </Typography>
            </Avatar>
          </div>
        </Stack>
      </div>
      <div
        style={{
          flex: 1,
          //   backgroundColor: "red",
        }}
      >
        <div
          style={{
            // backgroundColor: "violet",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div style={{ marginLeft: "auto" }}>
            {expanded ? (
              <KeyboardArrowUp sx={{ width: 20, height: 20 }} />
            ) : (
              <KeyboardArrowDown sx={{ width: 20, height: 20 }} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConversationTitleComponent;
