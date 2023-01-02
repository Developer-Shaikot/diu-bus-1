import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	Box,
	TableRow,
} from "@mui/material";
import { useState } from "react";
import ScheduleTableRow from "./ScheduleTableRow";
import scheduleInformation from "../../components/JSON/Bus.json";
import {
	AccessTime,
	DirectionsBus,
	LocationSearching,
	MyLocation,
	Paid,
} from "@mui/icons-material";

const ScheduleTable = ({ type, reasonFor }) => {
	const [busesInfo, setBusesInfo] = useState([]);

	const filterData = (filterBy) => {
		// filtering data according to the bus_type and route
		let filteredData = [];

		if (isEmployeeOrOtherType()) {
			filteredData = scheduleInformation?.filter((singleBus) => {
				return singleBus.bus_type === filterBy;
			});
		} else {
			filteredData = scheduleInformation?.filter((singleBus) => {
				return singleBus.route === filterBy;
			});
		}

		return filteredData;
	};

	const isEmployeeOrOtherType = () => {
		if (type === "Employee Bus" || type === "Other Bus") return true;
	};

	useState(() => {
		setBusesInfo(filterData(type));
	}, []);

	return (
		<TableContainer
			component={Paper}
			sx={{
				overflow: "auto",
				p: 2,
				borderRadius: 4,
				height: "100%",
				boxShadow:
					"0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)",
			}}
		>
			<Box sx={{ overflow: "auto" }}>
				<Box
					sx={{
						width: "100%",
						display: "table",
						tableLayout: "fixed",
					}}
				>
					<Table
						className="responsive-table"
						sx={{
							minWidth: 250,
							borderRadius: 4,
							// boxShadow:
							// 	"0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)",
						}}
						aria-label="schedule-table"
					>
						<TableHead>
							<TableRow>
								<TableCell
									colSpan={
										type === "Employee Bus" || type === "Other Bus" ? 4 : 2
									}
									align="center"
								>
									<strong>{type}</strong>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell component="th" scope="row">
									<strong
										style={{
											display: "flex",
											alignItems: "center",
											gap: "3px",
											placeContent: "start",
										}}
									>
										<DirectionsBus fontSize="small" /> Bus Name
									</strong>
								</TableCell>
								{(type === "Employee Bus" || type === "Other Bus") && (
									<>
										<TableCell component="th" scope="row" align="left">
											<strong
												style={{
													display: "flex",
													alignItems: "center",
													gap: "3px",
													placeContent: "start",
												}}
											>
												<LocationSearching fontSize="small" />
												From
											</strong>
										</TableCell>
										<TableCell component="th" scope="row" align="left">
											<strong
												style={{
													display: "flex",
													alignItems: "center",
													gap: "3px",
													placeContent: "start",
												}}
											>
												<MyLocation fontSize="small" />
												To
											</strong>
										</TableCell>
									</>
								)}
								<TableCell component="th" scope="row" align="right">
									<strong
										style={{
											display: "flex",
											alignItems: "center",
											gap: "3px",
											placeContent: "end",
										}}
									>
										{reasonFor === "Schedule" ? (
											<>
												<AccessTime fontSize="small" /> Time
											</>
										) : (
											<>
												<Paid fontSize="small" /> Fare
											</>
										)}
									</strong>
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{busesInfo?.map((rowInfo, i) => (
								<ScheduleTableRow
									key={i}
									rowInfo={rowInfo}
									type={type}
									reasonFor={reasonFor}
								/>
							))}
						</TableBody>
					</Table>
				</Box>
			</Box>
		</TableContainer>
	);
};

export default ScheduleTable;
