export interface User {
    id?: number;
    username: string;
    password: string;
    enabled?: boolean;
    authorities?: Authority[];
}

export interface Authority {
    role: Role;
}

export enum Role {
    ROLE_ADMIN = 'ROLE_ADMIN',
    ROLE_USER = 'ROLE_USER'
}

export interface UserAuthResp {
    token: string;
    user: User;
}