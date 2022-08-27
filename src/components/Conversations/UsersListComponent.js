import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserListItemComponent from "./shared/UserListItemComponent";

function UsersListComponent({ users }) {
  const selected = useSelector((state) => state.selected);
  const dispatch = useDispatch();
  //   console.log(selected);

  const changeSelected = (name) => {
    dispatch({ type: "UPDATE", payload: name });
  };

  return (
    <>
      {users.map((v) => (
        <div key={v.name}>
          <UserListItemComponent
            selected={v.name === selected}
            avatar={v.img}
            name={v.name}
            unread={v.unread}
            handleSelected={changeSelected}
          />
        </div>
      ))}
    </>
  );
}

export default UsersListComponent;
