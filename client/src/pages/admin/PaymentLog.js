import AdminHeader from "../../components/AdminHeader";
import VerticalNavbar from "../../components/VerticalNavbar";

export default function PaymentLog() {
    return (
        <div className="payment-log">
            <AdminHeader />
            <main>
                <VerticalNavbar />
                <article>
                    <h1>This is a payment log</h1>
                </article>
            </main>
        </div>
    );
}