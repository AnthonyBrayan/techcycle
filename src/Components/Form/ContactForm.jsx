import React from 'react';
import '../Form/Contact.css';

const ContactForm = () => {
  return (
  <>
    <div className="container">
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
            Hola si tienes dudas y quieres informacion contactanos y te lo resolveremos sin problema...
          </p>

          <div className="info">
            <div className="information">
              <img src="img/bx-map.svg" className="icon" alt="" />
              <p>Paseo de la castellana,35 Madrid, CP:28046</p>
            </div>
            <div className="information">
              <img src="img/bx-envelope.svg" className="icon" alt="" />
              <p>2023.Sense.2023@gmail.com</p>
            </div>
            <div className="information">
              <img src="img/bx-phone.svg" className="icon" alt="" />
              <p>911-234-567</p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form className="input-container" action="https://formspree.io/f/xlekoppw" method="POST">
            <h3 className="title">Contacto</h3>
            <div className="input-container">
              <input type="text" name="name" className="input" placeholder="Username" required />
              <label htmlFor=""></label>
            </div>

            <div className="input-container">
              <input type="email" name="email" className="input" placeholder="aaaaaaaaaa@gmail.com" required />
              <label htmlFor=""></label>
              <span>Correo</span>
            </div>

            <div className="input-container">
              <input type="tel" name="phone" className="input" placeholder="+34647852463" required />
              <label htmlFor=""></label>
              <span>Telefono</span>
            </div>

            <div className="input-container textarea">
              <textarea name="message" className="input" placeholder="mensage" required></textarea>
              <label htmlFor=""></label>
              <span>Mensaje</span>
            </div>

            <input type="submit" value="send" className="btn" />
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactForm;