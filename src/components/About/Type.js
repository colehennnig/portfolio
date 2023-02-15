import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          'C Language',
          'React JS',
          'Python',
          'Javascript',
          'Node JS',
          'HTML',
          'Figma',
          'C++ Language',
          'Expo Development',
          'Visual Studio',
          'Firebase',
          'Excel',
          'Tailwind CSS',
          'Postgre SQL',
          'Xcode',
          'Linux',
          'Swift',
          'SkecthUp'
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;