import React from 'react';
import useUsers from '../../hooks/useUsers';
import UserAvatar from '../UserAvatar/UserAvatar';
import './SelectedUserInfo.css';

const SelectedUserInfo = () => {
  const { selectedUser } = useUsers();
  const { title, first, last } = selectedUser.name;
  const userName = title + ' ' + first + ' ' + last;
  const { country, postcode, state, timezone, street } = selectedUser.location;
  return (
    <div className="userDetail">
      <div className="userLogo">
        <UserAvatar imgSrc={selectedUser.picture.large} size="128px" />
      </div>
      <div className="userInfo">
        <p className="userName">{userName}</p>
        <div className="userAddress">
          <div>
            <span className="streetNum">{street.number}</span>, {street.name},
            Born, {state}, <h4 className="country"> {country}</h4>, {postcode}
          </div>
          <p>
            {timezone.offset} - {timezone.description}
          </p>
        </div>
        <p className="gender">{selectedUser.gender}</p>
      </div>
    </div>
  );
};

export default SelectedUserInfo;
