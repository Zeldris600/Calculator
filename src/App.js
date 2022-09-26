import logo from "./logo.svg";
import "./App.css";
import Wrapper from "./components/wrapper";
import Header from "./components/header";
import Screen from "./screen";
import Buttonbox from "./components/buttonbox";
import Button from "./components/button";
const btnVal = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

function App() { 
  return (
    <div className="App">
      <Wrapper>
      <Header /><br />
        <Screen />
        
        <Buttonbox>
          {btnVal.flat().map((btn, i) => (/* Get array element and set as value to button component */
            <Button value={btn} key={i} />
          ))}
        </Buttonbox>
      </Wrapper>
    </div>
  );
}

export default App;
