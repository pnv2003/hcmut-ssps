import AdminHeader from "../../components/AdminHeader";
import VerticalNavbar from "../../components/VerticalNavbar";

export default function PrintingLogAll() {
    return (
        <div className="printing-log-all">
            <AdminHeader />
            <main>
                <VerticalNavbar />
                <article>
                    <h1>This is a printing log</h1>
                </article>
            </main>
        </div>
    );
}