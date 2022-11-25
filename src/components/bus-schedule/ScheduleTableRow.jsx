import { TableCell, TableRow } from "@mui/material";

// bus fares
const fares = [20, 25, 15];

const ScheduleTableRow = ({ rowInfo, type, reasonFor }) => {
	return (
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
				{reasonFor === "Schedule"
					? rowInfo.bus_time
					: fares[Math.floor(Math.random() * 3)] + " tk"}
			</TableCell>
		</TableRow>
	);
};

export default ScheduleTableRow;
