import { AttachFileOutlined, Send } from "@mui/icons-material";
import { Button, Grid, Paper, TextField } from "@mui/material";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { localTheme } from "../../../localTheme/localTheme";

function InputComponent() {
  const [messageText, setMessageText] = useState("");
  const dispatch = useDispatch();
  const textRef = useRef(null);

  const handleInput = (e) => {
    setMessageText(e.target.value);
  };
  let currentState = useSelector((state) => state.data);
  let selectedUser = useSelector((state) => state.selected);

  const sendMessage = () => {
    const currentUserState = currentState.users.filter(
      (v) => v.name === selectedUser
    );
    const userIndex = currentState.users.indexOf(currentUserState[0]);
    currentState.users[userIndex].messages.push({
      id: "1",
      content: messageText,
      time: "Just now",
      fromUser: true,
    });
    setTimeout(() => {
      currentState.users[userIndex].messages.push({
        id: "1",
        content: "Hi There!",
        time: "Just now",
        fromUser: false,
      });
      dispatch({ type: "ADDMSG", payload: currentState });
    }, 1000);

    setTimeout(() => {
      currentState.users[userIndex].messages.push({
        id: "1",
        content: "Nice Meeting you..",
        time: "Just now",
        fromUser: false,
      });
      dispatch({ type: "ADDMSG", payload: currentState });
    }, 2000);
    textRef.current.value = "";
    dispatch({ type: "ADDMSG", payload: currentState });
  };

  return (
    <div
      style={{
        height: 80,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,

        elevation: 1,
      }}
    >
      <Paper
        elevation={0}
        style={{
          padding: 10,
          marginLeft: 10,
          marginRight: 10,
          borderRadius: 10,
        }}
      >
        <Grid container>
          <Grid item sm={1} xs={1} md={1}>
            <div
              style={{
                //   backgroundColor: "red",
                height: 35,
              }}
            >
              <Grid container justifyContent={"center"}>
                <Grid
                  item
                  style={{ transform: "rotate(20deg)", cursor: "pointer" }}
                >
                  <AttachFileOutlined
                    sx={{
                      height: 20,
                      width: 20,
                      marginTop: 1,
                      color: "gray",
                    }}
                  />
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item sm={9} xs={7} md={9}>
            <div>
              <TextField
                inputRef={textRef}
                onChange={handleInput}
                fullWidth
                hiddenLabel
                placeholder="Enter your message here"
                variant="outlined"
                size="small"
                inputProps={{
                  style: {
                    fontSize: 12,
                    borderColor: "red",
                  },
                }}
                //   inputProps={}
              />
            </div>
          </Grid>
          <Grid item sm={2} xs={1} md={1}>
            <Button
              style={{
                height: 35,
                marginLeft: 15,
                backgroundColor: localTheme.buttonBG,
                fontSize: 12,
                textTransform: "capitalize",
                fontWeight: "bold",
                borderRadius: 5,
                //   marginLeft: 5
              }}
              variant="contained"
              endIcon={<Send sx={{ width: 10, height: 10, marginTop: -0.5 }} />}
              onClick={sendMessage}
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default InputComponent;
