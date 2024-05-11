import { useRef } from "react";



export default function Start({ setUsername }) {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value);
  };

  return (
    <div>
      <input className="button-start" type="text" value={name} onChange={handleInputChange} />
    </div>
  );
}