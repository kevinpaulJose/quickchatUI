import { KeyboardArrowUp } from "@mui/icons-material";
import { Avatar, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import { useSelector } from "react-redux";
import ConversationTitleComponent from "./shared/ConversationTitleComponent";
import UsersListComponent from "./UsersListComponent";

function ConversationsListComponent() {
  const [activeExpanded, setActiveExpanded] = useState(true);
  const toggleActiveExpand = () => {
    setActiveExpanded(!activeExpanded);
  };
  const activeUsers = useSelector((state) =>
    state.data.users.filter((e) => e.type === "active")
  );
  // console.log(activeUsers);

  return (
    <div style={{ padding: 10 }}>
      <Stack>
        <ConversationTitleComponent
          value={"Active"}
          expanded={activeExpanded}
          handleExpand={toggleActiveExpand}
          total={activeUsers.length}
        />
        {activeExpanded && <UsersListComponent users={activeUsers} />}

        <ConversationTitleComponent value={"Archived"} mt={20} total={7} />
      </Stack>
    </div>
  );
}

export default ConversationsListComponent;
