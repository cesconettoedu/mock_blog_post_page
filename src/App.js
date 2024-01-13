import { useState } from "react";
import "./App.css";

function App() {
  const [userNum, setUserNum] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  return (
    <div className="App">
      <div className="col-8 m-4">
        <h2>User Posts List</h2>
        
        <form onSubmit={handleSubmit}>
          <label >Enter user number :  </label>
          <input
            type="text"
            value={userNum}
            onChange={(e) => setUserNum(e.target.value)}
          />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

export default App;
