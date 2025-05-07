import "./registerpage.css"
import "./../login-page/loginpage.css"
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
function RegisterPage() {
    const navigate = useNavigate(); // khai báo để dùng navigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Ngăn reload trang

        // Kiểm tra mật khẩu
        if (password !== confirmPassword) {
            alert("Mật khẩu không khớp!");
            return;
        }

        const payload = {
            email,
            password,
        };

        try {
            const response = await fetch("http://localhost:8080/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                const data = await response.json();
                alert("Đăng ký thành công! Chuyển hướng đến trang đăng nhập...");
                setTimeout(() => {
                    navigate("/login");
                }, 1500);
            } else {
                const errorData = await response.json();
                alert(errorData.message || "Đăng ký thất bại!");
            }
        } catch (error) {
            console.error("Lỗi kết nối server", error);
            alert("Không thể kết nối đến server!");
        }
    };

    return (
        <div className="login-content">
            <a href="/"><img id="logo" src="./../images/logo/cinema-logo-v5.png" alt="" /></a>
            <div className="cover">
                <div className="form-wrapper">
                    <form onSubmit={handleSubmit}>
                        <p className="form-header">Đăng ký tài khoản</p>
                        <p className="form-sub-header">Vui lòng điền các thông tin bên dưới</p>
                        <div className="mb-3">
                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" value={email}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Mật khẩu" value={password}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Nhập lại mật khẩu" value={confirmPassword}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)} />
                        </div>
                        <button type="submit" className="btn form-control mb-3">Đăng ký</button>
                        <a href="/login" className="cancel-btn mb-3">Quay lại</a>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage;