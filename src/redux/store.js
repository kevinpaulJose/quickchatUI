import { localData } from "../cache/localData";

function reducer(
  state = { data: localData, selected: localData.users[0].name },
  action
) {
  switch (action.type) {
    case "LOAD":
      return state;
    case "UPDATE":
      return { ...state, selected: action.payload };
    case "ADDMSG":
      return { data: action.payload, ...state };
    default:
      return state;
  }
}

export default reducer;
