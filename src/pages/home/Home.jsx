import "./Home.css";
import Carousel from "react-bootstrap/Carousel";
import firstImg from "../../assets/images/diu-trans.jpg";
import secondImg from "./../../assets/images/CARUSEL-2.png";
import thirdImg from "./../../assets/images/CARUSEL-3.png";
import { Box, Button, Paper, Typography } from "@mui/material";
import StartIcon from "@mui/icons-material/Start";

const Home = () => {
	return (
		<Paper
			className="bg"
			elevation={4}
			sx={{
				borderRadius: "20px",
				height: "calc(100vh - 64px)",
				minHeight: "500px",
			}}
		>
			<div className="home">
				<Carousel variant="light" interval={null}>
					<Carousel.Item className="overlay-container">
						<img className="caruselImg" src={firstImg} alt="First slide" />
						<Box className="overlay">
							<Carousel.Caption>
								<Typography variant="h2">TRACK THE BUS</Typography>
								<br />
								<br />
								<Typography className="intro-pera" variant="h3">
									Could not able to track the DIU-BUS is a major issue to <br /> our students and teachers at this point.
								</Typography>
								<br />
								<br />
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
					<Carousel.Item className="overlay-container">
						<img className="caruselImg" src={firstImg} alt="First slide" />
						<Box className="overlay">
							<Carousel.Caption>
								<Typography variant="h2">TRACK THE BUS</Typography>
								<br />
								<br />
								<Typography className="intro-pera" variant="h3">
									Could not able to track the DIU-BUS is a major issue to <br /> our students and teachers at this point.
								</Typography>
								<br />
								<br />
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
					<Carousel.Item className="overlay-container">
						<img className="caruselImg" src={firstImg} alt="First slide" />
						<Box className="overlay">
							<Carousel.Caption>
								<Typography variant="h2">TRACK THE BUS</Typography>
								<br />
								<br />
								<Typography className="intro-pera" variant="h3">
									Could not able to track the DIU-BUS is a major issue to <br /> our students and teachers at this point.
								</Typography>
								<br />
								<br />
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
				</Carousel>
			</div>
		</Paper>
	);
};

export default Home;
