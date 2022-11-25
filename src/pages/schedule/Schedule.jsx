import ScheduleTable from "../../components/bus-schedule/ScheduleTable";
import Paper from "@mui/material/Paper";
import { Chip, Divider, Grid, Typography } from "@mui/material";

const Schedule = () => {
	return (
		<Paper elevation={3} sx={{ p: 3 }}>
			<Typography pb={3} variant="h4">
				Schedule
			</Typography>
			<Divider textAlign="left" sx={{mb: 3}}>
				<Chip label="Daffodil Transport Schedule" />
			</Divider>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Grid item container spacing={3}>
						<Grid item xs={6}>
							<ScheduleTable type="DSC-DHANMONDI" />
						</Grid>
						<Grid item xs container spacing={3}>
							<Grid item xs={12}>
								<ScheduleTable type="DSC-UTTARA" />
							</Grid>
							<Grid item xs>
								<ScheduleTable type="DSC-ECB" />
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12} container spacing={3}>
					<Grid item xs={12}>
						<ScheduleTable type="Employee Bus" />
					</Grid>
					<Grid item container spacing={3}>
						<Grid item xs={4}>
							<ScheduleTable type="DSC-RIVER GHAT" />
						</Grid>
						<Grid item xs={4}>
							<ScheduleTable type="DSC-TONGI COLLEGE GATE" />
						</Grid>
						<Grid item xs={4}>
							<ScheduleTable type="DSC-BAIPAIL" />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Paper>
	);
};

export default Schedule;
