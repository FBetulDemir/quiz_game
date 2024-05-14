import { useRef, useState } from "react";

export default function Start({ onNameChange }) {
  const [name, setName] = useState("");
  const handleInputChange = (event) => {
    const newName = event.target.value;
    setName(newName);
    onNameChange(newName);
  };

  return (
    <div className="start">
      <input type="text" value={name} onChange={handleInputChange} />
    </div>
  );
}
