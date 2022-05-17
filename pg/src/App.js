import './App.css';
import Demo from "./components/demo.jsx"
function App() {
  const fakedata=[
    {
      "color": "red",
      "value": "#f00"
    },
    {
      "color": "green",
      "value": "#0f0"
    },
    {
      "color": "blue",
      "value": "#00f"
    },
    {
      "color": "cyan",
      "value": "#0ff"
    },
    {
      "color": "magenta",
      "value": "#f0f"
    },
    {
      "color": "yellow",
      "value": "#ff0"
    },
    {
      "color": "black",
      "value": "#000"
    }
  ]; 
  let text="prafull"
  return (
      <div>
      <h1>Building React Application</h1>
      <Demo data={fakedata} name={text} age="21" email="gargprafull55@gmail.com"></Demo> 
      </div>
  );
}
//data flow parent->>to child componenet
export default App;