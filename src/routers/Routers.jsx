import { Routes, Route } from "react-router-dom";
// import DashboardRoute from "../pages/dashboard/DashboardRoute";
import Home from "./../pages/home/Home";
import Dashboard from "./../pages/dashboard/Dashboard";
import Inbox from "./../pages/inbox/Inbox";
import Error from "./../pages/error/Error";

const Routers = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/dashboard" element={<Dashboard />} />
			<Route path="/inbox" element={<Inbox />} />
			<Route path="*" element={<Error />} />
			{/* <Route path="/dashboard" element={< DashboardRoute/>} /> */}
		</Routes>
	);
};

export default Routers;
