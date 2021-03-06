import { IUser } from "@/types/IUser";
import React, {
  useCallback,
  useContext,
  useState,
  useEffect
} from 'react';
import { signIn, signOut } from "../services/auth";
import { ISingIn } from "../types/auth_d";
import {
  AuthContextData,
  AuthProviderProps,
  AuthState
} from '../types/auth_d';

import { saveUser, removeUser, getUser, saveToken } from '@/services/storage';

export const AuthContext = React.createContext<AuthContextData>({} as AuthContextData);


const initialState: AuthState = {
  user: null,
  isSessionExpired: false,
};

export const AuthProvider: React.FC<AuthProviderProps> = ({
  children
}: AuthProviderProps) => {

  const [loadding, setLoading] = useState(false);


  useEffect(() => {
    const user = getUser();
    if (user)
      processLogin(user);
  }, []);

  const [state, setState] = useState<AuthState>(() => ({} as AuthState));

  const processLogin = (user: IUser) => {
    setState({ user, isSessionExpired: false });
  };

  const processLogout = () => {
    setState(initialState);
  };
  const dispatchLogin = useCallback(
    async ({ username, password }: ISingIn) => {

      setLoading(true);

      const { user, credentials } = await signIn({ username, password });

      saveUser(user);

      saveToken(credentials?.access_token);

      setTimeout(() => {
        processLogin(user);
        setLoading(false);
      }, 2000);

    },[]
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
          loadding,
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
