import { Routes, Route } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import DashboardRoute from "../pages/dashboard/DashboardRoute";
const Routers = () => {
	return (
		<Routes>
			<Route path="/" element={< Sidebar/>} />
			<Route path="/dashboard" element={< DashboardRoute/>} />
		</Routes>
	);
};

export default Routers;
