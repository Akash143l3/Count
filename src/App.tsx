import { useState } from "react";
function App() {
  let [counter, setCounter] = useState(0);

  return (
    <>
      <div className='h-80 w-80'>
        <button className='border-4'onClick={() => setCounter(counter + 1)}>count : {counter}</button></div>
    </>
  )
}

export default App
