import { useEffect, useState } from "react";

function Timer() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((atual) => atual + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Tempo: {timer}</h1>
      <button
        onClick={() => {
          if (timer > 0) {
            setTimer(0);
          }
        }}
      >
        Resetar
      </button>
    </div>
  );
}

export default Timer;
