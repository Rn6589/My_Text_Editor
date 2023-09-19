// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';

function App() {
  return (
<>
<Navbar title="My Text Editor"/>
<div className="container my-5">
  <Textbox heading="Your text here" title="Text To Analyze"/>
</div>
</>  );
}
export default App;
