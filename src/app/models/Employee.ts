export interface Employee {
    id?: number;
    firstName: string;
    username?: string;
    password?: string;
    disabled: boolean;
    roles?: [{
        role: string;
    }];
}
