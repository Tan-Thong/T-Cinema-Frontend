import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./profilePage.css"
import UserModel from "../../models/UserModel";
import { getMyInfo } from "../../api/UserAPI";
import BookingModel from "../../models/BookingModel";
import { getBookings, getBookingsByUseId } from "../../api/BookingAPI";

const ProfilePage: React.FC = () => {
    const navigate = useNavigate();
    const [myInfo, setMyInfo] = useState<UserModel | null>();
    const [bookings, setBookings] = useState<BookingModel[]>([]);
    const token = localStorage.getItem("token");
    const [showModal, setShowModal] = useState(false);
    const [selectedBooking, setSelectedBooking] = useState<BookingModel | null>(null);

    const openModal = (booking: BookingModel) => {
        setSelectedBooking(booking);
        setShowModal(true);
    };


    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    handleLogout();
                    return;
                }

                const response = await fetch("http://localhost:8080/users/myInfo", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch user info");
                }

                const resJson = await response.json();
                const result = resJson.result;
                setMyInfo(result);
            } catch (error) {
                console.error("Error fetching user info:", error);
                handleLogout();
            }
        };

        fetchData();
    }, []);


    useEffect(() => {
        if (myInfo?.userId) {
            getBookingsByUseId(myInfo.userId)
                .then(setBookings)
                .catch(error => console.error(error));
        }
    }, [myInfo]);


    return (
        <div className="profile-wrapper">
            <div className="profile-content">
                <div className="profile">
                    <h4 className="mb-5">THÔNG TIN CÁ NHÂN</h4>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "calc(100% - 80px)" }}>
                        <div className="info-wrapper">
                            <div className="info-section mb-4">
                                <p className="label mb-2"><b>HỌ TÊN:</b></p>
                                <input type="text" value={myInfo?.fullName} readOnly />
                            </div>
                            <div className="info-section mb-4">
                                <p className="label mb-2"><b>SỐ ĐIỆN THOẠI:</b></p>
                                <input type="text" value={myInfo?.phoneNumber} readOnly />
                            </div>
                            <div className="info-section mb-4">
                                <p className="label mb-2"><b>EMAIL:</b></p>
                                <input type="text" value={myInfo?.email || ""} readOnly />
                            </div>
                            <div className="info-section mb-4">
                                <p className="label mb-2"><b>MẬT KHẨU:</b></p>
                                <input type="password" value={myInfo?.password || "oooooooooo"} readOnly />
                            </div>
                        </div>

                        <button type="button" className="btn btn-success" style={{ width: "100%" }} onClick={handleLogout}>
                            Đăng xuất
                        </button>
                    </div>
                </div>
                <div className="history">
                    <h4 className="mb-5">LỊCH SỬ MUA VÉ</h4>
                    <div className="table-container">
                        <table className="table table-striped">
                            <thead>
                                <tr className="title">
                                    <th>ID</th>
                                    <th>NGƯỜI MUA</th>
                                    <th>NGÀY MUA</th>
                                    <th>TỔNG TIỀN</th>
                                    <th>XEM THÊM</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    bookings.map((booking) => (
                                        <tr>
                                            <th>{booking.bookingId}</th>
                                            <td>{booking.user.email}</td>
                                            <td>{booking.bookingDate}</td>
                                            <td>{booking.totalPrice}</td>
                                            <td><button className="btn btn-primary" onClick={() => openModal(booking)}>Chi tiết</button></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>

                        {showModal && selectedBooking && (
                            <div className="modal-backdrop">
                                <div className="modal-content">
                                    <button className="modal-close-button" onClick={() => setShowModal(false)}>×</button>
                                    <h5>Chi tiết vé - Mã đặt vé #{selectedBooking.bookingId}</h5>
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>ID VÉ</th>
                                                <th>TÊN RẠP</th>
                                                <th>TÊN PHÒNG</th>
                                                <th>TÊN PHIM</th>
                                                <th>THỜI GIAN</th>
                                                <th>SỐ GHẾ</th>
                                                <th>GIÁ VÉ</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {selectedBooking.ticketsResponse.map((ticket) => (
                                                <tr key={ticket.ticketId}>
                                                    <td>{ticket.ticketId}</td>
                                                    <td>{ticket.cinemaName}</td>
                                                    <td>{ticket.roomName}</td>
                                                    <td>{ticket.movieName}</td>
                                                    <td>{ticket.time}</td>
                                                    <td>{ticket.seatRow + ticket.seatColumn}</td>
                                                    <td>{ticket.ticketPrice}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}


                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;
