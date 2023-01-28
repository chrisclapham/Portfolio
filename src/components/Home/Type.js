import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software developer",
          "Security engineer",
          "Cyber professional",
          "Raspberry Pi tinkerer",
          "Coffee drinker",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
