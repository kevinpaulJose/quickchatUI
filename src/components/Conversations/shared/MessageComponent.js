import { Avatar, Stack, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { localTheme } from "../../../localTheme/localTheme";

function MessageComponent({ messageText, reversed, avatar, time }) {
  const divRef = useRef(null);
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  // useEffect(() => {
  //   divRef.current.scrollTo();
  // }, [messageText]);
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  return (
    <div
      ref={divRef}
      style={{
        display: "flex",
        flexDirection: reversed ? "row-reverse" : "row",
        width: "100%",
      }}
    >
      <div
        style={{
          flex: 1,
          // backgroundColor: "red"
          marginLeft: reversed ? 0 : 10,
        }}
      >
        <Avatar
          src={avatar}
          sx={{
            width: 46,
            height: 46,
            bgcolor: localTheme.profileBG,
            // marginLeft: reversed ? 0 : 2,
          }}
        />
      </div>
      <div
        style={{
          flex: 6,
          //   background: "green",
          alignSelf: "center",
          //   display: "inline-block",
        }}
      >
        <Stack direction={reversed ? "row-reverse" : "row"}>
          <span
            style={{
              backgroundColor: reversed ? localTheme.messageBG : "white",
              padding: 15,
              borderRadius: 10,
              marginLeft: reversed ? 0 : dimensions.width < 1450 ? 5 : -10,
              marginRight: reversed ? 10 : 0,
              color: reversed ? "white" : "gray",
              fontSize: 10,
            }}
          >
            {messageText}
          </span>
        </Stack>
        <div
          style={{
            // backgroundColor: "red",
            textAlign: reversed ? "right" : "left",
          }}
        >
          <Typography fontSize={10} color={"#c4c2c2"} marginTop={0.5}>
            {time}
          </Typography>
        </div>
        {/* <div style={{ backgroundColor: "black" }}> */}

        {/* </div> */}
      </div>
      <div
        style={{
          flex: 3,
          // background: "violet"
        }}
      ></div>
    </div>
  );
}

export default MessageComponent;
