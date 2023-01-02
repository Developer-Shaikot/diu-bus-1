import "./ProfileControler.css";
import { Button } from "react-bootstrap";
import img from "./../../assets/images/Amazing-Profile-Picture-for-Facebook.jpg";
import StartIcon from "@mui/icons-material/Start";

import logo from "./../../assets/images/random.png";
import Footer from "../../components/footer/Footer";

const ProfileControler = () => {
	return (
		<div className=" back ml-2 mt-2">
			<h3 className="p-title p-3">
				Admin Information
				<StartIcon className="m-2" />
			</h3>
			<div className="container">
				<div className="row gap-2">
					<div className="col-md-5 col-sm-12 AboutAlignment">
						<img
							style={{
								width: "250px",
								marginTop: "20px",
								border: "3px solid cyan",
								borderRadius: "1px",
							}}
							src={img}
							alt=""
						/>
					</div>
					<div className="pra col-md-5 col-sm-12 text-light AboutAlignment ml-md-5 mr-md-3">
						<h3>
							Hi, I'm <span className="name"> Akash</span>
						</h3>
						<br />
						<p>
							I am Focused frontend web developer known for designing efficient
							<br /> and easy-to-use interfaces for (Tech)industry’s clients.
						</p>
						<strong style={{ margin: "10px", padding: "5px" }}>
							Full Name : Shaikot Kundu Akash
						</strong>
						<br />
						<strong style={{ margin: "10px", padding: "5px" }}>Age : 22</strong>
						<br />
						<strong style={{ margin: "10px", padding: "5px" }}>
							Nationality : Bangladeshi
						</strong>
						<br />
						<strong style={{ margin: "10px", padding: "5px" }}>
							Language :Bangla,English,Hindi
						</strong>
						<br />
						<strong style={{ margin: "10px", padding: "5px" }}>
							Address :Dhaka, Bangladesh
						</strong>
						<br />
						<strong style={{ margin: "10px", padding: "5px" }}>
							FreeLance : Available
						</strong>
						<br />
						<Button
							type="submit"
							variant="outline-light"
							size="lg mt-3 mb-2"
							className="editbutton"
						>
							Edit
						</Button>
						<br />
					</div>
					<div style={{ marginTop: "40px" }} className="col-md-12">
						<br />
						<h5 className="pra ">
							<span style={{ marginLeft: "5%", color: "powderblue" }}> M</span>
							<span style={{ color: "limegreen" }}>ER</span>
							<span style={{ color: "powderblue" }}>N</span> -
							<span style={{ marginLeft: "5%", color: "rgb(32, 216, 161) " }}>S</span>
							<span style={{ color: "gray" }}>TACK</span> -{" "}
							<span style={{ marginLeft: "5%", color: "powderblue" }}> DEV</span>
							<span style={{ color: "rgb(32, 216, 161) " }}>E</span>
							<span style={{ color: "gray" }}>LOP</span>
							<span style={{ color: "limegreen" }}>ER</span>
						</h5>
						<br />
						{[1, 2, 3].map((key) => (
							<img
								key={key}
								src={logo}
								className="About-logo justify-content-center ml-md-4"
								alt="logo"
							/>
						))}

						<br />
						<br />
						<Footer />
					</div>
				</div>
			</div>
			<br />
		</div>
	);
};

export default ProfileControler;
