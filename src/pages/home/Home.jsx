import Sidebar from "../../components/sidebar/Sidebar";
import "./Home.css";
import Carousel from "react-bootstrap/Carousel";
import firstImg from "../../assets/images/caru-1.png";
import secondImg from './../../assets/images/CARUSEL-2.png';
import thirdImg from './../../assets/images/CARUSEL-3.png';
import logo from './../../assets/images/diu-trans.jpg';
import { Button } from "@mui/material";
import StartIcon from '@mui/icons-material/Start';
const Home = () => {
	return (
		<div>
			<div className="bg">
				<div>
					<div >
						<div className="home">
							<Carousel variant="dark">
								<Carousel.Item>
									<img id="caruselImg" src={firstImg} alt="First slide" />
									<Carousel.Caption>
										<h5>First slide label</h5>
										<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
										<Button variant="outlined"
											endIcon={<StartIcon />}>
											Get Start
										</Button>
									</Carousel.Caption>
								</Carousel.Item>
								<Carousel.Item>
									<img id="caruselImg" src={secondImg} alt="Second slide" />
									<Carousel.Caption>
										<h5>Second slide label</h5>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
										<Button variant="outlined"
											endIcon={<StartIcon />}>
											Get Start
										</Button>
									</Carousel.Caption>
								</Carousel.Item>
								<Carousel.Item>
									<img id="caruselImg" src={thirdImg} alt="Third slide" />
									<Carousel.Caption>
										<h5>Third slide label</h5>
										<p>
											Praesent commodo cursus magna, vel scelerisque nisl consectetur.
										</p>
										<Button variant="outlined"
											endIcon={<StartIcon />}>
											Get Start
										</Button>
									</Carousel.Caption>
								</Carousel.Item>
							</Carousel>


						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
