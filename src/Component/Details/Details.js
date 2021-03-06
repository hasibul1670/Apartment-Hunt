import React from 'react';
import { useParams } from 'react-router-dom';
import './Details.css'
import sub1 from '../../images/sub1.png';
import sub2 from '../../images/sub2.png';
import sub3 from '../../images/sub3.png';
import sub4 from '../../images/sub4.png';

const Details = () => {
    const { name } = useParams();

    return (
        <section id="details">
            <div className="container">
                <h1>this is header</h1>
                <div className="row py-5">
                    <div className="col-md-8">
                        <img src={sub1} alt="" className="w-100" />
                        <div className="d-flex w-100 justify-content-between my-4">
                            <img width="170px" className="mr-3" src={sub1} alt=""/>
                            <img width="170px" className="mr-3" src={sub2} alt=""/>
                            <img width="170px" className="mr-3" src={sub3} alt=""/>
                            <img width="170px" className="mr-3" src={sub4} alt=""/>
                        </div>

                        <div className="d-flex justify-content-between mt-4">
                            <h2><b>Washington Avenue</b></h2>
                            <h3><b>$198</b></h3>
                        </div>
                        
                        <p>300 sq-ft, 3 bedroom, Semi-furnished, Luxurious, South-facing Apartment for Rent in Rangs Malancha, Melbourne.</p>

                        <h4 className="mt-4"><b>Pricing Details -</b></h4>
                        <p>Rent/Month : $550 (negotiable)</p>
                        <p>Service Charge : 8,000/= Tk per month</p>
                        <p>Security Deposit : 3 month's rent</p>
                        <p>Flat Release Policy : 3 months earlier notice required</p>

                        <h4 className="mt-4"><b>Property Details -</b></h4>
                        <p>Address &amp; Area : Rangs Malancha, House #68, Road #6A, Dhanmondi Residential Area</p>
                        <p>Flat Size : 3000 sq-ft</p>
                        <p>Floor : A5 (5th Floor), 6 storied building, South facing unit</p>
                        <p>Room Category : 3 Large Bed Rooms with 3 Verandas, Spacious Drawing, Dining &amp; Family Living Room, Highly Decorated Kitchen with Store Room and Servant room with attached Toilet</p>
                        <p>Facilities : 1 Modern Lift, All Modern Amenities &amp; Semi Furnished, Electricity with full generator, Central Gas Geyser, Car Parking with Driver's Accommodation, Community Conference Hall, Roof top Beautiful Garden and Grassy Ground, Cloth Hanging Facility with CC camera</p>
                    </div>
                    <div className="col-md-4">
                        <form action="" className="bg-light p-4">
                            <input name="name" type="text" placeholder="Name" className="form-control my-3" required />
                            <input name="phone" type="tel" placeholder="Phone" className="form-control my-3" required />
                            <input name="email" type="email" placeholder="Email" className="form-control my-3" required />
                            <textarea name="message" cols="30" rows="5" placeholder="Message" className="form-control my-3" required></textarea>
                            <button className="btn btn-block" type="submit">Request Booking</button>
                        </form>
                    </div>
                </div>
            </div>            
        </section>
    );
};

export default Details;