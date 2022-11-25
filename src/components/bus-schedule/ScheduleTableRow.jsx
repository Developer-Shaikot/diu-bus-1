import { TableCell, TableRow } from "@mui/material";

const ScheduleTableRow = ({ rowInfo, type }) => {
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
			<TableCell align="right">{rowInfo.bus_time}</TableCell>
		</TableRow>
	);
};

export default ScheduleTableRow;
