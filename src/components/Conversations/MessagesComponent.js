import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import InputComponent from "./shared/InputComponent";
import MessageComponent from "./shared/MessageComponent";

function MessagesComponent() {
  const currentUser = useSelector((state) => state.selected);
  const user = useSelector((state) =>
    state.data.users.filter((v) => v.name === state.selected)
  );

  const parentRef = useRef(null);
  useEffect(() => {
    const scroll =
      parentRef.current.scrollHeight - parentRef.current.clientHeight;
    parentRef.current.scrollTo(0, scroll);
    console.log(user);
  }, [user]);

  useEffect(() => {
    parentRef.current.scrollIntoView();
  }, [currentUser]);

  // console.log(user[0].messages);
  return (
    <div>
      <div
        ref={parentRef}
        style={{
          padding: 10,
          flex: 1,
          //   backgroundColor: "violet",
          height: "46.7667em",
          overflowY: "auto",
        }}
      >
        {user[0].messages.map((v, _) => (
          <div key={v.id} style={{ marginTop: 12 }}>
            <MessageComponent
              messageText={v.content}
              reversed={v.fromUser}
              avatar={
                v.fromUser
                  ? require("../../assets/static/profileImg.png")
                  : user[0].img
              }
              time={v.time}
              parentRef={parentRef}
            />
          </div>
        ))}
      </div>
      <InputComponent />
    </div>
  );
}

export default MessagesComponent;
