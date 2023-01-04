import "./Contact.css";
import { useEffect, useState } from "react";
import { useForm } from "@formspree/react";
import Footer from "../../components/footer/Footer";
import { Button } from "react-bootstrap";
import StartIcon from "@mui/icons-material/Start";
import MessageSent from "./MessageSent";

const initialInfo = { name: "", email: "", phone: "", message: "" };
const Contact = () => {
	const [state, handleSubmit] = useForm("mjvzdevq");
	const [inputs, setInputs] = useState({ ...initialInfo, event: null });
	const [errors, setErrors] = useState(initialInfo);

	const validationFields = () => {
		inputs.name
			? setErrors((prev) => ({ ...prev, name: "" }))
			: setErrors((prev) => ({ ...prev, name: "Name is required" }));
		inputs.email
			? setErrors((prev) => ({ ...prev, email: "" }))
			: setErrors((prev) => ({ ...prev, email: "Email is required" }));
		inputs.phone
			? setErrors((prev) => ({ ...prev, phone: "" }))
			: setErrors((prev) => ({ ...prev, phone: "Phone no. is required" }));
		inputs.message
			? setErrors((prev) => ({ ...prev, message: "" }))
			: setErrors((prev) => ({ ...prev, message: "Message is required" }));
	};

	useEffect(() => {
		let errorConditions = !errors.name && !errors.email && !errors.phone && !errors.message;
		let inputConditions = inputs.name && inputs.email && inputs.phone && inputs.message;
		if (errorConditions && inputConditions) {
			handleSubmit(inputs.event)
				.then(() => console.log("Message sent"))
				.catch((err) => console.error("Mail not sent- " + err.message));
		}
		// eslint-disable-next-line
	}, [errors]);

	const manageSubmit = (e) => {
		e.preventDefault();
		setInputs((prev) => ({ ...prev, event: e }));
		validationFields();
	};

	const handleOnChange = (e) => {
		setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	if (state.succeeded) {
		return <MessageSent />;
	}

	return (
		<div className="d-board text-light ">
			<h3 className="D-title p-4 mb-5">
				Contact With Us
				<StartIcon className="m-2" />
			</h3>
			<form className="dashboard-form" onSubmit={manageSubmit}>
				<div className="form-group mt-3">
					<label className="label" htmlFor="">
						NAME
					</label>
					<input
						name="name"
						onChange={handleOnChange}
						className="form-control mt-1"
						placeholder="Name"
					/>

					{errors.name && <span className="error">{errors.name}</span>}
					<br />
				</div>

				<div className="form-group">
					<label className="label" htmlFor="">
						PHONE NUMBER
					</label>
					<input
						name="phone"
						onChange={handleOnChange}
						className="form-control mt-1"
						placeholder="phone no."
					/>

					{errors.phone && <span className="error">{errors.phone}</span>}
					<br />
				</div>

				<div className="form-group">
					<label className="label" htmlFor="">
						Email
					</label>
					<input
						name="email"
						onChange={handleOnChange}
						className="form-control mt-1"
						placeholder="email"
					/>

					{errors.email && <span className="error">{errors.email}</span>}
					<br />
				</div>

				<div className="form-group">
					<label className="label">Message</label>
					<textarea
						className="form-control mt-1"
						placeholder="Write your content...."
						name="message"
						rows="5"
						id="content"
						onChange={handleOnChange}
					></textarea>

					{errors.message && <span className="error">{errors.message}</span>}
					<br />
				</div>
				<Button type="submit" variant="outline-light" size="lg mt-3 mb-2" className="db">
					Submit
				</Button>
			</form>
			<br />
			<br />
			<Footer />
			<br />
		</div>
	);
};

export default Contact;
