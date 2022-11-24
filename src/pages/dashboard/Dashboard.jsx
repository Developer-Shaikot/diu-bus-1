import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';


const Dashboard = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [imageURL, setImageURL] = useState(null);


    const onSubmit = data => {
        const blogData = {
            title: data.title,
            date: data.date,
            content: data.content,

        }
        const url = `https://floating-headland-38925.herokuapp.com/addPosts`

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blogData)
        })
            // .then(res => console.log('server side responded', res))
            .then(
                function (response) {
                    //console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
                    alert('Post uploaded successfully!');
                    window.location.reload();
                },
                function (error) {
                    //console.log("FAILED", error);
                    alert('FAILED!' + error);
                }
            );
    };

    const handleImageUpload = event => {
        // console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'c0ff542b5a259d5519c36fdec59edd85');
        imageData.append('image', event.target.files[0])
    
        axios.post('https://api.imgbb.com/1/upload',
          imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            // console.log(error);
          });
    
    
      }

    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="">BUS NAME</label>
                <input className="form-control mt-1" placeholder="Bus Name"{...register("name")} />

                {errors.message && <span className="error">Bus Name is required</span>}
                <br />

                <label htmlFor="">BUS NUMBER</label>
                <input className="form-control mt-1" placeholder="bus no...." {...register("number")} />

                {errors.message && <span className="error">Bus Number is required</span>}
                <br />

                <input className="form-control mt-3" onChange={handleImageUpload} type="file" />

                {errors.message && <span className="error">File is required</span>}
                <br />

                <label htmlFor="">MAPS URL</label>
                <input className="form-control mt-1" placeholder="url" {...register("url")} />

                {errors.message && <span className="error">Bus Number is required</span>}
                <br />


                <label className="pra">ABOUT BUS</label>
                <textarea placeholder="Write your content...." {...register("content", { required: true })} className="form-control" name='content' rows="5" id="content" />

                {errors.message && <span className="error">Description is required</span>}
                <br />



                <input className="btn-dark m-3" type="submit" />

                <p style={{ color: 'red' }}>{watch.error}</p>
                {watch.success && <p style={{ color: 'green' }}>User successfully</p>}

            </form>

        </div>
    );
};

export default Dashboard;