import {React, useState} from "react";
import style from "./Contact.module.css";
import BulletPointLine from "../../components/BulletPointLine/BulletPointLine";
import contact from "../../assets/images/contact.svg";
import whatsapp from "../../assets/icons/whatsapp.svg";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import twitter from "../../assets/icons/twitter.svg";
import youtube from "../../assets/icons/youtube.svg";
import linkedin from "../../assets/icons/linkedin.svg";


const Contact = () =>{

    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [mail, setMail] = useState("");
    const [message, setMessage] = useState("");


    const [nameError, setNameError] = useState('');
    const [numberError, setNumberError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');


    const validateEmail = (email) => {
        // Basic email validation regex pattern
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };
    
      const validateNumber = (number) => {
        // Simple number validation to allow only digits
        const numberRegex = /^[0-9]+$/;
        return numberRegex.test(number);
      };

    const HandleClick = () =>{

         // Reset errors
        setNameError('');
        setNumberError('');
        setEmailError('');
        setMessageError('');

        // Validate fields
    let isValid = true;

    if (!name) {
      setNameError('* Name is required.');
      isValid = false;
    }

    if (!number) {
      setNumberError('* Number is required.');
      isValid = false;
    } else if (!validateNumber(number)) {
      setNumberError('* Please enter a valid number.');
      isValid = false;
    }

    if (!mail) {
      setEmailError('* Email is required.');
      isValid = false;
    } else if (!validateEmail(mail)) {
      setEmailError('* Please enter a valid email address.');
      isValid = false;
    }

    if (!message) {
      setMessageError('* Message is required.');
      isValid = false;
    }

    if (!isValid) {
      return;
    }
        
        
        const whatsappMessage  = 
        `Name : ${name}%0A
         Number : ${number}%A0
         Mail : ${mail}%0A
         Message : ${message}%0A
        `
        const whatsappURL = `https://wa.me/919894488655?text=${whatsappMessage}`;


        window.open(whatsappURL, "_blank");


        // Reset form fields after sending message
        setName('');
        setNumber('');
        setMail('');
        setMessage('');

    }

    return(
        <div id="contact" className={style.contact_container}>
            <div className={style.title}>
                <div> <span>G</span>ET &nbsp; <span>I</span>N &nbsp; <span>T</span>OUCH</div>
            </div>
            <BulletPointLine className={style.bullet}/>
            <div className={style.contact_content}>
                <div className={style.contact_content_left}>
                    <div>
                        Get in touch with INNOVERZON and let’s create something extraordinary together. 
                        We’re ready to turn your vision into an innovative product that exceeds expectations.
                    </div>
                    <div className={style.contact_form}>
                        <div className={style.title}>
                            <div> <span>F</span>OR &nbsp; <span>E</span>NQUIRY </div>
                        </div>
                        <div className={style.form_container}>
                            <input  className={`${style.form_style} ${style.name_form}`}
                             type="text" 
                             placeholder="Your Name" 
                             value={name} 
                             onChange={(e) => {setName(e.target.value)}}/>
                            {nameError && <div className={style.error}>{nameError}</div>}
                        </div>
                        <div className={style.form_container}>
                            <input className={`${style.form_style} ${style.number_form}`} 
                            type="number" 
                            placeholder="Your Number"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}/>
                            {numberError && <div className={style.error}>{numberError}</div>}
                        </div>
                        <div className={style.form_container}>
                            <input className={`${style.form_style} ${style.mail_form}`} 
                            type="email" 
                            placeholder="Your Mail"
                            value={mail}
                            onChange={(e) => setMail(e.target.value)}/>
                            {emailError && <div className={style.error}>{emailError}</div>}
                        </div>
                        <div className={style.form_container}>
                            <input className={`${style.form_style} ${style.message_form}`} 
                            type="text" 
                            placeholder="Your Message"
                            value={message}
                            onChange={(e)=>setMessage(e.target.value)}/>
                            {messageError && <div className={style.error}>{messageError}</div>}
                        </div>
                    </div>
                    <div className={style.send_button} onClick={HandleClick}>
                        Send Message
                    </div>
                </div>
                <div className={style.contact_content_right}>
                    <img src={contact} alt="Contact Illustration"/>
                </div>
            </div>
            <div className={style.footer}>
                <div className={style.copyright}>
                    Copyright © 2024 INNOVERZON All rights reserved. 
                </div>
                <div className={style.contact_details}>
                    <div className={style.mail}>
                        <a href={`mailto:innoverzon2024@gmail.com`} target="_blank"  rel="noopener noreferrer">innoverzon2024@gmail.com</a>
                    </div>
                    <div className={style.uderline}></div>
                    <div className={style.contact_no}>
                        <a href={`tel:${9894488655}`} target="_blank"  rel="noopener noreferrer" > +91 9894488655</a> &nbsp; / &nbsp; <a href={`tel:${7397014485}`} target="_blank"  rel="noopener noreferrer">+91 7397014485</a>
                    </div>
                    <div className={style.socialmedia}>
                        <div>
                            <a href={`https://wa.me/${9894488655}`} target="_blank" rel="noopener noreferrer" >
                                <img src={whatsapp}  alt="Whatsapp"/>
                            </a>
                        </div>
                        <div>
                            <a href="https://www.facebook.com/share/Nwxc3tp8vYwPvggh/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer" >
                                <img src={facebook}  alt="Facebook"/>
                            </a>
                        </div>
                        <div>
                            <a href="https://www.instagram.com/innoverzon?igsh=NDVuOWxkOTlwdmV4" target="_blank" rel="noopener noreferrer" >
                                <img src={instagram}  alt="Instagram"/>
                            </a>
                        </div>
                        <div>
                            <a >
                                <img src={twitter}  alt="Twitter/X"/>
                            </a>
                        </div>
                        <div>
                            <a  >
                                <img src={youtube}  alt="Youtube"/>
                            </a>
                        </div>
                        <div>
                            <a  >
                                <img src={linkedin}  alt="LinkedIn"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;