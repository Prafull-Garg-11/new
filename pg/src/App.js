import './App.css';
import Demo from "./components/demo.jsx"
function App() {
  let text="prafull"
  return (
      <div>
      <h1>Building React Application</h1>
      <Demo name={text} age="21" email="gargprafull55@gmail.com"></Demo> 
      </div>
  );
}
//data flow parent->>to child componenet

export default App;