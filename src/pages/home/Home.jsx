import "./Home.css";
import Carousel from "react-bootstrap/Carousel";
import firstImg from "../../assets/images/diu-trans.jpg";
import secondImg from "./../../assets/images/diu-transport-2.jpg";
import thirdImg from "./../../assets/images/slider-3.png";
import { Box, Paper } from "@mui/material";
import CarouselCaption from "../../components/carousel/CarouselCaption";

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
				<Carousel variant="light">
					<Carousel.Item className="overlay-container">
						<img className="caruselImg" src={firstImg} alt="First slide" />
						<Box className="overlay">
							{/* carousel caption component */}
							<CarouselCaption
								heading="TRACK THE BUS"
								description="Could not able to track the DIU-BUS is a major issue to our students and teachers at this point."
							/>
						</Box>
					</Carousel.Item>
					<Carousel.Item className="overlay-container">
						<img className="caruselImg" src={secondImg} alt="second slide" />
						<Box className="overlay">
							{/* carousel caption component */}
							<CarouselCaption
								heading="TRACK THE BUS"
								description="See the location of buses and also watch the bus fare as well."
							/>
						</Box>
					</Carousel.Item>
					<Carousel.Item className="overlay-container">
						<img className="caruselImg" src={thirdImg} alt="third slide" />
						<Box className="overlay">
							{/* carousel caption component */}
							<CarouselCaption
								heading="TRACK THE BUS"
								description="Information of bus driver & helper as wll as user can see the transport schedule."
							/>
						</Box>
					</Carousel.Item>
				</Carousel>
			</div>
		</Paper>
	);
};

export default Home;
