import "./registerpage.css"
import "./../login-page/loginpage.css"
function RegisterPage() {
    return (
        <div className="login-content">
            <a href="/"><img id="logo" src="./../images/logo/cinema-logo-v5.png" alt="" /></a>
            <div className="cover">
                <div className="form-wrapper">
                    <form>
                        <p className="form-header">Đăng ký tài khoản</p>
                        <p className="form-sub-header">Vui lòng điền các thông tin bên dưới</p>
                        <div className="mb-3">
                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="userName" placeholder="Username" />
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Mật khẩu" />
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Nhập lại mật khẩu" />
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