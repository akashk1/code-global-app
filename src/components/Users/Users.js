import React, { useEffect, useState } from "react";
import axios from "axios";
import User from "../User/User";
import { USERS_API } from "../../Api";
const Users = (props) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get(USERS_API).then((jsonData) => {
      setUsers(jsonData.data);
    });
  }, []);
  const handleSelected = (selected) => {
    props.getSelected(selected);
  };
  return (
    <div>
      <User users={users} getSelected={handleSelected} />
    </div>
  );
};

export default Users;
