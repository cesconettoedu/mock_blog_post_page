import { useState, useEffect } from "react";

function UserComments({id, get }) {

  
  const [userCommAll, setUserCommAll] = useState([]);



  async function getComm() {
    let commentId = id

    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${commentId}/comments`,
      { method: "GET" }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const dataComm = await response.json();
    
    setUserCommAll(dataComm);
    console.log(dataComm);

  }

    useEffect(() => {
       if(get == true) {
        getComm(id)
      }

    }, [get]);

  


  return (
    <div>
      {userCommAll.map((comment) => {
          console.log(comment);
          return (
            <div key={comment.id}>
              <label>EMAIL: {comment.email}</label>
              <br></br>
              <label>NAME: {comment.name}</label>
              <br></br>
              <label>BODY: {comment.body}</label>
              <p>-----------------------------------------------------------</p>
            </div>
          );
        })}
    </div>
  );
}

export default UserComments;
