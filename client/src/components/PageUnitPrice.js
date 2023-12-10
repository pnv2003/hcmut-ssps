import { useEffect, useState } from "react";
import sendRequest, { sendGetRequest } from "../helpers/request";
import "./../styles/page-unit-price.css";
import Button from "./Button";

export default function PageUnitPrice() {
    // TODO get current config
    const [unitPrice, setUnitPrice] = useState(0);

    useEffect(() => {
        sendGetRequest('/admin/config', 'cannot get config list')
            .then((data) => {
                if (data.pageUnitPrice) {
                    setUnitPrice(data.pageUnitPrice);
                } else {
                    setUnitPrice(0);
                }
            });
    }, []);

    function handleSave() {
        sendRequest(
            'POST',
            '/admin/unit-price?price=' + unitPrice,
            '',
            'cannot save page unit price'
        ).then((data) => {

            // assume success
        });
    }

    return (
        <section className="page-unit-price">
            <h3>Đơn giá trang in</h3>
            <div>
                <label htmlFor="unit-price">Đơn giá</label>
                <input type="number" name="unit-price" id="unit-price" 
                    value={unitPrice}
                    onChange={(e) => {
                        setUnitPrice(e.target.value);
                    }}/>
            </div>
            <Button action={handleSave}>
                Lưu
            </Button>
        </section>
    );
}