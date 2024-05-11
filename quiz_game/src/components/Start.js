import { useRef,useState } from "react";



export default function Start({ onNameChange }) {
  const [name, setName] = useState(''); 
  const handleInputChange = (event) => { 
    const newName = event.target.value; 
    setName(newName); 
    onNameChange(newName); };
  const inputRef = useRef();

  const handleClick = () => {
   // inputRef.current.value && setUsername(inputRef.current.value);
  };

  return (
    <div className="start">
      <input type="text" value={name} onChange={handleInputChange} />
      
    </div>
  );
}