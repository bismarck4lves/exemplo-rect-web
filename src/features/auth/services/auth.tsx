import api from '@/services/api';
import { ISingIn } from "../types/auth_d";
import { IUserLoggedIn } from "@/types/IUser";


export const signIn = (payload: ISingIn): Promise<IUserLoggedIn> => {
    return api.post<IUserLoggedIn>('auth/login', payload).then((res) => res.data);
};

export const signOut = () => {
    return api.post('auth/logout', {}).then(res => res.data);
};