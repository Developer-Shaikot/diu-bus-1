import { useState } from "react";
import { Button, TableCell, TableRow } from "@mui/material";
import ModalComponent from "../modal/ModalComponent";
import TicketBookingForm from "../ticket-booking/TicketBookingForm";

const ScheduleTableRow = ({ rowInfo, type, reasonFor }) => {
	const [modalOpen, setModalOpen] = useState(false);
	const [fare] = useState(type === "DSC-DHANMONDI" ? 25 : 20);

	const handleClose = () => {
		setModalOpen(false);
	};

	const handleModal = () => {
		setModalOpen(true);
	};

	return (
		<>
			<TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
				<TableCell component="th" scope="row">
					{rowInfo.bus_name}
				</TableCell>
				{(type === "Employee Bus" || type === "Other Bus") && (
					<>
						<TableCell component="th" scope="row">
							{rowInfo.from}
						</TableCell>
						<TableCell component="th" scope="row">
							{rowInfo.to}
						</TableCell>
					</>
				)}

				<TableCell align="right">
					{reasonFor === "Schedule" ? rowInfo.bus_time : fare + " tk"}
				</TableCell>
				{reasonFor === "Bus Fare" && (
					<TableCell align="right">
						<Button
							onClick={handleModal}
							sx={{ fontSize: 12 }}
							size="small"
							variant="contained"
						>
							Buy
						</Button>
					</TableCell>
				)}
			</TableRow>
			<ModalComponent open={modalOpen} handleClose={handleClose}>
				<TicketBookingForm
					destination={
						type === "Employee Bus" || type === "Other Bus"
							? `${rowInfo.from}-${rowInfo.to}`
							: type
					}
					price={fare}
					handleClose={handleClose}
				/>
			</ModalComponent>
		</>
	);
};

export default ScheduleTableRow;
