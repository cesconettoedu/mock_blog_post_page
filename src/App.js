import { useState } from "react";
import UserPost from "./components/UserPost";
import "./App.css";

function App() {
  
  const [userNum, setUserNum] = useState(1);
  const [userPost, setUserPost] = useState([]);

  
  // function to handle the form and start the fetch
  const handleSubmit = (event) => {
    event.preventDefault(); 
    getPosts();
  };


  // function to fetch the user Posts data
  async function getPosts() {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userNum}/posts`,
      { method: "GET" }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const dataPost = await response.json();
    
    setUserPost(dataPost);  
  
  }




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
        
        <div>
         {userPost.map(function (data) {
           return (
             <UserPost
             title={data.title} 
             body={data.body} 
             />
             );
            })}
        </div>
      
      </div>
    </div>
  );
}

export default App;
