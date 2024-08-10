import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="flex">
      <div className="basis-[12%] h-[100vh]">
        <Sidebar />
      </div>
      <div className="basis-[88%] border">2</div>
    </div>
  );
}

export default App;
