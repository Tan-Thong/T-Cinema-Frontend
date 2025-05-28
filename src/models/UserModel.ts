class UserModel {
    userId : number;
    email : string;
    phoneNumber : string;
    fullName : string;
    password : string;
    active : boolean;
    roles : string[];

    constructor(userId : number, email : string, phoneNumber : string, fullName : string, active : boolean, password : string, roles : string[]) {
        this.userId =  userId;
        this.email =  email;
        this.phoneNumber =  phoneNumber;
        this.fullName =  fullName;
        this.password =  password;
        this.active = active;
        this.roles = roles;
    }
}

export default UserModel;