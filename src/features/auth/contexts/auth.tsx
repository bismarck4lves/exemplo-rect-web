import { IUser } from "@/types/IUser";
import React, {
  useCallback,
  useContext,
  useState,
  useEffect
} from 'react';
import { signIn, signOut } from "../services/auth";
import { ISingIn } from "../types/auth_d";
// import { useHistory } from 'react-router-dom';
import {
  AuthContextData,
  AuthProviderProps,
  AuthState
} from '../types/auth_d';

import { saveUser, removeUser, getUser } from '@/services/storage';

const AuthContext = React.createContext<AuthContextData>({} as AuthContextData);


const initialState: AuthState = {
  user: null,
  isSessionExpired: false,
};

export const AuthProvider: React.FC<AuthProviderProps> = ({
  children
}: AuthProviderProps) => {
  const user = getUser();

  // const history = useHistory();

  useEffect(() => {
    if (user)
      processLogin(user);
  });

  const [state, setState] = useState<AuthState>(() => ({} as AuthState));

  const processLogin = (user: IUser) => {
    setState({ user, isSessionExpired: false });
  };

  const processLogout = () => {
    setState(initialState);
  };
  const dispatchLogin = useCallback(
    async ({ username, password }: ISingIn) => {
      const { user } = await signIn({ username, password });
      saveUser(user);
      processLogin(user);
    },
    [],
  );

  const dispatchLogout = useCallback(async () => {
    removeUser();
    await signOut();
    processLogout();
  }, []);

  return (
    <AuthContext.Provider
      value={[
        state,
        {
          dispatchLogin,
          dispatchLogout
        },
      ]}
    >
      {children}
    </AuthContext.Provider>
  );

};

export function useAuthContext(): AuthContextData {
  return useContext(AuthContext);
}
