import { Stack } from "@mui/material";

import BasicMetircesComponent from "./BasicMetricesComponent";
import GraphComponent from "./GraphComponent";

function UserMetricesComponent() {
  return (
    <Stack direction={"column"} pb={1}>
      <BasicMetircesComponent />
      <GraphComponent />
    </Stack>
  );
}

export default UserMetricesComponent;
