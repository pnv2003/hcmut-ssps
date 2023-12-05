import { useState } from "react";
import sendRequest from "../helpers/request";
import "./../styles/page-unit-price.css";
import Button from "./Button";

export default function PageUnitPrice() {
    // TODO get current config
    const [unitPrice, setUnitPrice] = useState(0);

    function handleSave() {
        sendRequest(
            'POST',
            '/unit-price?price=' + unitPrice,
            ''
        );
    }

    return (
        <section className="page-unit-price">
            <h3>Đơn giá trang in</h3>
            <div>
                <label for="unit-price">Đơn giá</label>
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