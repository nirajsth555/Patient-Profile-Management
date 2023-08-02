export interface LoginInputType {
    email: string;
    password: string;
}

export interface LoginResponse {
    access_token: string;
    // name: string,
    // email: string,
    refresh_token: string
}