import { useState } from "react";
import Modal from "./components/modal/modal";

const App = () => {
  const [count, setCount] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  }

  const handleModal = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  return <>
    <div>Main App Count: {count}</div>

    <button style={{ backgroundColor: "red", color: "white" }} onClick={handleIncrement}>+1</button>
    <button style={{ backgroundColor: "royalblue", color: "white" }} onClick={handleModal}>Open/Close the Modal</button>

    {isOpen && 
      <Modal>
        <div>
          <p>Window Count: {count}</p>
          <button style={{ backgroundColor: "red", color: "white" }} onClick={handleIncrement}>+1</button>
          <button style={{ backgroundColor: "royalblue", color: "white" }} onClick={() => setIsOpen(false)}>Close the Modal</button>
        </div>
      </Modal>}
  </>
}

export default App;