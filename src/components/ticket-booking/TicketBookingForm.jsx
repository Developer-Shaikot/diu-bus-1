import { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import TicketInfo from "./TicketInfo";
import TicketModal from "../modal/TicketModal";

const initialInfo = {
	name: "",
	phone: "",
	destination: "",
	price: 0,
};
const TicketBookingForm = ({ destination, price, handleClose }) => {
	const [inputs, setInputs] = useState({ ...initialInfo, destination, price });
	const [ticketModal, setTicketModal] = useState(false);

	const handleOnChange = (e) => {
		setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const ticketModalOpen = () => {
		setTicketModal(true);
	};

	const handleTicketClose = () => {
		setTicketModal(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		ticketModalOpen();
	};

	return (
		<>
			<Typography variant="h5" mb={3}>
				Ticket Booking Form
			</Typography>
			<form onSubmit={handleSubmit}>
				<TextField
					fullWidth
					name="name"
					label="Name"
					size="small"
					required
					sx={{ mb: 3 }}
					value={inputs.name}
					onChange={handleOnChange}
				/>
				<TextField
					fullWidth
					name="phone"
					label="Phone No."
					size="small"
					required
					sx={{ mb: 3 }}
					value={inputs.phone}
					onChange={handleOnChange}
				/>
				<TextField
					fullWidth
					name="destination"
					label="Destination"
					size="small"
					sx={{ mb: 3 }}
					value={inputs.destination}
					InputProps={{
						readOnly: true,
					}}
				/>
				<TextField
					fullWidth
					name="price"
					label="Price"
					size="small"
					sx={{ mb: 3 }}
					value={inputs.price}
					InputProps={{
						readOnly: true,
					}}
				/>
				<Button type="submit" variant="contained">
					Book Ticket
				</Button>
			</form>
			<TicketModal
				open={ticketModal}
				handleClose={handleTicketClose}
				parentModal={handleClose}
			>
				<TicketInfo parentModal={handleClose} userInfo={inputs} />
			</TicketModal>
		</>
	);
};

export default TicketBookingForm;
