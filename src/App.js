import './App.css';
import Sidebar from './components/Sidebar';
import DashboardView from './components/DashboardView';

function App() {
  return (
    <div className="flex">
      <div className="basis-[12%] h-[100vh]">
        <Sidebar />
      </div>
      <div className="basis-[88%] border">
        <DashboardView />
      </div>
    </div>
  );
}

export default App;
