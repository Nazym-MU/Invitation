import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTelegram, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function ContactLinks() {
    return (
        <div className="contact-links">
            <h2>Still confused or have questions?</h2>
            <a href="https://instagram.com/nazym_manutd" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} /> Instagram
            </a>
            <a href="https://t.me/zhiyengaliyeva" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTelegram} /> Telegram
            </a>
            <a href="https://api.whatsapp.com/send?phone=16284449597" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
            </a>
            <a href="https://linkedin.com/in/zhiyengaliyeva" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
        </div>
    );
}

export default ContactLinks;
