import React, { useState } from 'react'
import LogIn from './LogIn';
import '../../Styles/FormStyles.css';

export default function LoginHome() {
  const [userStatus, setUserStatus] = useState("tourist");

  const [btnColor,setBtnColor] =useState({b1:"#0a9111" ,b2:"#ff6701" ,b3:"#ff6701"});

  const TouristToggler = () => {  setBtnColor({b1:"#0a9111"}); setUserStatus("tourist");}
  const OwnerToggler = () =>{ setBtnColor({b2:"#0a9111"}); setUserStatus("owner");}
  const TourGuideToggler = () => {setBtnColor({b3:"#0a9111"});setUserStatus("tourguide");}

  return (
    <>
      <div className="home-wrapper">
        <div className="home-inner-wrapper">
          <button className="home-btns" style={{backgroundColor:btnColor.b1}} onClick={TouristToggler}>
            Tourist
          </button>
          <button className="home-btns" style={{backgroundColor:btnColor.b2}}  onClick={OwnerToggler}>
            Host
          </button>
        </div>
  
      </div>
      <div className="home-wrapper2">
        <div className="home-wrapper3">
       <p id="auth-title">Login As a {userStatus.charAt(0).toUpperCase()+userStatus.slice(1)}</p> 
      </div>
      </div>
      
      
      <LogIn userStatus={userStatus} />
    </>
  )
}
