import { useState } from "react";

export default function Start({ onNameChange }) {
  const [name, setName] = useState(''); 
  const handleInputChange = (event) => { 
    const newName = event.target.value; 
    setName(newName); 
    onNameChange(newName); 
  };
  
  return (
    <div>
      <input className="button-start" type="text" value={name} onChange={handleInputChange} />
    </div>
  );
}