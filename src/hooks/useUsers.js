import { useContext } from 'react';
import { UsersContext } from '../context/UsersContext';

function useUsers() {
  return useContext(UsersContext);
}

export default useUsers;
