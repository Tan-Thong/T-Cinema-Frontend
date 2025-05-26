import TicketModel from "./TicketModel";
import UserModel from "./UserModel";

class BookingModel {
    bookingId : number;
    user : UserModel;
    bookingDate : string;
    totalPrice : number;
    ticketsResponse : TicketModel[];
    paymentName : string;
   
    constructor(bookingId : number,
    user : UserModel,
    bookingDate : string,
    totalPrice : number,
    ticketsResponse : TicketModel[],
    paymentName : string,) {
            this.bookingId = bookingId;
            this.user = user;
            this.bookingDate = bookingDate;
            this.totalPrice = totalPrice;
            this.ticketsResponse = ticketsResponse;
            this.paymentName = paymentName;
        }
}

export default BookingModel;