import React from 'react';
import './ProfileControler.css';
import { Button } from 'react-bootstrap';
import img from './../../assets/images/Amazing-Profile-Picture-for-Facebook.jpg';
import StartIcon from "@mui/icons-material/Start";


import logo from './../../assets/images/random.png';
import Footer from '../../components/footer/Footer';
// import logo1 from './../../images/nodejs.png';
// import logo2 from './../../images/mngo.png';
// import logo4 from './../../images/express.png';

const ProfileControler = () => {
    return (

        <div className=" back ml-2 mt-2">
            <h3 className="p-title p-3">Admin Information<StartIcon className="m-2" /></h3>
            <div className="container row d-flex">
                <div className="col-md-5 AboutAlignment">
                    <img style={{ width: '250px', marginTop: '20px', marginLeft: '15%', border: '3px solid cyan', borderRadius: '1px' }} src={img} alt="" />
                </div>
                <div className="pra col-md-5 text-light AboutAlignment ml-5">
                    <h3>Hi, I'm <span className="name" > Akash</span></h3>
                    <br />
                    <p>
                        I am Focused frontend web developer known for designing efficient<br />  and easy-to-use interfaces for (Tech)industry’s clients.
                    </p>
                    <strong style={{ margin: '10px', padding: '5px' }}>Full Name   : Shaikot Kundu Akash</strong>
                    <br />
                    <strong style={{ margin: '10px', padding: '5px' }}>Age         : 19</strong>
                    <br />
                    <strong style={{ margin: '10px', padding: '5px' }}>Nationality : Bangladeshi</strong>
                    <br />
                    <strong style={{ margin: '10px', padding: '5px' }}>Language    :Bangla,English,Hindi</strong>
                    <br />
                    <strong style={{ margin: '10px', padding: '5px' }}>Address     :Dhaka, Bangladesh</strong>
                    <br />
                    <strong style={{ margin: '10px', padding: '5px' }}>FreeLance   : Available</strong>
                    <br />
                    <Button type="submit" variant="outline-light" size="lg mt-3 mb-2" className="editbutton" >Edit</Button>
                    <br />
                </div >
                <div style={{ marginLeft: '25%', marginRight: '20%', marginTop: '40px' }} className="container col-md-6">
                    <br />
                    <br />
                    <h5 className="pra " ><span style={{ marginLeft: '5%', color: 'powderblue' }} > M</span><span style={{ color: 'limegreen' }}>ER</span><span style={{ color: 'powderblue' }}>N</span> -<span style={{ marginLeft: '5%', color: 'rgb(32, 216, 161) ' }}>S</span><span style={{ color: 'gray' }}>TACK</span> - <span style={{ marginLeft: '5%', color: 'powderblue' }} > DEV</span><span style={{ color: 'rgb(32, 216, 161) ' }}>E</span><span style={{ color: 'gray' }}>LOP</span><span style={{ color: 'limegreen' }}>ER</span></h5>
                    <br />
                    <img src={logo} className="About-logo justify-content-center ml-4" alt="logo" />

                    <img src={logo} className="About-logo  justify-content-center ml-4" alt="" />

                    <img src={logo} className="About-logo  justify-content-center ml-4" alt="" />

                    <br />
                     <Footer/>
                    <br />
                    <br />
                </div>
            </div>
            <br />
            <div>

            </div>
        </div>

    );
};

export default ProfileControler;