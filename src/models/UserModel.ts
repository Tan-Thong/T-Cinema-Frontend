class UserModel {
    email : string;
    active : boolean;
    roles : string[];

    constructor(email : string, active : boolean, roles : string[]) {
        this.email =  email;
        this.active = active;
        this.roles = roles;
    }
}

export default UserModel;