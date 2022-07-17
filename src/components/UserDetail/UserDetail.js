import React from 'react';
import './UserDetail.css';
import UserList from '../UserList/UserList';
import useUsers from '../../hooks/useUsers';
import SelectedUserInfo from '../SelectedUserInfo/SelectedUserInfo';
import Loading from '../Loading/Loading';

const UserDetail = () => {
  const { users } = useUsers();
  return users.length ? (
    <>
      <SelectedUserInfo></SelectedUserInfo>
      <UserList></UserList>
    </>
  ) : (
    <div className="pageLoading">
      <Loading></Loading>
    </div>
  );
};

export default UserDetail;
