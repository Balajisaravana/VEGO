import React, { useState, FormEvent } from "react";
// import Back from "../common/back/Back";
import "./contact.scss";

const ContactUI: React.FC = () => {
 

  const [result, setResult] = useState<string>("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Pending");
    
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "829bc151-8cb9-4061-8379-1c3df70e71be");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      
      const data = await response.json();
      
      if (data.success) {
        setResult("Success");
        event.currentTarget.reset();
      } else {
        setResult("Error");
        console.error("Error", data);
      }
    } catch (error) {
      setResult("Error");
      console.error("Submission failed", error);
    }
  };

  return (
    <>
      {/* <Back title='Contact us' /> */}
      <section className='contacts '>
     
          
          <div className='right row'>

         
        
            <div className='items grid2'>
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
            </div>

            <form onSubmit={onSubmit}>
              <div className='flexSB'>
                <input type='text' placeholder='Name' name='name' required />
                <input type='email' placeholder='Email' name='email' required />
              </div>
              <textarea cols={30} rows={10} name='message' placeholder='Message'></textarea>
              
              {/* Submit button logic can be added here */}
            </form>
          </div>
        
      </section>
    </>
  );
};

export default ContactUI;
