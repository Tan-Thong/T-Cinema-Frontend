import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./profilePage.css"
import UserModel from "../../models/UserModel";
import { getMyInfo } from "../../api/UserAPI";

const ProfilePage: React.FC = () => {
    const navigate = useNavigate();
    const [myInfo, setMyInfo] = useState<UserModel | null>();
    const token = localStorage.getItem("token");

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


    return (
        <div className="profile-wrapper">
            <div className="profile-content">
                <div className="profile">
                    <h4 className="mb-5">THÔNG TIN CÁ NHÂN</h4>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "calc(100% - 80px)" }}>
                        <div className="info-wrapper">
                            <div className="info-section mb-4">
                                <p className="label mb-2"><b>HỌ TÊN:</b></p>
                                <input type="text" value={"Lê Văn Tấn Thông"} readOnly />
                            </div>
                            <div className="info-section mb-4">
                                <p className="label mb-2"><b>SỐ ĐIỆN THOẠI:</b></p>
                                <input type="text" value={"0348807764"} readOnly />
                            </div>
                            <div className="info-section mb-4">
                                <p className="label mb-2"><b>EMAIL:</b></p>
                                <input type="text" value={myInfo?.email || ""} readOnly />
                            </div>
                            <div className="info-section mb-4">
                                <p className="label mb-2"><b>MẬT KHẨU:</b></p>
                                <input type="password" value={"oooooooooo"} readOnly />
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
                                <tr>
                                    <th>1</th>
                                    <td>Lê Văn Tấn Thông</td>
                                    <td>26/05/2025</td>
                                    <td>240.000 đ</td>
                                    <td><button>Chi tiết</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;
