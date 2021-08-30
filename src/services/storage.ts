import { IUser } from "@/types/IUser";


const saveUser = (user: IUser) => localStorage.setItem('@AUTH:user', JSON.stringify(user));
const getUser = ():IUser => {
    const user = localStorage.getItem('@AUTH:user');
    return user ? JSON.parse(user) : null;
};
const removeUser = () => localStorage.removeItem('@AUTH:user');

export {
    saveUser,
    getUser,
    removeUser
};