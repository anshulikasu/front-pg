
import './App.css';
import Header from './Header';
import Sidebar from "./Sidebar";
import Middle from "./Middle";
import Right from "./Right";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app_part">
      <Sidebar />
      <Middle />
      <Right />
      </div>
      

      

    </div>
  );
}

export default App;
