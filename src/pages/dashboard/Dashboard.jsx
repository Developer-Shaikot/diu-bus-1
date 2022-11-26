import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Button } from 'react-bootstrap';
import StartIcon from "@mui/icons-material/Start";
import Footer from "../../components/footer/Footer";


const Dashboard = () => {
    const {
    	register,
    	handleSubmit,
    	watch,
    	formState: { errors },
    } = useForm();

    const [imageURL, setImageURL] = useState(null);

    const onSubmit = (data) => {
        console.info(imageURL);
    	const blogData = {
    		title: data.title,
    		date: data.date,
    		content: data.content,
    	};
    	const url = `https://floating-headland-38925.herokuapp.com/addPosts`;

    	fetch(url, {
    		method: "POST",
    		headers: {
    			"Content-Type": "application/json",
    		},
    		body: JSON.stringify(blogData),
    	})
    		// .then(res => console.log('server side responded', res))
    		.then(
    			function (response) {
    				//console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
    				alert("Post uploaded successfully!");
    				window.location.reload();
    			},
    			function (error) {
    				//console.log("FAILED", error);
    				alert("FAILED!" + error);
    			}
    		);
    };

    const handleImageUpload = (event) => {
    	// console.log(event.target.files[0])
    	const imageData = new FormData();
    	imageData.set("key", "c0ff542b5a259d5519c36fdec59edd85");
    	imageData.append("image", event.target.files[0]);

    	axios
    		.post("https://api.imgbb.com/1/upload", imageData)
    		.then(function (response) {
    			setImageURL(response.data.data.display_url);
    		})
    		.catch(function (error) {
    			// console.log(error);
    		});
    };

    return (
        <div className="d-board text-light ">
            <h3 className="D-title p-5">Bus List<StartIcon className="m-2" /></h3>
            <div>

            </div>
            <h3 className="D-title p-5">Add New Bus Information<StartIcon className="m-2" /></h3>
            <form style={{ marginLeft: '15%', marginRight:'30%' }}  onSubmit={handleSubmit(onSubmit)}>

                <div className="form-group">
                    <label className="label" htmlFor="">BUS NAME</label>
                    <input className="form-control mt-1" placeholder="Bus Name" {...register("name")} />

                    {errors.message && <span className="error">Bus Name is required</span>}
                    <br />
                </div>

                <div className="form-group">
                    <label className="label" htmlFor="">BUS NUMBER</label>
                    <input
                        className="form-control mt-1"
                        placeholder="bus no...."
                        {...register("number")}
                    />

                    {errors.message && <span className="error">Bus Number is required</span>}
                    <br />
                </div>

                <div className="form-group">
                    <label className="label" htmlFor="">BUS IMAGE</label>
                    <input className="form-control mt-3" onChange={handleImageUpload} type="file" />

                    {errors.message && <span className="error">File is required</span>}
                    <br />
                </div>

                <div className="form-group">
                    <label className="label" htmlFor="">MAPS URL</label>
                    <input className="form-control mt-1" placeholder="url" {...register("url")} />

                    {errors.message && <span className="error">Bus Number is required</span>}
                    <br />
                </div>

                <div className="form-group">
                    <label className="label">ABOUT BUS</label>
                    <textarea className="form-control mt-1"
                        placeholder="Write your content...."
                        {...register("content", { required: true })}
                        name="content"
                        rows="5"
                        id="content"
                    />

                    {errors.message && <span className="error">Description is required</span>}
                    <br />
                </div>
                <Button type="submit" variant="outline-light" size="lg mt-3 mb-2" className="db" >Submit</Button>
                <p style={{ color: "red" }}>{watch.error}</p>
                {watch.success && <p style={{ color: "green" }}>User successfully</p>}
            </form>
            <Footer/>
        </div>
    );
};

export default Dashboard;
