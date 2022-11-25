import ScheduleTable from "../../components/bus-schedule/ScheduleTable";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

const Schedule = () => {
	return (
		<Paper elevation={3} sx={{ p: 3 }}>
			<Typography pb={3} variant="h4">
				Schedule
			</Typography>
			<ScheduleTable />
		</Paper>
	);
};

export default Schedule;
