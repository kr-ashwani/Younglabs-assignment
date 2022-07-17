import React, { useEffect, useState } from 'react';

const UsersContext = React.createContext();

function UsersProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState();
  useEffect(() => {
    async function getUserList() {
      try {
        let response = await fetch(
          'https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=%2020'
        );
        if (!response.ok) throw new Error('something went wrong');
        response = await response.json();
        console.log(response.results);
        setUsers(response.results);
        setSelectedUser(response.results[0]);
      } catch (err) {
        console.log(err.message);
      }
    }
    getUserList();
  }, [setUsers]);

  const value = {
    users,
    setSelectedUser,
    selectedUser,
  };

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
}

export { UsersContext, UsersProvider };
