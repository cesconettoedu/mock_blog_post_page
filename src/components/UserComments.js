import { useState, useEffect } from "react";

function UserComments({ id, fetchComments }) {

  const [userCommAll, setUserCommAll] = useState([]);


  // function to fetch the user Comments data
  async function getComm() {
    let commentId = id;

    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${commentId}/comments`,
      { method: "GET" }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const dataComm = await response.json();
    setUserCommAll(dataComm);
  }


  useEffect(() => {
    if (fetchComments == true) {
      getComm(id);
    }
  }, [fetchComments]);


  return (
    <div>
      {userCommAll.map((comment) => {
        console.log(comment);
        return (
          <div key={comment.id}>
            <label>Name: {comment.name}</label>
            <br></br>
            <label>Email: {comment.email}</label>
            <br></br>
            <label>Comment: {comment.body}</label>
            <p>-----------------------------------------------------------</p>
          </div>
        );
      })}
    </div>
  );
}

export default UserComments;
