import { Close } from "@mui/icons-material";
import { Paper, Typography, Divider, Stack } from "@mui/material";
import { useId } from "react";

const TicketInfo = ({ userInfo, parentModal }) => {
	const id = useId();

	return (
		<Paper elevation={3} sx={{ p: 3 }}>
			<Stack direction="row" justifyContent="space-between">
				<Typography variant="h5" gutterBottom>
					Ticket Information
				</Typography>
				<Close sx={{cursor: "pointer"}} onClick={()=>parentModal()} />
			</Stack>
			<Divider sx={{ mb: 2 }} />
			<Stack gap="5px">
				<Typography>
					<strong>Ticket ID:</strong> {"diu" + id + Date.now()}{" "}
				</Typography>
				<Typography>
					<strong>Seat Number:</strong> A1
				</Typography>
				<Typography>
					<strong>Passenger Name:</strong> {userInfo.name}
				</Typography>
				<Typography>
					<strong>Phone No.:</strong> {userInfo.phone}
				</Typography>
				<Typography>
					<strong>Destination:</strong> {userInfo.destination}
				</Typography>
				<Typography>
					<strong>Price:</strong> {userInfo.price + " tk"}
				</Typography>
			</Stack>
		</Paper>
	);
};

export default TicketInfo;
