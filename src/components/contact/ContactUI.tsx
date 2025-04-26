import React from "react";
// import Back from "../common/back/Back";
import "./contact.scss";
import MultiStepForm from "../layouts/MultiForm";

const ContactUI: React.FC = () => {
 

  return (
    <>
      {/* <Back title='Contact us' /> */}
      <section className='contacts '>
     
     
          <div className='right row'>

          {/* <h1>Contact us</h1> */}
        
            {/* <div className='items grid2'>
            <h1>Contact us</h1>
            <p className="para">We're open for any suggestion or just to have a chat</p>
              <div className='box'>
                <h4 className="subheader">ADDRESS:</h4>
                <p className="para">No: 48, SingaiPrakash Garden Periyar Nagar, Kundrathur Chennai 600069</p>
              </div>
              <div className='box'>
                <h4 className="subheader">EMAIL:</h4>
                <p className="para">admin@alphaprohire.com</p>
              </div>
              <div className='box'>
                <h4 className="subheader">PHONE:</h4>
                <p className="para">+91 73059 25157</p>
              </div>
            </div> */}
            <MultiStepForm/>
          </div>
        
      </section>
    </>
  );
};

export default ContactUI;
