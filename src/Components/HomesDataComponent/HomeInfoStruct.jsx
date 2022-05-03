import React from 'react';
import Ratings from './Ratings';
import { useSelector } from 'react-redux';
import Spinner from '../unitComponent/Spinner';
import "../../Styles/HomeInfoStyles.css"
const HomeInfoStruct = ({ product }) => {

   const HomeInfo = product.state;

   return (


      <div className="homeinfo-maincontainer"> <div className="homeinfo-imgcontainer">
         <img className="homeinfo-img1" src={'data:image/jpeg;base64,' + HomeInfo.img.data.toString('base64')} />
         <div className="homeinfo-subimgcontainer">
            <img className="homeinfo-img" src={'data:image/jpeg;base64,' + HomeInfo.img.data.toString('base64')} />
            <img className="homeinfo-img" src={'data:image/jpeg;base64,' + HomeInfo.img.data.toString('base64')} />
            <img className="homeinfo-img" src={'data:image/jpeg;base64,' + HomeInfo.img.data.toString('base64')} />
            <img className="homeinfo-img" src={'data:image/jpeg;base64,' + HomeInfo.img.data.toString('base64')} />
         </div>

      </div>

         <div className="homeinfo-personalInfo">
            <div>
               <p id="host-name">{HomeInfo.name}</p>
               <h4>{HomeInfo.landmrk}{HomeInfo.state, HomeInfo.city}</h4>
               <p>pinCode -{HomeInfo.pincode}</p>
            </div>
            <div>
               <p>Price : 5000$ per night</p>
               <button id="booking-btn">Book</button>
            </div>
         </div>
         <div>

            <div>
               <label> Choose Check-in date </label>
               <input type="date" />
               <label>Choose Check-out date</label>
               <input type="date" />
               <label>Number of Guests</label>
               <input type="text" />
            </div>
            <button>Contact Owner</button>
         </div>

         <div>
            <div>
               <p>Amenities</p>
               <span>wifi</span>
               <span> Parking</span>
               <span>Plug-ins</span>
               <span>Security</span>
            </div>
            <div>
               <h1>House Rules</h1>
               <div>
                  <span>Notice period 15 Days</span>
                  <span>Gate Closing Time </span>
                  <span>Gaming Not Allowed</span>
               </div>
            </div>
            <div>
               <div>
                  <h1>Reasons to stay in our house Mannat</h1>
                  <ul>
                     <li>You get authentic home cooked food</li>
                     <li>You don't feel like a loner in a new place.</li>
                     <li>You will get to know about our culture and tradition.</li>
                     <li>Our house also has seaview.</li>
                  </ul>
               </div>
            </div>
         </div >
      </div>

   );

}

export default HomeInfoStruct;