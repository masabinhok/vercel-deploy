// src/App.jsx

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import Button from "./Button";




const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%);
  font-family: "Arial", sans-serif;
  overflow: hidden; /* Prevents hearts from causing overflow scrolling */
  position: relative; /* Ensure relative positioning for absolute elements */
`;

const Heart = styled(motion.span)`
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
`;

const TextContainer = styled.div`
  text-align: center;
  margin-top: 40px;
`;

const Text = styled(motion.h1)`
  font-size: 3rem;
  color: #fff;
`;

const generateHeart = (id, color, left) => (
  <Heart
    key={id}
    color={color}
    style={{
      left,
    }}
    animate={{
      top: "-100vh",
      rotate: Math.random() * 360,
      opacity: [1, 0],
    }}
    transition={{
      duration: Math.random() * 2 + 1,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }}
  />
  
);

const App = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const colors = ["#ff6b6b", "#ffb6b9", "#ffa0a0", "#ffcccc", "#ff9999"];
    const newHearts = [];

    for (let i = 0; i < 30; i++) {
      const size = Math.random() * 20 + 10;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const left = `${Math.random() * 100}%`;

      newHearts.push(generateHeart(i, color, left));
    }

    setHearts(newHearts);
  }, []);

  function handleMouseMove(event) {
    const posX = event.clientX;
    const posY = event.clientY;
    const size = Math.random() * 50;
    const spanEl = document.createElement("span");
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";
    spanEl.style.left = posX + "px";
    spanEl.style.top = posY + "px";
    spanEl.style.position = "absolute";
    spanEl.style.backgroundColor = "#ff6b6b"; // or any color you prefer
    spanEl.style.borderRadius = "50%";
    document.body.appendChild(spanEl);
    setTimeout(() => {
      spanEl.remove();
    }, 3000);
  }

  return (
    <Container onMouseMove={handleMouseMove}>
      <TextContainer>
        <Text
        style={{
          color: "#ff6b6b",
        }}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Thankyou for the wishes!!!
        </Text>
        <Text
        style={{
          color: "#ff6b6b",
        }}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          You're the finest gift from afar, bringing joy to my heart today.
        </Text>
      </TextContainer>
      <Button />
      {hearts.map((heart) => heart)}
    </Container>
  );
};

export default App;
