import { IUser } from "@/types/IUser";
import { ReactNode } from "react";

export interface ISingIn {
    username: string;
    password: string;
}

export interface AuthState {
    user: IUser | null;
    isSessionExpired: boolean;
}

export interface AuthDispatch {
    loadding: boolean;
    dispatchLogin: (payload: ISingIn) => void;
    dispatchLogout: () => Promise<void>;
}

export type AuthContextData = [AuthState, AuthDispatch];

export interface AuthProviderProps {
    children: ReactNode;
}

export interface IToken {
    token: string;
}