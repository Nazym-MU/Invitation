import React, { useEffect, useState } from 'react';

function CountdownTimer({ birthday }) {
    const [timeLeft, setTimeLeft] = useState({
        days: '',
        hours: '',
        minutes: '',
        seconds: ''
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            const targetDate = new Date(birthday);
            const difference = targetDate - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [birthday]);

    return (
        <div className="countdown">
            <h2>Countdown to My Birthday!</h2>
            <div className="time-units">
                {Object.entries(timeLeft).map(([unit, value]) => (
                    <div key={unit} className="time-unit">
                        <div className="number-box">{value}</div>
                        <span className="time-label">{unit}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CountdownTimer;
