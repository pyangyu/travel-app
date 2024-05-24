// src/components/Fireworks.js
import React, { useState, useRef, useEffect } from "react";
import anime from "animejs";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import "../Fireworks.css";

const Fireworks = () => {
  const animation = useRef(null);

  const handleClick = () => {
    animation.current.play();
  };

  useEffect(() => {
    animation.current = anime.timeline({
      direction: "alternate",
      duration: 1500,
      autoplay: false,
      easing: "easeInOutSine",
    });

    animation.current.add(
      {
        targets: `.dots li`,
        translateX: anime.stagger(10, {
          grid: [3, 10],
          from: "center",
          axis: "x",
        }),
        translateY: anime.stagger(10, {
          grid: [3, 10],
          from: "center",
          axis: "y",
        }),
        rotateZ: anime.stagger([0, 90], {
          grid: [3, 10],
          from: "center",
          axis: "x",
        }),
        delay: anime.stagger(200, {
          grid: [3, 10],
          from: "center",
        }),
        easing: "easeInOutQuad",
      },
      Math.random() * 1500
    );
  }, []);

  return (
    <Container>
      <div className="player">
        {Array.from(Array(3)).map((_, i) => (
          <ul className="dots" key={i}>
            {Array.from(Array(10)).map((_, j) => (
              <li
                style={{
                  backgroundColor: "#bf6d20",
                  height: "10px",
                  width: "10px",
                }}
                key={j}
              />
            ))}
          </ul>
        ))}
        <Button variant="contained" color="success" onClick={handleClick}>
          Play
        </Button>
      </div>
    </Container>
  );
};

export default Fireworks;
