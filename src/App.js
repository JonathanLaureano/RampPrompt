import "./styles.css";
import { useEffect, useState } from "react";

export default function App({ input }) {

  const [ time, setTime ] = useState(new Date())

  let arrayConditional = Array.isArray(input) === true ? input.map((element) => {
    return <div><h3>{element}</h3></div>}) : <div>{input}</div>

  let localTime = <h2>{time.toLocaleTimeString()}</h2>

  let inputTernary = input ? arrayConditional : localTime

  function refreshTime() {
      setTime(new Date());
  }  

  useEffect(() => {
      const timer = setInterval(refreshTime, 1000);
      return function cleanup() {
        clearInterval(timer);
      };
  }, []);

return (
  <div className="App">
    {inputTernary}
  </div>
);
}