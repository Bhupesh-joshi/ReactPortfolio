import React from 'react';
import './Contact.css';
import ButtonMailto from '../../Components/ButtonMailto';

const Contact = () => {
  return (
    <>
      <section className="experience active section" id="experience">
        <div className="container">

          <div className="row padd-15">
            <div className="section-title padd-15">
              <h2>Get In Touch</h2>
            </div>
          </div>

          <div className="padd-15 contact-container">
            <div className="container-options">

              <article className='contact-option shadow-dark'>
              <i class="fa-solid fa-envelope"></i>
                <h4>E-mail</h4>
                <h5>bhupeshj237@gmail.com</h5><ButtonMailto label="Write me an E-Mail" mailto="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRrlZZHPWQsHzlbTQKSwPTvPDmxTcqRmqhZdDnNXwQjdXLnmjmNCTvmsTFlDkBcZLHtHNkq" target="_blank">h </ButtonMailto>
              </article>

              <article className='contact-option shadow-dark'>
                <i class="fa-brands fa-whatsapp"></i>
                <h4>WhatsApp</h4>
                <h5>+91 936 809 6478</h5>
                <a href="https://api.whatsapp.com/send?phone=+919368096478" target='_blank' rel="MyEmailLink">Send a message</a>
              </article>

            </div>

            {/* END OF CONTACT Options */}
            
            <form action="https://formsubmit.co/119646cfa08b9062689c6e2c6645b763" target='_blank' method="POST">
              <input className='shadow-dark' type="text" name='Name' placeholder='Your Full Name' required />
              <input className='shadow-dark' type="email" name='Email' placeholder='Your Email' required />
              <textarea className='shadow-dark' name="Message" rows='7' placeholder='Enter Your text here' required > </textarea>
              <button type='submit' className='btn'>Send Message</button>
            </form>
          </div>

        </div>
      </section>
    </>
  )
}

export default Contact
