import { ExpandMore } from "@mui/icons-material";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Chip,
	Divider,
	Grid,
	Stack,
	Typography,
	Button,
} from "@mui/material";
import { useContext, useState } from "react";
import { TransportContext } from "../../contexts/TransportContext";
import ModalComponent from "../modal/ModalComponent";
import BusAbout from "./BusAbout";

const BusTransportAccordion = () => {
	const busInfo = useContext(TransportContext);
	const [expandState, setExpandState] = useState(busInfo.busNumber === 1 ? true : false);
	const [modalOpen, setModalOpen] = useState(false);

	const handleClose = () => {
		setModalOpen(false);
	};

	const handleExpand = () => {
		setExpandState((prev) => !prev);
	};

	const preserveAccordionState = () => {
		handleExpand();
		setModalOpen(true);
	};

	return (
		<>
			<Accordion
				elevation={2}
				expanded={expandState}
				TransitionProps={{ unmountOnExit: true }}
			>
				<AccordionSummary
					expandIcon={<ExpandMore />}
					aria-controls="panel1a-content"
					id="panel1a-header"
					onClick={handleExpand}
				>
					<Stack
						justifyContent="space-between"
						direction="row"
						alignItems="center"
						width="100%"
						sx={{
							padding: "1%",
						}}
					>
						<Box>
							<Typography variant="h6">{busInfo.busName}</Typography>
							<Typography variant="body2">Bus No.{busInfo.busNumber}</Typography>
						</Box>
						<Button
							sx={{ height: "33px", borderRadius: "10px" }}
							variant="contained"
							onClick={preserveAccordionState}
						>
							<small>Track The Bus</small>
						</Button>
					</Stack>
				</AccordionSummary>
				<AccordionDetails sx={{ px: 3 }}>
					<Divider textAlign="left" sx={{ mb: 3 }}>
						<Chip label="Basic Information" />
					</Divider>
					<Grid container spacing={3}>
						<Grid item sm={12} md={6}>
							<Box boxShadow={3} p={2} borderRadius={4}>
								<img
									style={{
										width: "100%",
										borderRadius: "7px",
										objectFit: "cover",
									}}
									src={busInfo.busImg}
									alt="diu_bus_img"
								/>
							</Box>
						</Grid>
						<Grid item xs>
							<Box p={2} height="100%" border="1px solid #d9d9d9" borderRadius={4}>
								{/* add bus about table */}
								<BusAbout />
							</Box>
						</Grid>
					</Grid>
					<Divider textAlign="left" sx={{ mt: 7, mb: 3 }}>
						<Chip label="Route Information" />
					</Divider>
					<Box boxShadow={3} p={2} borderRadius={4}>
						<iframe
							style={{ borderRadius: "7px" }}
							width="100%"
							height={500}
							src={busInfo.routeUrl}
							frameBorder="0"
							title={busInfo.busNumber}
						></iframe>
					</Box>
				</AccordionDetails>
			</Accordion>
			{/* modal component */}
			<ModalComponent open={modalOpen} handleClose={handleClose}>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1824.1888607753697!2d90.31750917475618!3d23.876221098675813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c3c274c81d6f%3A0x3206e05b80e7c296!2sDIU%20Transport%20Parking%20-%202!5e0!3m2!1sen!2sbd!4v1669408417096!5m2!1sen!2sbd"
					width="100%"
					height="450"
					style={{ border: 0 }}
					allowFullScreen
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
					title={busInfo.busNumber}
				></iframe>
			</ModalComponent>
		</>
	);
};

export default BusTransportAccordion;
