import "./Transport.css";
import transportInfo from "../../components/JSON/Bus.json";
import BusTransportAccordion from "../../components/bus-transport/BusTransportAccordion";
import { Divider, Paper, Typography } from "@mui/material";

const Transport = () => {
	return (
		<Paper elevation={3} sx={{ p: 3 }}>
			<Typography pb={3} variant="h4">
				Transport
			</Typography>
			<Divider sx={{ mb: 2 }} />
			{transportInfo.map((busInfo) => (
				<BusTransportAccordion
					key={busInfo._id}
					busName={busInfo.bus_name}
					busImg={busInfo.picture}
					about={busInfo.about}
					busNumber={busInfo.bus_number}
					routeUrl={busInfo.url}
				/>
			))}
		</Paper>
	);
};

export default Transport;
