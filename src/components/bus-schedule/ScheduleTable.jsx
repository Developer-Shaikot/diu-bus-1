import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";

const ScheduleTable = () => {
	return (
		<TableContainer component={Paper} sx={{ p: 2, background: "#0576f0", borderRadius: 4, shadow }}>
			<Table sx={{ minWidth: 650, background: "#f1f5f9" }} aria-label="schedule-table">
				<TableHead>
					<TableRow>
						<TableCell colSpan={2} align="center">
							DSC - Dhanmondi
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell component="th" scope="row">
							Bus Name
						</TableCell>
						<TableCell component="th" scope="row" align="right">
							Time
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
						<TableCell component="th" scope="row">
							Bus 1
						</TableCell>
						<TableCell align="right">04.40 PM</TableCell>
					</TableRow>
					<TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
						<TableCell component="th" scope="row">
							Bus 1
						</TableCell>
						<TableCell align="right">04.40 PM</TableCell>
					</TableRow>
					<TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
						<TableCell component="th" scope="row">
							Bus 1
						</TableCell>
						<TableCell align="right">04.40 PM</TableCell>
					</TableRow>
					<TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
						<TableCell component="th" scope="row">
							Bus 1
						</TableCell>
						<TableCell align="right">04.40 PM</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default ScheduleTable;
