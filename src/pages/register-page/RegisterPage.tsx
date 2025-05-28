import "./registerpage.css";
import "./../login-page/loginpage.css";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [fullName, setFullName] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrors({}); // reset lỗi cũ

        if (password !== confirmPassword) {
            setErrors({ confirmPassword: "Mật khẩu không khớp!" });
            return;
        }

        const payload = {
            email,
            password,
            fullName,
            phoneNumber
        };

        try {
            const response = await fetch("http://localhost:8080/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (response.ok) {
                alert("Đăng ký thành công! Chuyển hướng đến trang đăng nhập...");
                setTimeout(() => {
                    navigate("/login");
                }, 1500);
            } else {
                if (data.code === 1001 && data.result) {
                    setErrors(data.result); // Gán lỗi từ backend vào state errors
                } else {
                    alert(data.message || "Đăng ký thất bại!");
                }
            }
        } catch (error) {
            console.error("Lỗi kết nối server", error);
            alert("Không thể kết nối đến server!");
        }
    };

    return (
        <div className="login-content">
            <a href="/"><img id="logo" src="./../images/logo/cinema-logo-v5.png" alt="Logo" /></a>
            <div className="cover">
                <div className="form-wrapper">
                    <form onSubmit={handleSubmit}>
                        <p className="form-header">Đăng ký tài khoản</p>
                        <p className="form-sub-header">Vui lòng điền các thông tin bên dưới</p>

                        <div className="mb-3">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && <div className="text-danger">{errors.email}</div>}
                        </div>

                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Họ và tên"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                            />
                            {errors.fullName && <div className="text-danger">{errors.fullName}</div>}
                        </div>

                        <div className="mb-3">
                            <input
                                type="tel"
                                className="form-control"
                                placeholder="Số điện thoại"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                            {errors.phoneNumber && <div className="text-danger">{errors.phoneNumber}</div>}
                        </div>

                        <div className="mb-3">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Mật khẩu"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {errors.password && <div className="text-danger">{errors.password}</div>}
                        </div>

                        <div className="mb-3">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Nhập lại mật khẩu"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            {errors.confirmPassword && <div className="text-danger">{errors.confirmPassword}</div>}
                        </div>

                        <button type="submit" className="btn form-control mb-3">Đăng ký</button>
                        <a href="/login" className="cancel-btn mb-3">Quay lại</a>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
