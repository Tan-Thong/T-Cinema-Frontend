import UserModel from "../models/UserModel";
import MyRequest from "./MyRequest";

export async function getMyInfo(): Promise<UserModel> {
    const endPoint: string = "https://t-cinema-backend.onrender.com/users/myInfo";

    const response = await MyRequest(endPoint);
    const myResponse = response.result;

    return {
        userId: myResponse.userId,
        email: myResponse.email,
        phoneNumber: myResponse.phoneNumber,
        fullName: myResponse.fullName,
        password: myResponse.password,
        active: myResponse.active,
        roles: myResponse.roles,
    };
}