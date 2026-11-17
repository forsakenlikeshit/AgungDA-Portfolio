import Typewriter from 'typewriter-effect';

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          'Full Stack Developer',
          'Game Modder',
          'Automation Engineer',
          'PC & Systems Technician',
          'Freelancer',
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
