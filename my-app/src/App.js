import css from './App.module.css';
import Sidebar from "./components/Sidebar";
import StatefulGreeting from './components/StatefulGreeting';

function App() {
  return (
   
    <div className={css.App}>
        <StatefulGreeting greeting="I'm a top Gee!" name="Caleb"/>
      {/* < div className = {css.sidebar} /> */}

      <Sidebar />
      
    </div>
  );
}

export default App;