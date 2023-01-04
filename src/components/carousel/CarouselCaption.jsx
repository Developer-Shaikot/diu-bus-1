import { Button, Typography } from "@mui/material";
import { Carousel } from "react-bootstrap";
import StartIcon from "@mui/icons-material/Start";
import { useNavigate } from "react-router-dom";

const CarouselCaption = ({ heading, description }) => {
	const navigate = useNavigate();

	return (
		<Carousel.Caption>
			<Typography className="intro-heading" variant="h2">
				{heading}
			</Typography>
			<p className="intro-pera">{description}</p>
			<Button
				onClick={() => navigate("/transport")}
				className="button-glass"
				variant="outlined"
				endIcon={<StartIcon />}
			>
				Get Start
			</Button>
		</Carousel.Caption>
	);
};

export default CarouselCaption;
