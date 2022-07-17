import useUsers from '../../hooks/useUsers';
import UserListCard from '../UserListCard/UserListCard';
import './UserList.css';

const UserList = () => {
  const { users } = useUsers();

  return (
    <div className="userList">
      {users.map((elem, id) => (
        <UserListCard key={elem.email} userInfo={{ ...elem, id }} />
      ))}
    </div>
  );
};

export default UserList;
