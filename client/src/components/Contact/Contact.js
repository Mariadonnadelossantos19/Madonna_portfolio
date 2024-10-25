import React, { useRef, useState } from 'react';
import './Contact.css';
import ContactImage from "../../Image/tact.jpg";
import { TbSend } from "react-icons/tb";
import Fade from 'react-reveal/Fade';
import emailjs from '@emailjs/browser'; // Import emailjs
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm('service_ft43g5p', 'template_eh83x9h', form.current, 'sX8RjEiEXul8TE0H_')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setModalMessage('Message sent successfully!');
          setIsSuccess(true);
          setShowModal(true);
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          setModalMessage('Failed to send message. Please try again.');
          setIsSuccess(false);
          setShowModal(true);
        },
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div className='container contact-section' id='contact'>
      <div className='row'>
        <Fade bottom>
          <div className='col-xl-5 col-lg-5 col-md-5 col-sm-5'>
            <div className='contact-form-image'>
              <img src={ContactImage} alt="Contact" />
            </div>
          </div>
        </Fade>

        <Fade top>
          <div className='col-xl-7 col-lg-7 col-md-7 col-sm-7'>
            <div className='contact-form-design'>
              <div className='text-center'>
                <h5>Contact Me</h5>
              </div>
              <form ref={form} onSubmit={sendEmail}>
                <div className='contact-form'>
                  <label className='form-label'>Name</label>
                  <input type='text' name="user_name" className='form-control'/>
                </div>

                <div className='contact-form'>
                  <label className='form-label'>Email</label>
                  <input type='email' name="user_email" className='form-control'/>
                </div>

                <div className='contact-form'>
  <label className='form-label'>Job types</label>
  <select name="job_type" className='custom-select-tag'>
    <option value="Full-time">Full-time</option>
    <option value="Working Student">Working Student</option>
    <option value="Part-time">Part-time</option>
    <option value="Contact">Contact</option>
  </select>
</div>

                <div className='contact-form'>
                  <label className='form-label'>Message</label>
                  <textarea name="message" rows="4" type='text' className='form-control'/>
                </div>

                <div className='button-submit'>
                  <button type="submit" className="sendButton" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send'}<TbSend size={20}/>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Fade>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            {isSuccess ? (
              <FaCheckCircle size={50} color="#28a745" style={{ marginBottom: '20px' }} />
            ) : (
              <FaTimesCircle size={50} color="#dc3545" style={{ marginBottom: '20px' }} />
            )}
            <h2>{isSuccess ? 'Success!' : 'Error'}</h2>
            <p>{modalMessage}</p>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
