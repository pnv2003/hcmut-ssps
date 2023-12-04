import { useState } from "react";
import StudentHeader from "../../components/StudentHeader";
import "./../../styles/buy-page.css";
import Button from "../../components/Button";
import sendRequest from "../../helpers/request";
import { useAuth } from "../../contexts/AuthContext";

export default function BuyPage() {
    const { getUser } = useAuth();

    const unitPrice = 0;
    sendRequest(
        'GET',
        '/config',
        ''
    ).then((response) => {
        console.log(response);
    }); 

    const payments = [
        {
            studentId: 1,
            numOfPages: 10,
            unitPrice: 10,
            paymentMethod: 'Momo'
        }
    ]

    // form control
    const [paymentMethod, setPaymentMethod] = useState("bank");
    const [numPages, setNumPages] = useState(0);

    const [cardNumber, setCardNumber] = useState(null);
    const [expirationDate, setExpirationDate] = useState(null);
    const [cvv, setCvv] = useState(null);

    function handlePaymentMethod(e) {
        setPaymentMethod(e.target.value);

        if (e.target.id === 'bank') {
            setPaymentMethod('bank');
        } else if (e.target.id === 'momo') {
            setPaymentMethod('momo');
        } else if (e.target.id === 'bkpay') {
            setPaymentMethod('bkpay');
        }
    }

    function sendPaymentRequest() {
        sendRequest(
            'POST',
            '/buy-pages',
            {
                studentId: getUser(),
                numOfPages: 100,
                unitPrice: 10,
                paymentMethod: paymentMethod
            }
        )
    }

    const bankForm = (
        <div className="bank-form">
            <div>
                <label htmlFor="card-number">Số thẻ</label>
                <input type="text" name="card-number" id="card-number" 
                    value={cardNumber}
                    onChange={(e) => {
                        setCardNumber(e.target.value);
                    }}/>
            </div>
            <div>
                <label htmlFor="expire">Hạn thẻ</label>
                <input type="date" name="expire" id="expire" 
                    value={expirationDate}
                    onChange={(e) => {
                        setExpirationDate(e.target.value);
                    }}/>
            </div>
            <div>
                <label htmlFor="cvv">CVV</label>
                <input type="number" name="cvv" id="cvv" 
                    value={cvv}
                    onChange={(e) => {
                        setCvv(e.target.value);
                    }}/>
            </div>
        </div>
    );

    return (
        <div className="buy-page">
            <StudentHeader />
            <main>
                <div className="payment-info">
                    <h2>Thanh toán</h2>

                    <div className="payment-form">
                        <ul className="payment-method" onChange={handlePaymentMethod}>
                            <li>
                                <input type="radio" name="payment-method" id="bank"
                                    checked={paymentMethod === 'bank'}
                                />
                                <label htmlFor="bank">Thẻ ngân hàng</label>
                            </li>
                            <li>
                                <input type="radio" name="payment-method" id="momo"
                                    checked={paymentMethod === 'momo'}
                                />
                                <label htmlFor="momo">Momo</label>
                            </li>
                            <li>
                                <input type="radio" name="payment-method" id="bkpay"
                                    checked={paymentMethod === 'bkpay'}
                                />
                                <label htmlFor="bkpay">BKPay</label>
                            </li>
                        </ul>
                        {(paymentMethod === 'bank') ? bankForm : ''}
                    </div>
                </div>
                <div className="num-pages">
                    <h2>Thông tin trang mua</h2>
                    <div>
                        <label htmlFor="num-pages">Số trang muốn mua thêm</label>
                        <input type="number" name="num-pages" id="num-pages" 
                            value={numPages}
                            onChange={(e) => {
                                setNumPages(e.target.value);
                            }}/>
                    </div>


                    <table className="unit-price">
                        <tr>
                            <td>Tổng số trang</td>
                            <td>500</td>
                        </tr>
                        <tr>
                            <td>Đơn giá</td>
                            <td>200</td>
                        </tr>
                    </table>

                    <table className="total-cost">
                        <tr>
                            <td>Tổng cộng</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="figure">10000 VND</td>
                        </tr>
                    </table>

                    <Button text="Thanh toán" link="#" action={sendPaymentRequest} />
                </div>
            </main>

        </div>
    );
}