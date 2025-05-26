import BookingModel from "../models/BookingModel";
import MyRequest from "./MyRequest";


export async function getBookings() : Promise<BookingModel[]> {
    const result : BookingModel[] = [];
    // EndPoint
    const endPoint : string = "http://localhost:8080/bookings";

    // Call function Request
    const response = await MyRequest(endPoint);
    const myResponse = response.result;

    // const responseData = response._embedded.products;
    console.log(response)

    for (const key in myResponse) {
        result.push({
            bookingId : myResponse[key].bookingId,
            user : myResponse[key].user,
            bookingDate : myResponse[key].bookingDate,
            totalPrice : myResponse[key].totalPrice,
            ticketsResponse : myResponse[key].ticketsResponse,
            paymentName : myResponse[key].paymentName,
        });
    }

    return result;
}