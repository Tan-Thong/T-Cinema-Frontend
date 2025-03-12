import React from "react";
import "./payment.css";

const Payment: React.FC = () => {
    return (
        <div className="payment-wrapper">
            <p className="payment-title">Thanh toán</p>
            <div className="payment">
                <div className="payment-method fill">
                    <img src="/images/logo/logo-vnpay.svg" alt="" />
                </div>
                <div className="checkbox">
                    <input type="checkbox" id="myCheckbox" name="myCheckbox" />
                    <label htmlFor="myCheckbox">Chấp nhận điều khoản và thanh toán</label>
                </div>
            </div>
        </div>
    );
};

export default Payment;
