import ScheduleTable from "../../components/bus-schedule/ScheduleTable";
import Paper from "@mui/material/Paper";
import { Chip, Divider, Grid, Typography } from "@mui/material";

const Schedule = ({ reasonFor = "Schedule" }) => {
	return (
		<Paper elevation={3} sx={{ p: 3 }}>
			<Typography pb={3} variant="h4">
				{reasonFor}
			</Typography>
			<Divider textAlign="left" sx={{ mb: 3 }}>
				<Chip label={`Daffodil Transport - ${reasonFor}`} />
			</Divider>
			<Grid container spacing={3}>
				<Grid item xs={12} container spacing={3}>
					<Grid item lg={6} xs={12}>
						<ScheduleTable type="DSC-DHANMONDI" reasonFor={reasonFor} />
					</Grid>
					<Grid item lg={6} xs={12} container spacing={3}>
						<Grid item xs={12}>
							<ScheduleTable type="DSC-UTTARA" reasonFor={reasonFor} />
						</Grid>
						<Grid item xs>
							<ScheduleTable type="DSC-ECB" reasonFor={reasonFor} />
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12} container spacing={3}>
					<Grid item xs={12}>
						<ScheduleTable type="Employee Bus" reasonFor={reasonFor} />
					</Grid>
					<Grid item xs={12} container spacing={3}>
						<Grid item lg={4} md={6} xs={12}>
							<ScheduleTable type="DSC-RIVER GHAT" reasonFor={reasonFor} />
						</Grid>
						<Grid item lg={4} md={6} xs={12}>
							<ScheduleTable type="DSC-TONGI COLLEGE GATE" reasonFor={reasonFor} />
						</Grid>
						<Grid item lg={4} md={12} xs={12}>
							<ScheduleTable type="DSC-BAIPAIL" reasonFor={reasonFor} />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Paper>
	);
};

export default Schedule;
