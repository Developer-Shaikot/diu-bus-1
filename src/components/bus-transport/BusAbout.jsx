import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";
import { useContext } from "react";
import { TransportContext } from "../../contexts/TransportContext";

const BusAbout = () => {
	const busInfo = useContext(TransportContext);

	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 150, width: "100%" }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell align="left">
							<strong>About</strong>
						</TableCell>
						<TableCell align="right">
							<strong>Details</strong>
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
						<TableCell component="th" scope="row">
							Driver Name
						</TableCell>
						<TableCell align="right">{busInfo.driver}</TableCell>
					</TableRow>
					<TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
						<TableCell component="th" scope="row">
							Driver Contact No.
						</TableCell>
						<TableCell align="right">{busInfo.driverContact}</TableCell>
					</TableRow>
					<TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
						<TableCell component="th" scope="row">
							Contractor Name
						</TableCell>
						<TableCell align="right">{busInfo.contractor}</TableCell>
					</TableRow>
					<TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
						<TableCell component="th" scope="row">
							Contractor Contact No.
						</TableCell>
						<TableCell align="right">{busInfo.contractorContact}</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default BusAbout;
