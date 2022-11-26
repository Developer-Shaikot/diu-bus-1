import { styled } from "@mui/material/styles";
import { AppBar, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import { ChevronRight, Inbox, Menu, NotificationsNone } from "@mui/icons-material";
import Profile from "../sidebar/Profile";
import { useLocation } from "react-router-dom";
import SearchBox from "../searchBox/SearchBox";

const drawerWidth = 240;

const AppBarComp = styled(AppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(["width", "margin"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const Navbar = ({ open, handleDrawerOpen }) => {
	const location = useLocation();
	return (
		<AppBarComp
			className="main-nav"
			sx={{
				background: "linear-gradient(305deg, rgba(11,40,120,1) 47%, rgba(10,45,143,1) 75%)",
			}}
			position="fixed"
			open={open}
		>
			<Toolbar>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					onClick={handleDrawerOpen}
					edge="start"
					sx={{
						Color: "white",
						marginRight: 5,
						...(open && { display: "none" }),
					}}
				>
					<Menu />
				</IconButton>
				<Stack
					width="100%"
					direction="row"
					alignItems="center"
					justifyContent="space-between"
				>
					<Typography variant="body2" noWrap component="div">
						APP <ChevronRight fontSize="small" />{" "}
						{location.pathname !== "/"
							? location.pathname.split("/")[1].toLocaleUpperCase()
							: "HOME"}
					</Typography>
					<Stack direction="row" alignItems="center">
						<SearchBox />
						<Stack direction="row" gap={2} px={2}>
							<Inbox />
							<NotificationsNone />
						</Stack>
						<Profile />
					</Stack>
				</Stack>
			</Toolbar>
		</AppBarComp>
	);
};

export default Navbar;
