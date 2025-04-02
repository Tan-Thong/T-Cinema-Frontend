import "./loginpage.css"

function LoginPage() {
    return (
        <div className="login-content">
            <a href="/"><img id="logo" src="./../images/logo/cinema-logo-v5.png" alt="" /></a>
            <div className="cover">
                <div className="form-wrapper">
                    <form>
                        <p className="form-header">Đăng nhập</p>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Mật khẩu" />
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