import React from 'react';
import '../styles/contact.css';

const WHATSAPP_PHONE = "996557119412";

function Contact() {
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${WHATSAPP_PHONE}`;
    window.open(url, "_blank");
  };

  return (
    <div className="contact-page container">
      <h1 className="contact-page__title">Контакты</h1>
      
      <div className="contact-page__content">
        <div className="contact-page__info">
          <div className="contact-page__item">
            <h2 className="contact-page__label">Телефон / WhatsApp</h2>
            <p className="contact-page__value">0557 119 412</p>
          </div>
        </div>

        <div className="contact-page__actions">
          <button 
            className="contact-page__whatsapp-btn"
            onClick={handleWhatsAppClick}
          >
            Написать в WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
