import React, { useState } from 'react';
import useScript from '../hooks/useScript';

function RSVPForm() {
    const [hasRegistered, setHasRegistered] = useState(false);
    useScript('https://embed.lu.ma/checkout-button.js');

    const handleRegister = (event) => {
        event.preventDefault();
        setHasRegistered(true);
        setTimeout(() => {
            window.open('https://lu.ma/event/evt-GU3qILsGrRRB4FQ', '_blank');
        }, 0);
    };

    return (
        <form onSubmit={handleRegister} className="rsvp-form">
            <h2 className="rsvp-heading">{hasRegistered ? 'Thank you for registering!' : 'Please register if you can come!'}</h2>
            <button
                type="button"
                className="luma-checkout--button animated-button"
                data-luma-action="checkout"
                data-luma-event-id="evt-GU3qILsGrRRB4FQ"
                onClick={handleRegister}
            >
                Register for the event
            </button>
        </form>
    );
}

export default RSVPForm;
