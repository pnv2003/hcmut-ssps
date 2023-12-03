import AdminHeader from "../../components/AdminHeader";
import VerticalNavbar from "../../components/VerticalNavbar";

export default function PrinterStatus() {
    return (
        <div className="printer-status">
            <AdminHeader />
            <main>
                <VerticalNavbar />
                <article>
                    <h1>This is a printer status</h1>
                </article>
            </main>
        </div>
    );
}