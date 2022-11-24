import "./Home.css";
import Carousel from "react-bootstrap/Carousel";
import firstImg from "../../assets/images/slider-1.jpg";
import secondImg from "./../../assets/images/CARUSEL-2.png";
import thirdImg from "./../../assets/images/CARUSEL-3.png";
import { Box, Button, Paper, Typography } from "@mui/material";
import StartIcon from "@mui/icons-material/Start";

const Home = () => {
	return (
		<Paper className="bg" elevation={4} sx={{ borderRadius: "20px" }}>
			<div className="home">
				<Carousel variant="dark">
					<Carousel.Item className="overlay-container">
						<img className="caruselImg" src={firstImg} alt="First slide" />
						<Box className="overlay">
							<Carousel.Caption>
								<Typography variant="h3">First slide label</Typography>
								<Typography variant="h5">
									Nulla vitae elit libero, a pharetra augue mollis interdum.
								</Typography>
								<Button
									className="button-glass"
									variant="outlined"
									endIcon={<StartIcon />}
								>
									Get Start
								</Button>
							</Carousel.Caption>
						</Box>
					</Carousel.Item>
					<Carousel.Item>
						<img className="caruselImg" src={secondImg} alt="Second slide" />
						<Carousel.Caption>
							<h5>Second slide label</h5>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							<Button variant="outlined" endIcon={<StartIcon />}>
								Get Start
							</Button>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img className="caruselImg" src={thirdImg} alt="Third slide" />
						<Carousel.Caption>
							<h5>Third slide label</h5>
							<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
							<Button variant="outlined" endIcon={<StartIcon />}>
								Get Start
							</Button>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>
		</Paper>
	);
};

export default Home;
