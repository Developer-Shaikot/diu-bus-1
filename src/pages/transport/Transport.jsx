import "./Transport.css";
import transportInfo from "../../components/JSON/Bus.json";
import BusTransportAccordion from "../../components/bus-transport/BusTransportAccordion";
import { Divider, Paper, Typography } from "@mui/material";
import { TransportContext } from "../../contexts/TransportContext";

const Transport = () => {
	return (
		<Paper elevation={3} sx={{ p: 3 }}>
			<Typography pb={3} variant="h4">
				Transport
			</Typography>
			<Divider sx={{ mb: 2 }} />
			{transportInfo.map((busInfo, i) => (
				<TransportContext.Provider
					key={i}
					value={{
						busName: busInfo.bus_name,
						busImg: busInfo.picture,
						driver: busInfo.driver_name,
						driverContact: busInfo.driver_contact_no,
						contractor: busInfo.Contactor_name,
						contractorContact: busInfo.Contactor_contact_no,
						busNumber: busInfo.bus_number,
						routeUrl: busInfo.url,
					}}
				>
					<BusTransportAccordion />
				</TransportContext.Provider>
			))}
		</Paper>
	);
};

export default Transport;
