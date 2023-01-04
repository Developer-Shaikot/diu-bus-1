import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import "./GetValue.css";

const customStyles = {
    content: {
        width: "50%",
        height: "80%",
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        border: "3px solid skyBlue",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};

Modal.setAppElement("#root");

const GetValue = ({ modalIsOpen, mName, price, closeModal, Show, _id }) => {
    const [newMname, setNewMname] = useState(mName);
    // console.log("name:", newMname)
    const [newPrice, setNewPrice] = useState(price);
    // console.log("price:", newPrice)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


   
   

    // console.log("Show", _id);
    const [formData, setFormData] = useState({
        DSLR: "Yes",
        DSL: "No",
        DS: "Yes",
        DL: "No",
    });
    // const { _id } = Show;

    const handleChange = (event) => {
        // console.log(event.target.value);
        let newPrices = 0;
        if (event.target.value === "YES") {
            newPrices = parseFloat(newPrice) + 0;
            setNewPrice(newPrices);
        } else {
            newPrices = newPrice - 2000;
            setNewPrice(newPrices);
        }
        // console.log(newPrices);
    };

    const handleChanges = (event) => {
        // console.log(event.target.value);
        let newPrices = 0;
        if (event.target.value === "No") {
            newPrices = parseFloat(newPrice) + 0;
            setNewPrice(newPrices);
        } else {
            newPrices = newPrice - 4000;
            setNewPrice(newPrices);
        }
        // console.log(newPrices);
    };
    const handleBodyChange = (event) => {
        // console.log(event.target.value);
        let newPrices = 0;
        if (event.target.value === "No") {
            newPrices = parseFloat(newPrice) + 0;
            setNewPrice(newPrices);
        } else {
            newPrices = newPrice - 2500;
            setNewPrice(newPrices);
        }
        // console.log(newPrices);
    };
    const handleLensChange = (event) => {
        // console.log(event.target.value);
        let newPrices = 0;
        if (event.target.value === "Yes") {
            newPrices = parseFloat(newPrice) + 5000;
            setNewPrice(newPrices);
        } else {
            newPrices = newPrice - 1500;
            setNewPrice(newPrices);
        }
        // console.log(newPrices);
    };

    const handlePhoneChange = (event) => {
        let newPrices = 0;
        if (event.target.value === "No") {
            newPrices = parseFloat(newPrice) + 0;
            setNewPrice(newPrices);
        } else {
            newPrices = newPrice - 0;
            setNewPrice(newPrices);
        }
    }

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "2px solid #adb6f1",
        boxShadow: 24,
        p: 3,
        borderRadius: 3,
    };
    


    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                
            >
                <Button onClick={closeModal} variant="outline-danger">
                    Close
                </Button>{" "}
                <div>



                    <div className="container">
                      
                        <br />
                        <br />
                        <div className="orders-container ml-5 mr-5 mt-5">
                            <h6>Thank you so much for taking the time!</h6>

                            <p>Please provide the bellow details</p>

                            {/* onSubmit={handleSubmit(onSubmit)} */}

                            <div>
                                <form>
                                    <label className="db">
                                       Is your pick-up location Dhanmondi?
                                    </label>
                                    <div className="field">
                                        <input
                                            type="radio"
                                            name="DSLR"
                                            value="YES"
                                            onChange={handleChange}
                                            id="dslrYes"
                                        // checked={formData.DSLR === "Yes"}
                                        />
                                        <label for="dslrYes">Yes</label>
                                    </div>
                                    <div className="field">
                                        <input
                                            type="radio"
                                            name="DSLR"
                                            value="No"
                                            onChange={handleChange}
                                            id="dslrNo"
                                        // checked={formData.DL === "No"}
                                        />
                                        <label for="dslrNo">No</label>
                                    </div>
                                    <br />
                                    <label className="db">
                                       Destination point DSC or not?
                                    </label>
                                    <div className="field">
                                        <input
                                            type="radio"
                                            name="DSL"
                                            value="Yes"
                                            onChange={handleChanges}
                                        // checked={formData.DS === "Yes"}
                                        />
                                        <label>Yes</label>
                                    </div>
                                    <div className="field">
                                        <input
                                            type="radio"
                                            name="DSL"
                                            value="No"
                                            onChange={handleChanges}
                                        // checked={formData.DSL === "No"}
                                        />
                                        <label>No</label>
                                    </div>
                                    <br />
                                    <label className="db">
                                        Are you student?
                                    </label>
                                    <div className="field">
                                        <input
                                            type="radio"
                                            name="DS"
                                            value="Yes"
                                            onChange={handleLensChange}
                                        // checked={formData.DS === "Yes"}
                                        />
                                        <label>Yes</label>
                                    </div>
                                    <div className="field">
                                        <input
                                            type="radio"
                                            name="DS"
                                            value="No"
                                            onChange={handleLensChange}
                                        // checked={formData.DSL === "No"}
                                        />
                                        <label>No</label>
                                    </div>
                                    <br />

                                  <label className="db">
                                        Are you Faculty/Stuff?
                                    </label>
                                    <div className="field">
                                        <input
                                            type="radio"
                                            name="DS"
                                            value="Yes"
                                            onChange={handleLensChange}
                                        // checked={formData.DS === "Yes"}
                                        />
                                        <label>Yes</label>
                                    </div>
                                    <div className="field">
                                        <input
                                            type="radio"
                                            name="DS"
                                            value="No"
                                            onChange={handleLensChange}
                                        // checked={formData.DSL === "No"}
                                        />
                                        <label>No</label>
                                    </div>
                                    <br />
                                    <br />
                                    <h6>
                                        <b>
                                            <span className="gtValue">Approximate Price : </span>
                                            <span className="gtPrice"> {25}</span>
                                        </b>
                                    </h6>
                             
                            <div>
                                {/* <input className="btnnn m-3" size="large" type="submit" /> */}
                            </div>
                            <br />
                        </form>
                    </div>
                </div>
        </div>

        </div >

      </Modal >

    </div >
  );
};

export default GetValue;