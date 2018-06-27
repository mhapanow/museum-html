export class UserModel {
    constructor(
        public identifier: string,
        public lastLogin: any,
        public firstname: string,
        public role: string,
        public tokenValidity: string,
        public systemDateTime: any,
        public login: string,
        public email: string,
        public lastname: string,
        public password: string
    ) { }
}
