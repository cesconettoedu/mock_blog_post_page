import { useState, useEffect } from "react";

function UserComments({id}) {

  
  const [userCommAll, setUserCommAll] = useState([]);



  async function getComm() {
    let commentId = id
    console.log(commentId);
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
      getComm();

    }, []);

  


  return (
    <div>
      <label>EMAIL: User Email</label>
      <br></br>
      <label>NAME: User Name</label>
      <br></br>
      <label>BODY: User Bady</label>
    </div>
  );
}

export default UserComments;
