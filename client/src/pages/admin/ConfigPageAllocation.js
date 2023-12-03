import AdminHeader from "../../components/AdminHeader";
import VerticalNavbar from "../../components/VerticalNavbar";

export default function ConfigPageAllocation() {
    return (
        <div className="printer-status">
            <AdminHeader />
            <main>
                <VerticalNavbar />
                <article>
                    <h1>This is a config pagealloc</h1>
                </article>
            </main>
        </div>
    );
}