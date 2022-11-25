import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";
import { useState } from "react";
import ScheduleTableRow from "./ScheduleTableRow";
import scheduleInformation from "../../components/JSON/Bus.json";

const ScheduleTable = ({ type }) => {
	const [busesInfo, setBusesInfo] = useState([]);

	const filterData = (filterBy) => {
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
				p: 2,
				borderRadius: 4,
				height: "100%",
				boxShadow:
					"0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)",
			}}
		>
			<Table
				sx={{
					minWidth: 250,
					width: "100%",

					borderRadius: 4,
					boxShadow:
						"0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)",
				}}
				aria-label="schedule-table"
			>
				<TableHead>
					<TableRow>
						<TableCell
							colSpan={type === "Employee Bus" || type === "Other Bus" ? 4 : 2}
							align="center"
						>
							{type}
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell component="th" scope="row">
							Bus Name
						</TableCell>
						{(type === "Employee Bus" || type === "Other Bus") && (
							<>
								<TableCell component="th" scope="row" align="left">
									From
								</TableCell>
								<TableCell component="th" scope="row" align="left">
									To
								</TableCell>
							</>
						)}
						<TableCell component="th" scope="row" align="right">
							Time
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{busesInfo?.map((rowInfo, i) => (
						<ScheduleTableRow key={i} rowInfo={rowInfo} type={type} />
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default ScheduleTable;
