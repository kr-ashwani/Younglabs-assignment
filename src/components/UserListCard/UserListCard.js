import React, { useEffect, useRef } from 'react';
import useUsers from '../../hooks/useUsers';
import './UserListCard.css';

const UserListCard = ({ userInfo }) => {
  const userName =
    userInfo.name.title + ' ' + userInfo.name.first + ' ' + userInfo.name.last;

  const userCardRef = useRef();
  const { users, setSelectedUser } = useUsers();

  useEffect(() => {
    function selectUser(e) {
      const filteredUser = users.filter(
        (elem) => elem.email === e.currentTarget.lastChild.dataset.email
      );
      setSelectedUser(filteredUser[0]);
      Array.from(e.currentTarget.parentNode.children).forEach((elem) =>
        elem.classList.remove('selected')
      );
      e.currentTarget.classList.add('selected');
    }
    userCardRef.current.addEventListener('click', selectUser);
    const mem = userCardRef.current;
    return () => mem.removeEventListener('click', selectUser);
  }, [setSelectedUser, users]);

  return (
    <div
      ref={userCardRef}
      className={`userCard ${userInfo.id === 0 ? 'selected' : ''}`}>
      <p>
        <span>{userInfo.gender}</span>-<span>NL</span>
      </p>
      <p className="userName">{userName}</p>
      <p data-email={`${userInfo.email}`}>
        <a href={`mailto:${userInfo.email}`}>{userInfo.email}</a>
      </p>
    </div>
  );
};

export default UserListCard;
