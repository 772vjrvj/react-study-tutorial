import {useDispatch, useSelector} from 'react-redux';
import {useCallback} from "react";
import {logout} from "../../modules/user";

export default function useHeader(){

  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const dispatch = useDispatch();
  const UseLogout = useCallback(() => dispatch(logout()),[dispatch]);

  return {
    user, UseLogout
  }
}

