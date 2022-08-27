import { Avatar, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { localTheme } from "../../../localTheme/localTheme";

function UserListItemComponent({
  selected,
  unread,
  avatar,
  name,
  handleSelected,
}) {
  const [hovered, setHovered] = useState(false);

  const handleHover = (v) => {
    setHovered(v);
  };

  return (
    <div
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      style={{
        backgroundColor:
          (selected && localTheme.userListBG) ||
          (hovered && localTheme.userListBGHover),
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 10,
        borderRadius: 10,
        cursor: "pointer",
      }}
      onClick={() => handleSelected(name)}
    >
      <Stack direction={"row"} spacing={2}>
        <Avatar
          src={avatar}
          sx={{
            width: 46,
            height: 46,
            bgcolor: localTheme.profileBG,
            resize: "10",
          }}
        />
        <Typography alignSelf={"center"}>{name}</Typography>
        {parseInt(unread) > 0 && (
          <div
            style={{
              flex: 1,
              marginTop: 12,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div style={{ marginLeft: "auto", paddingRight: 20 }}>
                <div
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: "red",
                    alignSelf: "center",
                    borderRadius: 10,
                  }}
                >
                  <Typography
                    color={"white"}
                    align="center"
                    style={{ fontSize: 10, paddingTop: 2, fontWeight: "bold" }}
                  >
                    {unread}
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        )}
      </Stack>
    </div>
  );
}

export default UserListItemComponent;
