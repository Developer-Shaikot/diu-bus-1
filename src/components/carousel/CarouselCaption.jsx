import { Button, Typography } from "@mui/material";
import { Carousel } from "react-bootstrap";
import StartIcon from "@mui/icons-material/Start";

const CarouselCaption = ({ heading, description }) => {
	return (
		<Carousel.Caption>
			<Typography className="intro-heading" variant="h2">{heading}</Typography>
			<p className="intro-pera">{description}</p>
			<Button className="button-glass" variant="outlined" endIcon={<StartIcon />}>
				Get Start
			</Button>
		</Carousel.Caption>
	);
};

export default CarouselCaption;
