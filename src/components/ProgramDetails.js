import React from "react";
import { animated, useSpring } from "react-spring";
import { useScroll } from "react-use-gesture";

const clamp = (value, clampAt = 30) => {
  if (value > 0) {
    return value > clampAt ? clampAt : value;
  } else {
    return value < -clampAt ? -clampAt : value;
  }
};

const programDetails = [
    { src: `${process.env.PUBLIC_URL}/images/palau.jpeg`, text: "Palau and cake by my grandma" },
    { src: `${process.env.PUBLIC_URL}/images/movie-night.png`, text: "Huge screen for movies" },
    { src: `${process.env.PUBLIC_URL}/images/board-games.jpeg`, text: "Board games" },
    { src: `${process.env.PUBLIC_URL}/images/computer-games.jpg`, text: "Computer games + this cool racing wheel lol" },
    { src: `${process.env.PUBLIC_URL}/images/lego.png`, text: "Lego Friends" },
    { src: `${process.env.PUBLIC_URL}/images/air.png`, text: "Fresh Kaskelen air" }
  ];
  

const ProgramDetails = () => {
  const [style, set] = useSpring(() => ({
    transform: "perspective(500px) rotateY(0deg)"
  }));

  const bind = useScroll(event => {
    set({
      transform: `perspective(500px) rotateY(${
        event.scrolling ? clamp(event.delta[0]) : 0
      }deg)`
    });
  });

  return (
    <div className="program">
      <h2>What's in the plan (i'm gonna list the most random things):</h2>
      <div className="container" {...bind()}>
        {programDetails.map(item => (
          <animated.div
            key={item.src}
            className="card"
            style={{
              ...style,
              backgroundImage: `url(${item.src})`
            }}
          >
            <span className="card-text">{item.text}</span>
          </animated.div>
        ))}
      </div>
      <p>But the most important thing is to spend a great time together and chat!!</p>
    </div>
  );
};

export default ProgramDetails;
