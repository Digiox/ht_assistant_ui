import React from 'react';
import Lottie from 'react-lottie';
import typing from '../animations/typing.json'; // Chemin vers votre fichier d'animation

function TypingAnimation() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: typing, // Votre animation importée
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div style={{
        display: "flex"
    }} className="loading-animation">

      <Lottie options={defaultOptions} height={50} width={50} />
    </div>
  );
}

export default TypingAnimation;
