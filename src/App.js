import React,{useState} from "react";
import data from './data.js';
import Tours from './components/Tours.js';

const App = () => {
  const [tours, setTours] = useState(data);
  function handleRemovetour(id){
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  if(tours.length === 0)
  {
    return(
      <div className="refresh"> 
        <h2>No Tours Left</h2>
        <button className="btn-white" onClick={ () => setTours(data) }> REFRESH </button>
      </div>
    );
  }

  return(
    <div>
      <Tours tours={tours} handleRemovetour={handleRemovetour}></Tours>
    </div>
  );
};

export default App;
