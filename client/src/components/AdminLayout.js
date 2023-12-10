import AdminHeader from "./AdminHeader";
import './../styles/admin-layout.css';
import VerticalNavbar from "./VerticalNavbar";

export default function AdminLayout(props) {
    return (
        <div className="admin-layout">
            <AdminHeader />
            <main>
                <VerticalNavbar />
                {props.children}
            </main>
            
        </div>
    );
}