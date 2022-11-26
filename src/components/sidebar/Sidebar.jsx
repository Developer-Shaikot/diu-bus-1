import { styled } from "@mui/material/styles";
import { useState } from "react";
import {
	Box,
	Drawer,
	List,
	CssBaseline,
	Divider,
	IconButton,
	ListItem,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import {
	ChevronLeft,
	DepartureBoard,
	ContactPhone,
	BusAlert,
	AccountBox,
	GridView,
	OtherHousesOutlined,
	CurrencyExchange,
} from "@mui/icons-material";

import { NavLink } from "react-router-dom";

import logo from "../../assets/images/main.png";
import img from "../../assets/images/MainLogo.png";
import "./Sidebar.css";
import Navbar from "../navbar/Navbar";

const drawerWidth = 240;

const openedMixin = (theme) => ({
	width: drawerWidth,
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: "hidden",
});

const closedMixin = (theme) => ({
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: "hidden",
	width: `calc(${theme.spacing(8)} + 1px)`,
});

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-end",
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}));

const DrawerComp = styled(Drawer, { shouldForwardProp: (prop) => prop !== "open" })(
	({ theme, open }) => ({
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: "nowrap",
		boxSizing: "border-box",
		...(open && {
			...openedMixin(theme),
			"& .MuiDrawer-paper": openedMixin(theme),
		}),
		...(!open && {
			...closedMixin(theme),
			"& .MuiDrawer-paper": closedMixin(theme),
		}),
	})
);

const Sidebar = ({ children }) => {
	// const theme = useTheme();
	const [open, setOpen] = useState(true);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			{/*------------- add navbar ----------------*/}
			<Navbar open={open} handleDrawerOpen={handleDrawerOpen} />
			<DrawerComp
				PaperProps={{
					sx: {
						backgroundColor: "#082268",
						background:
							"linear-gradient(25deg, rgba(8,34,104,1) 34%, rgba(0,25,95,1) 94%)",
					},
				}}
				variant="permanent"
				open={open}
			>
				<DrawerHeader className="sidebar-header">
					{open && (
						<img
							style={{
								width: "72%",
								margin: "10% auto",
								overflow: "hidden",
							}}
							src={logo}
							alt="brand_logo"
						/>
					)}
					{/* <span><DirectionsBusIcon fontSize="large" className='icon'></DirectionsBusIcon><span className='BusTitle'>DIU BUS TRACKER</span></span> */}

					<IconButton style={{ color: "white" }} onClick={handleDrawerClose}>
						{open && <ChevronLeft />}
					</IconButton>
				</DrawerHeader>
				<Divider />
				<Box
					sx={{
						width: "100%",
						marginTop: "8px",
						marginBottom: "8px",

						padding: "8%",
					}}
				>
					<img
						style={{ width: "100%", borderRadius: "50%", border: "5px solid #3956a3" }}
						src={img}
						alt=""
					/>
				</Box>
				<Divider />
				<NavLink className={open ? "bar" : "bar shrink"} to="/" end>
					<List>
						<ListItem>
							<ListItemIcon>
								<OtherHousesOutlined className="icon" />
							</ListItemIcon>
							<span className={!open ? "pra-hidden pra mt-2 mb-1" : "pra mt-2 mb-1"}>
								Home
							</span>
							<ListItemText />
						</ListItem>
					</List>
					<Divider />
				</NavLink>
				<NavLink className={open ? "bar" : "bar shrink"} to="/dashboard">
					<List>
						<ListItem>
							<ListItemIcon>
								<GridView className="icon" />
							</ListItemIcon>
							<span className={!open ? "pra-hidden pra mt-2 mb-1" : "pra mt-2 mb-1"}>
								Dashboard
							</span>
							<ListItemText />
						</ListItem>
					</List>

					<Divider />
				</NavLink>
				<NavLink className={open ? "bar" : "bar shrink"} to="/profile">
					<List>
						<ListItem>
							<ListItemIcon>
								<AccountBox className="icon" />
							</ListItemIcon>
							<p className={!open ? "pra-hidden pra mt-2 mb-1" : "pra mt-2 mb-1"}>
								Profile
							</p>
							<ListItemText />
						</ListItem>
					</List>

					<Divider />
				</NavLink>
				<NavLink className={open ? "bar" : "bar shrink"} to="/schedule">
					<List>
						<ListItem>
							<ListItemIcon>
								<DepartureBoard className="icon" />
							</ListItemIcon>
							<p className={!open ? "pra-hidden pra mt-2 mb-1" : "pra mt-2 mb-1"}>
								Schedule
							</p>
							<ListItemText />
						</ListItem>
					</List>

					<Divider />
				</NavLink>
				<NavLink className={open ? "bar" : "bar shrink"} to="/transport">
					<List>
						<ListItem>
							<ListItemIcon>
								<BusAlert className="icon" />
							</ListItemIcon>
							<p className={!open ? "pra-hidden pra mt-2 mb-1" : "pra mt-2 mb-1"}>
								Transport
							</p>
							<ListItemText />
						</ListItem>
					</List>

					<Divider />
				</NavLink>
				{/* <NavLink className={open ? "bar" : "bar shrink"} to="/inbox">
					<List>
						<ListItem>
							<ListItemIcon>
								<AllInbox className="icon" />
							</ListItemIcon>
							<p className={!open ? "pra-hidden pra mt-2 mb-1" : "pra mt-2 mb-1"}>
								Inbox
							</p>
							<ListItemText />
						</ListItem>
					</List>

					<Divider />
				</NavLink> */}
				<NavLink className={open ? "bar" : "bar shrink"} to="/bus-fare">
					<List>
						<ListItem>
							<ListItemIcon>
								<CurrencyExchange className="icon" />
							</ListItemIcon>
							<p className={!open ? "pra-hidden pra mt-2 mb-1" : "pra mt-2 mb-1"}>
								Bus Fare
							</p>
							<ListItemText />
						</ListItem>
					</List>

					<Divider />
				</NavLink>
				<NavLink className={open ? "bar" : "bar shrink"} to="/contact">
					<List>
						<ListItem>
							<ListItemIcon>
								<ContactPhone className="icon" />
							</ListItemIcon>
							<p className={!open ? "pra-hidden pra mt-2 mb-1" : "pra mt-2 mb-1"}>
								Contact
							</p>
							<ListItemText />
						</ListItem>
					</List>

					<Divider />
				</NavLink>
			</DrawerComp>
			<Box component="main" className="main-bg" sx={{ flexGrow: 1, p: 3 }}>
				<DrawerHeader />
				{children}
			</Box>
		</Box>
	);
};

export default Sidebar;
