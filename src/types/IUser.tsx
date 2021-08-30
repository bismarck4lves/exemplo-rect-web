export interface IUser {
    id: number;
    name: string;
    permissao: IPermitions;
}
    
interface IPermitions {
    nome: string;
    can_edit: number;
}

export interface IUserLoggedIn {
    user: IUser;
    credentials: ICredentials;
}

export interface ICredentials {
    access_token: string;
    token_type: string;
    expires_in: boolean;
}