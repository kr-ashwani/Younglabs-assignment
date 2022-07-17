import React from 'react';
import './UserDetail.css';
import UserAvatar from '../UserAvatar/UserAvatar';
import UserList from '../UserList/UserList';
import useUsers from '../../hooks/useUsers';
import SelectedUserInfo from '../SelectedUserInfo/SelectedUserInfo';

const UserDetail = () => {
  const { users } = useUsers();
  return users.length ? (
    <>
      <SelectedUserInfo></SelectedUserInfo>
      <UserList></UserList>
    </>
  ) : (
    <p>loading....</p>
  );
};

export default UserDetail;
