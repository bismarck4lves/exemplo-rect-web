import { IUser } from "@/types/IUser";


const saveUser = (user: IUser) => localStorage.setItem('@AUTH:user', JSON.stringify(user));
const getUser = (): IUser => {
    const user = localStorage.getItem('@AUTH:user');
    return user ? JSON.parse(user) : null;
};
const removeUser = () => localStorage.removeItem('@AUTH:user');

const saveToken = (token: string) => localStorage.setItem('@AUTH:token', token);
const getToken = () => localStorage.getItem('@AUTH:token');
const removeToken = () => localStorage.removeItem('@AUTH:token');


export {
    saveUser,
    getUser,
    removeUser,
    saveToken,
    getToken,
    removeToken
};