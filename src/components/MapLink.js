import React from 'react';
import { useSpring, animated } from 'react-spring';

function MapLink({ href, src, alt, logoText }) {
    const randomRotation = Math.random() * 30 - 15;
    const randomVerticalStart = Math.random() * 40 - 20;
    const randomVerticalEnd = Math.random() * 40 - 20;

    const animProps = useSpring({
        from: { transform: `translateY(${randomVerticalStart}px) rotate(0deg)` },
        to: async (next, cancel) => {
            while (true) {
                await next({ transform: `translateY(${randomVerticalEnd}px) rotate(${randomRotation}deg)` });
                await next({ transform: `translateY(${randomVerticalStart}px) rotate(0deg)` });
            }
        },
        config: { duration: 3000 },
        reset: true
    });

    return (
        <animated.div className="map-link" style={animProps}>
            <a href={href} target="_blank" rel="noopener noreferrer">
                <button aria-label={logoText}>
                    <img src={src} alt={alt} style={{ width: '100%', height: 'auto' }} />
                    <span>{logoText}</span>
                </button>
            </a>
        </animated.div>
    );
}

export default MapLink;
