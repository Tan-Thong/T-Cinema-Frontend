import UserModel from "../models/UserModel";
import MyRequest from "./MyRequest";

export async function getMyInfo(): Promise<UserModel> {
    const endPoint: string = "http://localhost:8080/users/myInfo";

    const response = await MyRequest(endPoint);
    const myResponse = response.result;

    return {
            email: myResponse.email,
            active: myResponse.active,
            roles: myResponse.roles,
        };
}