import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PaymentReturnPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const responseCode = params.get("vnp_ResponseCode");

        if (responseCode === "00") {
            // Thanh toán thành công
            const selectedSeats = JSON.parse(sessionStorage.getItem("selectedSeats") || "[]");
            const showtimeId = sessionStorage.getItem("showtimeId");
            const totalPrice = sessionStorage.getItem("totalPrice");
            const token = localStorage.getItem("token");

            const createBooking = async () => {
                try {
                    // Lấy thông tin người dùng
                    const userInfoResponse = await fetch("https://t-cinema-backend.onrender.com/users/myInfo", {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    const userInfo = (await userInfoResponse.json()).result;

                    // Tạo request đặt vé
                    const bookingRequest = {
                        userId: userInfo.email,
                        showtimeId: Number(showtimeId),
                        seatIds: selectedSeats.map((seat: any) => seat.seatId),
                        totalPrice: Number(totalPrice),
                        paymentMethod: "VNPAY",
                    };

                    const res = await fetch("https://t-cinema-backend.onrender.com/bookings", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                        body: JSON.stringify(bookingRequest),
                    });

                    if (!res.ok) {
                        throw new Error("Đặt vé thất bại");
                    }

                    alert("Thanh toán & đặt vé thành công!");
                    sessionStorage.clear();
                    navigate("/");
                } catch (err) {
                    console.error("Lỗi tạo booking:", err);
                    alert("Lỗi khi tạo hóa đơn sau thanh toán!");
                    navigate("/");
                }
            };

            createBooking();
        } else {
            alert("Thanh toán thất bại hoặc bị hủy");
            navigate("/");
        }
    }, [navigate]);

    return (
        <div style={{ textAlign: "center", marginTop: "5rem" }}>
            <h2>🔁 Đang xử lý thanh toán...</h2>
        </div>
    );
};

export default PaymentReturnPage;
