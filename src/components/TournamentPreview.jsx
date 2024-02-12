import { useState, useEffect } from "react";

export default function PageSection({ name, game, participantsCount }) {
  
  const [count, setCount] = useState(participantsCount);

  useEffect(() => {
    // Update the local count when the participantsCount prop changes
    setCount(participantsCount);
  }, [participantsCount]);

  const addParticipant = () => {
    // Increment the local count using the setter function
    setCount(count + 1);
  };

  return (
    <div className="rounded-xl h-[30vh] text-white bg-dark-500 font-roboto-flex p-5">
      <p>{count}</p>
      <h2>{name}</h2>
      <h3>{game}</h3>
      <button className="bg-blue-500 p-2 text-white rounded my-2" onClick={addParticipant}>
        Add new participant
      </button>
    </div>
  );
}
