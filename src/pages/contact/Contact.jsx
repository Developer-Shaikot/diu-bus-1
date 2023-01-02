import React from "react";
import "./Contact.css";
import Footer from "../../components/footer/Footer";
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
import StartIcon from "@mui/icons-material/Start";

const Contact = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);

	return (
		<div className="d-board text-light ">
			<h3 className="D-title p-4 mb-5">
				Contact With Us
				<StartIcon className="m-2" />
			</h3>
			<form className="dashboard-form" onSubmit={handleSubmit(onSubmit)}>
				<div className="form-group mt-3">
					<label className="label" htmlFor="">
						NAME
					</label>
					<input className="form-control mt-1" placeholder="Name" {...register("name")} />

					{errors.message && <span className="error">Name is required</span>}
					<br />
				</div>

				<div className="form-group">
					<label className="label" htmlFor="">
						PHONE NUMBER
					</label>
					<input
						className="form-control mt-1"
						placeholder="phone no...."
						{...register("number")}
					/>

					{errors.message && <span className="error">Phone Number is required</span>}
					<br />
				</div>

				<div className="form-group">
					<label className="label" htmlFor="">
						Email
					</label>
					<input
						className="form-control mt-1"
						placeholder="email"
						{...register("email")}
					/>

					{errors.message && <span className="error">Email is required</span>}
					<br />
				</div>

				<div className="form-group">
					<label className="label">Messege</label>
					<textarea
						className="form-control mt-1"
						placeholder="Write your content...."
						{...register("content", { required: true })}
						name="content"
						rows="5"
						id="content"
					/>

					{errors.message && <span className="error">Description is required</span>}
					<br />
				</div>
				<Button type="submit" variant="outline-light" size="lg mt-3 mb-2" className="db">
					Submit
				</Button>
				<p style={{ color: "red" }}>{watch.error}</p>
				{watch.success && <p style={{ color: "green" }}>User successfully</p>}
			</form>
			<br />
			<br />
			<Footer />
			<br />
		</div>
	);
};

export default Contact;
