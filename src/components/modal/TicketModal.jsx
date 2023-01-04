import { Box, Modal } from "@mui/material";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 550,
	bgcolor: "background.paper",
	border: "2px solid #f1adc0",
	boxShadow: 24,
	p: 8,
	borderRadius: 3,
};

const TicketModal = ({ open, handleClose, parentModal, children }) => {
	return (
		<Modal open={open} onClose={handleClose}>
			{/* <span onClick={parentModal}>x</span> */}
			<Box sx={style}>{children}</Box>
		</Modal>
	);
};

export default TicketModal;
