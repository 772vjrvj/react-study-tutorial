import {useDispatch, useSelector} from "react-redux";
import {useCallback} from "react";
import {changeField, initializeForm, login, register} from "../../modules/auth";
import {check} from "../../modules/user";

export default function useAuth(type){

  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: type === 'login'? auth.login : auth.register,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  const dispatch = useDispatch();
  const OnRegister = useCallback((fields) => dispatch(register(fields)),[dispatch]);
  const OnChangeField = useCallback((fields) => dispatch(changeField(fields)),[dispatch]);
  const Onlogin = useCallback((fields) => dispatch(login(fields)),[dispatch]);
  const OnInitializeForm = useCallback((data) => dispatch(initializeForm(data)),[dispatch]);
  const OnCheck = useCallback(() => dispatch(check()),[dispatch]);
  return {
    form, auth, authError, user, OnChangeField, Onlogin, OnInitializeForm, OnCheck, OnRegister
  }
}

