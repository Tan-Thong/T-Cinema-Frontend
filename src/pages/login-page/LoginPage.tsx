import { FormEvent, useState } from "react";
import "./loginpage.css"
import { useLocation, useNavigate } from "react-router-dom";

function LoginPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const from = location.state?.from?.pathname || "/";

    const handleSubmit = async (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const payload = {
            email, password
        }

        try {
            const response = await fetch("http://localhost:8080/auth/token", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload)
            });

            const data = await response.json();
            const token = data.result.token;
            
            if (token) {
                localStorage.setItem('token', token);
                alert(token);
                setTimeout(() => {
                    navigate(from, { replace: true });
                }, 1500);
            } else {
                const errorData = await response.json();
                alert(errorData.message || "Đăng ký thất bại!");
            }
        } catch (error) {
            
        }
    };

    return (
        <div className="login-content">
            <a href="/"><img id="logo" src="./../images/logo/cinema-logo-v5.png" alt="" /></a>
            <div className="cover">
                <div className="form-wrapper">
                    <form onSubmit={handleSubmit}>
                        <p className="form-header">Đăng nhập</p>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" value={email}
                                onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Mật khẩu" value={password}
                                onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label">Ghi nhớ tôi</label>
                        </div>
                        <button type="submit" className="btn form-control">Đăng nhập</button>

                        <div className="mt-5 mb-3 register">
                            <label className="form-label">Bạn mới sử dụng T-Cinema?</label>
                            <a href="/register"> Đăng ký ngay.</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;