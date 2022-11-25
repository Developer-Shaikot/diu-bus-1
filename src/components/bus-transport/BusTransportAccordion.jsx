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


const BusTransportAccordion = ({ busName, busImg, about, busNumber, routeUrl }) => {
	return (
		<Accordion elevation={2}  TransitionProps={{ unmountOnExit: true }}
		>
			<AccordionSummary
				expandIcon={<ExpandMore />}
				aria-controls="panel1a-content"
				id="panel1a-header"
			>
				<Stack justifyContent="space-between"
					direction="row"
					width="100%"
					sx={{
						padding: "1%"
						
					}}>
					<Box>
						<Typography variant="h6">{busName}</Typography>
						<Typography variant="body2">Bus No.{busNumber}</Typography>
					</Box>
					<Button variant="contained">Track The Bus</Button>
				</Stack>
			</AccordionSummary>
			<AccordionDetails sx={{ px: 3 }}>
				<Divider textAlign="left" sx={{ mb: 3 }}>
					<Chip label="Basic Information" />
				</Divider>
				<Grid container spacing={3}>
					<Grid item sm={12} md={5}>
						<Box boxShadow={3} p={2} borderRadius={4}>
							<img
								style={{ width: "100%", borderRadius: "7px", objectFit: "cover" }}
								src={busImg}
								alt="diu_bus_img"
							/>
						</Box>
					</Grid>
					<Grid item xs>
						<Box p={2} height="100%" border="1px solid #d9d9d9" borderRadius={4}>
							<Typography>{about}</Typography>
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
						src={routeUrl}
						frameborder="0"
					></iframe>
				</Box>
			</AccordionDetails>
		</Accordion>
	);
};

export default BusTransportAccordion;
