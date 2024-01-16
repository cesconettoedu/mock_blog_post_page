import { useState } from "react";
import UserPost from "./components/UserPost";
import "./App.css";

function App() {
  
  const [userNum, setUserNum] = useState(1);
  const [userPost, setUserPost] = useState([]);

  
  // function to handle the form and call getPost to fetch the data
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

    if (userNum > dataPost) {
      alert(`User number ${userNum} is not on the list. `)
    }
    
    setUserPost(dataPost);  
  
  }




  return (
    <div className="App">
      <div className="col-10 col-sm-8 m-4">
        <h2>User Posts List</h2>
        
        <form onSubmit={handleSubmit}>
          <label >Enter user number :</label>
          <div className="m-3">
            <input 
              type="number" 
              min="1"
              className="col-2 col-sm-1 ps-3 input"  
              value={userNum}
              onChange={(e) => setUserNum(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        
        <div className="mt-2">
         {userPost.map(function (data, idx) {
          
           let postNumber = (idx+1)
           return (
            
              <UserPost
                postNumber={postNumber}
                key={data.id}
                id={data.id}
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
